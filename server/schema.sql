DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  id INTEGER AUTO_INCREMENT,
  name VARCHAR(40) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id INTEGER AUTO_INCREMENT,
  name VARCHAR(40) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  /* list of all the messages in the application */
  id INTEGER AUTO_INCREMENT,
  text VARCHAR(140) NOT NULL,
  room_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (room_id)
    REFERENCES rooms(id),
  FOREIGN KEY (user_id)
    REFERENCES users(id)
);

/* Create other tables and define schemas for them here!
    FOREIGN KEY (parent_id)
      REFERENCES parent(id)
*/





/*ALTER TABLE messages ADD FOREIGN KEY (room_id) REFERENCES rooms (id);
ALTER TABLE messages ADD FOREIGN KEY (user_id) REFERENCES users (id);*/



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
