CREATE TABLE events (
    event_id INT AUTO_INCREMENT PRIMARY KEY,
    event_name TEXT NOT NULL,
    event_description TEXT NOT NULL,
    event_date TEXT NOT NULL,
    event_venue TEXT NOT NULL,
    event_image TEXT NOT NULL,
    event_category ENUM('Tech', 'LCH', 'IIE'),
    event_registration TEXT NOT NULL,
    event_student_coordinator TEXT NOT NULL,
    event_faculty_coordinator TEXT NOT NULL,
    created_at TEXT NOT NULL
);



CREATE TABLE news (
    news_id INT AUTO_INCREMENT PRIMARY KEY,
    news_title TEXT NOT NULL,
    news_description TEXT NOT NULL,
    news_image TEXT NOT NULL,
    created_at TEXT NOT NULL
);


CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name TEXT NOT NULL,
    user_password TEXT NOT NULL,
    user_role ENUM('admin', 'clublead', 'student', 'staff'),
    created_at TEXT NOT NULL
);
