import { test } from '@playwright/test';
import { Loginpageforplays } from '../pages/Loginpageforplays.js';  
import { TrialRunPage } from '../pages/TrialRunPage';


test('trial run - POM', async ({ page }) => {
const login = new Loginpageforplays(page);
const trial = new TrialRunPage(page);


await login.goto();
await login.login('binithatesting2025@gmail.com', 'Test@123');



await trial.openTrial();
await trial.answerFlow();

});