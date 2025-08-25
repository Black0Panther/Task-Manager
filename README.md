# Task Manager Web App

A simple **Task Manager web application** built with **React** and **Firebase**.  
Allows users to **sign up, log in, log out**, and access a **dashboard** for managing tasks. The dashboard is **protected** and only accessible to authenticated users.

## Features

- User Authentication using **Firebase Auth**
  - Sign Up
  - Sign In
  - Logout
- **Private Dashboard** (Protected Routes)
- Responsive design using **Tailwind CSS**
- Clean UI and easy-to-use forms

## Technologies Used

- **Frontend:** React, React Router DOM, Tailwind CSS
- **Backend / Auth:** Firebase Authentication
- **State Management:** React Hooks (`useState`, `useEffect`)

## Project Structure

src/
├── components/
│ └── Navbar.jsx
├── pages/
│ ├── Login.jsx
│ ├── SignUp.jsx
│ └── Dashboard.jsx
├── firebase.js
├── App.jsx
└── index.jsx
