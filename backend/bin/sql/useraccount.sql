

CREATE TABLE useraccount
(
    user_id SERIAL,
    account_id BIGINT NOT NULL,

    firstname character varying(200) NOT NULL,
    surname character varying(200) NOT NULL,
    address character varying(300),
    city character varying(20) ,
    county character varying(20) ,
    company_name character varying(20) NOT NULL,
    job_title character varying(20) NOT NULL,
    telephone character varying(20) ,
    web_address character varying(80) ,
    joindate timestamp NOT NULL,

    CONSTRAINT user_id_pk PRIMARY KEY (user_id),

    CONSTRAINT fk_user_account_id FOREIGN KEY (account_id) REFERENCES account(account_id) ON DELETE CASCADE
);

ALTER TABLE useraccount
ADD web_address character varying(80);