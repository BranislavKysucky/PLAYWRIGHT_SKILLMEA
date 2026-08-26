# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: assertions.spec.ts >> Assertions
- Location: tests\assertions.spec.ts:4:6

# Error details

```
Error: expect(locator).not.toBeEditable() failed

Locator:  locator('#password')
Expected: not editable
Received: editable

Call log:
  - Expect "soft not toBeEditable" with timeout 5000ms
  - waiting for locator('#password')
    9 × locator resolved to <input value="" id="password" type="password" name="password" autocorrect="off" data-test="password" autocapitalize="none" placeholder="Password" class="input_error form_input"/>
      - unexpected value "editable"
  - Target page, context or browser has been closed

```

```yaml
- textbox "Password"
```

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('#login-button')
Expected: 1
Received: undefined

```

```
Error: apiRequestContext._wrapApiCall: Target page, context or browser has been closed
```