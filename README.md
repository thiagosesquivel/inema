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

