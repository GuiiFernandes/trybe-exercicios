# Dia 04 (Web Storage)

Neste dia aprendi sobre Web Storage. Web Storage provê mecanismos para que as aplicações web possam salvar dados nos browsers das pessoas. Antes do HTML 5, as aplicações tinham que salvar os dados locais em cookies, que eram enviados para o servidor a cada requisição do browser. Web Storage é mais seguro e tem a capacidade de salvar uma quantidade maior de dados sem afetar o desempenho da página. Ao contrário dos Cookies, o limite de armazenamento é muito maior (pelo menos 5MB), e as informações não são transferidas para o servidor durante as requisições. Web Storage é por origem (por domínio e protocolo). Todas as páginas de uma mesma origem podem salvar e acessar os mesmos dados. Por exemplo, se o domínio betrybe.com salva o dado X no Web Storage, o domínio course.betrybe.com consegue ler esse dado X. Para isso usamos, o objeto `localStorage` ou `sessionStorage`, os métodos `setItem`, `getItem`, entre outros, `JSON.Stringfy` e `JSON.parse` para transformar arrays e objetos.

Nos exércicios localizados nessa página coloquei em prática os conhecimentos adquiridos em aula e outros adquiridos por pesquisas na Web.

Os requisitos do exercício são:
### Aplicando o DOM
Imagine que você é a pessoa responsável por desenvolver uma página que servirá como um leitor de conteúdo escrito em que a pessoa usuária pode escolher as configurações da página.
As pessoas devem ter o poder de alterar:
1. Cor de fundo da tela;
2. Cor do texto;
3. Tamanho da fonte;
4. Espaçamento entre as linhas do texto;
5. Tipo da fonte (Font family).
6. Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.
O conteúdo escrito pode ser uma página de livro, uma reportagem de revista ou uma nota de jornal online. Para que você não tenha que pensar no conteúdo da página.
Arquivos `HTML` e `CSS` já foram passados no exercício.