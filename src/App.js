import SearchBar from "./components/SearchBar";
import searchImages from "./api";
function App() {
  const handleSubmit = async (term) => {
    await searchImages(term);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}
export default App;
