# Hotel F&B Management System

This project is part of a hotel management system that handles the **Restaurant & Bar Section** (F&B) of the hotel. It provides functionalities for:

- Menu management
- Order processing (by customers or waiters)
- Kitchen staff updates
- Admin dashboards
- User role-based access

The system uses a **MERN stack** (MongoDB, Express-less Node.js, React.js) with **Vite** for fast frontend development and **Tailwind CSS** for UI styling.

---

## 🔧 Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Postman (for API testing)

### Backend
- Node.js (no Express, pure HTTP module)
- MongoDB (hosted on MongoDB Atlas)
- Mongoose
- Dotenv for configuration

---

## 📁 Project Structure
root/ ├── frontend/ # React + Vite + Tailwind └── fnb-backend/ # Node.js + Mongoose APIs ├── models/ ├── routes/ ├── config/ └── index.js

---

## 📦 Backend Functionalities

- ✅ User Registration (Admin, Customer, Waiter, Kitchen Staff)
- ✅ Role-based access handling
- ✅ Menu item CRUD (Create, Read)
- ✅ Order placement by Customer/Waiter
- ✅ Order tracking (Pending → Preparing → Ready → Delivered)

---

## 📌 APIs Implemented

### `POST /user`
Create a new user.

### `GET /menu`
Retrieve all available menu items.

### `POST /menu`
Add a new menu item (Admin-only in future).

### `POST /order`
Place a new order.

---

## 📋 Planned UI Screens

1. Login / Register
2. Dashboards:
   - Admin
   - Customer
   - Waiter
   - Kitchen Staff
3. Menu Pages:
   - View Menu
   - Add/Edit Menu (Admin)
4. Order Management:
   - Place Order
   - Track Order Status
   - Kitchen Updates
   - Admin Management
5. Optional Booking Page

---

## 🛠 Local Setup (Frontend)

```bash
cd restaurant_bar
npm install
npm run dev
```

## 🛠 Local Setup (Backend)

```bash
cd fnb-backend
npm install
node index.js
```
Make sure you add a .env file in the backend directory with your MongoDB URI:

```bash
MONGO_URI="your-mongodb-connection-string"
```