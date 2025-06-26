# Roommate Finder – Server Side

---

## 🔍 Overview

This is the backend for the **Roommate Finder** application – a Node.js Express REST API server designed to manage housing and roommate posts.  
It supports full CRUD operations using MongoDB and is deployed as a **serverless function on Vercel** for fast and scalable performance.

---

## 🌐 Live Demo

🔗 [Live API on Vercel](https://batch11-assignment-10-server-side.vercel.app)

---

## 🛠️ Tech Stack

- **Node.js** – JavaScript runtime environment  
- **Express.js** – Lightweight web framework  
- **MongoDB Atlas** – Cloud NoSQL database  
- **MongoDB Native Driver** – For direct database operations  
- **CORS** – Cross-Origin Resource Sharing  
- **dotenv** – For environment variable management  
- **Vercel** – Serverless deployment platform

---

## 🚀 Features

- RESTful API for housing & roommate listings  
- Full CRUD functionality: Create, Read, Update, Delete  
- Filter posts by email (user-specific listings)  
- Fetch featured/available posts  
- Connected to MongoDB Atlas with secure config  
- Deployed to Vercel using serverless architecture

---

## 📦 Dependencies

- `express`  
- `mongodb`  
- `cors`  
- `dotenv`

---

## 🧪 How to Run Locally

1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/roommate-finder-server-side.git
   cd roommate-finder-server-side

   ```
   
---
2. Install dependencies

```
bash

npm install
   ```
---

3. Create a .env file and add your MongoDB credentials:
```
env

DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
PORT=5000
```

---

4. Run the server
```
bash

npm start / nodemon index.js
```

---

5. Server will run on http://localhost:3000

---

6.📌 API Endpoints
| Method | Endpoint           | Description                          |
| ------ | ------------------ | ------------------------------------ |
| GET    | `/`                | Health check                         |
| GET    | `/posts`           | Fetch all posts                      |
| GET    | `/posts/:id`       | Get single post by ID                |
| GET    | `/my-posts?email=` | Get posts filtered by user email     |
| GET    | `/featured-posts`  | Get up to 6 available/featured posts |
| POST   | `/posts`           | Create a new post                    |
| PUT    | `/posts/:id`       | Update post by ID                    |
| DELETE | `/posts/:id`       | Delete post by ID                    |


--- 
## 👨‍💻 Developed by
# Md. Yeasin Islam
## [LinkedIn](https://www.linkedin.com/in/yeasin-islam75)
