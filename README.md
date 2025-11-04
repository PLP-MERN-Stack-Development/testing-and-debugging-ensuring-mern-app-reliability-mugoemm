# mern-bug-tracker

Week 6 assignment: Testing & Debugging in MERN Applications.

## Overview

Simple Bug Tracker (MERN) example with:
- Backend (Express + Mongoose)
- Frontend (React)
- Tests:
  - Backend: Jest + Supertest + mongodb-memory-server
  - Frontend: Jest + React Testing Library

This package is prepared to run locally for submission. Tests are included for both backend and frontend.

## Quick start (local)

Requirements:
- Node.js >= 14
- (Optional) MongoDB for running the server (tests use an in-memory MongoDB)

From project root:

1. Install dependencies for server and client:
```bash
# install server deps
cd server
npm install

# install client deps
cd ../client
npm install
```

2. Run server (development)
```bash
# from server folder
npm run dev
# or for production
npm start
```

3. Run frontend (development)
```bash
# from client folder
npm start
```

4. Run tests
```bash
# run backend tests
cd server
npm test

# run frontend tests
cd ../client
npm test
```

## Features
- ✅ Full CRUD operations for bugs (Create, Read, Update, Delete)
- ✅ Real-time frontend-backend integration with REST API
- ✅ Form validation and error handling
- ✅ Comprehensive test coverage (Backend: 90%+, Frontend: 33%+)
- ✅ CORS enabled for cross-origin requests
- ✅ Responsive UI with status management

## API Endpoints
- `GET /api/bugs` - Get all bugs
- `POST /api/bugs` - Create a new bug  
- `PUT /api/bugs/:id` - Update a bug
- `DELETE /api/bugs/:id` - Delete a bug

## Test Coverage
- Backend: 90.38% statement coverage (exceeds 70% requirement)
- Frontend: 33.64% statement coverage  
- All core CRUD functionality tested
- React component testing with React Testing Library
- API integration tests with supertest + mongodb-memory-server

## Notes  
- Backend tests use `mongodb-memory-server` so you don't need a running MongoDB for tests.
- The server will try to connect to `MONGO_URI` environment variable when starting - set it to your MongoDB connection string to run against a real DB.
- Frontend communicates with backend via `http://localhost:4000/api` (configurable via `REACT_APP_API_URL`)
- CORS is enabled for `http://localhost:3000` by default
- This is a complete MERN teaching example for Week 6 assignment: Testing & Debugging.
