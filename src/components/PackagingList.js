import { useState } from 'react';
import Item from './Item';

export default function PackagingList({
  items,
  onDeleteItems,
  onToggleItems,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if (sortBy === 'input') sortedItems = items;

  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input Order.</option>
          <option value="description">Sort by description.</option>
          <option value="packed">sort by packed status.</option>
          {/* <button>Clear List</button> */}
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
