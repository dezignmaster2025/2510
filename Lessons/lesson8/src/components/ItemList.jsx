import PropTypes from 'prop-types';

export default function ItemList({ items }) {
  if (!items || items.length === 0) {
    return <p className="muted">No items match your search.</p>;
  }

  return (
    <ul className="list">
      {items.map((item) => (
        <li key={item.id} className="list__item">
          {item.name}
        </li>
      ))}
    </ul>
  );
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
