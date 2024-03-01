// let word = "hello hanif";
// console.log(word.length)
// let c = word.split(" ")
// console.log(c.length)
// let a = document.querySelector("#input").innerText

// let words = document.querySelector(".words");
// let char = document.querySelector(".characters");
// words.innerText = a.length + " Words" ;

function count() {


    let input = document.querySelector("#input").value;
    let wordCount = document.querySelector(".words");
    let charCount = document.querySelector(".characters");

    // let words = input.match(/\w+/g);

    let inputString = input.trim();

    // input = input.value.replace(/\s+/g, ' ');
    // let space = replace(/\s+/g, ' ');

    let words = inputString.split(" ");

    let excludeSpace = words.filter(function (e) {
        return e != "";
    })


    // words.innerText.replace(/\s+/g, ' ');

    wordCount.innerText = excludeSpace.length + " Words";
    //    console.log(words.length)
    //    console.log(words)

    //character count
    charCount.innerText = input.length + " Characters";



}



document.querySelector("#input").addEventListener("keyup", count)




