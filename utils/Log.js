class Log {
  constructor() {
    console.log('\u001b[0m');
  }

  log(msg) {
    console.log('\u001b[32m' + msg + '\u001b[0m');
  }

  warn(msg) {
    console.log('\u001b[33m' + msg + '\u001b[0m');
  }

  error(msg) {
    console.log('\u001b[31m' + msg + '\u001b[0m');
  }
}

module.exports =  Log;
