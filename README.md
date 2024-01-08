````markdown
# Simple App on PHP and React

This project is a simple application built using PHP for the backend and React for the frontend.

## Prerequisites

- [XAMPP](https://www.apachefriends.org/index.html) for Apache, MySQL, PHP, and phpMyAdmin.

## Steps to Set Up

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/rajmendra/simple-app-on-php-react.git
   ```
````

2. **Import Database:**

   - Open phpMyAdmin (http://localhost/phpmyadmin) in your web browser.
   - Create a new database named `lab_management`.
   - Import the initial SQL schema by selecting the `init.sql` file located in `backend` directory.

3. **Paste API in htdocs:**

   - Copy the contents of the `api` folder and paste them into the `htdocs` directory of your XAMPP installation.

4. **Restart Apache and MySQL:**

   - Restart the Apache and MySQL servers using the XAMPP control panel.

5. **Setup Frontend:**

   - Open a terminal and navigate to the `frontend` directory.

   ```bash
   cd simple-app-on-php-react/frontend
   ```

   - Install dependencies.

   ```bash
   npm install
   ```

   - Start the React app.

   ```bash
   npm start
   ```

6. **Access the Application:**

   Open your web browser and visit http://localhost:3000. You should be able to save new data and get the list of data.

## Contributing

If you'd like to contribute, please follow the [contributing guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [License Name] License - see the [LICENSE](LICENSE) file for details.

```

Make sure to replace `[License Name]` with the actual license name if applicable. This README provides step-by-step instructions for setting up the project on a local environment using XAMPP, importing the database, and running the frontend.
```
