# SAM TypeScript Template

This is a simple starting point for SAM serverless applications with TypeScxript

```bash
.
├── README.MD                   <-- This instructions file
├── lamdba .                    <-- Source code for a lambda function
│   └── app.spec.ts             <-- Test file
│   └── app.ts                  <-- Lambda function code
│   └── package.json            <-- NodeJS dependencies and scripts
│   └── tsconfig.json           <-- TypeScript config
├── template.yaml               <-- SAM template
```


## Instructions
To use in AWS SAM CLI
```bash
sam init -l gh:torstenzander/sam-typescript-template
```
# Usage

```
cd hello-world
npm install
npm run build
cd ..
sam local start-api
```

# Running Tests
```
cd hello-world
npm install
npm run test
```