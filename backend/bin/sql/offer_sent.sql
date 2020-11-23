CREATE TABLE offer_sent
(
    offer_sent_id SERIAL,
    proposal_id BIGINT NOT NULL,

    client_name character varying(200) NOT NULL,
    project_title character varying(200) NOT NULL,

    email text NOT NULL,
    downloaded boolean,
    signed boolean,



    CONSTRAINT fk_offer_proposalid FOREIGN KEY (proposal_id) REFERENCES proposal(proposal_id),
    CONSTRAINT offer_sent_pk PRIMARY KEY (offer_sent_id)

);