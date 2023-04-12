const input = document.getElementById("input");
const output = document.getElementById("output");

let inputValue = "";

const initialWidth = 200;

input.addEventListener("input", function (event) {
    inputValue = event.target.value;

    if (this.offsetWidth <= initialWidth) {
        this.style.width = initialWidth + 'px';
        output.style.width = initialWidth + 'px';
    } else if (this.offsetWidth > initialWidth && this.scrollWidth > this.offsetWidth) {
        this.style.width = (this.scrollWidth + 6) + 'px';
        output.style.width = (this.scrollWidth + 8) + 'px';
    }


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
    this.innerText = 'Copied!';
    this.style.backgroundColor = 'rgb(36, 179, 0)';
    window.getSelection().removeAllRanges();
    setTimeout(() => {
        copyButton.innerText = 'Copy to Clipboard';
        this.style.backgroundColor = 'rgb(91, 135, 255)';
    }, 2000);
});