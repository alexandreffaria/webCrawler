const jsdom = require("jsdom"); 
const {JSDOM} = jsdom

function normalizeURL(url) {
    try {
        parsedURL = new URL(url);
    } catch (error) {
        return `Invalid URL: ${error}`
    }

    let newURL = parsedURL.host.replace("www.", "");

    if (parsedURL.pathname.length > 1){
        newURL += parsedURL.pathname;
    }

    if(newURL.endsWith('/')){
        newURL = newURL.slice(0,-1);
    }
    

    return newURL
}

function getURLsFromHTML(htmlbody, baseURL){
    const links = []

    const dom = new JSDOM(htmlbody);
    allLinks = dom.window.document.querySelectorAll('a');

    for (const link of allLinks){
        if (link.href.slice(0,1) === '/'){
            try {
                links.push(new URL (link.href, baseURL).href)
            } catch (error) {
                console.log(`${error.message}: ${link.href}`)
            }
        }
        else{
            try {
                links.push(new URL (link.href).href)    
            } catch (error) {
                console.log(`${error.message}: ${link.href}`)
            }            
        }
    }
    return links;
}

async function crawlPage(currentLink){
    console.log(`Spiders have reached ${currentLink}`)

    try {
        const response = await fetch(currentLink)
    } catch (error) {
        
    }
    

    if (response.status > 400){
        console.log(`Error above 400: ${response.status}`)
        return
    } else if (response.headers.get('Content-Type').toLowerCase() !== 'text/html; charset=utf-8') {
        console.log(`Does this look like html to you? ${response.headers.get('Content-Type')}`)
        return
    }

    const siteBody = await response.text()
    console.log(siteBody)


}


module.exports = {
    normalizeURL,
    getURLsFromHTML,
    crawlPage,
}