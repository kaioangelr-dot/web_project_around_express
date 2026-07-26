# Tripleten web_project_around_express

## Around the US (Back-End) - Web Project Around Express

This repository contains the back-end API for the **"Around the US"** web application. Built using **Node.js** and **Express.js**, this server provides routes for retrieving users and card data from local JSON files, establishing the foundation for a full-stack RESTful API.

---

## 🚀 Features & Endpoints

The API serves mock data for users and cards via the following endpoints on `http://localhost:3000`:

- **`GET /users`** — Returns a list of all users.
- **`GET /users/:id`** — Returns a user object matching the provided ID.
  - _Error handling:_ Returns status `404` with `{"message": "User ID not found"}` if the ID does not exist.
- **`GET /cards`** — Returns a list of all cards.
- **`GET /*`** (Non-existent routes) — Returns status `404` with `{"message": "Requested resource not found"}`.

---

## 🛠️ Tech Stack & Tooling

- **Runtime Environment:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/)
- **Development Reload:** [Nodemon](https://nodemon.io/)
- **Linter & Code Style:** [ESLint](https://eslint.org/) following the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) (`airbnb-base`)
- **Code Formatting:** [EditorConfig](https://editorconfig.org/)

---

## 📁 Project Structure

```text
web_project_around_express/
├── data/
│   ├── users.json       # JSON file containing user data
│   └── cards.json       # JSON file containing card data
├── routes/
│   ├── users.js        # User route handlers
│   └── cards.js        # Card route handlers
├── app.js               # Application entry point & Express server configuration
├── .editorconfig        # Code style specifications across editors
├── .eslintrc            # ESLint configuration setup
├── .prettierrc          # Prettier code formatting configuration
├── .gitignore           # Ignored files for Git
├── package.json         # NPM scripts and project dependencies
├── package-lock.json    # Locked dependency version tree
└── README.md            # Project documentation
```
