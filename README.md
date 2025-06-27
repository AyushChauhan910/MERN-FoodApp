# MERN-FoodApp

A full-stack Food Delivery Web Application built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

**MERN-FoodApp** is a modern web application that allows users to browse a food menu, add items to their cart, and place orders online. The project demonstrates a typical end-to-end workflow for food ordering, including authentication, cart management, and order handling. It is designed for both customers and admins (restaurant owners/managers) to manage menus and orders efficiently.

---

## Features

- User registration and login (authentication)
- Browse food items/menu
- Add items to cart
- Place and track orders
- Admin panel for menu and order management
- Responsive design for desktop and mobile
- RESTful API architecture

---

## Tech Stack

- **Frontend:** React.js, HTML, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Other:** Axios, bcrypt, dotenv

---

## Folder Structure

MERN-FoodApp/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Product.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── productRoutes.js
│   ├── middleware/
│   │   └── auth.js
│   ├── config/
│   │   └── database.js
│   ├── index.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── HomeCard.js
│   │   │   ├── CardFeature.js
│   │   │   ├── AllProduct.js
│   │   │   ├── FilterProduct.js
│   │   │   └── CartProduct.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── Signup.js
│   │   │   ├── Menu.js
│   │   │   ├── Cart.js
│   │   │   ├── About.js
│   │   │   ├── Contact.js
│   │   │   └── NewProduct.js
│   │   ├── redux/
│   │   │   ├── index.js
│   │   │   ├── userSlice.js
│   │   │   └── productSlice.js
│   │   ├── assets/
│   │   │   └── images/
│   │   ├── utility/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   └── .env
├── README.md
└── .gitignore

---

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm or yarn
- MongoDB (local or Atlas)

### Installation

1. **Clone the repository:**
   git clone https://github.com/AyushChauhan910/MERN-FoodApp.git
   cd MERN-FoodApp

2. **Install backend dependencies:**
  cd backend
  npm install

---

## Environment Variables

Create a `.env` file in the `backend` directory with the following variable

  PORT=5000
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret

---

## Usage

### Run Backend
  cd backend
  npm start

### Run Frontend
  cd frontend
  npm start

- The frontend will typically run on [http://localhost:3000](http://localhost:3000)
- The backend will run on [http://localhost:5000](http://localhost:5000)

---

## Screenshots

> _Add screenshots of your app’s main pages here (Home, Menu, Cart, Admin Panel, etc.) to showcase the UI and features._

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or suggestions.

---

> _Built with ❤️ using the MERN stack_
