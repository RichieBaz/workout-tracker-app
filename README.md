# Workout Tracker App
This project was created for **Assignment 3 – workout-tracker** in **INFR3120 – Web & Scripting** under **Professor Ahmed Munieb Sheikh**.
It is a full CRUD web application that allows users to track workouts by adding, viewing, editing, and deleting exercises.
## Features
- Add new workouts (title, sets, reps)
- View all workouts stored in MongoDB
- Edit and update existing workouts
- Delete workouts using a delete confirmation popup
- Shared header & footer partials across all pages
- `.env` security used to hide MongoDB credentials

## Technologies Used
| Technology | Purpose |
|-----------|----------|
| **Node.js + Express.js** | Server + Routing |
| **MongoDB + Mongoose** | Database + Modeling |
| **EJS Templates** | Dynamic page rendering |
| **dotenv + method-override** | Environment security + PUT/DELETE methods |
| **CSS** | Styling |
| **JavaScript (public folder)** | Delete confirmation popup |

## How to Run the App

### Install dependencies
```bash
npm install
