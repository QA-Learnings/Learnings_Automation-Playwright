// // tests/login.spec.js
// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../pages/LoginPage.js';

// test('Login and Logout flow', async ({ page }) => {
//     // Initialize LoginPage object
//     const loginPage = new LoginPage(page);

//     // Navigate and login
//     await loginPage.goto();
   
//     await loginPage.login('qa@l-earnings.com', 'Test@123');
    
//     // Handle profile dialog and logout
    
//     await loginPage.logout();
    
//     // Verify successful logout
//     //await expect(loginPage.signInButton).toBeVisible();
// });

// DATA DRIVEN TESTING
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import loginData from '../data/loginData.json' assert { type: 'json' };

test.describe('Data-driven Login tests', () => {
  for (const data of loginData) {
    test(`Login test - ${data.name}`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.goto();
      const success = await loginPage.login(data.email, data.password);

      if (data.expected === 'success') {
        expect(success, 'Login should be successful').toBeTruthy();
        await loginPage.logout();
      } else {
        expect(success, 'Login should fail').toBeFalsy();
      }
    });
  }
});
