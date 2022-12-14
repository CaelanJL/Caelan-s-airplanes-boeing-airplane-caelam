import React, {useState} from 'react'
import Autoclave from './Autoclave';
import Part from './Part';

function InputForm(){

  // Keep current data state
  const [data, setData] = useState(false);

  // Update data from given json file
  const uploadFile = (e) => {
    const fileReader = new FileReader()
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      const content = e.target.result;
      setData(JSON.parse(content))
    };
	};

  // Add data to database
  const onSubmit = () => {
    fetch('http://localhost:3000/add_load', {
      method: 'post',
      credentials: 'same-origin',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).then(response=>response.json()).then(data=>{
      console.log(data)
    })
    setData(false)
  }

  // Return html
  return(
    <div className='container'>
      <div className='row justify-content-md-center mt-3'>
        <h2 className='col-md-auto'>Upload a .json file</h2>
      </div>
      <form className='row input-group justify-content-md-center my-2'>  
        <div className='col-lg-4'>    
          <input type='file' className='form-control' accept='.json' onChange={uploadFile}></input>
        </div>
      </form>
      <div className='row justify-content-md-center mt-3' >
        <h3 className='col-md-auto'>{data ? "Auto Clave" : ""}</h3>
      </div>
      <div className='row justify-content-md-center'>
        {data ? <Autoclave data={data["RunDetails"]}/> : <></>}
      </div>
      <div className='row justify-content-md-center mt-3'>
        <h3 className='col-md-auto'>{data ? "Parts" : ""}</h3>
      </div>
      <div className='row justify-content-md-center'>
        {data ? data["PartInformation"].map(part => (
          <Part data={part}/>
        )) : <></>}
      </div>
      <div className='row justify-content-md-center'>
        {data ? <button type="button" onClick={onSubmit} className="btn btn-success btn-lg w-25 my-4">Submit</button> : <></>}
      </div>
    </div>
  )
}

export default InputForm