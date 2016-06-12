/*!
 * The MIT License
 *
 * Copyright (c) 2015-2016 The Queen Rania Foundation for Education and Development
 *
 * http://www.qrf.org
 * http://www.edraak.org
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
MathJax.Hub.Register.StartupHook("HTML-CSS Jax Require",function(){MathJax.Hub.Config({"HTML-CSS":{styles:{".MathJax .mfliph":{display:"inline-block !important","-moz-transform":"scaleX(-1)","-webkit-transform":"scaleX(-1)","-o-transform":"scaleX(-1)",transform:"scaleX(-1)","-ms-filter":"fliph",filter:"fliph"},".MathJax .mar":{"font-style":"normal !important"},".MathJax .mar > span":{"font-style":"normal !important"}}}})}),MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(){MathJax.Hub.Register.StartupHook("Arabic TeX Ready",function(){var a=MathJax.ElementJax.mml,t=function(t){var r=a[t].prototype.toHTML;a[t].Augment({toHTML:function(){var a=r.apply(this,arguments);if(this.arabicFlipH){var t=document.createElement("span");for(t.className="mfliph","ar"===this.arabicFontLang&&(t.className+=" mar");a.firstChild;)t.appendChild(a.firstChild);a.appendChild(t)}return a}})};["mfrac","mi","mn","mo","mrow","ms","msqrt","msubsup","mroot","mtext"].forEach(t),MathJax.Hub.Register.StartupHook("HTML-CSS mtable Ready",function(){t("mtable"),MathJax.Hub.Startup.signal.Post("Arabic mtable Ready")}),MathJax.Hub.Startup.signal.Post("Arabic Ready")})}),MathJax.Extension.Arabic={version:"1.0.0",config:MathJax.Hub.CombineConfig("Arabic",{dict:{Zero:["zero","Text",["0","\u0635\u0641\u0631"]],Radius:["radius","Text",["r","\u0646\u0642"]],Area:["Area","Text",["A","\u0645"]]},identifiersMap:{a:"\u0623",b:"\u0628",c:"\u062c\u0640",x:"\u0633",y:"\u0635",z:"\u0639",n:"\u0646",f:"\u0642",g:"\u062c\u0640",h:"\u0647\u0640",k:"\u0643",r:"\u0631",t:"\u062a",d:"\u062f",e:"\u0647\u0640",m:"\u0645",l:"\u0644",sin:"\u062c\u0627",cos:"\u062c\u062a\u0627",tan:"\u0638\u0627",cot:"\u0638\u062a\u0627",sec:"\u0642\u0627",csc:"\u0642\u062a\u0627",log:"\u0644\u0648"},numbersMap:{0:"\u0660",1:"\u0661",2:"\u0662",3:"\u0663",4:"\u0664",5:"\u0665",6:"\u0666",7:"\u0667",8:"\u0668",9:"\u0669"},operatorsMap:{",":"\u060c",";":"\u061b",lim:"\u0646\u0647\u0640\u0640\u0627"},isArabicPage:"ar"===document.documentElement.lang}),arabicLanguageRegExp:/([\u0600-\u06FF]+)/g,TeX:function(a,t){return function(r){var n,e=MathJax.InputJax.TeX;n="ar"===this.stack.env.lang?t:a,this.Push(e.Parse(n).mml())}},Text:function(a,t){return MathJax.Extension.Arabic.TeX(a,"\\fliph{\\text{"+t+"}}")},Symbols:function(a,t){var r=t.replace(MathJax.Extension.Arabic.arabicLanguageRegExp,"\\fliph{\\text{$1}}");return MathJax.Extension.Arabic.TeX(a,r)}},MathJax.Hub.Startup.signal.Post("Arabic TeX Startup"),MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var a=MathJax.InputJax.TeX,t=MathJax.Extension.Arabic,r=a.Parse.prototype.mmlToken,n=MathJax.Hub.config.Arabic.dict,e=function(){var a=/[\\^$.*+?()[\]{}|]/g;new RegExp(a.source);return function(t){return t.replace(a,"\\$&")}}(),i=function(a){var t=Object.keys(a).sort(function(a,t){return t.length-a.length});return new RegExp(t.map(e).join("|"),"gi")};a.Definitions.Add({macros:{ar:"HandleArabic",alwaysar:"MarkAsArabic",fliph:"HandleFlipHorizontal",transx:"TranslateTeX",transt:"TranslateText",transs:"TranslateSymbols"}});var o=a.Stack.Item.array,s=o.prototype.clearEnv;o.Augment({clearEnv:function(){var a=this.env.lang;s.apply(this,arguments),a&&(this.env.lang=a)}}),a.Definitions.Add({macros:function(){var a={};return Object.keys(n).forEach(function(t){var r=n[t][0];a[r]=t}),a}()}),a.Parse.Augment(function(){var a={};return Object.keys(n).forEach(function(r){var e=n[r][1],i=n[r][2];a[r]=t[e].apply(null,i)}),a}()),a.Parse.Augment({flipHorizontal:function(a){return a.arabicFlipH=!a.arabicFlipH,a},arabicNumber:function(){var a=/[0-9]/g,t=MathJax.Hub.config.Arabic.numbersMap,r=function(a){return t[a]};return function(t){var n=t.data[0].data[0],e=n.replace(a,r);return e!==n&&(t.data[0].data[0]=e,t.arabicFontLang="ar"),this.flipHorizontal(t)}}(),arabicIdentifier:function(){var a=MathJax.Hub.config.Arabic.identifiersMap,t=i(a),r=function(t){return a[t.toLowerCase()]};return function(a){var n=a.data[0].data[0];if("chars"===a.data[0].type){var e=n.replace(t,r);e!==n&&(a.data[0].data[0]=e,a.arabicFontLang="ar")}return this.flipHorizontal(a)}}(),arabicOperator:function(){var a=MathJax.Hub.config.Arabic.operatorsMap,t=i(a),r=function(t){return a[t]};return function(a){var n=a.data[0].data[0],e=n.replace(t,r);return e!==n&&(a=this.flipHorizontal(a),a.arabicFontLang="ar",a.data[0].data[0]=e),a}}(),_getArgumentMML:function(a){var t=this.ParseArg(a);return t.inferred&&1===t.data.length?t=t.data[0]:delete t.inferred,t},mmlToken:function(a){var t=r.call(this,a);return"ar"===this.stack.env.lang&&this.markArabicToken(t),t},markArabicToken:function(a){return"mn"===a.type?this.arabicNumber(a):"mi"===a.type?this.arabicIdentifier(a):"mo"===a.type?this.arabicOperator(a):a},HandleArabic:function(a){MathJax.Hub.config.Arabic.isArabicPage&&this.MarkAsArabic(a)},TranslateTeX:function(a){var r=this.GetArgument(a),n=this.GetArgument(a),e=t.TeX(r,n);return e.call(this,a)},TranslateText:function(a){var r=this.GetArgument(a),n=this.GetArgument(a),e=t.Text(r,n);return e.call(this,a)},TranslateSymbols:function(a){var r=this.GetArgument(a),n=this.GetArgument(a),e=t.Symbols(r,n);return e.call(this,a)},MarkAsArabic:function(a){var t=this.stack.env.lang;this.stack.env.lang="ar";var r=this._getArgumentMML(a);console.log("originalLang",t),this.stack.env.lang=t,this.Push(this.flipHorizontal(r))},HandleFlipHorizontal:function(a){var t=this._getArgumentMML(a);this.Push(this.flipHorizontal(t))}}),MathJax.Hub.Startup.signal.Post("Arabic TeX Ready")}),MathJax.Ajax.loadComplete("[Contrib]/arabic/arabic.js");