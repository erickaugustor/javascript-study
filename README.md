# javascript-study
:ledger: 💥 My studies about JavaScript, using BabelJs and VanillaJs, and other things about front-end development 
<br>
<br>
<h3>NodeJS</h3>

*O que é NodeJS?*

<p>  A proposta do NodeJS é rodar o JavaScript dentro da própria máquina, algo que só era feito no browser. Um standalone process, são programas autossuficientes, logo, não precisam de um software auxiliar para seu funcionamento (um interpretador).</p>
<br>

 - Um programa escrito em C ou C++, como é o caso do NodeJS, depois de compilado e tornado executável, pode ser chamado de standalone, uma vez que só precisaria de bibliotecas, as quais poderiam ser anexadas fisicamente a ele, através de uma ligação estática. 

<p>  Com a criação do Node, podemos utilizar a sintaxe do JavaScript para manipular arquivos do sistemas, diretórios, criar querys databases e até mesmo criar um serviço web. Essas coisas não eram possíveis no passado, com JavaScript, apenas foram possíveis com o avanço do Node. <i> E isso é possível por conta do V8, que escrito em C++, transforma em linguagem de máquina, por isso o Node é conhecido por ser muito rápido. </i></p>
<br>
<p>  Mas qual a diferença entre JavaScript para browser e Node? Bem, em JavaScript, quando acessamos o escopo global, temos o window que carrega tudo o que temos de acesso. Em Node não temos window, mas temos o global, que é muito semelhante, carregando suas funcionalidades. Em JavaScript temos document, que é sobre a página, onde podemos fazer alterações e manipular o próprio HTML. Em Node não temos document, mas temos process, que são os métodos para o processo que está sendo executado. </p>
  
  
*Por que utilizar NodeJS?*

 - Node usa uma tecnologia <b>non-blocking I/O</b>, é quando você lê algo e escreve, input/output. Isso poderia ser: escrever no banco de dados, realizar mudanças em algum arquivo, ou até mesmo fazer um request para algum seriço de API.
 <br>
<p> A ação de I/O leva tempo, mas agora, non-blocking I/O é muito interessante, isso permite que enquanto um usuário esteja requisitando uma url do google, outro usuários podem requisitar acesso ao banco de dados, tudo isso sem necessariamente estar pronto. <b>As aplicações, geralmente</b>, são escritas da forma <b>blocking</b>, ou seja, sequencial, e quando escrevemos non-blocking code, são executados os serviços, de maneira que não podemos prever e nem assegurar a sequência dos mesmos, logo, seria muito mais rápido. </p>
<br>
<h3>Webpack</h3>

*O que é webpack?*

<p> Um webpack funciona como um empacotador de código para web. Ele se propõe a modularizar sua aplicação, sua principal ideia é de code splitting, onde você diverge seu código em diversos arquivos, para no final convergir em um único arquivo.</p>
<br>
