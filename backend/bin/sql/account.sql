CREATE TABLE account
(
    id SERIAL PRIMARY KEY,
    email text UNIQUE NOT NULL,
    "passwordHash" CHARACTER(64),
    "sessionId" CHARACTER(36),
    authcode CHARACTER(64),
    accesstoken CHARACTER(64),
    refreshtoken CHARACTER(64)
);


ALTER TABLE account
ADD "googleId" CHARACTER(64);

