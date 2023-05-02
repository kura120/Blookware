// Bookmarks buttons

let x = new XMLHttpRequest();
x.open("GET", "./src/minified.js", true);
x.responseType = "text";

x.onload = () => {
    if (x.readyState === x.DONE) {
        if (x.status === 200) {
            document.getElementById("item").href = x.response
        }
    }
};
x.send(null);

// Source checker