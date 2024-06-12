import React from "react";
import InputForm from "../inputs/InputForm";

function AdventureCards({ CurrentElementalScores, setAdventures, Dwellings }) {
  const elements = [
    "Air",
    "Earth",
    "Fire",
    "Water",
    "Light",
    "Darkness",
    "Order",
    "Chaos",
  ];

  const handleInputChange = (element, value) => {
    let computeElement = parseInt(CurrentElementalScores[element]) * value;

    if (Dwellings[element] >= 1) {
      setAdventures((prevAdventures) => ({
        ...prevAdventures,
        [element]: computeElement,
      }));
    }
    console.log(computeElement)
  };

  return (
    <div className="grid grid-cols-12 gap-4 mx-auto col-span-12">
      <div className="col-span-12 flex justify-center items-center bgTransparent">
        <div className="p-4  text-white">
          <h1 className="text-2xl font-bold">Adventure Cards</h1>
        </div>
      </div>
      {elements.map((element) => (
        <div
          key={element}
          className={`col-span-6 md:col-span-3 flex justify-center items-center magic-div ${element}-Adventure`}
        >
          <InputForm
            type="text"
            name={`${element}_Adventure`}
            id={`${element}_Adventure`}
            classes="inputfield"
            placeholder="0"
            label=""
            onChange={(e) => handleInputChange(element, e)}
            // onChange={handleInputChange}
          />
        </div>
      ))}
    </div>
  );
}

export default AdventureCards;
