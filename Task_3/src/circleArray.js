class circleArray {
  constructor(...args) {
    this.arr = [];
    for (let idx in args) this.add(args[idx]);
  }

  add(data) {
    this.arr.push(data);
  }

  get(index) {
    let getIndex = (index, length) => {
      while (index > length - 1) index -= length;
      return index;
    };

    if (index > this.arr.length) {
      return this.arr[getIndex(index, this.arr.length)];
    }

    if (index < 0) {
      return this.arr[
        getIndex(Math.abs(this.arr.length + index), this.arr.length)
      ];
    }
  }
}