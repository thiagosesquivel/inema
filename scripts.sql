-- Create database Inema
CREATE DATABASE inema;

-- Create table clients
CREATE TABLE inema.clients (
    id int(6) AUTO_INCREMENT NOT NULL,
    name varchar(255) NOT NULL,
    emaiL varchar(255) NOT NULL,
    cpf varchar(18) NOT NULL,
    PRIMARY KEY (id)
)

-- Create table products
CREATE TABLE inema.products(
   id int(6) AUTO_INCREMENT NOT NULL,
   name varchar(255) NOT NULL,
   price float (8,2) NOT NULL,
   quantity int not null,
   PRIMARY KEY(id)
)

-- Create table sales
CREATE TABLE inema.sales(
	 id int(6) AUTO_INCREMENT NOT NULL,
	 client_id int(6) NOT NULL,
     total float(8,2) NOT NULL,
     created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  	 updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE now(),
  	PRIMARY KEY (id),
	FOREIGN KEY (client_id) REFERENCES clients(id)
)

-- Create table sales_has_products
CREATE TABLE inema.sales_has_products(
    id int(6) AUTO_INCREMENT NOT NULL,
    sale_id int(6) NOT NULL,
    product_id int(6) NOT NULL,
    quantity int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (sale_id) REFERENCES sales(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
)

-- Trigger
CREATE TRIGGER Tgr_ItensVenda_Insert AFTER INSERT
ON sales_has_products
FOR EACH ROW
BEGIN
	UPDATE products SET quantity = quantity - NEW.quantity
WHERE id = NEW.product_id;
END$




-- insert in table client
INSERT INTO inema.clients( name, email, cpf) values
('ClientA', 'clientea@teste.com', '047.608.047-90'),
( 'ClientB','cliente2@teste.com', '066.282.081-92'),
( 'ClientC', 'client3@teste.com', '690.733.139-02'),
( 'ClientD', 'client4@teste.com', '382.320.268-55')

-- insert in table products
INSERT INTO inema.products(name, price, quantity) values
( 'ProdutoA', 8.00, 2),
( 'ProdutoB', 9.00, 9),
( 'ProdutoC', 10.00,10),
( 'ProdutoD', 2.00, 5),
( 'ProdutoE', 12.00,8),
( 'ProdutoF', 3.00 ,3),
( 'ProdutoG', 5.00 , 7)
