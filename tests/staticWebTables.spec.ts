import { test, expect } from '@playwright/test';

test('Handling Static WebTable', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');
  await expect(page).toHaveTitle('Automation Testing Practice');

  const rows = page.locator('//table[@name="BookTable"]/tbody/tr');

  const fifthRow = rows.nth(5);

  const price = await fifthRow.locator('td').nth(3).innerText();

  console.log(`Price of Master in Java Book is ${price}`);

  expect(price).toBe('2000');
});

