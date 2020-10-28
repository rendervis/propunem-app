
CREATE TABLE optioncard
(
    optioncard_id SERIAL ,
    proposal_id BIGINT NOT NULL,
    title VARCHAR(25),
    price_tag VARCHAR(25),

    text_id VARCHAR(50) NOT NULL,
    text_key VARCHAR(50) NOT NULL,
    option_text TEXT NOT NULL,

    CONSTRAINT fk_optioncard_proposalid FOREIGN KEY (proposal_id) REFERENCES proposal(proposal_id),
    CONSTRAINT optioncard_pk PRIMARY KEY (optioncard_id)

);