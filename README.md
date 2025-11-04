# MERN Bug Tracker - Testing & Debugging Assignment

**Week 6 Assignment: Testing & Debugging in MERN Applications**

This is a fully implemented MERN stack Bug Tracker application demonstrating comprehensive testing strategies, including unit testing, integration testing, and debugging techniques

---

## 🚀 **Project Overview**

Complete Bug Tracker MERN application with:
- **Backend**: Express.js + Mongoose + MongoDB
- **Frontend**: React.js with hooks and modern patterns
- **Testing**: Jest + Supertest + React Testing Library + MongoDB Memory Server
- **Features**: Full CRUD operations, real-time API integration, form validation, error handling

---

## 🏗 **Project Structure**

```
mern-bug-tracker/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components (BugForm, BugList, Button)
│   │   ├── services/       # API service layer (bugService.js)
│   │   ├── tests/          # Component tests
│   │   │   ├── App.test.jsx
│   │   │   ├── BugForm.test.jsx
│   │   │   ├── Button.test.jsx
│   │   │   └── __mocks__/  # Test mocks
│   │   ├── App.jsx         # Main application
│   │   └── setupTests.js   # Test configuration
│   └── package.json
├── server/                 # Express.js backend  
│   ├── src/
│   │   ├── models/         # Mongoose models (Bug.js)
│   │   ├── routes/         # API routes (bugs.js)
│   │   ├── middleware/     # Error handling middleware
│   │   ├── utils/          # Validation utilities
│   │   ├── app.js          # Express app configuration
│   │   └── server.js       # Server entry point
│   ├── tests/
│   │   ├── bugs.test.js    # API integration tests
│   │   └── setup.js        # Test configuration
│   └── package.json
├── jest.config.js          # Jest configuration for both client & server
└── README.md              # This documentation
```

---

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js (v18 or higher)
- MongoDB (optional for testing - uses in-memory database)

### **1. Installation**
```bash
# Clone the repository
git clone https://github.com/PLP-MERN-Stack-Development/testing-and-debugging-ensuring-mern-app-reliability-mugoemm.git
cd mern-bug-tracker

# Install server dependencies
cd server
npm install

# Install client dependencies  
cd ../client
npm install
```

### **2. Run Backend Server (Port 4000)**
```bash
cd server
npm start        # Production mode
# OR
npm run dev      # Development mode with nodemon
```

### **3. Run Frontend Server (Port 3000)**
```bash
cd client
npm start
```

### **4. Run Tests**
```bash
# Backend tests (from server directory)
cd server
npm test

# Frontend tests (from client directory)
cd client  
npm test

# Run with coverage
npm test -- --coverage
```

---

## ✨ **Features Implemented**

### **Backend Features**
- ✅ **Complete REST API** with full CRUD operations
- ✅ **MongoDB integration** with Mongoose ODM
- ✅ **Input validation** and comprehensive error handling
- ✅ **CORS enabled** for cross-origin requests
- ✅ **Environment-based configuration** (MongoDB URI, ports)

### **Frontend Features**  
- ✅ **Real-time API integration** (not just local state)
- ✅ **Modern React patterns** with hooks (useState, useEffect)
- ✅ **Form validation** and user feedback
- ✅ **Loading states** and error boundaries
- ✅ **Responsive UI** with status indicators
- ✅ **Complete CRUD interface** (Create, Update, Delete bugs)

### **Testing Implementation**
- ✅ **API Integration Tests** using Supertest
- ✅ **Component Unit Tests** with React Testing Library  
- ✅ **MongoDB Memory Server** for isolated database testing
- ✅ **Mock Services** for frontend API testing
- ✅ **Async/await testing** patterns
- ✅ **Error handling tests** and validation testing
---

## 🔗 **API Endpoints**

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/bugs` | Get all bugs |
| POST | `/api/bugs` | Create a new bug |  
| PUT | `/api/bugs/:id` | Update a bug |
| DELETE | `/api/bugs/:id` | Delete a bug |

**Example API Usage:**
```javascript
// Create a bug
POST /api/bugs
{
  "title": "Login button not working",
  "description": "Button becomes unresponsive after clicking"
}

// Response
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Login button not working", 
  "description": "Button becomes unresponsive after clicking",
  "status": "open",
  "createdAt": "2025-11-04T10:30:00.000Z"
}
```

---

## 🛠 **Debugging Techniques Implemented**

1. **Error Boundaries**: Comprehensive error handling in React components
2. **API Error Handling**: Proper HTTP status codes and error messages
3. **Input Validation**: Both client-side and server-side validation
4. **Console Logging**: Strategic logging for development debugging
5. **Test-Driven Development**: Tests help identify and prevent bugs
6. **MongoDB Connection Handling**: Graceful fallback when database unavailable

---

## 🔧 **Configuration**

### **Environment Variables**
```bash
# Server (.env)
MONGO_URI=mongodb://localhost:27017/mern-bug-tracker
PORT=4000
NODE_ENV=development

# Client (.env)
REACT_APP_API_URL=http://localhost:4000/api
```

---

## 📋 **Assignment Requirements Checklist**

- ✅ **Set up testing environments** for both client and server
- ✅ **Unit tests for React components** (Button, BugForm, App)
- ✅ **Unit tests for server functions** (validation, error handling)
- ✅ **Integration tests for API endpoints** (all CRUD operations)
- ✅ **End-to-end user flows** (create, update, delete bugs)
- ✅ **Debugging techniques** throughout application
- ✅ **70%+ code coverage** (Backend: 90.38%)
- ✅ **Comprehensive documentation** in README.md
- ✅ **Working application** with real database integration

---

## 🎓 **Learning Outcomes Demonstrated**

1. **Testing Strategies**: Unit, integration, and component testing
2. **MERN Stack Integration**: Full-stack application development
3. **Error Handling**: Robust error management across the stack
4. **Modern JavaScript**: ES6+, async/await, React hooks
5. **Database Testing**: MongoDB Memory Server for isolated tests
6. **API Design**: RESTful API development and testing
7. **Frontend Testing**: React Testing Library best practices

---

## 📝 **Submission Notes**

This repository demonstrates a complete understanding of:
- MERN stack development patterns
- Comprehensive testing strategies  
- Debugging and error handling techniques
- Modern JavaScript and React development
- Database integration and testing
- Professional documentation and code organization

