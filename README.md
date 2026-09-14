# 🎓 CampusConnect — College Event Management Portal:

> **A modern, responsive and interactive college event management portal built to help students discover, explore and register for campus events.**

CampusConnect is a **frontend-based college event management portal** designed to provide students with a simple and engaging platform for discovering upcoming college events, viewing event details, managing registrations, and exploring events through a calendar interface.

The project focuses on creating a **clean, responsive and user-friendly experience** using modern frontend technologies and browser-based storage.

---

## 🌟 Features

### 🔐 Login & Registration

* Clean login interface for students.
* Student Email / ID and password fields.
* Registration interface with password validation.
* Password confirmation validation.
* Show/Hide password functionality.
* Forgot password interaction for demo purposes.
* Demo login accepts any non-empty credentials.

> **Note:** This project does not contain real authentication or a backend server. It is a frontend demonstration project.

---

### 📅 Event Management

Students can explore different types of college events, including:

* 💻 Technology
* 🎭 Cultural
* ⚽ Sports
* 🤖 Workshops

Each event contains important information such as:

* Event name
* Date
* Time
* Venue
* Category
* Organizer
* Event image
* Description

The project includes sample events such as **TechFest 2026, Annual Cultural Fest, Inter College Football, AI & ML Workshop, Photography Walk and Coding Challenge**.

---

### 🔎 Search & Filtering

CampusConnect provides an interactive event discovery system.

Users can:

* Search events by name.
* Filter events by category.
* Filter events by date.
* Combine search and filtering options.
* Quickly browse matching events.

The filtering system dynamically updates the event cards based on the selected criteria.

---

### 📖 Event Details

Users can click **View Details** to open a detailed event modal.

The modal displays:

* Event image
* Category
* Event name
* Date
* Time
* Venue
* Organizer
* Description
* Registration option

This allows students to understand an event before registering.

---

### 📝 Event Registration

Students can register for available events directly from the event details section.

The system:

* Stores registered event IDs.
* Prevents duplicate registrations.
* Displays registered events.
* Allows students to cancel registrations.
* Updates the registration section dynamically.

Registrations are stored using browser `localStorage`.

---

### 🎟️ My Registrations

The **My Registrations** section allows students to view their registered events.

Each registration displays:

* Event name
* Event date
* Venue
* Registration status
* Cancel registration option

Students can cancel a registration whenever required.

---

### 🗓️ Interactive Event Calendar

CampusConnect includes an interactive calendar for viewing scheduled events.

The calendar:

* Displays the current selected month.
* Shows days of the week.
* Highlights dates containing events.
* Displays event names on event dates.
* Supports previous/next month navigation.

---

### 👤 Profile Management

Users can update their displayed profile name.

The updated name is stored in browser `localStorage`, allowing the information to remain available within the browser session/storage.

---

### ⚙️ Admin Event Creation

The project also provides a frontend admin-style event creation functionality.

An administrator can enter:

* Event name
* Event date
* Venue
* Category

A new event is then added to the event list and saved in `localStorage`.

The event list and calendar are refreshed automatically after creation.

---

### 🌙 Dark Mode

CampusConnect supports both:

* ☀️ Light Mode
* 🌙 Dark Mode

The selected theme is stored in `localStorage`, allowing the user's theme preference to persist.

---

### 📱 Responsive Navigation

A hamburger menu is implemented for smaller screens.

The navigation menu can be opened and closed interactively, making the portal more suitable for mobile and tablet layouts.

---

### 🔔 Toast Notifications

CampusConnect uses toast notifications to provide instant feedback for actions such as:

* Successful login
* Successful registration
* Duplicate registration
* Registration cancellation
* Profile update
* Event creation
* Logout

Toast messages automatically disappear after a short duration.

---

## 🛠️ Technologies Used

| Technology           | Purpose                                |
| -------------------- | -------------------------------------- |
| **HTML5**            | Structure and semantic page layout     |
| **CSS3**             | Styling, responsive design and UI      |
| **JavaScript**       | Dynamic functionality and interactions |
| **DOM Manipulation** | Dynamic rendering and UI updates       |
| **LocalStorage**     | Browser-based data persistence         |
| **Unsplash Images**  | Event imagery                          |

---

## 🧠 Project Architecture

CampusConnect follows a simple **frontend-only architecture**:

```text
                    ┌─────────────────────┐
                    │    CampusConnect    │
                    │   Event Portal UI   │
                    └──────────┬──────────┘
                               │
             ┌─────────────────┼─────────────────┐
             │                 │                 │
             ▼                 ▼                 ▼
       ┌───────────┐     ┌────────────┐    ┌─────────────┐
       │   Login   │     │   Events   │    │   Profile   │
       │ Register  │     │ Management │    │ Management  │
       └───────────┘     └─────┬──────┘    └─────────────┘
                               │
                ┌──────────────┼──────────────┐
                │              │              │
                ▼              ▼              ▼
             Search        Register       Calendar
             Filter        Cancel         Navigation
                │              │              │
                └──────────────┼──────────────┘
                               ▼
                       ┌──────────────┐
                       │ LocalStorage │
                       └──────────────┘
```

---

## 💾 Data Storage

