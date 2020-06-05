DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;


CREATE TABLE rooms (
  id INTEGER AUTO_INCREMENT,
  name VARCHAR(40) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(40) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE messages (
  /* list of all the messages in the application */
  id INTEGER AUTO_INCREMENT,
  text VARCHAR(140) NOT NULL,
  roomname VARCHAR(20),
  user_id INTEGER NOT NULL,
  PRIMARY KEY (id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
