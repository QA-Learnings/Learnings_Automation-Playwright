import { test, expect } from '@playwright/test';
import { SignupPage } from '../../pages/SignupPage.js';
import signupData from '../../data/signupData.json' assert { type: 'json' };

test.describe('Signup Tests - Data Driven', () => {
  for (const data of Array.isArray(signupData) ? signupData : [signupData]) {
    test(`Sign up with user: ${data.fullName}`, async ({ page }) => {
      const signupPage = new SignupPage(page);

      await signupPage.navigate();
      await signupPage.fillSignupForm(data);
      await signupPage.submitForm();
      await page.pause();
      await signupPage.verifySignup();

      // Example assertion (adjust depending on your app behavior)
      await expect(page).toHaveURL(/verify/);
    });
  }
});
