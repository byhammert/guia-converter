const Reader = require("./Reader");
const Processor = require("./Processor");
const Writer = require("./Writer")
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const PDFWriter = require("./PDFWriter");


var reader = new Reader();
var writer =  new Writer();


async function main() {
    var datas = await reader.read("./users.csv");
    
    var processedData = Processor.process(datas);

    var userTable = new Table(processedData);

    var html = await HtmlParser.parser(userTable);

    writer.write(Date.now() + ".html", html);

    PDFWriter.writePDF(Date.now()+ ".pdf", html);
}

main();