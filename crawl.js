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

function getURLsFromHTML(html, baseURL){
    
}

module.exports = {
    normalizeURL,
    getURLsFromHTML,
}