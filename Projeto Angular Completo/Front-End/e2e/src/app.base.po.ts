import { browser, by, element, ExpectedConditions } from 'protractor';
import { TestObject } from 'protractor/built/driverProviders';

export abstract class AppBasePage {
  constructor() {
    browser.driver.manage().window().maximize();
  }

  navegarParaHome() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  navegarViaUrl(url: string) {
    return browser.get(url) as Promise<any>;
  }

  obterElementoXpath(xpath: string) {
    return element(by.xpath(xpath));
  }

  navegarPorLink(link: string) {
    browser
      .wait(ExpectedConditions.elementToBeClickable(element(by.linkText(link))))
      .then(() => {
        return element(by.linkText(link)).click();
      });
  }

  esperar = (milisegundos: number) => {
    browser.sleep(milisegundos);
  };

  /* Login */

  email = element(by.id('email'));
  senha = element(by.id('password'));

  login() {
    this.navegarPorLink('Entrar');
    this.email.sendKeys('teste@Test.com');
    this.senha.sendKeys('Teste@123');
    element(by.id('Login')).click();
    this.esperar(6000);
  }
}
