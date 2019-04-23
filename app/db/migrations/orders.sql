DROP TABLE IF EXISTS orders;

CREATE TABLE IF NOT EXISTS orders(
    id bigserial PRIMARY KEY,
    userId NUMERIC,
    productId NUMERIC,
    orderTime TIMESTAMP
);
