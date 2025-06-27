# 🔐 JWT Authentication with Node.js & Express

A basic but secure implementation of JWT (JSON Web Token) authentication using Node.js and Express. This project demonstrates the core principles of generating, handling, and verifying tokens during user login and protected route access.

---

## 🚀 Features

- JWT token generation on login with configurable expiry time
- Bearer token format in headers for secure request handling
- Authorization header setup for secure API access
- Middleware to verify tokens and protect routes
- Simple, beginner-friendly structure focused on learning core JWT concepts

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- JSON Web Token (`jsonwebtoken`)
- Nodemon (for auto-restarting server during development)

---

## ⚙️ Setup Instructions

### Clone the repository

```bash
git clone https://github.com/your-username/jwt-auth-node.git
cd jwt-auth-node

npm init -y
npm install express jsonwebtoken
npm install -g nodemon
nix profile install nixpkgs#nodemon
nodemon
```

### 🔐 A beginner-friendly Node.js project demonstrating secure user authentication using JWT (JSON Web Tokens). Includes token generation on login, bearer-based authorization headers, and middleware-based token verification for protected routes.
