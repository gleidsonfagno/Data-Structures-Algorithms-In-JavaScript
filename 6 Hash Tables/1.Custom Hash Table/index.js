class HashTable {
  constructor(size = 5) {
    this.keyMap = new Array(size);
  }

  _hashFunctio(key) {
    let sum = 0;
    const PRIMARY_NUMBER = 31;

    for (let i = 0; i < Math.min(key.lenght, 100); i++) {
      const charCode = key.charCode(0) - 96;
      sum = (sum * PRIMARY_NUMBER + charCode) % this.keyMap.length;
    }

    return sum
  }
}
