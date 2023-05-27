import './App.css'; 
import React from 'react'

const myComponent = {
  width: 'auto',
  height: '600px',
  overflowX: 'hidden',
  overflowY: 'scroll'
};
 
function Form ({items, setItems, setShowForm}) {
  const [message, setMessage] = React.useState('');

  const handleChange = event => {
    setMessage(event.target.value);
  };

  function handleClick (e) {
    e.preventDefault();
    var code = Math.floor(100000 + Math.random() * 900000);

    var newList = items.slice();    
    newList.push({code , message});   
    setItems(newList);
    setShowForm(false);
  };

  return (
    <form>
      <input className='input-box' type="text" name="name" placeholder='Name / Email' onChange={handleChange} value={message} />
      <input className='submit-button' type="submit" value="ADD" onClick={handleClick}/> 
    </form>
  )
}

function Item({code, value, items, setItems}) {

  function handleRemove (e) {
    e.preventDefault();

    const newList = items.filter((item) => item.code !== code); 
    setItems(newList);
  };

  return (
    <div className='item'>
      <p className='code'>{code}</p>
      <p className='name'>{value}</p>
      <button className='delete' onClick={handleRemove}>Delete</button>
    </div>
  )
}

function App() {
  const [showForm, setShowForm] = React.useState(false)
  const onClick = () => setShowForm(true)

  const [items, setItems] = React.useState([]);

  return (
    <div className="App">
      <nav className='navbar'> 
        <a className='nav-text'>Authenticator</a>
      </nav>
      <div className='app-body' style={myComponent}>
        {items.map((element, index) => {
          return (
            <Item code={element.code} value={element.message} items={items} setItems={setItems}/>
          );
        })}
        <div>
          <button className='add-button'  onClick={onClick}>+</button>
          { showForm ? <Form items={items} setItems={setItems} setShowForm={setShowForm} /> : null }
        </div>
      </div>
    </div>
  );
}

export default App;
