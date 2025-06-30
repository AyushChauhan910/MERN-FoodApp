# MERN-FoodApp

A full-stack **Food Delivery Web Application** built with the MERN stack (MongoDB, Express.js, React.js, Node.js).  
This project enables users to browse food menus, add items to their cart, and place orders online. It also provides an admin panel for restaurant owners/managers to efficiently manage menus and orders.

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

**MERN-FoodApp** is a modern web application that demonstrates a typical end-to-end workflow for food ordering, including:
- User authentication
- Cart management
- Order handling

It is designed for both:
- **Customers:** Browse menus, add to cart, and place/track orders.
- **Admins:** Manage food menus and process incoming orders efficiently[1].

---

## Features

- **User Registration & Login:** Secure authentication using JWT.
- **Menu Browsing:** Explore available food items.
- **Cart Management:** Add, remove, and update items in the cart.
- **Order Placement & Tracking:** Place orders and view order status.
- **Admin Panel:** Manage menu items and customer orders.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **RESTful API Architecture:** Clean separation between frontend and backend[1].

---

## Tech Stack

| Layer         | Technology                |
|---------------|--------------------------|
| Frontend      | React.js, HTML, CSS      |
| Backend       | Node.js, Express.js      |
| Database      | MongoDB                  |
| Authentication| JWT (JSON Web Tokens)    |
| Other         | Axios, bcrypt, dotenv    |

---

## Folder Structure
MERN-FoodApp/
├── backend/
│ ├── models/
│ │ ├── User.js
│ │ └── Product.js
│ ├── routes/
│ │ ├── authRoutes.js
│ │ └── productRoutes.js
│ ├── middleware/
│ │ └── auth.js
│ ├── config/
│ │ └── database.js
│ ├── index.js
│ ├── package.json
│ └── .env
├── frontend/
│ ├── public/
│ │ ├── index.html
│ │ └── favicon.ico
│ ├── src/
│ │ ├── components/
│ │ │ ├── Header.js
│ │ │ ├── HomeCard.js
│ │ │ ├── CardFeature.js
│ │ │ ├── AllProduct.js
│ │ │ ├── FilterProduct.js
│ │ │ └── CartProduct.js
│ │ ├── pages/
│ │ │ ├── Home.js
│ │ │ ├── Login.js
│ │ │ ├── Signup.js
│ │ │ ├── Menu.js
│ │ │ ├── Cart.js
│ │ │ ├── About.js
│ │ │ ├── Contact.js
│ │ │ └── NewProduct.js
│ │ ├── redux/
│ │ │ ├── index.js
│ │ │ ├── userSlice.js
│ │ │ └── productSlice.js
│ │ ├── assets/
│ │ │ └── images/
│ │ ├── utility/
│ │ ├── App.js
│ │ ├── App.css
│ │ ├── index.js
│ │ └── index.css
│ ├── package.json
│ ├── tailwind.config.js
│ └── .env
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

3. **Install frontend dependencies:**
cd ../frontend
npm install

---

## Environment Variables

Create a `.env` file in the `backend` directory with the following variables:
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

- The frontend runs on: **http://localhost:3000**
- The backend runs on: **http://localhost:5000**

---

## Contributing

Contributions are welcome!  
Please open an issue or submit a pull request for any improvements or suggestions.

## My App-
https://mern-food-app-mu.vercel.app/
