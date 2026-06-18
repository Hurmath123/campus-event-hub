CREATE DATABASE campus_event;


\c campus_event;


CREATE TABLE events(

    id SERIAL PRIMARY KEY,

    title VARCHAR(255) NOT NULL,

    description TEXT,

    category VARCHAR(100),

    date DATE,

    venue VARCHAR(255),

    registration_link TEXT,

    poster_url TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);