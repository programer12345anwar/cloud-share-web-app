☁️ Cloud-Share Application

A secure cloud-based file sharing platform that enables users to upload, store, manage, and share files seamlessly.
Built using Spring Boot + React + Microservices architecture, this application integrates Clerk Authentication, JWT security, Razorpay payments, and Swagger API documentation.


 <img width="1920" height="400" alt="screencapture-localhost-5173-my-files-2025-12-01-19_04_58" src="https://github.com/user-attachments/assets/726e9786-02cb-42c4-b38f-a28d5cbb6cae" />
 <img width="1920" height="900" alt="screencapture-localhost-9000-api-v1-0-swagger-ui-index-html-2025-12-01-19_07_54" src="https://github.com/user-attachments/assets/8159ff06-2d54-495b-a3e9-67e2e035ce71" />



📂 Repositories
🔹 Backend

🔗 https://github.com/programer12345anwar/cloud-share-backend

🔹 Frontend

🔗 https://github.com/programer12345anwar/cloud-share-web-app



🚀 Key Features
✅ Authentication & Security


Clerk authentication (Frontend)

JWT-based authentication (Backend)

Secure API access

Token validation & request filtering

Role-based access (optional)


✅ File Management

Upload files securely

Download shared files

Manage user files

Cloud-based file storage

Metadata handling


✅ Payment Integration

Razorpay payment gateway

Subscription / premium user support

Payment verification APIs

Secure transaction handling


✅ API Management

Swagger & OpenAPI documentation

Versioned REST APIs

Clean controller architecture


✅ Architecture

Modular backend structure

Stateless APIs

Separation of concerns

Scalable design approach

🛠️ Tech Stack
Backend

Java

Spring Boot

JWT Authentication

Razorpay API

Swagger (OpenAPI)

MongoDB

Maven

REST Architecture

Frontend

React.js

Clerk Authentication

Tailwind / CSS

Axios

Razorpay Checkout UI

Responsive design


🔧 Backend Setup
✅ Clone Repository
git clone https://github.com/programer12345anwar/cloud-share-backend.git
cd cloud-share-backend


✅ Create .env file

Create a .env file in backend root directory:

RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=

✅ Run Backend
mvn spring-boot:run

✅ Swagger Documentation

Once server is running, open:

http://localhost:8080/swagger-ui.html

🎨 Frontend Setup
✅ Clone Repository
git clone https://github.com/programer12345anwar/cloud-share-web-app.git
cd cloud-share-web-app

✅ Install Dependencies
npm install

✅ Start Frontend Server
npm start

🌐 Application Flow
User → Clerk Auth (Frontend)
     → JWT Token Issued
     → Backend APIs
     → File Services + DB
     → Razorpay Payments
     → Secure File Access

🔐 Security Practices

Authentication handled by Clerk

Authorization via JWT

Environment-based secret management

Token filtering middleware

Payment validation on server-side

Swagger protected endpoints

📁 Project Structure
Backend
cloud-share-backend
 ┣ controller
 ┣ services
 ┣ repositories
 ┣ models
 ┣ config
 ┣ security
 ┗ utils

Frontend
src
 ├─ assets
 ├─ component
 ├─ context
 ├─ layout
 ├─ pages
 ├─ util
 └─ App.jsx


📌 Future Enhancements

Admin dashboard

File search and filtering

Cloud provider integration

AI-based content tagging

Email notifications

File expiry system

🧑‍💻 Author

Md Anwar Alam
Java Backend Developer
Spring Boot | Microservices | JWT | REST | Razorpay | Clerk | PostgreSQL, Mongodb, Mysql | Hibernate | React
📍 India

📜 License

This project is open-source for educational and personal use.

⭐ Support

If you like this project:

⭐ Star the repo
📢 Share it
🚀 Follow for more projects
