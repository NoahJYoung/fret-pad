import { useSelector, useDispatch } from "react-redux";
import { setName, updateName } from "../features/appSlice";
import replaceSymbols from "../util/replaceSymbols";

const DiagramName = ({ pageIndex, className }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.value.diagrams);
  let name = "";

  return state[pageIndex].name !== "" ? (
    <div className={className}>
      <h2
        title={"Edit name"}
        className="diagramName"
        onClick={() => dispatch(updateName({ pageIndex: pageIndex }))}
      >
        {state[pageIndex].name}
      </h2>
    </div>
  ) : (
    <div className={className}>
      <input
        autoComplete="off"
        className={"nameInput" + pageIndex}
        type="text"
        placeholder={"Name"}
        title={"Edit name"}
        onChange={(e) => (name = e.target.value)}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            e.target.blur();
          }
        }}
        onBlur={() =>
          dispatch(
            setName({
              pageIndex: pageIndex,
              newName: replaceSymbols(name),
            })
          )
        }
      />
    </div>
  );
};

export default DiagramName;
