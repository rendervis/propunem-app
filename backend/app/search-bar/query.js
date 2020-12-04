const pool = require("../../databasePool");

class SearchBarQuery {
  static getHomepageAccounts() {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT distinct  useraccount.account_id as "accountId", company_name as "companyName", firstname as "firstName", surname, job_title as "jobTitle", web_address as "webAddress",branding_text as "brandingText" ,  (
          SELECT ARRAY_AGG(proposal_name) from proposal where proposal.account_id=useraccount.account_id ) as "proposalList"
        FROM
        useraccount  
        left outer join branding_declaration  
            on  useraccount.account_id = branding_declaration.account_id
        inner join proposal 
            on useraccount.account_id=proposal.account_id
        
             
        GROUP BY useraccount.account_id, company_name, firstname, surname, job_title,web_address, branding_text,"proposalList"         
        ORDER BY surname;
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
