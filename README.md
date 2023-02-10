## Installation

```
npm install
```

## Test Runner

Run commands run selected specs for target environment (headless).
Open commands launch the Cypress UI and all specs for target environment will be available to run.
Only the specs/scenarios tagged for the target environment and test type will be run.

### Running Tests:

| Action | Environment | Command                |
| ------ | ----------- | ---------------------- |
| Run    | Prod        | `npm run cy:prod:run`  |
| Run    | QA          | `npm run cy:qa:run`  |
| Run    | UAT         | `npm run cy:uat:run`  |
| Open   | Prod        | `npm run cy:prod:open` |
| Open   | QA          | `npm run cy:qa:open` |
| Open   | UAT         | `npm run cy:uat:open` |

### Generate Allure Report:

Install any "Live Server" from the extensions

Execute below command to generate an Allure HTML report

| Action                  | Command                 |
| ----------------------- | ----------------------- |
| Generate Allure Report | `npm run allure:report` |

Once report is generated right click on the "index.html" and select "open with live server"

### Code Formatter:

| Action                  | Command                 |
| ----------------------- | ----------------------- |
| Code Formatter Prettier | `npm run lint:prettier` |
| Code Formatter Eslint   | `npm run lint:eslint`   |