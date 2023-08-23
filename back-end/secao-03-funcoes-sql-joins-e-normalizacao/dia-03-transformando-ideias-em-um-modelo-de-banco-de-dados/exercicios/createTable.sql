CREATE SCHEMA IF NOT EXISTS zoo;
USE zoo;

CREATE TABLE animals (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  species VARCHAR(50) NOT NULL,
  gender CHAR(1) NOT NULL,
  `age` INT NOT NULL,
  location VARCHAR(80) NOT NULL
);

CREATE TABLE managers (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL
);

CREATE TABLE employees (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  manager_id INT NOT NULL,
  FOREIGN KEY (manager_id) REFERENCES managers(`id`)
);

CREATE TABLE `scale` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  animal_id INT NOT NULL,
  employee_id INT NOT NULL,
  FOREIGN KEY (animal_id) REFERENCES animals(`id`),
  FOREIGN KEY (employee_id) REFERENCES employees(`id`)
);
