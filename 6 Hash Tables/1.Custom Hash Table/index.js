class HashTable {
  constructor(size = 5) {
    this.keyMap = new Array(size);
  }

  _hashFunctio(key) {
    let sum = 0;
    const PRIMARY_NUMBER = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const charCode = key.charCodeAt(0) - 96;
      sum = (sum * PRIMARY_NUMBER + charCode) % this.keyMap.length;
    }

    return sum;
  }

  set(key, value) {
    const index = this._hashFunctio(key);
    if(!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value])
    return this;
  }
}

const phoneBook = new HashTable();

console.log(phoneBook.set("Jhon", "333-444-222"))
