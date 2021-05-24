// Example unit test using Jest
// Following tutorial from here: https://www.valentinog.com/blog/jest/

// a unit (in this case a single function) to test
function filterByTerm(inputArr, searchTerm) {
    const regex = new RegExp(searchTerm, "i");
    return inputArr.filter(function(arrayElement) {
      return arrayElement.url.match(regex);
    });
}

// tests
describe("Filter function", () => {
    const input = [
        { id: 1, url: "https://www.url1.dev" },
        { id: 2, url: "https://www.url2.dev" },
        { id: 3, url: "https://www.link3.dev" }
    ];

    test("it should filter by a search term (link)", () => {
        const output = [{ id: 3, url: "https://www.link3.dev" }];

        expect(filterByTerm(input, "link")).toEqual(output);
        expect(filterByTerm(input, "LINK")).toEqual(output);
    });
    
    test("filter by search term (url)", () => {
        const output = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" }
        ];

        expect(filterByTerm(input, "uRl")).toEqual(output);
        expect(filterByTerm(input, "UrL")).toEqual(output);
    });

    test("filter by empty search term ('')", () => {
        const output = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        expect(filterByTerm(input, "")).toEqual(output);
    });
});