# SAM TypeScript Template

This is a simple starting point for SAM serverless applications with TypeScript

```bash
.
├── src .                       <-- Source code for a lambda function
│   └── handlers.ts             <-- entrypoint for handlers configure in the template.yaml
│   └── http.ts                 <-- http basic functionality
│   └── service.json            <-- service
├── template.yaml               <-- SAM template
```

## Instructions
To use in AWS SAM CLI
```bash
sam init -l gh:torstenzander/sam-typescript-template
```
# Usage

```
npm install
npm build-watch
npm run start
```

# Running Tests
```
npm run test
```
