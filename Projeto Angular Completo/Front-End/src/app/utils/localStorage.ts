// tratamento de token vem do backend e tudo que esta aqui vai para a localstorage do browser
export class LocalStorageUtils {
  public obterUsuario() {
    return JSON.parse(localStorage.getItem('devio.user')!);
  }

  public salvarDadosLocaisUsuario(response: any) {
    this.salvarTokenUsuario(response.accessToken);
    this.salvarUsuario(response.userToken);
  }

  public limparDadosLocaisUsuario() {
    localStorage.removeItem('devio.token');
    localStorage.removeItem('devio.user');
  }

  public obterTokenUsuario(): string {
    return localStorage.getItem('devio.token')!;
  }

  public salvarTokenUsuario(token: string) {
    return localStorage.setItem('devio.token', token);
  }

  public salvarUsuario(user: string) {
    return localStorage.setItem('devio.user', JSON.stringify(user));
  }
}
