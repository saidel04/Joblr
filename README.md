
# **Joblr: Simplified Job Applications**

![Joblr](https://github.com/user-attachments/assets/329aea36-eb6b-4959-bad9-b847895a6b4e)


**Joblr** is a React Native-based mobile application designed to simplify the job application process. Users can swipe through job listings, save jobs for later, and apply directly with minimal effort. The app integrates with a Django backend to handle user authentication and job management securely.

---

## **Table of Contents**

- [Features](#features)
- [Tech Stack](#tech-stack)
- [API Documentation](#api-documentation)
- [Screenshots](#screenshots)

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
![image](https://github.com/user-attachments/assets/9e87cb17-8af0-4644-b154-faa9bc5d0974)


### **Sign-up Screen**
![image](https://github.com/user-attachments/assets/d2ad83d1-683a-4c6c-9086-951264df598d)

---


## **Contact**

If you have any questions or feedback, please reach out:

- **Developer**: Said Elakad  
- **Email**: Said.Elakad@gmail.com


---
