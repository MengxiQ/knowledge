/*
MySQL Backup
Database: knowledge
Backup Time: 2022-03-21 17:46:13
*/

SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `knowledge`.`attend`;
DROP TABLE IF EXISTS `knowledge`.`competitions`;
DROP TABLE IF EXISTS `knowledge`.`contents`;
DROP TABLE IF EXISTS `knowledge`.`guides`;
DROP TABLE IF EXISTS `knowledge`.`super`;
DROP TABLE IF EXISTS `knowledge`.`type_of_competition`;
DROP TABLE IF EXISTS `knowledge`.`users`;
DROP VIEW IF EXISTS `knowledge`.`attend_list_views`;
CREATE TABLE `attend` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user` int NOT NULL,
  `competition` int NOT NULL,
  `date` datetime NOT NULL,
  `status` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `form` mediumtext CHARACTER SET utf8 COLLATE utf8_bin,
  `timestamp` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `attend_ibfk_1` (`user`),
  KEY `attend_ibfk_2` (`competition`),
  CONSTRAINT `attend_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `attend_ibfk_2` FOREIGN KEY (`competition`) REFERENCES `competitions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
CREATE TABLE `competitions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` int DEFAULT NULL,
  `cover` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `desc` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `organizer` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `register_start_date` datetime DEFAULT NULL,
  `register_end_date` datetime DEFAULT NULL,
  `status` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `introduce` mediumtext CHARACTER SET utf8 COLLATE utf8_bin,
  `rules` mediumtext CHARACTER SET utf8 COLLATE utf8_bin,
  `awards` mediumtext CHARACTER SET utf8 COLLATE utf8_bin,
  PRIMARY KEY (`id`),
  KEY `type` (`type`),
  CONSTRAINT `competitions_ibfk_1` FOREIGN KEY (`type`) REFERENCES `type_of_competition` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
CREATE TABLE `contents` (
  `id` int NOT NULL AUTO_INCREMENT,
  `page_name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `content` mediumtext CHARACTER SET utf8 COLLATE utf8_bin,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
