This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

https://www.youtube.com/watch?v=ZbX4Ok9YX94

npx prisma generate
npx prisma migrate dev --name init
npx prisma db push
npx prisma migrate reset

pnpm prisma migrate dev: 在写完一张表的结构后 需要 pnpm prisma migrate dev --name name...生成迁移文件

npx prisma db pull：自动根据已经存在的数据库生成文件 prisman/schema.prisma ，而不需要向上面一样手动定义

npx prisma db push：使用 db push 来改变现有的原型架构，例如在某一个表中新增某个字段
npx prisma migrate reset: 如果你是使用自动迁移的方法导入映射关系，请确保你的数据留有备份，执行此操作在没有数据迁移记录的情况下，可能导致数据丢失。通过此命令自行 重置 数据库以撤消手动更改或 db push 的实验
