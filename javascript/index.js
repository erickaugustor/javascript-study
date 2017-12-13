/*
    Estudo de JavaScript: 

    Variáveis sem tipagem!
    Sensitive case!
    Se não atribuir valor para variável: undefined!

    const name = 'hi';
    document.write(name);

    Hoisting:
    Usar a variável antes de coloca, ele coloca para cima todas as declarações de variáveis, e manter a atribuição de valor onde estava definida a variável!

    let a = 1;
    document.write(a);

    O let respeita o escopo da estrutura:

    {
        let b = 2;
    }

    document.write(b);     

    Resultado: undefined!

    Obs: se fosse o var, ele printaria. 

    * const a = 1;
    a constante não muda o valor.

    * Números:
    let num - 1.234;
    let num2 = num.toFixed(2);

    type of num2 é uma string!  :O


    let num1 = 2;
    let num2 = '3';
    document.write(num1/num2);  ele irá realizar a conta, mesmo sendo string
    document.write(num1 + num2); ele irá concaternar, como se fossem strings
    document.write(num1 + Number(num2)); irá somar
    document.write(num1 + +num2); irá somar


    let nome = 'Erick "Legal" ';
    let nome = 'Erick \'Legal\'';

    document.write(nome + '<br>');
    document.write(nome.length + '<br>');
    document.write(nome.charAt(2) + '<br>');
    document.write(nome.substring(0,3) + '<br>'); irá mostrar as 3 primeiras letras da string
    document.write(nome.toLowerCase() + '<br>');
    document.write(nome.toUpperCase() + '<br>');

*/