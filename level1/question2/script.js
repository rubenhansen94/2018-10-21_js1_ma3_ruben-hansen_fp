//Console.log out elements in JSON file
// NB: I use live server with node.js in VSCode and are able to console log it without problem in chrome.
// Get the json file:
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var jsonFile = JSON.parse(xhttp.responseText);
        // console.log(jsonFile);
        console.log(jsonFile.video[0].id);
        console.log(jsonFile.video[0].name);
        console.log(jsonFile.video[0].url);
        // console.log(jsonFile.video[0].author);
        console.log(jsonFile.video[0].author.data[0].name_author);
        console.log(jsonFile.video[0].author.data[0].url);
        console.log(jsonFile.video[0].author.data[0].type);
        //var entries = object.entries(jsonFile);
        //console.log(entries);
    }
}

xhttp.open("GET", "author.json", true);
xhttp.send();