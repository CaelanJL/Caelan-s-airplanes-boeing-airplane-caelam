import React, {useState} from 'react'

function SearchForm(){
    const [formData, setFormData] = useState({})
    const onChange = (e) => {
        formData[e.target.id] = e.target.value
        setFormData(formData)
        fetch('http://localhost:3000/get_parts', {
            method: 'post',
            credentials: 'same-origin',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        }).then(response=>response.json()).then(data=>{
            console.log(data)
        })
    };

    return (
        <form>
            <div class = 'row'>
                <div class = 'form-group col-md-6'>
                    <label for = 'operatorName'>Operator</label>
                    <input type = 'text' onChange={onChange} class = 'form-control' id = 'operatorName' placeholder = 'e.g. George'></input>
                </div>
                <div class = 'form-group col-md-6'>
                    <label for = 'acNUM'>Autoclave Number</label>
                    <select id = 'acNUM' defaultValue='Autoclave #2' onChange={onChange}>
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
    )
}

export default SearchForm