import { test } from '@playwright/test';
import { Loginpageforplays } from '../pages/Loginpageforplays.js';
import { DailyQuizPlayPage } from '../pages/DailyQuizPlayPage';


test('Main Play Flow - POM', async ({ page }) => {
const login = new Loginpageforplays(page);
const play = new DailyQuizPlayPage(page);


await login.goto();
await login.login('9495739695', 'Test@123');


await play.openPlay();
await play.answerQuestions();
});