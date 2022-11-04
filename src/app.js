/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("bexcusa").addEventListener("click", generarexcusa);
  generarexcusa();
};

let generarexcusa = () => {
  let who = ["The dog", "My granma", "His turtle", "My bird"];
  let action = ["ate", "pissed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class!",
    "right in time!",
    " when I finished!",

    "during my lunch!",
    "while I was praying!"
  ];

  let num1 = Math.floor(Math.random() * (who.length - 1));
  let num2 = Math.floor(Math.random() * (action.length - 1));
  let num3 = Math.floor(Math.random() * (what.length - 1));
  let num4 = Math.floor(Math.random() * (when.length - 1));

  let frase =
    who[num1] + " " + action[num2] + " " + what[num3] + " " + when[num4];
  document.querySelector("#excusa").innerHTML = frase;
};
