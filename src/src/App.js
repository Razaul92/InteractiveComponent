import { useState } from "react";
import "./App.css";
import Search from "./component/FormData/form";
import ItemList from "./component/AddData/Data";

const App = () => {
  const [addList, setAddList] = useState([]);

  const addListHandler = (firstN) => {
    setAddList((prevAddList) => {
      const updatedList = [...prevAddList];
      updatedList.unshift({ firstName: firstN, id: Math.random().toString() });
      console.log("Raza1", updatedList);
      return updatedList;
    });
  };

  const deleteHandler = (listId) => {
    console.log("deleted");
    console.log("imp", listId);
    setAddList((prevAddList) => {
      const updatedList = [...prevAddList];
      const itemDeletedList = updatedList.filter((list) => list.id !== listId);
      return itemDeletedList;
    });
  };

  return (
    <div>
      <ItemList dataList={addList} onDeleteHandler={deleteHandler} />
      <Search onAddList={addListHandler} />
    </div>
  );
};

export default App;
