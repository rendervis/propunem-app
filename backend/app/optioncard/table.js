const pool = require("../../databasePool");

class OptionCardTable {
  static storeOptionCard({ title, priceTag, text, textId, key, proposalId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT 
        INTO optioncard(title,price_tag, option_text,text_id, text_key,proposal_id)
        VALUES($1, $2, $3, $4, $5,$6)`,
        [title, priceTag, text, textId, key, proposalId],
        (error, response) => {
          if (error) return reject(error);
          resolve({ message: "option card stored." });
        }
      );
    });
  }
  static storeOptionCardText({ title, text, textId, key, proposalId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT 
        INTO optioncard(title, option_text,text_id, text_key,proposal_id)
        VALUES($1, $2, $3, $4, $5)`,
        [title, text, textId, key, proposalId],
        (error, response) => {
          if (error) return reject(error);
          resolve({ message: "option text stored." });
        }
      );
    });
  }

  static updateOptionCard({ title, priceTag, text, textId, proposalId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `
        UPDATE optioncard 
        SET 
        price_tag= CASE WHEN length(price_tag) >= 1 THEN  $2  ELSE price_tag END,         
        option_text = CASE WHEN text_id = $4 THEN $3 ELSE option_text END 
        WHERE 
        title like $1 AND proposal_id = $5
        `,
        [title, priceTag, text, textId, proposalId],
        (error, response) => {
          if (error) return reject(error);
          resolve({ message: "option card updated." });
        }
      );
    });
  }

  static getOptionCard({ title, proposalId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT title,price_tag as "priceTag", option_text as text,text_id as "textId",text_key as key,proposal_id as "proposalId"
        FROM optioncard
        WHERE title=$1 AND proposal_id=$2`,
        [title, proposalId],
        (error, response) => {
          if (error) return reject(error);

          resolve({ optionCard: response.rows });
        }
      );
    });
  }

  static deleteOptionCardText({ title, textId, proposalId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `DELETE from optioncard
              WHERE title=$1 AND text_id=$2 AND proposal_id=$3`,
        [title, textId, proposalId],
        (error, response) => {
          if (error) return reject(error);
          resolve();
        }
      );
    });
  }
}

///////debug
// OptionCardTable.getOptionCard({ title: "standard", proposalId: 158 })
//   .then(({ optionCard }) => console.log("optionCard", optionCard))
//   .catch((error) => console.log("error", error));
// OptionCardTable.updateOptionCard({
//   title: "recomandat",
//   priceTag: "77",
//   text: "bla nu bla nu bla",
//   textId: "1",
//   proposalId: "7",
// })
//   .then(({ message }) => console.log("message", message))
//   .catch((error) => console.log("error", error));

module.exports = OptionCardTable;
