import React, {useState} from 'react'

function SearchForm(){
    const [formData, setFormData] = useState({operatorName:false, autoclaveNumber:false, loadNumber:false, partNumber:false});

    return (
        <form>
            <div class = 'row'>
                <div class = 'form-group col-md-6'>
                    <label for = 'operatorName'>Operator</label>
                    <input type = 'text' class = 'form-control' id = 'operatorName' placeholder = 'e.g. George'></input>
                </div>
                <div class = 'form-group col-md-6'>
                    <label for = 'acNUM'>Autoclave Number</label>
                    <select id = 'acNum'>
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
                    <input type = 'number' id = 'loadNUM' class = 'form-control' pattern = '\b\d{5}\b' placeholder='e.g. 98543'></input>
                </div>
                <div class = 'form-group col-md-6'>
                    <label for = 'partNUM'>Part Number</label>
                    <input type = 'text' id = 'loadNUM' class = 'form-control' placeholder='e.g. ACME-111'></input>
                </div>
            </div>
            <div class="d-grid gap-2">
                <button type = 'button' class = 'btn btn-primary'>Filter</button>
            </div>
        </form>
    )
}

export default SearchForm