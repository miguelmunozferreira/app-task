# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Full-stack task management app — Angular 18 SPA frontend + Express.js/TypeScript backend + MongoDB. Both are independent Node.js projects inside a monorepo.

## Commands

### Frontend (`/frontend`)

```bash
npm start    # dev server at http://localhost:4200
npm run build  # production build
npm test     # Karma/Jasmine test runner
```

### Backend (`/backend`)

```bash
npm run dev    # nodemon hot-reload dev server
npm run build  # tsc compilation to dist/
npm start      # run compiled dist/app.js
```

Backend listens on `process.env.PORT` (default 3000). Frontend in production calls `http://15.188.23.160:3002/` (hardcoded in `src/environments/environment.ts`).

## Architecture

### Backend — MVC with dynamic route loading

```
backend/src/
  app.ts           # Express setup and middleware registration
  routes/index.ts  # Auto-discovers and mounts all files in routes/ dir via fs.readdirSync
  controllers/     # HTTP layer (auth, task, user)
  services/        # Business logic
  models/          # Mongoose schemas (User, Task)
  middleware/      # session.ts = JWT validation (checkJwt)
  utils/           # JWT helpers, bcrypt wrapper, error handler
  config/          # MongoDB connection
```

All protected endpoints use the `checkJwt` middleware. New route files placed in `routes/` are loaded automatically.

### Frontend — Standalone Angular components

```
frontend/src/app/
  app.routes.ts        # Three routes: login, register, home (tasks)
  components/          # Login, Register, TaskList, Navbar (standalone)
  services/            # TaskService, UserService, TokenService, AuthInterceptor
  interfaces/          # Task, User TypeScript interfaces
```

`AuthInterceptor` attaches `Bearer <token>` to every outgoing HTTP request. `TokenService` handles localStorage token storage. Unknown routes redirect to `/login`.

### Core data models

**User:** `name`, `email` (unique), `password` (bcrypt-hashed), `description`  
**Task:** `name`, `state` (boolean), `createdBy` (User ref), timestamps

### API routes

```
POST /auth/register   # create account
POST /auth/login      # returns JWT (2hr) + user object

GET    /task          # list all tasks (auth required)
POST   /task          # create task (auth required)
GET    /task/:id      # single task
PUT    /task/:id      # toggle state
DELETE /task/:id      # delete
```

## Key Notes

- Both `tsconfig.json` files use `strict: true`; Angular also enables `strictTemplates: true`
- No ESLint/Prettier configured
- Register component exists but functionality is not yet implemented
- Backend uses centralized error handling via `error.handle.ts` — propagate errors through the service/controller chain rather than swallowing them
