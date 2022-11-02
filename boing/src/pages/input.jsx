import React, {useState} from 'react'

function InputForm(){

  const [data, setData] = useState(false);

  const uploadFile = (e) => {
    const fileReader = new FileReader()
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      const content = e.target.result;
      setData(JSON.parse(content))
    };
	};

  return(
    <div>
      <label className="form-label">Input JSON file</label>
      <form className="mb-3 input-group">      
        <input type="file" className="form-control" id="formFile" accept=".json" onChange={uploadFile}></input>
      </form>

      <h3>OR</h3>

      <form className="mb-3 container"> 
        <label className="form-label">Input manually</label>

        <div className="row">

          <div className="input-group col">
            <div className="input-group-prepend">
              <span className="input-group-text" >nombar</span>
            </div>
            <input className="" type="text" placeholder={data ? data["RunDetails"]["LoadNumber"] : "AC2-07337-anon"}></input>
          </div>

          <div className="input-group col">
            <div className="input-group-prepend">
              <span className="input-group-text" >nombar</span>
            </div>
            <input className="" type="text" placeholder="AC2-07337-anon"></input>
          </div>

          <div className="input-group col">
            <div className="input-group-prepend">
              <span className="input-group-text" >nombar</span>
            </div>
            <input className="" type="text" placeholder="Test"></input>
          </div>

        </div>  

        <div className="row">

          <div className="input-group col">
            <div className="input-group-prepend">
              <span className="input-group-text" >nombar</span>
            </div>
            <input className="" type="text" placeholder="AC2-07337-anon"></input>
          </div>

          <div className="input-group col">
            <div className="input-group-prepend">
              <span className="input-group-text" >nombar</span>
            </div>
            <input className="" type="text" placeholder="AC2-07337-anon"></input>
          </div>

          <div className="input-group col">
            <div className="input-group-prepend">
              <span className="input-group-text" >nombar</span>
            </div>
            <input className="" type="text" placeholder="AC2-07337-anon"></input>
          </div>

        </div>

        <div className="row">

          <div className="input-group col">
            <div className="input-group-prepend">
              <span className="input-group-text" >nombar</span>
            </div>
            <input className="" type="text" placeholder="AC2-07337-anon"></input>
          </div>

          <div className="input-group col">
            <div className="input-group-prepend">
              <span className="input-group-text" >nombar</span>
            </div>
            <input className="" type="text" placeholder="AC2-07337-anon"></input>
          </div>

          <div className="input-group col">
            <div className="input-group-prepend">
              <span className="input-group-text" >nombar</span>
            </div>
            <input className="" type="text" placeholder="AC2-07337-anon"></input>
          </div>

        </div> 

        {/* <label className="col-lg-2 col-form-label">Autoclave title</label>
        <input className="col-lg" type="text" placeholder="AC2-07337-anon"></input> */}

        {/* <label className="col-lg-2 col-form-label">nombar</label> */}
        

        {/* <label className="col-lg-2 col-form-label">Autoclave title</label>
        <input className="" type="text" placeholder="AC2-07337-anon"></input>

        <label className="col-lg-2 col-form-label">Autoclave title</label>
        <input className="col-lg" type="text" placeholder="AC2-07337-anon"></input>

        <label className="col-lg-2 col-form-label">Autoclave title</label>
        <input className="col-lg" type="text" placeholder="AC2-07337-anon"></input> */}
      </form>

    </div>
    
    
    )
}//

export default InputForm