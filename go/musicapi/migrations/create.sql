-- create table
CREATE TABLE records (
    id INT PRIMARY KEY AUTO_INCREMENT,
    artist VARCHAR(255),
    title VARCHAR(255)
);


-- populate w/ 10 random records
INSERT INTO records (id, artist, title) VALUES
  ('123456', 'The Beatles', 'Abbey Road'),
  ('234567', 'Pink Floyd', 'The Dark Side of the Moon'),
  ('345678', 'Led Zeppelin', 'IV'),
  ('456789', 'The Rolling Stones', 'Exile on Main St.'),
  ('567890', 'Michael Jackson', 'Thriller'),
  ('678901', 'Prince', 'Purple Rain'),
  ('789012', 'Nirvana', 'Nevermind'),
  ('890123', 'Radiohead', 'OK Computer'),
  ('901234', 'U2', 'The Joshua Tree'),
  ('012345', 'Bob Dylan', 'Highway 61 Revisited');