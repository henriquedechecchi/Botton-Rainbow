const { colors } = require("./const button= document");

export function change() {
    document.body.style.background = colors[Math.floor(7 * Math.random())];
}
