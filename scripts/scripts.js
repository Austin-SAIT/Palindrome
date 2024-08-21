const input = document.getElementById("input");

function revString(str) {
    return str.split("").reverse().join("");
}

function click() {
    const value = input.value;
    const reverse = revString(value);

    if (value === reverse) {
        alert("Tis' a PALINDROME");
    } else {
        alert("Tis-n't a PALLINDROME");
        alert(reverse);
    }

    input.value="";
}

let btn=document.getElementById ("btn");
btn.addEventListener("click", function() {
    return click();
});