Since this is a **frontend-only project**, browser `localStorage` is used instead of a backend database.

The project stores information such as:

```text
campusEvents
registrations
loggedIn
currentUser
profileName
theme
```

This allows the application to demonstrate persistent browser-based interactions without requiring a server or database.

---

## 🔄 Application Flow

```text
            START
              │
              ▼
       Loading Screen
              │
          3 Seconds
              │
              ▼
        Login / Register
              │
              ▼
       User enters details
              │
              ▼
       Frontend validation
              │
              ▼
       ┌───────────────┐
       │    Portal     │
       └───────┬───────┘
               │
       ┌───────┼────────┐
       │       │        │
       ▼       ▼        ▼
     Events  Calendar  Profile
       │
       ▼
 Search / Filter
       │
       ▼
 View Event Details
       │
       ▼
 Register Event
       │
       ▼
 My Registrations
       │
       ▼
 Cancel Registration
```

The loading screen is intentionally configured for a **3-second loading experience** before displaying the login interface.

---

## 📂 Suggested Project Structure

```text
CampusConnect/
│
├── index.html
├── style.css
├── script.js
│
├── assets/
│   └── images/
│
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/CampusConnect.git
```

### 2. Open the Project

Navigate to the project folder:

```bash
cd CampusConnect
```

### 3. Run the Website

Since this is a frontend-only project, you can simply open:

```text
index.html
```

in your browser.

For a better development experience, you can also use **VS Code Live Server**.

---

## 🎯 Project Objectives

The main objectives of CampusConnect are:

* To create a centralized platform for college events.
* To simplify event discovery for students.
* To provide an interactive event registration experience.
* To organize events through a calendar.
* To implement search and filtering functionality.
* To demonstrate frontend state management using `localStorage`.
* To build a responsive and modern user interface.
* To practice HTML, CSS and JavaScript concepts through a real-world project.

---

## ✨ Key Highlights

* 🎨 Modern and user-friendly interface
* 📱 Responsive navigation
* 🔎 Dynamic event search
* 🏷️ Category filtering
* 📅 Date filtering
* 🗓️ Interactive calendar
* 📝 Event registration system
* ❌ Registration cancellation
* 👤 Profile editing
* ⚙️ Admin event creation
* 🌙 Dark mode
* 🔔 Toast notifications
* 💾 LocalStorage-based persistence
* 🔐 Demo login/register flow

---

## ⚠️ Current Limitations

This version is intentionally a **frontend-only implementation**.

Therefore:

* No real backend server is connected.
* No real database is used.
* Login does not perform real authentication.
* Passwords are not securely stored.
* Forgot-password functionality is only a demo interaction.
* Data is stored locally in the user's browser.
* Different users do not have separate server-side accounts.

The source code explicitly identifies the project as frontend-only with no backend and no real login.

---

## 🔮 Future Enhancements

The project can be extended into a complete full-stack application by adding:

### Backend

* Node.js + Express
* Java Spring Boot
* PHP / Laravel
* Python Django / Flask

### Database

* MySQL
* MongoDB
* PostgreSQL
* Firebase

### Authentication

* Real user registration
* Secure login
* Password hashing
* JWT/session authentication
* Password reset through email

### Advanced Event Management

* Event editing and deletion
* Event capacity management
* QR-code based event check-in
* Attendance tracking
* Event reminders
* Email notifications
* Event approval workflow

### Admin Dashboard

* Student management
* Event management
* Registration analytics
* Attendance statistics
* Event performance dashboard

---

## 📊 Future Full-Stack Architecture

```text
                 ┌────────────────────┐
                 │      Student       │
                 └─────────┬──────────┘
                           │
                           ▼
                 ┌────────────────────┐
                 │   CampusConnect    │
                 │    Frontend UI     │
                 └─────────┬──────────┘
                           │
                        API Calls
                           │
                           ▼
                 ┌────────────────────┐
                 │      Backend       │
                 │   REST API Server   │
                 └─────────┬──────────┘
                           │
                    ┌──────┴──────┐
                    ▼             ▼
              Authentication   Event API
                    │             │
                    └──────┬──────┘
                           ▼
                 ┌────────────────────┐
                 │      Database      │
                 └────────────────────┘
```

---

## 👨‍💻 Learning Outcomes

Through this project, the following concepts are demonstrated:

* HTML semantic structure
* CSS-based responsive UI
* JavaScript DOM manipulation
* JavaScript functions and event handling
* Arrays and objects
* Array filtering and searching
* Dynamic HTML rendering
* Browser LocalStorage API
* Modal interactions
* Form validation
* Theme management
* Calendar logic
* Frontend state management

---

## 🏆 Project Type

**College Project / Frontend Web Development Project**

**Domain:**
🎓 Education / Campus Management

**Category:**
💻 Web Development

**Implementation:**
🌐 Frontend Only

---

## 📌 Disclaimer

CampusConnect is developed as an educational/demo project to demonstrate frontend web development concepts and interactive college event management functionality.

It is not intended to represent a production-ready authentication or event management system.

---

## ⭐ Show Your Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub!

---

### Made with ❤️ for College Event Management

**CampusConnect — Connect. Discover. Participate.**

