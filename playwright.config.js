// @ts-check
const { devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  /* Run tests in files in parallel */
timeout: 30*1000,
expect: {

  timeout: 5000
},

  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    // browserName: 'firefox'
    // browserName: 'webkit'
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot : 'only-on-failure',
    // headless : false
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: { width:1920, height:1080},
        acceptDownloads: true,
        screenshot : 'only-on-failure',
        trace:'off', //'retain-on-failure'
      },
    },

    // {
    //   name: 'firefox',
    //   use: { 
    //     ...devices['Desktop Firefox'], 
    //     viewport: { width:1920, height:1080}
    //   },
    // },

    // {
    //   name: 'webkit',
    //   use: { 
    //   ...devices['Desktop Safari'],
    //   viewport: { width:1920, height:1080}
    // },
    // },

  ],

});

module.exports = config;
