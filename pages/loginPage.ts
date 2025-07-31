import { Page, Locator } from "@playwright/test";

export class LoginPage {
    //main page object
    readonly page: Page;
    //Elements
    private readonly userNameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginBtn: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.userNameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginBtn = page.locator('#login-button');
    }

    //methods i.e. user actions on the current page
    async fillUserName(userName: string){
        await this.userNameInput.fill(userName);
    }

    async fillPassword(password: string){
        await this.passwordInput.fill(password);
    }

    async clickLoginButton(){
        await this.loginBtn.click();
    }

}