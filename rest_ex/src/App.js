import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'

function App() {
  // const [item, setItem] = useState("");
  const [data, setData] = useState({
    id: '',
    name: '',
    age: '',
    email: ''
  });
  const [submit, setSubmit] = useState(false);
  
    const handleChange = e => {
      const { name, value } = e.target;
      setData(prevState => ({ ...prevState, [name]: value }));
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      axios.post('/api/data', data)
        .then(res => {
          console.log(res);
          // insert 성공 후 처리할 코드 작성
          setSubmit(true);
        })
        .catch(err => {
          console.log(err);
          // insert 실패 후 처리할 코드 작성
        });
    };

  return (  
    // <>
    <Card bg='dark' border='light' style={{width: "300px"}}>
      <Card.Body>        
        <form onSubmit={handleSubmit}>
          <div>
            <label style={{color: 'white', marginRight: '39px'}}>Id: </label>
            <input style={{display: 'inline-block'}} type="text" name="id" value={data.id} onChange={handleChange} />
          </div>
          <div>
            <label style={{color: 'white', marginRight: '10px'}}>Name: </label>
            <input style={{display: 'inline-block'}} type="text" name="name" value={data.name} onChange={handleChange} />
          </div>
          <div>
            <label style={{color: 'white', marginRight: '24.5px'}}>Age: </label>
            <input style={{display: 'inline-block'}} type="text" name="age" value={data.age} onChange={handleChange} />
          </div>
          <div>
            <label style={{color: 'white', marginRight: '15px'}}>Email: </label>
            <input style={{display: 'inline-block'}} type="text" name="email" value={data.email} onChange={handleChange} />
          </div>
          <div style={{marginTop: '30px'}}></div>
          <Button variant='primary' type="submit">Insert Data</Button>    
        </form>
      </Card.Body>
    {/* </Card> */}
    {/* {submit ?
    <div style={{color: 'white'}}> Name : {data.name} Age : {data.age} Email : {data.email}</div>  
    : <></>} */}
    {submit ?
    <Card bg='success'> 
      <Card.Body>
        <Card.Title style={{color: 'white'}}>데이터 입력</Card.Title>
          <Card.Text style={{color: 'white'}}>
           Name : {data.name} Age : {data.age} Email : {data.email}
          </Card.Text>
        </Card.Body>
    </Card>  
    : <></>}
    </Card>
    );
    
}

export default App;
