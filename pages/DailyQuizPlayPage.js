export class DailyQuizPlayPage {
constructor(page) {
this.page = page;
this.playNowBtn = page.getByRole('button', { name: 'Play Now' });
this.nextBtn = page.getByRole('button', { name: 'Next' });
this.prevBtn = page.getByRole('button', { name: 'Previous' });
this.submitBtn = page.getByRole('button', { name: 'Submit' });
this.playMoreBtn = page.getByRole('button', { name: 'Play More — Win ₹1 Lakh' });
}

//dd
option(index) {
return this.page.locator(
`body > div:nth-child(1) > div:nth-child(3) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > button:nth-child(${index})`
);
}


async openPlay() {
await this.playNowBtn.nth(2).click();
await this.playNowBtn.nth(3).click();
}


async answerQuestions() {
await this.option(1).click();
await this.nextBtn.click();


await this.prevBtn.click();
await this.nextBtn.click();


await this.option(2).click();
await this.nextBtn.click();


await this.option(3).click();
await this.nextBtn.click();
await this.nextBtn.click();


await this.submitBtn.click();
await this.playMoreBtn.click();
}
}