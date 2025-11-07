
export class WeeklyplayPage {
  constructor(page) {
    this.page = page;
    this.playBtn = page.getByRole('button', { name: 'Play Now' });
    this.startBtn = page.getByRole('button', { name: 'Start' });
    this.nextBtn = page.getByRole('button', { name: 'Next' });
    this.prevBtn = page.getByRole('button', { name: 'Previous' });
    this.submitBtn = page.getByRole('button', { name: 'Submit' });
    this.playMoreBtn = page.getByRole('button', { name: 'Play More — Win ₹1 Lakh' });
  }

  option(index) {
    return this.page.locator(
      `body > div:nth-child(1) > div:nth-child(3) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > button:nth-child(${index})`
    );
  }

  async startGame() {
    await this.playBtn.nth(2).click();
    await this.playBtn.nth(3).click();
    await this.startBtn.click();
  }

  async answerFlow() {
    await this.option(1).click();
    await this.nextBtn.click();

    await this.option(1).click();
    await this.nextBtn.click();

    await this.prevBtn.click();
    await this.nextBtn.click();

    await this.option(2).click();
    await this.nextBtn.click();

    await this.option(3).click();
    await this.nextBtn.click();
    await this.nextBtn.click();

    await this.option(4).click();
    await this.nextBtn.click();
    await this.nextBtn.click();
    await this.nextBtn.click();
    await this.nextBtn.click();

    await this.submitBtn.click();
    await this.playMoreBtn.click();
  }
}

