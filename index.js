const unoreded = document.querySelector('ul');

fetch("test.xml").then(response => {

    return response.text();

}).then(xmlContent => {


    let parser = new DOMParser();
    let xmlDOM = parser.parseFromString(xmlContent, 'text/xml');
    console.dir(xmlDOM);

    const movies = xmlDOM.querySelectorAll('movie1');

    for (const key of movies) {

        const names = key.querySelectorAll('name');

        for (const x of names) {
            const list = document.createElement('li');
            list.textContent = x.textContent;
            unoreded.append(list);

        }
    }
});