CREATE TABLE `guides` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `content` mediumtext CHARACTER SET utf8 COLLATE utf8_bin,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
CREATE TABLE `super` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nickname` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `motto` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
CREATE TABLE `type_of_competition` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `desc` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nickname` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `motto` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `avatar` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `attend_list_views` AS select `u`.`id` AS `user`,`u`.`nickname` AS `nickname`,`c`.`id` AS `competition`,`c`.`title` AS `competition_title`,`c`.`status` AS `progress`,`a`.`status` AS `status`,`a`.`date` AS `date`,`a`.`form` AS `form`,`a`.`id` AS `id` from ((`attend` `a` join `users` `u` on((`a`.`user` = `u`.`id`))) join `competitions` `c` on((`a`.`competition` = `c`.`id`)));
BEGIN;
LOCK TABLES `knowledge`.`attend` WRITE;
DELETE FROM `knowledge`.`attend`;
INSERT INTO `knowledge`.`attend` (`id`,`user`,`competition`,`date`,`status`,`form`,`timestamp`) VALUES (48, 3, 2, '2022-03-16 09:37:10', 'pass', '{\"nickname\":\"奇奇怪怪的用户名\",\"name\":\"lixing wei\",\"phone\":\"15777850920\",\"email\":\"1486073356@qq.com\",\"xueli\":\"本科\",\"school\":\"三生三世\",\"address\":\"guangxi\"}', NULL),(51, 3, 2, '2022-03-17 17:59:37', 'refuse', '{\"nickname\":\"奇奇怪怪的用户名\",\"name\":\"lixing wei\",\"phone\":\"15777850920\",\"email\":\"1486073356@qq.com\",\"xueli\":\"本科\",\"school\":\"三生三世\",\"address\":\"guangxi\"}', NULL),(52, 3, 2, '2022-03-21 17:43:35', 'pass', '{\"nickname\":\"奇奇怪怪的用户名\",\"name\":\"lixing wei\",\"phone\":\"15777850920\",\"email\":\"1486073356@qq.com\",\"xueli\":\"本科\",\"school\":\"三生三世\",\"address\":\"guangxi\"}', NULL);
UNLOCK TABLES;
COMMIT;
BEGIN;
LOCK TABLES `knowledge`.`competitions` WRITE;
DELETE FROM `knowledge`.`competitions`;
INSERT INTO `knowledge`.`competitions` (`id`,`type`,`cover`,`title`,`desc`,`organizer`,`start_date`,`end_date`,`register_start_date`,`register_end_date`,`status`,`introduce`,`rules`,`awards`) VALUES (2, 1, '/storage/contents/20220314\\\\6963f1ed1f17979dd938dacda745a135.jpg', '很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛', '1111111', '[\"sdf\",\"111\",\"222\",\"33\",\"44\"]', '2022-03-09 20:00:00', '2022-04-19 17:00:00', '2022-03-17 16:00:00', '2022-04-27 16:00:00', 'register', '<h1 id=\"68fsn\">水电费水电费是打发斯蒂芬</h1><p><font color=\"#46acc8\">水电费水电费</font></p><p>水电费</p><p><font color=\"#c24f4a\">士大夫撒</font></p><p>水电费<img src=\"http://localhost:8090/storage/images/20220321\\0f47d36304a5749630e6b128f71ad2f3.jpg\" contenteditable=\"false\" style=\"font-size: 14px; max-width: 100%;\" width=\"30%\"/><img src=\"http://localhost:8090/storage/images/20220321\\5ae1b34f21757e89cdbb055dc454c3ee.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/></p>', '<h1>水电费水电费是打发斯蒂芬</h1><p>水电费水电费</p><p>水电费</p><p>士大夫撒</p><p>水电费<img src=\"http://localhost:8090/storage/images/20220321\\6df523dc7e68caf0294f8207da8d19e3.jpg\" contenteditable=\"false\" style=\"font-size: 14px; max-width: 100%;\" width=\"30%\"/></p>', '<h1>水电费水电费是打发斯蒂芬</h1><p>水电费水电费</p><p>水电费</p><p>士大夫撒</p><p>水电费</p>'),(4, 3, '/storage/competition/cover/20220315\\1a6a7c98bef32fa0df28ea7087465c29.jpg', '士大夫撒', '士大夫撒', '[\"主办方\"]', '2022-03-15 16:00:00', '2022-04-16 16:00:00', '2022-03-11 16:00:00', '2022-04-18 16:00:00', 'preview', '<p>士大夫撒</p>', '<p>士大夫撒</p>', '<p>士大夫撒</p>'),(5, 3, '/storage/competition/cover/20220315\\7dc6e24ae77e567f259980e5b82025a4.jpg', '很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛', '很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛', '[\"111\"]', '2022-03-08 16:00:00', '2022-04-26 16:00:00', '2022-03-14 18:00:00', '2022-04-27 18:00:00', 'end', '<p>很长网络安全的比赛</p>', '<p>很长网络安全的比赛</p>', '<p>很长网络安全的比赛</p>'),(6, 3, '/storage/competition/cover/20220321\\72d69e4cde71410de0b769ae14e52856.jpg', '很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛', '很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛', '[\"111\"]', '2022-03-08 16:00:00', '2022-04-26 16:00:00', '2022-03-14 18:00:00', '2022-04-27 18:00:00', 'begin', '<p>很长网络安全的比赛</p>', '<p>很长网络安全的比赛</p>', '<p>很长网络安全的比赛</p>');
UNLOCK TABLES;
COMMIT;
BEGIN;
LOCK TABLES `knowledge`.`contents` WRITE;
DELETE FROM `knowledge`.`contents`;
INSERT INTO `knowledge`.`contents` (`id`,`page_name`,`content`) VALUES (1, 'index', '{\"banner\":[{\"title\":\"标题\",\"sub\":\"副标题\",\"img\":\"/storage/contents/20220314\\\\6963f1ed1f17979dd938dacda745a135.jpg\"},{\"title\":\"标题\",\"sub\":\"副标题\",\"img\":\"/storage/contents/20220314\\\\5d2593f6159e11a4855bd9ac7fdbf670.jpg\"},{\"title\":\"标题\",\"sub\":\"副标题\",\"img\":\"/storage/contents/20220315\\\\9c3130291e7d39eff2952fe0ba8be082.jpg\"}],\"recommend\":[1,2,4,5,6]}'),(2, 'competitions_news', '{\"banner\":[{\"title\":\"标题11111\",\"sub\":\"副标题1111111\",\"img\":\"/storage/contents/20220315\\\\f0097c6fbeb874180b74e070c07660e8.jpg\"}]}'),(3, 'competitions_category', '{\"banner\":[{\"title\":\"标题\",\"sub\":\"副标题\",\"img\":\"/storage/contents/20220315\\\\52ba89af013e1b05a0a059fb723506cc.jpg\"}]}');
UNLOCK TABLES;
COMMIT;
BEGIN;
LOCK TABLES `knowledge`.`guides` WRITE;
DELETE FROM `knowledge`.`guides`;
INSERT INTO `knowledge`.`guides` (`id`,`title`,`date`,`content`) VALUES (1, '去问我去饿', '2022-03-16 15:42:13', '<p>萨法萨法<span style=\"font-family: monospace, monospace; font-size: 1em;\">$guides</span><span style=\"font-family: monospace, monospace; font-size: 1em;\">$guides</span><span style=\"font-family: monospace, monospace; font-size: 1em;\">$guides</span><img src=\"http://localhost:8090/storage/images/20220321\\97b415dfbd9b6fbb917b2bfd205def9f.jpg\" contenteditable=\"false\" style=\"font-size: 14px; max-width: 100%;\"/></p>'),(2, '阿三发射点发生', '2022-03-16 15:42:22', '<p>撒发射点发顺丰</p>'),(3, '撒旦发射点发', '2022-03-16 15:42:50', '<p>萨法萨法</p>'),(4, '撒旦发射点发', '2022-03-16 15:42:50', '<p>萨法萨法</p>'),(5, '撒旦发射点发', '2022-03-16 15:42:50', '<p>萨法萨法</p>'),(6, '撒旦发射点发$guides$guides', '2022-03-16 15:42:50', '<p>萨法萨法<span style=\"font-family: monospace, monospace; font-size: 1em;\">$guides</span><span style=\"font-family: monospace, monospace; font-size: 1em;\">$guides</span><span style=\"font-family: monospace, monospace; font-size: 1em;\">$guides</span></p>');
UNLOCK TABLES;
COMMIT;
BEGIN;
LOCK TABLES `knowledge`.`super` WRITE;
DELETE FROM `knowledge`.`super`;
INSERT INTO `knowledge`.`super` (`id`,`nickname`,`name`,`password`,`email`,`phone`,`address`,`motto`,`avatar`) VALUES (14, 'admin', NULL, 'admin', '1486073356@qq.com', NULL, NULL, NULL, '/storage/users/avatar/20220321\\c2207c54102952786ea3ead46658759d.jpg');
UNLOCK TABLES;
COMMIT;
BEGIN;
LOCK TABLES `knowledge`.`type_of_competition` WRITE;
DELETE FROM `knowledge`.`type_of_competition`;
INSERT INTO `knowledge`.`type_of_competition` (`id`,`name`,`desc`) VALUES (1, '网络安全', '很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长'),(3, 'web安全', '士大夫撒旦法撒旦法撒旦法上'),(4, '渗透与测试', '暗示法撒旦法'),(5, '新类别', '6666');
UNLOCK TABLES;
COMMIT;
BEGIN;
LOCK TABLES `knowledge`.`users` WRITE;
DELETE FROM `knowledge`.`users`;
INSERT INTO `knowledge`.`users` (`id`,`nickname`,`name`,`password`,`email`,`phone`,`address`,`motto`,`avatar`) VALUES (3, '奇奇怪怪的用户名', '大露露', '123', '1486073356@qq.com', '15777850920', 'guangxi11111', '个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名.个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名.', '/storage/users/avatar/20220317\\74c7643d5c2418eb29ddacddfd49467f.jpg'),(13, 'user_2022_3_16_17_54_31', '111', '123', '123@qq.com', '', '', '', '/storage/users/avatar/20220317\\e701b1f1197cda263b11ccb9e558b18c.jpg');
UNLOCK TABLES;
COMMIT;
