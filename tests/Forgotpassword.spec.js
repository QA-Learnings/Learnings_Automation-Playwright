import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev.l-earnings.com/');
  await page.pause();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Forgot Password?' }).click();
  await page.getByRole('textbox', { name: 'Enter your registered email' }).click();

  await page.getByRole('textbox', { name: 'Enter your registered email' }).fill('7560866100');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.pause();
  //await page.locator('div').filter({ hasText: 'Enter Your New PasswordEnter' }).nth(3).click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('Test@123');
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('Test@123');

  await page.getByRole('button', { name: 'Reset Password' }).click();
});