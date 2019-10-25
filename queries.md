# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

```sql
select p.productName
, c.categoryName
from products as p
join categories as c on c.categoryId = p.categoryID;
```

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

```sql
select o.orderId
, s.shipperName
from orders as o
join shippers as s on s.shipperId = o.shipperId
where o.orderDate < '1997-01-09';
```

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

```sql
SELECT p.productName
, od.quantity
FROM [OrderDetails] as od
join products as p on p.productId = od.productId
where od.orderId = 10251
order by p.productName;
```

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

```sql
SELECT o.orderId as [Order ID]
, c.customerName as [Customer Name]
, e.lastName as [Employee (last name)]
FROM [Orders] as o
join customers as c on c.customerId = o.customerId
join employees as e on e.employeeId = o.employeeId;
```

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 