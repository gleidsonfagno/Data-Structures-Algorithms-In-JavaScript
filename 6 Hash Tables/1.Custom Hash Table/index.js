class HashTable {
  constructor(size = 5) {
    this.keyMap = new Array(size);
  }

  _hashFunction(key) {
    let sum = 0;
    const PRIMARY_NUMBER = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const charCode = key.charCodeAt(0) - 96;
      sum = (sum * PRIMARY_NUMBER + charCode) % this.keyMap.length;
    }

    return sum;
  }

  set(key, value) {
    const index = this._hashFunction(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]);
    return this;
  }

  get(key) {
    const index = this._hashFunction(key);

    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }

    return undefined;
  }

  getAllKeys() {
    const keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keys.push(this.keyMap[i][j][0]);
        }
      }
    }

    return keys;
  }

  getAllValues() {
    const values = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          values.push(this.keyMap[i][j][1]);
        }
      }
    }
    return values;
  }

  remove(key) {
    const index = this._hashFunction(key);

    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        return this.keyMap[index].splice(i, 1);
      }
    }

    return this;
  }
}

const phoneBook = new HashTable();
phoneBook.set("jhon", "333-444-222");
phoneBook.set("jordan", "111-222-333");
phoneBook.set("michel", "666-444-999");
console.log(phoneBook.get("jhon"));
console.log(phoneBook.remove("jordan"));
console.log(phoneBook.getAllKeys());
console.log(phoneBook.getAllValues());
