DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users(
    id bigserial PRIMARY KEY,
    name VARCHAR,
    lastName VARCHAR,
    mail VARCHAR,
    password VARCHAR,
    role VARCHAR
);
