import { test as setup, expect } from '@playwright/test';
import path from 'path';

const authJsonFile = path.join(__dirname, '../../.auth/loggedUser.json')

setup('successfull login', async ({ page }) => {
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

  await page.context().storageState({path: authJsonFile});
});