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
-- Table structure for table `Products`
--

DROP TABLE IF EXISTS `Products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Products` (
  `product_id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `product_code` varchar(7) DEFAULT NULL,
  `price` int(6) unsigned NOT NULL,
  `quantity` int(3) unsigned NOT NULL,
  `description` mediumtext,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Products`
--

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;
INSERT INTO `Products` VALUES (1,'b-004',12050,23,'Gummies cupcake cake ice cream candy canes jelly beans pudding gingerbread. Muffin gummies icing lollipop. Fruitcake gummi bears caramels marshmallow cake tiramisu lemon drops sugar plum. Wafer chocolate cake chocolate bar donut. Gingerbread carrot cake topping sesame snaps apple pie bear claw gingerbread liquorice. Lollipop chocolate bar gummies gingerbread ice cream. Chupa chups caramels lollipop gingerbread pastry cookie gummi bears muffin lollipop. Sweet roll macaroon chocolate bar pastry.'),(2,'b-015',12050,20,'Gummies cupcake cake ice cream candy canes jelly beans pudding gingerbread. Muffin gummies icing lollipop. Fruitcake gummi bears caramels marshmallow cake tiramisu lemon drops sugar plum. Wafer chocolate cake chocolate bar donut. Gingerbread carrot cake topping sesame snaps apple pie bear claw gingerbread liquorice. Lollipop chocolate bar gummies gingerbread ice cream. Chupa chups caramels lollipop gingerbread pastry cookie gummi bears muffin lollipop. Sweet roll macaroon chocolate bar pastry.'),(3,'b-010',12050,14,'Gummies cupcake cake ice cream candy canes jelly beans pudding gingerbread. Muffin gummies icing lollipop. Fruitcake gummi bears caramels marshmallow cake tiramisu lemon drops sugar plum. Wafer chocolate cake chocolate bar donut. Gingerbread carrot cake topping sesame snaps apple pie bear claw gingerbread liquorice. Lollipop chocolate bar gummies gingerbread ice cream. Chupa chups caramels lollipop gingerbread pastry cookie gummi bears muffin lollipop. Sweet roll macaroon chocolate bar pastry.'),(4,'b-005',10050,15,'Toffee pie sweet roll dessert. Tart chocolate cake biscuit chocolate cake bear claw cake sugar plum halvah. Bonbon pudding dragée jelly-o topping jelly beans cake. Chocolate bar marshmallow marshmallow halvah muffin. Jujubes apple pie dragée sesame snaps macaroon marzipan caramels gummies halvah. Cake donut sweet carrot cake wafer biscuit dessert icing tootsie roll. Carrot cake wafer bear claw lemon drops danish.'),(5,'b-006',3000,16,'Chocolate cake sesame snaps gingerbread chupa chups brownie. Bear claw liquorice liquorice wafer. Candy canes cake cake gingerbread wafer brownie. Candy dessert candy marshmallow. Cotton candy lemon drops danish gummi bears marzipan. Sweet jujubes chupa chups chocolate chocolate pastry carrot cake. Cake candy canes icing. Tiramisu gummi bears marzipan cheesecake ice cream toffee. Tootsie roll bear claw biscuit topping halvah muffin candy tart.'),(6,'b-007',12050,18,'Gummies cupcake cake ice cream candy canes jelly beans pudding gingerbread. Muffin gummies icing lollipop. Fruitcake gummi bears caramels marshmallow cake tiramisu lemon drops sugar plum. Wafer chocolate cake chocolate bar donut. Gingerbread carrot cake topping sesame snaps apple pie bear claw gingerbread liquorice. Lollipop chocolate bar gummies gingerbread ice cream. Chupa chups caramels lollipop gingerbread pastry cookie gummi bears muffin lollipop. Sweet roll macaroon chocolate bar pastry.'),(7,'b-009',12050,22,'Gummies cupcake cake ice cream candy canes jelly beans pudding gingerbread. Muffin gummies icing lollipop. Fruitcake gummi bears caramels marshmallow cake tiramisu lemon drops sugar plum. Wafer chocolate cake chocolate bar donut. Gingerbread carrot cake topping sesame snaps apple pie bear claw gingerbread liquorice. Lollipop chocolate bar gummies gingerbread ice cream. Chupa chups caramels lollipop gingerbread pastry cookie gummi bears muffin lollipop. Sweet roll macaroon chocolate bar pastry.');
/*!40000 ALTER TABLE `Products` ENABLE KEYS */;
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
