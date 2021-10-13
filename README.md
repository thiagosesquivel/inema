<h1 align="center">
    💰Sales system PHP
</h1>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

<h2> 🚀 Tecnologias</h2>

Esse projeto foi desenvolvido utilizando:
<ul>
   <li><a href="https://laravel.com">Laravel</a></li>
   <li><a href="https://inertiajs.com">InertiaJs</a></li>
   <li><a href="https://reactjs.org">ReactJs</a></li>
</ul>

<h2> 💻 Sobre o projeto</h2>
O projeto foi desenvolvido para a prova prática de desenvolvedor PHP do Inema. 

O projeto tem duas telas.  Sendo uma delas para listagem de vendas (/sales) e uma para cadastro(/new/sale).

<h2> 🖱 Instalação </h2>

Para iniciar, clone esse repositório na sua máquina através do seu terminal e em seguida acesse a pasta do projeto com o comando: 

` cd inema `

Após acessar a pasta, é hora de baixar as dependências do Laravel. Para isso execute o seguite comando no seu terminal:

`composer install`

Chegou a hora de baixar as dependências do ReactJs. Para isso execute o seguinte comando:

```
 yarn 
 ``` 
 ou 
 ```
 npm install
 ```

Vamos configurar o projeto para acessar a nossa database, para isso, iremos criar um arquivo chamado .env na raiz do nosso projeto, copiar todo o conteúdo do arquivo .env-example para ele e alterar as seguntes linhas 

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=NOME_DA_SUA_DATABASE
DB_USERNAME=SEU_USUARIO
DB_PASSWORD=SUA_SENHA
```

Agora vamos criar nossas tabelas, inserir alguns dados com SQL e adicionar um trigger ao ser adicionado um novo produto. Todos esses scripts estão salvos no arquivo scripts.sql

```
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
```
