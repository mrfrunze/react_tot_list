import { useState, useEffect } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('shoppingList')) || []
  );

  const [searchItem, setSearchItem] = useState('');
  
  const [newItem, setNewItem] = useState('');

  // console.log('Before loading');
  useEffect(() => {
    console.log('Instead loading');
  }, [items]);
  // console.log('After loading');
  
  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(items));
  }, [items]);

  // const saveAndSetItem = (netItems) => {
  //   setItems(netItems);
  //   localStorage.setItem('shoppingList', JSON.stringify(netItems));
  // };

  const handleChecked = (id) => {
    // console.log(`key ${id}`);
    const listItems = items
      .map(item => item.id === id ? {...item, checked: !item.checked} 
        : item);
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter(item => item.id !== id);
    setItems(listItems);
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {
      id, 
      checked: false,
      item
    };
    const listItems = [...items, myNewItem];

    setItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  };

  return (
    <div className='App'>
      <Header title='React TODO List'/>
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <SearchItem 
        searchItem= {searchItem}
        setSearchItem = {setSearchItem}
      />
      <Content 
        items={items.filter(item => (item.item).toLowerCase().includes(searchItem.toLowerCase()))}
        handleChecked = {handleChecked}
        handleDelete = {handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
