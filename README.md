# Máfia's PUB - Drinks:

- ### [Sobre](#sobre)
- ### [Dependências](#dependencias)
- ### [Instalação](#instalacao)
- ### [Funcionalidades](#funk)
- ### [Considerações](#consideracoes)

***
<h2 id="sobre">💪🏻 Sobre o projeto:</h2>

- O **Máfia's PUB** foi criado a partir da ideia de desenvolver uma **View** para **API** do projeto do módulo passado.
- Para isso utilizamos o **React**, uma bibiblioteca JavaScript para criação de interfaces de usuário em páginas web.

***

<h2 id="dependencias">🔧 Dependências:</h2>

- Para começar, você precisará do **Node** instalado na sua máquina, assim você conseguirá rodar os scripts que é utilzado para baixar as dependências **npm** e inicializar o projeto. Utilize este [link](https://nodejs.org/en/) e baixe a versão **LTS** de acordo com o sistema operacional do seu computador.
Ao terminar a instalação, você pode testar se ocorreu tudo bem usando o comando abaixo, que terá que retornar a versão que foi instalada:

``` powershell
node -v
```
***
- Primeiro, comece com um git clone desse projeto, clicando no botão **Code** aqui no repositório e copiando o link **HTTPS**. Após isso, abra o **Git Bash** na pasta em que você quer manter este projeto. Caso não tenha o **Git**, vá para esse [link](https://git-scm.com/downloads) e instale a último versão para o seu sistema operacional.

``` bash
git clone https://github.com/luizzzabiassi/projeto-modulo5.git
```
***
- Agora que você tem o projeto no seu computador você terá que baixar mais algumas dependências usadas nele. Começando com o **RouterDOM**, que é uma biblioteca de roteamento padrão do **React**. Ele serve como um roteador para gerenciar as URL's das aplicações, quando você precisa navegar por uma aplicação
com várias visualizações.

``` powershell
npm i react-router-dom
```

``` powershell
yarn add react-router-dom
```

- Outra biblioteca, que vai ajudar na estlização é o **styled-components**, junta o CSS com os componentes em **React**, otimizando a experiência do desenvolvedor.
``` powershell
npm i styled-components
```

``` powershell
yarn add styled-components
```
***
<h2 id="instalacao">💻 Instalação do React:</h2>

- Pórem, se você quiser criar o seu projeto **React** do zero, o comando utilizado é o seguinte:

``` powershell
npx create-react-app my-app
```

``` powershell
yarn add create-react-app
```
- O **my-app** é totalmente opcional, ele será o nome da pasta do seu projeto, onde ele irá instalar o **React**, e o **npx** é package runner que já vem no **npm**.
***

<h2 id="funk">🚄 Funcionalidades do projeto:</h2>

- Como foi dito lá em cima, o projeto foi a criação da View de um outro projeto, que foi a criação de uma API, e para isso utilizamos o acrônimo **CRUD** e os métodos responsáveis para **_criar, ler, atualizar e deletar dados_**. Caso você não tenha tanto conhecimento no assunto você pode ler [aqui](https://github.com/Gonary/Pub#readme) o ReadMe da API usada nesse projeto.

1. Na barra de navegação da página, temos a opção de **Drinks** onde foi utlizado o método **GET** e você fará a sua busca pelos drinks que você quiser, seja com e sem álcool.

2. Ainda na barra de navegação temos um botão para mais opções, indo para o **Create**, utilizamos o método **POST** para poder criar novos dados, basta preencher o formulário de acordo com tipo de bebida que você quer inserir, com álcool ou sem.

3. Já na opção **Update**, foi utilizado o método **PUT**, para poder atualizar qualquer dado, seja de uma bebida com álcool ou sem. Basta informar primeiro o **ID** da bebida que você quer alterar, depois disso, o formulário com os campos ficará disponível.

4. Por último, a opção **Delete**, na qual foi usado o método **DELETE**, e como o nome já diz, ele irá deletar o dado no qual pertence ao **ID** informado.
***

<h2 id="consideracoes">🎈 Considerações finais:</h2>

- Você pode conferir o **ID** dos dados e se **API** foi alterado utilizando a página de **Drinks**, para conferir se realmente o dado foi atualizado, deletado ou criado.
- Abaixo está os links dos repositórios de cada projeto de **API** feita no projeto do módulo passado na [Resilia Educação](https://www.resilia.com.br/) e o nome do integrantes desse e do outro projeto:

  1. [Luany](https://github.com/luanyss/PUB-Funcionarios)
  2. [Luiza](https://github.com/luizzzabiassi/projeto-modulo4)
  3. [Lucas](https://github.com/Gonary/Pub)
  4. [Hiensen](https://github.com/hiensenn/Api_Pub-Client)
