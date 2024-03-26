'use strict';

function printReport(pages){
    console.log("Creating the report.")
    const sortedPages = sortPages(pages)
    for (const sortedPage in sortedPages){
        const url = sortedPage[0]
        const count = sortedPage[1]
        console.log(`Found ${count} internal links to ${url}`)
    }
        
}

function sortPages(pages){
    const entries = Object.entries(pages)
    entries.sort((a,b) => b[1] - a[1])
    return entries
}

module.exports = {
    printReport,
    sortPages
  }
  