class SortedList {
    constructor(items,length) {
      this.items=[];
      this.length=0;
    }
    add(item) {
      this.items.push(item);
      this.items.sort( (a,b) => a-b);
      this.length++;
    }
    get(pos) {
      if ((pos>=this.length) || (pos<0)) {
        throw new Error("OutOfBounds");
      } else {
        return this.items[pos];
      };
    }
    max() {
      if (this.items.length===0) {
        throw new Error("EmptySortedList");
      } else {
      return Math.max(...this.items)
      };
    }
    min() {
      if (this.items.length===0) {
        throw new Error("EmptySortedList");
      } else {
      return Math.min(...this.items)
      };
    }
    average() {
      if (this.items.length===0) {
        throw new Error("EmptySortedList")
      };
      var somme=this.items.reduce( (acc,val) => acc+val);
      return somme/this.items.length;
    }
    sum() {
      if (this.items.length===0) {
        return 0;
      };
      return this.items.reduce( (acc,val) => acc+val);
    }
  };
  
  module.exports = SortedList;