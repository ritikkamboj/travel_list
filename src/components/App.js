import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackagingList from './PackagingList';
import Stats from './Stats';
// import Item from './';
// import Item from './Item';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: true },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  // function to delete

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleEvent(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    let condition = window.confirm('are you really wants to delete the array ');

    if (condition) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackagingList
        items={items}
        onDeleteItems={handleDeleteItem}
        onToggleItems={handleToggleEvent}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
