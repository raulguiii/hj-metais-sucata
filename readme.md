banco:

CREATE DATABASE db_hj_metais_sucata; 
USE db_hj_metais_sucata;

--  ---------------------------------------

-- TABLE AGUA
select * from agua;

DELETE FROM agua WHERE id = 10;

CREATE TABLE agua (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    data DATE NOT NULL,
    valor DECIMAL(10,2) NOT NULL
);

drop table agua;


--  ---------------------------------------


-- TABLE ALUGUEL
select * from aluguel;

DELETE FROM aluguel WHERE id = 10;

CREATE TABLE aluguel (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    data DATE NOT NULL,
    valor DECIMAL(10,2) NOT NULL
);

drop table aluguel;


--  ---------------------------------------


-- TABLE CONTABILIDADE
select * from contabilidade;

DELETE FROM contabilidade WHERE id = 10;

CREATE TABLE contabilidade (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    data DATE NOT NULL,
    valor DECIMAL(10,2) NOT NULL
);

drop table contabilidade;


--  ---------------------------------------


-- TABLE ENERGIA
select * from energia;

DELETE FROM energia WHERE id = 10;

CREATE TABLE energia (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    data DATE NOT NULL,
    valor DECIMAL(10,2) NOT NULL
);

drop table energia;


--  ---------------------------------------


-- TABLE FUNCIONARIOS
select * from funcionarios;

DELETE FROM funcionarios WHERE id = 10;

CREATE TABLE funcionarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    data DATE NOT NULL,
    valor DECIMAL(10,2) NOT NULL
);

drop table funcionarios;


--  ---------------------------------------


-- TABLE GAS
select * from gas;

DELETE FROM gas WHERE id = 10;

CREATE TABLE gas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    data DATE NOT NULL,
    valor DECIMAL(10,2) NOT NULL
);

drop table gas;


--  ---------------------------------------


-- TABLE REFEICOES
select * from refeicoes;

DELETE FROM refeicoes WHERE id = 10;

CREATE TABLE refeicoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    data DATE NOT NULL,
    valor DECIMAL(10,2) NOT NULL
);

drop table refeicoes;


--  ---------------------------------------


-- TABLE OUTROS
select * from outros;

DELETE FROM outros WHERE id = 10;

CREATE TABLE outros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    data DATE NOT NULL,
    valor DECIMAL(10,2) NOT NULL
);

drop table outros;
