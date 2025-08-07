import { test, expect } from '@playwright/test';
import {faker} from '@faker-js/faker';
 
test('successfull purchase', async ({ page }) => {
  //Act
  await page.goto('https://www.saucedemo.com/inventory.html');
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('1');
  await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('1');
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill(faker.person.firstName());
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').fill(faker.person.lastName());
  await page.locator('[data-test="lastName"]').press('Tab');
  await page.locator('[data-test="postalCode"]').fill(faker.location.zipCode());
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="pony-express"]')).toBeVisible();
  await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
  await expect(page.locator('[data-test="complete-text"]')).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
});