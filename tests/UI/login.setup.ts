import { test as setup, expect } from '../../utils/fixtures';
import path from 'path';

const authJsonFile = path.join(__dirname, '../../.auth/loggedUser.json')

//login test withour usage of fixture
setup.skip('successfull login', async ({ page }) => {
  //Arrange
  await page.goto('');

  //Act
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  //Assert
  await expect(page.getByText('Swag Labs')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();
  await expect(page.locator('[data-test="inventory-list"]')).toContainText('$9.99');

  //store state of currently logged browser, session, context
  await page.context().storageState({path: authJsonFile});
});

//login test with fixture
setup('succefful login', async ({page, loginPage, productPage}) => {
  //Arrange
  await page.goto('');

  //Act
  await loginPage.login('standard_user', 'secret_sauce');

  //Assert
  expect(await productPage.isAt()).toBe(true);

  //store state of currently logged browser, session, context
  await page.context().storageState({path: authJsonFile});
});