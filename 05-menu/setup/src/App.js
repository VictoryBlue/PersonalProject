import React, { useState } from 'react';
import items from './data';
import Categories from './Categories';
import Menu from './Menu';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => {
      return item.category === category;
    });
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItems} className="menu" />
        </div>
      </section>
    </main>
  );
}

export default App;
