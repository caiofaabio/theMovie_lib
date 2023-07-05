# theMovie_lib
![Captura de tela 2023-07-05 175154](https://github.com/caiofaabio/theMovie_lib/assets/109986771/9e5290b3-591d-4559-aa87-01a24fdc22aa)

Este é um aplicativo de busca de filmes que utiliza a API do The Movie DB para obter informações sobre filmes. O aplicativo é construído com React e utiliza o React Router DOM para roteamento e navegação.

## Tecnologias utilizadas

- React: Uma biblioteca JavaScript para criar interfaces de usuário.
- React Router DOM: Uma extensão do React Router que permite a navegação entre diferentes páginas/componentes em um aplicativo React.
- Themoviedb API: API que fornece informações sobre filmes, como detalhes do filme, elenco, avaliações e muito mais.
- React Icons: Uma biblioteca de ícones para React, que fornece diversos ícones para utilização no aplicativo.
- useState: Um hook do React que permite adicionar estado a um componente funcional.
- useEffect: Um hook do React que permite realizar efeitos colaterais em componentes funcionais, como chamadas a API.

## Componente Home

O componente `Home` é responsável por exibir os melhores filmes. Ele utiliza o hook `useState` para gerenciar o estado dos filmes exibidos e o hook `useEffect` para realizar a chamada à API do The Movie DB e obter os dados dos filmes.

O componente também utiliza o componente `MovieCard` para renderizar cada filme individualmente.

Além disso, o componente possui a funcionalidade de carregar mais filmes ao clicar no botão "Ver Mais". Quando o botão é clicado, mais filmes são exibidos na lista.

O aplicativo também inclui estilos CSS para a apresentação visual dos componentes.

## Configuração das variáveis de ambiente

Para a correta execução do aplicativo, é necessário configurar as variáveis de ambiente. Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis:
- VITE_API_KEY=api_key=cfcf3e89850f6980fb369a7a64a6f234
- VITE_API=https://api.themoviedb.org/3/movie/

Substitua `<URL da API do The Movie DB>` pela URL da API do The Movie DB e `<Chave de API do The Movie DB>` pela chave de API fornecida pelo The Movie DB.

Certifique-se de que você possui o Node.js e o npm instalados em sua máquina antes de executar o aplicativo.

## Executando o aplicativo

Para executar o aplicativo localmente, siga as etapas abaixo:

1. Clone este repositório.
2. Navegue até o diretório do projeto no terminal.
3. Execute o comando `npm install` para instalar as dependências do projeto.
4. Execute o comando `npm start` para iniciar o aplicativo.
5. Acesse o aplicativo em seu navegador no endereço `http://localhost:3000`.

---

Este projeto é apenas um exemplo e pode ser personalizado e expandido conforme necessário. Sinta-se à vontade para adicionar mais funcionalidades e estilizar o aplicativo de acordo com suas preferências.

Divirta-se explorando filmes com o aplicativo Movie Search!

