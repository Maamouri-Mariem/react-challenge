import './App.css';
import {FormControl, Nav, Navbar,Button, Form, Image} from "react-bootstrap";



function App() {
  return (
    <div className="App">
      <div>  
      <Navbar fixed="top" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Welcome to my gallery</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  </div>

  <p>""  </p>
  <p>"" </p>

  <div  class = "container">
  <div class="col pt-6">
    <div class = "jumbotron">
      <h1>Welcome To My Gallery</h1>
      <p>Feel<b> free </b>to download from the most comprehensive and easily organized gallery</p>
    </div>
  


<div class = "row">
  <div class = "col-lg-4 col-sm-6">
     <Image width = '500px' src="img11.jpg" thumbnail/>
  </div>

  <div class = "col-lg-4 col-sm-6">
     <Image width = "500px" src = "img22.jpg"thumbnail/>
  </div>

  <div class = "col-lg-4 col-sm-6">
     <Image width = "500px" src = "img33.jpg"thumbnail/>
  </div>
</div>

<br/>

<div class = "row">
  <div class = "col-lg-4 col-sm-6">
     <Image width = '500px' src="img55.jpg" thumbnail/>
  </div>

  <div class = "col-lg-4 col-sm-6">
     <Image width = "500px" src = "img66.jpg"thumbnail/>
  </div>

  <div class = "col-lg-4 col-sm-6">
     <Image width = "500px" src = "img88.jpg"thumbnail/>
  </div>
  </div>


  <br/>

<div class = "row">
  <div class = "col-lg-4 col-sm-6">
     <Image width = '500px' src="img100.jpg" thumbnail/>
  </div>

  <div class = "col-lg-4 col-sm-6">
     <Image width = "500px" src = "img99.jpg"thumbnail/>
  </div>

  <div class = "col-lg-4 col-sm-6">
     <Image width = "500px" src = "img102.jpg"thumbnail/>
  </div>
 </div>



</div>
  <div>
  </div>
  </div>
    </div>
  );
}

export default App;
