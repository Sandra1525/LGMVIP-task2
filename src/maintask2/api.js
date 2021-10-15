import './api.css';
import React, { useState } from 'react';
function UserCard() {

  const [detail, setDetail] = useState([]);

  const [isLoading, setLoading] = useState(false);

  const getApi = () => {
    setLoading(true);
    fetch('https://reqres.in/api/users?page=1')
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data);
        setDetail(json.data);
      });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className='UserCard'>
      <header>
        <a href='#' class='logo'>
          BYJU'S
        </a>
        <nav class='navbar'>
          {isLoading ? '' : <button onClick={getApi}>Get Users</button>}
        </nav>
      </header>


      <div className='container'>
        <h1> EDUCATION FOR ALL</h1>
        <h2>Making dreams come true with the power of education </h2>
         
        <div style={{ backgroundImage: "url(/y.jpg)" }}>
        </div>
        <div className='data'>
      {detail.map((item) => {
        return (
        <div className='profile'>
        <div className='image'>
        <img src={item.avatar} alt='User-Image'></img>
        </div>
        <p>First Name: {item.first_name}</p>
        <p>Last Name: {item.last_name} </p>
        <p>Email: {item.email} </p>
        </div>
      );
      })}
        </div>
      </div>
    </div>

  );
}

export default UserCard;