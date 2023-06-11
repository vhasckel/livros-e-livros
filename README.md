
## Hooks da aplicação

- useParams() *react-router-dom*
Usado para acessar parâmetros da URL. Neste caso, para acessar dinamicamente, pelo id, cada produto clicado na tela inicial.

- useState()
Usado para alterar e atualizar o estado da aplicação. Na página do produto usei para criar um **contador** para ser possível a opção de uma quantidade maior que 1 de um mesmo item ao realizar uma possível compra.

- useEffect()
Usado para tratar "side-effects" do código. Aqui, usei para os dados que seriam retornados do localStorage.

- useNavigate() *react-router-dom*
Usado para retornar uma função que permite navegar programaticamente, sendo possível a navegação pelo histórico do react-router. Funciona atribuindo uma variável e essa variável recebe a função retornada pelo useNavigate(), é flexivel e pode ser usado para acessar qualquer lugar do componente. Usada na página 404 para poder retornar a página anterior.

- useLocation() *react-router-dom*
Retorna a localização atual. Útil para executar algum efeito colateral sempre que o local for alterado. Usei no componente **ScrollToTop** para que as páginas sempre carreguem a partir do topo.

## propriedades da aplicação

- localStorage
Usado para persistir dados da aplicação e não serem perdidos ao recarregar a página. Usei para salvar a quantidade de itens selecionados no counter da página do produto.
