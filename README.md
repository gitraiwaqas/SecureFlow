# 🔐 MERN Authentication Boilerplate

A production-ready **MERN stack authentication system** with secure JWT & refresh token handling, role-based access control, and a modern React + TailwindCSS frontend.

---

## ✨ Features

- 🌐 **MERN Stack** (MongoDB, Express, React, Node.js)
- 🔑 **Authentication & Authorization**
  - Login, Logout
  - Access & Refresh Tokens
  - Secure password hashing with bcrypt
- 🛡️ **Protected Routes** (API + Frontend)
- 🎨 **Modern UI** with React + TailwindCSS
- 🍪 **Cookie-based sessions** with HttpOnly cookies
- 📂 Clean and maintainable folder structure

---

## 📦 Tech Stack

**Frontend:** React, Vite, TailwindCSS  
**Backend:** Node.js, Express.js, MongoDB, Mongoose  
**Auth:** JWT, Refresh Tokens, bcrypt  
**Dev Tools:** Nodemon, dotenv  

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-company/mern-auth-boilerplate.git
cd mern-auth-boilerplate
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

Create a **.env** file inside `/backend`:
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
DB_NAME=authdb
ACCESS_TOKEN_SECRET=your_access_secret
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=your_refresh_secret
REFRESH_TOKEN_EXPIRY=15d
CORS_ORIGIN=http://localhost:5173
```

Run backend server:
```bash
npm run dev
```

### 3️⃣ Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

The frontend runs on `http://localhost:5173`  
The backend runs on `http://localhost:3000`  

---

## 🚀 Usage

- Open frontend in browser (`http://localhost:5173`)
- Register / Login with email & password
- Access protected dashboard with JWT auth

---

## 📂 Project Structure

```
mern-auth-boilerplate/
│── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   └── server.js
│
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── App.jsx
│   └── tailwind.config.js
│
└── README.md
```

---

## 📜 License

This project is maintained by **onescreensolutions**.  
Feel free to use it for learning or as a starting point for production projects.

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

---

## 🏢 About

This repository is maintained by **onescreensolutions** as a standard authentication boilerplate for production-ready MERN applications.

