CREATE TABLE branding_declaration
(
    branding_id SERIAL PRIMARY KEY,
    account_id BIGINT NOT NULL,

    text_id INTEGER NOT NULL,
    branding_text TEXT NOT NULL,

    CONSTRAINT fk_account_accountid FOREIGN KEY (account_id) REFERENCES account(account_id)

);