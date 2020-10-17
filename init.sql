
CREATE TABLE account
(
    account_id SERIAL PRIMARY KEY,
    email text UNIQUE NOT NULL,
    "passwordHash" CHARACTER(64),
    "sessionId" CHARACTER(36),
    "googleId" CHARACTER(64),
    authcode CHARACTER(64),
    accesstoken CHARACTER(64),
    refreshtoken CHARACTER(64)

);

CREATE TABLE proposal
(
    proposal_id SERIAL PRIMARY KEY,

    account_id BIGINT REFERENCES account(account_id) NOT NULL,

    proposalname CHARACTER(64) NOT NULL
);