'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var stringToTranslate = 'translate me yellow team!';

var Translator = function Translator(englishString) {
  _classCallCheck(this, Translator);

  this.englishString = englishString.toLowerCase();
  this.englishSplit = this.englishString.split('');
  this.vowelMap = { a: 0, e: 0, i: 0, o: 0, u: 0, y: 0 };
};

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
            } else if (array[i] !== 'y' && this.ubbiSplit[i + this.ubCount - 2] !== 'ub') {
              this.ubbiSplit.push('ub');
              this.ubCount++;
            }
          }
        }
        this.ubbiSplit.push(array[i]);
      };
    }
  }]);

  return Ubbi;
})(Translator);

var translateUbbi = new Ubbi(stringToTranslate);
translateUbbi.makeUbbi(translateUbbi.englishSplit);
translateUbbi.joiner();
console.log(translateUbbi.ubbiString);