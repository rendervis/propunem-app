CREATE TABLE proposal
(
    proposal_id SERIAL PRIMARY KEY ,
    account_id BIGINT REFERENCES account(account_id) NOT NULL,


    proposal_name CHARACTER(64) NOT NULL
);

id, "accountId", "proposalName",aboutus,services,approach,offer