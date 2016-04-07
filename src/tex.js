MathJax.Hub.Register.StartupHook('TeX Jax Ready', function () {
  MathJax.Hub.Register.StartupHook('Arabic TeX Startup', function () {
    var TEX = MathJax.InputJax.TeX;
    var texParseMMLToken = TEX.Parse.prototype.mmlToken;
    var texParseAlignedArray = TEX.Parse.prototype.AlignedArray;
    var dict = MathJax.Hub.config.Arabic.dict;

    var englishNumbersRegExp = /[0-9]/g;

    var escapeRegExp = (function () {
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reHasRegExpChar = new RegExp(reRegExpChar.source);

      return function (string) {
        return (string && reHasRegExpChar.test(string))
          ? string.replace(reRegExpChar, '\\$&')
          : string;
      };
    }());

    var getKeysRegExp = function (map) {
      var keys = Object.keys(map).sort(function (a, b) {
        return b.length - a.length;
      });

      return new RegExp(keys.map(escapeRegExp).join('|'), 'g');
    };

    var identifiersMap = MathJax.Hub.config.Arabic.identifiersMap;
    var identifiersKeysRegExp = getKeysRegExp(identifiersMap);

    var operatorsMap = MathJax.Hub.config.Arabic.operatorsMap;
    var operatorsKeysRegExp = getKeysRegExp(operatorsMap);


    TEX.Definitions.Add({
      macros: {
        'ar': 'HandleArabic',
        'alwaysar': 'MarkAsArabic',
        'fliph': 'HandleFlipHorizontal'
      }
    });


    TEX.Definitions.Add({
      macros: function () {
        var definitions = {};

        Object.keys(dict).forEach(function (key) {
          var texCommand = dict[key][0];
          definitions[texCommand] = key;
        });

        return definitions;
      }()
    });


    TEX.Parse.Augment(function () {
      var parsers = {};

      Object.keys(dict).forEach(function (key) {
        parsers[key] = dict[key][1]; // Parser function
      });

      return parsers;
    }());


    TEX.Parse.Augment({
      flipHorizontal: function (token) {
        token.arabicFlipH = !token.arabicFlipH;
          // Invert the value, because flipping twice means, it is not flipped
        return token;
      },
      arabicNumber: function (token) {
        var numbersMap = MathJax.Hub.config.Arabic.numbersMap;
        var text = token.data[0].data[0];
        var mapped = text.replace(englishNumbersRegExp, function (m) {
          return numbersMap[m];
        });

        if (mapped !== text) {
          token.data[0].data[0] = mapped;
          token.arabicFontLang = 'ar';
        }

        return this.flipHorizontal(token);
      },
      arabicIdentifier: function (token) {
        var text = token.data[0].data[0];

        if ('chars' === token.data[0].type) {
          // English Symbols like X and Y
          var mapped = text.replace(identifiersKeysRegExp, function (m) {
            return identifiersMap[m];
          });

          if (mapped !== text) {
            token.data[0].data[0] = mapped;
            token.arabicFontLang = 'ar';
          }
        }

        return this.flipHorizontal(token);
      },
      arabicOperator: function (token) {
        var text = token.data[0].data[0];
        var mapped = text.replace(operatorsKeysRegExp, function (m) {
          return operatorsMap[m];
        });

        if (mapped !== text) {
          token = this.flipHorizontal(token);
          token.arabicFontLang = 'ar';
          token.data[0].data[0] = mapped;
        }

        return token;
      },
      _getArgumentMML: function (name) {
        //  returns an argument that is a single MathML element
        //  (in an mrow if necessary)
        //
        //  This functions has been copied here from extensions/TeX/HTML.js, to avoid
        //  adding a dependency.
        //
        //  TODO: Consider importing (as a dependency) this from HTML.js instead!
        var arg = this.ParseArg(name);
        if (arg.inferred && arg.data.length === 1) {
          arg = arg.data[0];
        } else {
          delete arg.inferred;
        }

        return arg;
      },
      mmlToken: function (token) {
        // TODO: Check for possible incompatibility with boldsymbol extension
        var parsedToken = texParseMMLToken.call(this, token);

        if ('ar' === this.stack.env.lang) {
          this.markArabicToken(parsedToken);
        }

        return parsedToken;
      },
      markArabicToken: function (token) {
        if (token.arabicFontLang === 'ar') {
          // There's no need to process the token again.
          //
          // This solves a bug in the matrix, when the first element
          // is being process twice.
          //
          // Caveat: I'm not sure why the bug actually happens,
          //         but this definitely solves it.
          return token;
        } else if ('mn' === token.type) {
          return this.arabicNumber(token);
        } else if ('mi' === token.type) {
          return this.arabicIdentifier(token);
        } else if ('mo' === token.type) {
          return this.arabicOperator(token);
        }

        return token;
      },
      AlignedArray: function () {
        // Helper to Arabize the matrices, arrays and piecewise functions.
        var array = texParseAlignedArray.apply(this, arguments);
        var self = this;

        if ('ar' === this.stack.env.lang) {
          var arrayEndTable = array.EndTable;
          array.EndTable = function () {
            var retVal = arrayEndTable.apply(this, arguments);

            // First level, iterate over the rows
            array.table.forEach(function (row, rowIndex) {
              // Second level, iterate over the columns
              row.data.forEach(function (cell, colIndex) {
                // Third level, iterate over the cell content
                cell.data[0].data.map(self.markArabicToken, self);
              });
            });

            return retVal;
          };
        }

        return array;
      },
      HandleArabic: function (name) {
        if (MathJax.Hub.config.Arabic.isArabicPage) {
          this.MarkAsArabic(name);
        }
      },
      MarkAsArabic: function (name) {
        this.stack.env.lang = 'ar';
        var arg = this._getArgumentMML(name);
        this.Push(this.flipHorizontal(arg));
      },
      HandleFlipHorizontal: function (name) {
        var arg = this._getArgumentMML(name);
        this.Push(this.flipHorizontal(arg));
      }
    });

    MathJax.Hub.Startup.signal.Post('Arabic TeX Ready');
  });
});
