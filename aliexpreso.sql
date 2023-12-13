/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : aliexpreso

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2023-12-13 01:53:48
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for comentarios
-- ----------------------------
DROP TABLE IF EXISTS `comentarios`;
CREATE TABLE `comentarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf32_spanish_ci NOT NULL,
  `comentario` varchar(700) COLLATE utf32_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

-- ----------------------------
-- Records of comentarios
-- ----------------------------
INSERT INTO `comentarios` VALUES ('1', 'Elias', 'Me gusta mucho la página');
INSERT INTO `comentarios` VALUES ('2', 'Elias', 'Probando');
INSERT INTO `comentarios` VALUES ('3', 'Elias', '2 Prueba');
INSERT INTO `comentarios` VALUES ('4', 'Elias', 'Muy buena pagina');
INSERT INTO `comentarios` VALUES ('5', 'Andres', 'Necesito Info');
INSERT INTO `comentarios` VALUES ('6', 'Ana', 'Ayudaaaa');
INSERT INTO `comentarios` VALUES ('7', 'PROBANDO', 'aquiiiiii');
INSERT INTO `comentarios` VALUES ('8', 'kikikik', 'ikikik');
INSERT INTO `comentarios` VALUES ('9', 'hh', 'hh');

-- ----------------------------
-- Table structure for productos
-- ----------------------------
DROP TABLE IF EXISTS `productos`;
CREATE TABLE `productos` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf32_spanish_ci NOT NULL,
  `descripcion` varchar(500) COLLATE utf32_spanish_ci NOT NULL,
  `precio` double(8,2) unsigned NOT NULL,
  `moneda` char(2) COLLATE utf32_spanish_ci NOT NULL,
  `categoria` enum('SmartTV','Consolas','Telefonos','Perfumes','Reloj','Audifonos') COLLATE utf32_spanish_ci DEFAULT NULL,
  `imagen` varchar(255) COLLATE utf32_spanish_ci DEFAULT NULL,
  `stock` int(2) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

-- ----------------------------
-- Records of productos
-- ----------------------------
INSERT INTO `productos` VALUES ('1', 'PlayStation 5', '', '500.00', '', 'Consolas', 'https://i.blogs.es/86b11e/ps51/1366_2000.jpeg', '150');
INSERT INTO `productos` VALUES ('2', 'Iphone 14 Pro Max', '', '750.00', '', 'Telefonos', 'https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907-geo_inline.jpg.large.jpg', '60');
INSERT INTO `productos` VALUES ('3', 'Samsung 23 Ultra', '', '250.00', '', 'Telefonos', 'https://mobilestore.ec/wp-content/uploads/2023/02/Samsung-Galaxy-S23-Ultra-Verde-Mobile-Store-Ecuador.jpg', '120');
INSERT INTO `productos` VALUES ('4', 'bsxdgsd', 'sfsf', '56.00', '$', 'Reloj', 'https://catalejovirtual.com/wp-content/uploads/2022/01/ventas.jpg', '56');
INSERT INTO `productos` VALUES ('5', 'hhhh', 'hhh', '66.00', '$', 'Perfumes', 'a5befe62-ad5c-4c36-82c3-182d3ae3e4e5.jpg', '77');
INSERT INTO `productos` VALUES ('6', 'hhhh', 'hhh', '66.00', '$', 'Perfumes', 'a5befe62-ad5c-4c36-82c3-182d3ae3e4e5.jpg', '77');
INSERT INTO `productos` VALUES ('7', 'ffff', 'fefef', '555.00', 'rr', 'Perfumes', 'a5befe62-ad5c-4c36-82c3-182d3ae3e4e5.jpg', '66666');
INSERT INTO `productos` VALUES ('8', 'ggggggggggggg', 'ggggggggggggggg', '45.00', '$', 'Audifonos', null, '4');
INSERT INTO `productos` VALUES ('9', 'ff', 'ff', '58.00', '$', 'Consolas', null, '5');
INSERT INTO `productos` VALUES ('10', 'gato', 'gatosss bellosss', '999999.99', '$', 'SmartTV', 'public\\uploads\\imagen-1702429738885-641703490.jpeg', '8');
INSERT INTO `productos` VALUES ('11', 'matia Play', 'breve', '55.00', '$', 'Perfumes', 'public\\uploads\\imagen-1702439042310-18540789.jpeg', '34');
INSERT INTO `productos` VALUES ('12', 'cafe', 'cafe', '67.00', '$', 'Reloj', 'public\\uploads\\imagen-1702439334567-928897466.jpeg', '4');
INSERT INTO `productos` VALUES ('13', 'gfg Play', 'fg', '6.00', '$', 'Consolas', 'public\\uploads\\imagen-1702439689313-47429953.jpeg', '6');
INSERT INTO `productos` VALUES ('14', 'ttt', 'ttt', '6.00', '$', 'SmartTV', 'public\\uploads\\imagen-1702440059898-232999831.jpeg', '6');
INSERT INTO `productos` VALUES ('15', 'bbb', 'bbb', '6.00', 'Bs', 'Consolas', 'public\\uploads\\imagen-1702440257740-701447664.jpeg', '6');
INSERT INTO `productos` VALUES ('16', 'ff Play', 'ff', '4.00', '$', 'Consolas', 'public\\uploads\\imagen-1702440598341-326956551.jpeg', '5');
INSERT INTO `productos` VALUES ('17', 'gh', 'gh', '6.00', '$', 'Consolas', 'public\\uploads\\imagen-1702443196745-716331919.jpeg', '6');
INSERT INTO `productos` VALUES ('18', 'gh', 'gh', '6.00', '$', 'Consolas', 'public\\uploads\\imagen-1702443737995-938883108.jpeg', '6');
INSERT INTO `productos` VALUES ('19', 'play play', 'dfdfd', '55.00', '$', 'Perfumes', 'public\\uploads\\imagen-1702446016461-284511152.jpeg', '5');
