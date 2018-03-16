CREATE DATABASE project;
use project;

CREATE TABLE user(id integer NOT NULL, score integer, name character varying(100) NOT NULL, high_school character varying(100) NOT NULL, graduation_year integer, gpa integer, CONSTRAINT pk_user PRIMARY KEY (id));
CREATE TABLE school(id integer NOT NULL, title character varying(100) NOT NULL, score integer, CONSTRAINT pk_school PRIMARY KEY (id));
CREATE TABLE checklist(id integer NOT NULL, titlle character varying(100) NOT NULL, due_data date, tags character varying(100) NOT NULL, CONSTRAINT pk_checklist PRIMARY KEY (id));


CREATE TABLE userSchool(idUserSchool integer NOT NULL, idUser integer, idSchool integer, FOREIGN KEY idUser REFERENCES user(id), FOREIGN KEY idSchool REFERENCES school(id));
CREATE TABLE ActionsChecklistUser(idUserChecklist integer NOT NULL, idUser integer, idChecklist integer, action integer, FOREIGN KEY idUser REFERENCES user(id), FOREIGN KEY idChecklist REFERENCES checklist(id));


INSERT INTO user VALUES (123, 10, "Erick", "Escola 1", 2017, 10);
INSERT INTO user VALUES (124, 9, "Outro Erick", "Escola 2", 2017, 9);
INSERT INTO user VALUES (125, 8, "Outro outro Erick", "Escola 3", 2017, 8);
INSERT INTO user VALUES (126, 7, "Outro outro outro Erick", "Escola 4", 2017, 7);
INSERT INTO user VALUES (127, 6, "Outro outro outro outro Erick", "Escola 5", 2017, 6);


INSERT INTO school VALUES (223, "Escola 1", 10);
INSERT INTO school VALUES (224, "Escola 2", 9);
INSERT INTO school VALUES (225, "Escola 3", 8);
INSERT INTO school VALUES (226, "Escola 4", 7);

INSERT INTO checklist VALUES (323, "Checklist 1", '2017-02-26', "Minha tag 1");
INSERT INTO checklist VALUES (324, "Checklist 2", '2017-02-27', "Minha tag 2");
INSERT INTO checklist VALUES (325, "Checklist 3", '2017-02-28', "Minha tag 3");


INSERT INTO userSchool(423, 123, 223);
INSERT INTO userSchool(424, 125, 225);
INSERT INTO userSchool(425, 124, 224);

INSERT INTO ActionsChecklistUser(523, 124, 324);
INSERT INTO ActionsChecklistUser(524, 123, 323);