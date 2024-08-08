const { change } = require("./change");

const button= document.getElementById("button");

export const colors = ["red", "orange" , "green", "blue", "purple" , "rebeccapurple"];

button.addEventListener("click",change);
