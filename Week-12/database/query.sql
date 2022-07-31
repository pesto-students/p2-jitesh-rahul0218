-- Find the item that has minimum weight.
SELECT description, min(weight) as min_weight from items;


-- Find the different warehouses in “Pune”
SELECT * FROM warehouses WHERE location = "Pune";

-- Find the details of items ordered by a customer “Mr. Patil”.
SELECT *
FROM customer C, orders O
WHERE C.cno = O.cno and cname="Mr. Patil";


select * from warehouses;
-- Find a Warehouse which has maximum stores;
SELECT * FROM store WHERE wid = 
						(SELECT wid FROM store
                        group by wid order by 
                        count(wid)  desc limit 1);
                        
-- Find an item which is ordered for a minimum number of times
SELECT * FROM items where itemno = (
									SELECT itemno FROM orders 
                                    group by itemno order by 
                                    count(itemno) limit 1);

-- Find the detailed orders given by each customer. 
SELECT * FROM orders
    INNER JOIN customer ON orders.customer_id = customer.cno
    INNER JOIN items on orders.item_id = items.itemno;




