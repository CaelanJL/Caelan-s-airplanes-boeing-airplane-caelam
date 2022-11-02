const sqlite3 = require('sqlite3').verbose();
const myJson = require('./jsons/AC2-07337-anon.json');

// Load db
let db = new sqlite3.Database('./database/partinfo.db');

// Load Run details from json
let run_details = myJson["RunDetails"] 
var load_num = run_details["LoadNumber"]

// Insert row
db.run('INSERT INTO autoclave VALUES("' + 
        load_num + '","' + 
        run_details["Equipment"] + '","' + 
        run_details["RunRecipe"] + '","' + 
        run_details["RunStart"] + '","' + 
        run_details["RunEnd"] + '","' + 
        run_details["RunDuration"] + '","' + 
        run_details["FileLength"] + '","' + 
        run_details["OperatorName"] + '","' + 
        run_details["ExportControl"] + '")',
        function(err) {
            if (err) {
              return console.error(err.message);
            }
            console.log(`Rows inserted ${this.changes}`);
        }
);

// Close db
db.close();