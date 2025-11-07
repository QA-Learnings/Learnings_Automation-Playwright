import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev.l-earnings.com/');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Email or Mobile *' }).click();
  await page.getByRole('textbox', { name: 'Email or Mobile *' }).fill('9495739695');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.locator("button[type='submit']").click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Play Now' }).nth(3).dblclick();
  await page.getByRole('button', { name: 'Play Now' }).nth(4).click();
  await page.getByRole('button', { name: 'Start' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).dblclick();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.goto('https://dev.l-earnings.com/');
});