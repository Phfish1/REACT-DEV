import Button from "./components/Button";
import DisplayMessages from "./components/DisplayMessages";
import { Form } from "./components/DisplayMessages";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";

const handleSubmit = async (e: React.FormEvent, form: Form) => {
  e.preventDefault();
  try {
    const response = await fetch("api/submitForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `${JSON.stringify(form)}`,
    });

    const responseJson = await response.json();

    if (!responseJson.sucess) {
      throw {
        message: "Failed to fetch from backend",
        responseJson: responseJson,
      };
    }
  } catch (err: any) {
    console.error(err.message);
    try {
      alert(`${err.responseJson.errors[0].msg}`);
      console.error(
        `${err.responseJson.errors[0].msg} | ${err.responseJson.errors[0].code}`
      );
    } catch (err) {
      console.error(`VERY HARDLY Failed to save form`, err);
      alert("Error: form did not submit!");
    }
  }
};

const handleButtonClick = (timesClicked: number) => {
  console.log("Times hit button", timesClicked);
};

function App() {
  return (
    <div>
      <Navbar />
      <Button startCount={10} onButtonClick={handleButtonClick} />
      <ListGroup items={["Test", "Wassyp"]} />
      <DisplayMessages onFormSubmit={handleSubmit} />
    </div>
  );
}

export default App;
