class Table {
    constructor(arr) {
        this.header = arr[0];
        arr.shift(); //remove o primeiro elemento de um array
        this.rows = arr;
    }

    get rowCount() {
        return this.rows.length;
    }

    get columnCount() {
        return this.header.length;
    }
}

module.exports = Table;