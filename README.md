# SCM CI/CD Pipeline Demo

## Running the quality checks

Install the project dependencies, then run the checks from the project folder:

```powershell
npm install
npm run lint
npm test
```

Jest runs the tests in `test/app.test.js`. The tests verify that loading the page
sets the initial status and registers a click handler, and that clicking the task
button changes the status to the expected success message.

## Example passing test

With `src/app.js` unchanged, run:

```powershell
npm test
```

Both Jest tests should pass because the page-load initialization and button click
produce the status text that the tests expect.

## Example failing test

To see a test fail, temporarily change the initial status message in
`src/app.js` from:

```js
statusMessage.textContent = 'Application loaded successfully. Ready to run task.';
```

to a different message, for example:

```js
statusMessage.textContent = 'Application started.';
```

Run `npm test` again. The page-load test will fail because the actual status
does not match its expected value. Restore the original message and run the
tests again to confirm they pass. This illustrates that Jest reports a failure
when the script's behavior differs from the expected result; the test does not
fail randomly.

## CI workflow

The GitHub Actions workflow runs the lint job first and starts the Jest test job
only after lint succeeds. Deployment requires both jobs to pass, so a lint or
test failure prevents deployment.
