# Dia 02 (Trabalhando com elementos)

Neste dia aprendi a adicionar e remover tags de uma página com `createElements` e `innerHTML`. Além disso, aprendi mais uma forma de buscar os elementos da página com `querySelector` e `querySelectorAll` na linguagem `JavaScript`.

No conteúdo da Aula, criamos 2 pequenos scripts `JavaScript` que estão na pasta `conteudo_aula`.

Nos exércicios localizados nessa página coloquei em prática os conhecimentos adquiridos em aula e outros adquiridos por pesquisas na Web.

Os requisitos do exercício são:
### Aprofunde seu conhecimento
Imagine que você trabalha em uma agência de viagens e sua liderança informa que você será a pessoa responsável por dar início à nova página inicial (landing page) da empresa.
Seu objetivo nesse novo desafio é criar tags HTML usando a manipulação do DOM com JavaScript. Para isso, utilize a estrutura inicial apresentada a seguir.
Para criar a página inicial da agência de viagens, você deve utilizar apenas código JavaScript, o qual deve ser inserido entre as tags <script> e </script>.
Para dar início à página, você deve criar algumas tags, conforme o passo a passo indicado a seguir:
1. Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;
2. Adicione a tag main com a classe main-content como filho da tag body;
3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
7. Adicione uma imagem com src configurado para valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, e assim por diante. Essa lista deve ser filha do section criado no passo 6;
9. Adicione 3 tags h3, todas filhas do main criado no passo 2.

### Bônus
Suponha que, depois da criação das tags indicadas, sua liderança tenha visualizado a estrutura inicial da página e pedido a você que fizesse as seguintes alterações:
1. Adicione a classe title na tag h1 criada;
2. Adicione a classe description nas 3 tags h3 criadas;
3. Remova a section criada no passo 5 (aquela que possui a classe left-content) por meio da função .removeChild();
4. Centralize a section criada no passo 6 (aquela que possui a classe right-content).
5. Troque a cor de fundo do elemento-pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
6. Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.