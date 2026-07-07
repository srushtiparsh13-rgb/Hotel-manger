# Hospital Management REST API

A beginner-friendly Full-Stack Hospital Management System built using **Express.js**, **better-sqlite3 (SQLite)**, **React**, and **Vite**.

This project demonstrates complete CRUD (Create, Read, Update, Delete) operations using a REST API with a modern React frontend.

---

# Project Structure

```
Hospital-Management/

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
    ├── Hospital-management-API.postman_collection.json
    └── Hospital-management.postman_environment.json
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

## Testing

- Postman

---

# Features

## Backend

- SQLite database
- Automatically creates Management table
- REST API
- Create patient
- Read all patients
- Read patient by ID
- Update patient
- Delete patient
- Pagination
- Search by Name
- Search by Address
- Duplicate Email Validation
- Required Field Validation

---

## Frontend

- Patient Registration Form
- Live Character Counter
- Email Validation
- Phone Validation
- Edit Patient
- Delete Patient
- Search Patients
- Pagination
- Avatar using Patient Initials
- Loading Indicator
- Last Updated Timestamp
- Dark Mode Toggle
- API Error Messages

---

# Database

Database Name

```
data.db
```

Table Name

```
Management
```

Columns

| Column | Type |
|---------|------|
| id | INTEGER PRIMARY KEY AUTOINCREMENT |
| name | TEXT |
| email | TEXT UNIQUE |
| phone | TEXT |
| address | TEXT |
| date_of_birth | TEXT |
| registered_at | TIMESTAMP |

---

# REST API Endpoints

## Create Patient

```
POST /patients
```

Required Fields

```
name
email
```

Example

```json
{
    "name":"John",
    "email":"john@gmail.com",
    "phone":"9876543210",
    "address":"New York",
    "date_of_birth":"2000-01-01"
}
```

---

## Get All Patients

```
GET /patients
```

Pagination

```
?page=1
&limit=5
```

Search

```
?search=john
```

Example

```
GET /patients?page=1&limit=5&search=john
```

---

## Get Patient By ID

```
GET /patients/1
```

---

## Update Patient

```
PUT /patientss/1
```

Example

```json
{
    "name":"John Updated",
    "email":"johnupdated@gmail.com",
    "phone":"9999999999",
    "address":"Chicago",
    "date_of_birth":"1999-06-10"
}
```

---

## Delete Patient

```
DELETE /patients/1
```

---

# HTTP Status Codes

| Code | Meaning |
|------|----------|
|200|Success|
|201|Created|
|400|Bad Request|
|404|Not Found|
|409|Duplicate Email|
|500|Internal Server Error|

---

# Running the Backend

Open terminal

```
cd backend/server
```

Install packages

```
npm install
```

Start server

```
node index.js
```

Server URL

```
http://localhost:5000
```

---

# Running the Frontend

Open another terminal

```
cd frontend/apiDemo
```

Install packages

```
npm install
```

Run

```
npm run dev
```

Open browser

```
http://localhost:5173
```

---

# Postman Testing

Import the following files into Postman.

```
Hospital-management-API.postman_collection.json
```

and

```
Hospital-management.postman_environment.json
```

The environment contains

```
base_url

patient_id
```

Default Base URL

```
http://localhost:5000
```

---

# Pagination

Default limit

```
5
```

Example

```
GET /patients?page=2&limit=5
```

---

# Search

Patients can be searched using

- Name
- Address

Example

```
GET /patients?search=bangalore
```

---

# Frontend Highlights

- Responsive UI
- Character Counter
- Patient Avatar
- Dark Theme
- Light Theme
- Loading Spinner
- Edit Mode
- Delete Confirmation
- Search Box
- Pagination
- API Error Display
- Last Updated Timestamp

---

# Validation

Backend

- Name is required
- Email is required
- Duplicate Email is not allowed

Frontend

- Name required
- Email required
- Email format validation
- Phone number validation
- Name maximum 40 characters

---

# Future Improvements

- Login Authentication
- JWT Security
- Admin Dashboard
- Patient Photo Upload
- Doctor Management
- Appointment Booking
- Billing Module
- Medical Reports
- Role-Based Access Control
- Export to Excel/PDF

---

# Author

Hospital Management REST API

Built using

- Express.js
- SQLite
- better-sqlite3
- React
- Vite

This project is intended for educational purposes to demonstrate a complete beginner-friendly Full-Stack CRUD application with REST APIs.
