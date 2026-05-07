# app-task

A full-stack task management application built with Angular 18 and Express.js.

## Tech Stack

- **Frontend:** Angular 18 (standalone components), Bootstrap 5, TypeScript
- **Backend:** Express.js, TypeScript, MongoDB (Mongoose), JWT authentication

## Getting Started

### Prerequisites

- Node.js
- MongoDB instance

### Backend

```bash
cd backend
npm install
npm run dev      # dev server with hot reload (port 3000)
```

Create a `.env` file in `backend/` with:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/app-task
JWT_SECRET=your_secret
```

### Frontend

```bash
cd frontend
npm install
npm start        # dev server at http://localhost:4200
```

## API

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/auth/register` | No | Create account |
| POST | `/auth/login` | No | Login, returns JWT |
| GET | `/task` | Yes | List all tasks |
| POST | `/task` | Yes | Create task |
| GET | `/task/:id` | Yes | Get task |
| PUT | `/task/:id` | Yes | Toggle task state |
| DELETE | `/task/:id` | Yes | Delete task |

Protected routes require `Authorization: Bearer <token>` header. Tokens expire after 2 hours.
