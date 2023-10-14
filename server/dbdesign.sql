CREATE TABLE events (
    event_id INTEGER NOT NULL PRIMARY KEY,
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
