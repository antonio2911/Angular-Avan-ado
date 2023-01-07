//pega de forma automatica quando muda de dev para produção para simular use ng s --prod
// tem que ter a mesma estrutura da classe environment.prod.ts
export const environment = {
  production: true,
  apiUrlV1: 'https://localhost:5003/api/v1/',
};
