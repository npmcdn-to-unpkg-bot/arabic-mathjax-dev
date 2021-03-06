// Stuff, that I've just copied!
MathJax.Hub.Config({
  Arabic: {
    dict: {
      // omarDoesNotKnowIt
      "EKAr": ["ek", 'Text', ['e', 'انتشار،ك']],
      "EspsilonRAr": ["er", 'TeX', ['\\epsilon{}r', '\\fliph{\\epsilon{}r}']],
      "CurrentDensityAr": ["J", 'Symbols', ['J', 'ك.ت']],
      "FillFactorAr": ["FF", 'Symbols', ['FF', 'ع.ت']],
      "OpenCircuitAr": ["oc", 'Symbols', ['oc', 'م']],
      "SpreadCoefficientAr": ["D", 'Symbols', ['D', 'م']],
      "RadiationAr": ["rad", 'Symbols', ['l', 'ع']],
      "TemratureAr": ["Tmpr", 'Symbols', ['T', 'د']],
      "ConcentrationReceiverAtomAr": ["NA", 'Symbols', ['NA', 'ن_ق']],
      "ConcentrationDonorAtomAr": ["ND", 'Symbols', ['ND', 'ن_م']],
      "ConcentrationCarierPureAr": ["nii", 'Symbols', ['ni', 'ن_ك']],
      "DeplationAreaWidthAr": ["Wd", 'Symbols', ['W', 'ل_ن']],
      "ElectronsMotionConstantAr": ["mue", 'TeX', ['\\mu{}e', '\\fliph{\\mu{}e}']],
      "DiffusionElectronsAr": ["diffe", 'Symbols', ['\\text{diff},e', 'ن\\ ك']]
    }
  }
});


// Physics Names
MathJax.Hub.Config({
  Arabic: {
    dict: {
      "AirMassAr": ["AM", 'Text', ['AM', 'كتلة هواء']],
      "ShortCircuitAr": ["sc", 'Symbols', ['sc', 'ق']],
      "PhotovoltaicEnergyAr": ["P", 'Symbols', ['P', 'ط']],
      "INAr": ["inn", 'Symbols', ['in', 'د']],
      "DiffusionLengthAr": ["Ld", 'Symbols', ['L_d', 'ل_ر']],
      "CurrentAr": ["current", 'Symbols', ['I', 'ت']],
      "VoltageAr": ["V", 'Symbols', ['V', 'جـ']]
    }
  }
});


// Physics Constants
MathJax.Hub.Config({
  Arabic: {
    dict: {
      "LightSpeedAr": ["lspeed", 'Text', ['c', 'سرعة الضوء']],
      "PlancksAr": ["Plancks", 'Text', ['\\hbar', 'ثابت بلانك']],
      "BoltzmannsAr": ["Boltzmanns", 'Text', ['k', 'ثابت بولتزمان']],
      "EpsilonZeroAr": ["epsilonzero", 'TeX', ['\\varepsilon_\\zero', '\\fliph{\\varepsilon_\\zero}']]
    }
  }
});


// Chemistry Units
MathJax.Hub.Config({
  Arabic: {
    dict: {
      "PHAr": ["ph", 'Text', ['ph', 'ف']],
      "ElectronAr": ["elctrn", 'Text', ['n', 'الكترون']]
    }
  }
});


// Other Physics Units
MathJax.Hub.Config({
  Arabic: {
    dict: {
      "SecondsAr": ["scnd", 'Text', ['s', 'ث']],
      "HourAr": ["hour", 'Text', ['h', 'ساعة']],
      "DayAr": ["day", 'Text', ['\\text{day}', 'يوم']],
      "YearAr": ["year", 'Text', ['\\text{year}', 'سنة']],
      "AmpAr": ["Amp", 'Text', ['A', 'امبير']],
      "VoltAr": ["volt", 'Text', ['v', 'فولت']],
      "KilvenAr": ["Klvn", 'Text', ['K', 'كلفن']],
      "HoleAr": ["hole", 'Text', ['p', 'ثقب']],
      "WattAr": ["Watt", 'Text', ['W', 'واط']],
      "FaradAr": ["F", 'Text', ['F', 'فاراد']],
      "CentimeterAr": ["cm", 'Text', ['\\text{cm}', 'سم']],
      "GramAr": ["grm", 'Text', ['g', 'غرام']]
    }
  }
});


// Misc
MathJax.Hub.Config({
  Arabic: {
    dict: {
      "MaxAr": ["max", 'Text', ['p', 'اقصى']]
    }
  }
});


// Amplifiers
MathJax.Hub.Config({
  Arabic: {
    dict: {
      "MegaAr": ["Mega", 'Text', ['M', 'ميجا']],
      "NanoAr": ["nano", 'Text', ['n', 'نانو']],
      "GigaAr": ["Giga", 'Text', ['G', 'جيجا']],
      "TeraAr": ["Tera", 'Text', ['T', 'تيرا']],
      "KiloAr": ["kilo", 'Text', ['k', 'كيلو']],
      "MicroAr": ["micro", 'Text', ['\\mu', 'مايكرو']]
    }
  }
});


MathJax.Hub.Config({
  Arabic: {
    identifiersMap: {
      // Math functions
      // Energy
      'E': 'ط',

      // Meter
      'm': 'م',

      // Initial charge
      'q': 'ش'
    }
  }
});

MathJax.Ajax.loadComplete("[Test]/phys1.js");
