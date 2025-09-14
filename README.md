### 🚗 Car Rental Application

This is a full-stack **Car Rental Management System** built with the **MERN stack (MongoDB, Express.js, React, Node.js)** and deployed on **Vercel**. It enables users to **rent cars, manage bookings, and become owners** who can list and manage their own vehicles.

-----

### ✨ Features

#### **User Features**

  * Register/Login with **JWT authentication**
  * Browse available cars
  * Book cars for specific dates
  * Manage personal profile

#### **Owner Features**

  * Upgrade account to an **Owner** role
  * Add cars with images (via **ImageKit**)
  * Manage listed cars (toggle availability, delete, etc.)
  * View bookings for their cars

#### **Admin / System**

  * Secure API routes with **JWT middleware**
  * **MongoDB Atlas** integration for the database
  * Cloud image storage & optimization with **ImageKit**

-----

### 🛠️ Tech Stack

#### **Frontend**

  * **React 19** (with Vite 7)
  * **Tailwind CSS 4** for styling
  * **React Router v7** for navigation
  * **React Hot Toast / Toastify** for notifications
  * **Axios** for API calls

#### **Backend**

  * **Node.js** + **Express.js**
  * **MongoDB (Mongoose)** for the database
  * **JWT** for authentication
  * **Bcrypt** for password hashing
  * **Multer** for file uploads
  * **ImageKit** for image hosting

-----

### 📂 Project Structure

```
CarRental/
│── Client/        # React frontend
│   ├── src/       # Components, pages, assets
│   ├── public/    # Static files
│   └── package.json
│
│── Server/        # Node.js + Express backend
│   ├── Configs/   # Database & ImageKit config
│   ├── controllers/ # Business logic
│   ├── middleware/  # Auth & Multer
│   ├── models/    # Mongoose schemas
│   ├── routes/    # API routes
│   └── index.js   # Server entry
│
└── README.md
```

-----

### ⚙️ Installation & Setup

#### **🔽 Clone Repository**

```bash
git clone https://github.com/your-username/car-rental.git
cd car-rental
```

#### **▶️ Setup Backend**

1.  Navigate to the `Server` directory and install dependencies:
    ```bash
    cd Server
    npm install
    ```
2.  Create a `.env` file inside the `Server/` directory and add your configurations:
    ```
    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key
    IMAGEKIT_PUBLIC_KEY=your_public_key
    IMAGEKIT_PRIVATE_KEY=your_private_key
    IMAGEKIT_URL_ENDPOINT=your_url_endpoint
    ```
3.  Run the server:
    ```bash
    npm run server
    ```

-----

#### **💻 Setup Frontend**

1.  Navigate back to the `Client` directory and install dependencies:
    ```bash
    cd ../Client
    npm install
    ```
2.  Create a `.env` file inside the `Client/` directory:
    ```
    VITE_API_URL=http://localhost:5000/api
    VITE_CURRENCY=₹
    ```
3.  Run the frontend:
    ```bash
    npm run dev
    ```

-----

### 🚀 Deployment

  * **Frontend:** Deploy on **Vercel**
  * **Backend:** Can be hosted on **Vercel**, **Render**, or **Railway**
  * **Database:** Use **MongoDB Atlas**

-----

### 🔑 API Endpoints

#### **User Routes (`/api/user`)**

  * `POST /register` → Register a user
  * `POST /login` → Log in a user
  * `GET /data` → Get user details (JWT required)
  * `GET /cars` → Fetch all available cars

#### **Owner Routes (`/api/owner`)**

  * `POST /role` → Change user role to Owner
  * `POST /car` → Add a new car
  * `GET /cars` → Get an owner's listed cars
  * `POST /toggle` → Toggle a car's availability

#### **Booking Routes (`/api/bookings`)**

  * `POST /new` → Create a new booking
  * `GET /my` → Get a user's bookings
  * `GET /car/:id` → Get bookings for a specific car
