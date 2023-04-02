# Dia 05 (Responsivo Mobile First)

Neste dia aprendi como utilizar media queries para mostrar um layout diferente em tamanhos de tela diferentes, aprendi também o conceito e a importância de se construir páginas "mobile first", além de testar o bootstrap para criar design de páginas responsivas.

No conteúdo da Aula, criamos 1 pequeno código `HTML` e `CSS` que estão na pasta `conteudo-aula`.

Nos exércicios localizados nessa página coloquei em prática os conhecimentos adquiridos em aula e outros adquiridos por pesquisas na Web.

Os requisitos do exercício são:
### Criar página para tela pequena
Comece o exercício analisando a página em uma tela de tamanho pequeno, para simular como ela pode parecer em um dispositivo móvel (você pode usar o Chrome para isso, veja no detalhe aqui).
Ao pensar no design de uma tela pequena primeiro, estamos aplicando a abordagem do mobile first. Fazendo isso, começamos com um design básico (mínimo denominador comum) e então trabalhamos em melhorias mais sofisticadas para os navegadores com funcionalidades avançadas e layouts específicos.
Isso garante que estamos desenvolvendo uma experiência que funcionará para todos. Também tem um efeito colateral: isso também nos ajuda a perceber qual o conteúdo é realmente importante na nossa página.
Agora você vai ajustar o CSS para melhorar a visualização da página.
Realize as seguintes tarefas:
1. Faça o tamanho da fonte ser maior;
2. Faça o tamanho da fonte dos elementos h1 ser menor;
3. Aumente o espaçamento entre as figuras;
4. Adicione um pouco de margin na página.
Bora mexer na responsividade do nosso site? Antes iremos determinar um padrão de tamanho para cada dispositivo.
  > max-width: 600px: Telas de celular. (Mobile devices)
  > min-width: 600px: iPads, Tablets
  > min-width: 768px: Telas menores, laptops
  > min-width: 992px: Desktops
  > min-width: 1200px — Telas grandes, screens e TV.
5. Agora que temos um padrão, vamos criar um breakpoint para telas menores de laptops. Para isso nós podemos consultar nossa tabela acima e utilizar o min-width: 768px e quando tivermos em telas menores que 768px esse estilo não vai ser aplicado. Esse será o primeiro breakpoint do layout. Um breakpoint é apenas um ponto onde estamos definindo que o design atual deve mudar. Ok?
6. Crie uma media query no seu arquivo CSS, usando a dimensão em pixels que você guardou como o min-width que foi apresentado acima.
7. Altere a cor de fundo (isso vai te ajudar a perceber quando a media query teve efeito);
8. Ajuste o tamanho da fonte;
9. Ajuste as margens da página;
10. Faça as imagens serem mostradas em duas colunas.
11. Agora, você vai criar outro breakpoint para telas grandes, como por exemplo, desktops. Para isso você pode consultar novamente nossa tabela com os tamanhos.
12. Crie uma nova media query no seu arquivo CSS usando a dimensão para telas de desktop e realize os seguintes ajustes dentro do breakpoint (aqui podemos usar o tamanho de tela de 992px):
  12.1. Altere a cor de fundo;
  12.2. Ajuste o tamanho da fonte;
  12.3. Ajuste as margens da página;
  12.4. Adicione a propriedade max-width à página, para garantir que a largura das linhas não fique muito grande.

### Criando 3 layouts diferentes utilizando o mobile first
Realize as seguintes tarefas:
1. Utilizando a abordagem mobile first e media queries, crie três versões de layout diferentes para essa página. Cada layout deve corresponder a um tamanho diferente de página (pequeno, médio e grande). Faça pelo menos um commit para cada layout;
2. Para fazer isso de forma adequada, você deve prestar atenção no conteúdo da página e pensar em como mostrá-lo em cada um dos tamanhos de tela:
3. Onde a lista de capítulos deve estar posicionada?
4. Como a história deve ser mostrada?
5. Como o cabeçalho deve ser posicionado?
6. O que fazer com as informações do autor em cada tamanho de tela?
7. Talvez você precise alterar o HTML um pouco, adicionando elementos para facilitar a estilização, ou talvez mudando um bloco de lugar dentro da página.

### Criando layouts para dispositivos móveis e para impressão
Realize as seguintes tarefas:
1. Adicione uma media query no arquivo CSS e as regras necessárias para que a página se pareça com a imagem abaixo quando ela for impressa. Especificamente:
  1.1. Os elementos com id header, navigation e footer devem desaparecer;
  1.2. O elemento com id aside deve ser mostrado abaixo do conteúdo principal.
2. Adicione uma media query no arquivo CSS e as regras necessárias para que a página se pareça com as imagens abaixo quando a tela for redimensionada para larguras menores. Especificamente:
  2.1. O elemento com id aside deve desaparecer;
  2.2. O elemento body não deve ter padding;
  2.3. As imagens não devem exceder a largura da tela;
  2.4. Os itens dentro do elemento navigation devem aparecer cada um em sua própria linha;
  2.5. O elemento com id header deve ser fixo, de forma que ele fique aparecendo sempre no topo da tela, mesmo após a pessoa usuária rolar a página.

### Bônus
Criei um layout responsivo utilizando o framework Bootstrap.
Voltar à pagina que você criou na aula de HTML Semântico sobre o camarão louva deus e criar um layout bem bacana para ela ser acessada a partir de telas menores? 🦐🦗🥊
Sugestão:
1. Crie um layout específico para telas pequenas (smartphones); 📱
2. Crie um layout específico para telas médias (tablets); 📱
3. Crie um layout específico para impressão (impressoras, salvar como PDF, etc). 🖨