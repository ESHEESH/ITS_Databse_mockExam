export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

export const questions: Question[] = [
  // Reviewer 1 - Questions 1-60
  {
    id: 1,
    question: "You are structuring a table relational database. For each statement, select True or False.\n\nEach value in a field in a table must be unique",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "Each value in a field does NOT need to be unique. Only primary keys must be unique.",
    category: "Database Fundamentals"
  },
  {
    id: 2,
    question: "You have a table named Product. The product table has column for productDescription and ProductCategory. You need to change the ProductCategory value for all the spoons in the Product to 43. Which statement should you use?",
    options: [
      "UPDATE Product WHERE ProductDescription = 'spoon' SET ProductCategory = 43",
      "UPDATE Product SET ProductCategory = 43 WHERE ProductDescription = 'spoon'",
      "UPDATE Product WHERE ProductDescription = 'spoon' TO ProductCategory = 43",
      "UPDATE Product TO ProductCategory = 43 WHERE ProductDescription = 'spoon'"
    ],
    correctAnswer: 1,
    explanation: "The correct syntax is UPDATE table SET column = value WHERE condition. SET comes before WHERE.",
    category: "SQL"
  },
  {
    id: 3,
    question: "You need to delete all records with the GivenName Tia from the Volunteer table. Which SQL statement should you use?",
    options: [
      "DELETE FROM Volunteer WHERE GivenName == 'Tia'",
      "DELETE FROM Volunteer WHERE GivenName = 'Tia'",
      "DELETE FROM Volunteer WHERE GivenName EQUALS 'Tia'",
      "DELETE FROM Volunteer WHERE GivenName IS 'Tia'"
    ],
    correctAnswer: 1,
    explanation: "The correct syntax uses a single equals sign (=) for comparison in SQL.",
    category: "SQL"
  },
  {
    id: 4,
    question: "You delete row in a table named Order. The corresponding row in the OrderItem table are automatically deleted. This process is an example of a/an:",
    options: ["Domino delete", "Waterfall delete", "Functional delete", "Cascade delete", "Inherited delete"],
    correctAnswer: 3,
    explanation: "Cascade delete automatically deletes related rows in child tables when a row in the parent table is deleted.",
    category: "Referential Integrity"
  },
  {
    id: 5,
    question: "A table named PlayerStat contains fields: PlayerID (INT, NOT NULL), TeamID (INT, NOT NULL), GameDate (DATETIME, NULL), Point (INT, NULL). You need to display the total number of points per player on the team whose ID is 1.",
    options: [
      "SELECT SUM(Point) FROM PlayerStat WHERE TeamID = 1 GROUP BY PlayerID",
      "SELECT PlayerID, SUM(Point) FROM PlayerStat WHERE TeamID = 1 GROUP BY PlayerID",
      "SELECT PlayerID, TeamID, SUM(Point) FROM PlayerStat GROUP BY TeamID",
      "SELECT SUM(Point) FROM PlayerStat GROUP BY TeamID HAVING TeamID = 1"
    ],
    correctAnswer: 1,
    explanation: "You need to select PlayerID and sum the points, filtering by TeamID = 1 and grouping by PlayerID.",
    category: "SQL"
  },
  {
    id: 6,
    question: "You create a query to determine whether Sample Movie appears only once in the Movie table. The query returns a syntax error. What should you do?",
    options: [
      "Remove the group by clause",
      "Change the having clause to having count(title) = 1",
      "Remove the order by clause",
      "Change the having clause to having count(1) = 1"
    ],
    correctAnswer: 2,
    explanation: "ORDER BY must come after GROUP BY and HAVING clauses. Remove ORDER BY or move it to the end.",
    category: "SQL"
  },
  {
    id: 7,
    question: "Which statement creates an index?",
    options: [
      "CREATE TABLE Employee (EmployeeID INTEGER DISTINCT)",
      "CREATE TABLE Employee (EmployeeID INTEGER INDEX)",
      "CREATE TABLE Employee (EmployeeID INTEGER PRIMARY KEY)",
      "CREATE TABLE Employee (EmployeeID INTEGER NULL)"
    ],
    correctAnswer: 2,
    explanation: "PRIMARY KEY automatically creates an index on that column.",
    category: "Indexes"
  },
  {
    id: 8,
    question: "The Road table has RoadID as primary key. You execute: INSERT INTO Road VALUES (1234, 36). What is the result?",
    options: [
      "A new row in table",
      "A syntax error",
      "An error stating that null values are not allowed",
      "An error stating that duplicate ids are not allowed"
    ],
    correctAnswer: 3,
    explanation: "Since RoadID 1234 already exists, this will cause a primary key constraint violation (duplicate ID error).",
    category: "Constraints"
  },
  {
    id: 9,
    question: "A stored procedure returns all null values when concatenating strings. What is likely the cause?",
    options: [
      "You must specify the NULLIF keyword",
      "The plus (+) operator cannot be used to append character data",
      "The Prefix or FirstName columns have null values",
      "You must specify the join keyword"
    ],
    correctAnswer: 2,
    explanation: "Concatenating NULL with any value results in NULL in SQL Server.",
    category: "SQL"
  },
  {
    id: 10,
    question: "You are writing a SELECT statement to find every product whose name contains a specific character. Which keyword should you use in your WHERE clause?",
    options: ["Like", "In", "Between", "Fetch"],
    correctAnswer: 0,
    explanation: "LIKE is used with wildcards (%) to search for patterns in strings.",
    category: "SQL"
  },
  {
    id: 11,
    question: "Which feature does a relational database use to ensure that data entered into a column is valid?",
    options: ["An attribute", "A primary key", "A constraint", "An index"],
    correctAnswer: 2,
    explanation: "Constraints (CHECK, NOT NULL, etc.) enforce data validity rules.",
    category: "Constraints"
  },
  {
    id: 12,
    question: "You need to create a query that returns lastname, phonenumber and extension that are valid numbers, sorted by lastname.",
    options: [
      "SELECT Lastname, PhoneNumber, Extension FROM Customers WHERE PhoneNumber IS NOT NULL ORDER BY Lastname",
      "SELECT Lastname, PhoneNumber, Extension FROM Customers WHERE Extension IS NOT NULL ORDER BY Lastname",
      "SELECT Lastname, PhoneNumber, Extension FROM Customers WHERE PhoneNumber IS NOT NULL AND Extension IS NOT NULL ORDER BY Lastname",
      "SELECT Lastname, PhoneNumber, Extension FROM Customers ORDER BY Lastname"
    ],
    correctAnswer: 2,
    explanation: "Valid numbers require both PhoneNumber and Extension to be NOT NULL.",
    category: "SQL"
  },
  {
    id: 13,
    question: "You have a table with one million rows. You search using: SELECT ProductName, Price FROM Product WHERE Category = 'Science Books'. What will make this search more efficient?",
    options: [
      "A clustered index on the ProductName column",
      "A clustered index on the Price column",
      "A non-clustered index on the Category column",
      "A non-clustered on the Price column"
    ],
    correctAnswer: 2,
    explanation: "A non-clustered index on the WHERE clause column (Category) will speed up the search.",
    category: "Indexes"
  },
  {
    id: 14,
    question: "You join Customer and Order tables. The results show all customers and their orders, including customers who have no orders. Which type of join is this?",
    options: ["Full join", "Partial join", "Inner join", "Complete join"],
    correctAnswer: 0,
    explanation: "A FULL JOIN (or LEFT JOIN for just customers with no orders) returns all records from both tables.",
    category: "Joins"
  },
  {
    id: 15,
    question: "You need to display students who enrolled on or after June 1, 2020 OR graduated in 2020, ordered by enrollment date (most recent first).",
    options: [
      "SELECT * FROM student WHERE enrollment_date >= '2020-06-01' OR academic_status ='graduated' AND graduation_date >= '2020-01-01' ORDER BY enrollment_date DESC",
      "SELECT * FROM student WHERE enrollment_date >= '2020-06-01' AND academic_status ='graduated' AND graduation_date >= '2020-01-01' ORDER BY enrollment_date ASC",
      "SELECT * FROM student WHERE enrollment_date >= '2020-06-01' AND academic_status ='graduated' OR graduation_date >= '2020-01-01' ORDER BY enrollment_date",
      "SELECT * FROM student WHERE enrollment_date >= '2020-06-01' OR academic_status ='graduated' OR graduation_date >= '2020-01-01' ORDER BY enrollment_date DESC"
    ],
    correctAnswer: 0,
    explanation: "Use OR between conditions and ORDER BY ... DESC for most recent first.",
    category: "SQL"
  },
  {
    id: 16,
    question: "Which statement should you use to remove a foreign key?",
    options: ["Delete table", "Alter table", "Alter foreign key", "Delete foreign key"],
    correctAnswer: 1,
    explanation: "ALTER TABLE is used to modify table structure, including dropping foreign keys.",
    category: "DDL"
  },
  {
    id: 17,
    question: "You need to select columns from Chapter and Language tables to create a composite primary key for the ChapterLanguage table. Which two columns should you select?",
    options: ["ChapterID", "City", "Region", "LanguageName", "Country", "LanguageID"],
    correctAnswer: 0,
    explanation: "ChapterID and LanguageID would form the composite primary key for a junction table.",
    category: "Keys"
  },
  {
    id: 18,
    question: "You want to store code that can be manually called any time. Which database object should you use?",
    options: ["Stored procedure", "Function", "Trigger", "View"],
    correctAnswer: 0,
    explanation: "Stored procedures are reusable code blocks that can be called manually.",
    category: "Stored Procedures"
  },
  {
    id: 19,
    question: "Which query will increase the price of item 1 by 6 percent?",
    options: [
      "USE Products SET Price = Price * 1.06 WHERE ItemNumber = 1",
      "SET Price = Price * 1.06 FROM Products WHERE ItemNumber = 1",
      "ALTER Products SET Price = Price * 1.06 WHERE ItemNumber = 1",
      "UPDATE Products SET Price = Price * 1.06 WHERE ItemNumber = 1"
    ],
    correctAnswer: 3,
    explanation: "UPDATE is the correct statement to modify existing data.",
    category: "SQL"
  },
  {
    id: 20,
    question: "You need to delete a database table. Which DDL keyword should you use?",
    options: ["Alter", "Delete", "Drop", "Truncate"],
    correctAnswer: 2,
    explanation: "DROP TABLE removes the entire table definition and data.",
    category: "DDL"
  },
  {
    id: 21,
    question: "You execute: SELECT EmployeeID, FirstName, DepartmentName FROM Employee, Department. This operation is called a/an:",
    options: ["Intersection", "Outer join", "Cartesian product", "Equi-join"],
    correctAnswer: 2,
    explanation: "Selecting from multiple tables without a JOIN condition creates a Cartesian product (all combinations).",
    category: "Joins"
  },
  {
    id: 22,
    question: "You need to normalize a database to first normal form. Which two requirements must you meet?",
    options: [
      "Exclude repeating groups",
      "Exclude foreign key",
      "Exclude composite key",
      "Exclude duplicate rows"
    ],
    correctAnswer: 0,
    explanation: "1NF requires no repeating groups and no duplicate rows.",
    category: "Normalization"
  },
  {
    id: 23,
    question: "Match data types: StudentName (string), GradeLevel (whole number), DaysAbsent (one decimal).",
    options: [
      "VARCHAR, INT, DECIMAL(3,1)",
      "CHAR, INTEGER, FLOAT",
      "TEXT, INT, DOUBLE",
      "STRING, NUMBER, DECIMAL"
    ],
    correctAnswer: 0,
    explanation: "VARCHAR for strings, INT for whole numbers, DECIMAL(3,1) for one decimal place.",
    category: "Data Types"
  },
  {
    id: 24,
    question: "Which statement deletes rows where the employee's phone number is not entered?",
    options: [
      "DELETE FROM employee WHERE phone = NULL",
      "DELETE FROM employee WHERE phone IS NULL",
      "DELETE FROM employee WHERE phone IS NOT NULL",
      "DELETE FROM employee WHERE phone = NULLABLE"
    ],
    correctAnswer: 1,
    explanation: "IS NULL is the correct syntax to check for NULL values.",
    category: "SQL"
  },
  {
    id: 25,
    question: "You execute: SELECT CustomerID, FirstName, DateJoined FROM Customer. How are rows organized?",
    options: [
      "In chronological order by DateJoined",
      "In the order in which the rows were inserted",
      "In no predictable order",
      "In alphabetical order by FirstName"
    ],
    correctAnswer: 2,
    explanation: "Without an ORDER BY clause, the order of results is not guaranteed.",
    category: "SQL"
  },
  {
    id: 26,
    question: "You need to remove a view named EmployeeView. Which statement should you use?",
    options: [
      "DROP VIEW EmployeeView",
      "DELETE EmployeeView",
      "DELETE View EmployeeView",
      "DROP EmployeeView"
    ],
    correctAnswer: 0,
    explanation: "DROP VIEW is the correct syntax to remove a view.",
    category: "DDL"
  },
  {
    id: 27,
    question: "Which SQL statement returns the country and number of orders where the number of orders is less than 50?",
    options: [
      "SELECT COUNT(OrderId), Country FROM Orders HAVING COUNT(OrderId) < 50 GROUP BY Country",
      "SELECT Country, OrderId FROM Orders GROUP BY Country WHERE COUNT(OrderId) < 50",
      "SELECT COUNT(OrderId), Country FROM Orders GROUP BY Country HAVING COUNT(OrderId) < 50",
      "SELECT Country, OrderId FROM Orders WHERE Count(OrderId) < 50 GROUP BY Country"
    ],
    correctAnswer: 2,
    explanation: "Use GROUP BY with HAVING to filter aggregated results.",
    category: "SQL"
  },
  {
    id: 28,
    question: "Which database term describes the relationship between ProductID and ProductCategory?",
    options: ["Deterministic", "Cohort", "Compositional", "Functionally dependent", "Relationally dependent"],
    correctAnswer: 3,
    explanation: "ProductCategory is functionally dependent on ProductID (each ProductID determines a ProductCategory).",
    category: "Database Theory"
  },
  {
    id: 29,
    question: "You execute a transaction to delete 100 rows but it fails after 40 rows. What is the result?",
    options: [
      "The table will be corrupted",
      "40 rows will be deleted from the table",
      "No rows will be deleted from the Table",
      "The transaction will restart"
    ],
    correctAnswer: 2,
    explanation: "Transactions are atomic - either all changes are committed or none are (rollback on failure).",
    category: "Transactions"
  },
  {
    id: 30,
    question: "What changes are needed to remove the SSN column from the Customers table?",
    options: [
      "ALTER TABLE Customers DELETE SSN",
      "ALTER TABLE Customers DELETE COLUMN SSN",
      "ALTER TABLE Customers DROP SSN",
      "ALTER TABLE Customers DROP COLUMN SSN"
    ],
    correctAnswer: 3,
    explanation: "DROP COLUMN is the correct syntax to remove a column.",
    category: "DDL"
  },
  {
    id: 31,
    question: "You run a LEFT OUTER JOIN between Cars and Colors tables. How many rows are returned?",
    options: ["0", "2", "3", "6"],
    correctAnswer: 2,
    explanation: "LEFT OUTER JOIN returns all rows from the left table (Cars has 3 rows).",
    category: "Joins"
  },
  {
    id: 32,
    question: "Which two SQL keywords are valid to use in a CREATE TABLE statement?",
    options: ["Order By", "Primary Key", "Insert Into", "Constraint"],
    correctAnswer: 1,
    explanation: "PRIMARY KEY and CONSTRAINT are valid in CREATE TABLE statements.",
    category: "DDL"
  },
  {
    id: 33,
    question: "You need to display the address of the earliest 10 buildings that have been inspected.",
    options: [
      "SELECT TOP 10 Address FROM Building WHERE InspectionDate IS NOT NULL ORDER BY InspectionDate ASC",
      "SELECT Address FROM Building WHERE InspectionDate IS NOT NULL ORDER BY InspectionDate ASC LIMIT 10",
      "SELECT Address FROM Building ORDER BY InspectionDate LIMIT 10",
      "SELECT TOP 10 Address FROM Building ORDER BY InspectionDate"
    ],
    correctAnswer: 0,
    explanation: "Filter for non-null inspection dates, order by date ascending, and limit to 10.",
    category: "SQL"
  },
  {
    id: 34,
    question: "Which query correctly returns orders where ship_state excludes Texas (TX) and Arizona (AZ)?",
    options: [
      "SELECT * FROM Orders WHERE NOT Ship_State = 'TX' AND NOT Ship_State = 'AZ'",
      "SELECT * FROM Orders WHERE NOT Ship_State = 'TX' OR NOT Ship_State = 'AZ'",
      "SELECT * FROM Orders WHERE Ship_State NOT = 'TX' AND Ship_State NOT = 'AZ'",
      "SELECT * FROM Orders WHERE Ship_State NOT = 'TX' OR Ship_State NOT = 'AZ'"
    ],
    correctAnswer: 0,
    explanation: "Use AND with NOT to exclude both conditions.",
    category: "SQL"
  },
  {
    id: 35,
    question: "Select True or False: A full database backup is a copy of all of the data in the entire database.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "A full backup copies all data in the database.",
    category: "Backup"
  },
  {
    id: 36,
    question: "You need to create a view that returns an alphabetical list of game names. Which query should you use?",
    options: [
      "CREATE VIEW Mygames As SELECT Name FROM Games",
      "CREATE VIEW Mygames As SELECT * FROM Games",
      "CREATE VIEW Mygames As SELECT Name From Games ORDER BY Name",
      "CREATE VIEW Mygames As SELECT * From Games Where Name BETWEEN 'A' AND 'Z'"
    ],
    correctAnswer: 2,
    explanation: "ORDER BY Name will return the list in alphabetical order.",
    category: "Views"
  },
  {
    id: 37,
    question: "One reason to create a stored procedure is to:",
    options: [
      "Minimize storage space",
      "Improve performance",
      "Give the user control of the query logic",
      "Bypass case sensitivity requirements"
    ],
    correctAnswer: 1,
    explanation: "Stored procedures are pre-compiled and can improve performance.",
    category: "Stored Procedures"
  },
  {
    id: 38,
    question: "You need to ensure that an employee can be assigned to only an existing department. What should you apply?",
    options: ["A foreign key", "A primary key", "An index", "A unique constraint", "A data type"],
    correctAnswer: 0,
    explanation: "A foreign key constraint ensures referential integrity between tables.",
    category: "Keys"
  },
  {
    id: 39,
    question: "You need to populate a table named EmployeeCopy with data from an existing table named Employee.",
    options: [
      "Copy * Into Employee Select * From Employee",
      "Select * Into EmployeeCopy Select * From Employee",
      "Insert * From Employee Into EmployeeCopy",
      "Insert Into EmployeeCopy Select * From Employee"
    ],
    correctAnswer: 3,
    explanation: "INSERT INTO ... SELECT is the correct syntax to copy data between tables.",
    category: "SQL"
  },
  {
    id: 40,
    question: "You need to display total number of orders, average line item total, highest line item total, and grand total.",
    options: [
      "SELECT MAX(LineItemTotal), AVG(LineItemTotal), COUNT(ID), SUM(LineItemTotal) FROM ItemsOnOrder HAVING ItemNumber, Quantity, UnitPrice",
      "SELECT COUNT(ID), AVG(Unitprice+Quantity), MAX(UnitPrice+Quantity), SUM(UnitPrice+Quantity) FROM ItemOnOrder GROUP By ItemNumber, LineItemTotal",
      "SELECT SUM(ID), AVG(LineItemTotal), MAX(LineItemTotal), SUM(LineItemTotal) FROM ItemOnOrder",
      "SELECT COUNT(ID), AVG(LineItemTotal), MAX(LineItemTotal), SUM(LineItemTotal) FROM ItemOnOrder"
    ],
    correctAnswer: 3,
    explanation: "Use aggregate functions without unnecessary GROUP BY or HAVING clauses.",
    category: "SQL"
  },
  {
    id: 41,
    question: "You need to delete the record from Customer table that has CustomerID of 12345.",
    options: [
      "DELETE CustomerID FORM Customer WHERE CustomerID = 12345",
      "DELETE FROM Customer WHERE CustomerID = 12345",
      "UPDATE Customer DELETE * WHERE CustomerID = 12345",
      "UPDATE CustomerID FROM Customer DELETE * WHERE CustomerID = 12345"
    ],
    correctAnswer: 1,
    explanation: "DELETE FROM table WHERE condition is the correct syntax.",
    category: "SQL"
  },
  {
    id: 42,
    question: "You execute: INSERT INTO Product VALUES (3296, 'Table', 4444). ProductID is primary key. What is the result?",
    options: [
      "A new row in the Product table",
      "A syntax error",
      "A foreign key constraint violation",
      "A new row in the Category table",
      "A primary key constraint violation"
    ],
    correctAnswer: 4,
    explanation: "ProductID 3296 already exists, so this will cause a primary key constraint violation.",
    category: "Constraints"
  },
  {
    id: 43,
    question: "You delete rows in Order table and corresponding rows in OrderItem are automatically deleted. This is:",
    options: ["Waterfall delete", "Inherited delete", "Cascade delete", "Domino delete", "Functional delete"],
    correctAnswer: 2,
    explanation: "This is the definition of CASCADE DELETE.",
    category: "Referential Integrity"
  },
  {
    id: 44,
    question: "Which keyword combines results of two queries and returns only rows that appear in both result sets?",
    options: ["UNION", "INTERSECT", "ALL", "JOIN"],
    correctAnswer: 1,
    explanation: "INTERSECT returns only rows common to both queries.",
    category: "SQL"
  },
  {
    id: 45,
    question: "Harry in San Francisco returns books. Which statement correctly updates the table?",
    options: [
      "UPDATE LoanedBooks SET Books = 0 WHERE (Name = 'Harry' OR City = 'San Fransisco')",
      "UPDATE LoanedBooks SET Books = 0 WHERE (Name In 'Harry', 'San Fransisco')",
      "UPDATE LoanedBooks SET Books = 0 WHERE (Name = 'Harry' AND City = 'San Fransisco')",
      "INSERT INTO LoanedBooks SET Books = 0 WHERE ID = 4"
    ],
    correctAnswer: 2,
    explanation: "Use AND to match both Name = 'Harry' AND City = 'San Francisco'.",
    category: "SQL"
  },
  {
    id: 46,
    question: "You delete all Furniture products from Product table. What happens to the view that shows Furniture products?",
    options: ["Empty", "Deleted", "Unchanged", "Archived"],
    correctAnswer: 0,
    explanation: "The view will return an empty result set since the underlying data was deleted.",
    category: "Views"
  },
  {
    id: 47,
    question: "Two tables with 3 rows each. A cross join without WHERE clause returns how many rows?",
    options: ["0", "3", "6", "9"],
    correctAnswer: 3,
    explanation: "Cross join returns 3 x 3 = 9 rows (all combinations).",
    category: "Joins"
  },
  {
    id: 48,
    question: "You need to create a new column named District in Customer table. Which statement?",
    options: [
      "ALTER TABLE Customer MODIFY (District INTEGER)",
      "ALTER TABLE Customer ADD (INTEGER District)",
      "ALTER TABLE Customer ADD (District INTEGER)",
      "MODIFY TABLE Customer ADD (INTEGER District)"
    ],
    correctAnswer: 2,
    explanation: "ALTER TABLE ... ADD (column datatype) is the correct syntax.",
    category: "DDL"
  },
  {
    id: 49,
    question: "One difference between a function and a stored procedure is that a function:",
    options: [
      "Cannot accept parameters",
      "Cannot contain a transaction",
      "Must be called from a trigger",
      "Must return a value"
    ],
    correctAnswer: 3,
    explanation: "Functions must return a value, while stored procedures don't have to.",
    category: "Stored Procedures"
  },
  {
    id: 50,
    question: "Which SQL statement is a data manipulation language (DML) statement?",
    options: [
      "ALTER TABLE Employee ADD EmployeeName Varchar",
      "SELECT EmployeeName FROM Employee WHERE EmployeeName = 'Jack Smith'",
      "SELECT * INTO Employee FROM NewHires INSERT INTO Employee",
      "VALUES ('Jack Smith')"
    ],
    correctAnswer: 1,
    explanation: "SELECT is a DML statement. ALTER is DDL.",
    category: "SQL"
  },
  {
    id: 51,
    question: "Which column prevents the table from being in third normal form?",
    options: ["PetID", "Birthdate", "ID", "Year"],
    correctAnswer: 1,
    explanation: "Birthdate can be determined from PetID (transitive dependency), violating 3NF.",
    category: "Normalization"
  },
  {
    id: 52,
    question: "Select True or False: You can delete data by using a stored procedure.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "Stored procedures can contain DELETE statements.",
    category: "Stored Procedures"
  },
  {
    id: 53,
    question: "Which syntax should you use to create a Student table?",
    options: [
      "CREATE TABLE Student(ID INT, Name VARCHAR (100), Age INT)",
      "CREATE Student(ID INT, Name VARCHAR (100), Age INT)",
      "CREATE TABLE (ID INT, Name VARCHAR (100), Age INT)",
      "CREATE (TABLE Student ID INT, Name VARCHAR (100),"
    ],
    correctAnswer: 0,
    explanation: "CREATE TABLE tablename (columns) is the correct syntax.",
    category: "DDL"
  },
  {
    id: 54,
    question: "You need to disable User1's access to view data in Customer table. Which statement?",
    options: [
      "REVOKE User1 FROM Customer",
      "REVOKE SELECT ON Customer FROM User1",
      "REMOVE SELECT ON Customer FROM User1",
      "REMOVE User1 FROM Customer"
    ],
    correctAnswer: 1,
    explanation: "REVOKE permission ON table FROM user is the correct syntax.",
    category: "Security"
  },
  {
    id: 55,
    question: "Which two SQL statements can you use to insert a record into a table?",
    options: [
      "INSERT INTO AddressInfo ('1234 Main Street', 'Dallas', 'TX', '75201') VALUES ([StreetAddress], [City], [State], [PostalCode])",
      "INSERT INTO AddressInfo VALUES ('1234 Main Street', 'Dallas', 'TX', '75201')",
      "UPDATE AddressInfo SET [StreetAddress] = '123 Main Street', [City] = 'Dallas', [State] = 'TX', [PostalCode] = '75201'",
      "INSERT INTO AddressInfo ([StreetAddress], [City], [State], [PostalCode]) VALUES ('1234 Main Street', 'Dallas', 'TX', '75201')"
    ],
    correctAnswer: 1,
    explanation: "Both INSERT with VALUES only and INSERT with column list and VALUES are valid.",
    category: "SQL"
  },
  {
    id: 56,
    question: "Your query using OUTER JOIN returns an error. How should you correct it?",
    options: [
      "SELECT students.name, courses.name FROM students INNER JOIN courses WHERE students.courseID = courses.courseID",
      "SELECT students.name, courses.name FROM students INNER JOIN courses ON students.courseID = courses.coursesID",
      "SELECT students.name,courses.name FROM students INNER JOIN ON students.courseID = courses.coursesID",
      "SELECT students.name, courses.name FROM students INNER JOIN On courses WHERE students.courseID = courses.courseID"
    ],
    correctAnswer: 1,
    explanation: "INNER JOIN uses ON, not WHERE, to specify the join condition.",
    category: "Joins"
  },
  {
    id: 57,
    question: "Adding a NOT NULL column to an existing table with data causes an error. What is likely the cause?",
    options: [
      "The Person table is empty",
      "You should run DROP CONSTRAINT first",
      "The varchar(4) data type is invalid",
      "The DEFAULT keyword should be used to specify a default value"
    ],
    correctAnswer: 3,
    explanation: "When adding a NOT NULL column to a table with existing data, you need a DEFAULT value.",
    category: "DDL"
  },
  {
    id: 58,
    question: "You execute: DELETE FROM Student on a table with 100 rows. What is the result?",
    options: [
      "All rows and the table definition will be deleted",
      "All rows containing a NULL value will be deleted",
      "All rows in the table will be deleted",
      "You will receive an error message"
    ],
    correctAnswer: 2,
    explanation: "DELETE FROM table without a WHERE clause deletes all rows but keeps the table structure.",
    category: "SQL"
  },
  {
    id: 59,
    question: "Which term describes the relationship between ProductID and ProductCategory?",
    options: ["Compositional", "Cohort", "Deterministic", "Relationally dependent", "Functionally dependent"],
    correctAnswer: 4,
    explanation: "ProductCategory is functionally dependent on ProductID.",
    category: "Database Theory"
  },
  {
    id: 60,
    question: "You have SalesPerson and Sales tables. How do you ensure each Sales record has a valid salesperson?",
    options: [
      "Create a foreign key on Sales.SalesPersonID referencing SalesPerson.SalesPersonID",
      "Create a primary key on Sales.SalesPersonID",
      "Create a unique constraint on SalesPerson.SalesPersonID",
      "Create a check constraint on Sales.SalesPersonID"
    ],
    correctAnswer: 0,
    explanation: "A foreign key constraint ensures referential integrity between Sales and SalesPerson.",
    category: "Keys"
  },
  // Reviewer 2 - Questions 61-120
  {
    id: 61,
    question: "You need one column to record what time of day a user has taken an exam with time zone awareness. What data type?",
    options: ["datetime", "datetimeoffset", "datetime2", "Use two columns"],
    correctAnswer: 1,
    explanation: "datetimeoffset includes time zone information.",
    category: "Data Types"
  },
  {
    id: 62,
    question: "Views are database objects that contain all of the data in a database. Is this correct?",
    options: ["Tables", "No change is needed", "Queries", "Stored procedures"],
    correctAnswer: 0,
    explanation: "Tables contain the data, not views. Views are virtual tables based on queries.",
    category: "Views"
  },
  {
    id: 63,
    question: "You run a LEFT OUTER JOIN between Cars and Colors tables. How many rows?",
    options: ["6", "3", "0", "2"],
    correctAnswer: 1,
    explanation: "LEFT OUTER JOIN returns all rows from the left table (Cars has 3 rows).",
    category: "Joins"
  },
  {
    id: 64,
    question: "The ________ model for database management is based on first-order predicate logic.",
    options: ["Traditional", "Truncate", "Relational"],
    correctAnswer: 2,
    explanation: "The Relational model is based on first-order predicate logic.",
    category: "Database Theory"
  },
  {
    id: 65,
    question: "Your server crashed and recovered. What will you do to ensure table structure and contents are proper?",
    options: [
      "Perform a table optimization operation",
      "Perform a table repair operation",
      "Perform a table check operation",
      "Perform a table analysis operation"
    ],
    correctAnswer: 2,
    explanation: "CHECK TABLE verifies the integrity of table structure and contents.",
    category: "Maintenance"
  },
  {
    id: 66,
    question: "James wants to configure database access so users can only access their department's database. What should he do?",
    options: [
      "Create Windows Authentication login for each domain group, configure as database users, add to db_datareader and db_datawriter roles",
      "Create Windows Authentication login for each domain user, configure as database users, add to db_ddladmin role",
      "Create Windows Authentication login for each domain user, configure as database users, add to db_datareader and db_datawriter roles",
      "Create Windows Authentication login for each domain group, configure as database users, add to db_ddladmin role"
    ],
    correctAnswer: 0,
    explanation: "Use domain groups (not individual users) and assign db_datareader and db_datawriter roles.",
    category: "Security"
  },
  {
    id: 67,
    question: "Which is the process of creating a design for the database that will support enterprise's operations?",
    options: [
      "Identifying relationships between objects",
      "Database planning",
      "Database design",
      "Application design"
    ],
    correctAnswer: 2,
    explanation: "Database design is the process of creating a database structure to support operations.",
    category: "Database Design"
  },
  {
    id: 68,
    question: "You need to ensure system and MySQL time zones are based on the same information. Which statement?",
    options: [
      "shell> /usr/share/zoneinfo mysql_tzinfo_to_sql | mysql -u root mysql",
      "shell> mysql_tzinfo_to_sql /usr/share/zoneinfo | mysql -u root mysql",
      "shell> mysql_tz_to_sql /usr/share/zoneinfo | mysql -u root mysql",
      "shell> /usr/share/zoneinfo mysql_tz_to_sql | mysql -u root mysql"
    ],
    correctAnswer: 1,
    explanation: "mysql_tzinfo_to_sql converts zone files and pipes them to mysql.",
    category: "Configuration"
  },
  {
    id: 69,
    question: "What is the ideal time to back up dynamic log files?",
    options: [
      "When the server is running",
      "When the server is shut down",
      "You can back up dynamic log files any time",
      "When the server is stopped"
    ],
    correctAnswer: 1,
    explanation: "Dynamic log files should be backed up when the server is shut down to ensure consistency.",
    category: "Backup"
  },
  {
    id: 70,
    question: "CREATE DATABASE '24342' - What will be the output?",
    options: [
      "A database will be created",
      "An error will be generated stating that a database name must begin with an alphabet and all alphabets should be in uppercase",
      "An error will be generated stating that a database name should be a combination of numerals and alphabets",
      "An error will be generated stating that a database name must begin with an alphabet"
    ],
    correctAnswer: 3,
    explanation: "Database names must begin with a letter, not a number.",
    category: "DDL"
  },
  {
    id: 71,
    question: "Which commands cannot be rolled back? (Choose two)",
    options: ["UPDATE", "TRUNCATE", "COMMIT", "DELETE"],
    correctAnswer: 1,
    explanation: "TRUNCATE and COMMIT cannot be rolled back. TRUNCATE is DDL, COMMIT ends the transaction.",
    category: "Transactions"
  },
  {
    id: 72,
    question: "Which are types of prototyping strategies? (Choose two)",
    options: ["Physical prototyping", "Evolutionary prototyping", "Requirements prototyping", "Revolutionary prototyping"],
    correctAnswer: 1,
    explanation: "Evolutionary and Requirements prototyping are valid strategies.",
    category: "Database Design"
  },
  {
    id: 73,
    question: "Which DML SQL statements support usage of correlated sub-queries? (Choose all that apply)",
    options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
    correctAnswer: 0,
    explanation: "SELECT, UPDATE, and DELETE can use correlated subqueries.",
    category: "SQL"
  },
  {
    id: 74,
    question: "What is the relationship between foreign key and primary key? (Choose all that apply)",
    options: [
      "A foreign key and a primary key create a link between two entities",
      "There is no relationship between a primary key and a foreign key",
      "A foreign key ties attribute(s) of an entity to the primary key of another entity",
      "A foreign key constraint works with a primary key constraint to enforce referential integrity"
    ],
    correctAnswer: 0,
    explanation: "Foreign keys create links between tables and work with primary keys to enforce referential integrity.",
    category: "Keys"
  },
  {
    id: 75,
    question: "What are the errors in: CREATE Product (ProductID Char(10) NOT NULL, OrderID Char(10) NULL, ProductName Varchar NOT NULL, Primary key (OrderID, ProductID))?",
    options: [
      "An attribute declared as a primary key cannot contain NULL values",
      "Each attribute should be defined as a primary key separately",
      "A table cannot have two primary keys",
      "ProductName is declared as Varchar without specifying the width"
    ],
    correctAnswer: 0,
    explanation: "OrderID is part of the primary key but allows NULL - primary key columns cannot be NULL. Also Varchar needs a width.",
    category: "DDL"
  },
  {
    id: 76,
    question: "Which step in database planning records an object so it is represented visually?",
    options: [
      "Identifying relationships between objects",
      "Gathering information",
      "Object identification",
      "Object modeling"
    ],
    correctAnswer: 3,
    explanation: "Object modeling creates visual representations of database objects.",
    category: "Database Design"
  },
  {
    id: 77,
    question: "ERROR 1251: Client does not support authentication protocol. What should you do without upgrading?",
    options: [
      "Run the server with the --secure-auth option",
      "Run the server with the --old-password option",
      "Run the server with the --allow-old option",
      "Run the server with the --enable-old option"
    ],
    correctAnswer: 1,
    explanation: "--old-password option enables backward compatibility with older clients.",
    category: "Configuration"
  },
  {
    id: 78,
    question: "Which files store updates made after the backup?",
    options: ["Binary log files", "My.cnf", "My.ini", "Master.info"],
    correctAnswer: 0,
    explanation: "Binary log files record all changes made to the database after a backup.",
    category: "Backup"
  },
  {
    id: 79,
    question: "Which is a building working model of a database system?",
    options: ["Prototyping", "Bottom-up approach", "Conceptual database design", "Top-down approach"],
    correctAnswer: 0,
    explanation: "Prototyping creates a working model of the database system.",
    category: "Database Design"
  },
  {
    id: 80,
    question: "Which script converts Unix-type zone files into SQL statements and loads time zone tables?",
    options: [
      "mysql_time_to_sql",
      "mysql_tzinfo_to_sql",
      "mysql_tz_to_sql",
      "mysql_timezone_to_sql"
    ],
    correctAnswer: 1,
    explanation: "mysql_tzinfo_to_sql converts zone files to SQL statements.",
    category: "Configuration"
  },
  {
    id: 81,
    question: "Which factors lead to defining an artificial key as primary key? (Choose all that apply)",
    options: [
      "The value of the primary key must be unique",
      "The value of the primary key must be persistent",
      "The value of the primary key cannot be NULL",
      "The natural key contains highly sensitive data"
    ],
    correctAnswer: 3,
    explanation: "Artificial keys are used when natural keys contain sensitive data like login/password.",
    category: "Keys"
  },
  {
    id: 82,
    question: "Which statement removes an object from the RDBMS?",
    options: ["CREATE", "SELECT", "ALTER", "DROP"],
    correctAnswer: 3,
    explanation: "DROP removes database objects.",
    category: "DDL"
  },
  {
    id: 83,
    question: "Which will you use to create a database design that supports enterprise operations?",
    options: [
      "Requirements collection and analysis",
      "Database planning",
      "Database design",
      "Application design"
    ],
    correctAnswer: 2,
    explanation: "Database design creates the structure to support enterprise operations.",
    category: "Database Design"
  },
  {
    id: 84,
    question: "You discover unauthorized changes through stored procedures. What should you do with least effort?",
    options: [
      "Parse input parameters to block single quotes",
      "Customize stored procedures to use type-specific and length-restricted parameters",
      "Replace stored procedures with ad hoc queries",
      "Audit all data handling activity"
    ],
    correctAnswer: 1,
    explanation: "Using type-specific and length-restricted parameters prevents SQL injection with minimal changes.",
    category: "Security"
  },
  {
    id: 85,
    question: "Which enables users to use generic methods to access a database and focus on coding rather than syntax?",
    options: ["Abstraction", "Database security", "Authentication", "Native auditing"],
    correctAnswer: 0,
    explanation: "Abstraction provides generic methods that hide database-specific syntax.",
    category: "Database Theory"
  },
  {
    id: 86,
    question: "A regional center has many study centers. What is the relationship?",
    options: ["Many-to-many", "One-to-one", "There is no relationship", "One-to-many"],
    correctAnswer: 3,
    explanation: "One regional center has many study centers = One-to-many relationship.",
    category: "Relationships"
  },
  {
    id: 87,
    question: "Suzanne needs to decompose components but only to some extent. Which approach?",
    options: ["Inside-out approach", "Mixed approach", "Top-down approach", "Bottom-up approach"],
    correctAnswer: 1,
    explanation: "Mixed approach combines top-down and bottom-up for partial decomposition.",
    category: "Database Design"
  },
  {
    id: 88,
    question: "Which is used to give a default value to a column if the value is unknown?",
    options: ["DEFAULT constraint", "Transaction", "Concurrency", "Nested transaction"],
    correctAnswer: 0,
    explanation: "DEFAULT constraint specifies a default value for a column.",
    category: "Constraints"
  },
  {
    id: 89,
    question: "Which is a design of the user interface and application programs that use the database?",
    options: ["Object Modeling", "Database Design", "Application Design", "Database Planning"],
    correctAnswer: 2,
    explanation: "Application Design covers UI and application programs that use the database.",
    category: "Database Design"
  },
  {
    id: 90,
    question: "Management wants to prevent unauthorized data viewing using a cipher algorithm. Which will help?",
    options: ["Authentication", "Encryption", "Native auditing", "Abstraction"],
    correctAnswer: 1,
    explanation: "Encryption uses cipher algorithms to protect data from unauthorized viewing.",
    category: "Security"
  },
  {
    id: 91,
    question: "Which value cannot be stored in a character column defined as primary key?",
    options: ["'0'", "null", "'null'", '""'],
    correctAnswer: 1,
    explanation: "Primary key columns cannot contain NULL values.",
    category: "Keys"
  },
  {
    id: 92,
    question: "Which statement about external tables is true?",
    options: [
      "They can have indexes",
      "They cannot be used in joins, views, and subqueries",
      "They cannot be written to with DML commands",
      "They can have constraints or triggers"
    ],
    correctAnswer: 2,
    explanation: "External tables are read-only and cannot be modified with DML commands.",
    category: "Tables"
  },
  {
    id: 93,
    question: "Which can be used to populate a table? (Choose all that apply)",
    options: ["MERGE statement", "Data Pump", "INSERT statement", "SQL*Loader"],
    correctAnswer: 2,
    explanation: "INSERT, MERGE, Data Pump, and SQL*Loader can all populate tables.",
    category: "SQL"
  },
  {
    id: 94,
    question: "For which tables will CHECK TABLE command work? (Choose two)",
    options: ["FEDERATED", "MyISAM", "InnoDB", "MERGE"],
    correctAnswer: 1,
    explanation: "CHECK TABLE works with MyISAM and InnoDB tables.",
    category: "Maintenance"
  },
  {
    id: 95,
    question: "Which are main approaches in database design? (Choose three)",
    options: ["Inside-out approach", "Middle approach", "Top-down approach", "Bottom-up approach"],
    correctAnswer: 0,
    explanation: "Top-down, Bottom-up, and Inside-out are the main database design approaches.",
    category: "Database Design"
  },
  {
    id: 96,
    question: "For highly sensitive data where security takes priority over speed, which protection technique?",
    options: ["Native auditing", "Authentication", "Encryption", "Integrity controls"],
    correctAnswer: 2,
    explanation: "Encryption protects data even if unauthorized access is obtained.",
    category: "Security"
  },
  {
    id: 97,
    question: "What prevents current operation from reading/writing data while it's being accessed by another operation?",
    options: ["Deadlock", "Encryption", "Lock", "Constraint"],
    correctAnswer: 2,
    explanation: "Locks prevent concurrent access to data being used by another operation.",
    category: "Concurrency"
  },
  {
    id: 98,
    question: "Orders table is queried for orders with sales total > $1000. What index type to use that's smallest?",
    options: ["Filtered", "XML", "Non-clustered", "Clustered"],
    correctAnswer: 0,
    explanation: "Filtered indexes only index rows matching a predicate, making them smaller.",
    category: "Indexes"
  },
  {
    id: 99,
    question: "John wants to insert records in a table with fixed format structure. Which data model?",
    options: [
      "Object relational data model",
      "Network data model",
      "Entity-Relationship Model",
      "Relational model"
    ],
    correctAnswer: 3,
    explanation: "Relational model uses fixed-format tables with rows and columns.",
    category: "Database Theory"
  },
  {
    id: 100,
    question: "Which line has an error in: CREATE Table Production (Fruit_type VarChar, Fruit_name Char(20), Quantity Int(3))?",
    options: ["Line 1", "Line 2", "Line 3", "Line 4"],
    correctAnswer: 1,
    explanation: "Line 2: VarChar needs a length specification like VarChar(50).",
    category: "DDL"
  },
  // Additional questions from Reviewer 3
  {
    id: 101,
    question: "JDBC API 2.0 defines five levels of transaction isolation. Which is the lowest level?",
    options: [
      "TRANSACTION_READ_COMMITTED",
      "TRANSACTION_NONE",
      "TRANSACTION_SERIALIZABLE",
      "TRANSACTION_READ_UNCOMMITTED",
      "TRANSACTION_REPEATABLE_READ"
    ],
    correctAnswer: 1,
    explanation: "TRANSACTION_NONE is the lowest isolation level (no isolation).",
    category: "Transactions"
  },
  {
    id: 102,
    question: "Which statement about rebuilding an index is true?",
    options: [
      "The NOLOGGING and ONLINE keywords can never be used together",
      "The NOLOGGING and ONLINE keywords are always used together",
      "Without the ONLINE keyword the index is locked for any DML operation",
      "Without the ONLINE keyword the index is locked for the SELECT operation"
    ],
    correctAnswer: 2,
    explanation: "Without ONLINE, the index is locked during rebuild, preventing DML operations.",
    category: "Indexes"
  },
  {
    id: 103,
    question: "The UNION keyword combines results and returns only rows that appear in both result sets. Is this correct?",
    options: ["INTERSECT", "JOIN", "No change is needed", "ALL"],
    correctAnswer: 0,
    explanation: "INTERSECT returns rows common to both queries. UNION returns all unique rows.",
    category: "SQL"
  },
  {
    id: 104,
    question: "Which permission does a user need to run a stored procedure?",
    options: ["RUN", "ALLOW", "EXECUTE", "CALL"],
    correctAnswer: 2,
    explanation: "EXECUTE permission is required to run stored procedures.",
    category: "Security"
  },
  {
    id: 105,
    question: "Which keyword must be included in a CREATE VIEW statement?",
    options: ["WHERE", "UPDATE", "ORDER BY", "SELECT"],
    correctAnswer: 3,
    explanation: "SELECT is required in a CREATE VIEW statement.",
    category: "Views"
  },
  {
    id: 106,
    question: "What statement is used to copy records from one table into an existing table?",
    options: ["SELECT", "SELECT WITHIN", "SELECT INTO", "INSERT INTO .. SELECT"],
    correctAnswer: 3,
    explanation: "INSERT INTO ... SELECT copies records into an existing table.",
    category: "SQL"
  },
  {
    id: 107,
    question: "You need to use a transaction to ensure database has data integrity and referential integrity. Which statement?",
    options: [
      "BEGIN TRANSACTION, perform operations, then COMMIT or ROLLBACK",
      "START TRANSACTION, perform operations, then SAVE",
      "BEGIN, perform operations, then END TRANSACTION",
      "OPEN TRANSACTION, perform operations, then CLOSE"
    ],
    correctAnswer: 0,
    explanation: "Use BEGIN TRANSACTION with COMMIT or ROLLBACK for transaction control.",
    category: "Transactions"
  },
  {
    id: 108,
    question: "Which type of index changes the order in which data is stored in a table?",
    options: ["clustered", "non-clustered", "non-sequential", "sequential"],
    correctAnswer: 0,
    explanation: "Clustered indexes determine the physical order of data in a table.",
    category: "Indexes"
  },
  {
    id: 109,
    question: "A key defines the amount of storage space allocated to a value in a column. Is this correct?",
    options: ["validator", "data type", "No change is needed", "format"],
    correctAnswer: 1,
    explanation: "Data type defines the storage space, not the key.",
    category: "Data Types"
  },
  {
    id: 110,
    question: "Which statement is true about referential integrity?",
    options: [
      "It checks that no component of a primary key can have a null value and no duplicate entries can exist",
      "It distinguishes between null values and zero entries",
      "It checks that no record in a child table can exist if its corresponding record is not available in the parent table",
      "It checks that the value of a primary key must be consistent throughout the life of an instance"
    ],
    correctAnswer: 2,
    explanation: "Referential integrity ensures child records have matching parent records.",
    category: "Referential Integrity"
  },
  {
    id: 111,
    question: "First normal form requires that a database excludes:",
    options: ["Duplicate rows", "Repeating groups", "Composite keys", "Foreign keys"],
    correctAnswer: 1,
    explanation: "1NF requires atomic values and no repeating groups.",
    category: "Normalization"
  },
  {
    id: 112,
    question: "A regional center has many study centers. What is the relationship?",
    options: ["There is no relationship", "One-to-one", "One-to-many", "Many-to-many"],
    correctAnswer: 2,
    explanation: "One regional center to many study centers = One-to-many.",
    category: "Relationships"
  },
  {
    id: 113,
    question: "You want to disable connections from remote clients. Which step?",
    options: [
      "Start the server with the --shared-memory option",
      "Start the server with the --secure-auth option",
      "Start the server with the --skip-networking option",
      "Start the server with the --disable-networking option"
    ],
    correctAnswer: 2,
    explanation: "--skip-networking disables TCP/IP connections, allowing only local connections.",
    category: "Configuration"
  },
  {
    id: 114,
    question: "You need to normalize recipe data to third normal form. How many tables?",
    options: ["1", "3", "2", "4"],
    correctAnswer: 1,
    explanation: "Typically 3 tables: one for recipes, one for ingredients, and a junction table.",
    category: "Normalization"
  },
  {
    id: 115,
    question: "Which statement ensures system and MySQL time zones use the same information?",
    options: [
      "shell> mysql_tz_to_sql /usr/share/zoneinfo | mysql -u root mysql",
      "shell> /usr/share/zoneinfo mysql_tzinfo_to_sql | mysql -u root mysql",
      "shell> /usr/share/zoneinfo mysql_tz_to_sql | mysql -u root mysql",
      "shell> mysql_tzinfo_to_sql /usr/share/zoneinfo | mysql -u root mysql"
    ],
    correctAnswer: 3,
    explanation: "mysql_tzinfo_to_sql converts zone files and pipes to mysql.",
    category: "Configuration"
  },
  {
    id: 116,
    question: "What is not allowed in object names in SQL?",
    options: ["special characters", "symbols", "spaces", "numbers"],
    correctAnswer: 2,
    explanation: "Spaces are not allowed in SQL object names without quoting.",
    category: "SQL"
  },
  {
    id: 117,
    question: "You need to create a data model independent of a particular DBMS. Which design?",
    options: ["Application design", "Physical database design", "Logical database design", "Conceptual database design"],
    correctAnswer: 2,
    explanation: "Logical database design is independent of any specific DBMS.",
    category: "Database Design"
  },
  {
    id: 118,
    question: "Which are the main approaches in database design? (Choose three)",
    options: ["Top-down approach", "Bottom-up approach", "Middle approach", "Inside-out approach"],
    correctAnswer: 0,
    explanation: "Top-down, Bottom-up, and Inside-out are the main approaches.",
    category: "Database Design"
  },
  {
    id: 119,
    question: "Data combined from three tables with redundancy to optimize read performance has been:",
    options: ["No change is needed", "Indexed", "Normalized", "Truncated"],
    correctAnswer: 0,
    explanation: "This describes denormalization - intentionally adding redundancy for performance.",
    category: "Normalization"
  },
  {
    id: 120,
    question: "You need to retrieve only song names that sold more than 1000 CDs. Which query?",
    options: [
      "SELECT SongName FROM SongInformation WHERE CDsSold > 1000",
      "SELECT * FROM SongInformation WHERE CDsSold >= 1000",
      "SELECT SongName FROM SongInformation HAVING CDsSold > 1000",
      "SELECT SongName FROM SongInformation WHERE CDsSold > 1000 ORDER BY SongName"
    ],
    correctAnswer: 0,
    explanation: "Use WHERE clause to filter for CDsSold > 1000 and select only SongName.",
    category: "SQL"
  }
];

export const getQuestionsByCategory = () => {
  const categories: Record<string, Question[]> = {};
  questions.forEach(q => {
    if (!categories[q.category]) {
      categories[q.category] = [];
    }
    categories[q.category].push(q);
  });
  return categories;
};

export const getQuestionById = (id: number): Question | undefined => {
  return questions.find(q => q.id === id);
};
