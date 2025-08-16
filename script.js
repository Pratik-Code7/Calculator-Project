let string = "";
let buttons = document.querySelectorAll(".box button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (button.querySelector("i")) {
      string = string.slice(0, -1);
      document.getElementById("input").value = string;
      return;
    }
    let value = e.target.innerText;
    if (value == "=") {
      string = eval(string);
      document.getElementById("input").value = string;
    } else if (value == "C") {
      string = "";
      document.getElementById("input").value = string;
    } else if (value == "") {
      string = string.slice(0, -1);
    } else {
      string += value;
      document.getElementById("input").value = string;
    }
  });
});
