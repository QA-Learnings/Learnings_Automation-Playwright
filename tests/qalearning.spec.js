import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa.l-earnings.com/');
  await page.click('button:has-text("Accept")', { timeout: 5000 }).catch(() => {});

  await page.getByRole('navigation').getByRole('link', { name: 'Home' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'About' }).click();
  await page.getByRole('link', { name: 'Study Material' }).click();
  await page.getByRole('link', { name: 'Contact', exact: true }).click();
  await page.pause();
  await page.getByText('HomeAboutStudy MaterialSmartPlayContactSign InSign Up').click();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Email or Mobile *' }).click();
  await page.getByRole('textbox', { name: 'Email or Mobile *' }).fill('qa@l-earnings.com');
  await page.getByRole('textbox', { name: 'Email or Mobile *' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.locator('//button[contains(text(),"Sign in")]').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'About' }).click();
  await page.getByRole('link', { name: 'Study Material' }).dblclick();
  await page.getByRole('link', { name: 'SmartPlay' }).click();
  await page.getByRole('link', { name: 'Contact', exact: true }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Home' }).click();
  await page.getByRole('button', { name: 'Switch to Light Mode' }).click();
  await page.getByRole('button', { name: 'Switch to Dark Mode' }).click();
  await page.getByRole('button', { name: 'Switch to Light Mode' }).click();
  await page.getByRole('button', { name: 'Leaderboard' }).click();
  await page.getByRole('button', { name: 'Notifications' }).click();
  await page.getByRole('button', { name: 'Notifications' }).click();
  await page.getByRole('button', { name: 'Notifications' }).click();
  await page.getByRole('button', { name: 'Account Settings' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Home' }).click();
});
