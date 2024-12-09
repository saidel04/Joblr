
# **Joblr: Simplified Job Applications**

![Joblr Logo](https://via.placeholder.com/150) <!-- Replace with your logo if available -->

**Joblr** is a React Native-based mobile application designed to simplify the job application process. Users can swipe through job listings, save jobs for later, and apply directly with minimal effort. The app integrates with a Django backend to handle user authentication and job management securely.

---

## **Table of Contents**

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [API Documentation](#api-documentation)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## **Features**

- **User Authentication**: Secure login and registration using hashed passwords.
- **Swipe-to-Apply**: A Tinder-like swiping interface for job applications.
- **Job Listings**: Browse through jobs fetched via third-party APIs like Indeed.
- **Favorites**: Save job listings for later review.
- **Responsive Design**: Optimized for both Android and iOS platforms.

---

## **Tech Stack**

### **Frontend**
- React Native  
- Expo (for development and testing)

### **Backend**
- Django  
- Django REST Framework (DRF)  
- SQLite (for local development)

### **Authentication**
- JWT-based authentication with Django Rest Framework Simple JWT

---

## **Getting Started**

Follow these instructions to set up and run the project locally.

### **Prerequisites**
- Node.js and npm
- Python 3.10 or higher
- Expo CLI
- Git
- Android Studio (for emulator) or a physical device with Expo Go

### **Installation**

#### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/joblr.git
cd joblr
```

#### **2. Frontend Setup**
```bash
cd JoblrFrontend
npm install
expo start
```

#### **3. Backend Setup**
- Navigate to the backend directory:
  ```bash
  cd JoblrBackend
  ```
- Create a virtual environment and activate it:
  ```bash
  python -m venv env
  source env/bin/activate  # On Windows: env\Scripts\activate
  ```
- Install dependencies:
  ```bash
  pip install -r requirements.txt
  ```
- Apply migrations:
  ```bash
  python manage.py migrate
  ```
- Run the server:
  ```bash
  python manage.py runserver
  ```

#### **4. Testing the App**
- Launch the Expo app on your device or use the Android emulator.
- Use the local IP or `10.0.2.2` for the backend connection.

---

## **API Documentation**

| Endpoint         | Method | Description                  | Status Codes |
|------------------|--------|------------------------------|--------------|
| `/auth/`         | POST   | Authenticate a user          | 200, 400, 401 |
| `/create/`       | POST   | Register a new user          | 201, 400     |
| `/jobs/`         | GET    | Fetch available job listings | 200, 500     |

---

## **Screenshots**

### **Login Screen**
![Login Screen](https://via.placeholder.com/300x600)

### **Job Listings**
![Job Listings](https://via.placeholder.com/300x600)

---


## **Contact**

If you have any questions or feedback, please reach out:

- **Developer**: Said Elakad  
- **Email**: Said.Elakad@gmail.com


---
