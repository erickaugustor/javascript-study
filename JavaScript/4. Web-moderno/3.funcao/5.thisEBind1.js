const pessoa = {
    saudacao: 'Bom dia!', 
    falar(){
        console.log(this.saudacao)
    }
    //acessando o atributo do objeto
    //acessando o dono
}

pessoa.falar()


const falar = pessoa.falar
falar() //conflot entre paradigmas:funcional e OO
//falar está em outro contexto 

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
//o bind amarra o objeto, deixa ser o dono