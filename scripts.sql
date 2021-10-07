-- Create database Inema
CREATE DATABASE inema;

-- Create table clients
CREATE TABLE inema.clients (
    id varchar(36) NOT NULL,
    name varchar(255) NOT NULL,
    emaiL varchar(255) NOT NULL,
    cpf varchar(12) NOT NULL,
    PRIMARY KEY (id)
)

-- Create table products
CREATE TABLE inema.products(
   id varchar(36) NOT NULL,
   name varchar(255) NOT NULL,
   price float (8,2) NOT NULL,
   quantity int not null,
   PRIMARY KEY(id)
)

-- Create table sales
CREATE TABLE inema.sales(
	 id varchar(36) NOT NULL,
	client_id varchar(36) NOT NULL,
    total float(8,2),
     created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  	 updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE now(),
  	PRIMARY KEY (id),
	FOREIGN KEY (client_id) REFERENCES clients(id)
)

-- Create table sales_has_products
CREATE TABLE inema.sales_has_products(
    id varchar(36) NOT NULL,
    sale_id varchar(36) NOT NULL,
    product_id varchar(36) NOT NULL,
    quantity int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (sale_id) REFERENCES sales(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
)


