const { crawlPage } = require('./crawl.js')
const { printReport } = require('./report.js')
const {argv} = require('node:process')

function main(){
  
    if (argv.length < 3){
        console.log("Gimme a url papa.");
        process.exit(1);
    } else if(argv.length > 3){
        console.log("Gimme just one url papa.");
        process.exit(1);
    }
    else{    
        console.log(`Waking up the spiders and directing them to ${argv[2]}`);
    }

    const baseUrl = argv[2];
    pages = crawlPage(baseUrl, baseUrl, {});
    printReport(pages)

}

main()