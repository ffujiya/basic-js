const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if(Number.isNaN(position) || position<0 || position>this.chain.length-1 || !Number.isInteger(position)) {
      this.chain.length = 0;
      throw new Error('wrong position');
    }
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let s = '( ' + this.chain.map(x => String(x)).join(' )~~( ') + ' )';
    this.chain.length = 0;
    return s;
  }
};

module.exports = chainMaker;
