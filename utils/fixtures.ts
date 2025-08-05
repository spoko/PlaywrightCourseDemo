import {test as baseTest} from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { ProductPage } from "../pages/productPage";

type Pages = {
    loginPage: LoginPage
    productPage: ProductPage
}

const testPages = baseTest.extend<Pages>({
    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

     productPage: async ({page}, use) => {
        const productPage = new ProductPage(page);
        await use(productPage);
    }
});

export const test = testPages;
export const expect = testPages.expect;