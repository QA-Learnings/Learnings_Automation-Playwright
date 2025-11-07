import { expect } from '@playwright/test';

export class SignupPage {
  constructor(page) {
    this.page = page;
    this.signUpButton = page.getByRole('button', { name: 'Sign Up' });
    this.fullNameInput = page.getByRole('textbox', { name: 'Full Name *' });
    this.emailInput = page.getByRole('textbox', { name: 'Email Address' });
    this.mobileInput = page.getByRole('textbox', { name: 'Mobile Number' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password *', exact: true });
    this.confirmPasswordInput = page.getByRole('textbox', { name: 'Confirm Password *' });
    this.termsCheckbox = page.getByRole('checkbox', { name: /I agree to Terms/ });
    this.submitButton = page.getByRole('button', { name: 'Sign up' });
     
    this.verifyButton = page.getByRole('button', { name: 'Verify' });
  }

  async navigate() {
    await this.page.goto('https://dev.l-earnings.com/');
  }

  async fillSignupForm(data) {
    await this.signUpButton.click();
    await this.fullNameInput.fill(data.fullName);
    await this.emailInput.fill(data.email);
    await this.mobileInput.fill(data.mobileNumber);
    await this.passwordInput.fill(data.password);
    await this.confirmPasswordInput.fill(data.password);
    await this.termsCheckbox.check();
  }

  async submitForm() {
    await this.submitButton.click();
  }

  async verifySignup() {
    await this.verifyButton.click();
  }
}
