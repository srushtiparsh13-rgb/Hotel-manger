# Hotel Manager REST API

A beginner-friendly Full-Stack **Hotel Manager Management System** built using **Express.js**, **better-sqlite3 (SQLite)**, **React**, and **Vite**.

This project demonstrates complete CRUD (Create, Read, Update, Delete) operations using REST APIs with a modern React frontend.

---

# Project Structure

```
Hotel-Manager/

│
├── backend/
│   └── server/
│       ├── index.js
│       └── data.db
│
├── frontend/
│   └── apiDemo/
│       └── src/
│           ├── App.jsx
│           └── App.css
│
└── postman/
    ├── Hotel-Manger-API.postman_collection.json
    └── Hotel-Manger-API.postman_environment.json
```

---

# Technologies Used

## Backend

- Node.js
- Express.js
- better-sqlite3
- SQLite
- CORS

## Frontend

- React
- Vite
- CSS3

## API Testing

- Postman

---

# Features

## Backend Features

- SQLite Database
- Automatically creates **Manger** table
- REST API
- Register Manager
- View All Managers
- View Manager by ID
- Update Manager
- Delete Manager
- Pagination
- Search by Name
- Duplicate Email Validation
- Required Field Validation

---

## Frontend Features

- Responsive Registration Form
- Live Character Counter (40 characters)
- Client-side Validation
- Manager List
- Search Managers
- Pagination
- Avatar using Manager Initials
- Loading Indicator
- Last Updated Timestamp
- Dark Mode Toggle
- Edit Manager
- Delete Manager
- Display API Error Messages

---

# Database

Database Name

```
data.db
```

Table Name

```
Manger
```

Columns

| Column | Type |
|---------|------|
| id | INTEGER PRIMARY KEY AUTOINCREMENT |
| name | TEXT |
| email | TEXT UNIQUE |
| phone | TEXT |
| registered_at | TIMESTAMP |

---

# REST API Endpoints

## Register Manager

```
POST /Mangers
```

Required Fields

```
name
email
```

Example Request

```json
{
    "name":"Rahul Sharma",
    "email":"rahul@gmail.com",
    "phone":"9876543210"
}
```

Success Response

```
201 Created
```

---

## Get All Managers

```
GET /Mangers
```

Pagination

```
?page=1
&limit=5
```

Search

```
?search=rahul
```

Example

```
GET /Mangers?page=1&limit=5&search=rahul
```

Response includes

- data
- page
- limit
- total
- totalPages

---

## Get Manager by ID

```
GET /Mangers/:id
```

Example

```
GET /Mangers/1
```

---

## Update Manager

```
PUT /Mangers/:id
```

Example Request

```json
{
    "name":"Rahul Kumar",
    "email":"rahulkumar@gmail.com",
    "phone":"9999999999"
}
```

---

## Delete Manager

```
DELETE /Mangers/:id
```

Example

```
DELETE /Mangers/1
```

---

# HTTP Status Codes

| Code | Description |
|------|-------------|
|200|Success|
|201|Manager Created|
|400|Missing Required Fields|
|404|Manager Not Found|
|409|Duplicate Email|
|500|Internal Server Error|

---

# Running the Backend

Navigate to backend folder

```
cd backend/server
```

Install dependencies

```
npm install
```

Run the server

```
node index.js
```

Backend URL

```
http://localhost:5000
```

---

# Running the Frontend

Navigate to frontend folder

```
cd frontend/apiDemo
```

Install dependencies

```
npm install
```

Start the React application

```
npm run dev
```

Frontend URL

```
http://localhost:5173
```

---

# Postman Testing

Import the following files into Postman.

Collection

```
Hotel-Manger-API.postman_collection.json
```

Environment

```
Hotel-Manger-API.postman_environment.json
```

Environment Variables

| Variable | Value |
|----------|-------|
| base_url | http://localhost:5000 |
| Manger_id | Placeholder value |

---

# Pagination

Default Limit

```
5
```

Example

```
GET /Mangers?page=2&limit=5
```

---

# Search

Search Managers by Name

Example

```
GET /Mangers?search=Rahul
```

---

# Frontend Highlights

- Responsive Design
- Modern UI
- Character Counter
- Search Functionality
- Pagination Controls
- Dark Mode
- Light Mode
- Loading Spinner
- Avatar Initials
- Edit Manager
- Delete Manager
- Error Notifications
- Last Updated Timestamp

---

# Validations

## Backend

- Name is required
- Email is required
- Email must be unique

## Frontend

- Name is mandatory
- Email is mandatory
- Valid Email Format
- Phone is optional
- Name maximum 40 characters

---

# API Workflow

1. Register a new Manager.
2. View all registered Managers.
3. Search Managers.
4. View Manager details.
5. Update Manager information.
6. Delete Manager.
7. Test APIs using Postman.

---

# Future Enhancements

- Manager Login
- JWT Authentication
- Hotel Dashboard
- Hotel Branch Management
- Staff Management
- Room Management
- Customer Booking
- Billing Module
- Reports
- Export to Excel/PDF
- Image Upload
- Role-Based Access Control

---

# Author

**Hotel Manager REST API**

Built using

- Express.js
- SQLite
- better-sqlite3
- React
- Vite

This project is intended for educational purposes and demonstrates a complete beginner-friendly Full-Stack CRUD application using Express.js, SQLite, React, and REST APIs.
