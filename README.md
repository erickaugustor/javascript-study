# javascript-study
:ledger: 💥 My studies about JavaScript, using BabelJs and VanillaJs, and other things about front-end development 

























**NodeJS**

*O que é NodeJS?*

 - A proposta do NodeJS é rodar o JavaScript dentro da própria máquina, algo que só era feito no browser. Um standalone process, são programas autossuficientes, logo, não precisam de um software auxiliar para seu funcionamento (um interpretador). Um programa escrito em C ou C++, como é o caso do NodeJS, depois de compilado e tornado executável, pode ser chamado de standalone, uma vez que só precisaria de bibliotecas, as quais poderiam ser anexadas fisicamente a ele, através de uma ligação estática.  
 - Com a criação do Node, podemos utilizar a sintaxe do JavaScript para manipular arquivos do sistemas, diretórios, criar querys databases e até mesmo criar um serviço web. Essas coisas não eram possíveis no passado, com JavaScript, apenas foram possíveis com o avanço do Node. E isso é possível por conta do V8, que escrito em C++, transforma em linguagem de máquina, por isso o Node é conhecido por ser muito rápido. 
 - Mas qual a diferença entre JavaScript para browser e Node? Bem, em JavaScript, quando acessamos o escopo global, temos o window que carrega tudo o que temos de acesso. Em Node não temos window, mas temos o global, que é muito semelhante, carregando suas funcionalidades. Em JavaScript temos document, que é sobre a página, onde podemos fazer alterações e manipular o próprio HTML. Em Node não temos document, mas temos process, que são os métodos para o processo que está sendo executado. 
  
  
*Por que utilizar NodeJS?*

 - Node usa uma tecnologia non-blocking I/O, é quando você lê algo e escreve, input/output. Isso poderia ser: escrever no banco de dados, realizar mudanças em algum arquivo, ou até mesmo fazer um request para algum seriço de API. A ação de I/O leva tempo, mas agora, non-blocking I/O é muito interessante, isso permite que enquanto um usuário esteja requisitando uma url do google, outro usuários podem requisitar acesso ao banco de dados, tudo isso sem necessariamente estar pronto. As aplicações, geralmente, são escritas da forma blocking, ou seja, sequencial, e quando escrevemos non-blocking code, são executados os serviços, de maneira que não podemos prever e nem assegurar a sequência dos mesmos, logo, seria muito mais rápido. 
  
