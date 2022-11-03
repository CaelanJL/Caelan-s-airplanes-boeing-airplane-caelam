import React, {useState} from 'react'

function SearchForm(){
    const [results, setResults] = useState([])
    const [formData, setFormData] = useState({ operatorName: '', loadNUM: '', partNUM: '',  acNUM: '' })
    
    // When one of the text inputs is changes
    const onChange = (e) => {
        formData[e.target.id] = e.target.value
        setFormData(formData)
        fetch('http://localhost:3000/get_parts', {
            method: 'post',
            credentials: 'same-origin',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        }).then(response=>response.json()).then(data=>{
            setResults(data.result)
        })
    };

    return (
        <div className='container'>
            <div className='row justify-content-md-center text-center my-3'>
                <div className='col md-auto'>
                    <h1>Part Search</h1>
                </div>
            </div>
            <div className='row justify-content-md-center'>
                <form>
                    <div className='row'>
                        <div className='form-group col-md-6'>
                            <label for='operatorName'>Operator</label>
                            <input type='text' onChange={onChange} className='form-control' id='operatorName' placeholder='e.g. George'></input>
                        </div>
                        <div className='form-group col-md-6'>
                            <label for='acNUM'>Autoclave Number</label>
                            <select className='form-select col-md-6' id='acNUM' defaultValue='Autoclave #2' onChange={onChange}>
                                <option value=''>ALL</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                            </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-md-6'>
                            <label for='loadNUM'>Load Number</label>
                            <input type='number' onChange={onChange} id='loadNUM' className='form-control' placeholder='e.g. 8543'></input>
                        </div>
                        <div className='form-group col-md-6'>
                            <label for='partNUM'>Part Number</label>
                            <input type='text' onChange={onChange} id='partNUM' className='form-control' placeholder='e.g. ACME-111'></input>
                        </div>
                    </div>
                </form>
            </div>
            <div className='row justify-content-md-center text-center my-3' style={{height: '60vh', overflow: 'auto'}}>
                {results.length ? <table className='table'>
                    <thead className='bg-light' style={{position: 'sticky', top: '0'}}>
                        <tr>
                            <th>Part Number</th>
                            <th>Part Description</th>
                            <th>Autoclave</th>
                            <th>Load Number</th>
                            <th>Run Recipe</th>
                            <th>Operator Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map(result => (
                            <tr>
                                <td>{result["p_num"]}</td>
                                <td>{result["p_desc"]}</td>
                                <td>#{result["load_num"].toString()[0]}</td>
                                <td>{result["load_num"].toString().substring(1)}</td>
                                <td>{result["run_recipe"]}</td>
                                <td>{result["operator_name"]}</td>
                            </tr>
                        
                        ))}
                    </tbody>
                </table>
                :
                <h2>No results, please try again</h2>
                }
            </div>
        </div>
    )
}

export default SearchForm