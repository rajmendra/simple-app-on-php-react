-- Create the labs table
CREATE TABLE labs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    labName VARCHAR(255) NOT NULL,
    providerGroup VARCHAR(255) NOT NULL,
    providerUnit VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    zip VARCHAR(10) NOT NULL,
    officePhone VARCHAR(20) NOT NULL,
    mobile VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    timezone VARCHAR(50) NOT NULL,
    createdTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Insert sample data into labs
INSERT INTO labs (labName, providerGroup, providerUnit, address, city, zip, officePhone, mobile, email, timezone) VALUES
('Lab 1', 'Group A', 'Unit 1', '123 Main St', 'City1', '12345', '123-456-7890', '987-654-3210', 'lab1@example.com', 'UTC'),
('Lab 2', 'Group B', 'Unit 2', '456 Oak St', 'City2', '67890', '111-222-3333', '444-555-6666', 'lab2@example.com', 'UTC');

-- Create the providerGroup table
CREATE TABLE provider_group (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    createdTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data into providerGroup
INSERT INTO provider_group (name) VALUES
('Group A'),
('Group B'),
('Group C');

-- Create the providerUnit table
CREATE TABLE provider_unit (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    createdTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data into providerUnit
INSERT INTO provider_unit (name) VALUES
('Unit 1'),
('Unit 2'),
('Unit 3');

-- Create the timezone table
CREATE TABLE timezone (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    createdTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data into timezone
INSERT INTO timezone (name) VALUES
('UTC'),
('GMT'),
('EST');