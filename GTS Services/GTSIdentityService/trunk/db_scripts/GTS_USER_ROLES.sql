  CREATE TABLE gts_user_roles(
  gts_user_role_id              BIGINT NOT NULL,
  gts_user_id                   BIGINT NOT NULL,
  gts_role_id                   INT  NOT NULL,
  gts_user_role_is_primary      BIT NOT NULL,
  PRIMARY KEY (gts_user_role_id),
  FOREIGN KEY(gts_user_id) REFERENCES gts_users(gts_user_id),
  FOREIGN KEY(gts_role_id) REFERENCES gts_roles(gts_role_id)
  );


INSERT INTO `GTS_CHAKURI_DB`.`gts_user_roles` (`gts_user_id`, `gts_role_id`) VALUES ('1', '1');
INSERT INTO `GTS_CHAKURI_DB`.`gts_user_roles` (`gts_user_id`, `gts_role_id`) VALUES ('1', '2');
INSERT INTO `GTS_CHAKURI_DB`.`gts_user_roles` (`gts_user_id`, `gts_role_id`) VALUES ('2', '3');
INSERT INTO `GTS_CHAKURI_DB`.`gts_user_roles` (`gts_user_id`, `gts_role_id`) VALUES ('3', '4');
INSERT INTO `GTS_CHAKURI_DB`.`gts_user_roles` (`gts_user_id`, `gts_role_id`) VALUES ('4', '5');
INSERT INTO `GTS_CHAKURI_DB`.`gts_user_roles` (`gts_user_id`, `gts_role_id`) VALUES ('4', '6');
INSERT INTO `GTS_CHAKURI_DB`.`gts_user_roles` (`gts_user_id`, `gts_role_id`) VALUES ('5', '7');
INSERT INTO `GTS_CHAKURI_DB`.`gts_user_roles` (`gts_user_id`, `gts_role_id`) VALUES ('6', '2');
INSERT INTO `GTS_CHAKURI_DB`.`gts_user_roles` (`gts_user_id`, `gts_role_id`) VALUES ('7', '5');
