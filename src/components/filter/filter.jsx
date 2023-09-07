export const Filter = ({ onFilter, value }) => {
  return (
    <div>
      <h4>Find contacts by name</h4>
      <input onChange={onFilter} value={value}></input>
    </div>
  );
};
