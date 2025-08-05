import { Page, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class LoginPage extends BasePage{
    //main page object
    readonly page: Page;
    //Elements
    private readonly userNameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginBtn: Locator;

    //constructor
    constructor(page: Page) {
        super();
        this.page = page;
        this.userNameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginBtn = page.locator('#login-button');
    }

    //methods i.e. user actions on the current page
    async isAt() {
        return await this.userNameInput.isVisible();
    }

    async fillUserName(userName: string){
        await this.userNameInput.fill(userName);
    }

    async fillPassword(password: string){
        await this.passwordInput.fill(password);
    }

    async clickLoginButton(){
        await this.loginBtn.click();
    }

    async login(userName: string, password: string){
        await this.fillUserName(userName);
        await this.fillPassword(password);
        await this.clickLoginButton();
    }
}