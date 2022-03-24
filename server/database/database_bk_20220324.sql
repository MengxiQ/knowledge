/*
MySQL Backup
Database: knowledge
Backup Time: 2022-03-24 17:08:21
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
  `status` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `form` mediumtext CHARACTER SET utf8 COLLATE utf8_bin,
  `msg` mediumtext COLLATE utf8_bin,
  `works` mediumtext COLLATE utf8_bin,
  `score` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `comments` mediumtext COLLATE utf8_bin,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `attend_ibfk_1` (`user`),
  KEY `attend_ibfk_2` (`competition`),
  CONSTRAINT `attend_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `attend_ibfk_2` FOREIGN KEY (`competition`) REFERENCES `competitions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
CREATE TABLE `competitions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` int DEFAULT NULL,
  `cover` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `desc` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `organizer` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `register_start_date` datetime DEFAULT NULL,
  `register_end_date` datetime DEFAULT NULL,
  `status` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `introduce` mediumtext CHARACTER SET utf8 COLLATE utf8_bin,
  `rules` mediumtext CHARACTER SET utf8 COLLATE utf8_bin,
  `awards` mediumtext CHARACTER SET utf8 COLLATE utf8_bin,
  `announcement` mediumtext COLLATE utf8_bin,
  PRIMARY KEY (`id`,`title`) USING BTREE,
  KEY `type` (`type`),
  CONSTRAINT `competitions_ibfk_1` FOREIGN KEY (`type`) REFERENCES `type_of_competition` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
CREATE TABLE `contents` (
  `id` int NOT NULL AUTO_INCREMENT,
  `page_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `content` mediumtext CHARACTER SET utf8 COLLATE utf8_bin,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
CREATE TABLE `guides` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
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
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `desc` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
CREATE TABLE `users` (
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `attend_list_views` AS select `u`.`id` AS `user`,`u`.`nickname` AS `nickname`,`c`.`id` AS `competition`,`c`.`title` AS `competition_title`,`c`.`status` AS `progress`,`a`.`status` AS `status`,`a`.`date` AS `date`,`a`.`form` AS `form`,`a`.`works` AS `works`,`a`.`msg` AS `msg`,`a`.`score` AS `score`,`a`.`comments` AS `comments`,`a`.`id` AS `id` from ((`attend` `a` join `users` `u` on((`a`.`user` = `u`.`id`))) join `competitions` `c` on((`a`.`competition` = `c`.`id`)));
BEGIN;
LOCK TABLES `knowledge`.`attend` WRITE;
DELETE FROM `knowledge`.`attend`;
INSERT INTO `knowledge`.`attend` (`id`,`user`,`competition`,`date`,`status`,`form`,`msg`,`works`,`score`,`comments`) VALUES (61, 3, 5, '2022-03-24 11:34:00', 'pass', '{\"nickname\":\"奇奇怪怪的用户名\",\"name\":\"lixing wei\",\"phone\":\"15777850920\",\"email\":\"1486073356@qq.com\",\"xueli\":\"专科\",\"school\":\"小学\",\"address\":\"guangxi\"}', '学校？', '/storage/works/uid_3/参赛作品001.rar', '一等奖', '作品很棒很棒很棒，作品很棒很棒很棒，作品很棒很棒很棒，经过组织的研讨，给予“一等奖”奖励。'),(62, 3, 2, '2022-03-24 15:22:37', 'commit', '{\"nickname\":\"奇奇怪怪的用户名\",\"name\":\"lixing wei\",\"phone\":\"15777850920\",\"email\":\"1486073356@qq.com\",\"xueli\":\"本科\",\"school\":\"小学\",\"address\":\"guangxi\"}', NULL, NULL, NULL, NULL);
UNLOCK TABLES;
COMMIT;
BEGIN;
LOCK TABLES `knowledge`.`competitions` WRITE;
DELETE FROM `knowledge`.`competitions`;
INSERT INTO `knowledge`.`competitions` (`id`,`type`,`cover`,`title`,`desc`,`organizer`,`start_date`,`end_date`,`register_start_date`,`register_end_date`,`status`,`introduce`,`rules`,`awards`,`announcement`) VALUES (2, 1, '/storage/competition/cover/20220322\\c60a9decebe710ef8d5bb4e0467c551e.jpg', '很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛', '1111111', '[\"sdf\",\"111\",\"222\",\"33\",\"44\"]', '2022-03-31 16:00:00', '2022-04-22 16:00:00', '2022-03-21 16:00:00', '2022-03-30 16:00:00', 'registerStart', '<h1 id=\"68fsn\">水电费水电费是打发斯蒂芬</h1><p><font color=\"#46acc8\">水电费水电费</font></p><p>水电费</p><p><font color=\"#c24f4a\">士大夫撒</font></p><p>水电费<img src=\"http://localhost:8090/storage/images/20220321\\0f47d36304a5749630e6b128f71ad2f3.jpg\" contenteditable=\"false\" style=\"font-size: 14px; max-width: 100%;\" width=\"30%\"/><img src=\"http://localhost:8090/storage/images/20220321\\5ae1b34f21757e89cdbb055dc454c3ee.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/></p>', '<h1>水电费水电费是打发斯蒂芬</h1><p>水电费水电费</p><p>水电费</p><p>士大夫撒</p><p>水电费<img src=\"http://localhost:8090/storage/images/20220321\\6df523dc7e68caf0294f8207da8d19e3.jpg\" contenteditable=\"false\" style=\"font-size: 14px; max-width: 100%;\" width=\"30%\"/></p>', '<h1>水电费水电费是打发斯蒂芬</h1><p>水电费水电费</p><p>水电费</p><p>士大夫撒</p><p>水电费</p>', '<p>公告设置</p>'),(4, 3, '/storage/competition/cover/20220322\\32b6db3398e3c867168e5f034f66ee7b.jpg', '士大夫撒', '士大夫撒', '[\"主办方\"]', '2022-03-15 16:00:00', '2022-04-16 16:00:00', '2022-03-11 16:00:00', '2022-04-18 16:00:00', 'started', '<p>士大夫撒</p>', '<p>士大夫撒</p>', '<p>士大夫撒</p>', NULL),(5, 3, '/storage/competition/cover/20220322\\b190f20d0007f29dcef3d57a6f85bf31.jpg', '很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛', '很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛', '[\"111\"]', '2022-03-21 16:00:00', '2022-03-25 16:00:00', '2022-03-09 16:00:00', '2022-03-21 16:00:00', 'started', '<p>很长网络安全的比赛</p>', '<p>很长网络安全的比赛</p>', '<p>很长网络安全的比赛</p>', '<h1 id=\"q98ma\" style=\"text-align:center;\">获奖名单</h1><table border=\"0\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"text-align:center;\"><tbody><tr><th>排名</th><th>姓名</th><th>奖项</th></tr><tr><td>1</td><td>啊啊啊</td><td>一等奖</td></tr><tr><td>2</td><td>顶顶顶</td><td>额</td></tr><tr><td>3</td><td>大大大</td><td>三</td></tr><tr><td>4</td><td>嗷嗷嗷</td><td>在</td></tr></tbody></table><p data-we-empty-p=\"\" style=\"text-align:center;\"><br/></p>'),(6, 3, '/storage/competition/cover/20220322\\5e980104683924b1ea4081becc94b3ef.jpg', '很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛', '很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛很长网络安全的比赛', '[\"111\"]', '2022-03-08 16:00:00', '2022-04-26 16:00:00', '2022-03-14 18:00:00', '2022-04-27 18:00:00', 'started', '<p>很长网络安全的比赛</p>', '<p>很长网络安全的比赛</p>', '<p>很长网络安全的比赛</p>', NULL);
UNLOCK TABLES;
COMMIT;
BEGIN;
LOCK TABLES `knowledge`.`contents` WRITE;
DELETE FROM `knowledge`.`contents`;
INSERT INTO `knowledge`.`contents` (`id`,`page_name`,`content`) VALUES (1, 'index', '{\"banner\":[{\"title\":\"标题\",\"sub\":\"副标题\",\"img\":\"/storage/contents/20220322\\\\44411065eb22dc1fb487baaf78f30051.jpg\"}],\"recommend\":[1,2,4,5,6]}'),(2, 'competitions_news', '{\"banner\":[{\"title\":\"标题11111\",\"sub\":\"副标题1111111\",\"img\":\"/storage/contents/20220322\\\\9700d2e9eaf46e7c36668b2392d98e6d.jpg\"}]}'),(3, 'competitions_category', '{\"banner\":[{\"title\":\"标题\",\"sub\":\"副标题\",\"img\":\"/storage/contents/20220322\\\\27103681e470572c151618b881d4dce3.jpg\"}]}');
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
INSERT INTO `knowledge`.`super` (`id`,`nickname`,`name`,`password`,`email`,`phone`,`address`,`motto`,`avatar`) VALUES (14, 'admin', NULL, 'admin', '1486073356@qq.com', NULL, NULL, NULL, '/storage/users/avatar/20220322\\73c525f4da0466c428fef02369b9bf46.jpg');
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
INSERT INTO `knowledge`.`users` (`id`,`nickname`,`name`,`password`,`email`,`phone`,`address`,`motto`,`avatar`) VALUES (3, '奇奇怪怪的用户名', '大露露', '123', '1486073356@qq.com', '15777850920', 'guangxi11111', '个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名.个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名.', '/storage/users/avatar/20220322\\62e1e6a9cfee75bf6b06ae7866e2bb49.jpg'),(13, 'user_2022_3_16_17_54_31', '111', '123', '123@qq.com', '', '', '', '/storage/users/avatar/20220322\\a228c344845919dce6a813a6f9476161.jpg');
UNLOCK TABLES;
COMMIT;
