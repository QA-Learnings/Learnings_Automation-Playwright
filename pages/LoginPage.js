// // pages/LoginPage.js
// import { expect } from '@playwright/test';

// export class LoginPage {
//     constructor(page) {
//         this.page = page;
//         this.signInButton = page.getByRole('button', { name: 'Sign In' });
//         this.emailInput = page.getByRole('textbox', { name: 'Email or Mobile *' });
//         this.passwordInput = page.getByRole('textbox', { name: 'Password' });
//         this.submitButton = page.locator("button[type='submit']");
//         this.profileDialog = page.getByRole('dialog', { name: 'Update Your Profile' });
//         this.closeButton = page.getByRole('button', { name: 'Close' });
//         this.accountSettingsButton = page.getByRole('button', { name: 'Account Settings' });
//         this.logoutHeading = page.getByRole('heading', { name: 'Logout' });
//         this.confirmLogoutButton = page.getByRole('button', { name: 'Log Out' });
//     }

//     async goto() {
//         await this.page.goto('https://dev.l-earnings.com/');
//         await expect(this.signInButton).toBeVisible(); // confirm home page loaded
//     }

//     async login(email, password) {
//         await this.signInButton.click();
//         await this.emailInput.fill(email);
//         await this.passwordInput.fill(password);
//         await this.submitButton.click();

//         // Small wait for UI update
//         await this.page.waitForTimeout(2000);

//         // Check if login was successful
//         if (await this.profileDialog.isVisible()) {
//             console.log('✅ Login successful');
//             return true;
//         } else {
//             console.log('❌ Login incorrect');
//             return false;
//         }
//     }

//     async logout() {
//         // Only execute logout if the user is logged in
//         if (await this.profileDialog.isVisible()) {
//             await this.closeButton.click();
//             await this.accountSettingsButton.click();
//             await this.logoutHeading.click();
//             await this.confirmLogoutButton.click();
//             console.log('🔒 Logged out successfully');
//         } else {
//             console.log('⚠️ Skipping logout because login was not successful.');
//         }
//     }
// }
//ddd
// DATA DRIVEN TESTING - REFACTORED LOGINPAGE.JS


import { expect } from '@playwright/test';

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.signInButton = page.getByRole('button', { name: 'Sign In' });
        this.emailInput = page.getByRole('textbox', { name: 'Email or Mobile *' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.submitButton = page.locator("button[type='submit']");
        this.profileDialog = page.getByRole('dialog', { name: 'Update Your Profile' });
        this.closeButton = page.getByRole('button', { name: 'Close' });
        this.accountSettingsButton = page.getByRole('button', { name: 'Account Settings' });
        this.logoutHeading = page.getByRole('heading', { name: 'Logout' });
        this.confirmLogoutButton = page.getByRole('button', { name: 'Log Out' });
    }

    async goto() {
        await this.page.goto('https://dev.l-earnings.com/');
        await expect(this.signInButton).toBeVisible();
    }

    async login(email, password) {
        await this.signInButton.click();
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.submitButton.click();

        // Give the page time to respond
        await this.page.waitForTimeout(2000);

        // Check login success condition
        if (await this.profileDialog.isVisible()) {
            console.log('✅ Login successful');
            return true;
        } else {
            console.log('❌ Login incorrect');
            return false;
        }
    }

    async logout() {
        if (await this.profileDialog.isVisible()) {
            await this.closeButton.click();
            await this.accountSettingsButton.click();
            await this.logoutHeading.click();
            await this.confirmLogoutButton.click();
            console.log('🔒 Logged out successfully');
        } else {
            console.log('⚠️ Skipping logout because login was not successful.');
        }
    }
}
