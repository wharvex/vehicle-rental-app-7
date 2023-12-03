# Vehicle Rental App

## Run Instructions

### Clone Repository and Create .env.local File

```bash
git clone https://github.com/wharvex/vehicle-rental-app-7
cd vehicle-rental-app-7
touch .env.local
```

### Add Environment Variables to .env.local

#### Acquire Clerk and Pexels API keys from Their Websites

* [Clerk](https://clerk.com/)
* [Pexels](https://www.pexels.com/)

#### Add the Following to .env.local

```fundamental
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-key-goes-here
CLERK_SECRET_KEY=your-key-goes-here
PEXELS_KEY=your-key-goes-here
```

### Install Packages, Seed Database, Start Dev Server

```bash
npm i
npx prisma migrate dev --name init
npm run dev
```

### Final Steps

* Visit localhost:3000 (or whatever port the output of `npm run dev` tells you) to see the site.
* Click the hamburger icon in the upper right of the page to browse or view the dummy database contents or login.
* If the hamburger icon doesn't work or a page seems to be taking too long to load, try refreshing the browser window.

### TODO

* Allow users to save a reservation after logging in and view their reservations
* Integrate Stripe
