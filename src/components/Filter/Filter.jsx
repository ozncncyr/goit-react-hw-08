import { useSelector, useDispatch } from "react-redux";
import {
  changeFilter,
  selectNameFilter,
} from "../../redux/reducers/filtersSlice";
import css from "./SearchBox.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => dispatch(changeFilter(e.target.value));

  return (
    <div className={css.searchBox}>
      <input
        className={css.input}
        type="text"
        name="filter"
        placeholder="Search by name or number"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
