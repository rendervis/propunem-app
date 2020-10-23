
CREATE TABLE useraccount
(
    "accountId" INTEGER REFERENCES account(id),
    PRIMARY KEY ("accountId")


);