CREATE TABLE proposal
(
    id SERIAL PRIMARY KEY,
    "accountId" INTEGER REFERENCES account(id),
    "proposalName" text NOT NULL,
    aboutus text ,
    services text ,
    approach text ,
    offer text

);

id, "accountId", "proposalName",aboutus,services,approach,offer