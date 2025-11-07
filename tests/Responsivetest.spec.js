import { test, expect, devices, chromium, firefox, webkit } from '@playwright/test';
import fs from 'fs';
import path from 'path';

// Create videos folder if not exists
if (!fs.existsSync('videos')) {
  fs.mkdirSync('videos');
}

test.describe('Cross-browser layout verification', () => {
  const siteUrl = 'https://qa.l-earnings.com/';

  const combos = [
      // Desktop viewports – Chrome
    { browserType: chromium, name: 'Chrome_Windows10_1920x1080',    contextOpts: { viewport: { width:1920, height:1080 } } },
    { browserType: chromium, name: 'Chrome_Windows10_1600x900',     contextOpts: { viewport: { width:1600, height:900 } } },
    { browserType: chromium, name: 'Chrome_Windows10_1440x900',     contextOpts: { viewport: { width:1440, height:900 } } },
    { browserType: chromium, name: 'Chrome_Windows10_1366x768',     contextOpts: { viewport: { width:1366, height:768 } } },

    // Desktop viewports – Firefox
    { browserType: firefox,   name: 'Firefox_Windows10_1920x1080',  contextOpts: { viewport: { width:1920, height:1080 } } },
    { browserType: firefox,   name: 'Firefox_Windows10_1600x900',   contextOpts: { viewport: { width:1600, height:900 } } },
    { browserType: firefox,   name: 'Firefox_Windows10_1440x900',   contextOpts: { viewport: { width:1440, height:900 } } },

    // Desktop viewports – Edge
    { browserType: chromium, name: 'Edge_Windows10_1920x1080',      contextOpts: { viewport: { width:1920, height:1080 }, channel:'msedge' } },
    { browserType: chromium, name: 'Edge_Windows10_1600x900',       contextOpts: { viewport: { width:1600, height:900 }, channel:'msedge' } },
    { browserType: chromium, name: 'Edge_Windows10_1440x900',       contextOpts: { viewport: { width:1440, height:900 }, channel:'msedge' } },

    // Desktop viewports – Safari (macOS)
    { browserType: webkit,   name: 'Safari_macOS_Ventura_1920x1080', contextOpts: { viewport: { width:1920, height:1080 } } },
    { browserType: webkit,   name: 'Safari_macOS_Ventura_1600x900',  contextOpts: { viewport: { width:1600, height:900 } } },
    { browserType: webkit,   name: 'Safari_macOS_Ventura_1440x900',  contextOpts: { viewport: { width:1440, height:900 } } },

    // Mobile Android – Chrome
    { browserType: chromium, name: 'Chrome_Android_GalaxyS21',     contextOpts: { ...devices['Galaxy S21'] } },
    { browserType: chromium, name: 'Chrome_Android_Pixel6',         contextOpts: { ...devices['Pixel 6'] } },
    { browserType: chromium, name: 'Chrome_Android_GalaxyTabS7',    contextOpts: { ...devices['Galaxy Tab S7'] } },
    { browserType: chromium, name: 'Chrome_Android_Pixel5',         contextOpts: { ...devices['Pixel 5'] } },
    { browserType: chromium, name: 'Chrome_Android_GalaxyS20',      contextOpts: { ...devices['Galaxy S20'] } },
    { browserType: chromium, name: 'Chrome_Android_GalaxyA52',      contextOpts: { ...devices['Galaxy A52'] } },
    { browserType: chromium, name: 'Chrome_Android_GalaxyA51',      contextOpts: { ...devices['Galaxy A51'] } },
    { browserType: chromium, name: 'Chrome_Android_Pixel6Pro',      contextOpts: { ...devices['Pixel 6 Pro'] } },
    { browserType: chromium, name: 'Chrome_Android_Pixel7',         contextOpts: { ...devices['Pixel 7'] } },
    { browserType: chromium, name: 'Chrome_Android_Pixel8',         contextOpts: { ...devices['Pixel 8'] } },

    // Mobile Android – Firefox
    { browserType: firefox,   name: 'Firefox_Android_GalaxyS21',    contextOpts: { ...devices['Galaxy S21'] } },
    { browserType: firefox,   name: 'Firefox_Android_Pixel6',       contextOpts: { ...devices['Pixel 6'] } },
    { browserType: firefox,   name: 'Firefox_Android_GalaxyTabS7',  contextOpts: { ...devices['Galaxy Tab S7'] } },
    { browserType: firefox,   name: 'Firefox_Android_Pixel5',       contextOpts: { ...devices['Pixel 5'] } },
    { browserType: firefox,   name: 'Firefox_Android_Pixel6Pro',    contextOpts: { ...devices['Pixel 6 Pro'] } },

    // Mobile Android – Edge
    { browserType: chromium, name: 'Edge_Android_GalaxyS21',         contextOpts: { ...devices['Galaxy S21'], channel:'msedge' } },
    { browserType: chromium, name: 'Edge_Android_Pixel6',            contextOpts: { ...devices['Pixel 6'], channel:'msedge' } },
    { browserType: chromium, name: 'Edge_Android_Pixel7',            contextOpts: { ...devices['Pixel 7'], channel:'msedge' } },
    { browserType: chromium, name: 'Edge_Android_GalaxyA52',         contextOpts: { ...devices['Galaxy A52'], channel:'msedge' } },
    { browserType: chromium, name: 'Edge_Android_GalaxyS20',         contextOpts: { ...devices['Galaxy S20'], channel:'msedge' } },

    // Mobile iOS – Safari (WebKit)
    { browserType: webkit,   name: 'Safari_iOS_iPhone14',           contextOpts: { ...devices['iPhone 14'] } },
    { browserType: webkit,   name: 'Safari_iOS_iPhone13',           contextOpts: { ...devices['iPhone 13'] } },
    { browserType: webkit,   name: 'Safari_iOS_iPadPro',            contextOpts: { ...devices['iPad Pro'] } },
    { browserType: webkit,   name: 'Safari_iOS_iPhone12',           contextOpts: { ...devices['iPhone 12'] } },
    { browserType: webkit,   name: 'Safari_iOS_iPhoneSE2020',        contextOpts: { ...devices['iPhone SE (2020)'] } },

    // Mobile iOS – Chrome/Firefox (emulated)
    { browserType: chromium, name: 'Chrome_iOS_iPhone14',            contextOpts: { ...devices['iPhone 14'] } },
    { browserType: firefox,   name: 'Firefox_iOS_iPhone13',           contextOpts: { ...devices['iPhone 13'] } },
    { browserType: chromium, name: 'Edge_iOS_iPadPro',                contextOpts: { ...devices['iPad Pro'] } }
  
  ];

  for (const combo of combos) {
    test(`${combo.name} layout check`, async () => {
      console.log(`🎬 Running on: ${combo.name}`);

      const browser = await combo.browserType.launch({ headless: false }); // headed mode
      const context = await browser.newContext({
        ...combo.contextOpts,
        recordVideo: { dir: 'videos/', size: { width: 1280, height: 720 } }
      });
      const page = await context.newPage();

      await page.goto(siteUrl, { waitUntil: 'load', timeout: 60000 });
      const title = await page.title();
      console.log(`${combo.name} → Title = ${title}`);
      await expect(title).not.toBe('');

      // Check layout width issues
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const innerWidth = await page.evaluate(() => window.innerWidth);
      expect(scrollWidth).toBeLessThanOrEqual(innerWidth + 10);
     //prgramess wait

     await page.getByRole('navigation').getByRole('link', { name: 'Home' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'About' }).click();
  await page.getByRole('link', { name: 'Study Material' }).click();
  await page.getByRole('link', { name: 'Contact', exact: true }).click();
 
  await page.getByText('HomeAboutStudy MaterialSmartPlayContactSign InSign Up').click();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Email or Mobile *' }).click();
  await page.getByRole('textbox', { name: 'Email or Mobile *' }).fill('qa@l-earnings.com');
  await page.getByRole('textbox', { name: 'Email or Mobile *' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.locator('//button[contains(text(),"Sign in")]').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'About' }).click();
  await page.getByRole('link', { name: 'Study Material' }).dblclick();
  await page.getByRole('link', { name: 'SmartPlay' }).click();
  await page.getByRole('link', { name: 'Contact', exact: true }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Home' }).click();
  await page.getByRole('button', { name: 'Switch to Light Mode' }).click();
  await page.getByRole('button', { name: 'Switch to Dark Mode' }).click();
  await page.getByRole('button', { name: 'Switch to Light Mode' }).click();
  await page.getByRole('button', { name: 'Leaderboard' }).click();
  await page.getByRole('button', { name: 'Notifications' }).click();
  await page.getByRole('button', { name: 'Notifications' }).click();
  await page.getByRole('button', { name: 'Notifications' }).click();
  await page.getByRole('button', { name: 'Account Settings' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Home' }).click();




      const video = await page.video();
      const videoPath = await video.path();
      await context.close();
      await browser.close();

      const newVideoPath = path.join('videos', `${combo.name}.webm`);
      if (fs.existsSync(videoPath)) {
        fs.renameSync(videoPath, newVideoPath);
        console.log(`📁 Video saved as: ${newVideoPath}\n`);
      }
    });
  }
});
