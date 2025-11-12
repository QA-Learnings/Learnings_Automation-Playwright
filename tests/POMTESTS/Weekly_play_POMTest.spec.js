import { test, expect } from '@playwright/test';
import { Loginpageforplays } from '../../pages/Loginpageforplays.js';
import { WeeklyplayPage } from '../../pages/Weeklyplaypage.js';


test('premiumplay - POM', async ({ page }) => {
const login = new Loginpageforplays(page);
const play = new WeeklyplayPage(page);


await login.goto();
await login.login('9496528030', 'Test@123');


await play.startGame();
await play.answerFlow();
});