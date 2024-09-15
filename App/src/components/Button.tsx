import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

interface Props {
  startCount: number;
  onButtonClick: (item: number) => void;
}

function Button({ startCount, onButtonClick }: Props) {
  const [buttonCount, setButtonCount] = useState(0);
  const [timesHitButton, setTimesHitButton] = useState(0);

  return (
    <Fragment>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary btn-lg btn-block"
          onClick={() => {
            onButtonClick(timesHitButton + 1);
            setButtonCount(startCount + buttonCount);
            setTimesHitButton(timesHitButton + 1);
          }}
        >
          {buttonCount}
        </button>
      </div>
    </Fragment>
  );
}

export default Button;
