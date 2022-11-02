const sqlite3 = require('sqlite3').verbose();

function addBatch(run_details, parts) {

  // Get load_num
  var load_num = run_details["LoadNumber"].split(" ");
  var load_num = load_num[load_num.length - 1]

  // Load db
  let db = new sqlite3.Database('./database/partinfo.db');
 
  // Run query
  db.run('INSERT INTO autoclave VALUES("' + 
    load_num + '","' + 
    run_details["Equipment"] + '","' + 
    run_details["RunRecipe"] + '","' + 
    run_details["RunStart"] + '","' + 
    run_details["RunEnd"] + '","' + 
    run_details["RunDuration"] + '","' + 
    run_details["FileLength"] + '","' + 
    run_details["OperatorName"] + '","' + 
    run_details["ExportControl"] + '")'
  );
  db.close();

  // Reopen db
  db = new sqlite3.Database('./database/partinfo.db');

  for (const part of parts) {
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
        part["OtherSensors"] + '")'
    );
  }
  db.close();
}

export default addBatch