create table gts_role_permissions(
gts_role_permission_id     INT NOT NULL,
gts_role_id                INT NOT NULL,
gts_permission_id          INT NOT NULL,
FOREIGN KEY(gts_role_id) REFERENCES gts_roles(gts_role_id),
FOREIGN KEY(gts_permission_id) REFERENCES gts_permissions(gts_permission_id),
PRIMARY KEY (gts_role_permission_id)
);