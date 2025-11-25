
export class WeeklyplayPage {
  constructor(page) {
    //sdd
    this.page = page;
    this.playBtn = page.getByRole('button', { name: 'Play Now' });
    this.startBtn = page.locator("//button[normalize-space()='Start']");
    this.nextBtn = page.getByRole('button', { name: 'Next' });
    this.prevBtn = page.getByRole('button', { name: 'Previous' });
    this.submitBtn = page.getByRole('button', { name: 'Submit' });
    this.playMoreBtn = page.getByRole('button', { name: 'Play More — Win ₹1 Lakh' });
    this.weekplay=page.getByRole('button', { name: 'Weekly Smartplay' });
  this.Playnow1=page.locator('#quiz-section').getByRole('button', { name: 'Play Now' });
  this.playnow2= page.getByRole('button', { name: 'Play Now' }).nth(3);
    this.close=page.getByRole('button', { name: 'Close' });
  }

  option(index) {
    return this.page.locator(
      `body > div:nth-child(1) > div:nth-child(3) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > button:nth-child(${index})`
    );
  }
async openWeeklyPlay() {
  if (await this.close.isVisible().catch(() => false)) {
    await this.close.click();
  }
  await this.weekplay.click();
}

  async startGame() {
    await this.Playnow1.click();
    await this.playnow2.click();
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

