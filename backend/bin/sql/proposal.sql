CREATE TABLE proposal
(
    proposal_id SERIAL PRIMARY KEY ,
    account_id BIGINT NOT NULL,


    proposal_name CHARACTER(64) NOT NULL,
    CONSTRAINT fk_account_id FOREIGN KEY (account_id) REFERENCES account(account_id) ON DELETE CASCADE
);

id, "accountId", "proposalName",aboutus,services,approach,offer