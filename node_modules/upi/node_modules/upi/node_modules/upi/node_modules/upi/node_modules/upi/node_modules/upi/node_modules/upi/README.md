# 💳 UPI Payment & Expense Tracker (MongoDB)

A full-stack UPI Payment and Expense Tracker application built using MongoDB for data storage.  
This project simulates real-world digital payment transactions and helps users track their expenses efficiently.

The system allows users to perform UPI transfers, manage accounts, and maintain a record of their spending history using a database-driven backend.

---

## 🚀 Features

### 👤 User Management
- User Registration & Login
- Secure Authentication
- User Profile Management

### 💸 UPI Payment System
- Send Money via UPI
- Receive Money
- Balance Validation
- Transaction Recording

### 📊 Expense Tracking
- Track Daily Expenses
- Categorize Transactions
- View Transaction History
- Monitor Spending Patterns

### 🗄️ Database Integration
- MongoDB Database
- Persistent Data Storage
- CRUD Operations for Users & Transactions

---

## 🛠️ Tech Stack

Frontend:
- HTML
- CSS
- JavaScript

Backend:
- Node.js
- Express.js

Database:
- MongoDB

---

## 📂 Project Structure

```
UPI-Payment-And-Expense-Tracker-MongoDB
│
├── models
│   ├── User.js
│   ├── Transaction.js
│   └── Expense.js
│
├── routes
│   ├── authRoutes.js
│   ├── paymentRoutes.js
│   └── expenseRoutes.js
│
├── controllers
│   ├── authController.js
│   ├── paymentController.js
│   └── expenseController.js
│
├── public
│   ├── css
│   ├── js
│   └── images
│
├── views
│   ├── login.ejs
│   ├── dashboard.ejs
│   └── transactions.ejs
│
├── config
│   └── db.js
│
├── app.js
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/UPI-Payment-And-Expense-Tracker-MongoDB.git
cd UPI-Payment-And-Expense-Tracker-MongoDB
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Setup MongoDB

- Install MongoDB locally OR use MongoDB Atlas.
- Update your database connection string inside `config/db.js`.

Example:

```
mongodb://localhost:27017/upi_expense_tracker
```

### 4️⃣ Run the Application

```
npm start
```

or

```
node app.js
```

### 5️⃣ Open in Browser

```
http://localhost:3000
```

---

## 🧠 How It Works

1. User registers and logs in.
2. User can send money via UPI.
3. System validates balance and records transaction.
4. Transactions are stored in MongoDB.
5. Expense tracker categorizes and displays user spending.
6. User can view complete transaction history in dashboard.

---

## 🔐 Security Features

- Password hashing
- Input validation
- Secure authentication flow
- Protected routes using middleware

---

## 📊 Learning Outcomes

This project demonstrates:

- Full-stack web development
- RESTful API design
- MongoDB integration
- CRUD operations
- Authentication & Authorization
- Real-world fintech simulation

Perfect for:
- Academic Projects
- Hackathons
- Resume Portfolio
- Full-Stack Development Practice

---

## 🔮 Future Enhancements

- Two-Factor Authentication
- Graphical Expense Analytics Dashboard
- Email & SMS Notifications
- Budget Limit Alerts
- Admin Panel
- Deployment on Cloud (AWS / Render / Vercel)

---

## 👨‍💻 Author

Somisetty Veda Sai  
B.Tech CSE Student  

---

## 📄 License

This project is developed for educational purposes only.
