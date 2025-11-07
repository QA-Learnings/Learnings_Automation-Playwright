import { test, expect } from '@playwright/test';

test.only('premiumplay', async ({ page }) => {
  await page.goto('https://dev.l-earnings.com/');
  
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Email or Mobile *' }).click();
  await page.getByRole('textbox', { name: 'Email or Mobile *' }).click();
  await page.getByRole('textbox', { name: 'Email or Mobile *' }).fill('9495739695');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.locator("button[type='submit']").click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.pause();
  await page.getByRole('button', { name: 'Play Now' }).nth(2).click();
  await page.getByRole('button', { name: 'Play Now' }).nth(3).click();
  await page.getByRole('button', { name: 'Start' }).click();
  await page.locator("body > div:nth-child(1) > div:nth-child(3) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > button:nth-child(1)").click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator("body > div:nth-child(1) > div:nth-child(3) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > button:nth-child(1)").click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Previous' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator("body > div:nth-child(1) > div:nth-child(3) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > button:nth-child(2)").click();
  await page.getByRole('button', { name: 'Next' }).click();
 await page.locator("body > div:nth-child(1) > div:nth-child(3) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > button:nth-child(3)").click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  page.locator("body > div:nth-child(1) > div:nth-child(3) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > button:nth-child(4)").click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  //await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Play More — Win ₹1 Lakh' }).click();});

test('trailrun', async ({ page }) => {
  await page.goto('https://dev.l-earnings.com/');
  
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Email or Mobile *' }).click();
  await page.getByRole('textbox', { name: 'Email or Mobile *' }).click();
  await page.getByRole('textbox', { name: 'Email or Mobile *' }).fill('binithambgulf@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.locator("button[type='submit']").click();
  await page.getByRole('button', { name: 'Close' }).click();
 await page.pause();
  await page.getByRole('button', { name: 'Trial Questions' }).click();
  await page.getByRole('button', { name: 'Start' }).click();
  //await page.locator('button[fdprocessedid="fwbtf"]').click();

  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByText('Previous').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator("//body//div//div//div//div//div//div//div//button[2]").click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator("//body//div//div//div//div//div//div//div//button[2]").click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator("//body//div//div//div//div//div//div//div//button[2]").click();
  await page.getByRole('button', { name: 'Next' }).click();
  //await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Preview' }).click();
  await page.getByRole('button', { name: 'Edit Answer' }).nth(1).click();
 

  await page.locator('button:has-text("Submit")').click();
// Wait for modal to appear
await page.waitForSelector('text=You Tried Your Best!');

// Capture the whole message inside the modal
const message = await page.locator('div[role="dialog"]').innerText();

// Print message
console.log("Modal Message:\n", message);


 });
