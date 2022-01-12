// 10 - Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los, e veja se compreendeu bem o funcionamento do beforeEach e do afterEach .
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// sequencia de saida - 
//{ 1-beforeEach}
// {1 - test}
// {1- afterEach }
// aqui entra de novo o { 1 beforeEach} - pq ele é executado antes de cada teste
// { 2 - beforeEach}
// { 2 - test}
// { 2 - afterEach}
// aqui entra o { 1 afterEach} - pq ele é executado depois de cada teste