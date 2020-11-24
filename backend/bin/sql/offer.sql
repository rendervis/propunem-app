CREATE TABLE offer
(
    offer_id SERIAL,
    proposal_id BIGINT NOT NULL,
    "textId" VARCHAR(50) NOT NULL,
    idx INTEGER NOT NULL,
    "offerKey" VARCHAR(50) NOT NULL,
    title VARCHAR(50),
    "secondaryTitle" VARCHAR(50) NOT NULL,
    text TEXT NOT NULL,
    "offerPlan" jsonb NOT NULL,

    CONSTRAINT fk_offer_proposalid FOREIGN KEY (proposal_id) REFERENCES proposal(proposal_id) ON DELETE CASCADE,
    CONSTRAINT offer_pk PRIMARY KEY (offer_id)

);