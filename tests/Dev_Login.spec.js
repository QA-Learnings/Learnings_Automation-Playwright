import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test('Dev Login Test - 9495739695', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Navigate to dev site
  await loginPage.goto();

  // Perform login with provided credentials
  const success = await loginPage.login('9495739695', 'Test@123');

  // Assert login succeeded
  expect(success, 'Login should be successful for user 9495739695').toBeTruthy();

  // Attempt logout to clean up session
  await loginPage.logout();
});
