import InputForm from "../inputs/InputForm";
import React, { useState, useEffect } from "react";

function AdventureCards({ CurrentElementalScores, setAdventures, Dwellings , Elements , setElements }) {
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

  const [InputLimit, setInputLimit] = useState({
    Air: "SCORE: 0 / " + "LIMIT: 0",
    Earth: "SCORE: 0 / " + "LIMIT: 0",
    Fire: "SCORE: 0 / " + "LIMIT: 0",
    Water: "SCORE: 0 / " + "LIMIT: 0",
    Light: "SCORE: 0 / " + "LIMIT: 0",
    Darkness: "SCORE: 0 / " + "LIMIT: 0",
    Order: "SCORE: 0 / " + "LIMIT: 0",
    Chaos: "SCORE: 0 / " + "LIMIT: 0",
  });

  const handleInputChange = (element, value) => {
    let computeElement = parseInt(CurrentElementalScores[element]) * value;
    let ExistingDwellings = Math.max(...Object.values(Dwellings));

    let limitCount = parseInt(ExistingDwellings) * parseInt(3);

    if (value > limitCount) {
      alert("Above Limit");
      return false;
    }

    
    setInputLimit((prevLimits) => ({
      ...prevLimits,
      [element]: "SCORE " + computeElement + " / " + "LIMIT " + limitCount,
    }));

    if (Dwellings[element] >= 1) {
      setAdventures((prevAdventures) => ({
        ...prevAdventures,
        [element]: value,
      }));

      setElements((prevElements) => ({
        ...prevElements,
        [element]: {
          ...prevElements[element],
          adventure: value,
        },
      }));




    }
  };

  useEffect(() => {}, [InputLimit]);

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

          {/* <input
        className={`rounded-md border-0 py-1.5 pl-7 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 inputfield`}
        value={InputLimit[element]}
        readOnly
      /> */}
        </div>
      ))}
    </div>
  );
}

export default AdventureCards;
