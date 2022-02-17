create database Argonaute;

use Argonaute;

create TABLE Liste (
    id_argonaute integer auto_increment,
    nom_argonaute varchar(50),
    PRIMARY KEY (id_argonaute)
);

INSERT INTO Liste (nom_argonaute)
VALUES ("Eleftheria"), ("Gennadios"), ("Lysimachos"), ("Laurent Jade");