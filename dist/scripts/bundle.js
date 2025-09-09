/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/intl-tel-input/build/js/intlTelInput.js":
/*!**************************************************************!*\
  !*** ./node_modules/intl-tel-input/build/js/intlTelInput.js ***!
  \**************************************************************/
/***/ ((module) => {

/*
 * International Telephone Input v18.2.1
 * https://github.com/jackocnr/intl-tel-input.git
 * Licensed under the MIT license
 */
// wrap in UMD
(function (factory) {
  if ( true && module.exports) module.exports = factory();else window.intlTelInput = factory();
})(function (undefined) {
  "use strict";

  return function () {
    // Array of country objects for the flag dropdown.
    // Here is the criteria for the plugin to support a given country/territory
    // - It has an iso2 code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
    // - It has it's own country calling code (it is not a sub-region of another country): https://en.wikipedia.org/wiki/List_of_country_calling_codes
    // - It has a flag in the region-flags project: https://github.com/behdad/region-flags/tree/gh-pages/png
    // - It is supported by libphonenumber (it must be listed on this page): https://github.com/googlei18n/libphonenumber/blob/master/resources/ShortNumberMetadata.xml
    // Each country array has the following information:
    // [
    //    Country name,
    //    iso2 code,
    //    International dial code,
    //    Order (if >1 country with same dial code),
    //    Area codes
    // ]
    var allCountries = [["Afghanistan (‫افغانستان‬‎)", "af", "93"], ["Albania (Shqipëri)", "al", "355"], ["Algeria (‫الجزائر‬‎)", "dz", "213"], ["American Samoa", "as", "1", 5, ["684"]], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1", 6, ["264"]], ["Antigua and Barbuda", "ag", "1", 7, ["268"]], ["Argentina", "ar", "54"], ["Armenia (Հայաստան)", "am", "374"], ["Aruba", "aw", "297"], ["Ascension Island", "ac", "247"], ["Australia", "au", "61", 0], ["Austria (Österreich)", "at", "43"], ["Azerbaijan (Azərbaycan)", "az", "994"], ["Bahamas", "bs", "1", 8, ["242"]], ["Bahrain (‫البحرين‬‎)", "bh", "973"], ["Bangladesh (বাংলাদেশ)", "bd", "880"], ["Barbados", "bb", "1", 9, ["246"]], ["Belarus (Беларусь)", "by", "375"], ["Belgium (België)", "be", "32"], ["Belize", "bz", "501"], ["Benin (Bénin)", "bj", "229"], ["Bermuda", "bm", "1", 10, ["441"]], ["Bhutan (འབྲུག)", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil (Brasil)", "br", "55"], ["British Indian Ocean Territory", "io", "246"], ["British Virgin Islands", "vg", "1", 11, ["284"]], ["Brunei", "bn", "673"], ["Bulgaria (България)", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi (Uburundi)", "bi", "257"], ["Cambodia (កម្ពុជា)", "kh", "855"], ["Cameroon (Cameroun)", "cm", "237"], ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "263", "289", "306", "343", "354", "365", "367", "368", "382", "387", "403", "416", "418", "428", "431", "437", "438", "450", "584", "468", "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613", "639", "647", "672", "683", "705", "709", "742", "753", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde (Kabu Verdi)", "cv", "238"], ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]], ["Cayman Islands", "ky", "1", 12, ["345"]], ["Central African Republic (République centrafricaine)", "cf", "236"], ["Chad (Tchad)", "td", "235"], ["Chile", "cl", "56"], ["China (中国)", "cn", "86"], ["Christmas Island", "cx", "61", 2, ["89164"]], ["Cocos (Keeling) Islands", "cc", "61", 1, ["89162"]], ["Colombia", "co", "57"], ["Comoros (‫جزر القمر‬‎)", "km", "269"], ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"], ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"], ["Cook Islands", "ck", "682"], ["Costa Rica", "cr", "506"], ["Côte d’Ivoire", "ci", "225"], ["Croatia (Hrvatska)", "hr", "385"], ["Cuba", "cu", "53"], ["Curaçao", "cw", "599", 0], ["Cyprus (Κύπρος)", "cy", "357"], ["Czech Republic (Česká republika)", "cz", "420"], ["Denmark (Danmark)", "dk", "45"], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1", 13, ["767"]], ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]], ["Ecuador", "ec", "593"], ["Egypt (‫مصر‬‎)", "eg", "20"], ["El Salvador", "sv", "503"], ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia (Eesti)", "ee", "372"], ["Eswatini", "sz", "268"], ["Ethiopia", "et", "251"], ["Falkland Islands (Islas Malvinas)", "fk", "500"], ["Faroe Islands (Føroyar)", "fo", "298"], ["Fiji", "fj", "679"], ["Finland (Suomi)", "fi", "358", 0], ["France", "fr", "33"], ["French Guiana (Guyane française)", "gf", "594"], ["French Polynesia (Polynésie française)", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia (საქართველო)", "ge", "995"], ["Germany (Deutschland)", "de", "49"], ["Ghana (Gaana)", "gh", "233"], ["Gibraltar", "gi", "350"], ["Greece (Ελλάδα)", "gr", "30"], ["Greenland (Kalaallit Nunaat)", "gl", "299"], ["Grenada", "gd", "1", 14, ["473"]], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1", 15, ["671"]], ["Guatemala", "gt", "502"], ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]], ["Guinea (Guinée)", "gn", "224"], ["Guinea-Bissau (Guiné Bissau)", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong (香港)", "hk", "852"], ["Hungary (Magyarország)", "hu", "36"], ["Iceland (Ísland)", "is", "354"], ["India (भारत)", "in", "91"], ["Indonesia", "id", "62"], ["Iran (‫ایران‬‎)", "ir", "98"], ["Iraq (‫العراق‬‎)", "iq", "964"], ["Ireland", "ie", "353"], ["Isle of Man", "im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]], ["Israel (‫ישראל‬‎)", "il", "972"], ["Italy (Italia)", "it", "39", 0], ["Jamaica", "jm", "1", 4, ["876", "658"]], ["Japan (日本)", "jp", "81"], ["Jersey", "je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]], ["Jordan (‫الأردن‬‎)", "jo", "962"], ["Kazakhstan (Казахстан)", "kz", "7", 1, ["33", "7"]], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kosovo", "xk", "383"], ["Kuwait (‫الكويت‬‎)", "kw", "965"], ["Kyrgyzstan (Кыргызстан)", "kg", "996"], ["Laos (ລາວ)", "la", "856"], ["Latvia (Latvija)", "lv", "371"], ["Lebanon (‫لبنان‬‎)", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya (‫ليبيا‬‎)", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania (Lietuva)", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau (澳門)", "mo", "853"], ["Madagascar (Madagasikara)", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60"], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania (‫موريتانيا‬‎)", "mr", "222"], ["Mauritius (Moris)", "mu", "230"], ["Mayotte", "yt", "262", 1, ["269", "639"]], ["Mexico (México)", "mx", "52"], ["Micronesia", "fm", "691"], ["Moldova (Republica Moldova)", "md", "373"], ["Monaco", "mc", "377"], ["Mongolia (Монгол)", "mn", "976"], ["Montenegro (Crna Gora)", "me", "382"], ["Montserrat", "ms", "1", 16, ["664"]], ["Morocco (‫المغرب‬‎)", "ma", "212", 0], ["Mozambique (Moçambique)", "mz", "258"], ["Myanmar (Burma) (မြန်မာ)", "mm", "95"], ["Namibia (Namibië)", "na", "264"], ["Nauru", "nr", "674"], ["Nepal (नेपाल)", "np", "977"], ["Netherlands (Nederland)", "nl", "31"], ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"], ["New Zealand", "nz", "64"], ["Nicaragua", "ni", "505"], ["Niger (Nijar)", "ne", "227"], ["Nigeria", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Island", "nf", "672"], ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"], ["North Macedonia (Северна Македонија)", "mk", "389"], ["Northern Mariana Islands", "mp", "1", 17, ["670"]], ["Norway (Norge)", "no", "47", 0], ["Oman (‫عُمان‬‎)", "om", "968"], ["Pakistan (‫پاکستان‬‎)", "pk", "92"], ["Palau", "pw", "680"], ["Palestine (‫فلسطين‬‎)", "ps", "970"], ["Panama (Panamá)", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru (Perú)", "pe", "51"], ["Philippines", "ph", "63"], ["Poland (Polska)", "pl", "48"], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", 3, ["787", "939"]], ["Qatar (‫قطر‬‎)", "qa", "974"], ["Réunion (La Réunion)", "re", "262", 0], ["Romania (România)", "ro", "40"], ["Russia (Россия)", "ru", "7", 0], ["Rwanda", "rw", "250"], ["Saint Barthélemy", "bl", "590", 1], ["Saint Helena", "sh", "290"], ["Saint Kitts and Nevis", "kn", "1", 18, ["869"]], ["Saint Lucia", "lc", "1", 19, ["758"]], ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2], ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"], ["Saint Vincent and the Grenadines", "vc", "1", 20, ["784"]], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"], ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"], ["Senegal (Sénégal)", "sn", "221"], ["Serbia (Србија)", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65"], ["Sint Maarten", "sx", "1", 21, ["721"]], ["Slovakia (Slovensko)", "sk", "421"], ["Slovenia (Slovenija)", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia (Soomaaliya)", "so", "252"], ["South Africa", "za", "27"], ["South Korea (대한민국)", "kr", "82"], ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"], ["Spain (España)", "es", "34"], ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"], ["Sudan (‫السودان‬‎)", "sd", "249"], ["Suriname", "sr", "597"], ["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]], ["Sweden (Sverige)", "se", "46"], ["Switzerland (Schweiz)", "ch", "41"], ["Syria (‫سوريا‬‎)", "sy", "963"], ["Taiwan (台灣)", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand (ไทย)", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad and Tobago", "tt", "1", 22, ["868"]], ["Tunisia (‫تونس‬‎)", "tn", "216"], ["Turkey (Türkiye)", "tr", "90"], ["Turkmenistan", "tm", "993"], ["Turks and Caicos Islands", "tc", "1", 23, ["649"]], ["Tuvalu", "tv", "688"], ["U.S. Virgin Islands", "vi", "1", 24, ["340"]], ["Uganda", "ug", "256"], ["Ukraine (Україна)", "ua", "380"], ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"], ["United Kingdom", "gb", "44", 0], ["United States", "us", "1", 0], ["Uruguay", "uy", "598"], ["Uzbekistan (Oʻzbekiston)", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatican City (Città del Vaticano)", "va", "39", 1, ["06698"]], ["Venezuela", "ve", "58"], ["Vietnam (Việt Nam)", "vn", "84"], ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"], ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1, ["5288", "5289"]], ["Yemen (‫اليمن‬‎)", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"], ["Åland Islands", "ax", "358", 1, ["18"]]]; // loop over all of the countries above, restructuring the data to be objects with named keys

    for (var i = 0; i < allCountries.length; i++) {
      var c = allCountries[i];
      allCountries[i] = {
        name: c[0],
        iso2: c[1],
        dialCode: c[2],
        priority: c[3] || 0,
        areaCodes: c[4] || null
      };
    }

    "use strict";

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? Object(arguments[i]) : {};
        var ownKeys = Object.keys(source);

        if (typeof Object.getOwnPropertySymbols === "function") {
          ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }

        ownKeys.forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      }

      return target;
    }

    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);

      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }

    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");

      return typeof key === "symbol" ? key : String(key);
    }

    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];

      if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }

      return (hint === "string" ? String : Number)(input);
    }

    var intlTelInputGlobals = {
      getInstance: function getInstance(input) {
        var id = input.getAttribute("data-intl-tel-input-id");
        return window.intlTelInputGlobals.instances[id];
      },
      instances: {},
      // using a global like this allows us to mock it in the tests
      documentReady: function documentReady() {
        return document.readyState === "complete";
      }
    };

    if (typeof window === "object") {
      window.intlTelInputGlobals = intlTelInputGlobals;
    } // these vars persist through all instances of the plugin


    var id = 0;
    var defaults = {
      // whether or not to allow the dropdown
      allowDropdown: true,
      // auto insert dial code (A) on init, (B) on user selecting a country, (C) on calling setCountry
      // also listen for blur/submit and auto remove dial code if that's all there is
      autoInsertDialCode: false,
      // add a placeholder in the input with an example number for the selected country
      autoPlaceholder: "polite",
      // modify the parentClass
      customContainer: "",
      // modify the auto placeholder
      customPlaceholder: null,
      // append menu to specified element
      dropdownContainer: null,
      // don't display these countries
      excludeCountries: [],
      // format the input value during initialisation and on setNumber
      formatOnDisplay: true,
      // geoIp lookup function
      geoIpLookup: null,
      // inject a hidden input with this name, and on submit, populate it with the result of getNumber
      hiddenInput: "",
      // initial country
      initialCountry: "",
      // localized country names e.g. { 'de': 'Deutschland' }
      localizedCountries: null,
      // national vs international formatting for numbers e.g. placeholders and displaying existing numbers
      nationalMode: true,
      // display only these countries
      onlyCountries: [],
      // number type to use for placeholders
      placeholderNumberType: "MOBILE",
      // the countries at the top of the list. defaults to united states and united kingdom
      preferredCountries: ["us", "gb"],
      // display the country dial code next to the selected flag
      separateDialCode: false,
      // option to hide the flags - must be used with separateDialCode, or allowDropdown=false
      showFlags: true,
      // specify the path to the libphonenumber script to enable validation/formatting
      utilsScript: ""
    }; // https://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes#Non-geographic_area_codes

    var regionlessNanpNumbers = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"]; // utility function to iterate over an object. can't use Object.entries or native forEach because
    // of IE11

    var forEachProp = function forEachProp(obj, callback) {
      var keys = Object.keys(obj);

      for (var i = 0; i < keys.length; i++) {
        callback(keys[i], obj[keys[i]]);
      }
    }; // run a method on each instance of the plugin


    var forEachInstance = function forEachInstance(method) {
      forEachProp(window.intlTelInputGlobals.instances, function (key) {
        window.intlTelInputGlobals.instances[key][method]();
      });
    }; // this is our plugin class that we will create an instance of
    // eslint-disable-next-line no-unused-vars


    var Iti = /*#__PURE__*/function () {
      function Iti(input, options) {
        var _this = this;

        _classCallCheck(this, Iti);

        this.id = id++;
        this.telInput = input;
        this.activeItem = null;
        this.highlightedItem = null; // process specified options / defaults
        // alternative to Object.assign, which isn't supported by IE11

        var customOptions = options || {};
        this.options = {};
        forEachProp(defaults, function (key, value) {
          _this.options[key] = customOptions.hasOwnProperty(key) ? customOptions[key] : value;
        });
        this.hadInitialPlaceholder = Boolean(input.getAttribute("placeholder"));
      }

      _createClass(Iti, [{
        key: "_init",
        value: function _init() {
          var _this2 = this; // if in nationalMode, do not insert dial codes


          if (this.options.nationalMode) {
            this.options.autoInsertDialCode = false;
          } // if separateDialCode enabled, do not insert dial codes


          if (this.options.separateDialCode) {
            this.options.autoInsertDialCode = false;
          } // force showFlags=true if there's a dropdown and we're not displaying the dial code,
          // as otherwise you just have a down arrow on it's own which doesn't make sense


          var forceShowFlags = this.options.allowDropdown && !this.options.separateDialCode;

          if (!this.options.showFlags && forceShowFlags) {
            this.options.showFlags = true;
          } // we cannot just test screen size as some smartphones/website meta tags will report desktop
          // resolutions
          // Note: for some reason jasmine breaks if you put this in the main Plugin function with the
          // rest of these declarations
          // Note: to target Android Mobiles (and not Tablets), we must find 'Android' and 'Mobile'


          this.isMobile = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

          if (this.isMobile) {
            // trigger the mobile dropdown css
            document.body.classList.add("iti-mobile"); // on mobile, we want a full screen dropdown, so we must append it to the body

            if (!this.options.dropdownContainer) {
              this.options.dropdownContainer = document.body;
            }
          } // check if input has one parent with RTL


          this.isRTL = !!this.telInput.closest("[dir=rtl]"); // these promises get resolved when their individual requests complete
          // this way the dev can do something like iti.promise.then(...) to know when all requests are
          // complete

          if (typeof Promise !== "undefined") {
            var autoCountryPromise = new Promise(function (resolve, reject) {
              _this2.resolveAutoCountryPromise = resolve;
              _this2.rejectAutoCountryPromise = reject;
            });
            var utilsScriptPromise = new Promise(function (resolve, reject) {
              _this2.resolveUtilsScriptPromise = resolve;
              _this2.rejectUtilsScriptPromise = reject;
            });
            this.promise = Promise.all([autoCountryPromise, utilsScriptPromise]);
          } else {
            // prevent errors when Promise doesn't exist
            this.resolveAutoCountryPromise = this.rejectAutoCountryPromise = function () {};

            this.resolveUtilsScriptPromise = this.rejectUtilsScriptPromise = function () {};
          } // in various situations there could be no country selected initially, but we need to be able
          // to assume this variable exists


          this.selectedCountryData = {}; // process all the data: onlyCountries, excludeCountries, preferredCountries etc

          this._processCountryData(); // generate the markup


          this._generateMarkup(); // set the initial state of the input value and the selected flag


          this._setInitialState(); // start all of the event listeners: autoInsertDialCode, input keydown, selectedFlag click


          this._initListeners(); // utils script, and auto country


          this._initRequests();
        }
      }, {
        key: "_processCountryData",
        value: function _processCountryData() {
          // process onlyCountries or excludeCountries array if present
          this._processAllCountries(); // process the countryCodes map


          this._processCountryCodes(); // process the preferredCountries


          this._processPreferredCountries(); // translate countries according to localizedCountries option


          if (this.options.localizedCountries) {
            this._translateCountriesByLocale();
          } // sort countries by name


          if (this.options.onlyCountries.length || this.options.localizedCountries) {
            this.countries.sort(this._countryNameSort);
          }
        }
      }, {
        key: "_addCountryCode",
        value: function _addCountryCode(iso2, countryCode, priority) {
          if (countryCode.length > this.countryCodeMaxLen) {
            this.countryCodeMaxLen = countryCode.length;
          }

          if (!this.countryCodes.hasOwnProperty(countryCode)) {
            this.countryCodes[countryCode] = [];
          } // bail if we already have this country for this countryCode


          for (var i = 0; i < this.countryCodes[countryCode].length; i++) {
            if (this.countryCodes[countryCode][i] === iso2) {
              return;
            }
          } // check for undefined as 0 is falsy


          var index = priority !== undefined ? priority : this.countryCodes[countryCode].length;
          this.countryCodes[countryCode][index] = iso2;
        }
      }, {
        key: "_processAllCountries",
        value: function _processAllCountries() {
          if (this.options.onlyCountries.length) {
            var lowerCaseOnlyCountries = this.options.onlyCountries.map(function (country) {
              return country.toLowerCase();
            });
            this.countries = allCountries.filter(function (country) {
              return lowerCaseOnlyCountries.indexOf(country.iso2) > -1;
            });
          } else if (this.options.excludeCountries.length) {
            var lowerCaseExcludeCountries = this.options.excludeCountries.map(function (country) {
              return country.toLowerCase();
            });
            this.countries = allCountries.filter(function (country) {
              return lowerCaseExcludeCountries.indexOf(country.iso2) === -1;
            });
          } else {
            this.countries = allCountries;
          }
        }
      }, {
        key: "_translateCountriesByLocale",
        value: function _translateCountriesByLocale() {
          for (var i = 0; i < this.countries.length; i++) {
            var iso = this.countries[i].iso2.toLowerCase();

            if (this.options.localizedCountries.hasOwnProperty(iso)) {
              this.countries[i].name = this.options.localizedCountries[iso];
            }
          }
        }
      }, {
        key: "_countryNameSort",
        value: function _countryNameSort(a, b) {
          if (a.name < b.name) {
            return -1;
          }

          if (a.name > b.name) {
            return 1;
          }

          return 0;
        }
      }, {
        key: "_processCountryCodes",
        value: function _processCountryCodes() {
          this.countryCodeMaxLen = 0; // here we store just dial codes

          this.dialCodes = {}; // here we store "country codes" (both dial codes and their area codes)

          this.countryCodes = {}; // first: add dial codes

          for (var i = 0; i < this.countries.length; i++) {
            var c = this.countries[i];

            if (!this.dialCodes[c.dialCode]) {
              this.dialCodes[c.dialCode] = true;
            }

            this._addCountryCode(c.iso2, c.dialCode, c.priority);
          } // next: add area codes
          // this is a second loop over countries, to make sure we have all of the "root" countries
          // already in the map, so that we can access them, as each time we add an area code substring
          // to the map, we also need to include the "root" country's code, as that also matches


          for (var _i = 0; _i < this.countries.length; _i++) {
            var _c = this.countries[_i]; // area codes

            if (_c.areaCodes) {
              var rootCountryCode = this.countryCodes[_c.dialCode][0]; // for each area code

              for (var j = 0; j < _c.areaCodes.length; j++) {
                var areaCode = _c.areaCodes[j]; // for each digit in the area code to add all partial matches as well

                for (var k = 1; k < areaCode.length; k++) {
                  var partialDialCode = _c.dialCode + areaCode.substr(0, k); // start with the root country, as that also matches this dial code

                  this._addCountryCode(rootCountryCode, partialDialCode);

                  this._addCountryCode(_c.iso2, partialDialCode);
                } // add the full area code


                this._addCountryCode(_c.iso2, _c.dialCode + areaCode);
              }
            }
          }
        }
      }, {
        key: "_processPreferredCountries",
        value: function _processPreferredCountries() {
          this.preferredCountries = [];

          for (var i = 0; i < this.options.preferredCountries.length; i++) {
            var countryCode = this.options.preferredCountries[i].toLowerCase();

            var countryData = this._getCountryData(countryCode, false, true);

            if (countryData) {
              this.preferredCountries.push(countryData);
            }
          }
        }
      }, {
        key: "_createEl",
        value: function _createEl(name, attrs, container) {
          var el = document.createElement(name);

          if (attrs) {
            forEachProp(attrs, function (key, value) {
              return el.setAttribute(key, value);
            });
          }

          if (container) {
            container.appendChild(el);
          }

          return el;
        }
      }, {
        key: "_generateMarkup",
        value: function _generateMarkup() {
          // if autocomplete does not exist on the element and its form, then
          // prevent autocomplete as there's no safe, cross-browser event we can react to, so it can
          // easily put the plugin in an inconsistent state e.g. the wrong flag selected for the
          // autocompleted number, which on submit could mean wrong number is saved
          if (!this.telInput.hasAttribute("autocomplete") && !(this.telInput.form && this.telInput.form.hasAttribute("autocomplete"))) {
            this.telInput.setAttribute("autocomplete", "off");
          }

          var _this$options = this.options,
              allowDropdown = _this$options.allowDropdown,
              separateDialCode = _this$options.separateDialCode,
              showFlags = _this$options.showFlags,
              customContainer = _this$options.customContainer,
              hiddenInput = _this$options.hiddenInput,
              dropdownContainer = _this$options.dropdownContainer; // containers (mostly for positioning)

          var parentClass = "iti";

          if (allowDropdown) {
            parentClass += " iti--allow-dropdown";
          }

          if (separateDialCode) {
            parentClass += " iti--separate-dial-code";
          }

          if (showFlags) {
            parentClass += " iti--show-flags";
          }

          if (customContainer) {
            parentClass += " ".concat(customContainer);
          }

          var wrapper = this._createEl("div", {
            "class": parentClass
          });

          this.telInput.parentNode.insertBefore(wrapper, this.telInput); // only hide the flagsContainer if allowDropdown, showFlags and separateDialCode are all false

          var showFlagsContainer = allowDropdown || showFlags || separateDialCode;

          if (showFlagsContainer) {
            this.flagsContainer = this._createEl("div", {
              "class": "iti__flag-container"
            }, wrapper);
          }

          wrapper.appendChild(this.telInput); // selected flag (displayed to left of input)
          // using Aria tags for "Select-Only Combobox Example"
          // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/

          if (showFlagsContainer) {
            this.selectedFlag = this._createEl("div", _objectSpread({
              "class": "iti__selected-flag"
            }, allowDropdown && {
              role: "combobox",
              "aria-haspopup": "listbox",
              "aria-controls": "iti-".concat(this.id, "__country-listbox"),
              "aria-expanded": "false",
              "aria-label": "Telephone country code"
            }), this.flagsContainer);
          }

          if (showFlags) {
            this.selectedFlagInner = this._createEl("div", {
              "class": "iti__flag"
            }, this.selectedFlag);
          }

          if (this.selectedFlag && this.telInput.disabled) {
            this.selectedFlag.setAttribute("aria-disabled", "true");
          }

          if (separateDialCode) {
            this.selectedDialCode = this._createEl("div", {
              "class": "iti__selected-dial-code"
            }, this.selectedFlag);
          }

          if (allowDropdown) {
            if (!this.telInput.disabled) {
              // make element focusable and tab navigable
              this.selectedFlag.setAttribute("tabindex", "0");
            }

            this.dropdownArrow = this._createEl("div", {
              "class": "iti__arrow"
            }, this.selectedFlag); // country dropdown: preferred countries, then divider, then all countries

            this.countryList = this._createEl("ul", {
              "class": "iti__country-list iti__hide",
              id: "iti-".concat(this.id, "__country-listbox"),
              role: "listbox",
              "aria-label": "List of countries"
            });

            if (this.preferredCountries.length) {
              this._appendListItems(this.preferredCountries, "iti__preferred", true);

              this._createEl("li", {
                "class": "iti__divider",
                role: "separator",
                "aria-disabled": "true"
              }, this.countryList);
            }

            this._appendListItems(this.countries, "iti__standard"); // create dropdownContainer markup


            if (dropdownContainer) {
              this.dropdown = this._createEl("div", {
                "class": "iti iti--container"
              });
              this.dropdown.appendChild(this.countryList);
            } else {
              this.flagsContainer.appendChild(this.countryList);
            }
          }

          if (hiddenInput) {
            var hiddenInputName = hiddenInput;
            var name = this.telInput.getAttribute("name");

            if (name) {
              var i = name.lastIndexOf("["); // if input name contains square brackets, then give the hidden input the same name,
              // replacing the contents of the last set of brackets with the given hiddenInput name

              if (i !== -1) {
                hiddenInputName = "".concat(name.substr(0, i), "[").concat(hiddenInputName, "]");
              }
            }

            this.hiddenInput = this._createEl("input", {
              type: "hidden",
              name: hiddenInputName
            });
            wrapper.appendChild(this.hiddenInput);
          }
        }
      }, {
        key: "_appendListItems",
        value: function _appendListItems(countries, className, preferred) {
          // we create so many DOM elements, it is faster to build a temp string
          // and then add everything to the DOM in one go at the end
          var tmp = ""; // for each country

          for (var i = 0; i < countries.length; i++) {
            var c = countries[i];
            var idSuffix = preferred ? "-preferred" : ""; // open the list item

            tmp += "<li class='iti__country ".concat(className, "' tabIndex='-1' id='iti-").concat(this.id, "__item-").concat(c.iso2).concat(idSuffix, "' role='option' data-dial-code='").concat(c.dialCode, "' data-country-code='").concat(c.iso2, "' aria-selected='false'>"); // add the flag

            if (this.options.showFlags) {
              tmp += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(c.iso2, "'></div></div>");
            } // and the country name and dial code


            tmp += "<span class='iti__country-name'>".concat(c.name, "</span>");
            tmp += "<span class='iti__dial-code'>+".concat(c.dialCode, "</span>"); // close the list item

            tmp += "</li>";
          }

          this.countryList.insertAdjacentHTML("beforeend", tmp);
        }
      }, {
        key: "_setInitialState",
        value: function _setInitialState() {
          // fix firefox bug: when first load page (with input with value set to number with intl dial
          // code) and initialising plugin removes the dial code from the input, then refresh page,
          // and we try to init plugin again but this time on number without dial code so get grey flag
          var attributeValue = this.telInput.getAttribute("value");
          var inputValue = this.telInput.value;
          var useAttribute = attributeValue && attributeValue.charAt(0) === "+" && (!inputValue || inputValue.charAt(0) !== "+");
          var val = useAttribute ? attributeValue : inputValue;

          var dialCode = this._getDialCode(val);

          var isRegionlessNanp = this._isRegionlessNanp(val);

          var _this$options2 = this.options,
              initialCountry = _this$options2.initialCountry,
              autoInsertDialCode = _this$options2.autoInsertDialCode; // if we already have a dial code, and it's not a regionlessNanp, we can go ahead and set the
          // flag, else fall back to the default country

          if (dialCode && !isRegionlessNanp) {
            this._updateFlagFromNumber(val);
          } else if (initialCountry !== "auto") {
            // see if we should select a flag
            if (initialCountry) {
              this._setFlag(initialCountry.toLowerCase());
            } else {
              if (dialCode && isRegionlessNanp) {
                // has intl dial code, is regionless nanp, and no initialCountry, so default to US
                this._setFlag("us");
              } else {
                // no dial code and no initialCountry, so default to first in list
                this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2;

                if (!val) {
                  this._setFlag(this.defaultCountry);
                }
              }
            } // if empty and autoInsertDialCode then insert the dial code


            if (!val && autoInsertDialCode) {
              this.telInput.value = "+".concat(this.selectedCountryData.dialCode);
            }
          } // NOTE: if initialCountry is set to auto, that will be handled separately
          // format - note this wont be run after _updateDialCode as that's only called if no val


          if (val) {
            this._updateValFromNumber(val);
          }
        }
      }, {
        key: "_initListeners",
        value: function _initListeners() {
          this._initKeyListeners();

          if (this.options.autoInsertDialCode) {
            this._initBlurListeners();
          }

          if (this.options.allowDropdown) {
            this._initDropdownListeners();
          }

          if (this.hiddenInput) {
            this._initHiddenInputListener();
          }
        }
      }, {
        key: "_initHiddenInputListener",
        value: function _initHiddenInputListener() {
          var _this3 = this;

          this._handleHiddenInputSubmit = function () {
            _this3.hiddenInput.value = _this3.getNumber();
          };

          if (this.telInput.form) {
            this.telInput.form.addEventListener("submit", this._handleHiddenInputSubmit);
          }
        }
      }, {
        key: "_getClosestLabel",
        value: function _getClosestLabel() {
          var el = this.telInput;

          while (el && el.tagName !== "LABEL") {
            el = el.parentNode;
          }

          return el;
        }
      }, {
        key: "_initDropdownListeners",
        value: function _initDropdownListeners() {
          var _this4 = this; // hack for input nested inside label (which is valid markup): clicking the selected-flag to
          // open the dropdown would then automatically trigger a 2nd click on the input which would
          // close it again


          this._handleLabelClick = function (e) {
            // if the dropdown is closed, then focus the input, else ignore the click
            if (_this4.countryList.classList.contains("iti__hide")) {
              _this4.telInput.focus();
            } else {
              e.preventDefault();
            }
          };

          var label = this._getClosestLabel();

          if (label) {
            label.addEventListener("click", this._handleLabelClick);
          } // toggle country dropdown on click


          this._handleClickSelectedFlag = function () {
            // only intercept this event if we're opening the dropdown
            // else let it bubble up to the top ("click-off-to-close" listener)
            // we cannot just stopPropagation as it may be needed to close another instance
            if (_this4.countryList.classList.contains("iti__hide") && !_this4.telInput.disabled && !_this4.telInput.readOnly) {
              _this4._showDropdown();
            }
          };

          this.selectedFlag.addEventListener("click", this._handleClickSelectedFlag); // open dropdown list if currently focused

          this._handleFlagsContainerKeydown = function (e) {
            var isDropdownHidden = _this4.countryList.classList.contains("iti__hide");

            if (isDropdownHidden && ["ArrowUp", "Up", "ArrowDown", "Down", " ", "Enter"].indexOf(e.key) !== -1) {
              // prevent form from being submitted if "ENTER" was pressed
              e.preventDefault(); // prevent event from being handled again by document

              e.stopPropagation();

              _this4._showDropdown();
            } // allow navigation from dropdown to input on TAB


            if (e.key === "Tab") {
              _this4._closeDropdown();
            }
          };

          this.flagsContainer.addEventListener("keydown", this._handleFlagsContainerKeydown);
        }
      }, {
        key: "_initRequests",
        value: function _initRequests() {
          var _this5 = this; // if the user has specified the path to the utils script, fetch it on window.load, else resolve


          if (this.options.utilsScript && !window.intlTelInputUtils) {
            // if the plugin is being initialised after the window.load event has already been fired
            if (window.intlTelInputGlobals.documentReady()) {
              window.intlTelInputGlobals.loadUtils(this.options.utilsScript);
            } else {
              // wait until the load event so we don't block any other requests e.g. the flags image
              window.addEventListener("load", function () {
                window.intlTelInputGlobals.loadUtils(_this5.options.utilsScript);
              });
            }
          } else {
            this.resolveUtilsScriptPromise();
          }

          if (this.options.initialCountry === "auto") {
            this._loadAutoCountry();
          } else {
            this.resolveAutoCountryPromise();
          }
        }
      }, {
        key: "_loadAutoCountry",
        value: function _loadAutoCountry() {
          // 3 options:
          // 1) already loaded (we're done)
          // 2) not already started loading (start)
          // 3) already started loading (do nothing - just wait for loading callback to fire)
          if (window.intlTelInputGlobals.autoCountry) {
            this.handleAutoCountry();
          } else if (!window.intlTelInputGlobals.startedLoadingAutoCountry) {
            // don't do this twice!
            window.intlTelInputGlobals.startedLoadingAutoCountry = true;

            if (typeof this.options.geoIpLookup === "function") {
              this.options.geoIpLookup(function (countryCode) {
                window.intlTelInputGlobals.autoCountry = countryCode.toLowerCase(); // tell all instances the auto country is ready
                // TODO: this should just be the current instances
                // UPDATE: use setTimeout in case their geoIpLookup function calls this callback straight
                // away (e.g. if they have already done the geo ip lookup somewhere else). Using
                // setTimeout means that the current thread of execution will finish before executing
                // this, which allows the plugin to finish initialising.

                setTimeout(function () {
                  return forEachInstance("handleAutoCountry");
                });
              }, function () {
                return forEachInstance("rejectAutoCountryPromise");
              });
            }
          }
        }
      }, {
        key: "_initKeyListeners",
        value: function _initKeyListeners() {
          var _this6 = this; // update flag on keyup


          this._handleKeyupEvent = function () {
            if (_this6._updateFlagFromNumber(_this6.telInput.value)) {
              _this6._triggerCountryChange();
            }
          };

          this.telInput.addEventListener("keyup", this._handleKeyupEvent); // update flag on cut/paste events (now supported in all major browsers)

          this._handleClipboardEvent = function () {
            // hack because "paste" event is fired before input is updated
            setTimeout(_this6._handleKeyupEvent);
          };

          this.telInput.addEventListener("cut", this._handleClipboardEvent);
          this.telInput.addEventListener("paste", this._handleClipboardEvent);
        }
      }, {
        key: "_cap",
        value: function _cap(number) {
          var max = this.telInput.getAttribute("maxlength");
          return max && number.length > max ? number.substr(0, max) : number;
        }
      }, {
        key: "_initBlurListeners",
        value: function _initBlurListeners() {
          var _this7 = this; // on blur or form submit: if just a dial code then remove it


          this._handleSubmitOrBlurEvent = function () {
            _this7._removeEmptyDialCode();
          };

          if (this.telInput.form) {
            this.telInput.form.addEventListener("submit", this._handleSubmitOrBlurEvent);
          }

          this.telInput.addEventListener("blur", this._handleSubmitOrBlurEvent);
        }
      }, {
        key: "_removeEmptyDialCode",
        value: function _removeEmptyDialCode() {
          if (this.telInput.value.charAt(0) === "+") {
            var numeric = this._getNumeric(this.telInput.value); // if just a plus, or if just a dial code


            if (!numeric || this.selectedCountryData.dialCode === numeric) {
              this.telInput.value = "";
            }
          }
        }
      }, {
        key: "_getNumeric",
        value: function _getNumeric(s) {
          return s.replace(/\D/g, "");
        }
      }, {
        key: "_trigger",
        value: function _trigger(name) {
          // have to use old school document.createEvent as IE11 doesn't support `new Event()` syntax
          var e = document.createEvent("Event");
          e.initEvent(name, true, true); // can bubble, and is cancellable

          this.telInput.dispatchEvent(e);
        }
      }, {
        key: "_showDropdown",
        value: function _showDropdown() {
          this.countryList.classList.remove("iti__hide");
          this.selectedFlag.setAttribute("aria-expanded", "true");

          this._setDropdownPosition(); // update highlighting and scroll to active list item


          if (this.activeItem) {
            this._highlightListItem(this.activeItem, false);

            this._scrollTo(this.activeItem, true);
          } // bind all the dropdown-related listeners: mouseover, click, click-off, keydown


          this._bindDropdownListeners(); // update the arrow


          this.dropdownArrow.classList.add("iti__arrow--up");

          this._trigger("open:countrydropdown");
        }
      }, {
        key: "_toggleClass",
        value: function _toggleClass(el, className, shouldHaveClass) {
          if (shouldHaveClass && !el.classList.contains(className)) {
            el.classList.add(className);
          } else if (!shouldHaveClass && el.classList.contains(className)) {
            el.classList.remove(className);
          }
        }
      }, {
        key: "_setDropdownPosition",
        value: function _setDropdownPosition() {
          var _this8 = this;

          if (this.options.dropdownContainer) {
            this.options.dropdownContainer.appendChild(this.dropdown);
          }

          if (!this.isMobile) {
            var pos = this.telInput.getBoundingClientRect(); // windowTop from https://stackoverflow.com/a/14384091/217866

            var windowTop = window.pageYOffset || document.documentElement.scrollTop;
            var inputTop = pos.top + windowTop;
            var dropdownHeight = this.countryList.offsetHeight; // dropdownFitsBelow = (dropdownBottom < windowBottom)

            var dropdownFitsBelow = inputTop + this.telInput.offsetHeight + dropdownHeight < windowTop + window.innerHeight;
            var dropdownFitsAbove = inputTop - dropdownHeight > windowTop; // by default, the dropdown will be below the input. If we want to position it above the
            // input, we add the dropup class.

            this._toggleClass(this.countryList, "iti__country-list--dropup", !dropdownFitsBelow && dropdownFitsAbove); // if dropdownContainer is enabled, calculate postion


            if (this.options.dropdownContainer) {
              // by default the dropdown will be directly over the input because it's not in the flow.
              // If we want to position it below, we need to add some extra top value.
              var extraTop = !dropdownFitsBelow && dropdownFitsAbove ? 0 : this.telInput.offsetHeight; // calculate placement

              this.dropdown.style.top = "".concat(inputTop + extraTop, "px");
              this.dropdown.style.left = "".concat(pos.left + document.body.scrollLeft, "px"); // close menu on window scroll

              this._handleWindowScroll = function () {
                return _this8._closeDropdown();
              };

              window.addEventListener("scroll", this._handleWindowScroll);
            }
          }
        }
      }, {
        key: "_getClosestListItem",
        value: function _getClosestListItem(target) {
          var el = target;

          while (el && el !== this.countryList && !el.classList.contains("iti__country")) {
            el = el.parentNode;
          } // if we reached the countryList element, then return null


          return el === this.countryList ? null : el;
        }
      }, {
        key: "_bindDropdownListeners",
        value: function _bindDropdownListeners() {
          var _this9 = this; // when mouse over a list item, just highlight that one
          // we add the class "highlight", so if they hit "enter" we know which one to select


          this._handleMouseoverCountryList = function (e) {
            // handle event delegation, as we're listening for this event on the countryList
            var listItem = _this9._getClosestListItem(e.target);

            if (listItem) {
              _this9._highlightListItem(listItem, false);
            }
          };

          this.countryList.addEventListener("mouseover", this._handleMouseoverCountryList); // listen for country selection

          this._handleClickCountryList = function (e) {
            var listItem = _this9._getClosestListItem(e.target);

            if (listItem) {
              _this9._selectListItem(listItem);
            }
          };

          this.countryList.addEventListener("click", this._handleClickCountryList); // click off to close
          // (except when this initial opening click is bubbling up)
          // we cannot just stopPropagation as it may be needed to close another instance

          var isOpening = true;

          this._handleClickOffToClose = function () {
            if (!isOpening) {
              _this9._closeDropdown();
            }

            isOpening = false;
          };

          document.documentElement.addEventListener("click", this._handleClickOffToClose); // listen for up/down scrolling, enter to select, or letters to jump to country name.
          // use keydown as keypress doesn't fire for non-char keys and we want to catch if they
          // just hit down and hold it to scroll down (no keyup event).
          // listen on the document because that's where key events are triggered if no input has focus

          var query = "";
          var queryTimer = null;

          this._handleKeydownOnDropdown = function (e) {
            // prevent down key from scrolling the whole page,
            // and enter key from submitting a form etc
            e.preventDefault(); // up and down to navigate

            if (e.key === "ArrowUp" || e.key === "Up" || e.key === "ArrowDown" || e.key === "Down") {
              _this9._handleUpDownKey(e.key);
            } else if (e.key === "Enter") {
              _this9._handleEnterKey();
            } else if (e.key === "Escape") {
              _this9._closeDropdown();
            } else if (/^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(e.key)) {
              // jump to countries that start with the query string
              if (queryTimer) {
                clearTimeout(queryTimer);
              }

              query += e.key.toLowerCase();

              _this9._searchForCountry(query); // if the timer hits 1 second, reset the query


              queryTimer = setTimeout(function () {
                query = "";
              }, 1e3);
            }
          };

          document.addEventListener("keydown", this._handleKeydownOnDropdown);
        }
      }, {
        key: "_handleUpDownKey",
        value: function _handleUpDownKey(key) {
          var next = key === "ArrowUp" || key === "Up" ? this.highlightedItem.previousElementSibling : this.highlightedItem.nextElementSibling;

          if (next) {
            // skip the divider
            if (next.classList.contains("iti__divider")) {
              next = key === "ArrowUp" || key === "Up" ? next.previousElementSibling : next.nextElementSibling;
            }

            this._highlightListItem(next, true);
          }
        }
      }, {
        key: "_handleEnterKey",
        value: function _handleEnterKey() {
          if (this.highlightedItem) {
            this._selectListItem(this.highlightedItem);
          }
        }
      }, {
        key: "_searchForCountry",
        value: function _searchForCountry(query) {
          for (var i = 0; i < this.countries.length; i++) {
            if (this._startsWith(this.countries[i].name, query)) {
              var listItem = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(this.countries[i].iso2)); // update highlighting and scroll

              this._highlightListItem(listItem, false);

              this._scrollTo(listItem, true);

              break;
            }
          }
        }
      }, {
        key: "_startsWith",
        value: function _startsWith(a, b) {
          return a.substr(0, b.length).toLowerCase() === b;
        }
      }, {
        key: "_updateValFromNumber",
        value: function _updateValFromNumber(originalNumber) {
          var number = originalNumber;

          if (this.options.formatOnDisplay && window.intlTelInputUtils && this.selectedCountryData) {
            var useNational = this.options.nationalMode || number.charAt(0) !== "+" && !this.options.separateDialCode;
            var _intlTelInputUtils$nu = intlTelInputUtils.numberFormat,
                NATIONAL = _intlTelInputUtils$nu.NATIONAL,
                INTERNATIONAL = _intlTelInputUtils$nu.INTERNATIONAL;
            var format = useNational ? NATIONAL : INTERNATIONAL;
            number = intlTelInputUtils.formatNumber(number, this.selectedCountryData.iso2, format);
          }

          number = this._beforeSetNumber(number);
          this.telInput.value = number;
        }
      }, {
        key: "_updateFlagFromNumber",
        value: function _updateFlagFromNumber(originalNumber) {
          // if we already have US/Canada selected, make sure the number starts
          // with a +1 so _getDialCode will be able to extract the area code
          // update: if we dont yet have selectedCountryData, but we're here (trying to update the flag
          // from the number), that means we're initialising the plugin with a number that already has a
          // dial code, so fine to ignore this bit
          var number = originalNumber;
          var selectedDialCode = this.selectedCountryData.dialCode;
          var isNanp = selectedDialCode === "1";

          if (number && isNanp && number.charAt(0) !== "+") {
            if (number.charAt(0) !== "1") {
              number = "1".concat(number);
            }

            number = "+".concat(number);
          } // if separateDialCode enabled, then consider the selected dial code to be part of the number


          if (this.options.separateDialCode && selectedDialCode && number.charAt(0) !== "+") {
            number = "+".concat(selectedDialCode).concat(number);
          } // try and extract valid dial code from input


          var dialCode = this._getDialCode(number, true);

          var numeric = this._getNumeric(number);

          var countryCode = null;

          if (dialCode) {
            var countryCodes = this.countryCodes[this._getNumeric(dialCode)]; // check if the right country is already selected. this should be false if the number is
            // longer than the matched dial code because in this case we need to make sure that if
            // there are multiple country matches, that the first one is selected (note: we could
            // just check that here, but it requires the same loop that we already have later)


            var alreadySelected = countryCodes.indexOf(this.selectedCountryData.iso2) !== -1 && numeric.length <= dialCode.length - 1;

            var isRegionlessNanpNumber = selectedDialCode === "1" && this._isRegionlessNanp(numeric); // only update the flag if:
            // A) NOT (we currently have a NANP flag selected, and the number is a regionlessNanp)
            // AND
            // B) the right country is not already selected


            if (!isRegionlessNanpNumber && !alreadySelected) {
              // if using onlyCountries option, countryCodes[0] may be empty, so we must find the first
              // non-empty index
              for (var j = 0; j < countryCodes.length; j++) {
                if (countryCodes[j]) {
                  countryCode = countryCodes[j];
                  break;
                }
              }
            }
          } else if (number.charAt(0) === "+" && numeric.length) {
            // invalid dial code, so empty
            // Note: use getNumeric here because the number has not been formatted yet, so could contain
            // bad chars
            countryCode = "";
          } else if (!number || number === "+") {
            // empty, or just a plus, so default
            countryCode = this.defaultCountry;
          }

          if (countryCode !== null) {
            return this._setFlag(countryCode);
          }

          return false;
        }
      }, {
        key: "_isRegionlessNanp",
        value: function _isRegionlessNanp(number) {
          var numeric = this._getNumeric(number);

          if (numeric.charAt(0) === "1") {
            var areaCode = numeric.substr(1, 3);
            return regionlessNanpNumbers.indexOf(areaCode) !== -1;
          }

          return false;
        }
      }, {
        key: "_highlightListItem",
        value: function _highlightListItem(listItem, shouldFocus) {
          var prevItem = this.highlightedItem;

          if (prevItem) {
            prevItem.classList.remove("iti__highlight");
          }

          this.highlightedItem = listItem;
          this.highlightedItem.classList.add("iti__highlight");
          this.selectedFlag.setAttribute("aria-activedescendant", listItem.getAttribute("id"));

          if (shouldFocus) {
            this.highlightedItem.focus();
          }
        }
      }, {
        key: "_getCountryData",
        value: function _getCountryData(countryCode, ignoreOnlyCountriesOption, allowFail) {
          var countryList = ignoreOnlyCountriesOption ? allCountries : this.countries;

          for (var i = 0; i < countryList.length; i++) {
            if (countryList[i].iso2 === countryCode) {
              return countryList[i];
            }
          }

          if (allowFail) {
            return null;
          }

          throw new Error("No country data for '".concat(countryCode, "'"));
        }
      }, {
        key: "_setFlag",
        value: function _setFlag(countryCode) {
          var _this$options3 = this.options,
              allowDropdown = _this$options3.allowDropdown,
              separateDialCode = _this$options3.separateDialCode,
              showFlags = _this$options3.showFlags;
          var prevCountry = this.selectedCountryData.iso2 ? this.selectedCountryData : {}; // do this first as it will throw an error and stop if countryCode is invalid

          this.selectedCountryData = countryCode ? this._getCountryData(countryCode, false, false) : {}; // update the defaultCountry - we only need the iso2 from now on, so just store that

          if (this.selectedCountryData.iso2) {
            this.defaultCountry = this.selectedCountryData.iso2;
          }

          if (showFlags) {
            this.selectedFlagInner.setAttribute("class", "iti__flag iti__".concat(countryCode));
          }

          this._setSelectedCountryFlagTitleAttribute(countryCode, separateDialCode);

          if (separateDialCode) {
            var dialCode = this.selectedCountryData.dialCode ? "+".concat(this.selectedCountryData.dialCode) : "";
            this.selectedDialCode.innerHTML = dialCode; // offsetWidth is zero if input is in a hidden container during initialisation

            var selectedFlagWidth = this.selectedFlag.offsetWidth || this._getHiddenSelectedFlagWidth(); // add 6px of padding after the grey selected-dial-code box, as this is what we use in the css


            if (this.isRTL) {
              this.telInput.style.paddingRight = "".concat(selectedFlagWidth + 6, "px");
            } else {
              this.telInput.style.paddingLeft = "".concat(selectedFlagWidth + 6, "px");
            }
          } // and the input's placeholder


          this._updatePlaceholder(); // update the active list item


          if (allowDropdown) {
            var prevItem = this.activeItem;

            if (prevItem) {
              prevItem.classList.remove("iti__active");
              prevItem.setAttribute("aria-selected", "false");
            }

            if (countryCode) {
              // check if there is a preferred item first, else fall back to standard
              var nextItem = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(countryCode, "-preferred")) || this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(countryCode));
              nextItem.setAttribute("aria-selected", "true");
              nextItem.classList.add("iti__active");
              this.activeItem = nextItem;
            }
          } // return if the flag has changed or not


          return prevCountry.iso2 !== countryCode;
        }
      }, {
        key: "_setSelectedCountryFlagTitleAttribute",
        value: function _setSelectedCountryFlagTitleAttribute(countryCode, separateDialCode) {
          if (!this.selectedFlag) {
            return;
          }

          var title;

          if (countryCode && !separateDialCode) {
            title = "".concat(this.selectedCountryData.name, ": +").concat(this.selectedCountryData.dialCode);
          } else if (countryCode) {
            // For screen reader output, we don't want to include the dial code in the reader output twice
            // so just use the selected country name here:
            title = this.selectedCountryData.name;
          } else {
            title = "Unknown";
          }

          this.selectedFlag.setAttribute("title", title);
        }
      }, {
        key: "_getHiddenSelectedFlagWidth",
        value: function _getHiddenSelectedFlagWidth() {
          // to get the right styling to apply, all we need is a shallow clone of the container,
          // and then to inject a deep clone of the selectedFlag element
          var containerClone = this.telInput.parentNode.cloneNode();
          containerClone.style.visibility = "hidden";
          document.body.appendChild(containerClone);
          var flagsContainerClone = this.flagsContainer.cloneNode();
          containerClone.appendChild(flagsContainerClone);
          var selectedFlagClone = this.selectedFlag.cloneNode(true);
          flagsContainerClone.appendChild(selectedFlagClone);
          var width = selectedFlagClone.offsetWidth;
          containerClone.parentNode.removeChild(containerClone);
          return width;
        }
      }, {
        key: "_updatePlaceholder",
        value: function _updatePlaceholder() {
          var shouldSetPlaceholder = this.options.autoPlaceholder === "aggressive" || !this.hadInitialPlaceholder && this.options.autoPlaceholder === "polite";

          if (window.intlTelInputUtils && shouldSetPlaceholder) {
            var numberType = intlTelInputUtils.numberType[this.options.placeholderNumberType];
            var placeholder = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, numberType) : "";
            placeholder = this._beforeSetNumber(placeholder);

            if (typeof this.options.customPlaceholder === "function") {
              placeholder = this.options.customPlaceholder(placeholder, this.selectedCountryData);
            }

            this.telInput.setAttribute("placeholder", placeholder);
          }
        }
      }, {
        key: "_selectListItem",
        value: function _selectListItem(listItem) {
          // update selected flag and active list item
          var flagChanged = this._setFlag(listItem.getAttribute("data-country-code"));

          this._closeDropdown();

          this._updateDialCode(listItem.getAttribute("data-dial-code")); // focus the input


          this.telInput.focus(); // put cursor at end - this fix is required for FF and IE11 (with auto inserting dial code),
          // who try to put the cursor at the beginning the first time

          var len = this.telInput.value.length;
          this.telInput.setSelectionRange(len, len);

          if (flagChanged) {
            this._triggerCountryChange();
          }
        }
      }, {
        key: "_closeDropdown",
        value: function _closeDropdown() {
          this.countryList.classList.add("iti__hide");
          this.selectedFlag.setAttribute("aria-expanded", "false");
          this.selectedFlag.removeAttribute("aria-activedescendant"); // update the arrow

          this.dropdownArrow.classList.remove("iti__arrow--up"); // unbind key events

          document.removeEventListener("keydown", this._handleKeydownOnDropdown);
          document.documentElement.removeEventListener("click", this._handleClickOffToClose);
          this.countryList.removeEventListener("mouseover", this._handleMouseoverCountryList);
          this.countryList.removeEventListener("click", this._handleClickCountryList); // remove menu from container

          if (this.options.dropdownContainer) {
            if (!this.isMobile) {
              window.removeEventListener("scroll", this._handleWindowScroll);
            }

            if (this.dropdown.parentNode) {
              this.dropdown.parentNode.removeChild(this.dropdown);
            }
          }

          this._trigger("close:countrydropdown");
        }
      }, {
        key: "_scrollTo",
        value: function _scrollTo(element, middle) {
          var container = this.countryList; // windowTop from https://stackoverflow.com/a/14384091/217866

          var windowTop = window.pageYOffset || document.documentElement.scrollTop;
          var containerHeight = container.offsetHeight;
          var containerTop = container.getBoundingClientRect().top + windowTop;
          var containerBottom = containerTop + containerHeight;
          var elementHeight = element.offsetHeight;
          var elementTop = element.getBoundingClientRect().top + windowTop;
          var elementBottom = elementTop + elementHeight;
          var newScrollTop = elementTop - containerTop + container.scrollTop;
          var middleOffset = containerHeight / 2 - elementHeight / 2;

          if (elementTop < containerTop) {
            // scroll up
            if (middle) {
              newScrollTop -= middleOffset;
            }

            container.scrollTop = newScrollTop;
          } else if (elementBottom > containerBottom) {
            // scroll down
            if (middle) {
              newScrollTop += middleOffset;
            }

            var heightDifference = containerHeight - elementHeight;
            container.scrollTop = newScrollTop - heightDifference;
          }
        }
      }, {
        key: "_updateDialCode",
        value: function _updateDialCode(newDialCodeBare) {
          var inputVal = this.telInput.value; // save having to pass this every time

          var newDialCode = "+".concat(newDialCodeBare);
          var newNumber;

          if (inputVal.charAt(0) === "+") {
            // there's a plus so we're dealing with a replacement
            var prevDialCode = this._getDialCode(inputVal);

            if (prevDialCode) {
              // current number contains a valid dial code, so replace it
              newNumber = inputVal.replace(prevDialCode, newDialCode);
            } else {
              // current number contains an invalid dial code, so ditch it
              // (no way to determine where the invalid dial code ends and the rest of the number begins)
              newNumber = newDialCode;
            }

            this.telInput.value = newNumber;
          } else if (this.options.autoInsertDialCode) {
            if (inputVal) {
              // there is an existing value with no dial code: prefix the new dial code
              newNumber = newDialCode + inputVal;
            } else {
              newNumber = newDialCode;
            }

            this.telInput.value = newNumber;
          }
        }
      }, {
        key: "_getDialCode",
        value: function _getDialCode(number, includeAreaCode) {
          var dialCode = ""; // only interested in international numbers (starting with a plus)

          if (number.charAt(0) === "+") {
            var numericChars = ""; // iterate over chars

            for (var i = 0; i < number.length; i++) {
              var c = number.charAt(i); // if char is number (https://stackoverflow.com/a/8935649/217866)

              if (!isNaN(parseInt(c, 10))) {
                numericChars += c; // if current numericChars make a valid dial code

                if (includeAreaCode) {
                  if (this.countryCodes[numericChars]) {
                    // store the actual raw string (useful for matching later)
                    dialCode = number.substr(0, i + 1);
                  }
                } else {
                  if (this.dialCodes[numericChars]) {
                    dialCode = number.substr(0, i + 1); // if we're just looking for a dial code, we can break as soon as we find one

                    break;
                  }
                } // stop searching as soon as we can - in this case when we hit max len


                if (numericChars.length === this.countryCodeMaxLen) {
                  break;
                }
              }
            }
          }

          return dialCode;
        }
      }, {
        key: "_getFullNumber",
        value: function _getFullNumber() {
          var val = this.telInput.value.trim();
          var dialCode = this.selectedCountryData.dialCode;
          var prefix;

          var numericVal = this._getNumeric(val);

          if (this.options.separateDialCode && val.charAt(0) !== "+" && dialCode && numericVal) {
            // when using separateDialCode, it is visible so is effectively part of the typed number
            prefix = "+".concat(dialCode);
          } else {
            prefix = "";
          }

          return prefix + val;
        }
      }, {
        key: "_beforeSetNumber",
        value: function _beforeSetNumber(originalNumber) {
          var number = originalNumber;

          if (this.options.separateDialCode) {
            var dialCode = this._getDialCode(number); // if there is a valid dial code


            if (dialCode) {
              // in case _getDialCode returned an area code as well
              dialCode = "+".concat(this.selectedCountryData.dialCode); // a lot of numbers will have a space separating the dial code and the main number, and
              // some NANP numbers will have a hyphen e.g. +1 684-733-1234 - in both cases we want to get
              // rid of it
              // NOTE: don't just trim all non-numerics as may want to preserve an open parenthesis etc

              var start = number[dialCode.length] === " " || number[dialCode.length] === "-" ? dialCode.length + 1 : dialCode.length;
              number = number.substr(start);
            }
          }

          return this._cap(number);
        }
      }, {
        key: "_triggerCountryChange",
        value: function _triggerCountryChange() {
          this._trigger("countrychange");
        }
      }, {
        key: "handleAutoCountry",
        value: function handleAutoCountry() {
          if (this.options.initialCountry === "auto") {
            // we must set this even if there is an initial val in the input: in case the initial val is
            // invalid and they delete it - they should see their auto country
            this.defaultCountry = window.intlTelInputGlobals.autoCountry; // if there's no initial value in the input, then update the flag

            if (!this.telInput.value) {
              this.setCountry(this.defaultCountry);
            }

            this.resolveAutoCountryPromise();
          }
        }
      }, {
        key: "handleUtils",
        value: function handleUtils() {
          // if the request was successful
          if (window.intlTelInputUtils) {
            // if there's an initial value in the input, then format it
            if (this.telInput.value) {
              this._updateValFromNumber(this.telInput.value);
            }

            this._updatePlaceholder();
          }

          this.resolveUtilsScriptPromise();
        }
      }, {
        key: "destroy",
        value: function destroy() {
          var form = this.telInput.form;

          if (this.options.allowDropdown) {
            // make sure the dropdown is closed (and unbind listeners)
            this._closeDropdown();

            this.selectedFlag.removeEventListener("click", this._handleClickSelectedFlag);
            this.flagsContainer.removeEventListener("keydown", this._handleFlagsContainerKeydown); // label click hack

            var label = this._getClosestLabel();

            if (label) {
              label.removeEventListener("click", this._handleLabelClick);
            }
          } // unbind hiddenInput listeners


          if (this.hiddenInput && form) {
            form.removeEventListener("submit", this._handleHiddenInputSubmit);
          } // unbind autoInsertDialCode listeners


          if (this.options.autoInsertDialCode) {
            if (form) {
              form.removeEventListener("submit", this._handleSubmitOrBlurEvent);
            }

            this.telInput.removeEventListener("blur", this._handleSubmitOrBlurEvent);
          } // unbind key events, and cut/paste events


          this.telInput.removeEventListener("keyup", this._handleKeyupEvent);
          this.telInput.removeEventListener("cut", this._handleClipboardEvent);
          this.telInput.removeEventListener("paste", this._handleClipboardEvent); // remove attribute of id instance: data-intl-tel-input-id

          this.telInput.removeAttribute("data-intl-tel-input-id"); // remove markup (but leave the original input)

          var wrapper = this.telInput.parentNode;
          wrapper.parentNode.insertBefore(this.telInput, wrapper);
          wrapper.parentNode.removeChild(wrapper);
          delete window.intlTelInputGlobals.instances[this.id];
        }
      }, {
        key: "getExtension",
        value: function getExtension() {
          if (window.intlTelInputUtils) {
            return intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2);
          }

          return "";
        }
      }, {
        key: "getNumber",
        value: function getNumber(format) {
          if (window.intlTelInputUtils) {
            var iso2 = this.selectedCountryData.iso2;
            return intlTelInputUtils.formatNumber(this._getFullNumber(), iso2, format);
          }

          return "";
        }
      }, {
        key: "getNumberType",
        value: function getNumberType() {
          if (window.intlTelInputUtils) {
            return intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2);
          }

          return -99;
        }
      }, {
        key: "getSelectedCountryData",
        value: function getSelectedCountryData() {
          return this.selectedCountryData;
        }
      }, {
        key: "getValidationError",
        value: function getValidationError() {
          if (window.intlTelInputUtils) {
            var iso2 = this.selectedCountryData.iso2;
            return intlTelInputUtils.getValidationError(this._getFullNumber(), iso2);
          }

          return -99;
        }
      }, {
        key: "isValidNumber",
        value: function isValidNumber() {
          var val = this._getFullNumber().trim();

          return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(val, this.selectedCountryData.iso2) : null;
        }
      }, {
        key: "isPossibleNumber",
        value: function isPossibleNumber() {
          var val = this._getFullNumber().trim();

          return window.intlTelInputUtils ? intlTelInputUtils.isPossibleNumber(val, this.selectedCountryData.iso2) : null;
        }
      }, {
        key: "setCountry",
        value: function setCountry(originalCountryCode) {
          var countryCode = originalCountryCode.toLowerCase(); // check if already selected

          if (this.selectedCountryData.iso2 !== countryCode) {
            this._setFlag(countryCode);

            this._updateDialCode(this.selectedCountryData.dialCode);

            this._triggerCountryChange();
          }
        }
      }, {
        key: "setNumber",
        value: function setNumber(number) {
          // we must update the flag first, which updates this.selectedCountryData, which is used for
          // formatting the number before displaying it
          var flagChanged = this._updateFlagFromNumber(number);

          this._updateValFromNumber(number);

          if (flagChanged) {
            this._triggerCountryChange();
          }
        }
      }, {
        key: "setPlaceholderNumberType",
        value: function setPlaceholderNumberType(type) {
          this.options.placeholderNumberType = type;

          this._updatePlaceholder();
        }
      }]);

      return Iti;
    }();
    /********************
    *  STATIC METHODS
    ********************/
    // get the country data object


    intlTelInputGlobals.getCountryData = function () {
      return allCountries;
    }; // inject a <script> element to load utils.js


    var injectScript = function injectScript(path, handleSuccess, handleFailure) {
      // inject a new script element into the page
      var script = document.createElement("script");

      script.onload = function () {
        forEachInstance("handleUtils");

        if (handleSuccess) {
          handleSuccess();
        }
      };

      script.onerror = function () {
        forEachInstance("rejectUtilsScriptPromise");

        if (handleFailure) {
          handleFailure();
        }
      };

      script.className = "iti-load-utils";
      script.async = true;
      script.src = path;
      document.body.appendChild(script);
    }; // load the utils script


    intlTelInputGlobals.loadUtils = function (path) {
      // 2 options:
      // 1) not already started loading (start)
      // 2) already started loading (do nothing - just wait for the onload callback to fire, which will
      // trigger handleUtils on all instances, invoking their resolveUtilsScriptPromise functions)
      if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) {
        // only do this once
        window.intlTelInputGlobals.startedLoadingUtilsScript = true; // if we have promises, then return a promise

        if (typeof Promise !== "undefined") {
          return new Promise(function (resolve, reject) {
            return injectScript(path, resolve, reject);
          });
        }

        injectScript(path);
      }

      return null;
    }; // default options


    intlTelInputGlobals.defaults = defaults; // version

    intlTelInputGlobals.version = "18.2.1"; // convenience wrapper

    return function (input, options) {
      var iti = new Iti(input, options);

      iti._init();

      input.setAttribute("data-intl-tel-input-id", iti.id);
      window.intlTelInputGlobals.instances[iti.id] = iti;
      return iti;
    };
  }();
});

/***/ }),

/***/ "./node_modules/intl-tel-input/index.js":
/*!**********************************************!*\
  !*** ./node_modules/intl-tel-input/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Exposing intl-tel-input as a component
 */
module.exports = __webpack_require__(/*! ./build/js/intlTelInput */ "./node_modules/intl-tel-input/build/js/intlTelInput.js");

/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMException": () => (/* binding */ DOMException),
/* harmony export */   "Headers": () => (/* binding */ Headers),
/* harmony export */   "Request": () => (/* binding */ Request),
/* harmony export */   "Response": () => (/* binding */ Response),
/* harmony export */   "fetch": () => (/* binding */ fetch)
/* harmony export */ });
var global = typeof globalThis !== 'undefined' && globalThis || typeof self !== 'undefined' && self || typeof global !== 'undefined' && global;
var support = {
  searchParams: 'URLSearchParams' in global,
  iterable: 'Symbol' in global && 'iterator' in Symbol,
  blob: 'FileReader' in global && 'Blob' in global && function () {
    try {
      new Blob();
      return true;
    } catch (e) {
      return false;
    }
  }(),
  formData: 'FormData' in global,
  arrayBuffer: 'ArrayBuffer' in global
};

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj);
}

if (support.arrayBuffer) {
  var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

  var isArrayBufferView = ArrayBuffer.isView || function (obj) {
    return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
  };
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name);
  }

  if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
    throw new TypeError('Invalid character in header field name: "' + name + '"');
  }

  return name.toLowerCase();
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value);
  }

  return value;
} // Build a destructive iterator for the value list


function iteratorFor(items) {
  var iterator = {
    next: function () {
      var value = items.shift();
      return {
        done: value === undefined,
        value: value
      };
    }
  };

  if (support.iterable) {
    iterator[Symbol.iterator] = function () {
      return iterator;
    };
  }

  return iterator;
}

function Headers(headers) {
  this.map = {};

  if (headers instanceof Headers) {
    headers.forEach(function (value, name) {
      this.append(name, value);
    }, this);
  } else if (Array.isArray(headers)) {
    headers.forEach(function (header) {
      this.append(header[0], header[1]);
    }, this);
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function (name) {
      this.append(name, headers[name]);
    }, this);
  }
}

Headers.prototype.append = function (name, value) {
  name = normalizeName(name);
  value = normalizeValue(value);
  var oldValue = this.map[name];
  this.map[name] = oldValue ? oldValue + ', ' + value : value;
};

Headers.prototype['delete'] = function (name) {
  delete this.map[normalizeName(name)];
};

Headers.prototype.get = function (name) {
  name = normalizeName(name);
  return this.has(name) ? this.map[name] : null;
};

Headers.prototype.has = function (name) {
  return this.map.hasOwnProperty(normalizeName(name));
};

Headers.prototype.set = function (name, value) {
  this.map[normalizeName(name)] = normalizeValue(value);
};

Headers.prototype.forEach = function (callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this);
    }
  }
};

Headers.prototype.keys = function () {
  var items = [];
  this.forEach(function (value, name) {
    items.push(name);
  });
  return iteratorFor(items);
};

Headers.prototype.values = function () {
  var items = [];
  this.forEach(function (value) {
    items.push(value);
  });
  return iteratorFor(items);
};

Headers.prototype.entries = function () {
  var items = [];
  this.forEach(function (value, name) {
    items.push([name, value]);
  });
  return iteratorFor(items);
};

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'));
  }

  body.bodyUsed = true;
}

function fileReaderReady(reader) {
  return new Promise(function (resolve, reject) {
    reader.onload = function () {
      resolve(reader.result);
    };

    reader.onerror = function () {
      reject(reader.error);
    };
  });
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader();
  var promise = fileReaderReady(reader);
  reader.readAsArrayBuffer(blob);
  return promise;
}

function readBlobAsText(blob) {
  var reader = new FileReader();
  var promise = fileReaderReady(reader);
  reader.readAsText(blob);
  return promise;
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf);
  var chars = new Array(view.length);

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i]);
  }

  return chars.join('');
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0);
  } else {
    var view = new Uint8Array(buf.byteLength);
    view.set(new Uint8Array(buf));
    return view.buffer;
  }
}

function Body() {
  this.bodyUsed = false;

  this._initBody = function (body) {
    /*
      fetch-mock wraps the Response object in an ES6 Proxy to
      provide useful test harness features such as flush. However, on
      ES5 browsers without fetch or Proxy support pollyfills must be used;
      the proxy-pollyfill is unable to proxy an attribute unless it exists
      on the object before the Proxy is created. This change ensures
      Response.bodyUsed exists on the instance, while maintaining the
      semantic of setting Request.bodyUsed in the constructor before
      _initBody is called.
    */
    this.bodyUsed = this.bodyUsed;
    this._bodyInit = body;

    if (!body) {
      this._bodyText = '';
    } else if (typeof body === 'string') {
      this._bodyText = body;
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body;
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body;
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString();
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer); // IE 10-11 can't handle a DataView body.

      this._bodyInit = new Blob([this._bodyArrayBuffer]);
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body);
    } else {
      this._bodyText = body = Object.prototype.toString.call(body);
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8');
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type);
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
      }
    }
  };

  if (support.blob) {
    this.blob = function () {
      var rejected = consumed(this);

      if (rejected) {
        return rejected;
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]));
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob');
      } else {
        return Promise.resolve(new Blob([this._bodyText]));
      }
    };

    this.arrayBuffer = function () {
      if (this._bodyArrayBuffer) {
        var isConsumed = consumed(this);

        if (isConsumed) {
          return isConsumed;
        }

        if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
          return Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength));
        } else {
          return Promise.resolve(this._bodyArrayBuffer);
        }
      } else {
        return this.blob().then(readBlobAsArrayBuffer);
      }
    };
  }

  this.text = function () {
    var rejected = consumed(this);

    if (rejected) {
      return rejected;
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob);
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text');
    } else {
      return Promise.resolve(this._bodyText);
    }
  };

  if (support.formData) {
    this.formData = function () {
      return this.text().then(decode);
    };
  }

  this.json = function () {
    return this.text().then(JSON.parse);
  };

  return this;
} // HTTP methods whose capitalization should be normalized


var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

function normalizeMethod(method) {
  var upcased = method.toUpperCase();
  return methods.indexOf(upcased) > -1 ? upcased : method;
}

function Request(input, options) {
  if (!(this instanceof Request)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  }

  options = options || {};
  var body = options.body;

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read');
    }

    this.url = input.url;
    this.credentials = input.credentials;

    if (!options.headers) {
      this.headers = new Headers(input.headers);
    }

    this.method = input.method;
    this.mode = input.mode;
    this.signal = input.signal;

    if (!body && input._bodyInit != null) {
      body = input._bodyInit;
      input.bodyUsed = true;
    }
  } else {
    this.url = String(input);
  }

  this.credentials = options.credentials || this.credentials || 'same-origin';

  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers);
  }

  this.method = normalizeMethod(options.method || this.method || 'GET');
  this.mode = options.mode || this.mode || null;
  this.signal = options.signal || this.signal;
  this.referrer = null;

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests');
  }

  this._initBody(body);

  if (this.method === 'GET' || this.method === 'HEAD') {
    if (options.cache === 'no-store' || options.cache === 'no-cache') {
      // Search for a '_' parameter in the query string
      var reParamSearch = /([?&])_=[^&]*/;

      if (reParamSearch.test(this.url)) {
        // If it already exists then set the value with the current time
        this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime());
      } else {
        // Otherwise add a new '_' parameter to the end with the current time
        var reQueryString = /\?/;
        this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime();
      }
    }
  }
}

Request.prototype.clone = function () {
  return new Request(this, {
    body: this._bodyInit
  });
};

function decode(body) {
  var form = new FormData();
  body.trim().split('&').forEach(function (bytes) {
    if (bytes) {
      var split = bytes.split('=');
      var name = split.shift().replace(/\+/g, ' ');
      var value = split.join('=').replace(/\+/g, ' ');
      form.append(decodeURIComponent(name), decodeURIComponent(value));
    }
  });
  return form;
}

function parseHeaders(rawHeaders) {
  var headers = new Headers(); // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2

  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' '); // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
  // https://github.com/github/fetch/issues/748
  // https://github.com/zloirock/core-js/issues/751

  preProcessedHeaders.split('\r').map(function (header) {
    return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header;
  }).forEach(function (line) {
    var parts = line.split(':');
    var key = parts.shift().trim();

    if (key) {
      var value = parts.join(':').trim();
      headers.append(key, value);
    }
  });
  return headers;
}

Body.call(Request.prototype);
function Response(bodyInit, options) {
  if (!(this instanceof Response)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  }

  if (!options) {
    options = {};
  }

  this.type = 'default';
  this.status = options.status === undefined ? 200 : options.status;
  this.ok = this.status >= 200 && this.status < 300;
  this.statusText = options.statusText === undefined ? '' : '' + options.statusText;
  this.headers = new Headers(options.headers);
  this.url = options.url || '';

  this._initBody(bodyInit);
}
Body.call(Response.prototype);

Response.prototype.clone = function () {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  });
};

Response.error = function () {
  var response = new Response(null, {
    status: 0,
    statusText: ''
  });
  response.type = 'error';
  return response;
};

var redirectStatuses = [301, 302, 303, 307, 308];

Response.redirect = function (url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code');
  }

  return new Response(null, {
    status: status,
    headers: {
      location: url
    }
  });
};

var DOMException = global.DOMException;

try {
  new DOMException();
} catch (err) {
  DOMException = function (message, name) {
    this.message = message;
    this.name = name;
    var error = Error(message);
    this.stack = error.stack;
  };

  DOMException.prototype = Object.create(Error.prototype);
  DOMException.prototype.constructor = DOMException;
}

function fetch(input, init) {
  return new Promise(function (resolve, reject) {
    var request = new Request(input, init);

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'));
    }

    var xhr = new XMLHttpRequest();

    function abortXhr() {
      xhr.abort();
    }

    xhr.onload = function () {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      };
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
      var body = 'response' in xhr ? xhr.response : xhr.responseText;
      setTimeout(function () {
        resolve(new Response(body, options));
      }, 0);
    };

    xhr.onerror = function () {
      setTimeout(function () {
        reject(new TypeError('Network request failed'));
      }, 0);
    };

    xhr.ontimeout = function () {
      setTimeout(function () {
        reject(new TypeError('Network request failed'));
      }, 0);
    };

    xhr.onabort = function () {
      setTimeout(function () {
        reject(new DOMException('Aborted', 'AbortError'));
      }, 0);
    };

    function fixUrl(url) {
      try {
        return url === '' && global.location.href ? global.location.href : url;
      } catch (e) {
        return url;
      }
    }

    xhr.open(request.method, fixUrl(request.url), true);

    if (request.credentials === 'include') {
      xhr.withCredentials = true;
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false;
    }

    if ('responseType' in xhr) {
      if (support.blob) {
        xhr.responseType = 'blob';
      } else if (support.arrayBuffer && request.headers.get('Content-Type') && request.headers.get('Content-Type').indexOf('application/octet-stream') !== -1) {
        xhr.responseType = 'arraybuffer';
      }
    }

    if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers)) {
      Object.getOwnPropertyNames(init.headers).forEach(function (name) {
        xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
      });
    } else {
      request.headers.forEach(function (value, name) {
        xhr.setRequestHeader(name, value);
      });
    }

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr);

      xhr.onreadystatechange = function () {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr);
        }
      };
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
  });
}
fetch.polyfill = true;

if (!global.fetch) {
  global.fetch = fetch;
  global.Headers = Headers;
  global.Request = Request;
  global.Response = Response;
}

/***/ }),

/***/ "./src/scripts/accordion.js":
/*!**********************************!*\
  !*** ./src/scripts/accordion.js ***!
  \**********************************/
/***/ (() => {

var accordions = document.querySelectorAll('[data-accordion]');

if (accordions.length) {
  accordions.forEach(function (accordion) {
    var rows = accordion.querySelectorAll('[data-accordion-row]') || [];
    rows.forEach(function (row) {
      var header = row.querySelector('[data-accordion-header]');
      var content = row.querySelector('[data-accordion-content]');

      var toggle = function toggle() {
        if (content.style.maxHeight) {
          header.classList.remove('_active');
          content.classList.remove('_active');
          content.style.maxHeight = null;
        } else {
          header.classList.add('_active');
          content.classList.add('_active');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      };

      header.addEventListener('click', toggle);
    });
  });
}

/***/ }),

/***/ "./src/scripts/forms.js":
/*!******************************!*\
  !*** ./src/scripts/forms.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var intl_tel_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! intl-tel-input */ "./node_modules/intl-tel-input/index.js");
/* harmony import */ var intl_tel_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(intl_tel_input__WEBPACK_IMPORTED_MODULE_1__);


var inputClasses = document.querySelectorAll(".js-input-classes") || [];
inputClasses.forEach(function (input) {
  input.addEventListener("keyup", function (e) {
    if (!!e.target.value) {
      input.classList.add('_filled');
    } else {
      input.classList.remove('_filled');
    }
  });
  input.addEventListener("change", function (e) {
    if (!!e.target.value) {
      input.classList.add('_filled');
    } else {
      input.classList.remove('_filled');
    }
  });
  input.addEventListener("focus", function (e) {
    input.classList.add('_focused');
  });
  input.addEventListener("blur", function (e) {
    input.classList.remove('_focused');
  });
});
var phoneInputs = document.querySelectorAll(".js-input-phone") || [];
phoneInputs.forEach(function (el) {
  var iti = intl_tel_input__WEBPACK_IMPORTED_MODULE_1___default()(el, {
    initialCountry: "ru",
    preferredCountries: ["ru", "kz", "ua", "by"],
    localizedCountries: {
      ru: "Россия",
      kz: "Казахстан",
      ua: "Украина",
      by: "Беларусь"
    }
  });
  el.addEventListener("countrychange", function (e) {
    var country = iti.getSelectedCountryData();

    if (country.dialCode) {
      $(el).inputmasks("remove");
      $(el).inputmask("+#{*}", maskOpts.inputmask);
      $(el).inputmasks($.extend(true, {}, maskOpts, {
        list: listCountries
      }));
    }
  });
  var listCountries = $.masksSort($.masksLoad(inputmaskParams.phoneCodes), ['#'], /[0-9]|#/, "mask");
  var maskOpts = {
    inputmask: {
      definitions: {
        '#': {
          validator: "[0-9]",
          cardinality: 1
        }
      },
      showMaskOnHover: false,
      autoUnmask: true,
      clearMaskOnLostFocus: false,
      onUnMask: function onUnMask(maskedValue, unmaskedValue) {
        return '+' + unmaskedValue;
      }
    },
    match: /[0-9]/,
    replace: '#',
    listKey: "mask"
  };
  var maskIsInit = false;
  el.addEventListener('focus', function () {
    if (!maskIsInit) {
      maskIsInit = true;
      el.value = '7';
      el.dispatchEvent(new Event('change'));
      $(el).inputmasks($.extend(true, {}, maskOpts, {
        list: listCountries
      }));
    }
  });
});
jQuery.validator.addMethod("laxEmail", function (value, element) {
  return this.optional(element) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
}, "Некорректный e-mail.");
jQuery.validator.addMethod("maskedPhone", function (value, element) {
  return element.imask.masked.isComplete;
}, "Некорректный телефон.");

function submitForm(form, validator) {
  var emailInputs = form.querySelectorAll(".js-input-email") || [];
  emailInputs.forEach(function (el) {
    el.value = el.value.trim().replace(/[\u0000-\u0008,\u000A-\u001F,\u007F-\u00A0]+/g, '');
  });
  fetch(form.getAttribute("action"), {
    method: "POST",
    body: new FormData(form)
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    if (response.success) {
      form.reset();
      validator.showErrors({
        action: response.message
      });
      $("#action-error", form).addClass("error_success");
      setTimeout(function () {
        validator.resetForm();
      }, 4000);

      if (response.redirect) {
        window.location = response.redirect;
      }
    } else {
      validator.showErrors({
        action: response.message
      });
    }
  });
}

var individualFormValidator = $("#individual-form").validate({
  rules: {
    name: {
      required: true
    },
    phone: {
      required: true
    },
    approve: {
      required: true
    },
    telegram: {
      required: {
        depends: function depends(element) {
          return $("#contact-field").val() === 'Telegram';
        }
      }
    }
  },
  messages: {
    name: {
      required: "Введите имя"
    },
    phone: {
      required: "Введите телефон (WhatsApp, Viber)"
    },
    approve: {
      required: "Вы должны согласиться с условиями"
    },
    telegram: {
      required: "Введите аккаунт Telegram"
    }
  },
  errorPlacement: function errorPlacement(error, element) {
    if (element.hasClass('js-input-phone')) {
      error.insertAfter(element.parent().parent());
    } else if (element.hasClass('js-input-classes')) {
      error.insertAfter(element.parent());
    } else if (element.parent().prop("tagName") === 'LABEL') {
      error.insertAfter(element.parent());
    } else {
      element.after(error);
    }
  },
  submitHandler: function submitHandler(form) {
    submitForm(form, individualFormValidator);
  }
});
var faqFormValidator = $("#faq-form").validate({
  rules: {
    email: {
      required: true,
      email: true,
      laxEmail: true
    }
  },
  messages: {
    email: {
      required: "Введите e-mail",
      email: "Некорректный e-mail"
    }
  },
  errorPlacement: function errorPlacement(error, element) {
    var approveEl = element.closest('.modal-form__approve');

    if (approveEl.length) {
      approveEl.after(error);
    } else {
      element.after(error);
    }
  },
  submitHandler: function submitHandler(form) {
    submitForm(form, faqFormValidator);
  }
});

/***/ }),

/***/ "./src/scripts/modals.js":
/*!*******************************!*\
  !*** ./src/scripts/modals.js ***!
  \*******************************/
/***/ (() => {

var isVisible = function isVisible(elem) {
  return !!elem && !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
};

var modalToggles = document.querySelectorAll("[data-modal-toggle]");

if (modalToggles.length) {
  modalToggles.forEach(function (toggle) {
    var modal = document.querySelector(toggle.dataset.modalToggle);
    var close = modal.querySelector("[data-modal-close]");

    var outsideClickListener = function outsideClickListener(event) {
      if (!modal.contains(event.target) && isVisible(modal) && !toggle.contains(event.target)) {
        hide();
        removeClickListener();
      }
    };

    var removeClickListener = function removeClickListener() {
      document.removeEventListener("click", outsideClickListener);
    };

    var show = function show() {
      modal.classList.add("_opened");
      document.addEventListener("click", outsideClickListener);
    };

    var hide = function hide() {
      modal.classList.remove("_opened");
    };

    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      show();
    });
    close.addEventListener("click", function (e) {
      e.preventDefault();
      hide();
    });
  });
}

/***/ }),

/***/ "./src/scripts/scrolls.js":
/*!********************************!*\
  !*** ./src/scripts/scrolls.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! throttle-debounce */ "./node_modules/throttle-debounce/esm/index.js");

var scrollup = document.querySelector(".ui-scrollup");
var stickyMenu = document.querySelector('.s-header__menu');
var stickyMenuPoint = stickyMenu.offsetTop;
var scrollHandler = (0,throttle_debounce__WEBPACK_IMPORTED_MODULE_0__.throttle)(10, function () {
  if (window.scrollY > 400) {
    scrollup.classList.add("ui-scrollup_fixed");
  } else {
    scrollup.classList.remove("ui-scrollup_fixed");
  }

  if (window.pageYOffset >= stickyMenuPoint) {
    stickyMenu.classList.add('s-header__menu_sticky');
  } else {
    stickyMenu.classList.remove('s-header__menu_sticky');
  }
});
window.addEventListener("scroll", scrollHandler);
var scrolls = document.querySelectorAll("[data-scroll]") || [];
scrolls.forEach(function (scroll) {
  return scroll.addEventListener("click", function (e) {
    e.preventDefault();
    var menus = document.querySelectorAll('.s-header__menu') || [];
    menus.forEach(function (menu) {
      menu.classList.remove('s-header__menu_opened');
    });
    var offset = 0;
    var top = 0;
    var left = 0;

    if (scroll.dataset.scroll) {
      var target = document.querySelector(scroll.dataset.scroll);

      if (target) {
        top = target.offsetTop - offset;
      }
    }

    top = top * $('html').css('zoom') || 1;
    $([document.documentElement, document.body]).animate({
      scrollTop: top
    }, 2000);
  });
});

/***/ }),

/***/ "./node_modules/throttle-debounce/esm/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/throttle-debounce/esm/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounce": () => (/* binding */ debounce),
/* harmony export */   "throttle": () => (/* binding */ throttle)
/* harmony export */ });
/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param {number} delay -                  A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher)
 *                                            are most useful.
 * @param {Function} callback -               A function to be executed after delay milliseconds. The `this` context and all arguments are passed through,
 *                                            as-is, to `callback` when the throttled-function is executed.
 * @param {object} [options] -              An object to configure options.
 * @param {boolean} [options.noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds
 *                                            while the throttled-function is being called. If noTrailing is false or unspecified, callback will be executed
 *                                            one final time after the last throttled-function call. (After the throttled-function has not been called for
 *                                            `delay` milliseconds, the internal counter is reset).
 * @param {boolean} [options.noLeading] -   Optional, defaults to false. If noLeading is false, the first throttled-function call will execute callback
 *                                            immediately. If noLeading is true, the first the callback execution will be skipped. It should be noted that
 *                                            callback will never executed if both noLeading = true and noTrailing = true.
 * @param {boolean} [options.debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is
 *                                            false (at end), schedule `callback` to execute after `delay` ms.
 *
 * @returns {Function} A new, throttled, function.
 */
function throttle(delay, callback, options) {
  var _ref = options || {},
      _ref$noTrailing = _ref.noTrailing,
      noTrailing = _ref$noTrailing === void 0 ? false : _ref$noTrailing,
      _ref$noLeading = _ref.noLeading,
      noLeading = _ref$noLeading === void 0 ? false : _ref$noLeading,
      _ref$debounceMode = _ref.debounceMode,
      debounceMode = _ref$debounceMode === void 0 ? undefined : _ref$debounceMode;
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */


  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel(options) {
    var _ref2 = options || {},
        _ref2$upcomingOnly = _ref2.upcomingOnly,
        upcomingOnly = _ref2$upcomingOnly === void 0 ? false : _ref2$upcomingOnly;

    clearExistingTimeout();
    cancelled = !upcomingOnly;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }

    var self = this;
    var elapsed = Date.now() - lastExec;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (!noLeading && debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`
       * and noLeading != true.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      if (noLeading) {
        /*
         * In throttle mode with noLeading, if `delay` time has
         * been exceeded, update `lastExec` and schedule `callback`
         * to execute after `delay` ms.
         */
        lastExec = Date.now();

        if (!noTrailing) {
          timeoutID = setTimeout(debounceMode ? clear : exec, delay);
        }
      } else {
        /*
         * In throttle mode without noLeading, if `delay` time has been exceeded, execute
         * `callback`.
         */
        exec();
      }
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}
/* eslint-disable no-undefined */

/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param {number} delay -               A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param {Function} callback -          A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                        to `callback` when the debounced-function is executed.
 * @param {object} [options] -           An object to configure options.
 * @param {boolean} [options.atBegin] -  Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                        after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                        (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 *
 * @returns {Function} A new, debounced function.
 */


function debounce(delay, callback, options) {
  var _ref = options || {},
      _ref$atBegin = _ref.atBegin,
      atBegin = _ref$atBegin === void 0 ? false : _ref$atBegin;

  return throttle(delay, callback, {
    debounceMode: atBegin !== false
  });
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************!*\
  !*** ./src/scripts/bundle.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms */ "./src/scripts/forms.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modals */ "./src/scripts/modals.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modals__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scrolls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrolls */ "./src/scripts/scrolls.js");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion */ "./src/scripts/accordion.js");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_accordion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! throttle-debounce */ "./node_modules/throttle-debounce/esm/index.js");






var removeFocusableListener = function removeFocusableListener() {
  document.querySelector("body").classList.remove("page-focusable");
  document.removeEventListener("click", removeFocusableListener);
};

document.addEventListener("keyup", function (e) {
  if (e.keyCode === 9) {
    document.querySelector("body").classList.add("page-focusable");
    document.addEventListener("click", removeFocusableListener);
  }
}, false);
var days = document.querySelectorAll('.section-schedule__days-value') || [];
var maxWidth = 0;
days.forEach(function (item) {
  maxWidth = Math.max(maxWidth, item.offsetWidth);
});
days.forEach(function (item) {
  item.style.width = "".concat(maxWidth, "px");
});
var menuToggles = document.querySelectorAll('.s-header__menu-toggle') || [];
menuToggles.forEach(function (menuToggle) {
  var menu = menuToggle.closest('.s-header__menu');
  menuToggle.addEventListener('click', function () {
    menu.classList.toggle('s-header__menu_opened');
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixVQUFDcW9CLFVBQUQsRUFBZ0I7RUFDbEMsSUFBTWpDLElBQUksR0FBR2lDLFVBQVUsQ0FBQ2hqQixPQUFYLENBQW1CLGlCQUFuQixDQUFiO0VBQ0FnakIsVUFBVSxDQUFDeGMsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBTTtJQUN6Q3VhLElBQUksQ0FBQ2xoQixTQUFMLENBQWV3YixNQUFmLENBQXNCLHVCQUF0QjtFQUNELENBRkQ7QUFHRCxDQUxELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdmVybnVzLXByb21ldGhldXMvLi9ub2RlX21vZHVsZXMvaW50bC10ZWwtaW5wdXQvYnVpbGQvanMvaW50bFRlbElucHV0LmpzIiwid2VicGFjazovL2F2ZXJudXMtcHJvbWV0aGV1cy8uL25vZGVfbW9kdWxlcy9pbnRsLXRlbC1pbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdmVybnVzLXByb21ldGhldXMvLi9ub2RlX21vZHVsZXMvd2hhdHdnLWZldGNoL2ZldGNoLmpzIiwid2VicGFjazovL2F2ZXJudXMtcHJvbWV0aGV1cy8uL3NyYy9zY3JpcHRzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly9hdmVybnVzLXByb21ldGhldXMvLi9zcmMvc2NyaXB0cy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly9hdmVybnVzLXByb21ldGhldXMvLi9zcmMvc2NyaXB0cy9tb2RhbHMuanMiLCJ3ZWJwYWNrOi8vYXZlcm51cy1wcm9tZXRoZXVzLy4vc3JjL3NjcmlwdHMvc2Nyb2xscy5qcyIsIndlYnBhY2s6Ly9hdmVybnVzLXByb21ldGhldXMvLi4vdGhyb3R0bGUuanMiLCJ3ZWJwYWNrOi8vYXZlcm51cy1wcm9tZXRoZXVzLy4uL2RlYm91bmNlLmpzIiwid2VicGFjazovL2F2ZXJudXMtcHJvbWV0aGV1cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hdmVybnVzLXByb21ldGhldXMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYXZlcm51cy1wcm9tZXRoZXVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hdmVybnVzLXByb21ldGhldXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hdmVybnVzLXByb21ldGhldXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hdmVybnVzLXByb21ldGhldXMvLi9zcmMvc2NyaXB0cy9idW5kbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEludGVybmF0aW9uYWwgVGVsZXBob25lIElucHV0IHYxOC4yLjFcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYWNrb2Nuci9pbnRsLXRlbC1pbnB1dC5naXRcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG5cbi8vIHdyYXAgaW4gVU1EXG4oZnVuY3Rpb24oZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIG1vZHVsZS5leHBvcnRzKSBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTsgZWxzZSB3aW5kb3cuaW50bFRlbElucHV0ID0gZmFjdG9yeSgpO1xufSkoZnVuY3Rpb24odW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBBcnJheSBvZiBjb3VudHJ5IG9iamVjdHMgZm9yIHRoZSBmbGFnIGRyb3Bkb3duLlxuICAgICAgICAvLyBIZXJlIGlzIHRoZSBjcml0ZXJpYSBmb3IgdGhlIHBsdWdpbiB0byBzdXBwb3J0IGEgZ2l2ZW4gY291bnRyeS90ZXJyaXRvcnlcbiAgICAgICAgLy8gLSBJdCBoYXMgYW4gaXNvMiBjb2RlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fMzE2Ni0xX2FscGhhLTJcbiAgICAgICAgLy8gLSBJdCBoYXMgaXQncyBvd24gY291bnRyeSBjYWxsaW5nIGNvZGUgKGl0IGlzIG5vdCBhIHN1Yi1yZWdpb24gb2YgYW5vdGhlciBjb3VudHJ5KTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGlzdF9vZl9jb3VudHJ5X2NhbGxpbmdfY29kZXNcbiAgICAgICAgLy8gLSBJdCBoYXMgYSBmbGFnIGluIHRoZSByZWdpb24tZmxhZ3MgcHJvamVjdDogaHR0cHM6Ly9naXRodWIuY29tL2JlaGRhZC9yZWdpb24tZmxhZ3MvdHJlZS9naC1wYWdlcy9wbmdcbiAgICAgICAgLy8gLSBJdCBpcyBzdXBwb3J0ZWQgYnkgbGlicGhvbmVudW1iZXIgKGl0IG11c3QgYmUgbGlzdGVkIG9uIHRoaXMgcGFnZSk6IGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGVpMThuL2xpYnBob25lbnVtYmVyL2Jsb2IvbWFzdGVyL3Jlc291cmNlcy9TaG9ydE51bWJlck1ldGFkYXRhLnhtbFxuICAgICAgICAvLyBFYWNoIGNvdW50cnkgYXJyYXkgaGFzIHRoZSBmb2xsb3dpbmcgaW5mb3JtYXRpb246XG4gICAgICAgIC8vIFtcbiAgICAgICAgLy8gICAgQ291bnRyeSBuYW1lLFxuICAgICAgICAvLyAgICBpc28yIGNvZGUsXG4gICAgICAgIC8vICAgIEludGVybmF0aW9uYWwgZGlhbCBjb2RlLFxuICAgICAgICAvLyAgICBPcmRlciAoaWYgPjEgY291bnRyeSB3aXRoIHNhbWUgZGlhbCBjb2RlKSxcbiAgICAgICAgLy8gICAgQXJlYSBjb2Rlc1xuICAgICAgICAvLyBdXG4gICAgICAgIHZhciBhbGxDb3VudHJpZXMgPSBbIFsgXCJBZmdoYW5pc3RhbiAo4oCr2KfZgdi62KfZhtiz2KrYp9mG4oCs4oCOKVwiLCBcImFmXCIsIFwiOTNcIiBdLCBbIFwiQWxiYW5pYSAoU2hxaXDDq3JpKVwiLCBcImFsXCIsIFwiMzU1XCIgXSwgWyBcIkFsZ2VyaWEgKOKAq9in2YTYrNiy2KfYptix4oCs4oCOKVwiLCBcImR6XCIsIFwiMjEzXCIgXSwgWyBcIkFtZXJpY2FuIFNhbW9hXCIsIFwiYXNcIiwgXCIxXCIsIDUsIFsgXCI2ODRcIiBdIF0sIFsgXCJBbmRvcnJhXCIsIFwiYWRcIiwgXCIzNzZcIiBdLCBbIFwiQW5nb2xhXCIsIFwiYW9cIiwgXCIyNDRcIiBdLCBbIFwiQW5ndWlsbGFcIiwgXCJhaVwiLCBcIjFcIiwgNiwgWyBcIjI2NFwiIF0gXSwgWyBcIkFudGlndWEgYW5kIEJhcmJ1ZGFcIiwgXCJhZ1wiLCBcIjFcIiwgNywgWyBcIjI2OFwiIF0gXSwgWyBcIkFyZ2VudGluYVwiLCBcImFyXCIsIFwiNTRcIiBdLCBbIFwiQXJtZW5pYSAo1YDVodW11aHVvdW/1aHVtilcIiwgXCJhbVwiLCBcIjM3NFwiIF0sIFsgXCJBcnViYVwiLCBcImF3XCIsIFwiMjk3XCIgXSwgWyBcIkFzY2Vuc2lvbiBJc2xhbmRcIiwgXCJhY1wiLCBcIjI0N1wiIF0sIFsgXCJBdXN0cmFsaWFcIiwgXCJhdVwiLCBcIjYxXCIsIDAgXSwgWyBcIkF1c3RyaWEgKMOWc3RlcnJlaWNoKVwiLCBcImF0XCIsIFwiNDNcIiBdLCBbIFwiQXplcmJhaWphbiAoQXrJmXJiYXljYW4pXCIsIFwiYXpcIiwgXCI5OTRcIiBdLCBbIFwiQmFoYW1hc1wiLCBcImJzXCIsIFwiMVwiLCA4LCBbIFwiMjQyXCIgXSBdLCBbIFwiQmFocmFpbiAo4oCr2KfZhNio2K3YsdmK2YbigKzigI4pXCIsIFwiYmhcIiwgXCI5NzNcIiBdLCBbIFwiQmFuZ2xhZGVzaCAo4Kas4Ka+4KaC4Kay4Ka+4Kam4KeH4Ka2KVwiLCBcImJkXCIsIFwiODgwXCIgXSwgWyBcIkJhcmJhZG9zXCIsIFwiYmJcIiwgXCIxXCIsIDksIFsgXCIyNDZcIiBdIF0sIFsgXCJCZWxhcnVzICjQkdC10LvQsNGA0YPRgdGMKVwiLCBcImJ5XCIsIFwiMzc1XCIgXSwgWyBcIkJlbGdpdW0gKEJlbGdpw6spXCIsIFwiYmVcIiwgXCIzMlwiIF0sIFsgXCJCZWxpemVcIiwgXCJielwiLCBcIjUwMVwiIF0sIFsgXCJCZW5pbiAoQsOpbmluKVwiLCBcImJqXCIsIFwiMjI5XCIgXSwgWyBcIkJlcm11ZGFcIiwgXCJibVwiLCBcIjFcIiwgMTAsIFsgXCI0NDFcIiBdIF0sIFsgXCJCaHV0YW4gKOC9oOC9luC+suC9tOC9gilcIiwgXCJidFwiLCBcIjk3NVwiIF0sIFsgXCJCb2xpdmlhXCIsIFwiYm9cIiwgXCI1OTFcIiBdLCBbIFwiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYSAo0JHQvtGB0L3QsCDQuCDQpdC10YDRhtC10LPQvtCy0LjQvdCwKVwiLCBcImJhXCIsIFwiMzg3XCIgXSwgWyBcIkJvdHN3YW5hXCIsIFwiYndcIiwgXCIyNjdcIiBdLCBbIFwiQnJhemlsIChCcmFzaWwpXCIsIFwiYnJcIiwgXCI1NVwiIF0sIFsgXCJCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnlcIiwgXCJpb1wiLCBcIjI0NlwiIF0sIFsgXCJCcml0aXNoIFZpcmdpbiBJc2xhbmRzXCIsIFwidmdcIiwgXCIxXCIsIDExLCBbIFwiMjg0XCIgXSBdLCBbIFwiQnJ1bmVpXCIsIFwiYm5cIiwgXCI2NzNcIiBdLCBbIFwiQnVsZ2FyaWEgKNCR0YrQu9Cz0LDRgNC40Y8pXCIsIFwiYmdcIiwgXCIzNTlcIiBdLCBbIFwiQnVya2luYSBGYXNvXCIsIFwiYmZcIiwgXCIyMjZcIiBdLCBbIFwiQnVydW5kaSAoVWJ1cnVuZGkpXCIsIFwiYmlcIiwgXCIyNTdcIiBdLCBbIFwiQ2FtYm9kaWEgKOGegOGemOGfkuGeluGeu+Geh+GetilcIiwgXCJraFwiLCBcIjg1NVwiIF0sIFsgXCJDYW1lcm9vbiAoQ2FtZXJvdW4pXCIsIFwiY21cIiwgXCIyMzdcIiBdLCBbIFwiQ2FuYWRhXCIsIFwiY2FcIiwgXCIxXCIsIDEsIFsgXCIyMDRcIiwgXCIyMjZcIiwgXCIyMzZcIiwgXCIyNDlcIiwgXCIyNTBcIiwgXCIyNjNcIiwgXCIyODlcIiwgXCIzMDZcIiwgXCIzNDNcIiwgXCIzNTRcIiwgXCIzNjVcIiwgXCIzNjdcIiwgXCIzNjhcIiwgXCIzODJcIiwgXCIzODdcIiwgXCI0MDNcIiwgXCI0MTZcIiwgXCI0MThcIiwgXCI0MjhcIiwgXCI0MzFcIiwgXCI0MzdcIiwgXCI0MzhcIiwgXCI0NTBcIiwgXCI1ODRcIiwgXCI0NjhcIiwgXCI0NzRcIiwgXCI1MDZcIiwgXCI1MTRcIiwgXCI1MTlcIiwgXCI1NDhcIiwgXCI1NzlcIiwgXCI1ODFcIiwgXCI1ODRcIiwgXCI1ODdcIiwgXCI2MDRcIiwgXCI2MTNcIiwgXCI2MzlcIiwgXCI2NDdcIiwgXCI2NzJcIiwgXCI2ODNcIiwgXCI3MDVcIiwgXCI3MDlcIiwgXCI3NDJcIiwgXCI3NTNcIiwgXCI3NzhcIiwgXCI3ODBcIiwgXCI3ODJcIiwgXCI4MDdcIiwgXCI4MTlcIiwgXCI4MjVcIiwgXCI4NjdcIiwgXCI4NzNcIiwgXCI5MDJcIiwgXCI5MDVcIiBdIF0sIFsgXCJDYXBlIFZlcmRlIChLYWJ1IFZlcmRpKVwiLCBcImN2XCIsIFwiMjM4XCIgXSwgWyBcIkNhcmliYmVhbiBOZXRoZXJsYW5kc1wiLCBcImJxXCIsIFwiNTk5XCIsIDEsIFsgXCIzXCIsIFwiNFwiLCBcIjdcIiBdIF0sIFsgXCJDYXltYW4gSXNsYW5kc1wiLCBcImt5XCIsIFwiMVwiLCAxMiwgWyBcIjM0NVwiIF0gXSwgWyBcIkNlbnRyYWwgQWZyaWNhbiBSZXB1YmxpYyAoUsOpcHVibGlxdWUgY2VudHJhZnJpY2FpbmUpXCIsIFwiY2ZcIiwgXCIyMzZcIiBdLCBbIFwiQ2hhZCAoVGNoYWQpXCIsIFwidGRcIiwgXCIyMzVcIiBdLCBbIFwiQ2hpbGVcIiwgXCJjbFwiLCBcIjU2XCIgXSwgWyBcIkNoaW5hICjkuK3lm70pXCIsIFwiY25cIiwgXCI4NlwiIF0sIFsgXCJDaHJpc3RtYXMgSXNsYW5kXCIsIFwiY3hcIiwgXCI2MVwiLCAyLCBbIFwiODkxNjRcIiBdIF0sIFsgXCJDb2NvcyAoS2VlbGluZykgSXNsYW5kc1wiLCBcImNjXCIsIFwiNjFcIiwgMSwgWyBcIjg5MTYyXCIgXSBdLCBbIFwiQ29sb21iaWFcIiwgXCJjb1wiLCBcIjU3XCIgXSwgWyBcIkNvbW9yb3MgKOKAq9is2LLYsSDYp9mE2YLZhdix4oCs4oCOKVwiLCBcImttXCIsIFwiMjY5XCIgXSwgWyBcIkNvbmdvIChEUkMpIChKYW1odXJpIHlhIEtpZGVtb2tyYXNpYSB5YSBLb25nbylcIiwgXCJjZFwiLCBcIjI0M1wiIF0sIFsgXCJDb25nbyAoUmVwdWJsaWMpIChDb25nby1CcmF6emF2aWxsZSlcIiwgXCJjZ1wiLCBcIjI0MlwiIF0sIFsgXCJDb29rIElzbGFuZHNcIiwgXCJja1wiLCBcIjY4MlwiIF0sIFsgXCJDb3N0YSBSaWNhXCIsIFwiY3JcIiwgXCI1MDZcIiBdLCBbIFwiQ8O0dGUgZOKAmUl2b2lyZVwiLCBcImNpXCIsIFwiMjI1XCIgXSwgWyBcIkNyb2F0aWEgKEhydmF0c2thKVwiLCBcImhyXCIsIFwiMzg1XCIgXSwgWyBcIkN1YmFcIiwgXCJjdVwiLCBcIjUzXCIgXSwgWyBcIkN1cmHDp2FvXCIsIFwiY3dcIiwgXCI1OTlcIiwgMCBdLCBbIFwiQ3lwcnVzICjOms+Nz4DPgc6/z4IpXCIsIFwiY3lcIiwgXCIzNTdcIiBdLCBbIFwiQ3plY2ggUmVwdWJsaWMgKMSMZXNrw6EgcmVwdWJsaWthKVwiLCBcImN6XCIsIFwiNDIwXCIgXSwgWyBcIkRlbm1hcmsgKERhbm1hcmspXCIsIFwiZGtcIiwgXCI0NVwiIF0sIFsgXCJEamlib3V0aVwiLCBcImRqXCIsIFwiMjUzXCIgXSwgWyBcIkRvbWluaWNhXCIsIFwiZG1cIiwgXCIxXCIsIDEzLCBbIFwiNzY3XCIgXSBdLCBbIFwiRG9taW5pY2FuIFJlcHVibGljIChSZXDDumJsaWNhIERvbWluaWNhbmEpXCIsIFwiZG9cIiwgXCIxXCIsIDIsIFsgXCI4MDlcIiwgXCI4MjlcIiwgXCI4NDlcIiBdIF0sIFsgXCJFY3VhZG9yXCIsIFwiZWNcIiwgXCI1OTNcIiBdLCBbIFwiRWd5cHQgKOKAq9mF2LXYseKArOKAjilcIiwgXCJlZ1wiLCBcIjIwXCIgXSwgWyBcIkVsIFNhbHZhZG9yXCIsIFwic3ZcIiwgXCI1MDNcIiBdLCBbIFwiRXF1YXRvcmlhbCBHdWluZWEgKEd1aW5lYSBFY3VhdG9yaWFsKVwiLCBcImdxXCIsIFwiMjQwXCIgXSwgWyBcIkVyaXRyZWFcIiwgXCJlclwiLCBcIjI5MVwiIF0sIFsgXCJFc3RvbmlhIChFZXN0aSlcIiwgXCJlZVwiLCBcIjM3MlwiIF0sIFsgXCJFc3dhdGluaVwiLCBcInN6XCIsIFwiMjY4XCIgXSwgWyBcIkV0aGlvcGlhXCIsIFwiZXRcIiwgXCIyNTFcIiBdLCBbIFwiRmFsa2xhbmQgSXNsYW5kcyAoSXNsYXMgTWFsdmluYXMpXCIsIFwiZmtcIiwgXCI1MDBcIiBdLCBbIFwiRmFyb2UgSXNsYW5kcyAoRsO4cm95YXIpXCIsIFwiZm9cIiwgXCIyOThcIiBdLCBbIFwiRmlqaVwiLCBcImZqXCIsIFwiNjc5XCIgXSwgWyBcIkZpbmxhbmQgKFN1b21pKVwiLCBcImZpXCIsIFwiMzU4XCIsIDAgXSwgWyBcIkZyYW5jZVwiLCBcImZyXCIsIFwiMzNcIiBdLCBbIFwiRnJlbmNoIEd1aWFuYSAoR3V5YW5lIGZyYW7Dp2Fpc2UpXCIsIFwiZ2ZcIiwgXCI1OTRcIiBdLCBbIFwiRnJlbmNoIFBvbHluZXNpYSAoUG9seW7DqXNpZSBmcmFuw6dhaXNlKVwiLCBcInBmXCIsIFwiNjg5XCIgXSwgWyBcIkdhYm9uXCIsIFwiZ2FcIiwgXCIyNDFcIiBdLCBbIFwiR2FtYmlhXCIsIFwiZ21cIiwgXCIyMjBcIiBdLCBbIFwiR2VvcmdpYSAo4YOh4YOQ4YOl4YOQ4YOg4YOX4YOV4YOU4YOa4YOdKVwiLCBcImdlXCIsIFwiOTk1XCIgXSwgWyBcIkdlcm1hbnkgKERldXRzY2hsYW5kKVwiLCBcImRlXCIsIFwiNDlcIiBdLCBbIFwiR2hhbmEgKEdhYW5hKVwiLCBcImdoXCIsIFwiMjMzXCIgXSwgWyBcIkdpYnJhbHRhclwiLCBcImdpXCIsIFwiMzUwXCIgXSwgWyBcIkdyZWVjZSAozpXOu867zqzOtM6xKVwiLCBcImdyXCIsIFwiMzBcIiBdLCBbIFwiR3JlZW5sYW5kIChLYWxhYWxsaXQgTnVuYWF0KVwiLCBcImdsXCIsIFwiMjk5XCIgXSwgWyBcIkdyZW5hZGFcIiwgXCJnZFwiLCBcIjFcIiwgMTQsIFsgXCI0NzNcIiBdIF0sIFsgXCJHdWFkZWxvdXBlXCIsIFwiZ3BcIiwgXCI1OTBcIiwgMCBdLCBbIFwiR3VhbVwiLCBcImd1XCIsIFwiMVwiLCAxNSwgWyBcIjY3MVwiIF0gXSwgWyBcIkd1YXRlbWFsYVwiLCBcImd0XCIsIFwiNTAyXCIgXSwgWyBcIkd1ZXJuc2V5XCIsIFwiZ2dcIiwgXCI0NFwiLCAxLCBbIFwiMTQ4MVwiLCBcIjc3ODFcIiwgXCI3ODM5XCIsIFwiNzkxMVwiIF0gXSwgWyBcIkd1aW5lYSAoR3VpbsOpZSlcIiwgXCJnblwiLCBcIjIyNFwiIF0sIFsgXCJHdWluZWEtQmlzc2F1IChHdWluw6kgQmlzc2F1KVwiLCBcImd3XCIsIFwiMjQ1XCIgXSwgWyBcIkd1eWFuYVwiLCBcImd5XCIsIFwiNTkyXCIgXSwgWyBcIkhhaXRpXCIsIFwiaHRcIiwgXCI1MDlcIiBdLCBbIFwiSG9uZHVyYXNcIiwgXCJoblwiLCBcIjUwNFwiIF0sIFsgXCJIb25nIEtvbmcgKOmmmea4rylcIiwgXCJoa1wiLCBcIjg1MlwiIF0sIFsgXCJIdW5nYXJ5IChNYWd5YXJvcnN6w6FnKVwiLCBcImh1XCIsIFwiMzZcIiBdLCBbIFwiSWNlbGFuZCAow41zbGFuZClcIiwgXCJpc1wiLCBcIjM1NFwiIF0sIFsgXCJJbmRpYSAo4KSt4KS+4KSw4KSkKVwiLCBcImluXCIsIFwiOTFcIiBdLCBbIFwiSW5kb25lc2lhXCIsIFwiaWRcIiwgXCI2MlwiIF0sIFsgXCJJcmFuICjigKvYp9uM2LHYp9mG4oCs4oCOKVwiLCBcImlyXCIsIFwiOThcIiBdLCBbIFwiSXJhcSAo4oCr2KfZhNi52LHYp9mC4oCs4oCOKVwiLCBcImlxXCIsIFwiOTY0XCIgXSwgWyBcIklyZWxhbmRcIiwgXCJpZVwiLCBcIjM1M1wiIF0sIFsgXCJJc2xlIG9mIE1hblwiLCBcImltXCIsIFwiNDRcIiwgMiwgWyBcIjE2MjRcIiwgXCI3NDU3NlwiLCBcIjc1MjRcIiwgXCI3OTI0XCIsIFwiNzYyNFwiIF0gXSwgWyBcIklzcmFlbCAo4oCr15nXqdeo15DXnOKArOKAjilcIiwgXCJpbFwiLCBcIjk3MlwiIF0sIFsgXCJJdGFseSAoSXRhbGlhKVwiLCBcIml0XCIsIFwiMzlcIiwgMCBdLCBbIFwiSmFtYWljYVwiLCBcImptXCIsIFwiMVwiLCA0LCBbIFwiODc2XCIsIFwiNjU4XCIgXSBdLCBbIFwiSmFwYW4gKOaXpeacrClcIiwgXCJqcFwiLCBcIjgxXCIgXSwgWyBcIkplcnNleVwiLCBcImplXCIsIFwiNDRcIiwgMywgWyBcIjE1MzRcIiwgXCI3NTA5XCIsIFwiNzcwMFwiLCBcIjc3OTdcIiwgXCI3ODI5XCIsIFwiNzkzN1wiIF0gXSwgWyBcIkpvcmRhbiAo4oCr2KfZhNij2LHYr9mG4oCs4oCOKVwiLCBcImpvXCIsIFwiOTYyXCIgXSwgWyBcIkthemFraHN0YW4gKNCa0LDQt9Cw0YXRgdGC0LDQvSlcIiwgXCJrelwiLCBcIjdcIiwgMSwgWyBcIjMzXCIsIFwiN1wiIF0gXSwgWyBcIktlbnlhXCIsIFwia2VcIiwgXCIyNTRcIiBdLCBbIFwiS2lyaWJhdGlcIiwgXCJraVwiLCBcIjY4NlwiIF0sIFsgXCJLb3Nvdm9cIiwgXCJ4a1wiLCBcIjM4M1wiIF0sIFsgXCJLdXdhaXQgKOKAq9in2YTZg9mI2YrYquKArOKAjilcIiwgXCJrd1wiLCBcIjk2NVwiIF0sIFsgXCJLeXJneXpzdGFuICjQmtGL0YDQs9GL0LfRgdGC0LDQvSlcIiwgXCJrZ1wiLCBcIjk5NlwiIF0sIFsgXCJMYW9zICjguqXgurLguqcpXCIsIFwibGFcIiwgXCI4NTZcIiBdLCBbIFwiTGF0dmlhIChMYXR2aWphKVwiLCBcImx2XCIsIFwiMzcxXCIgXSwgWyBcIkxlYmFub24gKOKAq9mE2KjZhtin2YbigKzigI4pXCIsIFwibGJcIiwgXCI5NjFcIiBdLCBbIFwiTGVzb3Rob1wiLCBcImxzXCIsIFwiMjY2XCIgXSwgWyBcIkxpYmVyaWFcIiwgXCJsclwiLCBcIjIzMVwiIF0sIFsgXCJMaWJ5YSAo4oCr2YTZitio2YrYp+KArOKAjilcIiwgXCJseVwiLCBcIjIxOFwiIF0sIFsgXCJMaWVjaHRlbnN0ZWluXCIsIFwibGlcIiwgXCI0MjNcIiBdLCBbIFwiTGl0aHVhbmlhIChMaWV0dXZhKVwiLCBcImx0XCIsIFwiMzcwXCIgXSwgWyBcIkx1eGVtYm91cmdcIiwgXCJsdVwiLCBcIjM1MlwiIF0sIFsgXCJNYWNhdSAo5r6z6ZaAKVwiLCBcIm1vXCIsIFwiODUzXCIgXSwgWyBcIk1hZGFnYXNjYXIgKE1hZGFnYXNpa2FyYSlcIiwgXCJtZ1wiLCBcIjI2MVwiIF0sIFsgXCJNYWxhd2lcIiwgXCJtd1wiLCBcIjI2NVwiIF0sIFsgXCJNYWxheXNpYVwiLCBcIm15XCIsIFwiNjBcIiBdLCBbIFwiTWFsZGl2ZXNcIiwgXCJtdlwiLCBcIjk2MFwiIF0sIFsgXCJNYWxpXCIsIFwibWxcIiwgXCIyMjNcIiBdLCBbIFwiTWFsdGFcIiwgXCJtdFwiLCBcIjM1NlwiIF0sIFsgXCJNYXJzaGFsbCBJc2xhbmRzXCIsIFwibWhcIiwgXCI2OTJcIiBdLCBbIFwiTWFydGluaXF1ZVwiLCBcIm1xXCIsIFwiNTk2XCIgXSwgWyBcIk1hdXJpdGFuaWEgKOKAq9mF2YjYsdmK2KrYp9mG2YrYp+KArOKAjilcIiwgXCJtclwiLCBcIjIyMlwiIF0sIFsgXCJNYXVyaXRpdXMgKE1vcmlzKVwiLCBcIm11XCIsIFwiMjMwXCIgXSwgWyBcIk1heW90dGVcIiwgXCJ5dFwiLCBcIjI2MlwiLCAxLCBbIFwiMjY5XCIsIFwiNjM5XCIgXSBdLCBbIFwiTWV4aWNvIChNw6l4aWNvKVwiLCBcIm14XCIsIFwiNTJcIiBdLCBbIFwiTWljcm9uZXNpYVwiLCBcImZtXCIsIFwiNjkxXCIgXSwgWyBcIk1vbGRvdmEgKFJlcHVibGljYSBNb2xkb3ZhKVwiLCBcIm1kXCIsIFwiMzczXCIgXSwgWyBcIk1vbmFjb1wiLCBcIm1jXCIsIFwiMzc3XCIgXSwgWyBcIk1vbmdvbGlhICjQnNC+0L3Qs9C+0LspXCIsIFwibW5cIiwgXCI5NzZcIiBdLCBbIFwiTW9udGVuZWdybyAoQ3JuYSBHb3JhKVwiLCBcIm1lXCIsIFwiMzgyXCIgXSwgWyBcIk1vbnRzZXJyYXRcIiwgXCJtc1wiLCBcIjFcIiwgMTYsIFsgXCI2NjRcIiBdIF0sIFsgXCJNb3JvY2NvICjigKvYp9mE2YXYutix2KjigKzigI4pXCIsIFwibWFcIiwgXCIyMTJcIiwgMCBdLCBbIFwiTW96YW1iaXF1ZSAoTW/Dp2FtYmlxdWUpXCIsIFwibXpcIiwgXCIyNThcIiBdLCBbIFwiTXlhbm1hciAoQnVybWEpICjhgJnhgLzhgJThgLrhgJnhgKwpXCIsIFwibW1cIiwgXCI5NVwiIF0sIFsgXCJOYW1pYmlhIChOYW1pYmnDqylcIiwgXCJuYVwiLCBcIjI2NFwiIF0sIFsgXCJOYXVydVwiLCBcIm5yXCIsIFwiNjc0XCIgXSwgWyBcIk5lcGFsICjgpKjgpYfgpKrgpL7gpLIpXCIsIFwibnBcIiwgXCI5NzdcIiBdLCBbIFwiTmV0aGVybGFuZHMgKE5lZGVybGFuZClcIiwgXCJubFwiLCBcIjMxXCIgXSwgWyBcIk5ldyBDYWxlZG9uaWEgKE5vdXZlbGxlLUNhbMOpZG9uaWUpXCIsIFwibmNcIiwgXCI2ODdcIiBdLCBbIFwiTmV3IFplYWxhbmRcIiwgXCJuelwiLCBcIjY0XCIgXSwgWyBcIk5pY2FyYWd1YVwiLCBcIm5pXCIsIFwiNTA1XCIgXSwgWyBcIk5pZ2VyIChOaWphcilcIiwgXCJuZVwiLCBcIjIyN1wiIF0sIFsgXCJOaWdlcmlhXCIsIFwibmdcIiwgXCIyMzRcIiBdLCBbIFwiTml1ZVwiLCBcIm51XCIsIFwiNjgzXCIgXSwgWyBcIk5vcmZvbGsgSXNsYW5kXCIsIFwibmZcIiwgXCI2NzJcIiBdLCBbIFwiTm9ydGggS29yZWEgKOyhsOyEoCDrr7zso7zso7zsnZgg7J2466+8IOqzte2ZlOq1rSlcIiwgXCJrcFwiLCBcIjg1MFwiIF0sIFsgXCJOb3J0aCBNYWNlZG9uaWEgKNCh0LXQstC10YDQvdCwINCc0LDQutC10LTQvtC90LjRmNCwKVwiLCBcIm1rXCIsIFwiMzg5XCIgXSwgWyBcIk5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kc1wiLCBcIm1wXCIsIFwiMVwiLCAxNywgWyBcIjY3MFwiIF0gXSwgWyBcIk5vcndheSAoTm9yZ2UpXCIsIFwibm9cIiwgXCI0N1wiLCAwIF0sIFsgXCJPbWFuICjigKvYudmP2YXYp9mG4oCs4oCOKVwiLCBcIm9tXCIsIFwiOTY4XCIgXSwgWyBcIlBha2lzdGFuICjigKvZvtin2qnYs9iq2KfZhuKArOKAjilcIiwgXCJwa1wiLCBcIjkyXCIgXSwgWyBcIlBhbGF1XCIsIFwicHdcIiwgXCI2ODBcIiBdLCBbIFwiUGFsZXN0aW5lICjigKvZgdmE2LPYt9mK2YbigKzigI4pXCIsIFwicHNcIiwgXCI5NzBcIiBdLCBbIFwiUGFuYW1hIChQYW5hbcOhKVwiLCBcInBhXCIsIFwiNTA3XCIgXSwgWyBcIlBhcHVhIE5ldyBHdWluZWFcIiwgXCJwZ1wiLCBcIjY3NVwiIF0sIFsgXCJQYXJhZ3VheVwiLCBcInB5XCIsIFwiNTk1XCIgXSwgWyBcIlBlcnUgKFBlcsO6KVwiLCBcInBlXCIsIFwiNTFcIiBdLCBbIFwiUGhpbGlwcGluZXNcIiwgXCJwaFwiLCBcIjYzXCIgXSwgWyBcIlBvbGFuZCAoUG9sc2thKVwiLCBcInBsXCIsIFwiNDhcIiBdLCBbIFwiUG9ydHVnYWxcIiwgXCJwdFwiLCBcIjM1MVwiIF0sIFsgXCJQdWVydG8gUmljb1wiLCBcInByXCIsIFwiMVwiLCAzLCBbIFwiNzg3XCIsIFwiOTM5XCIgXSBdLCBbIFwiUWF0YXIgKOKAq9mC2LfYseKArOKAjilcIiwgXCJxYVwiLCBcIjk3NFwiIF0sIFsgXCJSw6l1bmlvbiAoTGEgUsOpdW5pb24pXCIsIFwicmVcIiwgXCIyNjJcIiwgMCBdLCBbIFwiUm9tYW5pYSAoUm9tw6JuaWEpXCIsIFwicm9cIiwgXCI0MFwiIF0sIFsgXCJSdXNzaWEgKNCg0L7RgdGB0LjRjylcIiwgXCJydVwiLCBcIjdcIiwgMCBdLCBbIFwiUndhbmRhXCIsIFwicndcIiwgXCIyNTBcIiBdLCBbIFwiU2FpbnQgQmFydGjDqWxlbXlcIiwgXCJibFwiLCBcIjU5MFwiLCAxIF0sIFsgXCJTYWludCBIZWxlbmFcIiwgXCJzaFwiLCBcIjI5MFwiIF0sIFsgXCJTYWludCBLaXR0cyBhbmQgTmV2aXNcIiwgXCJrblwiLCBcIjFcIiwgMTgsIFsgXCI4NjlcIiBdIF0sIFsgXCJTYWludCBMdWNpYVwiLCBcImxjXCIsIFwiMVwiLCAxOSwgWyBcIjc1OFwiIF0gXSwgWyBcIlNhaW50IE1hcnRpbiAoU2FpbnQtTWFydGluIChwYXJ0aWUgZnJhbsOnYWlzZSkpXCIsIFwibWZcIiwgXCI1OTBcIiwgMiBdLCBbIFwiU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvbiAoU2FpbnQtUGllcnJlLWV0LU1pcXVlbG9uKVwiLCBcInBtXCIsIFwiNTA4XCIgXSwgWyBcIlNhaW50IFZpbmNlbnQgYW5kIHRoZSBHcmVuYWRpbmVzXCIsIFwidmNcIiwgXCIxXCIsIDIwLCBbIFwiNzg0XCIgXSBdLCBbIFwiU2Ftb2FcIiwgXCJ3c1wiLCBcIjY4NVwiIF0sIFsgXCJTYW4gTWFyaW5vXCIsIFwic21cIiwgXCIzNzhcIiBdLCBbIFwiU8OjbyBUb23DqSBhbmQgUHLDrW5jaXBlIChTw6NvIFRvbcOpIGUgUHLDrW5jaXBlKVwiLCBcInN0XCIsIFwiMjM5XCIgXSwgWyBcIlNhdWRpIEFyYWJpYSAo4oCr2KfZhNmF2YXZhNmD2Kkg2KfZhNi52LHYqNmK2Kkg2KfZhNiz2LnZiNiv2YrYqeKArOKAjilcIiwgXCJzYVwiLCBcIjk2NlwiIF0sIFsgXCJTZW5lZ2FsIChTw6luw6lnYWwpXCIsIFwic25cIiwgXCIyMjFcIiBdLCBbIFwiU2VyYmlhICjQodGA0LHQuNGY0LApXCIsIFwicnNcIiwgXCIzODFcIiBdLCBbIFwiU2V5Y2hlbGxlc1wiLCBcInNjXCIsIFwiMjQ4XCIgXSwgWyBcIlNpZXJyYSBMZW9uZVwiLCBcInNsXCIsIFwiMjMyXCIgXSwgWyBcIlNpbmdhcG9yZVwiLCBcInNnXCIsIFwiNjVcIiBdLCBbIFwiU2ludCBNYWFydGVuXCIsIFwic3hcIiwgXCIxXCIsIDIxLCBbIFwiNzIxXCIgXSBdLCBbIFwiU2xvdmFraWEgKFNsb3ZlbnNrbylcIiwgXCJza1wiLCBcIjQyMVwiIF0sIFsgXCJTbG92ZW5pYSAoU2xvdmVuaWphKVwiLCBcInNpXCIsIFwiMzg2XCIgXSwgWyBcIlNvbG9tb24gSXNsYW5kc1wiLCBcInNiXCIsIFwiNjc3XCIgXSwgWyBcIlNvbWFsaWEgKFNvb21hYWxpeWEpXCIsIFwic29cIiwgXCIyNTJcIiBdLCBbIFwiU291dGggQWZyaWNhXCIsIFwiemFcIiwgXCIyN1wiIF0sIFsgXCJTb3V0aCBLb3JlYSAo64yA7ZWc66+86rWtKVwiLCBcImtyXCIsIFwiODJcIiBdLCBbIFwiU291dGggU3VkYW4gKOKAq9is2YbZiNioINin2YTYs9mI2K/Yp9mG4oCs4oCOKVwiLCBcInNzXCIsIFwiMjExXCIgXSwgWyBcIlNwYWluIChFc3Bhw7FhKVwiLCBcImVzXCIsIFwiMzRcIiBdLCBbIFwiU3JpIExhbmthICjgt4Hgt4rigI3gtrvgt5Mg4La94LaC4Laa4LeP4LeAKVwiLCBcImxrXCIsIFwiOTRcIiBdLCBbIFwiU3VkYW4gKOKAq9in2YTYs9mI2K/Yp9mG4oCs4oCOKVwiLCBcInNkXCIsIFwiMjQ5XCIgXSwgWyBcIlN1cmluYW1lXCIsIFwic3JcIiwgXCI1OTdcIiBdLCBbIFwiU3ZhbGJhcmQgYW5kIEphbiBNYXllblwiLCBcInNqXCIsIFwiNDdcIiwgMSwgWyBcIjc5XCIgXSBdLCBbIFwiU3dlZGVuIChTdmVyaWdlKVwiLCBcInNlXCIsIFwiNDZcIiBdLCBbIFwiU3dpdHplcmxhbmQgKFNjaHdlaXopXCIsIFwiY2hcIiwgXCI0MVwiIF0sIFsgXCJTeXJpYSAo4oCr2LPZiNix2YrYp+KArOKAjilcIiwgXCJzeVwiLCBcIjk2M1wiIF0sIFsgXCJUYWl3YW4gKOWPsOeBoylcIiwgXCJ0d1wiLCBcIjg4NlwiIF0sIFsgXCJUYWppa2lzdGFuXCIsIFwidGpcIiwgXCI5OTJcIiBdLCBbIFwiVGFuemFuaWFcIiwgXCJ0elwiLCBcIjI1NVwiIF0sIFsgXCJUaGFpbGFuZCAo4LmE4LiX4LiiKVwiLCBcInRoXCIsIFwiNjZcIiBdLCBbIFwiVGltb3ItTGVzdGVcIiwgXCJ0bFwiLCBcIjY3MFwiIF0sIFsgXCJUb2dvXCIsIFwidGdcIiwgXCIyMjhcIiBdLCBbIFwiVG9rZWxhdVwiLCBcInRrXCIsIFwiNjkwXCIgXSwgWyBcIlRvbmdhXCIsIFwidG9cIiwgXCI2NzZcIiBdLCBbIFwiVHJpbmlkYWQgYW5kIFRvYmFnb1wiLCBcInR0XCIsIFwiMVwiLCAyMiwgWyBcIjg2OFwiIF0gXSwgWyBcIlR1bmlzaWEgKOKAq9iq2YjZhtiz4oCs4oCOKVwiLCBcInRuXCIsIFwiMjE2XCIgXSwgWyBcIlR1cmtleSAoVMO8cmtpeWUpXCIsIFwidHJcIiwgXCI5MFwiIF0sIFsgXCJUdXJrbWVuaXN0YW5cIiwgXCJ0bVwiLCBcIjk5M1wiIF0sIFsgXCJUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHNcIiwgXCJ0Y1wiLCBcIjFcIiwgMjMsIFsgXCI2NDlcIiBdIF0sIFsgXCJUdXZhbHVcIiwgXCJ0dlwiLCBcIjY4OFwiIF0sIFsgXCJVLlMuIFZpcmdpbiBJc2xhbmRzXCIsIFwidmlcIiwgXCIxXCIsIDI0LCBbIFwiMzQwXCIgXSBdLCBbIFwiVWdhbmRhXCIsIFwidWdcIiwgXCIyNTZcIiBdLCBbIFwiVWtyYWluZSAo0KPQutGA0LDRl9C90LApXCIsIFwidWFcIiwgXCIzODBcIiBdLCBbIFwiVW5pdGVkIEFyYWIgRW1pcmF0ZXMgKOKAq9in2YTYpdmF2KfYsdin2Kog2KfZhNi52LHYqNmK2Kkg2KfZhNmF2KrYrdiv2KnigKzigI4pXCIsIFwiYWVcIiwgXCI5NzFcIiBdLCBbIFwiVW5pdGVkIEtpbmdkb21cIiwgXCJnYlwiLCBcIjQ0XCIsIDAgXSwgWyBcIlVuaXRlZCBTdGF0ZXNcIiwgXCJ1c1wiLCBcIjFcIiwgMCBdLCBbIFwiVXJ1Z3VheVwiLCBcInV5XCIsIFwiNTk4XCIgXSwgWyBcIlV6YmVraXN0YW4gKE/Ku3piZWtpc3RvbilcIiwgXCJ1elwiLCBcIjk5OFwiIF0sIFsgXCJWYW51YXR1XCIsIFwidnVcIiwgXCI2NzhcIiBdLCBbIFwiVmF0aWNhbiBDaXR5IChDaXR0w6AgZGVsIFZhdGljYW5vKVwiLCBcInZhXCIsIFwiMzlcIiwgMSwgWyBcIjA2Njk4XCIgXSBdLCBbIFwiVmVuZXp1ZWxhXCIsIFwidmVcIiwgXCI1OFwiIF0sIFsgXCJWaWV0bmFtIChWaeG7h3QgTmFtKVwiLCBcInZuXCIsIFwiODRcIiBdLCBbIFwiV2FsbGlzIGFuZCBGdXR1bmEgKFdhbGxpcy1ldC1GdXR1bmEpXCIsIFwid2ZcIiwgXCI2ODFcIiBdLCBbIFwiV2VzdGVybiBTYWhhcmEgKOKAq9in2YTYtdit2LHYp9ihINin2YTYutix2KjZitip4oCs4oCOKVwiLCBcImVoXCIsIFwiMjEyXCIsIDEsIFsgXCI1Mjg4XCIsIFwiNTI4OVwiIF0gXSwgWyBcIlllbWVuICjigKvYp9mE2YrZhdmG4oCs4oCOKVwiLCBcInllXCIsIFwiOTY3XCIgXSwgWyBcIlphbWJpYVwiLCBcInptXCIsIFwiMjYwXCIgXSwgWyBcIlppbWJhYndlXCIsIFwiendcIiwgXCIyNjNcIiBdLCBbIFwiw4VsYW5kIElzbGFuZHNcIiwgXCJheFwiLCBcIjM1OFwiLCAxLCBbIFwiMThcIiBdIF0gXTtcbiAgICAgICAgLy8gbG9vcCBvdmVyIGFsbCBvZiB0aGUgY291bnRyaWVzIGFib3ZlLCByZXN0cnVjdHVyaW5nIHRoZSBkYXRhIHRvIGJlIG9iamVjdHMgd2l0aCBuYW1lZCBrZXlzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsQ291bnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYyA9IGFsbENvdW50cmllc1tpXTtcbiAgICAgICAgICAgIGFsbENvdW50cmllc1tpXSA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBjWzBdLFxuICAgICAgICAgICAgICAgIGlzbzI6IGNbMV0sXG4gICAgICAgICAgICAgICAgZGlhbENvZGU6IGNbMl0sXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6IGNbM10gfHwgMCxcbiAgICAgICAgICAgICAgICBhcmVhQ29kZXM6IGNbNF0gfHwgbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gT2JqZWN0KGFyZ3VtZW50c1tpXSkgOiB7fTtcbiAgICAgICAgICAgICAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgb3duS2V5cy5wdXNoLmFwcGx5KG93bktleXMsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24oc3ltKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpO1xuICAgICAgICAgICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICAgICAgICAgIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgICAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGtleSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICAgICAgICAgICAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICAgICAgICAgICAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbnRsVGVsSW5wdXRHbG9iYWxzID0ge1xuICAgICAgICAgICAgZ2V0SW5zdGFuY2U6IGZ1bmN0aW9uIGdldEluc3RhbmNlKGlucHV0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGlkID0gaW5wdXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbnRsLXRlbC1pbnB1dC1pZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmludGxUZWxJbnB1dEdsb2JhbHMuaW5zdGFuY2VzW2lkXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnN0YW5jZXM6IHt9LFxuICAgICAgICAgICAgLy8gdXNpbmcgYSBnbG9iYWwgbGlrZSB0aGlzIGFsbG93cyB1cyB0byBtb2NrIGl0IGluIHRoZSB0ZXN0c1xuICAgICAgICAgICAgZG9jdW1lbnRSZWFkeTogZnVuY3Rpb24gZG9jdW1lbnRSZWFkeSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgd2luZG93LmludGxUZWxJbnB1dEdsb2JhbHMgPSBpbnRsVGVsSW5wdXRHbG9iYWxzO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoZXNlIHZhcnMgcGVyc2lzdCB0aHJvdWdoIGFsbCBpbnN0YW5jZXMgb2YgdGhlIHBsdWdpblxuICAgICAgICB2YXIgaWQgPSAwO1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICAvLyB3aGV0aGVyIG9yIG5vdCB0byBhbGxvdyB0aGUgZHJvcGRvd25cbiAgICAgICAgICAgIGFsbG93RHJvcGRvd246IHRydWUsXG4gICAgICAgICAgICAvLyBhdXRvIGluc2VydCBkaWFsIGNvZGUgKEEpIG9uIGluaXQsIChCKSBvbiB1c2VyIHNlbGVjdGluZyBhIGNvdW50cnksIChDKSBvbiBjYWxsaW5nIHNldENvdW50cnlcbiAgICAgICAgICAgIC8vIGFsc28gbGlzdGVuIGZvciBibHVyL3N1Ym1pdCBhbmQgYXV0byByZW1vdmUgZGlhbCBjb2RlIGlmIHRoYXQncyBhbGwgdGhlcmUgaXNcbiAgICAgICAgICAgIGF1dG9JbnNlcnREaWFsQ29kZTogZmFsc2UsXG4gICAgICAgICAgICAvLyBhZGQgYSBwbGFjZWhvbGRlciBpbiB0aGUgaW5wdXQgd2l0aCBhbiBleGFtcGxlIG51bWJlciBmb3IgdGhlIHNlbGVjdGVkIGNvdW50cnlcbiAgICAgICAgICAgIGF1dG9QbGFjZWhvbGRlcjogXCJwb2xpdGVcIixcbiAgICAgICAgICAgIC8vIG1vZGlmeSB0aGUgcGFyZW50Q2xhc3NcbiAgICAgICAgICAgIGN1c3RvbUNvbnRhaW5lcjogXCJcIixcbiAgICAgICAgICAgIC8vIG1vZGlmeSB0aGUgYXV0byBwbGFjZWhvbGRlclxuICAgICAgICAgICAgY3VzdG9tUGxhY2Vob2xkZXI6IG51bGwsXG4gICAgICAgICAgICAvLyBhcHBlbmQgbWVudSB0byBzcGVjaWZpZWQgZWxlbWVudFxuICAgICAgICAgICAgZHJvcGRvd25Db250YWluZXI6IG51bGwsXG4gICAgICAgICAgICAvLyBkb24ndCBkaXNwbGF5IHRoZXNlIGNvdW50cmllc1xuICAgICAgICAgICAgZXhjbHVkZUNvdW50cmllczogW10sXG4gICAgICAgICAgICAvLyBmb3JtYXQgdGhlIGlucHV0IHZhbHVlIGR1cmluZyBpbml0aWFsaXNhdGlvbiBhbmQgb24gc2V0TnVtYmVyXG4gICAgICAgICAgICBmb3JtYXRPbkRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAvLyBnZW9JcCBsb29rdXAgZnVuY3Rpb25cbiAgICAgICAgICAgIGdlb0lwTG9va3VwOiBudWxsLFxuICAgICAgICAgICAgLy8gaW5qZWN0IGEgaGlkZGVuIGlucHV0IHdpdGggdGhpcyBuYW1lLCBhbmQgb24gc3VibWl0LCBwb3B1bGF0ZSBpdCB3aXRoIHRoZSByZXN1bHQgb2YgZ2V0TnVtYmVyXG4gICAgICAgICAgICBoaWRkZW5JbnB1dDogXCJcIixcbiAgICAgICAgICAgIC8vIGluaXRpYWwgY291bnRyeVxuICAgICAgICAgICAgaW5pdGlhbENvdW50cnk6IFwiXCIsXG4gICAgICAgICAgICAvLyBsb2NhbGl6ZWQgY291bnRyeSBuYW1lcyBlLmcuIHsgJ2RlJzogJ0RldXRzY2hsYW5kJyB9XG4gICAgICAgICAgICBsb2NhbGl6ZWRDb3VudHJpZXM6IG51bGwsXG4gICAgICAgICAgICAvLyBuYXRpb25hbCB2cyBpbnRlcm5hdGlvbmFsIGZvcm1hdHRpbmcgZm9yIG51bWJlcnMgZS5nLiBwbGFjZWhvbGRlcnMgYW5kIGRpc3BsYXlpbmcgZXhpc3RpbmcgbnVtYmVyc1xuICAgICAgICAgICAgbmF0aW9uYWxNb2RlOiB0cnVlLFxuICAgICAgICAgICAgLy8gZGlzcGxheSBvbmx5IHRoZXNlIGNvdW50cmllc1xuICAgICAgICAgICAgb25seUNvdW50cmllczogW10sXG4gICAgICAgICAgICAvLyBudW1iZXIgdHlwZSB0byB1c2UgZm9yIHBsYWNlaG9sZGVyc1xuICAgICAgICAgICAgcGxhY2Vob2xkZXJOdW1iZXJUeXBlOiBcIk1PQklMRVwiLFxuICAgICAgICAgICAgLy8gdGhlIGNvdW50cmllcyBhdCB0aGUgdG9wIG9mIHRoZSBsaXN0LiBkZWZhdWx0cyB0byB1bml0ZWQgc3RhdGVzIGFuZCB1bml0ZWQga2luZ2RvbVxuICAgICAgICAgICAgcHJlZmVycmVkQ291bnRyaWVzOiBbIFwidXNcIiwgXCJnYlwiIF0sXG4gICAgICAgICAgICAvLyBkaXNwbGF5IHRoZSBjb3VudHJ5IGRpYWwgY29kZSBuZXh0IHRvIHRoZSBzZWxlY3RlZCBmbGFnXG4gICAgICAgICAgICBzZXBhcmF0ZURpYWxDb2RlOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIG9wdGlvbiB0byBoaWRlIHRoZSBmbGFncyAtIG11c3QgYmUgdXNlZCB3aXRoIHNlcGFyYXRlRGlhbENvZGUsIG9yIGFsbG93RHJvcGRvd249ZmFsc2VcbiAgICAgICAgICAgIHNob3dGbGFnczogdHJ1ZSxcbiAgICAgICAgICAgIC8vIHNwZWNpZnkgdGhlIHBhdGggdG8gdGhlIGxpYnBob25lbnVtYmVyIHNjcmlwdCB0byBlbmFibGUgdmFsaWRhdGlvbi9mb3JtYXR0aW5nXG4gICAgICAgICAgICB1dGlsc1NjcmlwdDogXCJcIlxuICAgICAgICB9O1xuICAgICAgICAvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MaXN0X29mX05vcnRoX0FtZXJpY2FuX051bWJlcmluZ19QbGFuX2FyZWFfY29kZXMjTm9uLWdlb2dyYXBoaWNfYXJlYV9jb2Rlc1xuICAgICAgICB2YXIgcmVnaW9ubGVzc05hbnBOdW1iZXJzID0gWyBcIjgwMFwiLCBcIjgyMlwiLCBcIjgzM1wiLCBcIjg0NFwiLCBcIjg1NVwiLCBcIjg2NlwiLCBcIjg3N1wiLCBcIjg4MFwiLCBcIjg4MVwiLCBcIjg4MlwiLCBcIjg4M1wiLCBcIjg4NFwiLCBcIjg4NVwiLCBcIjg4NlwiLCBcIjg4N1wiLCBcIjg4OFwiLCBcIjg4OVwiIF07XG4gICAgICAgIC8vIHV0aWxpdHkgZnVuY3Rpb24gdG8gaXRlcmF0ZSBvdmVyIGFuIG9iamVjdC4gY2FuJ3QgdXNlIE9iamVjdC5lbnRyaWVzIG9yIG5hdGl2ZSBmb3JFYWNoIGJlY2F1c2VcbiAgICAgICAgLy8gb2YgSUUxMVxuICAgICAgICB2YXIgZm9yRWFjaFByb3AgPSBmdW5jdGlvbiBmb3JFYWNoUHJvcChvYmosIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhrZXlzW2ldLCBvYmpba2V5c1tpXV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBydW4gYSBtZXRob2Qgb24gZWFjaCBpbnN0YW5jZSBvZiB0aGUgcGx1Z2luXG4gICAgICAgIHZhciBmb3JFYWNoSW5zdGFuY2UgPSBmdW5jdGlvbiBmb3JFYWNoSW5zdGFuY2UobWV0aG9kKSB7XG4gICAgICAgICAgICBmb3JFYWNoUHJvcCh3aW5kb3cuaW50bFRlbElucHV0R2xvYmFscy5pbnN0YW5jZXMsIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5pbnRsVGVsSW5wdXRHbG9iYWxzLmluc3RhbmNlc1trZXldW21ldGhvZF0oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvLyB0aGlzIGlzIG91ciBwbHVnaW4gY2xhc3MgdGhhdCB3ZSB3aWxsIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgICAgdmFyIEl0aSA9IC8qI19fUFVSRV9fKi8gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBJdGkoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJdGkpO1xuICAgICAgICAgICAgICAgIHRoaXMuaWQgPSBpZCsrO1xuICAgICAgICAgICAgICAgIHRoaXMudGVsSW5wdXQgPSBpbnB1dDtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRJdGVtID0gbnVsbDtcbiAgICAgICAgICAgICAgICAvLyBwcm9jZXNzIHNwZWNpZmllZCBvcHRpb25zIC8gZGVmYXVsdHNcbiAgICAgICAgICAgICAgICAvLyBhbHRlcm5hdGl2ZSB0byBPYmplY3QuYXNzaWduLCB3aGljaCBpc24ndCBzdXBwb3J0ZWQgYnkgSUUxMVxuICAgICAgICAgICAgICAgIHZhciBjdXN0b21PcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICAgICAgICAgICAgICBmb3JFYWNoUHJvcChkZWZhdWx0cywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vcHRpb25zW2tleV0gPSBjdXN0b21PcHRpb25zLmhhc093blByb3BlcnR5KGtleSkgPyBjdXN0b21PcHRpb25zW2tleV0gOiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhZEluaXRpYWxQbGFjZWhvbGRlciA9IEJvb2xlYW4oaW5wdXQuZ2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2NyZWF0ZUNsYXNzKEl0aSwgWyB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9pbml0XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9pbml0KCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgaW4gbmF0aW9uYWxNb2RlLCBkbyBub3QgaW5zZXJ0IGRpYWwgY29kZXNcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5uYXRpb25hbE1vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hdXRvSW5zZXJ0RGlhbENvZGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBpZiBzZXBhcmF0ZURpYWxDb2RlIGVuYWJsZWQsIGRvIG5vdCBpbnNlcnQgZGlhbCBjb2Rlc1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNlcGFyYXRlRGlhbENvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hdXRvSW5zZXJ0RGlhbENvZGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBmb3JjZSBzaG93RmxhZ3M9dHJ1ZSBpZiB0aGVyZSdzIGEgZHJvcGRvd24gYW5kIHdlJ3JlIG5vdCBkaXNwbGF5aW5nIHRoZSBkaWFsIGNvZGUsXG4gICAgICAgICAgICAgICAgICAgIC8vIGFzIG90aGVyd2lzZSB5b3UganVzdCBoYXZlIGEgZG93biBhcnJvdyBvbiBpdCdzIG93biB3aGljaCBkb2Vzbid0IG1ha2Ugc2Vuc2VcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvcmNlU2hvd0ZsYWdzID0gdGhpcy5vcHRpb25zLmFsbG93RHJvcGRvd24gJiYgIXRoaXMub3B0aW9ucy5zZXBhcmF0ZURpYWxDb2RlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5zaG93RmxhZ3MgJiYgZm9yY2VTaG93RmxhZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zaG93RmxhZ3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGNhbm5vdCBqdXN0IHRlc3Qgc2NyZWVuIHNpemUgYXMgc29tZSBzbWFydHBob25lcy93ZWJzaXRlIG1ldGEgdGFncyB3aWxsIHJlcG9ydCBkZXNrdG9wXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc29sdXRpb25zXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdGU6IGZvciBzb21lIHJlYXNvbiBqYXNtaW5lIGJyZWFrcyBpZiB5b3UgcHV0IHRoaXMgaW4gdGhlIG1haW4gUGx1Z2luIGZ1bmN0aW9uIHdpdGggdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc3Qgb2YgdGhlc2UgZGVjbGFyYXRpb25zXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdGU6IHRvIHRhcmdldCBBbmRyb2lkIE1vYmlsZXMgKGFuZCBub3QgVGFibGV0cyksIHdlIG11c3QgZmluZCAnQW5kcm9pZCcgYW5kICdNb2JpbGUnXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNb2JpbGUgPSAvQW5kcm9pZC4rTW9iaWxlfHdlYk9TfGlQaG9uZXxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0cmlnZ2VyIHRoZSBtb2JpbGUgZHJvcGRvd24gY3NzXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJpdGktbW9iaWxlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb24gbW9iaWxlLCB3ZSB3YW50IGEgZnVsbCBzY3JlZW4gZHJvcGRvd24sIHNvIHdlIG11c3QgYXBwZW5kIGl0IHRvIHRoZSBib2R5XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5kcm9wZG93bkNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kcm9wZG93bkNvbnRhaW5lciA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgaW5wdXQgaGFzIG9uZSBwYXJlbnQgd2l0aCBSVExcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1JUTCA9ICEhdGhpcy50ZWxJbnB1dC5jbG9zZXN0KFwiW2Rpcj1ydGxdXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSBwcm9taXNlcyBnZXQgcmVzb2x2ZWQgd2hlbiB0aGVpciBpbmRpdmlkdWFsIHJlcXVlc3RzIGNvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2F5IHRoZSBkZXYgY2FuIGRvIHNvbWV0aGluZyBsaWtlIGl0aS5wcm9taXNlLnRoZW4oLi4uKSB0byBrbm93IHdoZW4gYWxsIHJlcXVlc3RzIGFyZVxuICAgICAgICAgICAgICAgICAgICAvLyBjb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhdXRvQ291bnRyeVByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIucmVzb2x2ZUF1dG9Db3VudHJ5UHJvbWlzZSA9IHJlc29sdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnJlamVjdEF1dG9Db3VudHJ5UHJvbWlzZSA9IHJlamVjdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHV0aWxzU2NyaXB0UHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5yZXNvbHZlVXRpbHNTY3JpcHRQcm9taXNlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIucmVqZWN0VXRpbHNTY3JpcHRQcm9taXNlID0gcmVqZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb21pc2UgPSBQcm9taXNlLmFsbChbIGF1dG9Db3VudHJ5UHJvbWlzZSwgdXRpbHNTY3JpcHRQcm9taXNlIF0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJldmVudCBlcnJvcnMgd2hlbiBQcm9taXNlIGRvZXNuJ3QgZXhpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZUF1dG9Db3VudHJ5UHJvbWlzZSA9IHRoaXMucmVqZWN0QXV0b0NvdW50cnlQcm9taXNlID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZVV0aWxzU2NyaXB0UHJvbWlzZSA9IHRoaXMucmVqZWN0VXRpbHNTY3JpcHRQcm9taXNlID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBpbiB2YXJpb3VzIHNpdHVhdGlvbnMgdGhlcmUgY291bGQgYmUgbm8gY291bnRyeSBzZWxlY3RlZCBpbml0aWFsbHksIGJ1dCB3ZSBuZWVkIHRvIGJlIGFibGVcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gYXNzdW1lIHRoaXMgdmFyaWFibGUgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDb3VudHJ5RGF0YSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAvLyBwcm9jZXNzIGFsbCB0aGUgZGF0YTogb25seUNvdW50cmllcywgZXhjbHVkZUNvdW50cmllcywgcHJlZmVycmVkQ291bnRyaWVzIGV0Y1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9jZXNzQ291bnRyeURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZ2VuZXJhdGUgdGhlIG1hcmt1cFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nZW5lcmF0ZU1hcmt1cCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIGlucHV0IHZhbHVlIGFuZCB0aGUgc2VsZWN0ZWQgZmxhZ1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXRJbml0aWFsU3RhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RhcnQgYWxsIG9mIHRoZSBldmVudCBsaXN0ZW5lcnM6IGF1dG9JbnNlcnREaWFsQ29kZSwgaW5wdXQga2V5ZG93biwgc2VsZWN0ZWRGbGFnIGNsaWNrXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luaXRMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdXRpbHMgc2NyaXB0LCBhbmQgYXV0byBjb3VudHJ5XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luaXRSZXF1ZXN0cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX3Byb2Nlc3NDb3VudHJ5RGF0YVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcHJvY2Vzc0NvdW50cnlEYXRhKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBwcm9jZXNzIG9ubHlDb3VudHJpZXMgb3IgZXhjbHVkZUNvdW50cmllcyBhcnJheSBpZiBwcmVzZW50XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NBbGxDb3VudHJpZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJvY2VzcyB0aGUgY291bnRyeUNvZGVzIG1hcFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9jZXNzQ291bnRyeUNvZGVzKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHByb2Nlc3MgdGhlIHByZWZlcnJlZENvdW50cmllc1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9jZXNzUHJlZmVycmVkQ291bnRyaWVzKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRyYW5zbGF0ZSBjb3VudHJpZXMgYWNjb3JkaW5nIHRvIGxvY2FsaXplZENvdW50cmllcyBvcHRpb25cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5sb2NhbGl6ZWRDb3VudHJpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zbGF0ZUNvdW50cmllc0J5TG9jYWxlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gc29ydCBjb3VudHJpZXMgYnkgbmFtZVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm9ubHlDb3VudHJpZXMubGVuZ3RoIHx8IHRoaXMub3B0aW9ucy5sb2NhbGl6ZWRDb3VudHJpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRyaWVzLnNvcnQodGhpcy5fY291bnRyeU5hbWVTb3J0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX2FkZENvdW50cnlDb2RlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hZGRDb3VudHJ5Q29kZShpc28yLCBjb3VudHJ5Q29kZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50cnlDb2RlLmxlbmd0aCA+IHRoaXMuY291bnRyeUNvZGVNYXhMZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRyeUNvZGVNYXhMZW4gPSBjb3VudHJ5Q29kZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvdW50cnlDb2Rlcy5oYXNPd25Qcm9wZXJ0eShjb3VudHJ5Q29kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRyeUNvZGVzW2NvdW50cnlDb2RlXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGJhaWwgaWYgd2UgYWxyZWFkeSBoYXZlIHRoaXMgY291bnRyeSBmb3IgdGhpcyBjb3VudHJ5Q29kZVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY291bnRyeUNvZGVzW2NvdW50cnlDb2RlXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY291bnRyeUNvZGVzW2NvdW50cnlDb2RlXVtpXSA9PT0gaXNvMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3IgdW5kZWZpbmVkIGFzIDAgaXMgZmFsc3lcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gcHJpb3JpdHkgIT09IHVuZGVmaW5lZCA/IHByaW9yaXR5IDogdGhpcy5jb3VudHJ5Q29kZXNbY291bnRyeUNvZGVdLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudHJ5Q29kZXNbY291bnRyeUNvZGVdW2luZGV4XSA9IGlzbzI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfcHJvY2Vzc0FsbENvdW50cmllc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcHJvY2Vzc0FsbENvdW50cmllcygpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vbmx5Q291bnRyaWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxvd2VyQ2FzZU9ubHlDb3VudHJpZXMgPSB0aGlzLm9wdGlvbnMub25seUNvdW50cmllcy5tYXAoZnVuY3Rpb24oY291bnRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb3VudHJ5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRyaWVzID0gYWxsQ291bnRyaWVzLmZpbHRlcihmdW5jdGlvbihjb3VudHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvd2VyQ2FzZU9ubHlDb3VudHJpZXMuaW5kZXhPZihjb3VudHJ5LmlzbzIpID4gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuZXhjbHVkZUNvdW50cmllcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsb3dlckNhc2VFeGNsdWRlQ291bnRyaWVzID0gdGhpcy5vcHRpb25zLmV4Y2x1ZGVDb3VudHJpZXMubWFwKGZ1bmN0aW9uKGNvdW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY291bnRyeS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50cmllcyA9IGFsbENvdW50cmllcy5maWx0ZXIoZnVuY3Rpb24oY291bnRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsb3dlckNhc2VFeGNsdWRlQ291bnRyaWVzLmluZGV4T2YoY291bnRyeS5pc28yKSA9PT0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRyaWVzID0gYWxsQ291bnRyaWVzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfdHJhbnNsYXRlQ291bnRyaWVzQnlMb2NhbGVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3RyYW5zbGF0ZUNvdW50cmllc0J5TG9jYWxlKCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY291bnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNvID0gdGhpcy5jb3VudHJpZXNbaV0uaXNvMi50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5sb2NhbGl6ZWRDb3VudHJpZXMuaGFzT3duUHJvcGVydHkoaXNvKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRyaWVzW2ldLm5hbWUgPSB0aGlzLm9wdGlvbnMubG9jYWxpemVkQ291bnRyaWVzW2lzb107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9jb3VudHJ5TmFtZVNvcnRcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2NvdW50cnlOYW1lU29ydChhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhLm5hbWUgPCBiLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYS5uYW1lID4gYi5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9wcm9jZXNzQ291bnRyeUNvZGVzXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9wcm9jZXNzQ291bnRyeUNvZGVzKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50cnlDb2RlTWF4TGVuID0gMDtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGVyZSB3ZSBzdG9yZSBqdXN0IGRpYWwgY29kZXNcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsQ29kZXMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGVyZSB3ZSBzdG9yZSBcImNvdW50cnkgY29kZXNcIiAoYm90aCBkaWFsIGNvZGVzIGFuZCB0aGVpciBhcmVhIGNvZGVzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50cnlDb2RlcyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAvLyBmaXJzdDogYWRkIGRpYWwgY29kZXNcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvdW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSB0aGlzLmNvdW50cmllc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5kaWFsQ29kZXNbYy5kaWFsQ29kZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxDb2Rlc1tjLmRpYWxDb2RlXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hZGRDb3VudHJ5Q29kZShjLmlzbzIsIGMuZGlhbENvZGUsIGMucHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIG5leHQ6IGFkZCBhcmVhIGNvZGVzXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgYSBzZWNvbmQgbG9vcCBvdmVyIGNvdW50cmllcywgdG8gbWFrZSBzdXJlIHdlIGhhdmUgYWxsIG9mIHRoZSBcInJvb3RcIiBjb3VudHJpZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gYWxyZWFkeSBpbiB0aGUgbWFwLCBzbyB0aGF0IHdlIGNhbiBhY2Nlc3MgdGhlbSwgYXMgZWFjaCB0aW1lIHdlIGFkZCBhbiBhcmVhIGNvZGUgc3Vic3RyaW5nXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvIHRoZSBtYXAsIHdlIGFsc28gbmVlZCB0byBpbmNsdWRlIHRoZSBcInJvb3RcIiBjb3VudHJ5J3MgY29kZSwgYXMgdGhhdCBhbHNvIG1hdGNoZXNcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMuY291bnRyaWVzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9jID0gdGhpcy5jb3VudHJpZXNbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXJlYSBjb2Rlc1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9jLmFyZWFDb2Rlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByb290Q291bnRyeUNvZGUgPSB0aGlzLmNvdW50cnlDb2Rlc1tfYy5kaWFsQ29kZV1bMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9yIGVhY2ggYXJlYSBjb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfYy5hcmVhQ29kZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyZWFDb2RlID0gX2MuYXJlYUNvZGVzW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3IgZWFjaCBkaWdpdCBpbiB0aGUgYXJlYSBjb2RlIHRvIGFkZCBhbGwgcGFydGlhbCBtYXRjaGVzIGFzIHdlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDE7IGsgPCBhcmVhQ29kZS5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnRpYWxEaWFsQ29kZSA9IF9jLmRpYWxDb2RlICsgYXJlYUNvZGUuc3Vic3RyKDAsIGspO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RhcnQgd2l0aCB0aGUgcm9vdCBjb3VudHJ5LCBhcyB0aGF0IGFsc28gbWF0Y2hlcyB0aGlzIGRpYWwgY29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRkQ291bnRyeUNvZGUocm9vdENvdW50cnlDb2RlLCBwYXJ0aWFsRGlhbENvZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRkQ291bnRyeUNvZGUoX2MuaXNvMiwgcGFydGlhbERpYWxDb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdGhlIGZ1bGwgYXJlYSBjb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2FkZENvdW50cnlDb2RlKF9jLmlzbzIsIF9jLmRpYWxDb2RlICsgYXJlYUNvZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX3Byb2Nlc3NQcmVmZXJyZWRDb3VudHJpZXNcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Byb2Nlc3NQcmVmZXJyZWRDb3VudHJpZXMoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlZmVycmVkQ291bnRyaWVzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vcHRpb25zLnByZWZlcnJlZENvdW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvdW50cnlDb2RlID0gdGhpcy5vcHRpb25zLnByZWZlcnJlZENvdW50cmllc1tpXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvdW50cnlEYXRhID0gdGhpcy5fZ2V0Q291bnRyeURhdGEoY291bnRyeUNvZGUsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3VudHJ5RGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlZmVycmVkQ291bnRyaWVzLnB1c2goY291bnRyeURhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfY3JlYXRlRWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2NyZWF0ZUVsKG5hbWUsIGF0dHJzLCBjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JFYWNoUHJvcChhdHRycywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9nZW5lcmF0ZU1hcmt1cFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2VuZXJhdGVNYXJrdXAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIGF1dG9jb21wbGV0ZSBkb2VzIG5vdCBleGlzdCBvbiB0aGUgZWxlbWVudCBhbmQgaXRzIGZvcm0sIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgLy8gcHJldmVudCBhdXRvY29tcGxldGUgYXMgdGhlcmUncyBubyBzYWZlLCBjcm9zcy1icm93c2VyIGV2ZW50IHdlIGNhbiByZWFjdCB0bywgc28gaXQgY2FuXG4gICAgICAgICAgICAgICAgICAgIC8vIGVhc2lseSBwdXQgdGhlIHBsdWdpbiBpbiBhbiBpbmNvbnNpc3RlbnQgc3RhdGUgZS5nLiB0aGUgd3JvbmcgZmxhZyBzZWxlY3RlZCBmb3IgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIGF1dG9jb21wbGV0ZWQgbnVtYmVyLCB3aGljaCBvbiBzdWJtaXQgY291bGQgbWVhbiB3cm9uZyBudW1iZXIgaXMgc2F2ZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRlbElucHV0Lmhhc0F0dHJpYnV0ZShcImF1dG9jb21wbGV0ZVwiKSAmJiAhKHRoaXMudGVsSW5wdXQuZm9ybSAmJiB0aGlzLnRlbElucHV0LmZvcm0uaGFzQXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJhdXRvY29tcGxldGVcIiwgXCJvZmZcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIF90aGlzJG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsIGFsbG93RHJvcGRvd24gPSBfdGhpcyRvcHRpb25zLmFsbG93RHJvcGRvd24sIHNlcGFyYXRlRGlhbENvZGUgPSBfdGhpcyRvcHRpb25zLnNlcGFyYXRlRGlhbENvZGUsIHNob3dGbGFncyA9IF90aGlzJG9wdGlvbnMuc2hvd0ZsYWdzLCBjdXN0b21Db250YWluZXIgPSBfdGhpcyRvcHRpb25zLmN1c3RvbUNvbnRhaW5lciwgaGlkZGVuSW5wdXQgPSBfdGhpcyRvcHRpb25zLmhpZGRlbklucHV0LCBkcm9wZG93bkNvbnRhaW5lciA9IF90aGlzJG9wdGlvbnMuZHJvcGRvd25Db250YWluZXI7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnRhaW5lcnMgKG1vc3RseSBmb3IgcG9zaXRpb25pbmcpXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRDbGFzcyA9IFwiaXRpXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbGxvd0Ryb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbGFzcyArPSBcIiBpdGktLWFsbG93LWRyb3Bkb3duXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlcGFyYXRlRGlhbENvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENsYXNzICs9IFwiIGl0aS0tc2VwYXJhdGUtZGlhbC1jb2RlXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dGbGFncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q2xhc3MgKz0gXCIgaXRpLS1zaG93LWZsYWdzXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1c3RvbUNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q2xhc3MgKz0gXCIgXCIuY29uY2F0KGN1c3RvbUNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSB0aGlzLl9jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IHBhcmVudENsYXNzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbElucHV0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIHRoaXMudGVsSW5wdXQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGhpZGUgdGhlIGZsYWdzQ29udGFpbmVyIGlmIGFsbG93RHJvcGRvd24sIHNob3dGbGFncyBhbmQgc2VwYXJhdGVEaWFsQ29kZSBhcmUgYWxsIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHZhciBzaG93RmxhZ3NDb250YWluZXIgPSBhbGxvd0Ryb3Bkb3duIHx8IHNob3dGbGFncyB8fCBzZXBhcmF0ZURpYWxDb2RlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvd0ZsYWdzQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsYWdzQ29udGFpbmVyID0gdGhpcy5fY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJpdGlfX2ZsYWctY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHdyYXBwZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy50ZWxJbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNlbGVjdGVkIGZsYWcgKGRpc3BsYXllZCB0byBsZWZ0IG9mIGlucHV0KVxuICAgICAgICAgICAgICAgICAgICAvLyB1c2luZyBBcmlhIHRhZ3MgZm9yIFwiU2VsZWN0LU9ubHkgQ29tYm9ib3ggRXhhbXBsZVwiXG4gICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vd3d3LnczLm9yZy9XQUkvQVJJQS9hcGcvcGF0dGVybnMvY29tYm9ib3gvZXhhbXBsZXMvY29tYm9ib3gtc2VsZWN0LW9ubHkvXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG93RmxhZ3NDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGbGFnID0gdGhpcy5fY3JlYXRlRWwoXCJkaXZcIiwgX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcIml0aV9fc2VsZWN0ZWQtZmxhZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBhbGxvd0Ryb3Bkb3duICYmIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlOiBcImNvbWJvYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWhhc3BvcHVwXCI6IFwibGlzdGJveFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBcIml0aS1cIi5jb25jYXQodGhpcy5pZCwgXCJfX2NvdW50cnktbGlzdGJveFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtZXhwYW5kZWRcIjogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIlRlbGVwaG9uZSBjb3VudHJ5IGNvZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSksIHRoaXMuZmxhZ3NDb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG93RmxhZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGbGFnSW5uZXIgPSB0aGlzLl9jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcIml0aV9fZmxhZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLnNlbGVjdGVkRmxhZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRGbGFnICYmIHRoaXMudGVsSW5wdXQuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGbGFnLnNldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXBhcmF0ZURpYWxDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGlhbENvZGUgPSB0aGlzLl9jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcIml0aV9fc2VsZWN0ZWQtZGlhbC1jb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMuc2VsZWN0ZWRGbGFnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYWxsb3dEcm9wZG93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRlbElucHV0LmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBlbGVtZW50IGZvY3VzYWJsZSBhbmQgdGFiIG5hdmlnYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGbGFnLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd25BcnJvdyA9IHRoaXMuX2NyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwiaXRpX19hcnJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLnNlbGVjdGVkRmxhZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb3VudHJ5IGRyb3Bkb3duOiBwcmVmZXJyZWQgY291bnRyaWVzLCB0aGVuIGRpdmlkZXIsIHRoZW4gYWxsIGNvdW50cmllc1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudHJ5TGlzdCA9IHRoaXMuX2NyZWF0ZUVsKFwidWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJpdGlfX2NvdW50cnktbGlzdCBpdGlfX2hpZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJpdGktXCIuY29uY2F0KHRoaXMuaWQsIFwiX19jb3VudHJ5LWxpc3Rib3hcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZTogXCJsaXN0Ym94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiTGlzdCBvZiBjb3VudHJpZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmVmZXJyZWRDb3VudHJpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXBwZW5kTGlzdEl0ZW1zKHRoaXMucHJlZmVycmVkQ291bnRyaWVzLCBcIml0aV9fcHJlZmVycmVkXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUVsKFwibGlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwiaXRpX19kaXZpZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU6IFwic2VwYXJhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1kaXNhYmxlZFwiOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMuY291bnRyeUxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXBwZW5kTGlzdEl0ZW1zKHRoaXMuY291bnRyaWVzLCBcIml0aV9fc3RhbmRhcmRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjcmVhdGUgZHJvcGRvd25Db250YWluZXIgbWFya3VwXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZHJvcGRvd25Db250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duID0gdGhpcy5fY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwiaXRpIGl0aS0tY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duLmFwcGVuZENoaWxkKHRoaXMuY291bnRyeUxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsYWdzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY291bnRyeUxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChoaWRkZW5JbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhpZGRlbklucHV0TmFtZSA9IGhpZGRlbklucHV0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSB0aGlzLnRlbElucHV0LmdldEF0dHJpYnV0ZShcIm5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gbmFtZS5sYXN0SW5kZXhPZihcIltcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgaW5wdXQgbmFtZSBjb250YWlucyBzcXVhcmUgYnJhY2tldHMsIHRoZW4gZ2l2ZSB0aGUgaGlkZGVuIGlucHV0IHRoZSBzYW1lIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVwbGFjaW5nIHRoZSBjb250ZW50cyBvZiB0aGUgbGFzdCBzZXQgb2YgYnJhY2tldHMgd2l0aCB0aGUgZ2l2ZW4gaGlkZGVuSW5wdXQgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW5JbnB1dE5hbWUgPSBcIlwiLmNvbmNhdChuYW1lLnN1YnN0cigwLCBpKSwgXCJbXCIpLmNvbmNhdChoaWRkZW5JbnB1dE5hbWUsIFwiXVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGRlbklucHV0ID0gdGhpcy5fY3JlYXRlRWwoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBoaWRkZW5JbnB1dE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmhpZGRlbklucHV0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX2FwcGVuZExpc3RJdGVtc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kTGlzdEl0ZW1zKGNvdW50cmllcywgY2xhc3NOYW1lLCBwcmVmZXJyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgY3JlYXRlIHNvIG1hbnkgRE9NIGVsZW1lbnRzLCBpdCBpcyBmYXN0ZXIgdG8gYnVpbGQgYSB0ZW1wIHN0cmluZ1xuICAgICAgICAgICAgICAgICAgICAvLyBhbmQgdGhlbiBhZGQgZXZlcnl0aGluZyB0byB0aGUgRE9NIGluIG9uZSBnbyBhdCB0aGUgZW5kXG4gICAgICAgICAgICAgICAgICAgIHZhciB0bXAgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAvLyBmb3IgZWFjaCBjb3VudHJ5XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IGNvdW50cmllc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZFN1ZmZpeCA9IHByZWZlcnJlZCA/IFwiLXByZWZlcnJlZFwiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9wZW4gdGhlIGxpc3QgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wICs9IFwiPGxpIGNsYXNzPSdpdGlfX2NvdW50cnkgXCIuY29uY2F0KGNsYXNzTmFtZSwgXCInIHRhYkluZGV4PSctMScgaWQ9J2l0aS1cIikuY29uY2F0KHRoaXMuaWQsIFwiX19pdGVtLVwiKS5jb25jYXQoYy5pc28yKS5jb25jYXQoaWRTdWZmaXgsIFwiJyByb2xlPSdvcHRpb24nIGRhdGEtZGlhbC1jb2RlPSdcIikuY29uY2F0KGMuZGlhbENvZGUsIFwiJyBkYXRhLWNvdW50cnktY29kZT0nXCIpLmNvbmNhdChjLmlzbzIsIFwiJyBhcmlhLXNlbGVjdGVkPSdmYWxzZSc+XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHRoZSBmbGFnXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dGbGFncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcCArPSBcIjxkaXYgY2xhc3M9J2l0aV9fZmxhZy1ib3gnPjxkaXYgY2xhc3M9J2l0aV9fZmxhZyBpdGlfX1wiLmNvbmNhdChjLmlzbzIsIFwiJz48L2Rpdj48L2Rpdj5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgdGhlIGNvdW50cnkgbmFtZSBhbmQgZGlhbCBjb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICB0bXAgKz0gXCI8c3BhbiBjbGFzcz0naXRpX19jb3VudHJ5LW5hbWUnPlwiLmNvbmNhdChjLm5hbWUsIFwiPC9zcGFuPlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcCArPSBcIjxzcGFuIGNsYXNzPSdpdGlfX2RpYWwtY29kZSc+K1wiLmNvbmNhdChjLmRpYWxDb2RlLCBcIjwvc3Bhbj5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjbG9zZSB0aGUgbGlzdCBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICB0bXAgKz0gXCI8L2xpPlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRyeUxpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIHRtcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfc2V0SW5pdGlhbFN0YXRlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZpeCBmaXJlZm94IGJ1Zzogd2hlbiBmaXJzdCBsb2FkIHBhZ2UgKHdpdGggaW5wdXQgd2l0aCB2YWx1ZSBzZXQgdG8gbnVtYmVyIHdpdGggaW50bCBkaWFsXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvZGUpIGFuZCBpbml0aWFsaXNpbmcgcGx1Z2luIHJlbW92ZXMgdGhlIGRpYWwgY29kZSBmcm9tIHRoZSBpbnB1dCwgdGhlbiByZWZyZXNoIHBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIC8vIGFuZCB3ZSB0cnkgdG8gaW5pdCBwbHVnaW4gYWdhaW4gYnV0IHRoaXMgdGltZSBvbiBudW1iZXIgd2l0aG91dCBkaWFsIGNvZGUgc28gZ2V0IGdyZXkgZmxhZ1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlVmFsdWUgPSB0aGlzLnRlbElucHV0LmdldEF0dHJpYnV0ZShcInZhbHVlXCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5wdXRWYWx1ZSA9IHRoaXMudGVsSW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1c2VBdHRyaWJ1dGUgPSBhdHRyaWJ1dGVWYWx1ZSAmJiBhdHRyaWJ1dGVWYWx1ZS5jaGFyQXQoMCkgPT09IFwiK1wiICYmICghaW5wdXRWYWx1ZSB8fCBpbnB1dFZhbHVlLmNoYXJBdCgwKSAhPT0gXCIrXCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gdXNlQXR0cmlidXRlID8gYXR0cmlidXRlVmFsdWUgOiBpbnB1dFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGlhbENvZGUgPSB0aGlzLl9nZXREaWFsQ29kZSh2YWwpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNSZWdpb25sZXNzTmFucCA9IHRoaXMuX2lzUmVnaW9ubGVzc05hbnAodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF90aGlzJG9wdGlvbnMyID0gdGhpcy5vcHRpb25zLCBpbml0aWFsQ291bnRyeSA9IF90aGlzJG9wdGlvbnMyLmluaXRpYWxDb3VudHJ5LCBhdXRvSW5zZXJ0RGlhbENvZGUgPSBfdGhpcyRvcHRpb25zMi5hdXRvSW5zZXJ0RGlhbENvZGU7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFscmVhZHkgaGF2ZSBhIGRpYWwgY29kZSwgYW5kIGl0J3Mgbm90IGEgcmVnaW9ubGVzc05hbnAsIHdlIGNhbiBnbyBhaGVhZCBhbmQgc2V0IHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyBmbGFnLCBlbHNlIGZhbGwgYmFjayB0byB0aGUgZGVmYXVsdCBjb3VudHJ5XG4gICAgICAgICAgICAgICAgICAgIGlmIChkaWFsQ29kZSAmJiAhaXNSZWdpb25sZXNzTmFucCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmxhZ0Zyb21OdW1iZXIodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbml0aWFsQ291bnRyeSAhPT0gXCJhdXRvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlZSBpZiB3ZSBzaG91bGQgc2VsZWN0IGEgZmxhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWxDb3VudHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2V0RmxhZyhpbml0aWFsQ291bnRyeS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpYWxDb2RlICYmIGlzUmVnaW9ubGVzc05hbnApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGFzIGludGwgZGlhbCBjb2RlLCBpcyByZWdpb25sZXNzIG5hbnAsIGFuZCBubyBpbml0aWFsQ291bnRyeSwgc28gZGVmYXVsdCB0byBVU1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXRGbGFnKFwidXNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm8gZGlhbCBjb2RlIGFuZCBubyBpbml0aWFsQ291bnRyeSwgc28gZGVmYXVsdCB0byBmaXJzdCBpbiBsaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdENvdW50cnkgPSB0aGlzLnByZWZlcnJlZENvdW50cmllcy5sZW5ndGggPyB0aGlzLnByZWZlcnJlZENvdW50cmllc1swXS5pc28yIDogdGhpcy5jb3VudHJpZXNbMF0uaXNvMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NldEZsYWcodGhpcy5kZWZhdWx0Q291bnRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBlbXB0eSBhbmQgYXV0b0luc2VydERpYWxDb2RlIHRoZW4gaW5zZXJ0IHRoZSBkaWFsIGNvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdmFsICYmIGF1dG9JbnNlcnREaWFsQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVsSW5wdXQudmFsdWUgPSBcIitcIi5jb25jYXQodGhpcy5zZWxlY3RlZENvdW50cnlEYXRhLmRpYWxDb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBOT1RFOiBpZiBpbml0aWFsQ291bnRyeSBpcyBzZXQgdG8gYXV0bywgdGhhdCB3aWxsIGJlIGhhbmRsZWQgc2VwYXJhdGVseVxuICAgICAgICAgICAgICAgICAgICAvLyBmb3JtYXQgLSBub3RlIHRoaXMgd29udCBiZSBydW4gYWZ0ZXIgX3VwZGF0ZURpYWxDb2RlIGFzIHRoYXQncyBvbmx5IGNhbGxlZCBpZiBubyB2YWxcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlVmFsRnJvbU51bWJlcih2YWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfaW5pdExpc3RlbmVyc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaW5pdExpc3RlbmVycygpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5pdEtleUxpc3RlbmVycygpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmF1dG9JbnNlcnREaWFsQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5pdEJsdXJMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFsbG93RHJvcGRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2luaXREcm9wZG93bkxpc3RlbmVycygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhpZGRlbklucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbml0SGlkZGVuSW5wdXRMaXN0ZW5lcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfaW5pdEhpZGRlbklucHV0TGlzdGVuZXJcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2luaXRIaWRkZW5JbnB1dExpc3RlbmVyKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlSGlkZGVuSW5wdXRTdWJtaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMy5oaWRkZW5JbnB1dC52YWx1ZSA9IF90aGlzMy5nZXROdW1iZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGVsSW5wdXQuZm9ybSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZWxJbnB1dC5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5faGFuZGxlSGlkZGVuSW5wdXRTdWJtaXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfZ2V0Q2xvc2VzdExhYmVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXRDbG9zZXN0TGFiZWwoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IHRoaXMudGVsSW5wdXQ7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChlbCAmJiBlbC50YWdOYW1lICE9PSBcIkxBQkVMXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsID0gZWwucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfaW5pdERyb3Bkb3duTGlzdGVuZXJzXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9pbml0RHJvcGRvd25MaXN0ZW5lcnMoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAvLyBoYWNrIGZvciBpbnB1dCBuZXN0ZWQgaW5zaWRlIGxhYmVsICh3aGljaCBpcyB2YWxpZCBtYXJrdXApOiBjbGlja2luZyB0aGUgc2VsZWN0ZWQtZmxhZyB0b1xuICAgICAgICAgICAgICAgICAgICAvLyBvcGVuIHRoZSBkcm9wZG93biB3b3VsZCB0aGVuIGF1dG9tYXRpY2FsbHkgdHJpZ2dlciBhIDJuZCBjbGljayBvbiB0aGUgaW5wdXQgd2hpY2ggd291bGRcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xvc2UgaXQgYWdhaW5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlTGFiZWxDbGljayA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBkcm9wZG93biBpcyBjbG9zZWQsIHRoZW4gZm9jdXMgdGhlIGlucHV0LCBlbHNlIGlnbm9yZSB0aGUgY2xpY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpczQuY291bnRyeUxpc3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXRpX19oaWRlXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM0LnRlbElucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5fZ2V0Q2xvc2VzdExhYmVsKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuX2hhbmRsZUxhYmVsQ2xpY2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZ2dsZSBjb3VudHJ5IGRyb3Bkb3duIG9uIGNsaWNrXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUNsaWNrU2VsZWN0ZWRGbGFnID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGludGVyY2VwdCB0aGlzIGV2ZW50IGlmIHdlJ3JlIG9wZW5pbmcgdGhlIGRyb3Bkb3duXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlbHNlIGxldCBpdCBidWJibGUgdXAgdG8gdGhlIHRvcCAoXCJjbGljay1vZmYtdG8tY2xvc2VcIiBsaXN0ZW5lcilcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGNhbm5vdCBqdXN0IHN0b3BQcm9wYWdhdGlvbiBhcyBpdCBtYXkgYmUgbmVlZGVkIHRvIGNsb3NlIGFub3RoZXIgaW5zdGFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpczQuY291bnRyeUxpc3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXRpX19oaWRlXCIpICYmICFfdGhpczQudGVsSW5wdXQuZGlzYWJsZWQgJiYgIV90aGlzNC50ZWxJbnB1dC5yZWFkT25seSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNC5fc2hvd0Ryb3Bkb3duKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGbGFnLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9oYW5kbGVDbGlja1NlbGVjdGVkRmxhZyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIG9wZW4gZHJvcGRvd24gbGlzdCBpZiBjdXJyZW50bHkgZm9jdXNlZFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVGbGFnc0NvbnRhaW5lcktleWRvd24gPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNEcm9wZG93bkhpZGRlbiA9IF90aGlzNC5jb3VudHJ5TGlzdC5jbGFzc0xpc3QuY29udGFpbnMoXCJpdGlfX2hpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNEcm9wZG93bkhpZGRlbiAmJiBbIFwiQXJyb3dVcFwiLCBcIlVwXCIsIFwiQXJyb3dEb3duXCIsIFwiRG93blwiLCBcIiBcIiwgXCJFbnRlclwiIF0uaW5kZXhPZihlLmtleSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJldmVudCBmb3JtIGZyb20gYmVpbmcgc3VibWl0dGVkIGlmIFwiRU5URVJcIiB3YXMgcHJlc3NlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwcmV2ZW50IGV2ZW50IGZyb20gYmVpbmcgaGFuZGxlZCBhZ2FpbiBieSBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM0Ll9zaG93RHJvcGRvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsbG93IG5hdmlnYXRpb24gZnJvbSBkcm9wZG93biB0byBpbnB1dCBvbiBUQUJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJUYWJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNC5fY2xvc2VEcm9wZG93bigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZsYWdzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUZsYWdzQ29udGFpbmVyS2V5ZG93bik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfaW5pdFJlcXVlc3RzXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9pbml0UmVxdWVzdHMoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgdXNlciBoYXMgc3BlY2lmaWVkIHRoZSBwYXRoIHRvIHRoZSB1dGlscyBzY3JpcHQsIGZldGNoIGl0IG9uIHdpbmRvdy5sb2FkLCBlbHNlIHJlc29sdmVcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy51dGlsc1NjcmlwdCAmJiAhd2luZG93LmludGxUZWxJbnB1dFV0aWxzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcGx1Z2luIGlzIGJlaW5nIGluaXRpYWxpc2VkIGFmdGVyIHRoZSB3aW5kb3cubG9hZCBldmVudCBoYXMgYWxyZWFkeSBiZWVuIGZpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmludGxUZWxJbnB1dEdsb2JhbHMuZG9jdW1lbnRSZWFkeSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmludGxUZWxJbnB1dEdsb2JhbHMubG9hZFV0aWxzKHRoaXMub3B0aW9ucy51dGlsc1NjcmlwdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdhaXQgdW50aWwgdGhlIGxvYWQgZXZlbnQgc28gd2UgZG9uJ3QgYmxvY2sgYW55IG90aGVyIHJlcXVlc3RzIGUuZy4gdGhlIGZsYWdzIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaW50bFRlbElucHV0R2xvYmFscy5sb2FkVXRpbHMoX3RoaXM1Lm9wdGlvbnMudXRpbHNTY3JpcHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlVXRpbHNTY3JpcHRQcm9taXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pbml0aWFsQ291bnRyeSA9PT0gXCJhdXRvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRBdXRvQ291bnRyeSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlQXV0b0NvdW50cnlQcm9taXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9sb2FkQXV0b0NvdW50cnlcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2xvYWRBdXRvQ291bnRyeSgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gMyBvcHRpb25zOlxuICAgICAgICAgICAgICAgICAgICAvLyAxKSBhbHJlYWR5IGxvYWRlZCAod2UncmUgZG9uZSlcbiAgICAgICAgICAgICAgICAgICAgLy8gMikgbm90IGFscmVhZHkgc3RhcnRlZCBsb2FkaW5nIChzdGFydClcbiAgICAgICAgICAgICAgICAgICAgLy8gMykgYWxyZWFkeSBzdGFydGVkIGxvYWRpbmcgKGRvIG5vdGhpbmcgLSBqdXN0IHdhaXQgZm9yIGxvYWRpbmcgY2FsbGJhY2sgdG8gZmlyZSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5pbnRsVGVsSW5wdXRHbG9iYWxzLmF1dG9Db3VudHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUF1dG9Db3VudHJ5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXdpbmRvdy5pbnRsVGVsSW5wdXRHbG9iYWxzLnN0YXJ0ZWRMb2FkaW5nQXV0b0NvdW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRvbid0IGRvIHRoaXMgdHdpY2UhXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaW50bFRlbElucHV0R2xvYmFscy5zdGFydGVkTG9hZGluZ0F1dG9Db3VudHJ5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmdlb0lwTG9va3VwID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZ2VvSXBMb29rdXAoZnVuY3Rpb24oY291bnRyeUNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmludGxUZWxJbnB1dEdsb2JhbHMuYXV0b0NvdW50cnkgPSBjb3VudHJ5Q29kZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0ZWxsIGFsbCBpbnN0YW5jZXMgdGhlIGF1dG8gY291bnRyeSBpcyByZWFkeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiB0aGlzIHNob3VsZCBqdXN0IGJlIHRoZSBjdXJyZW50IGluc3RhbmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVUERBVEU6IHVzZSBzZXRUaW1lb3V0IGluIGNhc2UgdGhlaXIgZ2VvSXBMb29rdXAgZnVuY3Rpb24gY2FsbHMgdGhpcyBjYWxsYmFjayBzdHJhaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhd2F5IChlLmcuIGlmIHRoZXkgaGF2ZSBhbHJlYWR5IGRvbmUgdGhlIGdlbyBpcCBsb29rdXAgc29tZXdoZXJlIGVsc2UpLiBVc2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0IG1lYW5zIHRoYXQgdGhlIGN1cnJlbnQgdGhyZWFkIG9mIGV4ZWN1dGlvbiB3aWxsIGZpbmlzaCBiZWZvcmUgZXhlY3V0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMsIHdoaWNoIGFsbG93cyB0aGUgcGx1Z2luIHRvIGZpbmlzaCBpbml0aWFsaXNpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9yRWFjaEluc3RhbmNlKFwiaGFuZGxlQXV0b0NvdW50cnlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9yRWFjaEluc3RhbmNlKFwicmVqZWN0QXV0b0NvdW50cnlQcm9taXNlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfaW5pdEtleUxpc3RlbmVyc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaW5pdEtleUxpc3RlbmVycygpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBmbGFnIG9uIGtleXVwXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUtleXVwRXZlbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpczYuX3VwZGF0ZUZsYWdGcm9tTnVtYmVyKF90aGlzNi50ZWxJbnB1dC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczYuX3RyaWdnZXJDb3VudHJ5Q2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuX2hhbmRsZUtleXVwRXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgZmxhZyBvbiBjdXQvcGFzdGUgZXZlbnRzIChub3cgc3VwcG9ydGVkIGluIGFsbCBtYWpvciBicm93c2VycylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlQ2xpcGJvYXJkRXZlbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhhY2sgYmVjYXVzZSBcInBhc3RlXCIgZXZlbnQgaXMgZmlyZWQgYmVmb3JlIGlucHV0IGlzIHVwZGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoX3RoaXM2Ll9oYW5kbGVLZXl1cEV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY3V0XCIsIHRoaXMuX2hhbmRsZUNsaXBib2FyZEV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwicGFzdGVcIiwgdGhpcy5faGFuZGxlQ2xpcGJvYXJkRXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX2NhcFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfY2FwKG51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gdGhpcy50ZWxJbnB1dC5nZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXggJiYgbnVtYmVyLmxlbmd0aCA+IG1heCA/IG51bWJlci5zdWJzdHIoMCwgbWF4KSA6IG51bWJlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9pbml0Qmx1ckxpc3RlbmVyc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaW5pdEJsdXJMaXN0ZW5lcnMoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfdGhpczcgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAvLyBvbiBibHVyIG9yIGZvcm0gc3VibWl0OiBpZiBqdXN0IGEgZGlhbCBjb2RlIHRoZW4gcmVtb3ZlIGl0XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZVN1Ym1pdE9yQmx1ckV2ZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczcuX3JlbW92ZUVtcHR5RGlhbENvZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGVsSW5wdXQuZm9ybSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZWxJbnB1dC5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5faGFuZGxlU3VibWl0T3JCbHVyRXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgdGhpcy5faGFuZGxlU3VibWl0T3JCbHVyRXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX3JlbW92ZUVtcHR5RGlhbENvZGVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3JlbW92ZUVtcHR5RGlhbENvZGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRlbElucHV0LnZhbHVlLmNoYXJBdCgwKSA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBudW1lcmljID0gdGhpcy5fZ2V0TnVtZXJpYyh0aGlzLnRlbElucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGp1c3QgYSBwbHVzLCBvciBpZiBqdXN0IGEgZGlhbCBjb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW51bWVyaWMgfHwgdGhpcy5zZWxlY3RlZENvdW50cnlEYXRhLmRpYWxDb2RlID09PSBudW1lcmljKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZWxJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9nZXROdW1lcmljXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXROdW1lcmljKHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX3RyaWdnZXJcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3RyaWdnZXIobmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBoYXZlIHRvIHVzZSBvbGQgc2Nob29sIGRvY3VtZW50LmNyZWF0ZUV2ZW50IGFzIElFMTEgZG9lc24ndCBzdXBwb3J0IGBuZXcgRXZlbnQoKWAgc3ludGF4XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZS5pbml0RXZlbnQobmFtZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbiBidWJibGUsIGFuZCBpcyBjYW5jZWxsYWJsZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbElucHV0LmRpc3BhdGNoRXZlbnQoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfc2hvd0Ryb3Bkb3duXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zaG93RHJvcGRvd24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRyeUxpc3QuY2xhc3NMaXN0LnJlbW92ZShcIml0aV9faGlkZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZsYWcuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcInRydWVcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NldERyb3Bkb3duUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIGhpZ2hsaWdodGluZyBhbmQgc2Nyb2xsIHRvIGFjdGl2ZSBsaXN0IGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faGlnaGxpZ2h0TGlzdEl0ZW0odGhpcy5hY3RpdmVJdGVtLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxUbyh0aGlzLmFjdGl2ZUl0ZW0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGJpbmQgYWxsIHRoZSBkcm9wZG93bi1yZWxhdGVkIGxpc3RlbmVyczogbW91c2VvdmVyLCBjbGljaywgY2xpY2stb2ZmLCBrZXlkb3duXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2JpbmREcm9wZG93bkxpc3RlbmVycygpO1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGFycm93XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd25BcnJvdy5jbGFzc0xpc3QuYWRkKFwiaXRpX19hcnJvdy0tdXBcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RyaWdnZXIoXCJvcGVuOmNvdW50cnlkcm9wZG93blwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl90b2dnbGVDbGFzc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdG9nZ2xlQ2xhc3MoZWwsIGNsYXNzTmFtZSwgc2hvdWxkSGF2ZUNsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRIYXZlQ2xhc3MgJiYgIWVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXNob3VsZEhhdmVDbGFzcyAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfc2V0RHJvcGRvd25Qb3NpdGlvblwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0RHJvcGRvd25Qb3NpdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF90aGlzOCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZHJvcGRvd25Db250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kcm9wZG93bkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmRyb3Bkb3duKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNNb2JpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSB0aGlzLnRlbElucHV0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2luZG93VG9wIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE0Mzg0MDkxLzIxNzg2NlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdpbmRvd1RvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlucHV0VG9wID0gcG9zLnRvcCArIHdpbmRvd1RvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkcm9wZG93bkhlaWdodCA9IHRoaXMuY291bnRyeUxpc3Qub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZHJvcGRvd25GaXRzQmVsb3cgPSAoZHJvcGRvd25Cb3R0b20gPCB3aW5kb3dCb3R0b20pXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHJvcGRvd25GaXRzQmVsb3cgPSBpbnB1dFRvcCArIHRoaXMudGVsSW5wdXQub2Zmc2V0SGVpZ2h0ICsgZHJvcGRvd25IZWlnaHQgPCB3aW5kb3dUb3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHJvcGRvd25GaXRzQWJvdmUgPSBpbnB1dFRvcCAtIGRyb3Bkb3duSGVpZ2h0ID4gd2luZG93VG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnkgZGVmYXVsdCwgdGhlIGRyb3Bkb3duIHdpbGwgYmUgYmVsb3cgdGhlIGlucHV0LiBJZiB3ZSB3YW50IHRvIHBvc2l0aW9uIGl0IGFib3ZlIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5wdXQsIHdlIGFkZCB0aGUgZHJvcHVwIGNsYXNzLlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG9nZ2xlQ2xhc3ModGhpcy5jb3VudHJ5TGlzdCwgXCJpdGlfX2NvdW50cnktbGlzdC0tZHJvcHVwXCIsICFkcm9wZG93bkZpdHNCZWxvdyAmJiBkcm9wZG93bkZpdHNBYm92ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBkcm9wZG93bkNvbnRhaW5lciBpcyBlbmFibGVkLCBjYWxjdWxhdGUgcG9zdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kcm9wZG93bkNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJ5IGRlZmF1bHQgdGhlIGRyb3Bkb3duIHdpbGwgYmUgZGlyZWN0bHkgb3ZlciB0aGUgaW5wdXQgYmVjYXVzZSBpdCdzIG5vdCBpbiB0aGUgZmxvdy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSB3YW50IHRvIHBvc2l0aW9uIGl0IGJlbG93LCB3ZSBuZWVkIHRvIGFkZCBzb21lIGV4dHJhIHRvcCB2YWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh0cmFUb3AgPSAhZHJvcGRvd25GaXRzQmVsb3cgJiYgZHJvcGRvd25GaXRzQWJvdmUgPyAwIDogdGhpcy50ZWxJbnB1dC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHBsYWNlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd24uc3R5bGUudG9wID0gXCJcIi5jb25jYXQoaW5wdXRUb3AgKyBleHRyYVRvcCwgXCJweFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duLnN0eWxlLmxlZnQgPSBcIlwiLmNvbmNhdChwb3MubGVmdCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCwgXCJweFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjbG9zZSBtZW51IG9uIHdpbmRvdyBzY3JvbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVXaW5kb3dTY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzOC5fY2xvc2VEcm9wZG93bigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5faGFuZGxlV2luZG93U2Nyb2xsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX2dldENsb3Nlc3RMaXN0SXRlbVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0Q2xvc2VzdExpc3RJdGVtKHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChlbCAmJiBlbCAhPT0gdGhpcy5jb3VudHJ5TGlzdCAmJiAhZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXRpX19jb3VudHJ5XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbCA9IGVsLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgd2UgcmVhY2hlZCB0aGUgY291bnRyeUxpc3QgZWxlbWVudCwgdGhlbiByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWwgPT09IHRoaXMuY291bnRyeUxpc3QgPyBudWxsIDogZWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfYmluZERyb3Bkb3duTGlzdGVuZXJzXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9iaW5kRHJvcGRvd25MaXN0ZW5lcnMoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfdGhpczkgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIG1vdXNlIG92ZXIgYSBsaXN0IGl0ZW0sIGp1c3QgaGlnaGxpZ2h0IHRoYXQgb25lXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGFkZCB0aGUgY2xhc3MgXCJoaWdobGlnaHRcIiwgc28gaWYgdGhleSBoaXQgXCJlbnRlclwiIHdlIGtub3cgd2hpY2ggb25lIHRvIHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVNb3VzZW92ZXJDb3VudHJ5TGlzdCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBldmVudCBkZWxlZ2F0aW9uLCBhcyB3ZSdyZSBsaXN0ZW5pbmcgZm9yIHRoaXMgZXZlbnQgb24gdGhlIGNvdW50cnlMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdEl0ZW0gPSBfdGhpczkuX2dldENsb3Nlc3RMaXN0SXRlbShlLnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGlzdEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczkuX2hpZ2hsaWdodExpc3RJdGVtKGxpc3RJdGVtLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRyeUxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCB0aGlzLl9oYW5kbGVNb3VzZW92ZXJDb3VudHJ5TGlzdCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxpc3RlbiBmb3IgY291bnRyeSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlQ2xpY2tDb3VudHJ5TGlzdCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsaXN0SXRlbSA9IF90aGlzOS5fZ2V0Q2xvc2VzdExpc3RJdGVtKGUudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaXN0SXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzOS5fc2VsZWN0TGlzdEl0ZW0obGlzdEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50cnlMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9oYW5kbGVDbGlja0NvdW50cnlMaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xpY2sgb2ZmIHRvIGNsb3NlXG4gICAgICAgICAgICAgICAgICAgIC8vIChleGNlcHQgd2hlbiB0aGlzIGluaXRpYWwgb3BlbmluZyBjbGljayBpcyBidWJibGluZyB1cClcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgY2Fubm90IGp1c3Qgc3RvcFByb3BhZ2F0aW9uIGFzIGl0IG1heSBiZSBuZWVkZWQgdG8gY2xvc2UgYW5vdGhlciBpbnN0YW5jZVxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNPcGVuaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlQ2xpY2tPZmZUb0Nsb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzT3BlbmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzOS5fY2xvc2VEcm9wZG93bigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNPcGVuaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5faGFuZGxlQ2xpY2tPZmZUb0Nsb3NlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGlzdGVuIGZvciB1cC9kb3duIHNjcm9sbGluZywgZW50ZXIgdG8gc2VsZWN0LCBvciBsZXR0ZXJzIHRvIGp1bXAgdG8gY291bnRyeSBuYW1lLlxuICAgICAgICAgICAgICAgICAgICAvLyB1c2Uga2V5ZG93biBhcyBrZXlwcmVzcyBkb2Vzbid0IGZpcmUgZm9yIG5vbi1jaGFyIGtleXMgYW5kIHdlIHdhbnQgdG8gY2F0Y2ggaWYgdGhleVxuICAgICAgICAgICAgICAgICAgICAvLyBqdXN0IGhpdCBkb3duIGFuZCBob2xkIGl0IHRvIHNjcm9sbCBkb3duIChubyBrZXl1cCBldmVudCkuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxpc3RlbiBvbiB0aGUgZG9jdW1lbnQgYmVjYXVzZSB0aGF0J3Mgd2hlcmUga2V5IGV2ZW50cyBhcmUgdHJpZ2dlcmVkIGlmIG5vIGlucHV0IGhhcyBmb2N1c1xuICAgICAgICAgICAgICAgICAgICB2YXIgcXVlcnkgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcXVlcnlUaW1lciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUtleWRvd25PbkRyb3Bkb3duID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJldmVudCBkb3duIGtleSBmcm9tIHNjcm9sbGluZyB0aGUgd2hvbGUgcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCBlbnRlciBrZXkgZnJvbSBzdWJtaXR0aW5nIGEgZm9ybSBldGNcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVwIGFuZCBkb3duIHRvIG5hdmlnYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dVcFwiIHx8IGUua2V5ID09PSBcIlVwXCIgfHwgZS5rZXkgPT09IFwiQXJyb3dEb3duXCIgfHwgZS5rZXkgPT09IFwiRG93blwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM5Ll9oYW5kbGVVcERvd25LZXkoZS5rZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM5Ll9oYW5kbGVFbnRlcktleSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzOS5fY2xvc2VEcm9wZG93bigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgvXlthLXpBLVrDgC3Dv9CwLdGP0JAt0K8gXSQvLnRlc3QoZS5rZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ganVtcCB0byBjb3VudHJpZXMgdGhhdCBzdGFydCB3aXRoIHRoZSBxdWVyeSBzdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocXVlcnlUaW1lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQocXVlcnlUaW1lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5ICs9IGUua2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM5Ll9zZWFyY2hGb3JDb3VudHJ5KHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgdGltZXIgaGl0cyAxIHNlY29uZCwgcmVzZXQgdGhlIHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxZTMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVLZXlkb3duT25Ecm9wZG93bik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfaGFuZGxlVXBEb3duS2V5XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVVcERvd25LZXkoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXh0ID0ga2V5ID09PSBcIkFycm93VXBcIiB8fCBrZXkgPT09IFwiVXBcIiA/IHRoaXMuaGlnaGxpZ2h0ZWRJdGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmcgOiB0aGlzLmhpZ2hsaWdodGVkSXRlbS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBza2lwIHRoZSBkaXZpZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dC5jbGFzc0xpc3QuY29udGFpbnMoXCJpdGlfX2RpdmlkZXJcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0ga2V5ID09PSBcIkFycm93VXBcIiB8fCBrZXkgPT09IFwiVXBcIiA/IG5leHQucHJldmlvdXNFbGVtZW50U2libGluZyA6IG5leHQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faGlnaGxpZ2h0TGlzdEl0ZW0obmV4dCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9oYW5kbGVFbnRlcktleVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlRW50ZXJLZXkoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhpZ2hsaWdodGVkSXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0TGlzdEl0ZW0odGhpcy5oaWdobGlnaHRlZEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfc2VhcmNoRm9yQ291bnRyeVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2VhcmNoRm9yQ291bnRyeShxdWVyeSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY291bnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3RhcnRzV2l0aCh0aGlzLmNvdW50cmllc1tpXS5uYW1lLCBxdWVyeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdEl0ZW0gPSB0aGlzLmNvdW50cnlMaXN0LnF1ZXJ5U2VsZWN0b3IoXCIjaXRpLVwiLmNvbmNhdCh0aGlzLmlkLCBcIl9faXRlbS1cIikuY29uY2F0KHRoaXMuY291bnRyaWVzW2ldLmlzbzIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgaGlnaGxpZ2h0aW5nIGFuZCBzY3JvbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9oaWdobGlnaHRMaXN0SXRlbShsaXN0SXRlbSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRvKGxpc3RJdGVtLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX3N0YXJ0c1dpdGhcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3N0YXJ0c1dpdGgoYSwgYikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5zdWJzdHIoMCwgYi5sZW5ndGgpLnRvTG93ZXJDYXNlKCkgPT09IGI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfdXBkYXRlVmFsRnJvbU51bWJlclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlVmFsRnJvbU51bWJlcihvcmlnaW5hbE51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbnVtYmVyID0gb3JpZ2luYWxOdW1iZXI7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZm9ybWF0T25EaXNwbGF5ICYmIHdpbmRvdy5pbnRsVGVsSW5wdXRVdGlscyAmJiB0aGlzLnNlbGVjdGVkQ291bnRyeURhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1c2VOYXRpb25hbCA9IHRoaXMub3B0aW9ucy5uYXRpb25hbE1vZGUgfHwgbnVtYmVyLmNoYXJBdCgwKSAhPT0gXCIrXCIgJiYgIXRoaXMub3B0aW9ucy5zZXBhcmF0ZURpYWxDb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9pbnRsVGVsSW5wdXRVdGlscyRudSA9IGludGxUZWxJbnB1dFV0aWxzLm51bWJlckZvcm1hdCwgTkFUSU9OQUwgPSBfaW50bFRlbElucHV0VXRpbHMkbnUuTkFUSU9OQUwsIElOVEVSTkFUSU9OQUwgPSBfaW50bFRlbElucHV0VXRpbHMkbnUuSU5URVJOQVRJT05BTDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmb3JtYXQgPSB1c2VOYXRpb25hbCA/IE5BVElPTkFMIDogSU5URVJOQVRJT05BTDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlciA9IGludGxUZWxJbnB1dFV0aWxzLmZvcm1hdE51bWJlcihudW1iZXIsIHRoaXMuc2VsZWN0ZWRDb3VudHJ5RGF0YS5pc28yLCBmb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG51bWJlciA9IHRoaXMuX2JlZm9yZVNldE51bWJlcihudW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbElucHV0LnZhbHVlID0gbnVtYmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX3VwZGF0ZUZsYWdGcm9tTnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGVGbGFnRnJvbU51bWJlcihvcmlnaW5hbE51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB3ZSBhbHJlYWR5IGhhdmUgVVMvQ2FuYWRhIHNlbGVjdGVkLCBtYWtlIHN1cmUgdGhlIG51bWJlciBzdGFydHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2l0aCBhICsxIHNvIF9nZXREaWFsQ29kZSB3aWxsIGJlIGFibGUgdG8gZXh0cmFjdCB0aGUgYXJlYSBjb2RlXG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZTogaWYgd2UgZG9udCB5ZXQgaGF2ZSBzZWxlY3RlZENvdW50cnlEYXRhLCBidXQgd2UncmUgaGVyZSAodHJ5aW5nIHRvIHVwZGF0ZSB0aGUgZmxhZ1xuICAgICAgICAgICAgICAgICAgICAvLyBmcm9tIHRoZSBudW1iZXIpLCB0aGF0IG1lYW5zIHdlJ3JlIGluaXRpYWxpc2luZyB0aGUgcGx1Z2luIHdpdGggYSBudW1iZXIgdGhhdCBhbHJlYWR5IGhhcyBhXG4gICAgICAgICAgICAgICAgICAgIC8vIGRpYWwgY29kZSwgc28gZmluZSB0byBpZ25vcmUgdGhpcyBiaXRcbiAgICAgICAgICAgICAgICAgICAgdmFyIG51bWJlciA9IG9yaWdpbmFsTnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWREaWFsQ29kZSA9IHRoaXMuc2VsZWN0ZWRDb3VudHJ5RGF0YS5kaWFsQ29kZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzTmFucCA9IHNlbGVjdGVkRGlhbENvZGUgPT09IFwiMVwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAobnVtYmVyICYmIGlzTmFucCAmJiBudW1iZXIuY2hhckF0KDApICE9PSBcIitcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bWJlci5jaGFyQXQoMCkgIT09IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyID0gXCIxXCIuY29uY2F0KG51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXIgPSBcIitcIi5jb25jYXQobnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBpZiBzZXBhcmF0ZURpYWxDb2RlIGVuYWJsZWQsIHRoZW4gY29uc2lkZXIgdGhlIHNlbGVjdGVkIGRpYWwgY29kZSB0byBiZSBwYXJ0IG9mIHRoZSBudW1iZXJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zZXBhcmF0ZURpYWxDb2RlICYmIHNlbGVjdGVkRGlhbENvZGUgJiYgbnVtYmVyLmNoYXJBdCgwKSAhPT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlciA9IFwiK1wiLmNvbmNhdChzZWxlY3RlZERpYWxDb2RlKS5jb25jYXQobnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB0cnkgYW5kIGV4dHJhY3QgdmFsaWQgZGlhbCBjb2RlIGZyb20gaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpYWxDb2RlID0gdGhpcy5fZ2V0RGlhbENvZGUobnVtYmVyLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG51bWVyaWMgPSB0aGlzLl9nZXROdW1lcmljKG51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb3VudHJ5Q29kZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkaWFsQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvdW50cnlDb2RlcyA9IHRoaXMuY291bnRyeUNvZGVzW3RoaXMuX2dldE51bWVyaWMoZGlhbENvZGUpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSByaWdodCBjb3VudHJ5IGlzIGFscmVhZHkgc2VsZWN0ZWQuIHRoaXMgc2hvdWxkIGJlIGZhbHNlIGlmIHRoZSBudW1iZXIgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvbmdlciB0aGFuIHRoZSBtYXRjaGVkIGRpYWwgY29kZSBiZWNhdXNlIGluIHRoaXMgY2FzZSB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IGlmXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGVyZSBhcmUgbXVsdGlwbGUgY291bnRyeSBtYXRjaGVzLCB0aGF0IHRoZSBmaXJzdCBvbmUgaXMgc2VsZWN0ZWQgKG5vdGU6IHdlIGNvdWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBqdXN0IGNoZWNrIHRoYXQgaGVyZSwgYnV0IGl0IHJlcXVpcmVzIHRoZSBzYW1lIGxvb3AgdGhhdCB3ZSBhbHJlYWR5IGhhdmUgbGF0ZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWxyZWFkeVNlbGVjdGVkID0gY291bnRyeUNvZGVzLmluZGV4T2YodGhpcy5zZWxlY3RlZENvdW50cnlEYXRhLmlzbzIpICE9PSAtMSAmJiBudW1lcmljLmxlbmd0aCA8PSBkaWFsQ29kZS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzUmVnaW9ubGVzc05hbnBOdW1iZXIgPSBzZWxlY3RlZERpYWxDb2RlID09PSBcIjFcIiAmJiB0aGlzLl9pc1JlZ2lvbmxlc3NOYW5wKG51bWVyaWMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25seSB1cGRhdGUgdGhlIGZsYWcgaWY6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBKSBOT1QgKHdlIGN1cnJlbnRseSBoYXZlIGEgTkFOUCBmbGFnIHNlbGVjdGVkLCBhbmQgdGhlIG51bWJlciBpcyBhIHJlZ2lvbmxlc3NOYW5wKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQU5EXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBCKSB0aGUgcmlnaHQgY291bnRyeSBpcyBub3QgYWxyZWFkeSBzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1JlZ2lvbmxlc3NOYW5wTnVtYmVyICYmICFhbHJlYWR5U2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB1c2luZyBvbmx5Q291bnRyaWVzIG9wdGlvbiwgY291bnRyeUNvZGVzWzBdIG1heSBiZSBlbXB0eSwgc28gd2UgbXVzdCBmaW5kIHRoZSBmaXJzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vbi1lbXB0eSBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY291bnRyeUNvZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3VudHJ5Q29kZXNbal0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50cnlDb2RlID0gY291bnRyeUNvZGVzW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobnVtYmVyLmNoYXJBdCgwKSA9PT0gXCIrXCIgJiYgbnVtZXJpYy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGludmFsaWQgZGlhbCBjb2RlLCBzbyBlbXB0eVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm90ZTogdXNlIGdldE51bWVyaWMgaGVyZSBiZWNhdXNlIHRoZSBudW1iZXIgaGFzIG5vdCBiZWVuIGZvcm1hdHRlZCB5ZXQsIHNvIGNvdWxkIGNvbnRhaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhZCBjaGFyc1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeUNvZGUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFudW1iZXIgfHwgbnVtYmVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW1wdHksIG9yIGp1c3QgYSBwbHVzLCBzbyBkZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5Q29kZSA9IHRoaXMuZGVmYXVsdENvdW50cnk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50cnlDb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2V0RmxhZyhjb3VudHJ5Q29kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX2lzUmVnaW9ubGVzc05hbnBcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2lzUmVnaW9ubGVzc05hbnAobnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBudW1lcmljID0gdGhpcy5fZ2V0TnVtZXJpYyhudW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobnVtZXJpYy5jaGFyQXQoMCkgPT09IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJlYUNvZGUgPSBudW1lcmljLnN1YnN0cigxLCAzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWdpb25sZXNzTmFucE51bWJlcnMuaW5kZXhPZihhcmVhQ29kZSkgIT09IC0xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9oaWdobGlnaHRMaXN0SXRlbVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGlnaGxpZ2h0TGlzdEl0ZW0obGlzdEl0ZW0sIHNob3VsZEZvY3VzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2SXRlbSA9IHRoaXMuaGlnaGxpZ2h0ZWRJdGVtO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJldkl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJpdGlfX2hpZ2hsaWdodFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZ2hsaWdodGVkSXRlbSA9IGxpc3RJdGVtO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZ2hsaWdodGVkSXRlbS5jbGFzc0xpc3QuYWRkKFwiaXRpX19oaWdobGlnaHRcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGbGFnLnNldEF0dHJpYnV0ZShcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiLCBsaXN0SXRlbS5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRGb2N1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWdobGlnaHRlZEl0ZW0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX2dldENvdW50cnlEYXRhXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXRDb3VudHJ5RGF0YShjb3VudHJ5Q29kZSwgaWdub3JlT25seUNvdW50cmllc09wdGlvbiwgYWxsb3dGYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb3VudHJ5TGlzdCA9IGlnbm9yZU9ubHlDb3VudHJpZXNPcHRpb24gPyBhbGxDb3VudHJpZXMgOiB0aGlzLmNvdW50cmllcztcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudHJ5TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50cnlMaXN0W2ldLmlzbzIgPT09IGNvdW50cnlDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50cnlMaXN0W2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbGxvd0ZhaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGNvdW50cnkgZGF0YSBmb3IgJ1wiLmNvbmNhdChjb3VudHJ5Q29kZSwgXCInXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9zZXRGbGFnXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXRGbGFnKGNvdW50cnlDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfdGhpcyRvcHRpb25zMyA9IHRoaXMub3B0aW9ucywgYWxsb3dEcm9wZG93biA9IF90aGlzJG9wdGlvbnMzLmFsbG93RHJvcGRvd24sIHNlcGFyYXRlRGlhbENvZGUgPSBfdGhpcyRvcHRpb25zMy5zZXBhcmF0ZURpYWxDb2RlLCBzaG93RmxhZ3MgPSBfdGhpcyRvcHRpb25zMy5zaG93RmxhZ3M7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2Q291bnRyeSA9IHRoaXMuc2VsZWN0ZWRDb3VudHJ5RGF0YS5pc28yID8gdGhpcy5zZWxlY3RlZENvdW50cnlEYXRhIDoge307XG4gICAgICAgICAgICAgICAgICAgIC8vIGRvIHRoaXMgZmlyc3QgYXMgaXQgd2lsbCB0aHJvdyBhbiBlcnJvciBhbmQgc3RvcCBpZiBjb3VudHJ5Q29kZSBpcyBpbnZhbGlkXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDb3VudHJ5RGF0YSA9IGNvdW50cnlDb2RlID8gdGhpcy5fZ2V0Q291bnRyeURhdGEoY291bnRyeUNvZGUsIGZhbHNlLCBmYWxzZSkgOiB7fTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBkZWZhdWx0Q291bnRyeSAtIHdlIG9ubHkgbmVlZCB0aGUgaXNvMiBmcm9tIG5vdyBvbiwgc28ganVzdCBzdG9yZSB0aGF0XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQ291bnRyeURhdGEuaXNvMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0Q291bnRyeSA9IHRoaXMuc2VsZWN0ZWRDb3VudHJ5RGF0YS5pc28yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG93RmxhZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGbGFnSW5uZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpdGlfX2ZsYWcgaXRpX19cIi5jb25jYXQoY291bnRyeUNvZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXRTZWxlY3RlZENvdW50cnlGbGFnVGl0bGVBdHRyaWJ1dGUoY291bnRyeUNvZGUsIHNlcGFyYXRlRGlhbENvZGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VwYXJhdGVEaWFsQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRpYWxDb2RlID0gdGhpcy5zZWxlY3RlZENvdW50cnlEYXRhLmRpYWxDb2RlID8gXCIrXCIuY29uY2F0KHRoaXMuc2VsZWN0ZWRDb3VudHJ5RGF0YS5kaWFsQ29kZSkgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERpYWxDb2RlLmlubmVySFRNTCA9IGRpYWxDb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb2Zmc2V0V2lkdGggaXMgemVybyBpZiBpbnB1dCBpcyBpbiBhIGhpZGRlbiBjb250YWluZXIgZHVyaW5nIGluaXRpYWxpc2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWRGbGFnV2lkdGggPSB0aGlzLnNlbGVjdGVkRmxhZy5vZmZzZXRXaWR0aCB8fCB0aGlzLl9nZXRIaWRkZW5TZWxlY3RlZEZsYWdXaWR0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIDZweCBvZiBwYWRkaW5nIGFmdGVyIHRoZSBncmV5IHNlbGVjdGVkLWRpYWwtY29kZSBib3gsIGFzIHRoaXMgaXMgd2hhdCB3ZSB1c2UgaW4gdGhlIGNzc1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNSVEwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbElucHV0LnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiXCIuY29uY2F0KHNlbGVjdGVkRmxhZ1dpZHRoICsgNiwgXCJweFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZWxJbnB1dC5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiXCIuY29uY2F0KHNlbGVjdGVkRmxhZ1dpZHRoICsgNiwgXCJweFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBhbmQgdGhlIGlucHV0J3MgcGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlUGxhY2Vob2xkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBhY3RpdmUgbGlzdCBpdGVtXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbGxvd0Ryb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJldkl0ZW0gPSB0aGlzLmFjdGl2ZUl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJldkl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaXRpX19hY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldkl0ZW0uc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCBcImZhbHNlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50cnlDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlcmUgaXMgYSBwcmVmZXJyZWQgaXRlbSBmaXJzdCwgZWxzZSBmYWxsIGJhY2sgdG8gc3RhbmRhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dEl0ZW0gPSB0aGlzLmNvdW50cnlMaXN0LnF1ZXJ5U2VsZWN0b3IoXCIjaXRpLVwiLmNvbmNhdCh0aGlzLmlkLCBcIl9faXRlbS1cIikuY29uY2F0KGNvdW50cnlDb2RlLCBcIi1wcmVmZXJyZWRcIikpIHx8IHRoaXMuY291bnRyeUxpc3QucXVlcnlTZWxlY3RvcihcIiNpdGktXCIuY29uY2F0KHRoaXMuaWQsIFwiX19pdGVtLVwiKS5jb25jYXQoY291bnRyeUNvZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0SXRlbS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0SXRlbS5jbGFzc0xpc3QuYWRkKFwiaXRpX19hY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gbmV4dEl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIGlmIHRoZSBmbGFnIGhhcyBjaGFuZ2VkIG9yIG5vdFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldkNvdW50cnkuaXNvMiAhPT0gY291bnRyeUNvZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfc2V0U2VsZWN0ZWRDb3VudHJ5RmxhZ1RpdGxlQXR0cmlidXRlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXRTZWxlY3RlZENvdW50cnlGbGFnVGl0bGVBdHRyaWJ1dGUoY291bnRyeUNvZGUsIHNlcGFyYXRlRGlhbENvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkRmxhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciB0aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50cnlDb2RlICYmICFzZXBhcmF0ZURpYWxDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IFwiXCIuY29uY2F0KHRoaXMuc2VsZWN0ZWRDb3VudHJ5RGF0YS5uYW1lLCBcIjogK1wiKS5jb25jYXQodGhpcy5zZWxlY3RlZENvdW50cnlEYXRhLmRpYWxDb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudHJ5Q29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRm9yIHNjcmVlbiByZWFkZXIgb3V0cHV0LCB3ZSBkb24ndCB3YW50IHRvIGluY2x1ZGUgdGhlIGRpYWwgY29kZSBpbiB0aGUgcmVhZGVyIG91dHB1dCB0d2ljZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc28ganVzdCB1c2UgdGhlIHNlbGVjdGVkIGNvdW50cnkgbmFtZSBoZXJlOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSB0aGlzLnNlbGVjdGVkQ291bnRyeURhdGEubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlID0gXCJVbmtub3duXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZsYWcuc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgdGl0bGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX2dldEhpZGRlblNlbGVjdGVkRmxhZ1dpZHRoXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXRIaWRkZW5TZWxlY3RlZEZsYWdXaWR0aCgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gZ2V0IHRoZSByaWdodCBzdHlsaW5nIHRvIGFwcGx5LCBhbGwgd2UgbmVlZCBpcyBhIHNoYWxsb3cgY2xvbmUgb2YgdGhlIGNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgICAgLy8gYW5kIHRoZW4gdG8gaW5qZWN0IGEgZGVlcCBjbG9uZSBvZiB0aGUgc2VsZWN0ZWRGbGFnIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lckNsb25lID0gdGhpcy50ZWxJbnB1dC5wYXJlbnROb2RlLmNsb25lTm9kZSgpO1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJDbG9uZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXJDbG9uZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmbGFnc0NvbnRhaW5lckNsb25lID0gdGhpcy5mbGFnc0NvbnRhaW5lci5jbG9uZU5vZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQ2xvbmUuYXBwZW5kQ2hpbGQoZmxhZ3NDb250YWluZXJDbG9uZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZEZsYWdDbG9uZSA9IHRoaXMuc2VsZWN0ZWRGbGFnLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgZmxhZ3NDb250YWluZXJDbG9uZS5hcHBlbmRDaGlsZChzZWxlY3RlZEZsYWdDbG9uZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IHNlbGVjdGVkRmxhZ0Nsb25lLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJDbG9uZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvbnRhaW5lckNsb25lKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX3VwZGF0ZVBsYWNlaG9sZGVyXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGVQbGFjZWhvbGRlcigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNob3VsZFNldFBsYWNlaG9sZGVyID0gdGhpcy5vcHRpb25zLmF1dG9QbGFjZWhvbGRlciA9PT0gXCJhZ2dyZXNzaXZlXCIgfHwgIXRoaXMuaGFkSW5pdGlhbFBsYWNlaG9sZGVyICYmIHRoaXMub3B0aW9ucy5hdXRvUGxhY2Vob2xkZXIgPT09IFwicG9saXRlXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuaW50bFRlbElucHV0VXRpbHMgJiYgc2hvdWxkU2V0UGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBudW1iZXJUeXBlID0gaW50bFRlbElucHV0VXRpbHMubnVtYmVyVHlwZVt0aGlzLm9wdGlvbnMucGxhY2Vob2xkZXJOdW1iZXJUeXBlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwbGFjZWhvbGRlciA9IHRoaXMuc2VsZWN0ZWRDb3VudHJ5RGF0YS5pc28yID8gaW50bFRlbElucHV0VXRpbHMuZ2V0RXhhbXBsZU51bWJlcih0aGlzLnNlbGVjdGVkQ291bnRyeURhdGEuaXNvMiwgdGhpcy5vcHRpb25zLm5hdGlvbmFsTW9kZSwgbnVtYmVyVHlwZSkgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSB0aGlzLl9iZWZvcmVTZXROdW1iZXIocGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuY3VzdG9tUGxhY2Vob2xkZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gdGhpcy5vcHRpb25zLmN1c3RvbVBsYWNlaG9sZGVyKHBsYWNlaG9sZGVyLCB0aGlzLnNlbGVjdGVkQ291bnRyeURhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBwbGFjZWhvbGRlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9zZWxlY3RMaXN0SXRlbVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2VsZWN0TGlzdEl0ZW0obGlzdEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIHNlbGVjdGVkIGZsYWcgYW5kIGFjdGl2ZSBsaXN0IGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGZsYWdDaGFuZ2VkID0gdGhpcy5fc2V0RmxhZyhsaXN0SXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvdW50cnktY29kZVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Nsb3NlRHJvcGRvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRGlhbENvZGUobGlzdEl0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1kaWFsLWNvZGVcIikpO1xuICAgICAgICAgICAgICAgICAgICAvLyBmb2N1cyB0aGUgaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZWxJbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAvLyBwdXQgY3Vyc29yIGF0IGVuZCAtIHRoaXMgZml4IGlzIHJlcXVpcmVkIGZvciBGRiBhbmQgSUUxMSAod2l0aCBhdXRvIGluc2VydGluZyBkaWFsIGNvZGUpLFxuICAgICAgICAgICAgICAgICAgICAvLyB3aG8gdHJ5IHRvIHB1dCB0aGUgY3Vyc29yIGF0IHRoZSBiZWdpbm5pbmcgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlbiA9IHRoaXMudGVsSW5wdXQudmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbElucHV0LnNldFNlbGVjdGlvblJhbmdlKGxlbiwgbGVuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZsYWdDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90cmlnZ2VyQ291bnRyeUNoYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfY2xvc2VEcm9wZG93blwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfY2xvc2VEcm9wZG93bigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudHJ5TGlzdC5jbGFzc0xpc3QuYWRkKFwiaXRpX19oaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRmxhZy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwiZmFsc2VcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGbGFnLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBhcnJvd1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duQXJyb3cuY2xhc3NMaXN0LnJlbW92ZShcIml0aV9fYXJyb3ctLXVwXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyB1bmJpbmQga2V5IGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVLZXlkb3duT25Ecm9wZG93bik7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5faGFuZGxlQ2xpY2tPZmZUb0Nsb3NlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudHJ5TGlzdC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIHRoaXMuX2hhbmRsZU1vdXNlb3ZlckNvdW50cnlMaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudHJ5TGlzdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5faGFuZGxlQ2xpY2tDb3VudHJ5TGlzdCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBtZW51IGZyb20gY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZHJvcGRvd25Db250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc01vYmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuX2hhbmRsZVdpbmRvd1Njcm9sbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kcm9wZG93bi5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93bi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZHJvcGRvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RyaWdnZXIoXCJjbG9zZTpjb3VudHJ5ZHJvcGRvd25cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfc2Nyb2xsVG9cIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Njcm9sbFRvKGVsZW1lbnQsIG1pZGRsZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyID0gdGhpcy5jb3VudHJ5TGlzdDtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2luZG93VG9wIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE0Mzg0MDkxLzIxNzg2NlxuICAgICAgICAgICAgICAgICAgICB2YXIgd2luZG93VG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250YWluZXJIZWlnaHQgPSBjb250YWluZXIub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyVG9wID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvd1RvcDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lckJvdHRvbSA9IGNvbnRhaW5lclRvcCArIGNvbnRhaW5lckhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRIZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRUb3AgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvd1RvcDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRCb3R0b20gPSBlbGVtZW50VG9wICsgZWxlbWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1Njcm9sbFRvcCA9IGVsZW1lbnRUb3AgLSBjb250YWluZXJUb3AgKyBjb250YWluZXIuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWlkZGxlT2Zmc2V0ID0gY29udGFpbmVySGVpZ2h0IC8gMiAtIGVsZW1lbnRIZWlnaHQgLyAyO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudFRvcCA8IGNvbnRhaW5lclRvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2Nyb2xsIHVwXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWlkZGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3U2Nyb2xsVG9wIC09IG1pZGRsZU9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSBuZXdTY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudEJvdHRvbSA+IGNvbnRhaW5lckJvdHRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2Nyb2xsIGRvd25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtaWRkbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdTY3JvbGxUb3AgKz0gbWlkZGxlT2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhlaWdodERpZmZlcmVuY2UgPSBjb250YWluZXJIZWlnaHQgLSBlbGVtZW50SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IG5ld1Njcm9sbFRvcCAtIGhlaWdodERpZmZlcmVuY2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl91cGRhdGVEaWFsQ29kZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlRGlhbENvZGUobmV3RGlhbENvZGVCYXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbnB1dFZhbCA9IHRoaXMudGVsSW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNhdmUgaGF2aW5nIHRvIHBhc3MgdGhpcyBldmVyeSB0aW1lXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdEaWFsQ29kZSA9IFwiK1wiLmNvbmNhdChuZXdEaWFsQ29kZUJhcmUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3TnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXRWYWwuY2hhckF0KDApID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlcmUncyBhIHBsdXMgc28gd2UncmUgZGVhbGluZyB3aXRoIGEgcmVwbGFjZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcmV2RGlhbENvZGUgPSB0aGlzLl9nZXREaWFsQ29kZShpbnB1dFZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJldkRpYWxDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3VycmVudCBudW1iZXIgY29udGFpbnMgYSB2YWxpZCBkaWFsIGNvZGUsIHNvIHJlcGxhY2UgaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdOdW1iZXIgPSBpbnB1dFZhbC5yZXBsYWNlKHByZXZEaWFsQ29kZSwgbmV3RGlhbENvZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjdXJyZW50IG51bWJlciBjb250YWlucyBhbiBpbnZhbGlkIGRpYWwgY29kZSwgc28gZGl0Y2ggaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAobm8gd2F5IHRvIGRldGVybWluZSB3aGVyZSB0aGUgaW52YWxpZCBkaWFsIGNvZGUgZW5kcyBhbmQgdGhlIHJlc3Qgb2YgdGhlIG51bWJlciBiZWdpbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3TnVtYmVyID0gbmV3RGlhbENvZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbElucHV0LnZhbHVlID0gbmV3TnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5hdXRvSW5zZXJ0RGlhbENvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dFZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZXJlIGlzIGFuIGV4aXN0aW5nIHZhbHVlIHdpdGggbm8gZGlhbCBjb2RlOiBwcmVmaXggdGhlIG5ldyBkaWFsIGNvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdOdW1iZXIgPSBuZXdEaWFsQ29kZSArIGlucHV0VmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdOdW1iZXIgPSBuZXdEaWFsQ29kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVsSW5wdXQudmFsdWUgPSBuZXdOdW1iZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9nZXREaWFsQ29kZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0RGlhbENvZGUobnVtYmVyLCBpbmNsdWRlQXJlYUNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpYWxDb2RlID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gb25seSBpbnRlcmVzdGVkIGluIGludGVybmF0aW9uYWwgbnVtYmVycyAoc3RhcnRpbmcgd2l0aCBhIHBsdXMpXG4gICAgICAgICAgICAgICAgICAgIGlmIChudW1iZXIuY2hhckF0KDApID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG51bWVyaWNDaGFycyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpdGVyYXRlIG92ZXIgY2hhcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBudW1iZXIuY2hhckF0KGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGNoYXIgaXMgbnVtYmVyIChodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvODkzNTY0OS8yMTc4NjYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjLCAxMCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWVyaWNDaGFycyArPSBjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBjdXJyZW50IG51bWVyaWNDaGFycyBtYWtlIGEgdmFsaWQgZGlhbCBjb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlQXJlYUNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvdW50cnlDb2Rlc1tudW1lcmljQ2hhcnNdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgdGhlIGFjdHVhbCByYXcgc3RyaW5nICh1c2VmdWwgZm9yIG1hdGNoaW5nIGxhdGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxDb2RlID0gbnVtYmVyLnN1YnN0cigwLCBpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kaWFsQ29kZXNbbnVtZXJpY0NoYXJzXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxDb2RlID0gbnVtYmVyLnN1YnN0cigwLCBpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgd2UncmUganVzdCBsb29raW5nIGZvciBhIGRpYWwgY29kZSwgd2UgY2FuIGJyZWFrIGFzIHNvb24gYXMgd2UgZmluZCBvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdG9wIHNlYXJjaGluZyBhcyBzb29uIGFzIHdlIGNhbiAtIGluIHRoaXMgY2FzZSB3aGVuIHdlIGhpdCBtYXggbGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudW1lcmljQ2hhcnMubGVuZ3RoID09PSB0aGlzLmNvdW50cnlDb2RlTWF4TGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlhbENvZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfZ2V0RnVsbE51bWJlclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0RnVsbE51bWJlcigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IHRoaXMudGVsSW5wdXQudmFsdWUudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGlhbENvZGUgPSB0aGlzLnNlbGVjdGVkQ291bnRyeURhdGEuZGlhbENvZGU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmVmaXg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBudW1lcmljVmFsID0gdGhpcy5fZ2V0TnVtZXJpYyh2YWwpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNlcGFyYXRlRGlhbENvZGUgJiYgdmFsLmNoYXJBdCgwKSAhPT0gXCIrXCIgJiYgZGlhbENvZGUgJiYgbnVtZXJpY1ZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiB1c2luZyBzZXBhcmF0ZURpYWxDb2RlLCBpdCBpcyB2aXNpYmxlIHNvIGlzIGVmZmVjdGl2ZWx5IHBhcnQgb2YgdGhlIHR5cGVkIG51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4ID0gXCIrXCIuY29uY2F0KGRpYWxDb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZWZpeCArIHZhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9iZWZvcmVTZXROdW1iZXJcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2JlZm9yZVNldE51bWJlcihvcmlnaW5hbE51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbnVtYmVyID0gb3JpZ2luYWxOdW1iZXI7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2VwYXJhdGVEaWFsQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRpYWxDb2RlID0gdGhpcy5fZ2V0RGlhbENvZGUobnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgdmFsaWQgZGlhbCBjb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlhbENvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbiBjYXNlIF9nZXREaWFsQ29kZSByZXR1cm5lZCBhbiBhcmVhIGNvZGUgYXMgd2VsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxDb2RlID0gXCIrXCIuY29uY2F0KHRoaXMuc2VsZWN0ZWRDb3VudHJ5RGF0YS5kaWFsQ29kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYSBsb3Qgb2YgbnVtYmVycyB3aWxsIGhhdmUgYSBzcGFjZSBzZXBhcmF0aW5nIHRoZSBkaWFsIGNvZGUgYW5kIHRoZSBtYWluIG51bWJlciwgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc29tZSBOQU5QIG51bWJlcnMgd2lsbCBoYXZlIGEgaHlwaGVuIGUuZy4gKzEgNjg0LTczMy0xMjM0IC0gaW4gYm90aCBjYXNlcyB3ZSB3YW50IHRvIGdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJpZCBvZiBpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5PVEU6IGRvbid0IGp1c3QgdHJpbSBhbGwgbm9uLW51bWVyaWNzIGFzIG1heSB3YW50IHRvIHByZXNlcnZlIGFuIG9wZW4gcGFyZW50aGVzaXMgZXRjXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0ID0gbnVtYmVyW2RpYWxDb2RlLmxlbmd0aF0gPT09IFwiIFwiIHx8IG51bWJlcltkaWFsQ29kZS5sZW5ndGhdID09PSBcIi1cIiA/IGRpYWxDb2RlLmxlbmd0aCArIDEgOiBkaWFsQ29kZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyID0gbnVtYmVyLnN1YnN0cihzdGFydCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhcChudW1iZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX3RyaWdnZXJDb3VudHJ5Q2hhbmdlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF90cmlnZ2VyQ291bnRyeUNoYW5nZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHJpZ2dlcihcImNvdW50cnljaGFuZ2VcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJoYW5kbGVBdXRvQ291bnRyeVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVBdXRvQ291bnRyeSgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pbml0aWFsQ291bnRyeSA9PT0gXCJhdXRvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIG11c3Qgc2V0IHRoaXMgZXZlbiBpZiB0aGVyZSBpcyBhbiBpbml0aWFsIHZhbCBpbiB0aGUgaW5wdXQ6IGluIGNhc2UgdGhlIGluaXRpYWwgdmFsIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnZhbGlkIGFuZCB0aGV5IGRlbGV0ZSBpdCAtIHRoZXkgc2hvdWxkIHNlZSB0aGVpciBhdXRvIGNvdW50cnlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdENvdW50cnkgPSB3aW5kb3cuaW50bFRlbElucHV0R2xvYmFscy5hdXRvQ291bnRyeTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlJ3Mgbm8gaW5pdGlhbCB2YWx1ZSBpbiB0aGUgaW5wdXQsIHRoZW4gdXBkYXRlIHRoZSBmbGFnXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMudGVsSW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENvdW50cnkodGhpcy5kZWZhdWx0Q291bnRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVBdXRvQ291bnRyeVByb21pc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiaGFuZGxlVXRpbHNcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVXRpbHMoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSByZXF1ZXN0IHdhcyBzdWNjZXNzZnVsXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuaW50bFRlbElucHV0VXRpbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlJ3MgYW4gaW5pdGlhbCB2YWx1ZSBpbiB0aGUgaW5wdXQsIHRoZW4gZm9ybWF0IGl0XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50ZWxJbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVZhbEZyb21OdW1iZXIodGhpcy50ZWxJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVQbGFjZWhvbGRlcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZVV0aWxzU2NyaXB0UHJvbWlzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZGVzdHJveVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm9ybSA9IHRoaXMudGVsSW5wdXQuZm9ybTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hbGxvd0Ryb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlIGRyb3Bkb3duIGlzIGNsb3NlZCAoYW5kIHVuYmluZCBsaXN0ZW5lcnMpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jbG9zZURyb3Bkb3duKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRmxhZy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5faGFuZGxlQ2xpY2tTZWxlY3RlZEZsYWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbGFnc0NvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVGbGFnc0NvbnRhaW5lcktleWRvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGFiZWwgY2xpY2sgaGFja1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5fZ2V0Q2xvc2VzdExhYmVsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5faGFuZGxlTGFiZWxDbGljayk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gdW5iaW5kIGhpZGRlbklucHV0IGxpc3RlbmVyc1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oaWRkZW5JbnB1dCAmJiBmb3JtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5faGFuZGxlSGlkZGVuSW5wdXRTdWJtaXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHVuYmluZCBhdXRvSW5zZXJ0RGlhbENvZGUgbGlzdGVuZXJzXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXV0b0luc2VydERpYWxDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLl9oYW5kbGVTdWJtaXRPckJsdXJFdmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbElucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHRoaXMuX2hhbmRsZVN1Ym1pdE9yQmx1ckV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB1bmJpbmQga2V5IGV2ZW50cywgYW5kIGN1dC9wYXN0ZSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZWxJbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5faGFuZGxlS2V5dXBFdmVudCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVsSW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImN1dFwiLCB0aGlzLl9oYW5kbGVDbGlwYm9hcmRFdmVudCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVsSW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBhc3RlXCIsIHRoaXMuX2hhbmRsZUNsaXBib2FyZEV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGF0dHJpYnV0ZSBvZiBpZCBpbnN0YW5jZTogZGF0YS1pbnRsLXRlbC1pbnB1dC1pZFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbElucHV0LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtaW50bC10ZWwtaW5wdXQtaWRcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBtYXJrdXAgKGJ1dCBsZWF2ZSB0aGUgb3JpZ2luYWwgaW5wdXQpXG4gICAgICAgICAgICAgICAgICAgIHZhciB3cmFwcGVyID0gdGhpcy50ZWxJbnB1dC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMudGVsSW5wdXQsIHdyYXBwZXIpO1xuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQod3JhcHBlcik7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB3aW5kb3cuaW50bFRlbElucHV0R2xvYmFscy5pbnN0YW5jZXNbdGhpcy5pZF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJnZXRFeHRlbnNpb25cIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RXh0ZW5zaW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmludGxUZWxJbnB1dFV0aWxzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW50bFRlbElucHV0VXRpbHMuZ2V0RXh0ZW5zaW9uKHRoaXMuX2dldEZ1bGxOdW1iZXIoKSwgdGhpcy5zZWxlY3RlZENvdW50cnlEYXRhLmlzbzIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZ2V0TnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldE51bWJlcihmb3JtYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5pbnRsVGVsSW5wdXRVdGlscykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzbzIgPSB0aGlzLnNlbGVjdGVkQ291bnRyeURhdGEuaXNvMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnRsVGVsSW5wdXRVdGlscy5mb3JtYXROdW1iZXIodGhpcy5fZ2V0RnVsbE51bWJlcigpLCBpc28yLCBmb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZ2V0TnVtYmVyVHlwZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXROdW1iZXJUeXBlKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmludGxUZWxJbnB1dFV0aWxzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW50bFRlbElucHV0VXRpbHMuZ2V0TnVtYmVyVHlwZSh0aGlzLl9nZXRGdWxsTnVtYmVyKCksIHRoaXMuc2VsZWN0ZWRDb3VudHJ5RGF0YS5pc28yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTk5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZ2V0U2VsZWN0ZWRDb3VudHJ5RGF0YVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTZWxlY3RlZENvdW50cnlEYXRhKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZENvdW50cnlEYXRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZ2V0VmFsaWRhdGlvbkVycm9yXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbGlkYXRpb25FcnJvcigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5pbnRsVGVsSW5wdXRVdGlscykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzbzIgPSB0aGlzLnNlbGVjdGVkQ291bnRyeURhdGEuaXNvMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnRsVGVsSW5wdXRVdGlscy5nZXRWYWxpZGF0aW9uRXJyb3IodGhpcy5fZ2V0RnVsbE51bWJlcigpLCBpc28yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTk5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiaXNWYWxpZE51bWJlclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc1ZhbGlkTnVtYmVyKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gdGhpcy5fZ2V0RnVsbE51bWJlcigpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5pbnRsVGVsSW5wdXRVdGlscyA/IGludGxUZWxJbnB1dFV0aWxzLmlzVmFsaWROdW1iZXIodmFsLCB0aGlzLnNlbGVjdGVkQ291bnRyeURhdGEuaXNvMikgOiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiaXNQb3NzaWJsZU51bWJlclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc1Bvc3NpYmxlTnVtYmVyKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gdGhpcy5fZ2V0RnVsbE51bWJlcigpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5pbnRsVGVsSW5wdXRVdGlscyA/IGludGxUZWxJbnB1dFV0aWxzLmlzUG9zc2libGVOdW1iZXIodmFsLCB0aGlzLnNlbGVjdGVkQ291bnRyeURhdGEuaXNvMikgOiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwic2V0Q291bnRyeVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRDb3VudHJ5KG9yaWdpbmFsQ291bnRyeUNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvdW50cnlDb2RlID0gb3JpZ2luYWxDb3VudHJ5Q29kZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBhbHJlYWR5IHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQ291bnRyeURhdGEuaXNvMiAhPT0gY291bnRyeUNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NldEZsYWcoY291bnRyeUNvZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRGlhbENvZGUodGhpcy5zZWxlY3RlZENvdW50cnlEYXRhLmRpYWxDb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RyaWdnZXJDb3VudHJ5Q2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInNldE51bWJlclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXROdW1iZXIobnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIG11c3QgdXBkYXRlIHRoZSBmbGFnIGZpcnN0LCB3aGljaCB1cGRhdGVzIHRoaXMuc2VsZWN0ZWRDb3VudHJ5RGF0YSwgd2hpY2ggaXMgdXNlZCBmb3JcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9ybWF0dGluZyB0aGUgbnVtYmVyIGJlZm9yZSBkaXNwbGF5aW5nIGl0XG4gICAgICAgICAgICAgICAgICAgIHZhciBmbGFnQ2hhbmdlZCA9IHRoaXMuX3VwZGF0ZUZsYWdGcm9tTnVtYmVyKG51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVZhbEZyb21OdW1iZXIobnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZsYWdDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90cmlnZ2VyQ291bnRyeUNoYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJzZXRQbGFjZWhvbGRlck51bWJlclR5cGVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UGxhY2Vob2xkZXJOdW1iZXJUeXBlKHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnBsYWNlaG9sZGVyTnVtYmVyVHlwZSA9IHR5cGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVBsYWNlaG9sZGVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBdKTtcbiAgICAgICAgICAgIHJldHVybiBJdGk7XG4gICAgICAgIH0oKTtcbiAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqXG4gKiAgU1RBVElDIE1FVEhPRFNcbiAqKioqKioqKioqKioqKioqKioqKi9cbiAgICAgICAgLy8gZ2V0IHRoZSBjb3VudHJ5IGRhdGEgb2JqZWN0XG4gICAgICAgIGludGxUZWxJbnB1dEdsb2JhbHMuZ2V0Q291bnRyeURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBhbGxDb3VudHJpZXM7XG4gICAgICAgIH07XG4gICAgICAgIC8vIGluamVjdCBhIDxzY3JpcHQ+IGVsZW1lbnQgdG8gbG9hZCB1dGlscy5qc1xuICAgICAgICB2YXIgaW5qZWN0U2NyaXB0ID0gZnVuY3Rpb24gaW5qZWN0U2NyaXB0KHBhdGgsIGhhbmRsZVN1Y2Nlc3MsIGhhbmRsZUZhaWx1cmUpIHtcbiAgICAgICAgICAgIC8vIGluamVjdCBhIG5ldyBzY3JpcHQgZWxlbWVudCBpbnRvIHRoZSBwYWdlXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBmb3JFYWNoSW5zdGFuY2UoXCJoYW5kbGVVdGlsc1wiKTtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlU3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZm9yRWFjaEluc3RhbmNlKFwicmVqZWN0VXRpbHNTY3JpcHRQcm9taXNlXCIpO1xuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVGYWlsdXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUZhaWx1cmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2NyaXB0LmNsYXNzTmFtZSA9IFwiaXRpLWxvYWQtdXRpbHNcIjtcbiAgICAgICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgICAgICAgICBzY3JpcHQuc3JjID0gcGF0aDtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gbG9hZCB0aGUgdXRpbHMgc2NyaXB0XG4gICAgICAgIGludGxUZWxJbnB1dEdsb2JhbHMubG9hZFV0aWxzID0gZnVuY3Rpb24ocGF0aCkge1xuICAgICAgICAgICAgLy8gMiBvcHRpb25zOlxuICAgICAgICAgICAgLy8gMSkgbm90IGFscmVhZHkgc3RhcnRlZCBsb2FkaW5nIChzdGFydClcbiAgICAgICAgICAgIC8vIDIpIGFscmVhZHkgc3RhcnRlZCBsb2FkaW5nIChkbyBub3RoaW5nIC0ganVzdCB3YWl0IGZvciB0aGUgb25sb2FkIGNhbGxiYWNrIHRvIGZpcmUsIHdoaWNoIHdpbGxcbiAgICAgICAgICAgIC8vIHRyaWdnZXIgaGFuZGxlVXRpbHMgb24gYWxsIGluc3RhbmNlcywgaW52b2tpbmcgdGhlaXIgcmVzb2x2ZVV0aWxzU2NyaXB0UHJvbWlzZSBmdW5jdGlvbnMpXG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5pbnRsVGVsSW5wdXRVdGlscyAmJiAhd2luZG93LmludGxUZWxJbnB1dEdsb2JhbHMuc3RhcnRlZExvYWRpbmdVdGlsc1NjcmlwdCkge1xuICAgICAgICAgICAgICAgIC8vIG9ubHkgZG8gdGhpcyBvbmNlXG4gICAgICAgICAgICAgICAgd2luZG93LmludGxUZWxJbnB1dEdsb2JhbHMuc3RhcnRlZExvYWRpbmdVdGlsc1NjcmlwdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgaGF2ZSBwcm9taXNlcywgdGhlbiByZXR1cm4gYSBwcm9taXNlXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBQcm9taXNlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbmplY3RTY3JpcHQocGF0aCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluamVjdFNjcmlwdChwYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9O1xuICAgICAgICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgICAgICAgaW50bFRlbElucHV0R2xvYmFscy5kZWZhdWx0cyA9IGRlZmF1bHRzO1xuICAgICAgICAvLyB2ZXJzaW9uXG4gICAgICAgIGludGxUZWxJbnB1dEdsb2JhbHMudmVyc2lvbiA9IFwiMTguMi4xXCI7XG4gICAgICAgIC8vIGNvbnZlbmllbmNlIHdyYXBwZXJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGlucHV0LCBvcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgaXRpID0gbmV3IEl0aShpbnB1dCwgb3B0aW9ucyk7XG4gICAgICAgICAgICBpdGkuX2luaXQoKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImRhdGEtaW50bC10ZWwtaW5wdXQtaWRcIiwgaXRpLmlkKTtcbiAgICAgICAgICAgIHdpbmRvdy5pbnRsVGVsSW5wdXRHbG9iYWxzLmluc3RhbmNlc1tpdGkuaWRdID0gaXRpO1xuICAgICAgICAgICAgcmV0dXJuIGl0aTtcbiAgICAgICAgfTtcbiAgICB9KCk7XG59KTsiLCIvKipcbiAqIEV4cG9zaW5nIGludGwtdGVsLWlucHV0IGFzIGEgY29tcG9uZW50XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vYnVpbGQvanMvaW50bFRlbElucHV0XCIpO1xuIiwidmFyIGdsb2JhbCA9XG4gICh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsVGhpcykgfHxcbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmKSB8fFxuICAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsKVxuXG52YXIgc3VwcG9ydCA9IHtcbiAgc2VhcmNoUGFyYW1zOiAnVVJMU2VhcmNoUGFyYW1zJyBpbiBnbG9iYWwsXG4gIGl0ZXJhYmxlOiAnU3ltYm9sJyBpbiBnbG9iYWwgJiYgJ2l0ZXJhdG9yJyBpbiBTeW1ib2wsXG4gIGJsb2I6XG4gICAgJ0ZpbGVSZWFkZXInIGluIGdsb2JhbCAmJlxuICAgICdCbG9iJyBpbiBnbG9iYWwgJiZcbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBuZXcgQmxvYigpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pKCksXG4gIGZvcm1EYXRhOiAnRm9ybURhdGEnIGluIGdsb2JhbCxcbiAgYXJyYXlCdWZmZXI6ICdBcnJheUJ1ZmZlcicgaW4gZ2xvYmFsXG59XG5cbmZ1bmN0aW9uIGlzRGF0YVZpZXcob2JqKSB7XG4gIHJldHVybiBvYmogJiYgRGF0YVZpZXcucHJvdG90eXBlLmlzUHJvdG90eXBlT2Yob2JqKVxufVxuXG5pZiAoc3VwcG9ydC5hcnJheUJ1ZmZlcikge1xuICB2YXIgdmlld0NsYXNzZXMgPSBbXG4gICAgJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgICdbb2JqZWN0IFVpbnQzMkFycmF5XScsXG4gICAgJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgJ1tvYmplY3QgRmxvYXQ2NEFycmF5XSdcbiAgXVxuXG4gIHZhciBpc0FycmF5QnVmZmVyVmlldyA9XG4gICAgQXJyYXlCdWZmZXIuaXNWaWV3IHx8XG4gICAgZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHZpZXdDbGFzc2VzLmluZGV4T2YoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikpID4gLTFcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWUobmFtZSkge1xuICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgbmFtZSA9IFN0cmluZyhuYW1lKVxuICB9XG4gIGlmICgvW15hLXowLTlcXC0jJCUmJyorLl5fYHx+IV0vaS50ZXN0KG5hbWUpIHx8IG5hbWUgPT09ICcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjaGFyYWN0ZXIgaW4gaGVhZGVyIGZpZWxkIG5hbWU6IFwiJyArIG5hbWUgKyAnXCInKVxuICB9XG4gIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKClcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSlcbiAgfVxuICByZXR1cm4gdmFsdWVcbn1cblxuLy8gQnVpbGQgYSBkZXN0cnVjdGl2ZSBpdGVyYXRvciBmb3IgdGhlIHZhbHVlIGxpc3RcbmZ1bmN0aW9uIGl0ZXJhdG9yRm9yKGl0ZW1zKSB7XG4gIHZhciBpdGVyYXRvciA9IHtcbiAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGl0ZW1zLnNoaWZ0KClcbiAgICAgIHJldHVybiB7ZG9uZTogdmFsdWUgPT09IHVuZGVmaW5lZCwgdmFsdWU6IHZhbHVlfVxuICAgIH1cbiAgfVxuXG4gIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGl0ZXJhdG9yXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdGhpcy5tYXAgPSB7fVxuXG4gIGlmIChoZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykge1xuICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgdGhpcy5hcHBlbmQobmFtZSwgdmFsdWUpXG4gICAgfSwgdGhpcylcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGhlYWRlcnMpKSB7XG4gICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhlYWRlcikge1xuICAgICAgdGhpcy5hcHBlbmQoaGVhZGVyWzBdLCBoZWFkZXJbMV0pXG4gICAgfSwgdGhpcylcbiAgfSBlbHNlIGlmIChoZWFkZXJzKSB7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICB0aGlzLmFwcGVuZChuYW1lLCBoZWFkZXJzW25hbWVdKVxuICAgIH0sIHRoaXMpXG4gIH1cbn1cblxuSGVhZGVycy5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgdmFsdWUgPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbiAgdmFyIG9sZFZhbHVlID0gdGhpcy5tYXBbbmFtZV1cbiAgdGhpcy5tYXBbbmFtZV0gPSBvbGRWYWx1ZSA/IG9sZFZhbHVlICsgJywgJyArIHZhbHVlIDogdmFsdWVcbn1cblxuSGVhZGVycy5wcm90b3R5cGVbJ2RlbGV0ZSddID0gZnVuY3Rpb24obmFtZSkge1xuICBkZWxldGUgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV1cbn1cblxuSGVhZGVycy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xuICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICByZXR1cm4gdGhpcy5oYXMobmFtZSkgPyB0aGlzLm1hcFtuYW1lXSA6IG51bGxcbn1cblxuSGVhZGVycy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICByZXR1cm4gdGhpcy5tYXAuaGFzT3duUHJvcGVydHkobm9ybWFsaXplTmFtZShuYW1lKSlcbn1cblxuSGVhZGVycy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbn1cblxuSGVhZGVycy5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gIGZvciAodmFyIG5hbWUgaW4gdGhpcy5tYXApIHtcbiAgICBpZiAodGhpcy5tYXAuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdGhpcy5tYXBbbmFtZV0sIG5hbWUsIHRoaXMpXG4gICAgfVxuICB9XG59XG5cbkhlYWRlcnMucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGl0ZW1zID0gW11cbiAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgaXRlbXMucHVzaChuYW1lKVxuICB9KVxuICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG59XG5cbkhlYWRlcnMucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaXRlbXMgPSBbXVxuICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpdGVtcy5wdXNoKHZhbHVlKVxuICB9KVxuICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG59XG5cbkhlYWRlcnMucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGl0ZW1zID0gW11cbiAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgaXRlbXMucHVzaChbbmFtZSwgdmFsdWVdKVxuICB9KVxuICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG59XG5cbmlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gIEhlYWRlcnMucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzXG59XG5cbmZ1bmN0aW9uIGNvbnN1bWVkKGJvZHkpIHtcbiAgaWYgKGJvZHkuYm9keVVzZWQpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJykpXG4gIH1cbiAgYm9keS5ib2R5VXNlZCA9IHRydWVcbn1cblxuZnVuY3Rpb24gZmlsZVJlYWRlclJlYWR5KHJlYWRlcikge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0KVxuICAgIH1cbiAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcilcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJlYWRCbG9iQXNBcnJheUJ1ZmZlcihibG9iKSB7XG4gIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpXG4gIHJldHVybiBwcm9taXNlXG59XG5cbmZ1bmN0aW9uIHJlYWRCbG9iQXNUZXh0KGJsb2IpIHtcbiAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICByZWFkZXIucmVhZEFzVGV4dChibG9iKVxuICByZXR1cm4gcHJvbWlzZVxufVxuXG5mdW5jdGlvbiByZWFkQXJyYXlCdWZmZXJBc1RleHQoYnVmKSB7XG4gIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICB2YXIgY2hhcnMgPSBuZXcgQXJyYXkodmlldy5sZW5ndGgpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aWV3Lmxlbmd0aDsgaSsrKSB7XG4gICAgY2hhcnNbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHZpZXdbaV0pXG4gIH1cbiAgcmV0dXJuIGNoYXJzLmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIGJ1ZmZlckNsb25lKGJ1Zikge1xuICBpZiAoYnVmLnNsaWNlKSB7XG4gICAgcmV0dXJuIGJ1Zi5zbGljZSgwKVxuICB9IGVsc2Uge1xuICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmLmJ5dGVMZW5ndGgpXG4gICAgdmlldy5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmKSlcbiAgICByZXR1cm4gdmlldy5idWZmZXJcbiAgfVxufVxuXG5mdW5jdGlvbiBCb2R5KCkge1xuICB0aGlzLmJvZHlVc2VkID0gZmFsc2VcblxuICB0aGlzLl9pbml0Qm9keSA9IGZ1bmN0aW9uKGJvZHkpIHtcbiAgICAvKlxuICAgICAgZmV0Y2gtbW9jayB3cmFwcyB0aGUgUmVzcG9uc2Ugb2JqZWN0IGluIGFuIEVTNiBQcm94eSB0b1xuICAgICAgcHJvdmlkZSB1c2VmdWwgdGVzdCBoYXJuZXNzIGZlYXR1cmVzIHN1Y2ggYXMgZmx1c2guIEhvd2V2ZXIsIG9uXG4gICAgICBFUzUgYnJvd3NlcnMgd2l0aG91dCBmZXRjaCBvciBQcm94eSBzdXBwb3J0IHBvbGx5ZmlsbHMgbXVzdCBiZSB1c2VkO1xuICAgICAgdGhlIHByb3h5LXBvbGx5ZmlsbCBpcyB1bmFibGUgdG8gcHJveHkgYW4gYXR0cmlidXRlIHVubGVzcyBpdCBleGlzdHNcbiAgICAgIG9uIHRoZSBvYmplY3QgYmVmb3JlIHRoZSBQcm94eSBpcyBjcmVhdGVkLiBUaGlzIGNoYW5nZSBlbnN1cmVzXG4gICAgICBSZXNwb25zZS5ib2R5VXNlZCBleGlzdHMgb24gdGhlIGluc3RhbmNlLCB3aGlsZSBtYWludGFpbmluZyB0aGVcbiAgICAgIHNlbWFudGljIG9mIHNldHRpbmcgUmVxdWVzdC5ib2R5VXNlZCBpbiB0aGUgY29uc3RydWN0b3IgYmVmb3JlXG4gICAgICBfaW5pdEJvZHkgaXMgY2FsbGVkLlxuICAgICovXG4gICAgdGhpcy5ib2R5VXNlZCA9IHRoaXMuYm9keVVzZWRcbiAgICB0aGlzLl9ib2R5SW5pdCA9IGJvZHlcbiAgICBpZiAoIWJvZHkpIHtcbiAgICAgIHRoaXMuX2JvZHlUZXh0ID0gJydcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5XG4gICAgfSBlbHNlIGlmIChzdXBwb3J0LmJsb2IgJiYgQmxvYi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgdGhpcy5fYm9keUJsb2IgPSBib2R5XG4gICAgfSBlbHNlIGlmIChzdXBwb3J0LmZvcm1EYXRhICYmIEZvcm1EYXRhLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICB0aGlzLl9ib2R5Rm9ybURhdGEgPSBib2R5XG4gICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keS50b1N0cmluZygpXG4gICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIHN1cHBvcnQuYmxvYiAmJiBpc0RhdGFWaWV3KGJvZHkpKSB7XG4gICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5LmJ1ZmZlcilcbiAgICAgIC8vIElFIDEwLTExIGNhbid0IGhhbmRsZSBhIERhdGFWaWV3IGJvZHkuXG4gICAgICB0aGlzLl9ib2R5SW5pdCA9IG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKVxuICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiAoQXJyYXlCdWZmZXIucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkgfHwgaXNBcnJheUJ1ZmZlclZpZXcoYm9keSkpKSB7XG4gICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYm9keSlcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpKSB7XG4gICAgICBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QmxvYiAmJiB0aGlzLl9ib2R5QmxvYi50eXBlKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsIHRoaXMuX2JvZHlCbG9iLnR5cGUpXG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChzdXBwb3J0LmJsb2IpIHtcbiAgICB0aGlzLmJsb2IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlCbG9iKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSkpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgYmxvYicpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5VGV4dF0pKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgdmFyIGlzQ29uc3VtZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgICBpZiAoaXNDb25zdW1lZCkge1xuICAgICAgICAgIHJldHVybiBpc0NvbnN1bWVkXG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShcbiAgICAgICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlci5idWZmZXIuc2xpY2UoXG4gICAgICAgICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlci5ieXRlT2Zmc2V0LFxuICAgICAgICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIuYnl0ZU9mZnNldCArIHRoaXMuX2JvZHlBcnJheUJ1ZmZlci5ieXRlTGVuZ3RoXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUFycmF5QnVmZmVyKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5ibG9iKCkudGhlbihyZWFkQmxvYkFzQXJyYXlCdWZmZXIpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdGhpcy50ZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiByZWplY3RlZFxuICAgIH1cblxuICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgcmV0dXJuIHJlYWRCbG9iQXNUZXh0KHRoaXMuX2JvZHlCbG9iKVxuICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlYWRBcnJheUJ1ZmZlckFzVGV4dCh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpKVxuICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgdGV4dCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keVRleHQpXG4gICAgfVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuZm9ybURhdGEpIHtcbiAgICB0aGlzLmZvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihkZWNvZGUpXG4gICAgfVxuICB9XG5cbiAgdGhpcy5qc29uID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oSlNPTi5wYXJzZSlcbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8vIEhUVFAgbWV0aG9kcyB3aG9zZSBjYXBpdGFsaXphdGlvbiBzaG91bGQgYmUgbm9ybWFsaXplZFxudmFyIG1ldGhvZHMgPSBbJ0RFTEVURScsICdHRVQnLCAnSEVBRCcsICdPUFRJT05TJywgJ1BPU1QnLCAnUFVUJ11cblxuZnVuY3Rpb24gbm9ybWFsaXplTWV0aG9kKG1ldGhvZCkge1xuICB2YXIgdXBjYXNlZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpXG4gIHJldHVybiBtZXRob2RzLmluZGV4T2YodXBjYXNlZCkgPiAtMSA/IHVwY2FzZWQgOiBtZXRob2Rcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJlcXVlc3QoaW5wdXQsIG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJlcXVlc3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUGxlYXNlIHVzZSB0aGUgXCJuZXdcIiBvcGVyYXRvciwgdGhpcyBET00gb2JqZWN0IGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBjYWxsZWQgYXMgYSBmdW5jdGlvbi4nKVxuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgdmFyIGJvZHkgPSBvcHRpb25zLmJvZHlcblxuICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBSZXF1ZXN0KSB7XG4gICAgaWYgKGlucHV0LmJvZHlVc2VkKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKVxuICAgIH1cbiAgICB0aGlzLnVybCA9IGlucHV0LnVybFxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBpbnB1dC5jcmVkZW50aWFsc1xuICAgIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbnB1dC5oZWFkZXJzKVxuICAgIH1cbiAgICB0aGlzLm1ldGhvZCA9IGlucHV0Lm1ldGhvZFxuICAgIHRoaXMubW9kZSA9IGlucHV0Lm1vZGVcbiAgICB0aGlzLnNpZ25hbCA9IGlucHV0LnNpZ25hbFxuICAgIGlmICghYm9keSAmJiBpbnB1dC5fYm9keUluaXQgIT0gbnVsbCkge1xuICAgICAgYm9keSA9IGlucHV0Ll9ib2R5SW5pdFxuICAgICAgaW5wdXQuYm9keVVzZWQgPSB0cnVlXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMudXJsID0gU3RyaW5nKGlucHV0KVxuICB9XG5cbiAgdGhpcy5jcmVkZW50aWFscyA9IG9wdGlvbnMuY3JlZGVudGlhbHMgfHwgdGhpcy5jcmVkZW50aWFscyB8fCAnc2FtZS1vcmlnaW4nXG4gIGlmIChvcHRpb25zLmhlYWRlcnMgfHwgIXRoaXMuaGVhZGVycykge1xuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgfVxuICB0aGlzLm1ldGhvZCA9IG5vcm1hbGl6ZU1ldGhvZChvcHRpb25zLm1ldGhvZCB8fCB0aGlzLm1ldGhvZCB8fCAnR0VUJylcbiAgdGhpcy5tb2RlID0gb3B0aW9ucy5tb2RlIHx8IHRoaXMubW9kZSB8fCBudWxsXG4gIHRoaXMuc2lnbmFsID0gb3B0aW9ucy5zaWduYWwgfHwgdGhpcy5zaWduYWxcbiAgdGhpcy5yZWZlcnJlciA9IG51bGxcblxuICBpZiAoKHRoaXMubWV0aG9kID09PSAnR0VUJyB8fCB0aGlzLm1ldGhvZCA9PT0gJ0hFQUQnKSAmJiBib2R5KSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9keSBub3QgYWxsb3dlZCBmb3IgR0VUIG9yIEhFQUQgcmVxdWVzdHMnKVxuICB9XG4gIHRoaXMuX2luaXRCb2R5KGJvZHkpXG5cbiAgaWYgKHRoaXMubWV0aG9kID09PSAnR0VUJyB8fCB0aGlzLm1ldGhvZCA9PT0gJ0hFQUQnKSB7XG4gICAgaWYgKG9wdGlvbnMuY2FjaGUgPT09ICduby1zdG9yZScgfHwgb3B0aW9ucy5jYWNoZSA9PT0gJ25vLWNhY2hlJykge1xuICAgICAgLy8gU2VhcmNoIGZvciBhICdfJyBwYXJhbWV0ZXIgaW4gdGhlIHF1ZXJ5IHN0cmluZ1xuICAgICAgdmFyIHJlUGFyYW1TZWFyY2ggPSAvKFs/Jl0pXz1bXiZdKi9cbiAgICAgIGlmIChyZVBhcmFtU2VhcmNoLnRlc3QodGhpcy51cmwpKSB7XG4gICAgICAgIC8vIElmIGl0IGFscmVhZHkgZXhpc3RzIHRoZW4gc2V0IHRoZSB2YWx1ZSB3aXRoIHRoZSBjdXJyZW50IHRpbWVcbiAgICAgICAgdGhpcy51cmwgPSB0aGlzLnVybC5yZXBsYWNlKHJlUGFyYW1TZWFyY2gsICckMV89JyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBhIG5ldyAnXycgcGFyYW1ldGVyIHRvIHRoZSBlbmQgd2l0aCB0aGUgY3VycmVudCB0aW1lXG4gICAgICAgIHZhciByZVF1ZXJ5U3RyaW5nID0gL1xcPy9cbiAgICAgICAgdGhpcy51cmwgKz0gKHJlUXVlcnlTdHJpbmcudGVzdCh0aGlzLnVybCkgPyAnJicgOiAnPycpICsgJ189JyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblJlcXVlc3QucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUmVxdWVzdCh0aGlzLCB7Ym9keTogdGhpcy5fYm9keUluaXR9KVxufVxuXG5mdW5jdGlvbiBkZWNvZGUoYm9keSkge1xuICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpXG4gIGJvZHlcbiAgICAudHJpbSgpXG4gICAgLnNwbGl0KCcmJylcbiAgICAuZm9yRWFjaChmdW5jdGlvbihieXRlcykge1xuICAgICAgaWYgKGJ5dGVzKSB7XG4gICAgICAgIHZhciBzcGxpdCA9IGJ5dGVzLnNwbGl0KCc9JylcbiAgICAgICAgdmFyIG5hbWUgPSBzcGxpdC5zaGlmdCgpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIHZhciB2YWx1ZSA9IHNwbGl0LmpvaW4oJz0nKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICBmb3JtLmFwcGVuZChkZWNvZGVVUklDb21wb25lbnQobmFtZSksIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpXG4gICAgICB9XG4gICAgfSlcbiAgcmV0dXJuIGZvcm1cbn1cblxuZnVuY3Rpb24gcGFyc2VIZWFkZXJzKHJhd0hlYWRlcnMpIHtcbiAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpXG4gIC8vIFJlcGxhY2UgaW5zdGFuY2VzIG9mIFxcclxcbiBhbmQgXFxuIGZvbGxvd2VkIGJ5IGF0IGxlYXN0IG9uZSBzcGFjZSBvciBob3Jpem9udGFsIHRhYiB3aXRoIGEgc3BhY2VcbiAgLy8gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzAjc2VjdGlvbi0zLjJcbiAgdmFyIHByZVByb2Nlc3NlZEhlYWRlcnMgPSByYXdIZWFkZXJzLnJlcGxhY2UoL1xccj9cXG5bXFx0IF0rL2csICcgJylcbiAgLy8gQXZvaWRpbmcgc3BsaXQgdmlhIHJlZ2V4IHRvIHdvcmsgYXJvdW5kIGEgY29tbW9uIElFMTEgYnVnIHdpdGggdGhlIGNvcmUtanMgMy42LjAgcmVnZXggcG9seWZpbGxcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaC9pc3N1ZXMvNzQ4XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy83NTFcbiAgcHJlUHJvY2Vzc2VkSGVhZGVyc1xuICAgIC5zcGxpdCgnXFxyJylcbiAgICAubWFwKGZ1bmN0aW9uKGhlYWRlcikge1xuICAgICAgcmV0dXJuIGhlYWRlci5pbmRleE9mKCdcXG4nKSA9PT0gMCA/IGhlYWRlci5zdWJzdHIoMSwgaGVhZGVyLmxlbmd0aCkgOiBoZWFkZXJcbiAgICB9KVxuICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJzonKVxuICAgICAgdmFyIGtleSA9IHBhcnRzLnNoaWZ0KCkudHJpbSgpXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzonKS50cmltKClcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoa2V5LCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9KVxuICByZXR1cm4gaGVhZGVyc1xufVxuXG5Cb2R5LmNhbGwoUmVxdWVzdC5wcm90b3R5cGUpXG5cbmV4cG9ydCBmdW5jdGlvbiBSZXNwb25zZShib2R5SW5pdCwgb3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmVzcG9uc2UpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUGxlYXNlIHVzZSB0aGUgXCJuZXdcIiBvcGVyYXRvciwgdGhpcyBET00gb2JqZWN0IGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBjYWxsZWQgYXMgYSBmdW5jdGlvbi4nKVxuICB9XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fVxuICB9XG5cbiAgdGhpcy50eXBlID0gJ2RlZmF1bHQnXG4gIHRoaXMuc3RhdHVzID0gb3B0aW9ucy5zdGF0dXMgPT09IHVuZGVmaW5lZCA/IDIwMCA6IG9wdGlvbnMuc3RhdHVzXG4gIHRoaXMub2sgPSB0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDBcbiAgdGhpcy5zdGF0dXNUZXh0ID0gb3B0aW9ucy5zdGF0dXNUZXh0ID09PSB1bmRlZmluZWQgPyAnJyA6ICcnICsgb3B0aW9ucy5zdGF0dXNUZXh0XG4gIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgdGhpcy51cmwgPSBvcHRpb25zLnVybCB8fCAnJ1xuICB0aGlzLl9pbml0Qm9keShib2R5SW5pdClcbn1cblxuQm9keS5jYWxsKFJlc3BvbnNlLnByb3RvdHlwZSlcblxuUmVzcG9uc2UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUmVzcG9uc2UodGhpcy5fYm9keUluaXQsIHtcbiAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgIHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcbiAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgIHVybDogdGhpcy51cmxcbiAgfSlcbn1cblxuUmVzcG9uc2UuZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IDAsIHN0YXR1c1RleHQ6ICcnfSlcbiAgcmVzcG9uc2UudHlwZSA9ICdlcnJvcidcbiAgcmV0dXJuIHJlc3BvbnNlXG59XG5cbnZhciByZWRpcmVjdFN0YXR1c2VzID0gWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XVxuXG5SZXNwb25zZS5yZWRpcmVjdCA9IGZ1bmN0aW9uKHVybCwgc3RhdHVzKSB7XG4gIGlmIChyZWRpcmVjdFN0YXR1c2VzLmluZGV4T2Yoc3RhdHVzKSA9PT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzdGF0dXMgY29kZScpXG4gIH1cblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IHN0YXR1cywgaGVhZGVyczoge2xvY2F0aW9uOiB1cmx9fSlcbn1cblxuZXhwb3J0IHZhciBET01FeGNlcHRpb24gPSBnbG9iYWwuRE9NRXhjZXB0aW9uXG50cnkge1xuICBuZXcgRE9NRXhjZXB0aW9uKClcbn0gY2F0Y2ggKGVycikge1xuICBET01FeGNlcHRpb24gPSBmdW5jdGlvbihtZXNzYWdlLCBuYW1lKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZVxuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB2YXIgZXJyb3IgPSBFcnJvcihtZXNzYWdlKVxuICAgIHRoaXMuc3RhY2sgPSBlcnJvci5zdGFja1xuICB9XG4gIERPTUV4Y2VwdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSlcbiAgRE9NRXhjZXB0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IERPTUV4Y2VwdGlvblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2goaW5wdXQsIGluaXQpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoaW5wdXQsIGluaXQpXG5cbiAgICBpZiAocmVxdWVzdC5zaWduYWwgJiYgcmVxdWVzdC5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgcmV0dXJuIHJlamVjdChuZXcgRE9NRXhjZXB0aW9uKCdBYm9ydGVkJywgJ0Fib3J0RXJyb3InKSlcbiAgICB9XG5cbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcblxuICAgIGZ1bmN0aW9uIGFib3J0WGhyKCkge1xuICAgICAgeGhyLmFib3J0KClcbiAgICB9XG5cbiAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB8fCAnJylcbiAgICAgIH1cbiAgICAgIG9wdGlvbnMudXJsID0gJ3Jlc3BvbnNlVVJMJyBpbiB4aHIgPyB4aHIucmVzcG9uc2VVUkwgOiBvcHRpb25zLmhlYWRlcnMuZ2V0KCdYLVJlcXVlc3QtVVJMJylcbiAgICAgIHZhciBib2R5ID0gJ3Jlc3BvbnNlJyBpbiB4aHIgPyB4aHIucmVzcG9uc2UgOiB4aHIucmVzcG9uc2VUZXh0XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKG5ldyBSZXNwb25zZShib2R5LCBvcHRpb25zKSlcbiAgICAgIH0sIDApXG4gICAgfVxuXG4gICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9LCAwKVxuICAgIH1cblxuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9LCAwKVxuICAgIH1cblxuICAgIHhoci5vbmFib3J0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IERPTUV4Y2VwdGlvbignQWJvcnRlZCcsICdBYm9ydEVycm9yJykpXG4gICAgICB9LCAwKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpeFVybCh1cmwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB1cmwgPT09ICcnICYmIGdsb2JhbC5sb2NhdGlvbi5ocmVmID8gZ2xvYmFsLmxvY2F0aW9uLmhyZWYgOiB1cmxcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHVybFxuICAgICAgfVxuICAgIH1cblxuICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCBmaXhVcmwocmVxdWVzdC51cmwpLCB0cnVlKVxuXG4gICAgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdpbmNsdWRlJykge1xuICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWVcbiAgICB9IGVsc2UgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdvbWl0Jykge1xuICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCdyZXNwb25zZVR5cGUnIGluIHhocikge1xuICAgICAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBzdXBwb3J0LmFycmF5QnVmZmVyICYmXG4gICAgICAgIHJlcXVlc3QuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpICYmXG4gICAgICAgIHJlcXVlc3QuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpLmluZGV4T2YoJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScpICE9PSAtMVxuICAgICAgKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGluaXQgJiYgdHlwZW9mIGluaXQuaGVhZGVycyA9PT0gJ29iamVjdCcgJiYgIShpbml0LmhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSkge1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaW5pdC5oZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgbm9ybWFsaXplVmFsdWUoaW5pdC5oZWFkZXJzW25hbWVdKSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcXVlc3QuaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdC5zaWduYWwpIHtcbiAgICAgIHJlcXVlc3Quc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnRYaHIpXG5cbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gRE9ORSAoc3VjY2VzcyBvciBmYWlsdXJlKVxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICByZXF1ZXN0LnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0WGhyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgeGhyLnNlbmQodHlwZW9mIHJlcXVlc3QuX2JvZHlJbml0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiByZXF1ZXN0Ll9ib2R5SW5pdClcbiAgfSlcbn1cblxuZmV0Y2gucG9seWZpbGwgPSB0cnVlXG5cbmlmICghZ2xvYmFsLmZldGNoKSB7XG4gIGdsb2JhbC5mZXRjaCA9IGZldGNoXG4gIGdsb2JhbC5IZWFkZXJzID0gSGVhZGVyc1xuICBnbG9iYWwuUmVxdWVzdCA9IFJlcXVlc3RcbiAgZ2xvYmFsLlJlc3BvbnNlID0gUmVzcG9uc2Vcbn1cbiIsImNvbnN0IGFjY29yZGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hY2NvcmRpb25dJylcbmlmIChhY2NvcmRpb25zLmxlbmd0aCkge1xuICBhY2NvcmRpb25zLmZvckVhY2goYWNjb3JkaW9uID0+IHtcbiAgICBjb25zdCByb3dzID0gYWNjb3JkaW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFjY29yZGlvbi1yb3ddJykgfHwgW11cblxuICAgIHJvd3MuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgY29uc3QgaGVhZGVyID0gcm93LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFjY29yZGlvbi1oZWFkZXJdJylcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSByb3cucXVlcnlTZWxlY3RvcignW2RhdGEtYWNjb3JkaW9uLWNvbnRlbnRdJylcblxuICAgICAgY29uc3QgdG9nZ2xlID0gKCkgPT4ge1xuICAgICAgICBpZiAoY29udGVudC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpXG4gICAgICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJylcbiAgICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IG51bGxcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpXG4gICAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJylcbiAgICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4J1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZSlcbiAgICB9KVxuICB9KVxufVxuIiwiaW1wb3J0IFwid2hhdHdnLWZldGNoXCI7XG5pbXBvcnQgaW50bFRlbElucHV0IGZyb20gXCJpbnRsLXRlbC1pbnB1dFwiO1xuXG5jb25zdCBpbnB1dENsYXNzZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLWlucHV0LWNsYXNzZXNcIikgfHwgW107XG5pbnB1dENsYXNzZXMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XG4gICAgaWYgKCEhZS50YXJnZXQudmFsdWUpIHtcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ19maWxsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdfZmlsbGVkJylcbiAgICB9XG4gIH0pXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICBpZiAoISFlLnRhcmdldC52YWx1ZSkge1xuICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnX2ZpbGxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ19maWxsZWQnKVxuICAgIH1cbiAgfSlcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIChlKSA9PiB7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnX2ZvY3VzZWQnKVxuICB9KVxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoZSkgPT4ge1xuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ19mb2N1c2VkJylcbiAgfSlcbn0pXG5cbmNvbnN0IHBob25lSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1pbnB1dC1waG9uZVwiKSB8fCBbXTtcbnBob25lSW5wdXRzLmZvckVhY2goKGVsKSA9PiB7XG4gIGNvbnN0IGl0aSA9IGludGxUZWxJbnB1dChlbCwge1xuICAgIGluaXRpYWxDb3VudHJ5OiBcInJ1XCIsXG4gICAgcHJlZmVycmVkQ291bnRyaWVzOiBbXG4gICAgICBcInJ1XCIsXG4gICAgICBcImt6XCIsXG4gICAgICBcInVhXCIsXG4gICAgICBcImJ5XCIsXG4gICAgXSxcbiAgICBsb2NhbGl6ZWRDb3VudHJpZXM6IHtcbiAgICAgIHJ1OiBcItCg0L7RgdGB0LjRj1wiLFxuICAgICAga3o6IFwi0JrQsNC30LDRhdGB0YLQsNC9XCIsXG4gICAgICB1YTogXCLQo9C60YDQsNC40L3QsFwiLFxuICAgICAgYnk6IFwi0JHQtdC70LDRgNGD0YHRjFwiLFxuICAgIH0sXG4gIH0pO1xuICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY291bnRyeWNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnN0IGNvdW50cnkgPSBpdGkuZ2V0U2VsZWN0ZWRDb3VudHJ5RGF0YSgpO1xuICAgIGlmIChjb3VudHJ5LmRpYWxDb2RlKSB7XG4gICAgICAkKGVsKS5pbnB1dG1hc2tzKFwicmVtb3ZlXCIpO1xuICAgICAgJChlbCkuaW5wdXRtYXNrKFwiKyN7Kn1cIiwgbWFza09wdHMuaW5wdXRtYXNrKTtcbiAgICAgICQoZWwpLmlucHV0bWFza3MoJC5leHRlbmQodHJ1ZSwge30sIG1hc2tPcHRzLCB7XG4gICAgICAgIGxpc3Q6IGxpc3RDb3VudHJpZXNcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGxpc3RDb3VudHJpZXMgPSAkLm1hc2tzU29ydCgkLm1hc2tzTG9hZChpbnB1dG1hc2tQYXJhbXMucGhvbmVDb2RlcyksIFsnIyddLCAvWzAtOV18Iy8sIFwibWFza1wiKTtcbiAgY29uc3QgbWFza09wdHMgPSB7XG4gICAgaW5wdXRtYXNrOiB7XG4gICAgICBkZWZpbml0aW9uczoge1xuICAgICAgICAnIyc6IHtcbiAgICAgICAgICB2YWxpZGF0b3I6IFwiWzAtOV1cIixcbiAgICAgICAgICBjYXJkaW5hbGl0eTogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2hvd01hc2tPbkhvdmVyOiBmYWxzZSxcbiAgICAgIGF1dG9Vbm1hc2s6IHRydWUsXG4gICAgICBjbGVhck1hc2tPbkxvc3RGb2N1czogZmFsc2UsXG4gICAgICBvblVuTWFzazogZnVuY3Rpb24gKG1hc2tlZFZhbHVlLCB1bm1hc2tlZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiAnKycgKyB1bm1hc2tlZFZhbHVlO1xuICAgICAgfVxuICAgIH0sXG4gICAgbWF0Y2g6IC9bMC05XS8sXG4gICAgcmVwbGFjZTogJyMnLFxuICAgIGxpc3RLZXk6IFwibWFza1wiXG4gIH07XG5cbiAgbGV0IG1hc2tJc0luaXQgPSBmYWxzZVxuICBlbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgICBpZiAoIW1hc2tJc0luaXQpIHtcbiAgICAgIG1hc2tJc0luaXQgPSB0cnVlO1xuICAgICAgZWwudmFsdWUgPSAnNyc7XG4gICAgICBlbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgJChlbCkuaW5wdXRtYXNrcygkLmV4dGVuZCh0cnVlLCB7fSwgbWFza09wdHMsIHtcbiAgICAgICAgbGlzdDogbGlzdENvdW50cmllcyxcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbmpRdWVyeS52YWxpZGF0b3IuYWRkTWV0aG9kKFxuICBcImxheEVtYWlsXCIsXG4gIGZ1bmN0aW9uICh2YWx1ZSwgZWxlbWVudCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8XG4gICAgICAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLy50ZXN0KFxuICAgICAgICB2YWx1ZVxuICAgICAgKVxuICAgICk7XG4gIH0sXG4gIFwi0J3QtdC60L7RgNGA0LXQutGC0L3Ri9C5IGUtbWFpbC5cIlxuKTtcblxualF1ZXJ5LnZhbGlkYXRvci5hZGRNZXRob2QoXG4gIFwibWFza2VkUGhvbmVcIixcbiAgZnVuY3Rpb24gKHZhbHVlLCBlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuaW1hc2subWFza2VkLmlzQ29tcGxldGVcbiAgfSxcbiAgXCLQndC10LrQvtGA0YDQtdC60YLQvdGL0Lkg0YLQtdC70LXRhNC+0L0uXCJcbik7XG5cbmZ1bmN0aW9uIHN1Ym1pdEZvcm0oZm9ybSwgdmFsaWRhdG9yKSB7XG4gIGNvbnN0IGVtYWlsSW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLWlucHV0LWVtYWlsXCIpIHx8IFtdO1xuICBlbWFpbElucHV0cy5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGVsLnZhbHVlID0gZWwudmFsdWUudHJpbSgpLnJlcGxhY2UoL1tcXHUwMDAwLVxcdTAwMDgsXFx1MDAwQS1cXHUwMDFGLFxcdTAwN0YtXFx1MDBBMF0rL2csICcnKTtcbiAgfSk7XG5cbiAgZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiksIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKSxcbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgICAgdmFsaWRhdG9yLnNob3dFcnJvcnMoe1xuICAgICAgICAgIGFjdGlvbjogcmVzcG9uc2UubWVzc2FnZSxcbiAgICAgICAgfSk7XG4gICAgICAgICQoXCIjYWN0aW9uLWVycm9yXCIsIGZvcm0pLmFkZENsYXNzKFwiZXJyb3Jfc3VjY2Vzc1wiKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdmFsaWRhdG9yLnJlc2V0Rm9ybSgpO1xuICAgICAgICB9LCA0MDAwKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlZGlyZWN0KSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gcmVzcG9uc2UucmVkaXJlY3Q7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbGlkYXRvci5zaG93RXJyb3JzKHtcbiAgICAgICAgICBhY3Rpb246IHJlc3BvbnNlLm1lc3NhZ2UsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xufVxuXG52YXIgaW5kaXZpZHVhbEZvcm1WYWxpZGF0b3IgPSAkKFwiI2luZGl2aWR1YWwtZm9ybVwiKS52YWxpZGF0ZSh7XG4gIHJ1bGVzOiB7XG4gICAgbmFtZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBwaG9uZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBhcHByb3ZlOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHRlbGVncmFtOiB7XG4gICAgICByZXF1aXJlZDoge1xuICAgICAgICBkZXBlbmRzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiAkKFwiI2NvbnRhY3QtZmllbGRcIikudmFsKCkgPT09ICdUZWxlZ3JhbSc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1lc3NhZ2VzOiB7XG4gICAgbmFtZToge1xuICAgICAgcmVxdWlyZWQ6IFwi0JLQstC10LTQuNGC0LUg0LjQvNGPXCIsXG4gICAgfSxcbiAgICBwaG9uZToge1xuICAgICAgcmVxdWlyZWQ6IFwi0JLQstC10LTQuNGC0LUg0YLQtdC70LXRhNC+0L0gKFdoYXRzQXBwLCBWaWJlcilcIixcbiAgICB9LFxuICAgIGFwcHJvdmU6IHtcbiAgICAgIHJlcXVpcmVkOiBcItCS0Ysg0LTQvtC70LbQvdGLINGB0L7Qs9C70LDRgdC40YLRjNGB0Y8g0YEg0YPRgdC70L7QstC40Y/QvNC4XCIsXG4gICAgfSxcbiAgICB0ZWxlZ3JhbToge1xuICAgICAgcmVxdWlyZWQ6IFwi0JLQstC10LTQuNGC0LUg0LDQutC60LDRg9C90YIgVGVsZWdyYW1cIixcbiAgICB9LFxuICB9LFxuICBlcnJvclBsYWNlbWVudDogZnVuY3Rpb24gKGVycm9yLCBlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQuaGFzQ2xhc3MoJ2pzLWlucHV0LXBob25lJykpIHtcbiAgICAgIGVycm9yLmluc2VydEFmdGVyKGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkpO1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5oYXNDbGFzcygnanMtaW5wdXQtY2xhc3NlcycpKSB7XG4gICAgICBlcnJvci5pbnNlcnRBZnRlcihlbGVtZW50LnBhcmVudCgpKTtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQucGFyZW50KCkucHJvcChcInRhZ05hbWVcIikgPT09ICdMQUJFTCcpIHtcbiAgICAgIGVycm9yLmluc2VydEFmdGVyKGVsZW1lbnQucGFyZW50KCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmFmdGVyKGVycm9yKTtcbiAgICB9XG4gIH0sXG4gIHN1Ym1pdEhhbmRsZXI6IGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgc3VibWl0Rm9ybShmb3JtLCBpbmRpdmlkdWFsRm9ybVZhbGlkYXRvcik7XG4gIH0sXG59KTtcblxudmFyIGZhcUZvcm1WYWxpZGF0b3IgPSAkKFwiI2ZhcS1mb3JtXCIpLnZhbGlkYXRlKHtcbiAgcnVsZXM6IHtcbiAgICBlbWFpbDoge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgIGxheEVtYWlsOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIG1lc3NhZ2VzOiB7XG4gICAgZW1haWw6IHtcbiAgICAgIHJlcXVpcmVkOiBcItCS0LLQtdC00LjRgtC1IGUtbWFpbFwiLFxuICAgICAgZW1haWw6IFwi0J3QtdC60L7RgNGA0LXQutGC0L3Ri9C5IGUtbWFpbFwiLFxuICAgIH0sXG4gIH0sXG4gIGVycm9yUGxhY2VtZW50OiBmdW5jdGlvbiAoZXJyb3IsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBhcHByb3ZlRWwgPSBlbGVtZW50LmNsb3Nlc3QoJy5tb2RhbC1mb3JtX19hcHByb3ZlJylcbiAgICBpZiAoYXBwcm92ZUVsLmxlbmd0aCkge1xuICAgICAgYXBwcm92ZUVsLmFmdGVyKGVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5hZnRlcihlcnJvcik7XG4gICAgfVxuICB9LFxuICBzdWJtaXRIYW5kbGVyOiBmdW5jdGlvbiAoZm9ybSkge1xuICAgIHN1Ym1pdEZvcm0oZm9ybSwgZmFxRm9ybVZhbGlkYXRvcik7XG4gIH0sXG59KTtcbiIsImNvbnN0IGlzVmlzaWJsZSA9IChlbGVtKSA9PlxuICAhIWVsZW0gJiZcbiAgISEoZWxlbS5vZmZzZXRXaWR0aCB8fCBlbGVtLm9mZnNldEhlaWdodCB8fCBlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKTtcblxuY29uc3QgbW9kYWxUb2dnbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW1vZGFsLXRvZ2dsZV1cIik7XG5pZiAobW9kYWxUb2dnbGVzLmxlbmd0aCkge1xuICBtb2RhbFRvZ2dsZXMuZm9yRWFjaCgodG9nZ2xlKSA9PiB7XG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0b2dnbGUuZGF0YXNldC5tb2RhbFRvZ2dsZSk7XG4gICAgbGV0IGNsb3NlID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIltkYXRhLW1vZGFsLWNsb3NlXVwiKTtcbiAgICBjb25zdCBvdXRzaWRlQ2xpY2tMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICAhbW9kYWwuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxuICAgICAgICBpc1Zpc2libGUobW9kYWwpICYmXG4gICAgICAgICF0b2dnbGUuY29udGFpbnMoZXZlbnQudGFyZ2V0KVxuICAgICAgKSB7XG4gICAgICAgIGhpZGUoKTtcbiAgICAgICAgcmVtb3ZlQ2xpY2tMaXN0ZW5lcigpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlQ2xpY2tMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvdXRzaWRlQ2xpY2tMaXN0ZW5lcik7XG4gICAgfTtcbiAgICBjb25zdCBzaG93ID0gKCkgPT4ge1xuICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIl9vcGVuZWRcIik7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3V0c2lkZUNsaWNrTGlzdGVuZXIpO1xuICAgIH07XG4gICAgY29uc3QgaGlkZSA9ICgpID0+IHtcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJfb3BlbmVkXCIpO1xuICAgIH07XG4gICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc2hvdygpO1xuICAgIH0pO1xuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaGlkZSgpO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IHRocm90dGxlIH0gZnJvbSBcInRocm90dGxlLWRlYm91bmNlXCI7XG5cbmNvbnN0IHNjcm9sbHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51aS1zY3JvbGx1cFwiKTtcbmNvbnN0IHN0aWNreU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucy1oZWFkZXJfX21lbnUnKVxuY29uc3Qgc3RpY2t5TWVudVBvaW50ID0gc3RpY2t5TWVudS5vZmZzZXRUb3BcbmNvbnN0IHNjcm9sbEhhbmRsZXIgPSB0aHJvdHRsZSgxMCwgKCkgPT4ge1xuICBpZiAod2luZG93LnNjcm9sbFkgPiA0MDApIHtcbiAgICBzY3JvbGx1cC5jbGFzc0xpc3QuYWRkKFwidWktc2Nyb2xsdXBfZml4ZWRcIik7XG4gIH0gZWxzZSB7XG4gICAgc2Nyb2xsdXAuY2xhc3NMaXN0LnJlbW92ZShcInVpLXNjcm9sbHVwX2ZpeGVkXCIpO1xuICB9XG5cbiAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+PSBzdGlja3lNZW51UG9pbnQpIHtcbiAgICBzdGlja3lNZW51LmNsYXNzTGlzdC5hZGQoJ3MtaGVhZGVyX19tZW51X3N0aWNreScpXG4gIH0gZWxzZSB7XG4gICAgc3RpY2t5TWVudS5jbGFzc0xpc3QucmVtb3ZlKCdzLWhlYWRlcl9fbWVudV9zdGlja3knKVxuICB9XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsSGFuZGxlcik7XG5cbmNvbnN0IHNjcm9sbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc2Nyb2xsXVwiKSB8fCBbXTtcbnNjcm9sbHMuZm9yRWFjaCgoc2Nyb2xsKSA9PlxuICBzY3JvbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgbWVudXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucy1oZWFkZXJfX21lbnUnKSB8fCBbXVxuICAgIG1lbnVzLmZvckVhY2goKG1lbnUpID0+IHtcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgncy1oZWFkZXJfX21lbnVfb3BlbmVkJylcbiAgICB9KVxuXG4gICAgbGV0IG9mZnNldCA9IDA7XG4gICAgbGV0IHRvcCA9IDA7XG4gICAgbGV0IGxlZnQgPSAwO1xuICAgIGlmIChzY3JvbGwuZGF0YXNldC5zY3JvbGwpIHtcbiAgICAgIGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNjcm9sbC5kYXRhc2V0LnNjcm9sbCk7XG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIHRvcCA9IHRhcmdldC5vZmZzZXRUb3AgLSBvZmZzZXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9wID0gdG9wICogJCgnaHRtbCcpLmNzcygnem9vbScpIHx8IDFcblxuICAgICQoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0pLmFuaW1hdGUoXG4gICAgICB7XG4gICAgICAgIHNjcm9sbFRvcDogdG9wLFxuICAgICAgfSxcbiAgICAgIDIwMDBcbiAgICApO1xuICB9KVxuKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmaW5lZCxuby1wYXJhbS1yZWFzc2lnbixuby1zaGFkb3cgKi9cblxuLyoqXG4gKiBUaHJvdHRsZSBleGVjdXRpb24gb2YgYSBmdW5jdGlvbi4gRXNwZWNpYWxseSB1c2VmdWwgZm9yIHJhdGUgbGltaXRpbmdcbiAqIGV4ZWN1dGlvbiBvZiBoYW5kbGVycyBvbiBldmVudHMgbGlrZSByZXNpemUgYW5kIHNjcm9sbC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgLSAgICAgICAgICAgICAgICAgIEEgemVyby1vci1ncmVhdGVyIGRlbGF5IGluIG1pbGxpc2Vjb25kcy4gRm9yIGV2ZW50IGNhbGxiYWNrcywgdmFsdWVzIGFyb3VuZCAxMDAgb3IgMjUwIChvciBldmVuIGhpZ2hlcilcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmUgbW9zdCB1c2VmdWwuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtICAgICAgICAgICAgICAgQSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBhZnRlciBkZWxheSBtaWxsaXNlY29uZHMuIFRoZSBgdGhpc2AgY29udGV4dCBhbmQgYWxsIGFyZ3VtZW50cyBhcmUgcGFzc2VkIHRocm91Z2gsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXMtaXMsIHRvIGBjYWxsYmFja2Agd2hlbiB0aGUgdGhyb3R0bGVkLWZ1bmN0aW9uIGlzIGV4ZWN1dGVkLlxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSAtICAgICAgICAgICAgICBBbiBvYmplY3QgdG8gY29uZmlndXJlIG9wdGlvbnMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLm5vVHJhaWxpbmddIC0gICBPcHRpb25hbCwgZGVmYXVsdHMgdG8gZmFsc2UuIElmIG5vVHJhaWxpbmcgaXMgdHJ1ZSwgY2FsbGJhY2sgd2lsbCBvbmx5IGV4ZWN1dGUgZXZlcnkgYGRlbGF5YCBtaWxsaXNlY29uZHNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSB0aGUgdGhyb3R0bGVkLWZ1bmN0aW9uIGlzIGJlaW5nIGNhbGxlZC4gSWYgbm9UcmFpbGluZyBpcyBmYWxzZSBvciB1bnNwZWNpZmllZCwgY2FsbGJhY2sgd2lsbCBiZSBleGVjdXRlZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uZSBmaW5hbCB0aW1lIGFmdGVyIHRoZSBsYXN0IHRocm90dGxlZC1mdW5jdGlvbiBjYWxsLiAoQWZ0ZXIgdGhlIHRocm90dGxlZC1mdW5jdGlvbiBoYXMgbm90IGJlZW4gY2FsbGVkIGZvclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBkZWxheWAgbWlsbGlzZWNvbmRzLCB0aGUgaW50ZXJuYWwgY291bnRlciBpcyByZXNldCkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLm5vTGVhZGluZ10gLSAgIE9wdGlvbmFsLCBkZWZhdWx0cyB0byBmYWxzZS4gSWYgbm9MZWFkaW5nIGlzIGZhbHNlLCB0aGUgZmlyc3QgdGhyb3R0bGVkLWZ1bmN0aW9uIGNhbGwgd2lsbCBleGVjdXRlIGNhbGxiYWNrXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1tZWRpYXRlbHkuIElmIG5vTGVhZGluZyBpcyB0cnVlLCB0aGUgZmlyc3QgdGhlIGNhbGxiYWNrIGV4ZWN1dGlvbiB3aWxsIGJlIHNraXBwZWQuIEl0IHNob3VsZCBiZSBub3RlZCB0aGF0XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgd2lsbCBuZXZlciBleGVjdXRlZCBpZiBib3RoIG5vTGVhZGluZyA9IHRydWUgYW5kIG5vVHJhaWxpbmcgPSB0cnVlLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5kZWJvdW5jZU1vZGVdIC0gSWYgYGRlYm91bmNlTW9kZWAgaXMgdHJ1ZSAoYXQgYmVnaW4pLCBzY2hlZHVsZSBgY2xlYXJgIHRvIGV4ZWN1dGUgYWZ0ZXIgYGRlbGF5YCBtcy4gSWYgYGRlYm91bmNlTW9kZWAgaXNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSAoYXQgZW5kKSwgc2NoZWR1bGUgYGNhbGxiYWNrYCB0byBleGVjdXRlIGFmdGVyIGBkZWxheWAgbXMuXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIG5ldywgdGhyb3R0bGVkLCBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGRlbGF5LCBjYWxsYmFjaywgb3B0aW9ucykge1xuXHRjb25zdCB7XG5cdFx0bm9UcmFpbGluZyA9IGZhbHNlLFxuXHRcdG5vTGVhZGluZyA9IGZhbHNlLFxuXHRcdGRlYm91bmNlTW9kZSA9IHVuZGVmaW5lZFxuXHR9ID0gb3B0aW9ucyB8fCB7fTtcblx0Lypcblx0ICogQWZ0ZXIgd3JhcHBlciBoYXMgc3RvcHBlZCBiZWluZyBjYWxsZWQsIHRoaXMgdGltZW91dCBlbnN1cmVzIHRoYXRcblx0ICogYGNhbGxiYWNrYCBpcyBleGVjdXRlZCBhdCB0aGUgcHJvcGVyIHRpbWVzIGluIGB0aHJvdHRsZWAgYW5kIGBlbmRgXG5cdCAqIGRlYm91bmNlIG1vZGVzLlxuXHQgKi9cblx0bGV0IHRpbWVvdXRJRDtcblx0bGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuXG5cdC8vIEtlZXAgdHJhY2sgb2YgdGhlIGxhc3QgdGltZSBgY2FsbGJhY2tgIHdhcyBleGVjdXRlZC5cblx0bGV0IGxhc3RFeGVjID0gMDtcblxuXHQvLyBGdW5jdGlvbiB0byBjbGVhciBleGlzdGluZyB0aW1lb3V0XG5cdGZ1bmN0aW9uIGNsZWFyRXhpc3RpbmdUaW1lb3V0KCkge1xuXHRcdGlmICh0aW1lb3V0SUQpIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0SUQpO1xuXHRcdH1cblx0fVxuXG5cdC8vIEZ1bmN0aW9uIHRvIGNhbmNlbCBuZXh0IGV4ZWNcblx0ZnVuY3Rpb24gY2FuY2VsKG9wdGlvbnMpIHtcblx0XHRjb25zdCB7IHVwY29taW5nT25seSA9IGZhbHNlIH0gPSBvcHRpb25zIHx8IHt9O1xuXHRcdGNsZWFyRXhpc3RpbmdUaW1lb3V0KCk7XG5cdFx0Y2FuY2VsbGVkID0gIXVwY29taW5nT25seTtcblx0fVxuXG5cdC8qXG5cdCAqIFRoZSBgd3JhcHBlcmAgZnVuY3Rpb24gZW5jYXBzdWxhdGVzIGFsbCBvZiB0aGUgdGhyb3R0bGluZyAvIGRlYm91bmNpbmdcblx0ICogZnVuY3Rpb25hbGl0eSBhbmQgd2hlbiBleGVjdXRlZCB3aWxsIGxpbWl0IHRoZSByYXRlIGF0IHdoaWNoIGBjYWxsYmFja2Bcblx0ICogaXMgZXhlY3V0ZWQuXG5cdCAqL1xuXHRmdW5jdGlvbiB3cmFwcGVyKC4uLmFyZ3VtZW50c18pIHtcblx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0bGV0IGVsYXBzZWQgPSBEYXRlLm5vdygpIC0gbGFzdEV4ZWM7XG5cblx0XHRpZiAoY2FuY2VsbGVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gRXhlY3V0ZSBgY2FsbGJhY2tgIGFuZCB1cGRhdGUgdGhlIGBsYXN0RXhlY2AgdGltZXN0YW1wLlxuXHRcdGZ1bmN0aW9uIGV4ZWMoKSB7XG5cdFx0XHRsYXN0RXhlYyA9IERhdGUubm93KCk7XG5cdFx0XHRjYWxsYmFjay5hcHBseShzZWxmLCBhcmd1bWVudHNfKTtcblx0XHR9XG5cblx0XHQvKlxuXHRcdCAqIElmIGBkZWJvdW5jZU1vZGVgIGlzIHRydWUgKGF0IGJlZ2luKSB0aGlzIGlzIHVzZWQgdG8gY2xlYXIgdGhlIGZsYWdcblx0XHQgKiB0byBhbGxvdyBmdXR1cmUgYGNhbGxiYWNrYCBleGVjdXRpb25zLlxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGNsZWFyKCkge1xuXHRcdFx0dGltZW91dElEID0gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdGlmICghbm9MZWFkaW5nICYmIGRlYm91bmNlTW9kZSAmJiAhdGltZW91dElEKSB7XG5cdFx0XHQvKlxuXHRcdFx0ICogU2luY2UgYHdyYXBwZXJgIGlzIGJlaW5nIGNhbGxlZCBmb3IgdGhlIGZpcnN0IHRpbWUgYW5kXG5cdFx0XHQgKiBgZGVib3VuY2VNb2RlYCBpcyB0cnVlIChhdCBiZWdpbiksIGV4ZWN1dGUgYGNhbGxiYWNrYFxuXHRcdFx0ICogYW5kIG5vTGVhZGluZyAhPSB0cnVlLlxuXHRcdFx0ICovXG5cdFx0XHRleGVjKCk7XG5cdFx0fVxuXG5cdFx0Y2xlYXJFeGlzdGluZ1RpbWVvdXQoKTtcblxuXHRcdGlmIChkZWJvdW5jZU1vZGUgPT09IHVuZGVmaW5lZCAmJiBlbGFwc2VkID4gZGVsYXkpIHtcblx0XHRcdGlmIChub0xlYWRpbmcpIHtcblx0XHRcdFx0Lypcblx0XHRcdFx0ICogSW4gdGhyb3R0bGUgbW9kZSB3aXRoIG5vTGVhZGluZywgaWYgYGRlbGF5YCB0aW1lIGhhc1xuXHRcdFx0XHQgKiBiZWVuIGV4Y2VlZGVkLCB1cGRhdGUgYGxhc3RFeGVjYCBhbmQgc2NoZWR1bGUgYGNhbGxiYWNrYFxuXHRcdFx0XHQgKiB0byBleGVjdXRlIGFmdGVyIGBkZWxheWAgbXMuXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHRsYXN0RXhlYyA9IERhdGUubm93KCk7XG5cdFx0XHRcdGlmICghbm9UcmFpbGluZykge1xuXHRcdFx0XHRcdHRpbWVvdXRJRCA9IHNldFRpbWVvdXQoZGVib3VuY2VNb2RlID8gY2xlYXIgOiBleGVjLCBkZWxheSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8qXG5cdFx0XHRcdCAqIEluIHRocm90dGxlIG1vZGUgd2l0aG91dCBub0xlYWRpbmcsIGlmIGBkZWxheWAgdGltZSBoYXMgYmVlbiBleGNlZWRlZCwgZXhlY3V0ZVxuXHRcdFx0XHQgKiBgY2FsbGJhY2tgLlxuXHRcdFx0XHQgKi9cblx0XHRcdFx0ZXhlYygpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAobm9UcmFpbGluZyAhPT0gdHJ1ZSkge1xuXHRcdFx0Lypcblx0XHRcdCAqIEluIHRyYWlsaW5nIHRocm90dGxlIG1vZGUsIHNpbmNlIGBkZWxheWAgdGltZSBoYXMgbm90IGJlZW5cblx0XHRcdCAqIGV4Y2VlZGVkLCBzY2hlZHVsZSBgY2FsbGJhY2tgIHRvIGV4ZWN1dGUgYGRlbGF5YCBtcyBhZnRlciBtb3N0XG5cdFx0XHQgKiByZWNlbnQgZXhlY3V0aW9uLlxuXHRcdFx0ICpcblx0XHRcdCAqIElmIGBkZWJvdW5jZU1vZGVgIGlzIHRydWUgKGF0IGJlZ2luKSwgc2NoZWR1bGUgYGNsZWFyYCB0byBleGVjdXRlXG5cdFx0XHQgKiBhZnRlciBgZGVsYXlgIG1zLlxuXHRcdFx0ICpcblx0XHRcdCAqIElmIGBkZWJvdW5jZU1vZGVgIGlzIGZhbHNlIChhdCBlbmQpLCBzY2hlZHVsZSBgY2FsbGJhY2tgIHRvXG5cdFx0XHQgKiBleGVjdXRlIGFmdGVyIGBkZWxheWAgbXMuXG5cdFx0XHQgKi9cblx0XHRcdHRpbWVvdXRJRCA9IHNldFRpbWVvdXQoXG5cdFx0XHRcdGRlYm91bmNlTW9kZSA/IGNsZWFyIDogZXhlYyxcblx0XHRcdFx0ZGVib3VuY2VNb2RlID09PSB1bmRlZmluZWQgPyBkZWxheSAtIGVsYXBzZWQgOiBkZWxheVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHR3cmFwcGVyLmNhbmNlbCA9IGNhbmNlbDtcblxuXHQvLyBSZXR1cm4gdGhlIHdyYXBwZXIgZnVuY3Rpb24uXG5cdHJldHVybiB3cmFwcGVyO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWZpbmVkICovXG5cbmltcG9ydCB0aHJvdHRsZSBmcm9tICcuL3Rocm90dGxlLmpzJztcblxuLyoqXG4gKiBEZWJvdW5jZSBleGVjdXRpb24gb2YgYSBmdW5jdGlvbi4gRGVib3VuY2luZywgdW5saWtlIHRocm90dGxpbmcsXG4gKiBndWFyYW50ZWVzIHRoYXQgYSBmdW5jdGlvbiBpcyBvbmx5IGV4ZWN1dGVkIGEgc2luZ2xlIHRpbWUsIGVpdGhlciBhdCB0aGVcbiAqIHZlcnkgYmVnaW5uaW5nIG9mIGEgc2VyaWVzIG9mIGNhbGxzLCBvciBhdCB0aGUgdmVyeSBlbmQuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5IC0gICAgICAgICAgICAgICBBIHplcm8tb3ItZ3JlYXRlciBkZWxheSBpbiBtaWxsaXNlY29uZHMuIEZvciBldmVudCBjYWxsYmFja3MsIHZhbHVlcyBhcm91bmQgMTAwIG9yIDI1MCAob3IgZXZlbiBoaWdoZXIpIGFyZSBtb3N0IHVzZWZ1bC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gICAgICAgICAgQSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBhZnRlciBkZWxheSBtaWxsaXNlY29uZHMuIFRoZSBgdGhpc2AgY29udGV4dCBhbmQgYWxsIGFyZ3VtZW50cyBhcmUgcGFzc2VkIHRocm91Z2gsIGFzLWlzLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYGNhbGxiYWNrYCB3aGVuIHRoZSBkZWJvdW5jZWQtZnVuY3Rpb24gaXMgZXhlY3V0ZWQuXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIC0gICAgICAgICAgIEFuIG9iamVjdCB0byBjb25maWd1cmUgb3B0aW9ucy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuYXRCZWdpbl0gLSAgT3B0aW9uYWwsIGRlZmF1bHRzIHRvIGZhbHNlLiBJZiBhdEJlZ2luIGlzIGZhbHNlIG9yIHVuc3BlY2lmaWVkLCBjYWxsYmFjayB3aWxsIG9ubHkgYmUgZXhlY3V0ZWQgYGRlbGF5YCBtaWxsaXNlY29uZHNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyIHRoZSBsYXN0IGRlYm91bmNlZC1mdW5jdGlvbiBjYWxsLiBJZiBhdEJlZ2luIGlzIHRydWUsIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWQgb25seSBhdCB0aGUgZmlyc3QgZGVib3VuY2VkLWZ1bmN0aW9uIGNhbGwuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoQWZ0ZXIgdGhlIHRocm90dGxlZC1mdW5jdGlvbiBoYXMgbm90IGJlZW4gY2FsbGVkIGZvciBgZGVsYXlgIG1pbGxpc2Vjb25kcywgdGhlIGludGVybmFsIGNvdW50ZXIgaXMgcmVzZXQpLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBuZXcsIGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGRlbGF5LCBjYWxsYmFjaywgb3B0aW9ucykge1xuXHRjb25zdCB7IGF0QmVnaW4gPSBmYWxzZSB9ID0gb3B0aW9ucyB8fCB7fTtcblx0cmV0dXJuIHRocm90dGxlKGRlbGF5LCBjYWxsYmFjaywgeyBkZWJvdW5jZU1vZGU6IGF0QmVnaW4gIT09IGZhbHNlIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vZm9ybXNcIjtcbmltcG9ydCBcIi4vbW9kYWxzXCI7XG5pbXBvcnQgXCIuL3Njcm9sbHNcIjtcbmltcG9ydCBcIi4vYWNjb3JkaW9uXCI7XG5pbXBvcnQgeyB0aHJvdHRsZSB9IGZyb20gJ3Rocm90dGxlLWRlYm91bmNlJztcblxuY29uc3QgcmVtb3ZlRm9jdXNhYmxlTGlzdGVuZXIgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJwYWdlLWZvY3VzYWJsZVwiKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUZvY3VzYWJsZUxpc3RlbmVyKTtcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gIFwia2V5dXBcIixcbiAgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSA5KSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QuYWRkKFwicGFnZS1mb2N1c2FibGVcIik7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlRm9jdXNhYmxlTGlzdGVuZXIpO1xuICAgIH1cbiAgfSxcbiAgZmFsc2Vcbik7XG5cbmNvbnN0IGRheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VjdGlvbi1zY2hlZHVsZV9fZGF5cy12YWx1ZScpIHx8IFtdXG5sZXQgbWF4V2lkdGggPSAwXG5kYXlzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgbWF4V2lkdGggPSBNYXRoLm1heChtYXhXaWR0aCwgaXRlbS5vZmZzZXRXaWR0aClcbn0pXG5kYXlzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgaXRlbS5zdHlsZS53aWR0aCA9IGAke21heFdpZHRofXB4YFxufSlcblxuY29uc3QgbWVudVRvZ2dsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucy1oZWFkZXJfX21lbnUtdG9nZ2xlJykgfHwgW11cbm1lbnVUb2dnbGVzLmZvckVhY2goKG1lbnVUb2dnbGUpID0+IHtcbiAgY29uc3QgbWVudSA9IG1lbnVUb2dnbGUuY2xvc2VzdCgnLnMtaGVhZGVyX19tZW51JylcbiAgbWVudVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ3MtaGVhZGVyX19tZW51X29wZW5lZCcpXG4gIH0pXG59KVxuIl0sIm5hbWVzIjpbImZhY3RvcnkiLCJtb2R1bGUiLCJleHBvcnRzIiwid2luZG93IiwiaW50bFRlbElucHV0IiwidW5kZWZpbmVkIiwiYWxsQ291bnRyaWVzIiwiaSIsImxlbmd0aCIsImMiLCJuYW1lIiwiaXNvMiIsImRpYWxDb2RlIiwicHJpb3JpdHkiLCJhcmVhQ29kZXMiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiYXJndW1lbnRzIiwic291cmNlIiwiT2JqZWN0Iiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJwdXNoIiwiYXBwbHkiLCJmaWx0ZXIiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiZm9yRWFjaCIsImtleSIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsInZhbHVlIiwiX3RvUHJvcGVydHlLZXkiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwicHJvcHMiLCJkZXNjcmlwdG9yIiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiYXJnIiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwiaW5wdXQiLCJoaW50IiwicHJpbSIsIlN5bWJvbCIsInRvUHJpbWl0aXZlIiwicmVzIiwiY2FsbCIsIk51bWJlciIsImludGxUZWxJbnB1dEdsb2JhbHMiLCJnZXRJbnN0YW5jZSIsImlkIiwiZ2V0QXR0cmlidXRlIiwiaW5zdGFuY2VzIiwiZG9jdW1lbnRSZWFkeSIsImRvY3VtZW50IiwicmVhZHlTdGF0ZSIsImRlZmF1bHRzIiwiYWxsb3dEcm9wZG93biIsImF1dG9JbnNlcnREaWFsQ29kZSIsImF1dG9QbGFjZWhvbGRlciIsImN1c3RvbUNvbnRhaW5lciIsImN1c3RvbVBsYWNlaG9sZGVyIiwiZHJvcGRvd25Db250YWluZXIiLCJleGNsdWRlQ291bnRyaWVzIiwiZm9ybWF0T25EaXNwbGF5IiwiZ2VvSXBMb29rdXAiLCJoaWRkZW5JbnB1dCIsImluaXRpYWxDb3VudHJ5IiwibG9jYWxpemVkQ291bnRyaWVzIiwibmF0aW9uYWxNb2RlIiwib25seUNvdW50cmllcyIsInBsYWNlaG9sZGVyTnVtYmVyVHlwZSIsInByZWZlcnJlZENvdW50cmllcyIsInNlcGFyYXRlRGlhbENvZGUiLCJzaG93RmxhZ3MiLCJ1dGlsc1NjcmlwdCIsInJlZ2lvbmxlc3NOYW5wTnVtYmVycyIsImZvckVhY2hQcm9wIiwiY2FsbGJhY2siLCJmb3JFYWNoSW5zdGFuY2UiLCJtZXRob2QiLCJJdGkiLCJvcHRpb25zIiwiX3RoaXMiLCJ0ZWxJbnB1dCIsImFjdGl2ZUl0ZW0iLCJoaWdobGlnaHRlZEl0ZW0iLCJjdXN0b21PcHRpb25zIiwiaGFzT3duUHJvcGVydHkiLCJoYWRJbml0aWFsUGxhY2Vob2xkZXIiLCJCb29sZWFuIiwiX2luaXQiLCJfdGhpczIiLCJmb3JjZVNob3dGbGFncyIsImlzTW9iaWxlIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJpc1JUTCIsImNsb3Nlc3QiLCJQcm9taXNlIiwiYXV0b0NvdW50cnlQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc29sdmVBdXRvQ291bnRyeVByb21pc2UiLCJyZWplY3RBdXRvQ291bnRyeVByb21pc2UiLCJ1dGlsc1NjcmlwdFByb21pc2UiLCJyZXNvbHZlVXRpbHNTY3JpcHRQcm9taXNlIiwicmVqZWN0VXRpbHNTY3JpcHRQcm9taXNlIiwicHJvbWlzZSIsImFsbCIsInNlbGVjdGVkQ291bnRyeURhdGEiLCJfcHJvY2Vzc0NvdW50cnlEYXRhIiwiX2dlbmVyYXRlTWFya3VwIiwiX3NldEluaXRpYWxTdGF0ZSIsIl9pbml0TGlzdGVuZXJzIiwiX2luaXRSZXF1ZXN0cyIsIl9wcm9jZXNzQWxsQ291bnRyaWVzIiwiX3Byb2Nlc3NDb3VudHJ5Q29kZXMiLCJfcHJvY2Vzc1ByZWZlcnJlZENvdW50cmllcyIsIl90cmFuc2xhdGVDb3VudHJpZXNCeUxvY2FsZSIsImNvdW50cmllcyIsInNvcnQiLCJfY291bnRyeU5hbWVTb3J0IiwiX2FkZENvdW50cnlDb2RlIiwiY291bnRyeUNvZGUiLCJjb3VudHJ5Q29kZU1heExlbiIsImNvdW50cnlDb2RlcyIsImluZGV4IiwibG93ZXJDYXNlT25seUNvdW50cmllcyIsIm1hcCIsImNvdW50cnkiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJsb3dlckNhc2VFeGNsdWRlQ291bnRyaWVzIiwiaXNvIiwiYSIsImIiLCJkaWFsQ29kZXMiLCJfaSIsIl9jIiwicm9vdENvdW50cnlDb2RlIiwiaiIsImFyZWFDb2RlIiwiayIsInBhcnRpYWxEaWFsQ29kZSIsInN1YnN0ciIsImNvdW50cnlEYXRhIiwiX2dldENvdW50cnlEYXRhIiwiX2NyZWF0ZUVsIiwiYXR0cnMiLCJjb250YWluZXIiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImhhc0F0dHJpYnV0ZSIsImZvcm0iLCJfdGhpcyRvcHRpb25zIiwicGFyZW50Q2xhc3MiLCJjb25jYXQiLCJ3cmFwcGVyIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsInNob3dGbGFnc0NvbnRhaW5lciIsImZsYWdzQ29udGFpbmVyIiwic2VsZWN0ZWRGbGFnIiwicm9sZSIsInNlbGVjdGVkRmxhZ0lubmVyIiwiZGlzYWJsZWQiLCJzZWxlY3RlZERpYWxDb2RlIiwiZHJvcGRvd25BcnJvdyIsImNvdW50cnlMaXN0IiwiX2FwcGVuZExpc3RJdGVtcyIsImRyb3Bkb3duIiwiaGlkZGVuSW5wdXROYW1lIiwibGFzdEluZGV4T2YiLCJ0eXBlIiwiY2xhc3NOYW1lIiwicHJlZmVycmVkIiwidG1wIiwiaWRTdWZmaXgiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJhdHRyaWJ1dGVWYWx1ZSIsImlucHV0VmFsdWUiLCJ1c2VBdHRyaWJ1dGUiLCJjaGFyQXQiLCJ2YWwiLCJfZ2V0RGlhbENvZGUiLCJpc1JlZ2lvbmxlc3NOYW5wIiwiX2lzUmVnaW9ubGVzc05hbnAiLCJfdGhpcyRvcHRpb25zMiIsIl91cGRhdGVGbGFnRnJvbU51bWJlciIsIl9zZXRGbGFnIiwiZGVmYXVsdENvdW50cnkiLCJfdXBkYXRlVmFsRnJvbU51bWJlciIsIl9pbml0S2V5TGlzdGVuZXJzIiwiX2luaXRCbHVyTGlzdGVuZXJzIiwiX2luaXREcm9wZG93bkxpc3RlbmVycyIsIl9pbml0SGlkZGVuSW5wdXRMaXN0ZW5lciIsIl90aGlzMyIsIl9oYW5kbGVIaWRkZW5JbnB1dFN1Ym1pdCIsImdldE51bWJlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJfZ2V0Q2xvc2VzdExhYmVsIiwidGFnTmFtZSIsIl90aGlzNCIsIl9oYW5kbGVMYWJlbENsaWNrIiwiZSIsImNvbnRhaW5zIiwiZm9jdXMiLCJwcmV2ZW50RGVmYXVsdCIsImxhYmVsIiwiX2hhbmRsZUNsaWNrU2VsZWN0ZWRGbGFnIiwicmVhZE9ubHkiLCJfc2hvd0Ryb3Bkb3duIiwiX2hhbmRsZUZsYWdzQ29udGFpbmVyS2V5ZG93biIsImlzRHJvcGRvd25IaWRkZW4iLCJzdG9wUHJvcGFnYXRpb24iLCJfY2xvc2VEcm9wZG93biIsIl90aGlzNSIsImludGxUZWxJbnB1dFV0aWxzIiwibG9hZFV0aWxzIiwiX2xvYWRBdXRvQ291bnRyeSIsImF1dG9Db3VudHJ5IiwiaGFuZGxlQXV0b0NvdW50cnkiLCJzdGFydGVkTG9hZGluZ0F1dG9Db3VudHJ5Iiwic2V0VGltZW91dCIsIl90aGlzNiIsIl9oYW5kbGVLZXl1cEV2ZW50IiwiX3RyaWdnZXJDb3VudHJ5Q2hhbmdlIiwiX2hhbmRsZUNsaXBib2FyZEV2ZW50IiwiX2NhcCIsIm51bWJlciIsIm1heCIsIl90aGlzNyIsIl9oYW5kbGVTdWJtaXRPckJsdXJFdmVudCIsIl9yZW1vdmVFbXB0eURpYWxDb2RlIiwibnVtZXJpYyIsIl9nZXROdW1lcmljIiwicyIsInJlcGxhY2UiLCJfdHJpZ2dlciIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsInJlbW92ZSIsIl9zZXREcm9wZG93blBvc2l0aW9uIiwiX2hpZ2hsaWdodExpc3RJdGVtIiwiX3Njcm9sbFRvIiwiX2JpbmREcm9wZG93bkxpc3RlbmVycyIsIl90b2dnbGVDbGFzcyIsInNob3VsZEhhdmVDbGFzcyIsIl90aGlzOCIsInBvcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpbmRvd1RvcCIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwiaW5wdXRUb3AiLCJ0b3AiLCJkcm9wZG93bkhlaWdodCIsIm9mZnNldEhlaWdodCIsImRyb3Bkb3duRml0c0JlbG93IiwiaW5uZXJIZWlnaHQiLCJkcm9wZG93bkZpdHNBYm92ZSIsImV4dHJhVG9wIiwic3R5bGUiLCJsZWZ0Iiwic2Nyb2xsTGVmdCIsIl9oYW5kbGVXaW5kb3dTY3JvbGwiLCJfZ2V0Q2xvc2VzdExpc3RJdGVtIiwiX3RoaXM5IiwiX2hhbmRsZU1vdXNlb3ZlckNvdW50cnlMaXN0IiwibGlzdEl0ZW0iLCJfaGFuZGxlQ2xpY2tDb3VudHJ5TGlzdCIsIl9zZWxlY3RMaXN0SXRlbSIsImlzT3BlbmluZyIsIl9oYW5kbGVDbGlja09mZlRvQ2xvc2UiLCJxdWVyeSIsInF1ZXJ5VGltZXIiLCJfaGFuZGxlS2V5ZG93bk9uRHJvcGRvd24iLCJfaGFuZGxlVXBEb3duS2V5IiwiX2hhbmRsZUVudGVyS2V5IiwiY2xlYXJUaW1lb3V0IiwiX3NlYXJjaEZvckNvdW50cnkiLCJuZXh0IiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm5leHRFbGVtZW50U2libGluZyIsIl9zdGFydHNXaXRoIiwicXVlcnlTZWxlY3RvciIsIm9yaWdpbmFsTnVtYmVyIiwidXNlTmF0aW9uYWwiLCJfaW50bFRlbElucHV0VXRpbHMkbnUiLCJudW1iZXJGb3JtYXQiLCJOQVRJT05BTCIsIklOVEVSTkFUSU9OQUwiLCJmb3JtYXQiLCJmb3JtYXROdW1iZXIiLCJfYmVmb3JlU2V0TnVtYmVyIiwiaXNOYW5wIiwiYWxyZWFkeVNlbGVjdGVkIiwiaXNSZWdpb25sZXNzTmFucE51bWJlciIsInNob3VsZEZvY3VzIiwicHJldkl0ZW0iLCJpZ25vcmVPbmx5Q291bnRyaWVzT3B0aW9uIiwiYWxsb3dGYWlsIiwiRXJyb3IiLCJfdGhpcyRvcHRpb25zMyIsInByZXZDb3VudHJ5IiwiX3NldFNlbGVjdGVkQ291bnRyeUZsYWdUaXRsZUF0dHJpYnV0ZSIsImlubmVySFRNTCIsInNlbGVjdGVkRmxhZ1dpZHRoIiwib2Zmc2V0V2lkdGgiLCJfZ2V0SGlkZGVuU2VsZWN0ZWRGbGFnV2lkdGgiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nTGVmdCIsIl91cGRhdGVQbGFjZWhvbGRlciIsIm5leHRJdGVtIiwidGl0bGUiLCJjb250YWluZXJDbG9uZSIsImNsb25lTm9kZSIsInZpc2liaWxpdHkiLCJmbGFnc0NvbnRhaW5lckNsb25lIiwic2VsZWN0ZWRGbGFnQ2xvbmUiLCJ3aWR0aCIsInJlbW92ZUNoaWxkIiwic2hvdWxkU2V0UGxhY2Vob2xkZXIiLCJudW1iZXJUeXBlIiwicGxhY2Vob2xkZXIiLCJnZXRFeGFtcGxlTnVtYmVyIiwiZmxhZ0NoYW5nZWQiLCJfdXBkYXRlRGlhbENvZGUiLCJsZW4iLCJzZXRTZWxlY3Rpb25SYW5nZSIsInJlbW92ZUF0dHJpYnV0ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbGVtZW50IiwibWlkZGxlIiwiY29udGFpbmVySGVpZ2h0IiwiY29udGFpbmVyVG9wIiwiY29udGFpbmVyQm90dG9tIiwiZWxlbWVudEhlaWdodCIsImVsZW1lbnRUb3AiLCJlbGVtZW50Qm90dG9tIiwibmV3U2Nyb2xsVG9wIiwibWlkZGxlT2Zmc2V0IiwiaGVpZ2h0RGlmZmVyZW5jZSIsIm5ld0RpYWxDb2RlQmFyZSIsImlucHV0VmFsIiwibmV3RGlhbENvZGUiLCJuZXdOdW1iZXIiLCJwcmV2RGlhbENvZGUiLCJpbmNsdWRlQXJlYUNvZGUiLCJudW1lcmljQ2hhcnMiLCJpc05hTiIsInBhcnNlSW50IiwiX2dldEZ1bGxOdW1iZXIiLCJ0cmltIiwicHJlZml4IiwibnVtZXJpY1ZhbCIsInN0YXJ0Iiwic2V0Q291bnRyeSIsImhhbmRsZVV0aWxzIiwiZGVzdHJveSIsImdldEV4dGVuc2lvbiIsImdldE51bWJlclR5cGUiLCJnZXRTZWxlY3RlZENvdW50cnlEYXRhIiwiZ2V0VmFsaWRhdGlvbkVycm9yIiwiaXNWYWxpZE51bWJlciIsImlzUG9zc2libGVOdW1iZXIiLCJvcmlnaW5hbENvdW50cnlDb2RlIiwic2V0TnVtYmVyIiwic2V0UGxhY2Vob2xkZXJOdW1iZXJUeXBlIiwiZ2V0Q291bnRyeURhdGEiLCJpbmplY3RTY3JpcHQiLCJwYXRoIiwiaGFuZGxlU3VjY2VzcyIsImhhbmRsZUZhaWx1cmUiLCJzY3JpcHQiLCJvbmxvYWQiLCJvbmVycm9yIiwiYXN5bmMiLCJzcmMiLCJzdGFydGVkTG9hZGluZ1V0aWxzU2NyaXB0IiwidmVyc2lvbiIsIml0aSIsInJlcXVpcmUiLCJnbG9iYWwiLCJnbG9iYWxUaGlzIiwic2VsZiIsInN1cHBvcnQiLCJzZWFyY2hQYXJhbXMiLCJpdGVyYWJsZSIsImJsb2IiLCJCbG9iIiwiZm9ybURhdGEiLCJhcnJheUJ1ZmZlciIsImlzRGF0YVZpZXciLCJEYXRhVmlldyIsImlzUHJvdG90eXBlT2YiLCJ2aWV3Q2xhc3NlcyIsImlzQXJyYXlCdWZmZXJWaWV3IiwiQXJyYXlCdWZmZXIiLCJpc1ZpZXciLCJ0b1N0cmluZyIsIm5vcm1hbGl6ZU5hbWUiLCJub3JtYWxpemVWYWx1ZSIsIml0ZXJhdG9yRm9yIiwiaXRlbXMiLCJpdGVyYXRvciIsInNoaWZ0IiwiZG9uZSIsIkhlYWRlcnMiLCJoZWFkZXJzIiwiYXBwZW5kIiwiQXJyYXkiLCJpc0FycmF5IiwiaGVhZGVyIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsIm9sZFZhbHVlIiwiZ2V0IiwiaGFzIiwic2V0IiwidGhpc0FyZyIsInZhbHVlcyIsImVudHJpZXMiLCJjb25zdW1lZCIsImJvZHlVc2VkIiwiZmlsZVJlYWRlclJlYWR5IiwicmVhZGVyIiwicmVzdWx0IiwiZXJyb3IiLCJyZWFkQmxvYkFzQXJyYXlCdWZmZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJyZWFkQmxvYkFzVGV4dCIsInJlYWRBc1RleHQiLCJyZWFkQXJyYXlCdWZmZXJBc1RleHQiLCJidWYiLCJ2aWV3IiwiVWludDhBcnJheSIsImNoYXJzIiwiZnJvbUNoYXJDb2RlIiwiam9pbiIsImJ1ZmZlckNsb25lIiwic2xpY2UiLCJieXRlTGVuZ3RoIiwiYnVmZmVyIiwiQm9keSIsIl9pbml0Qm9keSIsIl9ib2R5SW5pdCIsIl9ib2R5VGV4dCIsIl9ib2R5QmxvYiIsIkZvcm1EYXRhIiwiX2JvZHlGb3JtRGF0YSIsIlVSTFNlYXJjaFBhcmFtcyIsIl9ib2R5QXJyYXlCdWZmZXIiLCJyZWplY3RlZCIsImlzQ29uc3VtZWQiLCJieXRlT2Zmc2V0IiwidGhlbiIsInRleHQiLCJkZWNvZGUiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwibWV0aG9kcyIsIm5vcm1hbGl6ZU1ldGhvZCIsInVwY2FzZWQiLCJ0b1VwcGVyQ2FzZSIsIlJlcXVlc3QiLCJ1cmwiLCJjcmVkZW50aWFscyIsIm1vZGUiLCJzaWduYWwiLCJyZWZlcnJlciIsImNhY2hlIiwicmVQYXJhbVNlYXJjaCIsIkRhdGUiLCJnZXRUaW1lIiwicmVRdWVyeVN0cmluZyIsImNsb25lIiwic3BsaXQiLCJieXRlcyIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcnNlSGVhZGVycyIsInJhd0hlYWRlcnMiLCJwcmVQcm9jZXNzZWRIZWFkZXJzIiwibGluZSIsInBhcnRzIiwiUmVzcG9uc2UiLCJib2R5SW5pdCIsInN0YXR1cyIsIm9rIiwic3RhdHVzVGV4dCIsInJlc3BvbnNlIiwicmVkaXJlY3RTdGF0dXNlcyIsInJlZGlyZWN0IiwiUmFuZ2VFcnJvciIsImxvY2F0aW9uIiwiRE9NRXhjZXB0aW9uIiwiZXJyIiwibWVzc2FnZSIsInN0YWNrIiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJmZXRjaCIsImluaXQiLCJyZXF1ZXN0IiwiYWJvcnRlZCIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwiYWJvcnRYaHIiLCJhYm9ydCIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInJlc3BvbnNlVVJMIiwicmVzcG9uc2VUZXh0Iiwib250aW1lb3V0Iiwib25hYm9ydCIsImZpeFVybCIsImhyZWYiLCJvcGVuIiwid2l0aENyZWRlbnRpYWxzIiwicmVzcG9uc2VUeXBlIiwic2V0UmVxdWVzdEhlYWRlciIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInNlbmQiLCJwb2x5ZmlsbCIsImFjY29yZGlvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWNjb3JkaW9uIiwicm93cyIsInJvdyIsImNvbnRlbnQiLCJ0b2dnbGUiLCJtYXhIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJpbnB1dENsYXNzZXMiLCJwaG9uZUlucHV0cyIsInJ1Iiwia3oiLCJ1YSIsImJ5IiwiJCIsImlucHV0bWFza3MiLCJpbnB1dG1hc2siLCJtYXNrT3B0cyIsImV4dGVuZCIsImxpc3QiLCJsaXN0Q291bnRyaWVzIiwibWFza3NTb3J0IiwibWFza3NMb2FkIiwiaW5wdXRtYXNrUGFyYW1zIiwicGhvbmVDb2RlcyIsImRlZmluaXRpb25zIiwidmFsaWRhdG9yIiwiY2FyZGluYWxpdHkiLCJzaG93TWFza09uSG92ZXIiLCJhdXRvVW5tYXNrIiwiY2xlYXJNYXNrT25Mb3N0Rm9jdXMiLCJvblVuTWFzayIsIm1hc2tlZFZhbHVlIiwidW5tYXNrZWRWYWx1ZSIsIm1hdGNoIiwibGlzdEtleSIsIm1hc2tJc0luaXQiLCJFdmVudCIsImpRdWVyeSIsImFkZE1ldGhvZCIsIm9wdGlvbmFsIiwiaW1hc2siLCJtYXNrZWQiLCJpc0NvbXBsZXRlIiwic3VibWl0Rm9ybSIsImVtYWlsSW5wdXRzIiwic3VjY2VzcyIsInJlc2V0Iiwic2hvd0Vycm9ycyIsImFjdGlvbiIsImFkZENsYXNzIiwicmVzZXRGb3JtIiwiaW5kaXZpZHVhbEZvcm1WYWxpZGF0b3IiLCJ2YWxpZGF0ZSIsInJ1bGVzIiwicmVxdWlyZWQiLCJwaG9uZSIsImFwcHJvdmUiLCJ0ZWxlZ3JhbSIsImRlcGVuZHMiLCJtZXNzYWdlcyIsImVycm9yUGxhY2VtZW50IiwiaGFzQ2xhc3MiLCJpbnNlcnRBZnRlciIsInBhcmVudCIsInByb3AiLCJhZnRlciIsInN1Ym1pdEhhbmRsZXIiLCJmYXFGb3JtVmFsaWRhdG9yIiwiZW1haWwiLCJsYXhFbWFpbCIsImFwcHJvdmVFbCIsImlzVmlzaWJsZSIsImVsZW0iLCJnZXRDbGllbnRSZWN0cyIsIm1vZGFsVG9nZ2xlcyIsIm1vZGFsIiwiZGF0YXNldCIsIm1vZGFsVG9nZ2xlIiwiY2xvc2UiLCJvdXRzaWRlQ2xpY2tMaXN0ZW5lciIsImV2ZW50IiwiaGlkZSIsInJlbW92ZUNsaWNrTGlzdGVuZXIiLCJzaG93IiwidGhyb3R0bGUiLCJzY3JvbGx1cCIsInN0aWNreU1lbnUiLCJzdGlja3lNZW51UG9pbnQiLCJvZmZzZXRUb3AiLCJzY3JvbGxIYW5kbGVyIiwic2Nyb2xsWSIsInNjcm9sbHMiLCJzY3JvbGwiLCJtZW51cyIsIm1lbnUiLCJvZmZzZXQiLCJjc3MiLCJhbmltYXRlIiwiZGVsYXkiLCJfcmVmJG5vVHJhaWxpbmciLCJub1RyYWlsaW5nIiwiX3JlZiRub0xlYWRpbmciLCJub0xlYWRpbmciLCJfcmVmJGRlYm91bmNlTW9kZSIsImRlYm91bmNlTW9kZSIsInRpbWVvdXRJRCIsImNhbmNlbGxlZCIsImxhc3RFeGVjIiwiY2xlYXJFeGlzdGluZ1RpbWVvdXQiLCJjYW5jZWwiLCJfcmVmMiR1cGNvbWluZ09ubHkiLCJ1cGNvbWluZ09ubHkiLCJhcmd1bWVudHNfIiwiX2tleSIsImVsYXBzZWQiLCJub3ciLCJleGVjIiwiY2xlYXIiLCJfcmVmJGF0QmVnaW4iLCJhdEJlZ2luIiwicmVtb3ZlRm9jdXNhYmxlTGlzdGVuZXIiLCJrZXlDb2RlIiwiZGF5cyIsIm1heFdpZHRoIiwiaXRlbSIsIk1hdGgiLCJtZW51VG9nZ2xlcyIsIm1lbnVUb2dnbGUiXSwic291cmNlUm9vdCI6IiJ9