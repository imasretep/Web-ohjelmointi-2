CREATE DATABASE IF NOT EXISTS sportTable;

USE sportTable;

CREATE TABLE athletes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL, 
    nickname VARCHAR(100),
    birth_year DATE NOT NULL,
    weight DECIMAL(5,2),                
    image_url VARCHAR(255),            
    sport VARCHAR(100),                 
    achievements TEXT                   
);

INSERT INTO athletes (first_name, last_name, nickname, birth_year, weight, image_url, sport, achievements)
VALUES 
('Paavo', 'Nurmi', 'Flying finn', '1897-06-13', 65.0, 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Paavo_Nurmi_%28Antwerp_1920%29.jpg', 'Kestävyysjuoksu', '9 kultamitalia olympialaisissa'),
('Lasse', 'Virén', 'Lasse', '1949-07-22', 68.0, 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Lasse_Vir%C3%A9n_c1974.jpg', 'Kestävyysjuoksu', '4 kultamitalia olympialaisissa'),
('Kimi', 'Räikkönen', 'Iceman', '1979-10-17', 73.0, 'https://upload.wikimedia.org/wikipedia/commons/f/ff/F12019_Schloss_Gabelhofen_%2822%29_%28cropped%29.jpg', 'Formula 1', 'Formula 1 -maailmanmestaruus 2007'),
('Teemu', 'Selänne', 'Teemu', '1970-07-03', 90.0, 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Teemu_Selanne_on_the_ice_November_2010.jpg', 'Jääkiekko', '2 olympiakultaa, 1 olympiahopea'),
('Jari', 'Litmanen', 'Litti', '1971-02-20', 75.0, 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Litmanen_jari.jpg', 'Jalkapallo', 'UEFA-mestaruus 1995');
