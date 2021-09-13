let text = document.getElementById("textbox");

text.addEventListener("input", function () {
  let text = this.value;
  document.getElementById("char").innerHTML = text.length;
  let word = text
    .trim()
    .split(" ")
    .filter(function (el) {
      return el != "";
    });
  document.getElementById("word").innerHTML = word.length;
});
