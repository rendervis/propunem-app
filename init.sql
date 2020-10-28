CREATE TABLE account
(
    account_id SERIAL PRIMARY KEY,
    email text UNIQUE NOT NULL,
    "passwordHash" CHARACTER(64),
    "sessionId" CHARACTER(36),
    "googleId" CHARACTER(64),
    authcode CHARACTER(64),
    accesstoken CHARACTER(64),
    refreshtoken CHARACTER(64)

);

CREATE TABLE proposal
(
    proposal_id SERIAL PRIMARY KEY ,
    account_id BIGINT REFERENCES account(account_id) NOT NULL,


    proposal_name CHARACTER(64) NOT NULL
);

CREATE TABLE aboutus
(

    proposal_id BIGINT NOT NULL,

    text_id INTEGER NOT NULL,
    about_text TEXT NOT NULL,
    CONSTRAINT fk_aboutus_proposalid FOREIGN KEY (proposal_id) REFERENCES proposal(proposal_id)

);

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

    CONSTRAINT fk_offer_proposalid FOREIGN KEY (proposal_id) REFERENCES proposal(proposal_id),
    CONSTRAINT offer_pk PRIMARY KEY (offer_id)

);


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

CREATE TABLE ourapproach
(
    ourapproach_id SERIAL ,
    proposal_id BIGINT NOT NULL,

    text_id INTEGER NOT NULL,
    approach_text TEXT NOT NULL,

    CONSTRAINT fk_ourapproach_proposalid FOREIGN KEY (proposal_id) REFERENCES proposal(proposal_id),
    CONSTRAINT ourapproach_pk PRIMARY KEY (ourapproach_id)

);