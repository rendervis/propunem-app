CREATE TABLE ourapproach
(
    ourapproach_id integer NOT NULL,
    proposal_id BIGINT NOT NULL,

    text_id INTEGER NOT NULL,
    approach_text TEXT NOT NULL,

    CONSTRAINT fk_ourapproach_proposalid FOREIGN KEY (proposal_id) REFERENCES proposal(proposal_id),
    CONSTRAINT ourapproach_pk PRIMARY KEY (ourapproach_id)

);