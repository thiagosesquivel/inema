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


-- insert in table client
INSERT INTO inema.clients(id, name, email, cpf) values
(UUID(),'ClientA', 'clientea@teste.com', '047.608.047-90'),
(UUID(), 'ClientB','cliente2@teste.com', '066.282.081-92'),
(UUID(), 'ClientC', 'client3@teste.com', '690.733.139-02'),
(UUID(), 'ClientD', 'client4@teste.com', '382.320.268-55')

-- insert in table products
INSERT INTO inema.products(id, name, price, quantity) values
(UUID(), 'ProdutoA', 8.00, 2),
(UUID(), 'ProdutoB', 9.00, 9),
(UUID(), 'ProdutoC', 10.00,10),
(UUID(), 'ProdutoD', 2.00, 5),
(UUID(), 'ProdutoE', 12.00,8),
(UUID(), 'ProdutoF', 3.00 ,3),
(UUID(), 'ProdutoG', 5.00 , 7)
