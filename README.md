Horizon Ventures - User Authentication App

Overview:

Horizon Ventures is a simple web application that allows users to register, log in, and access a personalized welcome page. The application is built using React, React Router for navigation, and local storage for user data management.

Features:

- User Registration: Allows new users to sign up by providing an email and password.
- User Login: Existing users can log in with their email and password.
- Welcome Page: Upon successful login, users are redirected to a personalized welcome page.
- Logout Functionality: Users can log out, clearing their session.
- Newsletter Subscription: Users can subscribe to a newsletter using their email.

Project Structure:

Navbar.jsx - Navbar component with home and logout functionality
Footer.jsx - Footer component with a newsletter subscription form
Form.jsx - Login form for user authentication
Signup.jsx - Registration form for new users
Welcome.jsx - Welcome page displayed after successful login
App.jsx - Main App component that routes between different pages
App.css - Global styling for the application

Dependencies

- React: A JavaScript library for building user interfaces.
- React Router: A library for routing and navigation in React applications.
- Bootstrap: A front-end framework for building responsive web applications.
- React Icons: A library for including icons in React projects.

How It Works:

1. Signup: Users create an account by entering an email and password. The credentials are saved in `localStorage`.
2. Login: Users log in by providing their email and password. If the credentials match those in `localStorage`, they are logged in and redirected to the welcome page.
3. Welcome Page: Once logged in, users are greeted with a personalized welcome message.
4. Logout: Users can log out, which removes the current session from `localStorage` and redirects them to the login page.
5. Newsletter Subscription: Users can subscribe to a newsletter by entering an email.
