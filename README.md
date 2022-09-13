# Created by UmiJS

> `pnpm dlx create-umi`

### CLI
常用工具命令
`pnpm umi g`
```
Create Pages -- Create a umi page by page name
Enable Jest -- Setup Jest Configuration
Enable Tailwind CSS -- Setup Tailwind CSS configuration
Enable Dva -- Configuration, Dependencies, and Model Files for Dva
Generate Component -- Generate component boilerplate code
Generate mock -- Generate mock boilerplate code
Enable E2E Testing with Cypress -- Setup Cypress Configuration
Generator api -- Generate api route boilerplate code
```

## Blog STEPS
使用 在线免费Serverless MySql
https://app.planetscale.com/steven7sheng/umi-blog-example
Connect with [Prisma]
```
DATABASE_URL='mysql://abcdefg:**********@us-east.connect.psdb.cloud/umi-blog-example?sslaccept=strict'
```
推送db配置，生成
`npx prisma db push --preview-feature`
生成
`npx prisma generate`