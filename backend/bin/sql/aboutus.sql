CREATE TABLE aboutus
(

    proposal_id BIGINT NOT NULL,

    text_id INTEGER NOT NULL,
    about_text TEXT NOT NULL,
    CONSTRAINT fk_aboutus_proposalid FOREIGN KEY (proposal_id) REFERENCES proposal(proposal_id)

);