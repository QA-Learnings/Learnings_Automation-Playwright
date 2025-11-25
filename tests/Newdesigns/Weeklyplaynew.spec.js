import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
     await page.goto('https://qa.l-earnings.com/');
    await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Email or Mobile *' }).click();
  await page.getByRole('textbox', { name: 'Email or Mobile *' }).fill('gepisa5882@aikunkun.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.locator("button[type='submit']").click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.pause();
  await page.getByText('Weekly Smartplay', { exact: true }).click();
  await page.locator('#quiz-section').getByRole('button', { name: 'Play Now' }).click();
  await page.getByRole('button', { name: 'Play Now' }).nth(3).click();
  
  await page.getByRole('button', { name: 'Start' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Play More — Win ₹1 Lakh' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Home' }).click();

  // await page.getByRole('button', { name: 'Start' }).click();
  // await page.getByRole('button', { name: 'Next' }).click();
  // await page.getByRole('button', { name: 'Next' }).click();
  // await page.getByRole('button', { name: 'Next' }).click();
  // await page.getByRole('button', { name: 'Previous' }).click();
  // await page.getByRole('button', { name: 'Next' }).click();
  // await page.getByRole('button', { name: 'Next' }).click();
  // await page.getByRole('button', { name: 'Next' }).click();
  // await page.getByRole('button', { name: 'Next' }).click();
  // await page.getByRole('button', { name: 'Next' }).click();
  // await page.getByRole('button', { name: 'Next' }).click();
  // await page.getByRole('button', { name: 'Next' }).click();
  // await page.getByRole('button', { name: 'Preview' }).click();
});