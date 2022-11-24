-- MariaDB dump 10.19  Distrib 10.4.25-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: vibeczech
-- ------------------------------------------------------
-- Server version	10.4.25-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `certificate_tool`
--

DROP TABLE IF EXISTS `certificate_tool`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `certificate_tool` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `tool_id` bigint(20) unsigned NOT NULL,
  `certificate_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `certificate_tool`
--

LOCK TABLES `certificate_tool` WRITE;
/*!40000 ALTER TABLE `certificate_tool` DISABLE KEYS */;
/*!40000 ALTER TABLE `certificate_tool` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `certificates`
--

DROP TABLE IF EXISTS `certificates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `certificates` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `issue_date` date NOT NULL,
  `expiry_date` date NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `certificates`
--

LOCK TABLES `certificates` WRITE;
/*!40000 ALTER TABLE `certificates` DISABLE KEYS */;
/*!40000 ALTER TABLE `certificates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exposure_instance`
--

DROP TABLE IF EXISTS `exposure_instance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exposure_instance` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `plan_id` bigint(20) unsigned NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `exposure_value` int(11) NOT NULL,
  `exposure_start` datetime NOT NULL,
  `exposure_finish` datetime NOT NULL,
  `duration_minutes` int(11) NOT NULL,
  `tool_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exposure_instance`
--

LOCK TABLES `exposure_instance` WRITE;
/*!40000 ALTER TABLE `exposure_instance` DISABLE KEYS */;
INSERT INTO `exposure_instance` VALUES (1,'2022-11-22 14:06:15','2022-11-22 14:06:15',1,5,345,'2022-11-26 10:25:11','2022-11-26 14:25:11',5,4),(2,'2022-11-22 14:06:15','2022-11-22 14:06:15',1,5,165,'2022-11-26 09:25:00','2022-11-26 14:25:11',1,4),(3,'2022-11-22 14:06:15','2022-11-22 14:06:15',2,4,232,'2022-11-27 10:25:00','2022-11-27 14:25:11',8,3),(4,'2022-11-22 14:06:15','2022-11-22 14:06:15',2,9,365,'2022-11-27 11:25:00','2022-11-27 14:25:11',2,5),(5,'2022-11-22 14:06:15','2022-11-22 14:06:15',2,3,178,'2022-11-27 09:25:11','2022-11-21 14:25:11',5,5),(6,'2022-11-22 14:06:15','2022-11-22 14:06:15',3,5,389,'2022-11-29 15:25:11','2022-11-29 18:25:11',3,5),(7,'2022-11-22 14:06:15','2022-11-22 14:06:15',5,5,204,'2022-11-29 10:25:00','2022-11-29 14:25:11',8,6),(8,'2022-11-22 14:06:15','2022-11-22 14:06:15',4,5,299,'2022-11-29 10:25:11','2022-11-29 14:25:11',1,1),(9,'2022-11-22 14:06:15','2022-11-22 14:06:15',1,6,249,'2022-11-30 07:25:11','2022-11-30 14:25:11',2,1),(10,'2022-11-22 14:06:15','2022-11-22 14:06:15',6,6,145,'2022-11-30 08:25:11','2022-11-30 14:25:11',4,4),(11,'2022-11-22 14:06:15','2022-11-22 14:06:15',2,6,400,'2022-12-21 09:25:11','2022-12-21 14:25:12',5,2),(12,'2022-11-22 14:06:15','2022-11-22 14:06:15',6,17,300,'2022-11-25 09:25:11','2022-11-25 14:00:11',5,3),(13,'2022-11-22 14:06:15','2022-11-22 14:06:15',1,17,245,'2022-11-26 10:25:11','2022-11-26 14:25:11',2,2),(14,'2022-11-22 14:06:15','2022-11-22 14:06:15',4,17,345,'2022-11-26 09:25:11','2022-11-26 16:25:11',6,4),(15,'2022-11-22 14:06:15','2022-11-22 14:06:15',1,17,105,'2022-11-27 11:25:11','2022-11-27 18:25:11',1,5);
/*!40000 ALTER TABLE `exposure_instance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2014_10_12_200000_add_two_factor_columns_to_users_table',1),(4,'2019_08_19_000000_create_failed_jobs_table',1),(5,'2019_12_14_000001_create_personal_access_tokens_table',1),(6,'2022_11_12_092330_create_planned_exposure_table',1),(7,'2022_11_12_093926_create_exposure_instance_table',1),(8,'2022_11_12_094514_create_tools_table',1),(9,'2022_11_12_094815_create_certificates_table',1),(10,'2022_11_12_095114_create_user_workteam_table',1),(11,'2022_11_12_095258_create_workteams_table',1),(12,'2022_11_12_095752_create_self_assesments_table',1),(13,'2022_11_12_120533_create_certificate_tool_table',1),(14,'2022_11_14_110214_create_user_self_assesment_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `planned_exposure`
--

DROP TABLE IF EXISTS `planned_exposure`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `planned_exposure` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` bigint(20) unsigned NOT NULL,
  `worker_exposed` bigint(20) unsigned NOT NULL,
  `exposure_start` datetime NOT NULL,
  `exposure_end` datetime NOT NULL,
  `tool_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `planned_exposure`
--

LOCK TABLES `planned_exposure` WRITE;
/*!40000 ALTER TABLE `planned_exposure` DISABLE KEYS */;
INSERT INTO `planned_exposure` VALUES (1,'2022-11-22 08:33:02','2022-11-22 08:33:02',1,9,'2022-11-26 09:25:11','2022-11-26 14:25:11',3),(2,'2022-11-22 08:33:02','2022-11-22 08:33:02',1,10,'2022-11-26 10:25:11','2022-11-26 15:25:11',2),(3,'2022-11-22 08:33:02','2022-11-22 08:33:02',1,3,'2022-11-27 11:25:11','2022-11-27 14:25:11',5),(4,'2022-11-22 08:33:02','2022-11-22 08:33:02',1,7,'2022-11-27 10:25:11','2022-11-27 14:25:11',2),(5,'2022-11-22 08:33:02','2022-11-22 08:33:02',1,5,'2022-11-29 10:25:11','2022-11-29 14:25:11',5),(6,'2022-11-22 08:33:02','2022-11-22 08:33:02',1,5,'2022-11-29 10:25:11','2022-11-29 14:25:11',1),(7,'2022-11-22 08:33:02','2022-11-22 08:33:02',1,6,'2022-11-30 08:25:11','2022-11-30 17:25:11',3),(8,'2022-11-22 08:33:02','2022-11-22 08:33:02',1,2,'2022-11-26 12:25:11','2022-11-26 14:25:11',3),(9,'2022-11-22 08:33:02','2022-11-22 08:33:02',1,2,'2022-11-26 12:25:11','2022-11-26 14:25:11',4);
/*!40000 ALTER TABLE `planned_exposure` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `self_assesment_questions`
--

DROP TABLE IF EXISTS `self_assesment_questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `self_assesment_questions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `Questions` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `self_assesment_questions`
--

LOCK TABLES `self_assesment_questions` WRITE;
/*!40000 ALTER TABLE `self_assesment_questions` DISABLE KEYS */;
/*!40000 ALTER TABLE `self_assesment_questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tools`
--

DROP TABLE IF EXISTS `tools`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tools` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `manufacturer` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vibration_rating` int(11) NOT NULL,
  `noise_rating` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tools`
--

LOCK TABLES `tools` WRITE;
/*!40000 ALTER TABLE `tools` DISABLE KEYS */;
INSERT INTO `tools` VALUES (2,'2022-11-15 09:07:45','2022-11-15 09:07:45','DeWALT','Drill',5,6),(3,'2022-11-15 09:07:45','2022-11-15 09:07:45','Proto','Jackhammer',10,8),(4,'2022-11-15 09:07:45','2022-11-15 09:07:45','DeWALT','Chainsaw',13,9),(5,'2022-11-15 09:07:45','2022-11-15 09:07:45','Mac Tools','Lawnmower',8,10),(6,'2022-11-15 09:07:45','2022-11-15 09:07:45','Makita','Concrete breaker',14,13),(7,'2022-11-15 09:07:45','2022-11-15 09:07:45','Husrvarna','Disc cutters',11,8),(8,'2022-11-15 09:07:45','2022-11-15 09:07:45','Makita','Impact wrenches',7,8),(9,'2022-11-15 09:07:45','2022-11-15 09:07:45','DeWALT','Power Hammer',9,10),(10,'2022-11-15 09:07:45','2022-11-15 09:07:45','Mac Tools','Scabbler',6,4),(11,'2022-11-15 09:47:55','2022-11-15 09:47:55','Dental Company','Dental tool',2,3),(12,'2022-11-15 10:02:11','2022-11-15 10:02:11','some fancy company','Some scary tool',6,7),(13,'2022-11-15 10:02:36','2022-11-15 10:02:36','some fancy company','Some scary tool',6,7),(14,'2022-11-15 10:03:39','2022-11-15 10:03:39','some fancy company','Some scary tool',6,7),(15,'2022-11-15 10:04:54','2022-11-15 10:04:54','test','tool',6,7),(16,'2022-11-15 10:05:46','2022-11-15 10:05:46','test','tool',6,7),(17,'2022-11-15 10:06:06','2022-11-15 10:06:06','test','test',5,6),(18,'2022-11-15 12:47:39','2022-11-15 12:47:39','some company','some tool',3,15),(19,'2022-11-15 12:53:57','2022-11-15 12:53:57','ghghgh','hghgh',7,7),(20,'2022-11-15 13:23:50','2022-11-15 13:23:50','ghghgh','hghgh',7,7),(21,'2022-11-21 07:12:03','2022-11-21 07:12:03','gggh','d',5,6),(22,'2022-11-21 07:19:12','2022-11-21 07:19:12','dgf','fgxgh',5,5),(23,'2022-11-21 08:53:45','2022-11-21 08:53:45','dtf','last tol',4,5);
/*!40000 ALTER TABLE `tools` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_self_assesment`
--

DROP TABLE IF EXISTS `user_self_assesment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_self_assesment` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `self_assessment_id` bigint(20) unsigned NOT NULL,
  `answer` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_self_assesment`
--

LOCK TABLES `user_self_assesment` WRITE;
/*!40000 ALTER TABLE `user_self_assesment` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_self_assesment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_workteam`
--

DROP TABLE IF EXISTS `user_workteam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_workteam` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `work_team_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_workteam`
--

LOCK TABLES `user_workteam` WRITE;
/*!40000 ALTER TABLE `user_workteam` DISABLE KEYS */;
INSERT INTO `user_workteam` VALUES (52,NULL,NULL,1,30),(53,NULL,NULL,5,30),(54,NULL,NULL,8,30),(55,NULL,NULL,3,31),(56,NULL,NULL,5,31),(57,NULL,NULL,8,31),(58,NULL,NULL,7,32),(59,NULL,NULL,5,32),(60,NULL,NULL,8,32),(61,NULL,NULL,7,33),(62,NULL,NULL,9,33),(63,NULL,NULL,8,33),(64,NULL,NULL,7,34),(65,NULL,NULL,8,34),(66,NULL,NULL,3,35),(67,NULL,NULL,1,35);
/*!40000 ALTER TABLE `user_workteam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT 0,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `two_factor_secret` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `two_factor_recovery_codes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_username_unique` (`username`),
  UNIQUE KEY `users_email_unique` (`email`),
  UNIQUE KEY `users_phone_number_unique` (`phone_number`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'adminaboss','Admina','Boss','adminaboss@vibeczech.test','123456789',1,NULL,'$2y$10$GwoAIspGwYaE.N3Qhb/4r.WxoMdNzYJhHX5MZif2VTgG3LK5JyW86',NULL,NULL,NULL,'2022-11-23 13:33:04','2022-11-23 13:33:04'),(2,'themenace','Innes','Wales','themenace@vibeczech.test','234567890',0,NULL,'$2y$10$EsBVV49HVIDjiDLCQ1sFj.dJMdlyJ9EFzNbZPFNlbxBOJlqj7cUca',NULL,NULL,NULL,'2022-11-23 13:33:05','2022-11-23 13:33:05'),(3,'shoujolover','Aidan','Andabettin','shoujolover@vibeczech.test','345678901',0,NULL,'$2y$10$Yym3bS1Y.xJzD.FwmiarxuIvG7BB9ntaBpHlYzFQbwEHj7bwg35zm',NULL,NULL,NULL,'2022-11-23 13:33:05','2022-11-23 13:33:05'),(4,'willwork4skulls','Bina','Feefyefofina','willwork4skulls@vibeczech.test','456789012',0,NULL,'$2y$10$5FvhqQytwr/lXpsBKQNckewh0WB2W/QjgI1MuhkId0FPDmcIdHaVq',NULL,NULL,NULL,'2022-11-23 13:33:05','2022-11-23 13:33:05'),(5,'notthestinkykind','Bri','Likethecheese','notthestinkykind@vibeczech.test','567890123',0,NULL,'$2y$10$7pBeVhby8Ik0R7YLdT3PT.atvW7K.C8uKRIMyvS/qQYmMSmnDNoti',NULL,NULL,NULL,'2022-11-23 13:33:05','2022-11-23 13:33:05'),(6,'probablyevil','David','Dresden','probablyevil@vibeczech.test','678901234',0,NULL,'$2y$10$oRzpH4t/qAaPaIG1UVjDsOm7ZfcUvLNsu/XDrXoEaGjUeOaFHDGbC',NULL,NULL,NULL,'2022-11-23 13:33:05','2022-11-23 13:33:05'),(7,'knucklesandwich','Andrea','Bruiser','knucklesandwich@vibeczech.test','789012345',0,NULL,'$2y$10$Z02861LFQNAzJhaWhpTNP..LLxt2E9kFUOIXs0LXZUzxLgXz52eou',NULL,NULL,NULL,'2022-11-23 13:33:05','2022-11-23 13:33:05'),(8,'onecooldude','Eddie','Sofashionable','onecooldude@vibeczech.test','8901234567',0,NULL,'$2y$10$vRUj3WxQGa39Z0dfyK/3COyU.ib78HuHUjQa4rhpj8OWKDkRc1VAi',NULL,NULL,NULL,'2022-11-23 13:33:05','2022-11-23 13:33:05'),(9,'madmax9001','Max','Speed','madmax9001@vibeczech.test','9012345678',0,NULL,'$2y$10$WZB3YueA3exkr6JR0.Byu.4ogFUWCi2aWLwhIfN7LZZ9IPisIwr5y',NULL,NULL,NULL,'2022-11-23 13:33:05','2022-11-23 13:33:05'),(10,'businessshark','Dijana','Sharpeyes','businessshark@vibeczech.test','112345678',0,NULL,'$2y$10$AfynUXElRp0IcKBlwOpkfe7hi2.SfH2LEeAaY8gWNdlGvx6GJ6/6y',NULL,NULL,NULL,'2022-11-23 13:33:05','2022-11-23 13:33:05'),(11,'iloverocks','Jakub','McClimberson','iloverocks@vibeczech.test','987654321',0,NULL,'$2y$10$l/05WhFca4Um/LzxPJp6puk98x6xgt5/MuSb0kI3ipjivFGJn9bPi',NULL,NULL,NULL,'2022-11-23 13:33:05','2022-11-23 13:33:05'),(12,'wontshutup','Jakub','Bigmouth','wontshutup@vibeczech.test','876543210',0,NULL,'$2y$10$/UFzKdJqh6lfqUKDGNse9.tXLwU5A/LIo5VqCbnGLIajEGtCxxM32',NULL,NULL,NULL,'2022-11-23 13:33:05','2022-11-23 13:33:05'),(13,'getstheworm','Nadiia','Earlybird','getstheworm@vibeczech.test','765432109',0,NULL,'$2y$10$hPLvv7YLPX1pafUyviMIZeXEoLtaNzFeEvk3djwxLgECMAAbmCowK',NULL,NULL,NULL,'2022-11-23 13:33:05','2022-11-23 13:33:05'),(14,'bakedgoodsyum','Ivan','Bringsstrudel','bakedgoodsyum@vibeczech.test','654321098',0,NULL,'$2y$10$Ggbs/wF02.tUG8eoM6JOlOnpl.XCn06bjLfF9.dZiu2yEHi4GEcYa',NULL,NULL,NULL,'2022-11-23 13:33:05','2022-11-23 13:33:05'),(15,'number1chef','Anthony','Prettylunches','number1chef@vibeczech.test','543210987',0,NULL,'$2y$10$sPnNPtF2dDvOMQ4WVGlYwuE0TBW3gg6e6ay9Vj/PZ6Filqpg7D6ba',NULL,NULL,NULL,'2022-11-23 13:33:05','2022-11-23 13:33:05'),(16,'secretbosstype','Tuan','Haslegsapparently','secretbosstype@vibeczech.test','432109876',0,NULL,'$2y$10$wmWVAOD9ruyaw3p9hfe/kuIjO4jSXQh06hewEl2IY31AYSALWyeYu',NULL,NULL,NULL,'2022-11-23 13:33:06','2022-11-23 13:33:06');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `workteams`
--

DROP TABLE IF EXISTS `workteams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `workteams` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `job` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `work_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workteams`
--

LOCK TABLES `workteams` WRITE;
/*!40000 ALTER TABLE `workteams` DISABLE KEYS */;
INSERT INTO `workteams` VALUES (30,'2022-11-21 13:25:11','2022-11-21 13:25:11','Felling tree','2030-12-22 00:00:00'),(31,'2022-11-21 13:25:11','2022-11-21 13:25:11','Road breaking','2025-12-22 00:00:00'),(32,'2022-11-21 13:25:11','2022-11-21 13:25:11','Construction of house','2010-12-22 00:00:00'),(33,'2022-11-21 13:25:11','2022-11-21 13:25:11','Grinding','2011-12-22 00:00:00'),(34,'2022-11-21 13:25:11','2022-11-21 13:25:11','Root canal','2005-12-22 00:00:00'),(35,'2022-11-22 08:53:12','2022-11-22 08:53:12','sf','2022-11-23 00:00:00');
/*!40000 ALTER TABLE `workteams` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-24 16:02:59
