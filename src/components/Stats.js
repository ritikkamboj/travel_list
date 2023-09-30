export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <p className="stats">
        <em>Try to add some items in your list.</em>
      </p>
    );
  }
  const numItems = items.length;
  const itemPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((itemPacked / numItems) * 100);
  // console.log(itemPacked);
  // console.log(items);
  return (
    <footer className="stats">
      {percentage === 100
        ? `You have done the paacking.Ready to go to Sri Lanka`
        : `You have ${numItems} items to take away.You already have ${itemPacked} items
      in your bag .Your packed percentage is ${percentage}%.`}
    </footer>
  );
}
