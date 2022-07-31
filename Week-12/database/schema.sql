create database warehouse;
use warehouse;
CREATE TABLE city (
    city char(20),
    state char(20)
);


desc city;

CREATE TABLE store (
    sid int primary key,
    s_name char(20),
    location_city char(20)
);
desc store;
CREATE TABLE warehouses (
    wid int primary key,
    wname char(30),
    location char(20)
);
desc warehouses;

CREATE TABLE customer (
    cno int primary key,
    cname char(50),
    addr varchar(50),
    cu_city char(20)
);
desc customer;
CREATE TABLE orders (
    ono int primary key,
    date date
);

desc orders;

CREATE TABLE items (
    itemno int primary key,
    description text,
    weight decimal(5,2),
    cost decimal(5,2)
);
desc items;

ALTER TABLE orders
add cno int;
ALTER TABLE orders
add itemno int;

ALTER TABLE store
add wid int;
ALTER TABLE store
ADD FOREIGN KEY (wid) REFERENCES warehouses(wid);
select * from store;

ALTER TABLE Orders
ADD FOREIGN KEY (itemno) REFERENCES items(itemno);
ALTER TABLE Orders
ADD FOREIGN KEY (cno) REFERENCES customer(cno);


insert into city(city, state) values('kolkata', 'West Bengal'),
							('Pune', 'Maharastra'), ('Mumbai', 'Maharastra');
select * from city;

insert into warehouses(wid, wname, location) values(1, 'A', 'Pune'),
							(2,'B', 'Pune'), (3,'C', 'Kolkata');
select * from warehouses;

insert into store(sid, s_name, location_city) values(1, 'Store A', 'Pune'),
							(2,'Store B', 'Pune'), (3,'Store C', 'Kolkata');
UPDATE store SET wid = 2 WHERE sid = 1;
UPDATE store SET wid = 1 WHERE sid = 2;
UPDATE store SET wid = 3 WHERE sid = 3;                            
insert into customer(cno,  cname, addr, cu_city) values(1, 'Mr. Patil', 'Xyz', 'Delhi'),
							(2,'Joy', 'abc', 'Punjab'), (3,'Amir', 'rag', 'Pune');
                            
insert into items(itemno,  description, weight, cost) values(1, 'Tomato', 2.50, 40.00),
							(2, 'Patato', 1, 33.00), (3,'Lemon', 1.50, 20.00);
                            
insert into orders(ono, date, itemno, cno) values(1, '2020-01-01', 3, 1),
							(2,'2020-01-02', 2, 3), (3,'2020-01-03', 1, 2);

select * from orders;

