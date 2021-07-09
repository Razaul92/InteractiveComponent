import classes from "../FormData/form.module.css";
import CloseIcon from "@material-ui/icons/Close";

const ItemList = (props) => {
  return (
    <div className={classes.listItems}>
      {props.dataList.map((list) => {
        return (
          <p className={classes.listItem} key={list.id}>
            {list.firstName}
            <CloseIcon
              className={classes.closeI}
              onClick={() => {
                props.onDeleteHandler(list.id);
              }}
            />
          </p>
        );
      })}
    </div>
  );
};
export default ItemList;
