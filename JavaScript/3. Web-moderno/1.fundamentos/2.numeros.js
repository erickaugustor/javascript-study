const peso1 = 1.0
const peso2 = Number('2.0')

console.log(Number.isInteger(peso1))

const avaliacao1 = 9.782
const avaliacao2 = 5.321
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/(peso1+peso2)
console.log(media)
console.log(media.toFixed(2))
console.log(media.toString())
console.log(media.toString(2)) //binario

console.log(7/0)
console.log("10"/2)
console.log("Show!" * 2)
console.log(0.1 + 0.7)