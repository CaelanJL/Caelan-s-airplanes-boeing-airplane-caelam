import React, {useState} from 'react'
import Autoclave from './Autoclave';
import Part from './Part';

function SearchForm(){
    const [results, setResults] = useState({})
    const [formData, setFormData] = useState({})
    const onChange = (e) => {
        formData[e.target.id] = e.target.value
        setFormData(formData)
        console.log(formData)
    };

    


    return (
        <div>
            <div>
        <form>
            <div class = 'row'>
                <div class = 'form-group col-md-6'>
                    <label for = 'operatorName'>Operator</label>
                    <input type = 'text' onChange={onChange} class = 'form-control' id = 'operatorName' placeholder = 'e.g. George'></input>
                </div>
                <div class = 'form-group col-md-6'>
                    <label for = 'acNUM'>Autoclave Number</label>
                    <select id = 'acNUM' onChange={onChange}>
                        <option selected>Choose Autoclave</option>
                        <option value = 'Autoclave #2'>2</option>
                        <option value = 'Autoclave #3'>3</option>
                        <option value = 'Autoclave #4'>4</option>
                    </select>
                </div>
            </div>
            <div class = 'row'>
                <div class = 'form-group col-md-6'>
                    <label for = 'loadNUM'>Load Number</label>
                    <input type = 'number' onChange={onChange} id = 'loadNUM' class = 'form-control' pattern = '\b\d{5}\b' placeholder='e.g. 98543'></input>
                </div>
                <div class = 'form-group col-md-6'>
                    <label for = 'partNUM'>Part Number</label>
                    <input type = 'text' onChange={onChange} id = 'partNUM' class = 'form-control' placeholder='e.g. ACME-111'></input>
                </div>
            </div>
        </form>
            </div>



        <div>
            <table class = 'table'>
                <thead>
                    <tr>
                        <th>Part Name</th>
                        <th>Part Number</th>
                        <th>Part Description</th>
                        <th>Autoclave</th>
                        <th>Load Number</th>
                        <th>Run Recipe</th>
                        <th>Operator Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>example</td>
                        <td>example</td>
                        <td>example</td>
                        <td>example</td>
                        <td>example</td>
                        <td>example</td>
                        <td>example</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>

        


    )
}

export default SearchForm