CREATE TABLE IF NOT EXISTS quote (
  ID bigserial NOT NULL,
  quote varchar(200),
  author varchar(60),
  PRIMARY KEY(ID)
);
CREATE TABLE IF NOT EXISTS article (
  ID bigserial NOT NULL,
  title varchar(100),
  summary varchar(500),
  image_url varchar(100),
  href varchar(100),
  PRIMARY KEY(ID)
);
CREATE TABLE IF NOT EXISTS horoscopes (
  ID bigserial NOT NULL,
  type varchar(20),
  description varchar(200),
  image_url varchar(100),
  href varchar(100),
  PRIMARY KEY(ID)
);