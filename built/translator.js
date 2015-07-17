'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var marked0$0 = [translating].map(regeneratorRuntime.mark);

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var fs = require('fs');
var stringToTranslate = 'translate me yellow team!';

//ES6 Class

var Translator = function Translator(englishString) {
  _classCallCheck(this, Translator);

  this.englishString = englishString.toLowerCase();
  this.englishSplit = this.englishString.split('');
  this.vowelMap = { a: 0, e: 0, i: 0, o: 0, u: 0, y: 0 };
};

//ES6 Class Inheritance

var Ubbi = (function (_Translator) {
  _inherits(Ubbi, _Translator);

  function Ubbi(englishString) {
    _classCallCheck(this, Ubbi);

    _get(Object.getPrototypeOf(Ubbi.prototype), 'constructor', this).call(this, englishString);
    this.ubCount = 0;
    this.ubbiSplit = [];
    this.ubbiString = '';
  }

  _createClass(Ubbi, [{
    key: 'joiner',
    value: function joiner() {
      this.ubbiString = this.ubbiSplit.join('');
    }
  }, {
    key: 'makeUbbi',
    value: function makeUbbi(array) {
      for (var i = 0; i < array.length; i++) {
        for (var prop in this.vowelMap) {
          if (array[i] === prop && this.ubbiSplit[i + this.ubCount - 2] !== 'ub') {
            if (array[i] === 'y' && array[i - 1] !== ' ') {
              this.ubbiSplit.push('ub');
              this.ubCount++;
            } else if (array[i] === 'e') {
              var match = 0;
              if (array[i - 1] === ' ' || array[i - 2] === ' ') {
                this.ubbiSplit.push('ub');
                this.ubCount++;
                break;
              }
              for (var key in this.vowelMap) {
                match = 0;
                if (array[i - 2] === key) {
                  match = 1;
                  break;
                }
              }
              if (match === 0) {
                this.ubbiSplit.push('ub');
                this.ubCount++;
              }
            } else if (array[i] !== 'y' && array[i] !== 'e' && this.ubbiSplit[i + this.ubCount - 2] !== 'ub') {
              this.ubbiSplit.push('ub');
              this.ubCount++;
            }
          }
        }
        this.ubbiSplit.push(array[i]);
      }
    }
  }]);

  return Ubbi;
})(Translator);

//ES6 Arrow Function with Default Arguments and a Template String.
//The odd tabbing/whitespace is to align the console log.
var logTranslate = function logTranslate(orig, string) {
  var language = arguments.length <= 2 || arguments[2] === undefined ? 'UBBI DUBBI' : arguments[2];

  console.log('ENGLISH: ' + orig);
  var loading = translating(language);
  loading.next();
  console.log('loading...');
  loading.next();
  console.log('loading...');
  loading.next();
  console.log(' ');
  console.log(language + ': ' + string);
};

//Promisify fs.readFile
var readFilePromise = new Promise(function (resolve, reject) {
  fs.readFile('' + process.argv[2], function (err, data) {
    if (!err) {
      resolve(data);
    } else {
      reject(err);
    }
  });
});

//Not at all contrived Generator
function translating(language) {
  return regeneratorRuntime.wrap(function translating$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        console.log('Winding up the gears...');
        context$1$0.next = 3;
        return null;

      case 3:
        console.log('Finding a copy of ' + language + ' dictionary');
        context$1$0.next = 6;
        return null;

      case 6:
        console.log('Writing out a response...');

      case 7:
      case 'end':
        return context$1$0.stop();
    }
  }, marked0$0[0], this);
}

readFilePromise.then(function (data) {
  var translateUbbi = new Ubbi(data.toString());
  translateUbbi.makeUbbi(translateUbbi.englishSplit);
  translateUbbi.joiner();
  logTranslate(translateUbbi.englishString, translateUbbi.ubbiString);
})['catch'](function (err) {
  console.log(err);
});