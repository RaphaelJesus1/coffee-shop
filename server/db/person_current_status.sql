CREATE SCHEMA `coffee_shop` ;


CREATE TABLE `coffee_shop`.`product` (
  `product_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `desc` VARCHAR(100) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`product_id`));


CREATE TABLE `coffee_shop`.`tab` (
  `tab_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`tab_id`));


CREATE TABLE `coffee_shop`.`product_tab` (
  `product_tab_id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `tab_id` INT NOT NULL,
  PRIMARY KEY (`product_tab_id`),
  INDEX `prod_id_idx` (`product_id` ASC) VISIBLE,
  INDEX `tab_id_idx` (`tab_id` ASC) VISIBLE,
  CONSTRAINT `prod_id`
    FOREIGN KEY (`product_id`)
    REFERENCES `coffee_shop`.`product` (`product_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `tab_id`
    FOREIGN KEY (`tab_id`)
    REFERENCES `coffee_shop`.`tab` (`tab_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
