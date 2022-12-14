const express = require('express');
const sqlite3 = require('sqlite3')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:3001'}));
const port = 3000 
const db = new sqlite3.Database('./database/partinfo.db');

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.post('/add_load', (req, res) => {
  let run_details = req.body["RunDetails"]
  let parts = req.body["PartInformation"]
  
  // Get load_num
  var load_num = run_details["LoadNumber"].split(" ");
  var load_num = load_num[load_num.length - 1]

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
  res.status(200).json('Added load correctly')
});

app.post('/get_parts', (req, res) => {
  let sql = "SELECT * FROM part INNER JOIN autoclave ON part.load_num = autoclave.load_num WHERE"
  sql += " p_num LIKE '%" + req.body["partNUM"] + "%'"
  sql += "AND autoclave.load_num LIKE '%" + req.body["loadNUM"] + "%'"
  sql += "AND autoclave.load_num LIKE '" + req.body["acNUM"] + "%'"
  sql += "AND operator_name LIKE '" + req.body["operatorName"] + "%'"
  console.log(sql)
  
  db.all(sql, [], (err, result) => {
    if (err) {
      return console.error(err.message);
    }
    try {
      return res.status(200).json({result});
    } 
    catch (e) {
      return
    }
  });  
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
