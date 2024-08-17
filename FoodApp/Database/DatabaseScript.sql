CREATE DATABASE FOODAPPS;
-- USE DB
USE FOODAPPS;
-- USER TABLE
CREATE TABLE USER(
	USERID INT PRIMARY KEY AUTO_INCREMENT,
    NAME VARCHAR(25) NOT NULL,
    ADDRESS VARCHAR(50) NOT NULL,
    USERNAME VARCHAR(20) UNIQUE NOT NULL,
    EMAIL VARCHAR(25) NOT NULL,
    PASSWORD VARCHAR(45) NOT NULL
);
-- VENDOR TABLE
CREATE TABLE VENDOR(
	VENDORID INT PRIMARY KEY AUTO_INCREMENT,
    NAME VARCHAR(25) NOT NULL,
    ADDRESS VARCHAR(50),
    RATING FLOAT(2,2) DEFAULT 0
);
-- ORDER TABLE
CREATE TABLE ORDERS(
	ORDERID INT AUTO_INCREMENT PRIMARY KEY,
    VENDORID INT NOT NULL,
    USERID INT NOT NULL,
    AMOUNT FLOAT(5,4),
    STATUS CHAR(7),
    DATE date,
    FOREIGN KEY(VENDORID) REFERENCES VENDOR(VENDORID),
    FOREIGN KEY(USERID) REFERENCES USER(USERID)
);
-- ITEM TABLE
CREATE TABLE ITEM(
	ITEMID INT PRIMARY KEY AUTO_INCREMENT,
    NAME VARCHAR(25),
    IMAGE BLOB DEFAULT NULL,
    VENDORID INT NOT NULL,
    FOREIGN KEY(VENDORID) REFERENCES VENDOR(VENDORID)
);
-- CART RELATED
CREATE TABLE CONTAINS(
	ORDERID INT NOT NULL,
    ITEMID INT NOT NULL,
    FOREIGN KEY(ORDERID) REFERENCES ORDERS(ORDERID),
    FOREIGN KEY(ITEMID) REFERENCES  ITEM(ITEMID));
-- DELIVERY TABLE
CREATE TABLE DELIVERY(
	DELIVERYID INT PRIMARY KEY AUTO_INCREMENT,
    ORDERID INT NOT NULL,
    VENDORID INT NOT NULL,
    STATUS CHAR(7),
    DATE DATE,
    FOREIGN KEY(ORDERID) REFERENCES ORDERS(ORDERID),
    FOREIGN KEY(VENDORID) REFERENCES VENDOR(VENDORID)
);
-- PAYMENT TABLE
CREATE TABLE PAYMENT(
	PAYMENTID INT PRIMARY KEY AUTO_INCREMENT,
    STATUS CHAR(7),
    ORDERID INT NOT NULL,
    AMOUNT FLOAT(5,4),
    FOREIGN KEY(ORDERID) REFERENCES ORDERS(ORDERID)
);
