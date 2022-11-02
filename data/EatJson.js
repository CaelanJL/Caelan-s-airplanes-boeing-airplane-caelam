const sqlite3 = require('sqlite3').verbose();
const myJson = require('./jsons/AC2-07356-anon.json');

// Load db
let db = new sqlite3.Database('./database/partinfo.db');

// Load Run details from json
let run_details = myJson["RunDetails"] 
var load_num = "2" + run_details["LoadNumber"].replace(/\D/g,'');

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

// Save db
db.close();

// Reopen db
db = new sqlite3.Database('./database/partinfo.db');

for (const part of myJson["PartInformation"]) {
    db.run('INSERT INTO part VALUES("' + 
        load_num + '","' + 
        part["Index"] + '","' +
        part["WorkOrder"] + '","' + 
        part["PartNumber"] + '","' + 
        part["PartDescription"] + '","' + 
        part["ToolLocation"] + '","' + 
        part["Comment1"] + '","' + 
        part["Comment2"] + '","' + 
        part["Comment3"] + '","' + 
        part["PartTCs"] + '","' + 
        part["PartProbes"] + '","' + 
        part["OtherSensors"] + '")',
        function(err) {
            if (err) {
              return console.error(err.message);
            }
            console.log(`Rows inserted ${this.changes}`);
        }
);
}

// Close db
db.close();