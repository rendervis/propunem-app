const pool = require("../../databasePool");

class SearchBarQuery {
  static getHomepageAccounts() {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT useraccount.account_id as "accountId", 
        (
     json_build_object(
       'companyName', company_name,
       'firstName', firstname,
       'surname',surname,
       'address',address,
       'city',city,
       'county',county,
       'telephone', telephone,
       'jobTitle', job_title,
       'webAddress', web_address)  
          
     ) as "userInformation",
     (
       json_build_object(
       'text_id',text_id,
       'text',branding_text) 
     )  as "brandingDeclarationDB" ,
        
       (
         SELECT ARRAY_AGG(json_build_object(
       'proposal_name',proposal_name,
       'proposal_id',proposal_id))            
         ) as "proposalList"
       FROM
       useraccount  
       left outer join branding_declaration  
           on  useraccount.account_id = branding_declaration.account_id
       inner join proposal 
           on useraccount.account_id=proposal.account_id
                    
       GROUP BY useraccount.account_id, branding_text,useraccount.company_name,
        useraccount.firstname,useraccount.surname,useraccount.address,
        useraccount.city,useraccount.county,useraccount.telephone,useraccount.job_title,useraccount.web_address,
        branding_declaration.text_id
       ORDER BY "accountId";   
        `,
        (error, response) => {
          if (error) return reject(error);
          resolve({
            message: "accounts for homepage",
            homepageAccounts: response.rows,
          });
        }
      );
    });
  }

  static searchForAccounts({ query }) {
    return new Promise((resolve, reject) => {
      // console.log("query", typeof query);
      pool.query(
        `SELECT distinct  useraccount.account_id as "accountId", company_name as "companyName", firstname as "firstName", surname, branding_text as "brandingText"
        
        FROM
            useraccount  
            left outer join branding_declaration  
                on  useraccount.account_id = branding_declaration.account_id
            inner join proposal 
                on useraccount.account_id = proposal.account_id

        WHERE  
        to_tsvector('simple', coalesce( useraccount.firstname,'') || coalesce(useraccount.surname, '') || coalesce(useraccount.company_name, '') || coalesce(proposal.proposal_name, '')) @@  plainto_tsquery($1) 
        ORDER BY surname
        `,
        [query],
        (error, response) => {
          if (error) return reject(error);
          resolve({
            message: "query result",
            queryResult: response.rows,
          });
        }
      );
    });
  }
}

///////debug
// SearchBarQuery.getHomepageAccounts()
//   .then(({ homepageAccounts }) =>
//     console.log("homepageAccounts", homepageAccounts)
//   )
//   .catch((error) => console.log("error", error));
// SearchBarQuery.searchForAccounts({ query: "foto produs" })
//   .then(({ queryResult }) => console.log("queryResult", queryResult))
//   .catch((error) => console.log("error", error));

module.exports = SearchBarQuery;
