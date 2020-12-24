const pool = require("../../databasePool");

class HomePagePdf {
  static getHomePagePdf({ proposalId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT
        ARRAY_AGG( DISTINCT CONCAT(json_build_object('text_id', aboutus.text_id,'about_text',aboutus.about_text) )) as "aboutUsText", 
	
        ARRAY_AGG(DISTINCT CONCAT(json_build_object('text_id',ourapproach.text_id, 'approach_text', ourapproach.approach_text))) as "ourApproachText",

		    ARRAY_AGG(json_build_object(
			    'idx', idx,
			    'key',  "offerKey",
			    'offerPlan', "offerPlan",
			    'textCard', json_build_object(
                                'title',   title ,
                                'secondaryTitle',   "secondaryTitle" ,
	                            'text',   text ,
		                        'textId',   "textId" 
         ))) as "offerCards"
         FROM aboutus
             inner join ourapproach
                on aboutus.proposal_id = ourapproach.proposal_id
			inner join offer
				on ourapproach.proposal_id = offer.proposal_id
        WHERE aboutus.proposal_id=$1
          `,
        [proposalId],
        (error, response) => {
          if (error) return reject(error);

          // console.log("static getOfferCards -->>response.rows", response.rows);

          resolve({ offer: response.rows[0] });
        }
      );
    });
  }
}

///////debug
// HomePagePdf.getHomePagePdf({ proposalId: 11 })
//   .then(({ offer }) => console.log("offer ", offer))
//   .catch((error) => console.log("error", error));

module.exports = HomePagePdf;
