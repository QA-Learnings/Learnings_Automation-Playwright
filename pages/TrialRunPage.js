export class TrialRunPage {
constructor(page) {
this.page = page;
this.trialBtn = page.getByRole('button', { name: 'Trial Questions' });
this.startBtn = page.getByRole('button', { name: 'Start' });
this.nextBtn = page.getByRole('button', { name: 'Next' });
this.prevBtn = page.getByRole('button', { name: 'Previous' });
this.previewBtn = page.getByRole('button', { name: 'Preview' });
this.editAnswerBtn = page.getByRole('button', { name: 'Edit Answer' });
this.submitBtn = page.locator('button:has-text("Submit")');
}


option(index) {
return this.page.locator(`//body//div//div//div//div//div//div//div//button[${index}]`);
}


async openTrial() {
await this.trialBtn.click();
await this.startBtn.click();
}


async answerFlow() {
await this.nextBtn.click();
await this.prevBtn.click();
await this.nextBtn.click();


await this.option(2).click();
await this.nextBtn.click();


await this.option(2).click();
await this.nextBtn.click();


await this.option(2).click();
await this.nextBtn.click();


await this.previewBtn.click();
await this.editAnswerBtn.nth(1).click();


await this.submitBtn.click();
}


async captureModalMessage() {
await this.page.waitForSelector('text=You Tried Your Best!');
const message = await this.page.locator('div[role="dialog"]').innerText();
console.log("Modal Message:\n", message);
}
}