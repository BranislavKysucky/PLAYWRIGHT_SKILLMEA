# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> get started link
- Location: tests\example.spec.ts:12:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Get started' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e4]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Guide" [ref=e9] [cursor=pointer]
          - generic [ref=e13]:
            - link "YouTube Home" [ref=e14] [cursor=pointer]:
              - /url: /
            - generic [ref=e20]: SK
          - button "Skip navigation" [ref=e24] [cursor=pointer]
        - search [ref=e29]:
          - generic [ref=e31]:
            - combobox "Search" [expanded] [ref=e34]
            - button "Search" [ref=e35] [cursor=pointer]
        - generic [ref=e40]:
          - button "Settings" [ref=e45] [cursor=pointer]
          - link "Sign in" [ref=e51] [cursor=pointer]:
            - /url: https://accounts.google.com/ServiceLogin?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&hl=en&ec=65620
    - navigation [ref=e55]:
      - generic [ref=e56]:
        - link "Home" [ref=e58] [cursor=pointer]:
          - /url: /
        - link "Shorts" [ref=e64] [cursor=pointer]:
          - /url: /shorts/
        - link "Subscriptions" [ref=e70] [cursor=pointer]:
          - /url: /feed/subscriptions
        - link "You" [ref=e76] [cursor=pointer]:
          - /url: /feed/you
    - generic [ref=e81]:
      - main [ref=e82]:
        - generic [ref=e91]:
          - generic [ref=e92]:
            - heading "Your YouTube history is off" [level=2] [ref=e93]
            - generic "You can turn on watch and search history at any time to get the latest videos tailored to you. To update your selection, turn on YouTube History and confirm your settings to accept the use of cookies and data. Learn more" [ref=e95]:
              - text: You can turn on watch and search history at any time to get the latest videos tailored to you. To update your selection, turn on YouTube History and confirm your settings to accept the use of cookies and data.
              - link "Learn more" [ref=e96] [cursor=pointer]:
                - /url: https://support.google.com/youtube/answer/95725
          - link "Update setting" [ref=e101] [cursor=pointer]:
            - /url: https://consent.youtube.com/d?continue=https://www.youtube.com/%3Fcbrd%3D1&gl=SK&m=0&pc=yt&uxe=bip&oyh=1&cm=6&hl=en&src=4
      - text: •
  - dialog [active] [ref=e105]:
    - generic [ref=e106]:
      - generic [ref=e107]: A Google company
      - generic [ref=e113]:
        - 'button "Language: English" [ref=e118] [cursor=pointer]':
          - generic: en
        - generic [ref=e123]:
          - link "Sign in" [ref=e125] [cursor=pointer]:
            - /url: https://accounts.google.com/ServiceLogin?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&hl=en
          - tooltip "tooltip"
    - generic [ref=e129]:
      - heading "Before you continue to YouTube" [level=2] [ref=e130]
      - generic [ref=e131]:
        - generic [ref=e132]:
          - generic [ref=e134]:
            - text: We use
            - link "cookies" [ref=e135] [cursor=pointer]:
              - /url: https://policies.google.com/technologies/cookies?hl=en
            - text: and data, including IP addresses, to
          - list [ref=e136]:
            - listitem [ref=e137]:
              - generic [ref=e141]: Deliver and maintain Google services
            - listitem [ref=e142]:
              - generic [ref=e146]: Track outages and protect against spam, fraud, and abuse
            - listitem [ref=e147]:
              - generic [ref=e151]: Measure audience engagement and site statistics to understand how our services are used and enhance the quality of those services
        - generic [ref=e152]:
          - generic [ref=e153]: If you choose to “Accept all,” we will also use cookies and data, including IP addresses, to
          - list [ref=e154]:
            - listitem [ref=e155]:
              - generic [ref=e159]: Develop and improve new services
            - listitem [ref=e160]:
              - generic [ref=e164]: Deliver and measure the effectiveness of ads
            - listitem [ref=e165]:
              - generic [ref=e169]: Show personalized content, depending on your settings
            - listitem [ref=e170]:
              - generic [ref=e174]: Show personalized ads, depending on your settings
        - generic [ref=e175]: If you choose to “Reject all,” we will not use cookies or IP addresses for these additional purposes.
        - generic [ref=e176]: Non-personalized content and ads are influenced by things like the content you’re currently viewing and your location (ad serving is based on general location). Personalized content and ads can also include things like video recommendations, a customized YouTube homepage, and tailored ads based on past activity, like the videos you watch and the things you search for on YouTube. We also use cookies and data to tailor the experience to be age-appropriate, if relevant.
        - generic [ref=e177]: Select “More options” to see additional information, including details about managing your privacy settings. You can also visit g.co/privacytools at any time.
        - generic [ref=e178]:
          - generic [ref=e179]:
            - button "Reject the use of cookies and other data for the purposes described" [ref=e182] [cursor=pointer]:
              - generic: Reject all
            - button "Accept the use of cookies and other data for the purposes described" [ref=e188] [cursor=pointer]:
              - generic: Accept all
          - link "More options" [ref=e195] [cursor=pointer]:
            - /url: https://consent.youtube.com/d?continue=https://www.youtube.com/%3Fcbrd%3D1&gl=SK&m=0&pc=yt&uxe=bip&cm=2&hl=en&src=2&escs=AZ-r6Z6zPd0pDdL3bcCTu9ovRwLr6osNChE9zNTWRm-ec37CpjoCN56TocawspIglhICngPqxGzHXWS3Mdb3dyBCwuKwZF3ZQgk_
        - generic [ref=e199]:
          - link "Privacy Policy" [ref=e201] [cursor=pointer]:
            - /url: https://policies.google.com/privacy?hl=en
          - generic [ref=e202]: •
          - link "Terms of Service" [ref=e204] [cursor=pointer]:
            - /url: https://policies.google.com/terms?hl=en
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('has title', async ({ page }) => {
  4  |   await page.goto('/');
  5  |   page.pause();
  6  | 
  7  |   // Expect a title "to contain" a substring.
  8  |   await expect(page).toHaveTitle(/Playwright/);
  9  | });
  10 | 
  11 | test.use({baseURL: 'https://youtube.com'})
  12 | test.only('get started link', async ({ page }) => {
  13 |   await page.goto('/');
  14 | 
  15 |   // Click the get started link.
> 16 |   await page.getByRole('link', { name: 'Get started' }).click();
     |                                                         ^ Error: locator.click: Test timeout of 30000ms exceeded.
  17 | 
  18 |   // Expects page to have a heading with the name of Installation.
  19 |   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  20 | });
  21 | 
```