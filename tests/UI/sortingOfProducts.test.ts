import { test, expect } from '@playwright/test';
 
test('successfull purchase', async ({ page }) => {

  //Act
  await page.goto('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('[data-test="product-sort-container"]')).toBeVisible();
  await expect(page.locator('.inventory_item_price').first()).toHaveText('$29.99');
  await page.locator('[data-test="product-sort-container"]').selectOption('za');
  
  //Assert
  await expect(page.locator('.inventory_item_price').first()).toContainText('$15.99');
});