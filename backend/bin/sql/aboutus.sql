CREATE TABLE aboutus
(
    "proposalId" INTEGER REFERENCES proposal(id),
    PRIMARY KEY ("proposalId"),
    textid INTEGER NOT NULL,
    abouttext TEXT


);