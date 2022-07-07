
CREATE DATABASE IF NOT EXISTS `TypeScriptExpress`;
USE `TypeScriptExpress`;

DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `Users`
VALUES
  (1, 'Geraldo', 'geraldo@email.com', '123456'),
  (2, 'Marceline', 'marceline@email.com', '123456');
