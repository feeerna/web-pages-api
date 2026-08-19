create table web_pages_clients (
	client_id int,
	client_type varchar,
	domain varchar,
	social_media json
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