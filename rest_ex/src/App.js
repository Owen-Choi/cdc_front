import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
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
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Id: </label>
        <input type="text" name="id" value={data.id} onChange={handleChange} />
      </div>
      <div>
        <label>Name: </label>
        <input type="text" name="name" value={data.name} onChange={handleChange} />
      </div>
      <div>
        <label>Age: </label>
        <input type="text" name="age" value={data.age} onChange={handleChange} />
      </div>
      <div>
        <label>Email: </label>
        <input type="text" name="email" value={data.email} onChange={handleChange} />
      </div>
      <button type="submit">Insert Data</button>
    </form>
    {submit ?
    <div> Name : {data.name} Age : {data.age} Email : {data.email}</div>  
    : <></>}
    </>
    );
    
}

export default App;
