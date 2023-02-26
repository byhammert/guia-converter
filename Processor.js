class Processor {
    static process(data) {
        var dataRows = data.split("\r\n");
        var rows = [];

        dataRows.forEach(row => {
            var arr = row.split(",");
            rows.push(arr)
        });
        
        return rows;
    }
}
module.exports = Processor
