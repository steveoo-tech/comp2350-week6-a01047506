const database = include('/databaseConnection');


function getAllUsers(callback) {
	let sqlQuery = `
		SELECT 
		web_user_id,
		CONCAT(first_name, " ", last_name) AS 'name',
		email
		FROM web_users;
	
	`;
	database.query(sqlQuery, (err, results, fields) => {
		if (err) {
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}		
	});
}


module.exports = {getAllUsers}
