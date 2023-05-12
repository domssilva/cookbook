CREATE DATABASE IF NOT EXISTS musicapi;

USE musicapi;

DROP TABLE IF EXISTS artist;

CREATE TABLE IF NOT EXISTS artist (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  genre VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS records (
  id INT(11) NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  artist_id INT(11) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (artist_id) REFERENCES artist(id) ON DELETE CASCADE
);

-- insert random data
INSERT INTO artist (name, genre) VALUES
('The Beatles', 'rock'),
('Beyonce', 'pop'),
('Miles Davis', 'jazz'),
('Bob Marley', 'reggae'),
('Kendrick Lamar', 'hip hop');

INSERT INTO records (title, artist_id) VALUES
('Abbey Road', 1),
('Lemonade', 2),
('Kind of Blue', 3),
('Exodus', 4),
('To Pimp a Butterfly', 5),
('Revolver', 1),
('B\'Day', 2),
('Bitches Brew', 3),
('Kaya', 4),
('Good Kid, M.A.A.D City', 5);