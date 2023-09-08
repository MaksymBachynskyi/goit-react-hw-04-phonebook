export const Filter = ({ onFilter, filter }) => {
  return (
    <div>
      <h4>Find contacts by name</h4>
      <input onChange={e => onFilter(e.target.value)} value={filter}></input>
    </div>
  );
};
