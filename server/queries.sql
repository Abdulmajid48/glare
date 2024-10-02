-- Users table --
CREATE TABLE Users(
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) 

INSERT INTO Users(name, username, email)
VALUES ('test', 'testing', 'testingg');


-- Messages table --
CREATE TABLE Messages(
    message_id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    sender_id INTEGER REFERENCES Users(user_id),
    recepient_id INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)


INSERT INTO Messages(content, sender_id, recepient_id)
VALUES ('wertyuioopujlljf;lnhfglhnfgl;n', 1, 2);
VALUES ('gjhkgjglkhhjkykwertyuioopujlljf;lnhfglhnfgl;n', 1, 3);
