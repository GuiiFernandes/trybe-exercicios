-- Active: 1692401137876@@127.0.0.1@3306@hr
USE hr;
-- Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências (manager) cujos departamentos ( department) são diferentes.
SELECT
  CONCAT(e.first_name, ' ', e.last_name) name_employee,
  CONCAT(m.first_name, ' ', m.last_name) name_manager
FROM employees e
INNER JOIN employees m
  ON e.manager_id = m.employee_id
WHERE e.department_id <> m.department_id;

SELECT
  CONCAT(m.first_name, ' ', m.last_name) name_manager,
  COUNT(*) led_people
FROM employees e
INNER JOIN employees m
  ON e.manager_id = m.employee_id
GROUP BY m.employee_id;