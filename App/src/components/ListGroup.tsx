import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

interface Props {
  items: string[];
}

function ListGroup({ items }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Fragment>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              selectedIndex === index // Condition
                ? "list-group-item active" // IF TRUE
                : "list-group-item" // IF FALSE
            }
            onClick={() => {
              setSelectedIndex(index);
              console.log(`Clicked: ${index}`);
            }}
          >{`${index}, ${item}`}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
