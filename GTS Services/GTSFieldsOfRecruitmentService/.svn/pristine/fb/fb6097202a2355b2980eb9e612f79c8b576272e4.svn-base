CREATE TABLE `gts_chakuri_db`.`gts_field_of_recruitments` (
  `field_of_recruitment_id` BIGINT NOT NULL,
  `user_id` BIGINT NULL,
  `job_title_id` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`field_of_recruitment_id`),
  UNIQUE INDEX `field_of_recruitment_id_UNIQUE` (`field_of_recruitment_id` ASC) VISIBLE,
  INDEX `field_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `field`
    FOREIGN KEY (`user_id`)
    REFERENCES `gts_chakuri_db`.`gts_users` (`gts_user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
