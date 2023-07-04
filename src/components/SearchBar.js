function SearchBar({ onSubmit }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log("i need to tell the parent about some data");
    onSubmit("cars");
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input />
      </form>
    </div>
  );
}
export default SearchBar;
