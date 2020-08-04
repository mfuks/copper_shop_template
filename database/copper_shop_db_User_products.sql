-- MySQL dump 10.13  Distrib 5.7.31, for Linux (x86_64)
--
-- Host: localhost    Database: copper_shop_db
-- ------------------------------------------------------
-- Server version	5.7.31-0ubuntu0.18.04.1

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
-- Table structure for table `User_products`
--

DROP TABLE IF EXISTS `User_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User_products` (
  `user_product_id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `product_quantity` int(6) DEFAULT NULL,
  `product_id` int(6) DEFAULT NULL,
  `Orders_order_id` int(6) unsigned NOT NULL,
  `product_price` int(6) DEFAULT NULL,
  `product_code` varchar(7) DEFAULT NULL,
  PRIMARY KEY (`user_product_id`),
  KEY `fk_User_products_Orders1_idx` (`Orders_order_id`),
  CONSTRAINT `fk_User_products_Orders1` FOREIGN KEY (`Orders_order_id`) REFERENCES `Orders` (`order_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User_products`
--

LOCK TABLES `User_products` WRITE;
/*!40000 ALTER TABLE `User_products` DISABLE KEYS */;
INSERT INTO `User_products` VALUES (1,2,3,1,12050,'b-010'),(2,1,5,1,3000,'b-006'),(3,1,6,1,12050,'b-007'),(7,3,7,3,12050,'b-009'),(8,1,5,3,3000,'b-006'),(9,2,6,3,12050,'b-007'),(10,2,7,4,12050,'b-009'),(11,1,1,4,12050,'b-004'),(12,1,3,4,12050,'b-010'),(13,3,4,4,10050,'b-005'),(14,2,5,5,3000,'b-006'),(15,1,3,5,12050,'b-010'),(16,1,2,5,12050,'b-015');
/*!40000 ALTER TABLE `User_products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-04 11:41:08
