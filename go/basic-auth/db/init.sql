-- source /home/kali/code/cookbook/go/basic-auth/db/init.sql

-- create database
CREATE DATABASE IF NOT EXISTS basicauth;

-- select database
use basicauth;

-- reset users table
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);