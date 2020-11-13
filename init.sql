--1
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

--2
CREATE TABLE proposal
(
    proposal_id SERIAL PRIMARY KEY ,
    account_id BIGINT REFERENCES account(account_id) NOT NULL,


    proposal_name CHARACTER(64) NOT NULL
);

--3
CREATE TABLE aboutus
(

    proposal_id BIGINT NOT NULL,

    text_id INTEGER NOT NULL,
    about_text TEXT NOT NULL,
    CONSTRAINT fk_aboutus_proposalid FOREIGN KEY (proposal_id) REFERENCES proposal(proposal_id)

);

--4
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

--5
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

--6
CREATE TABLE ourapproach
(
    ourapproach_id SERIAL ,
    proposal_id BIGINT NOT NULL,

    text_id INTEGER NOT NULL,
    approach_text TEXT NOT NULL,

    CONSTRAINT fk_ourapproach_proposalid FOREIGN KEY (proposal_id) REFERENCES proposal(proposal_id),
    CONSTRAINT ourapproach_pk PRIMARY KEY (ourapproach_id)

);

--7
CREATE TABLE useraccount
(
    user_id SERIAL,
    account_id BIGINT NOT NULL,

    firstname character varying(200) NOT NULL,
    surname character varying(200) NOT NULL,
    address character varying(300),
    city character varying(20) ,
    county character varying(20) ,
    telephone character varying(20) ,
    joindate timestamp NOT NULL,
    company_name character varying(20) NOT NULL,
    job_title character varying(20) NOT NULL,

    CONSTRAINT user_id_pk PRIMARY KEY (user_id),

    CONSTRAINT fk_user_account_id FOREIGN KEY (account_id) REFERENCES account(account_id)
);

--8
CREATE TABLE branding_declaration
(
    branding_id SERIAL PRIMARY KEY,
    account_id BIGINT NOT NULL,

    text_id INTEGER NOT NULL,
    branding_text TEXT NOT NULL,

    CONSTRAINT fk_account_accountid FOREIGN KEY (account_id) REFERENCES account(account_id)

);