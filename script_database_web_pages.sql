create table web_pages_clients (
	client_id int,
	client_type varchar,
	domain varchar,
	social_media json,
	form json
);

create table people (
	first_name varchar,
	second_name varchar,
	last_name varchar,
	second_last_name varchar
);

create table companies (
	name varchar,
	tradename varchar
);

create table identifications (
	identification_type_id int,
	value varchar,
	owner_type varchar,
	owner_id int
);

insert into people (first_name, second_name, last_name, second_last_name) values ('Rommel', 'Omar', 'Montoya', 'Rodriguez');
insert into identifications (identification_type_id, "value", owner_type, owner_id) values (1, '12345678', 'person', 1);
INSERT INTO web_pages_clients (
    client_id,
    client_type,
    domain,
    social_media,
    form
)
VALUES (
    1,
    'person',
    'https://rommelmontoya.com',
    '{"form_mail":"rommelmontoya97@gmail.com","mails": {"personal_gmail": "rommelmontoya97@gmail.com","corporative_gmail": "rommelagenciamk@gmail.com"},"instagram": {"personal": "osamita_bin","fitness": "osamapower.fit","profesional": "rommel.omr"}}'::json,
	'{"name": {"label":"¿Cómo te llamas?","required":"true"},"email": {"label":"¿Cuál es tu correo electronico?","required":"true"},"phone": {"label":"¿Cuál es tu telefono?","required":"true"},"description": {"label":"Cuéntame, ¿en qué puedo ayudarte?","required":"true"}}'::json
);