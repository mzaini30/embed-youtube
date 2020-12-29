const yt = require("./index")
const teks = `
{{ youtube halo }}

kucing {{ youtube hai }}

`
console.log(yt(teks))
