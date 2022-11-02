import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  function searchForm() {

  }

  function navBar() {

  }

  function inputForm() {
    return(
    // <Form>
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control type="email" placeholder="Enter email" />
    //     <Form.Text className="text-muted">
    //       We'll never share your email with anyone else.
    //     </Form.Text>
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" placeholder="Password" />
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //     <Form.Check type="checkbox" label="Check me out" />
    //   </Form.Group>
    //   <Button variant="primary" type="submit">
    //     Submit
    //   </Button>
    // </Form>
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


  return (
    <div className="App">
      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-secondary">Secondary</button>
      <button type="button" className="btn btn-success">Success</button>
      <button type="button" className="btn btn-danger position-absolute top-50 start-50 translate-middle">Danger</button>
      <button type="button" className="btn btn-warning">Warning</button>
      <button type="button" className="btn btn-info">Info</button>
      <button type="button" className="btn btn-light">Light</button>
      <button type="button" className="btn btn-dark">Dark</button>

      {inputForm()}
    </div>
  );
}

export default App;
