---
title: PHP Development & CRUD Operations
description: This is a PHP tutorial to help you learn how to build dynamic web applications using PHP.
slug: php-development-and-crud-operatons
author: Sai Kiran
image: https://metamug.com/article/images/api-integration/create-rest-api-in-php.jpg
---

# Introduction to PHP: A Comprehensive Tutorial

PHP is one of the most widely used server-side scripting languages for web development. It is known for its simplicity, flexibility, and ability to integrate seamlessly with databases like MySQL. This tutorial will introduce you to PHP, covering its core concepts, setup, syntax, architecture, and how to use it to build dynamic web applications, including a simple REST API.

## What is PHP?

**PHP** (Hypertext Preprocessor) is a popular open-source server-side scripting language used for creating dynamic and interactive web applications. PHP scripts are executed on the server, and the output is sent to the client’s browser as HTML.

### Key Features of PHP

1. **Open Source**: Free to use with a vast community of developers.
2. **Cross-Platform**: Runs on Windows, Linux, and macOS.
3. **Database Integration**: Connects easily with MySQL, PostgreSQL, and SQLite.
4. **Embedded in HTML**: PHP can be embedded within HTML for seamless web development.
5. **Wide Framework Support**: Supports frameworks like Laravel, CodeIgniter, and Symfony.

## PHP Architecture

PHP follows a layered architecture:

1. **Presentation Layer**: The front-end layer where PHP interacts with HTML, CSS, and JavaScript.
2. **Business Logic Layer**: Handles application logic, including data processing and authentication.
3. **Database Layer**: Manages data storage and retrieval from databases like MySQL.
4. **Server Layer**: Runs the PHP engine and executes scripts.

## Setting Up PHP

### Install PHP
Download and install PHP from the [official PHP website](https://www.php.net/downloads) or use a local server environment like **XAMPP** or **WAMP**, which includes PHP, MySQL, and Apache.

### Verify PHP Installation
Run the following command in the terminal:

```bash
php -v
```

### Create a PHP File
Create a new file with the `.php` extension and write your first PHP script:

```php
<?php
echo "Hello, PHP!";
?>
```

Save it as `index.php` and run it in a web browser using a local server (e.g., `http://localhost/index.php`).

## Core Concepts of PHP

### 1. Variables and Data Types

PHP variables start with a `$` symbol. Common data types include:

- **String**: `$name = "John";`
- **Integer**: `$age = 25;`
- **Float**: `$price = 10.99;`
- **Boolean**: `$isAvailable = true;`
- **Array**: `$fruits = array("Apple", "Banana", "Cherry");`

### 2. Conditional Statements

Example:

```php
<?php
$age = 18;
if ($age >= 18) {
    echo "You are an adult.";
} else {
    echo "You are a minor.";
}
?>
```

### 3. Loops

Example:

```php
<?php
for ($i = 1; $i <= 5; $i++) {
    echo "Number: $i <br>";
}
?>
```

### 4. Functions

Example:

```php
<?php
function greet($name) {
    return "Hello, $name!";
}
echo greet("John");
?>
```

## Advanced PHP Development

### 1. File Handling in PHP

#### Writing to a File

```php
<?php
$file = fopen("example.txt", "w");
fwrite($file, "Hello, PHP File Handling!");
fclose($file);
echo "File written successfully!";
?>
```

#### Reading from a File

```php
<?php
$file = fopen("example.txt", "r");
echo fread($file, filesize("example.txt"));
fclose($file);
?>
```

### 2. Sending Emails with PHP (Using mail Function)

```php
<?php
$to = "example@example.com";
$subject = "Test Email";
$message = "Hello, this is a test email from PHP.";
$headers = "From: webmaster@example.com";

if(mail($to, $subject, $message, $headers)) {
    echo "Email sent successfully!";
} else {
    echo "Failed to send email.";
}
?>
```

### 3. Handling JSON Data in PHP

#### Encoding an Array to JSON

```php
<?php
$data = ["name" => "John", "age" => 30, "city" => "New York"];
echo json_encode($data);
?>
```

#### Decoding JSON to an Array

```php
<?php
$jsonString = '{"name":"John","age":30,"city":"New York"}';
$data = json_decode($jsonString, true);
echo "Name: " . $data["name"];
?>
```

## Creating a Simple REST API in PHP

A REST API in PHP typically follows these steps:

### 1. Create a Database and Table

```sql
CREATE DATABASE api_db;
USE api_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);
```

### 2. Connect to the Database

```php
<?php
$conn = new mysqli("localhost", "username", "password", "api_db");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
```

### 3. Create API Endpoints

#### Fetch All Users

```php
<?php
header("Content-Type: application/json");
require "db.php";

$sql = "SELECT * FROM users";
$result = $conn->query($sql);
$users = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
}

echo json_encode($users);
?>
```

#### Insert a User

```php
<?php
header("Content-Type: application/json");
require "db.php";

$data = json_decode(file_get_contents("php://input"), true);
$name = $data["name"];
$email = $data["email"];

$sql = "INSERT INTO users (name, email) VALUES ('$name', '$email')";
if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "User added successfully"]);
} else {
    echo json_encode(["error" => $conn->error]);
}
?>
```

## Conclusion

PHP is a powerful language for building dynamic web applications. With its simple syntax, database connectivity, and extensive community support, PHP remains a top choice for web developers. This tutorial provided an introduction to PHP architecture, advanced PHP features, and how to build a simple REST API to handle basic CRUD operations.

