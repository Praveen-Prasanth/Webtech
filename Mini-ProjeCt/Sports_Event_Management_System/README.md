# Expense Tracker

A simple Expense Tracker application to manage incomes and expenses. The application allows users to register, log in, and track their financial transactions by adding incomes and expenses.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Description

This project is a web-based application that helps users manage their financial transactions. Users can register, log in, and add, update, delete, and view their transactions. The application also calculates the total income, total expenses, and the balance.

## Features

- User Registration
- User Login
- Add Income
- Add Expense
- Update Transactions
- Delete Transactions
- View Transactions
- Calculate Total Income, Total Expenses, and Balance

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/expense-tracker.git
    ```

2. Navigate to the project directory:
    ```bash
    cd expense-tracker
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the MongoDB server (ensure you have MongoDB installed):
    ```bash
    mongod --dbpath /path/to/your/database
    ```

5. Run the application:
    ```bash
    node server.js
    ```

6. Open your browser and navigate to:
    ```
    http://localhost:3000
    ```

## Usage

### Registration

1. Open the `register.html` file in your browser.
2. Fill in the registration form with your email and username.
3. Click the "Register" button.

### Login

1. Open the `login.html` file in your browser.
2. Fill in the login form with your email and username.
3. Click the "Login" button.
4. On successful login, you will be redirected to the `index.html` page.

### Adding Transactions

1. Use the form in `index.html` to add income or expense transactions.
2. Fill in the details such as description, amount, category, and type (income/expense).
3. Click the "Add Transaction" button.

### Viewing and Managing Transactions

1. All transactions will be listed on the main page.
2. You can update or delete transactions directly from the list.

## API Endpoints

### User Routes

- **POST /register**: Register a new user
  - Request body: `{ "email": "example@example.com", "username": "username" }`
- **POST /login**: Login a user
  - Request body: `{ "email": "example@example.com", "username": "username" }`

### Transaction Routes

- **POST /api/transaction**: Add a new transaction
  - Request body: `{ "type": "income", "description": "Salary", "value": 5000, "email": "example@example.com" }`
- **GET /transactions**: Get all transactions
- **PUT /transactions/:id**: Update a transaction
- **DELETE /transactions/:id**: Delete a transaction
- **GET /calculate**: Calculate total income, expenses, and balance

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- HTML/CSS
- JavaScript
- Bootstrap

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any changes you would like to make.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
