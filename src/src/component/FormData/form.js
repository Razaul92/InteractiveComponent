import { Fragment } from "react";
import { useState } from "react";
import Data from "../../randomData.json";
import classes from "./form.module.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

const Search = (props) => {
  const [enteredWord, setEnteredWord] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const [display, setDisplay] = useState(false);

  const WordchangeHandler = (e) => {
    const searchWord = e.target.value;
    setEnteredWord(searchWord);

    const filteredWord = Data.filter((val) => {
      return (
        val.first_name.toLowerCase().includes(searchWord.toLowerCase()) ||
        val.last_name.toLowerCase().includes(searchWord.toLowerCase())
      );
    });

    if (filteredWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(filteredWord);
    }
  };

  const addHandler = () => {
    props.onAddList(enteredWord);
    clearInput();
  };

  const updateautoDex = (auto) => {
    setEnteredWord(auto);
    setDisplay(false);
  };

  const clearInput = () => {
    setFilteredData([]);
    setEnteredWord("");
  };

  return (
    <Fragment>
      <div className={classes.form}>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          placeholder="Search..."
          value={enteredWord}
          onChange={WordchangeHandler}
          onClick={() => setDisplay(!display)}
        />
        <div className={classes.searchIcon}>
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon onClick={clearInput} />
          )}
        </div>
      </div>
      {display && filteredData !== 0 && (
        <div className={classes.resultData}>
          {filteredData.slice(0, 10).map((item, key) => {
            return (
              <div className={classes.filteredItem} key={key}>
                <div
                  className={classes.btm}
                  key={key}
                  onClick={() => {
                    updateautoDex(`${item.first_name} ${item.last_name}`);
                    props.onAddList(`${item.first_name} ${item.last_name}`);
                  }}
                >
                  {item.first_name} {item.last_name}
                </div>
              </div>
            );
          })}
        </div>
      )}
      {enteredWord && filteredData.length === 0 && (
        <button className={classes.add} onClick={addHandler}>
          Add+
        </button>
      )}
    </Fragment>
  );
};
export default Search;
