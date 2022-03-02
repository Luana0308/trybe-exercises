export const INCREMENTAR = 'INCREMENTAR';
export const DECREMENTAR = 'DECREMENTAR';

export const incrementarContador = () => ({
  type: INCREMENTAR
});

export const decrementarContador = () => ({
  type: DECREMENTAR
})