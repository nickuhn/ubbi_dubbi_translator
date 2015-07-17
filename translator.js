//let is my extra feature used.
let fs = require('fs');

//ES6 Class
class Translator {
  constructor(englishString) {
    this.englishString = englishString.toLowerCase();
    this.englishSplit = this.englishString.split('');
    this.vowelMap = {a: 0, e: 0, i: 0, o: 0, u: 0, y: 0};
  }
}

//ES6 Class Inheritance
class Ubbi extends Translator {
  constructor(englishString) {
    super(englishString);
    this.ubCount = 0;
    this.ubbiSplit = [];
    this.ubbiString = '';
  }
  joiner() {
    this.ubbiString = this.ubbiSplit.join('');
  }
  makeUbbi(array) {
    for (let i = 0; i < array.length; i++) {
      for (let prop in this.vowelMap) {
        if (array[i] === prop && this.ubbiSplit[i + this.ubCount - 2] !== 'ub') {
          if (array[i] === 'y' && array[i - 1] !== ' ') {
            this.ubbiSplit.push('ub');
            this.ubCount ++;
          } else if (array[i] === 'e'){
            let match = 0;
            if (array[i - 1] === ' ' || array[i - 2] === ' ') {
              this.ubbiSplit.push('ub');
              this.ubCount ++;
              break;
            }
            for (let key in this.vowelMap) {
              match = 0;
              if (array[i-2] === key) {
                match = 1;
                break;
              }
            }
            if (match === 0) {
              this.ubbiSplit.push('ub');
              this.ubCount ++;
            }
          } else if (array[i] !== 'y' && array[i] !== 'e' && this.ubbiSplit[i + this.ubCount - 2] !== 'ub') {
            this.ubbiSplit.push('ub');
            this.ubCount ++;
          }
        }
      }
      this.ubbiSplit.push(array[i]);
    }
  }
}

//ES6 Arrow Function with Default Arguments and a Template String.
//The odd tabbing/whitespace is to align the console log.
let logTranslate = (orig, string, language = 'UBBI DUBBI') => {
  console.log(`ENGLISH: ${orig}`);
  let loading = translating(language);
  loading.next();
  console.log(`loading...`);
  loading.next();
  console.log(`loading...`);
  loading.next();
  console.log(` `);
  console.log(`${language}: ${string}`);
};

//Promisify fs.readFile
let readFilePromise = new Promise( (resolve, reject) => {
  fs.readFile(`${process.argv[2]}`, (err, data) => {
    if (!err) {
      resolve(data);
    } else {
      reject(err);
    }
  });
});

//Not at all contrived Generator
function* translating(language) {
  console.log(`Winding up the gears...`);
  yield null;
  console.log(`Finding a copy of ${language} dictionary`);
  yield(null);
  console.log(`Writing out a response...`);
}

readFilePromise.then((data) => {
  let translateUbbi = new Ubbi(data.toString());
  translateUbbi.makeUbbi(translateUbbi.englishSplit);
  translateUbbi.joiner();
  logTranslate(translateUbbi.englishString, translateUbbi.ubbiString);
}).catch((err) => {
  console.log(err);
});



