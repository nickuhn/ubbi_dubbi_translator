let fs = require('fs');
let stringToTranslate = 'translate me yellow team!';

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
    for(let i = 0; i < array.length; i++) {
      for(let prop in this.vowelMap) {
        if (array[i] === prop && this.ubbiSplit[i + this.ubCount - 2] !== 'ub') {
          if (array[i] === 'y' && array[i - 1] !== ' ') {
            this.ubbiSplit.push('ub');
            this.ubCount ++;
          } else if (array[i] !== 'y' && this.ubbiSplit[i + this.ubCount - 2] !== 'ub') {
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
  console.log(`ENGLISH: ${orig}
${language}: ${string} `);
}

//Promisify fs.readFile
let readFilePromise = new Promise(function(resolve, reject) {
  fs.readFile(`./englishFile.txt`, function(err, data){
    if (!err) {
      resolve(data);
    } else {
      reject(err);
    }
  });
});

readFilePromise.then((data) => {
  let translateUbbi = new Ubbi(data.toString());
  translateUbbi.makeUbbi(translateUbbi.englishSplit);
  translateUbbi.joiner();
  logTranslate(translateUbbi.englishString, translateUbbi.ubbiString);
});
console.log(`__dirname ${process.argv[2]}`)
//`__dirname ${process.argv[2]}`,




