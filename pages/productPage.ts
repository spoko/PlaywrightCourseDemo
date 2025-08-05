import { Page, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class ProductPage extends BasePage{
    //main page object
    readonly page: Page;
    //Elements
    private readonly pageTitle: Locator;

    //construcotr
    constructor(page: Page) {
        super();
        this.page = page;
       
        this.pageTitle = page.locator('.app_logo');
    }

    async isAt() {
        return await this.pageTitle.isVisible();
    }
    
}