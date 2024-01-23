import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, selectSearchQuery } from "../api/puppyBowlSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search players..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {/* Add your search button or trigger here */}
    </div>
  );
};

export default SearchBar;
