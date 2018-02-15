const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charCodeAt(5))
console.log(escola.charCodeAt(3)) //tabela ASC/unicode
console.log(escola.indexOf('3'))

//do um ao zero
console.log(escola.substring(1))
//do zero ao tres
console.log(escola.substring(0,3))

console.log('Escola '.concat(escola).concat('!'))
console.log(escola.replace(3,'e'))
