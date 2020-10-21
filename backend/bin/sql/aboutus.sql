CREATE TABLE aboutus
(

    "proposalId" BIGINT REFERENCES proposal(proposal_id),

    text_id INTEGER NOT NULL,
    about_text TEXT NOT NULL


);