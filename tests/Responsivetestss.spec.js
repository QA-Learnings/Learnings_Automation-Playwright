import { test, expect, devices, chromium, firefox, webkit } from '@playwright/test';
import fs from 'fs';
import path from 'path';

// Create screenshots folder if not exists
if (!fs.existsSync('screenshots')) {
  fs.mkdirSync('screenshots');
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
    test(`${combo.name} layout screenshot`, async () => {
      console.log(`📸 Running on: ${combo.name}`);
      

      const browser = await combo.browserType.launch({ headless: false }); // headed mode
      const context = await browser.newContext({ ...combo.contextOpts });
      const page = await context.newPage();

      await page.goto(siteUrl, { waitUntil: 'load', timeout: 60000 });
      await page.click('button:has-text("Accept")', { timeout: 5000 }).catch(() => {});
      await page.waitForTimeout(3000); // Wait for 3 seconds to ensure full load
      // Take full-page screenshot after load
      const screenshotPath = path.join('screenshots', `${combo.name}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`✅ Screenshot saved: ${screenshotPath}`);

      await context.close();
      await browser.close();
    });
  }
});
