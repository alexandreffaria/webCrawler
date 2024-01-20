const { test, expect } = require('@jest/globals')
const { normalizeURL } = require('./crawl.js')

test("Checking normal url: ", ()=>{
    expect(normalizeURL("https://jestjs.io/docs/getting-started")).toBe("jestjs.io/docs/getting-started")
});

// Test URLs with different protocols.
test("Checking URL with http:", ()=>{
    expect(normalizeURL("http://jestjs.io/docs/getting-started")).toBe("jestjs.io/docs/getting-started")
});

// Test URL with a trailing slash.
test("Checking URL with trailing slash: ", ()=>{
    expect(normalizeURL("https://jestjs.io/docs/getting-started/")).toBe("jestjs.io/docs/getting-started")
});

// Test URL with additional pathname.
test("Checking URL with additional pathname: ", ()=>{
    expect(normalizeURL("https://jestjs.io/docs/getting-started/extra-path")).toBe("jestjs.io/docs/getting-started/extra-path")
});

// Test URL with query strings.
test("Checking URL with query strings: ", ()=>{
    expect(normalizeURL("https://jestjs.io/docs/getting-started?query=value")).toBe("jestjs.io/docs/getting-started")
});

// Test URL with fragment identifier.
test("Checking URL with fragment identifier: ", ()=>{
    expect(normalizeURL("https://jestjs.io/docs/getting-started#section2")).toBe("jestjs.io/docs/getting-started")
});

// Test URL with www.
test("Checking URL with www: ", ()=>{
    expect(normalizeURL("https://www.jestjs.io/docs/getting-started")).toBe("jestjs.io/docs/getting-started")
});

// Test Gibberish input
test("Passing gibberish text: ", ()=>{
    expect(normalizeURL("Goat wizard")).toBe("Invalid URL: TypeError: Invalid URL");
});

