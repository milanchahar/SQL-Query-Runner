# 🧩 SQL Query Runner  

### 👥 Group Name: Robust  

---

## 🚀 Overview  
**SQL Query Runner** is a web-based tool that allows users to **execute SQL queries directly from their browser**, similar to MySQL Workbench — but lightweight and browser-based.  
It connects to a **Node.js + Prisma backend** using **SQLite**, enabling **real-time query execution, table creation, and result visualization** through a **React frontend interface**.  

---

## 🧠 Ideation Document  

### 🏁 Problem Statement  
Students and developers often find it tedious to install and configure full database environments (like MySQL Workbench, PgAdmin, etc.) just to practice SQL.  
There’s a need for a simple, browser-based platform to **write, execute, and visualize SQL queries** instantly without setup hassle.  

---

### 💡 Proposed Solution  
SQL Query Runner provides an **interactive browser interface** to run SQL commands.  
The backend uses **Prisma ORM** to communicate with an SQLite database, and the frontend (React) displays query results in a clean, tabular form.  
Users can perform all major SQL operations like **CREATE**, **INSERT**, **UPDATE**, **DELETE**, and **SELECT**, making it ideal for both learning and quick testing.  

---

### 🧰 Tech Stack  

| Layer | Technology Used |
|-------|------------------|
| Frontend | React.js, Axios, CSS |
| Backend | Node.js, Express.js |
| Database | SQLite (via Prisma ORM) |
| Tools | GitHub, VS Code, npm |

---

### 👨‍💻 Team Members & Roles  

| Name | Role | Responsibilities |
|------|------|------------------|
| **Aditya Sinha** | Full Stack Developer | Designed frontend UI, integrated React with backend APIs, handled Express + Prisma setup and database schema creation |
| **Milan kumar** | Frontend Developer | Developed Chrome extension interface using React and TailwindCSS, implemented CodeMirror SQL editor with syntax highlighting and auto-completion |
| **Sahil Singh** | Backend Developer | Built Node.js + Express backend for handling SQL query execution, integrated Prisma/Sequelize ORM, implemented API routes for database connectivity (MySQL, PostgreSQL, SQLite) |
| **AN Pavan Sai** | Database & Testing Engineer | Configured database connections, tested query executions and data visualization, implemented export/import (CSV, Excel, PDF) and random table generation features |

---

### 🎯 Expected Outcome  
- Users can **run SQL queries directly in the browser** without local database setup.  
- The system supports **query execution, result visualization, and error handling**.  
- Provides an **intuitive interface** for learning and testing SQL concepts.  
- Acts as a lightweight alternative to heavy SQL clients like Workbench.  

---

## 📈 Project Progress  

### ✅ Completed So Far  
- Project ideation and documentation finalized.  
- Frontend setup using **React.js** completed.  
- Backend server setup using **Node.js + Express** done.  
- Integrated **Prisma ORM with SQLite** for query handling.  
- Built working prototype for executing **basic SQL commands** (`CREATE`, `INSERT`, `SELECT`, `UPDATE`, `DELETE`).  
- Implemented **query result display** in tabular format.  
- Connected frontend with backend APIs using Axios.  
- Successfully tested query execution and error handling flow.  

### 🚀 Next Steps  
- Convert the current web version into a **Chrome Extension** version.  
- Add **query auto-completion and syntax highlighting** using CodeMirror.  
- Implement **query history and re-run feature**.  
- Enable **exporting results** (CSV, Excel, PDF).  
- Add **authentication system** for secure access.  
- Optimize database handling for **MySQL and PostgreSQL** support.  
- UI polishing and responsive design improvements.  

---

## ⚙️ Setup Instructions  

### 🧩 Prerequisites  
- Node.js (v18 or higher)  
- npm (v8 or higher)

---

### 🔧 Backend Setup  
```bash
cd backend
npm install
npx prisma db push
npm start
```


### 💻 Frontend Setup
```bash
cd frontend
npm install
npm start
```
###🌐 How to Run the App
Start the backend first → runs at http://localhost:5001
Then start the frontend → runs at http://localhost:3000
Open the React app in your browser.
Type and execute SQL queries like:
```bash
CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, age INT);
INSERT INTO users (name, age) VALUES ('Aditya', 21);
SELECT * FROM users;
```
➡️ The query results will appear instantly in a formatted table view.

###Folder Structure
```bash
SQL-Query-Runner/
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── dev.db
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── package.json
│   └── public/
├── README.md
└── .gitignore
```

