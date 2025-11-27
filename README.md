Auth & Database Starter Template

A modern, production-ready starter kit featuring Better Auth, Drizzle ORM, Google OAuth, Resend email, and Neon PostgreSQL.
Designed to help developers skip boilerplate setup and jump straight into building.

## Features
🔐 Better Auth (secure, modern authentication)

🔑 Google OAuth login with a plug-and-play setup

🛢️ Drizzle ORM integrated with Neon (PostgreSQL)

📧 Resend for sending emails (password reset, verification, etc.)

🧩 Clean and extendable folder structure

⚙️ A complete, ready-to-use auth flow

⚡ Optimized for Next.js / modern frameworks

🛠️ Fully typed (TypeScript)



## Environment Variables

Copy .env.example → .env and fill in:

```Better Auth
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000

Database (Neon PostgreSQL)
DATABASE_URL=postgresql://username:password@your-neon-host/neondb?sslmode=require&channel_binding=require

Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

Resend Email
RESEND_API_KEY=your_resend_api_key
```

## prerequistes
. node.js 18+ and npm

. better auth

. neon postgresql

. goggle auth 

. resend email



Clone the repository:

```
git clone https://github.com/yourusername/projectauth
cd yourfilename
```

dependencies to install :
```
npx create-next-app@latest
npm install
npm install better-auth
npm i drizzle-orm
npm i -D drizzle-kit
npm i @neondatabase/serverless
npm i dotenv
npx @better-auth/cli generate
npx drizzle-kit push
npx shadcn@latest init
npx shadcn@latest add login-03
npx shadcn@latest add sonner
@react-email/components
```

Start the development server:
```
npm run dev
```
## step-by-step setup

note: copy file setup and code,

this guide only specifies some external setup not in the installation or code. it also specifies the installation guide for dependencies.

1. install better auth (go to better auth https://www.better-auth.com/docs/installation )
   ```
   npm install better-auth
2. generate better auth secret and set base URL
3.  create better auth instance
4.  configure your database ( using neon drizzle )
   visit https://orm.drizzle.team/docs/tutorials/drizzle-nextjs-neon
    to see set up steps
   install
```
npm i drizzle-orm
npm i -D drizzle-kit
npm i @neondatabase/serverless
npm i dotenv
```
5. visit https://console.neon.tech/app/org-autumn-sun-53278135/projects
   
   . login
   
   . create new project
   
   . click on connect to database to get your connection string - add it to your .env file
7. create data-base tables
   ```
    npx @better-auth/cli generate
   ```

8.   push to neon database
```
  npx drizzle-kit push  
  ```
check your neon database tables to confirm your tables


9. To build ui
   visit https://ui.shadcn.com/blocks
   install the selected block
      ```
      npx shadcn@latest init
      npx shadcn@latest add login-03
      npx shadcn@latest add sonner
      
      ```
      
10. using better auth google auth
    add goggle auth
    visit https://console.cloud.google.com/welcome?_gl=1*1sla9l7*_up*MQ..&gclsrc=aw.ds&project=betterauth-477721
    
    create new project and follow the instructions

    in google console navigate to credentials - OAuth client ID, create new credential
    
11. forgot password process
    
    using better auth - request password reset

    use resend accout to get your API KEY

    use new.email to create email template ( already in code )
    ```
    @react-email/components
    ```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.

## Made with ❤️ by Jovo


