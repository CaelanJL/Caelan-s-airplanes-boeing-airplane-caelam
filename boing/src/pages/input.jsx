import React from 'react'

function InputForm(){
    return(
        <div>
          <label class="form-label">Input JSON file</label>
          <form class="mb-3 input-group">      
            <input type="file" class="form-control" id="formFile" accept=".json"></input>
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Submit</button>
          </form>
    
          <h3>OR</h3>
    
          
          
    
          <form class="mb-3 container"> 
          <label class="form-label">Input manually</label>
    
            <div className="row">
    
              <div class="input-group col">
                <div class="input-group-prepend">
                  <span class="input-group-text" >nombar</span>
                </div>
                <input class="" type="text" placeholder="AC2-07337-anon"></input>
              </div>
    
              <div class="input-group col">
                <div class="input-group-prepend">
                  <span class="input-group-text" >nombar</span>
                </div>
                <input class="" type="text" placeholder="AC2-07337-anon"></input>
              </div>
    
              <div class="input-group col">
                <div class="input-group-prepend">
                  <span class="input-group-text" >nombar</span>
                </div>
                <input class="" type="text" placeholder="AC2-07337-anon"></input>
              </div>
    
            </div>  
    
            <div className="row">
    
              <div class="input-group col">
                <div class="input-group-prepend">
                  <span class="input-group-text" >nombar</span>
                </div>
                <input class="" type="text" placeholder="AC2-07337-anon"></input>
              </div>
    
              <div class="input-group col">
                <div class="input-group-prepend">
                  <span class="input-group-text" >nombar</span>
                </div>
                <input class="" type="text" placeholder="AC2-07337-anon"></input>
              </div>
    
              <div class="input-group col">
                <div class="input-group-prepend">
                  <span class="input-group-text" >nombar</span>
                </div>
                <input class="" type="text" placeholder="AC2-07337-anon"></input>
              </div>
    
            </div>
    
            <div className="row">
    
              <div class="input-group col">
                <div class="input-group-prepend">
                  <span class="input-group-text" >nombar</span>
                </div>
                <input class="" type="text" placeholder="AC2-07337-anon"></input>
              </div>
    
              <div class="input-group col">
                <div class="input-group-prepend">
                  <span class="input-group-text" >nombar</span>
                </div>
                <input class="" type="text" placeholder="AC2-07337-anon"></input>
              </div>
    
              <div class="input-group col">
                <div class="input-group-prepend">
                  <span class="input-group-text" >nombar</span>
                </div>
                <input class="" type="text" placeholder="AC2-07337-anon"></input>
              </div>
    
            </div> 
    
            {/* <label class="col-lg-2 col-form-label">Autoclave title</label>
            <input class="col-lg" type="text" placeholder="AC2-07337-anon"></input> */}
    
            {/* <label class="col-lg-2 col-form-label">nombar</label> */}
            
    
            {/* <label class="col-lg-2 col-form-label">Autoclave title</label>
            <input class="" type="text" placeholder="AC2-07337-anon"></input>
    
            <label class="col-lg-2 col-form-label">Autoclave title</label>
            <input class="col-lg" type="text" placeholder="AC2-07337-anon"></input>
    
            <label class="col-lg-2 col-form-label">Autoclave title</label>
            <input class="col-lg" type="text" placeholder="AC2-07337-anon"></input> */}
          </form>
    
        </div>
        
        
        )
}

export default InputForm