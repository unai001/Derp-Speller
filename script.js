const input = document.getElementById("input");
const output = document.getElementById("output");

let inputValue = "";


input.addEventListener("input", function (event) {
    inputValue = event.target.value;
    let result = "";
    for (let i = 0; i < inputValue.length; i++) {
        if (i % 2 === 0) {
            result += inputValue[i].toLowerCase();
        } else {
            result += inputValue[i].toUpperCase();
        }
    }
    output.value = result
});

copyButton.addEventListener('click', function () {
    output.select();
    document.execCommand('copy');
    this.innerText = 'cOpIeD!';
    this.style.backgroundColor = 'rgb(0, 172, 29)';
    window.getSelection().removeAllRanges();
    setTimeout(() => {
        copyButton.innerText = 'cOpY To cLiPbOaRd';
        this.style.backgroundColor = 'rgb(91, 135, 255)';
    }, 2000);
});
