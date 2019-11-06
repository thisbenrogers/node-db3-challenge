-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

select p.productName
, c.categoryName
from Product as p
join Category as c on c.Id = p.categoryID
;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

select o.Id as "Order Id"
, s.CompanyName as "Company"
from [Order] as o
join shipper as s on s.Id = o.ShipVia
where o.OrderDate < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT p.ProductName
, od.Quantity
FROM [OrderDetail] as od
join Product as p on p.Id = od.ProductId
where od.OrderId = 10251
order by p.ProductName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

SELECT o.Id as [Order ID]
, c.CompanyName as [Customer Name]
, e.LastName as [Employee (last name)]
FROM [Order] as o
join Customer as c on c.Id = o.CustomerId
join Employee as e on e.Id = o.EmployeeId;
