import React, {useState} from 'react'

function SearchForm(){
    const [results, setResults] = useState([])
    const [formData, setFormData] = useState({ operatorName: '', loadNUM: '', partNUM: '',  acNUM: '' })
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
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                            </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-md-6'>
                            <label for='loadNUM'>Load Number</label>
                            <input type='number' onChange={onChange} id='loadNUM' className='form-control' pattern='\b\d{5}\b' placeholder='e.g. 98543'></input>
                        </div>
                        <div className='form-group col-md-6'>
                            <label for='partNUM'>Part Number</label>
                            <input type='text' onChange={onChange} id='partNUM' className='form-control' placeholder='e.g. ACME-111'></input>
                        </div>
                    </div>
                </form>
            </div>
            <div className='row justify-content-md-center'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Part Number</th>
                            <th>Part Description</th>
                            <th>Autoclave</th>
                            <th>Load Number</th>
                            <th>Run Recipe</th>
                            <th>Operator Name</th>
                        </tr>
                    </thead>
                    {results.map(result => (
                    <tbody>
                        <tr>
                            <td>{result["p_num"]}</td>
                            <td>{result["p_desc"]}</td>
                            <td>#{result["load_num"].toString()[0]}</td>
                            <td>{result["load_num"].toString().substring(1)}</td>
                            <td>example</td>
                            <td>example</td>
                        </tr>
                    </tbody>
                    ))}
                    
                </table>
            </div>
        </div>
    )
}

export default SearchForm