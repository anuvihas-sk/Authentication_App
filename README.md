# Authentication App

This is a simple authentication app built using **React Native** (Expo) and **Firebase** (or any other authentication service). The app demonstrates how to implement basic authentication features such as user registration, login, and logout. The app is designed for mobile devices and provides a seamless authentication flow.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Firebase Setup](#firebase-setup)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Introduction

This authentication app allows users to:

- Register with an email and password.
- Log in using the credentials they created.
- Log out of their session.

It uses **Firebase Authentication** for handling the backend logic of authentication, and **Expo** to develop the app quickly with minimal setup.

## Features

- **User Registration:** Users can create an account using email and password.
- **User Login:** Users can log in with their credentials.
- **User Logout:** Users can log out, and the app redirects to the welcome screen.
- **Error Handling:** Displays error messages for invalid credentials, empty fields, or other issues during the authentication process.
- **Responsive Design:** The app works well on both Android and iOS.

## Technologies Used

- **React Native**: Framework for building cross-platform mobile apps.
- **Expo**: Development platform to simplify building React Native apps.
- **Firebase Authentication**: Provides simple and secure authentication for users.
- **React Navigation**: For managing screen transitions and navigation in the app.
- **JavaScript (ES6)**: JavaScript for writing the logic and components.

## Setup and Installation

To set up the app locally, follow these steps:

### Prerequisites

- **Node.js**: Make sure you have [Node.js](https://nodejs.org/) installed on your machine.
- **Expo CLI**: Install Expo CLI globally using the following command:

  ```bash
  npm install -g expo-cli
  ```

- **Firebase Account**: You'll need a Firebase project. If you don't have one, create one at [Firebase Console](https://console.firebase.google.com/).

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/authentication-app.git
   cd authentication-app
   ```

2. **Install dependencies:**

   Run the following command to install all necessary dependencies:

   ```bash
   npm install
   ```

3. **Set up Firebase:**

   If you're using Firebase for authentication, create a new Firebase project in the [Firebase Console](https://console.firebase.google.com/). Once your project is created, enable **Email/Password Authentication** in the Firebase Authentication settings.

4. **Add Firebase config to the app:**

   Create a `firebaseConfig.js` file in the project and insert your Firebase configuration details:

   ```javascript
   import firebase from 'firebase/app';
   import 'firebase/auth';

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT_ID.appspot.com",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID",
   };

   if (!firebase.apps.length) {
     firebase.initializeApp(firebaseConfig);
   } else {
     firebase.app();
   }

   export { firebase };
   ```

5. **Run the app:**

   Start the app using Expo:

   ```bash
   expo start
   ```

   This will open the Expo development server in your default browser. Scan the QR code with the Expo Go app on your mobile device to run the app.
