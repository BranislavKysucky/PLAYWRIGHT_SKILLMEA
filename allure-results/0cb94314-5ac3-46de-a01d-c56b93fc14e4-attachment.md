# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 2consoleLog.spec.ts >> Console log errors >> Page has no errors or logs
- Location: tests\2consoleLog.spec.ts:4:10

# Error details

```
TypeError: errors.length.toBe is not a function
```

# Page snapshot

```yaml
- generic [ref=f2e2]:
  - banner [ref=f2e3]:
    - link [ref=f2e4] [cursor=pointer]:
      - /url: https://demoqa.com
  - generic [ref=f2e7]:
    - generic [ref=f2e8]:
      - link "Selenium Online Training":
        - /url: https://www.toolsqa.com/selenium-training/
        - img "Selenium Online Training"
    - generic [ref=f2e10]:
      - link [ref=f2e11] [cursor=pointer]:
        - /url: /elements
        - heading "Elements" [level=5] [ref=f2e19]
      - link [ref=f2e20] [cursor=pointer]:
        - /url: /forms
        - heading "Forms" [level=5] [ref=f2e29]
      - link [ref=f2e30] [cursor=pointer]:
        - /url: /alertsWindows
        - heading "Alerts, Frame & Windows" [level=5] [ref=f2e38]
      - link [ref=f2e39] [cursor=pointer]:
        - /url: /widgets
        - heading "Widgets" [level=5] [ref=f2e48]
      - link [ref=f2e49] [cursor=pointer]:
        - /url: /interaction
        - heading "Interactions" [level=5] [ref=f2e57]
      - link [ref=f2e58] [cursor=pointer]:
        - /url: /books
        - heading "Book Store Application" [level=5] [ref=f2e66]
  - contentinfo [ref=f2e67]:
    - generic [ref=f2e68]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import test, {expect } from '../fixtures/basePages';
  2  | 
  3  | test.describe('Console log errors', () => {
  4  |     test.only('Page has no errors or logs', async ({page}) => {
  5  | 
  6  |         const logs = [] as any;
  7  |         page.on("console", (message) => {
  8  |             return logs.push({ message, type: message.type()});
  9  |         })
  10 |         // expections
  11 |         const errors = [] as any;
  12 |         page.on("pageerror", (expection) => {
  13 |             errors.push(expection)
  14 |         })
  15 | 
  16 |         await page.goto('https://demoqa.com/');
  17 |         console.log(logs);
  18 |         expect.soft(logs.length).toBe(0);
  19 |         console.log(errors);
> 20 |         expect(errors.length.toBe(0))
     |                              ^ TypeError: errors.length.toBe is not a function
  21 |     })
  22 | })
```