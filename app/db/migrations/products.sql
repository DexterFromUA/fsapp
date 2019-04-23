DROP TABLE IF EXISTS products;

CREATE TABLE products(
    id bigserial PRIMARY KEY,
    title VARCHAR,
    author VARCHAR,
    bookYear numeric,
    timeRow TIMESTAMP
);
