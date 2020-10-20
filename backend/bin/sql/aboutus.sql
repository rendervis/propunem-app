CREATE TABLE aboutus
(

    "proposalId" BIGINT REFERENCES proposal(proposal_id),
    PRIMARY KEY ("proposalId"),
    text_id INTEGER NOT NULL,
    about_text TEXT NOT NULL


);