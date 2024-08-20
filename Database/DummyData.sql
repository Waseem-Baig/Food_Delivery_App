USE FOODAPPS;
-- Insert into USER table with SHA1 encrypted passwords
INSERT INTO USER (NAME, ADDRESS, USERNAME, EMAIL, PASSWORD) VALUES
('Alice', '123 Main St', 'alice123', 'alice@example.com', SHA1('password1'),0),
('Bob', '456 Elm St', 'bob456', 'bob@example.com', SHA1('password2'),1),
('Charlie', '789 Oak St', 'charlie789', 'charlie@example.com', SHA1('password3'),0),
('David', '101 Pine St', 'david101', 'david@example.com', SHA1('password4'),1),
('Eva', '202 Maple St', 'eva202', 'eva@example.com', SHA1('password5'),1),
('Frank', '303 Birch St', 'frank303', 'frank@example.com', SHA1('password6'),1),
('Grace', '404 Cedar St', 'grace404', 'grace@example.com', SHA1('password7'),1),
('Hannah', '505 Walnut St', 'hannah505', 'hannah@example.com', SHA1('password8'),1),
('Ivy', '606 Cherry St', 'ivy606', 'ivy@example.com', SHA1('password9'),1),
('Jack', '707 Willow St', 'jack707', 'jack@example.com', SHA1('password10'),1);
-- Insert into VENDOR table

INSERT INTO VENDOR (NAME, ADDRESS, RATING) VALUES
('Vendor A', '123 Market St', 4.5),
('Vendor B', '456 Commerce St', 4.0),
('Vendor C', '789 Trade St', 3.8),
('Vendor D', '101 Exchange St', 4.2),
('Vendor E', '202 Business St', 3.9),
('Vendor F', '303 Industry St', 4.1),
('Vendor G', '404 Enterprise St', 4.3),
('Vendor H', '505 Corporate St', 3.7),
('Vendor I', '606 Commercial St', 4.4),
('Vendor J', '707 Economic St', 4.0);

-- Insert into ORDERS table
INSERT INTO ORDERS (VENDORID, USERID, AMOUNT, STATUS, DATE) VALUES
(1, 1, 25.50, 'Pending', '2024-08-01'),
(2, 2, 15.75, 'Completed', '2024-08-02'),
(3, 3, 30.00, 'Cancelled', '2024-08-03'),
(4, 4, 22.40, 'Pending', '2024-08-04'),
(5, 5, 18.90, 'Completed', '2024-08-05'),
(6, 6, 27.60, 'Pending', '2024-08-06'),
(7, 7, 19.80, 'Completed', '2024-08-07'),
(8, 8, 23.50, 'Cancelled', '2024-08-08'),
(9, 9, 21.30, 'Pending', '2024-08-09'),
(10, 10, 29.90, 'Completed', '2024-08-10');

-- Insert into ITEM table
INSERT INTO ITEM (NAME, IMAGE, VENDORID) VALUES
('Burger', NULL, 1),
('Pizza', NULL, 2),
('Pasta', NULL, 3),
('Salad', NULL, 4),
('Sushi', NULL, 5),
('Sandwich', NULL, 6),
('Taco', NULL, 7),
('Steak', NULL, 8),
('Soup', NULL, 9),
('Ice Cream', NULL, 10);

-- Insert into CONTAINS table
INSERT INTO CONTAINS (ORDERID, ITEMID) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);

-- Insert into DELIVERY table
INSERT INTO DELIVERY (ORDERID, VENDORID, STATUS, DATE) VALUES
(1, 1, 'Pending', '2024-08-01'),
(2, 2, 'Completed', '2024-08-02'),
(3, 3, 'Cancelled', '2024-08-03'),
(4, 4, 'Pending', '2024-08-04'),
(5, 5, 'Completed', '2024-08-05'),
(6, 6, 'Pending', '2024-08-06'),
(7, 7, 'Completed', '2024-08-07'),
(8, 8, 'Cancelled', '2024-08-08'),
(9, 9, 'Pending', '2024-08-09'),
(10, 10, 'Completed', '2024-08-10');

-- Insert into PAYMENT table
INSERT INTO PAYMENT (STATUS, ORDERID, AMOUNT) VALUES
('Pending', 1, 25.50),
('Completed', 2, 15.75),
('Cancelled', 3, 30.00),
('Pending', 4, 22.40),
('Completed', 5, 18.90),
('Pending', 6, 27.60),
('Completed', 7, 19.80),
('Cancelled', 8, 23.50),
('Pending', 9, 21.30),
('Completed', 10, 29.90);
