function bigify() {
    alert("Hello, world!");
    document.getElementById("textbox").style.fontSize = "24pt";
}

function updateStyle() {
    let textbox = document.getElementById("textbox");
    let fancy = document.getElementById("fancy");

    alert("Style changed!");

    if (fancy.checked) {
        textbox.style.fontWeight = "bold";
        textbox.style.color = "blue";
        textbox.style.textDecoration = "underline";
    } else {
        textbox.style.fontWeight = "normal";
        textbox.style.color = "black";
        textbox.style.textDecoration = "none";
    }
}

function moo() {
    let textbox = document.getElementById("textbox");
    let text = textbox.value;

    text = text.toUpperCase();

    let sentences = text.split(".");
    for (let i = 0; i < sentences.length; i++) {
        let s = sentences[i].trim();
        if (s.length > 0) {
            let words = s.split(" ");
            words[words.length - 1] += "-Moo";
            sentences[i] = words.join(" ");
        }
    }
    textbox.value = sentences.join(". ");
}
