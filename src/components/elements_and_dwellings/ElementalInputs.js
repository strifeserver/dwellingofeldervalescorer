import React, { useState, useEffect } from "react";
function ElementalInputs({ ElementName, Elements, setElements }) {
  const [TotalElementalScore, setTotalElementalScore] = useState(0);
  const [ElementalScore, setElementalScore] = useState(0);
  const [DwellingScore, setDwellingScore] = useState(0);

  const elementScoreChange = (event) => {
    const value = event.target.value;
    // Validate if the value is a number and less than or equal to 5
    if (/^\d*$/.test(value) && Number(value) <= 5) {
      setElementalScore(value);

      setElements((prevElements) => ({
        ...prevElements,
        [ElementName]: {
          ...prevElements[ElementName],
          input: value,
        },
      }));
    }
  };

  const elementDwellingChange = (event) => {
    let elementInput = Elements[ElementName]["input"];
    setElements((prevElements) => ({
      ...prevElements,
      [ElementName]: {
        ...prevElements[ElementName],
        dwellings: event.target.value,
        score: event.target.value * elementInput,
      },
    }));
  };

  const handleFocus = (event) => {
    event.target.select();
  };

  useEffect(() => {
    setElements((prevElements) => ({
      ...prevElements,
      [ElementName]: {
        ...prevElements[ElementName],
        score: parseInt(ElementalScore) * parseInt(DwellingScore),
      },
    }));

    setTotalElementalScore(parseInt(ElementalScore) * parseInt(DwellingScore));
  }, [TotalElementalScore, DwellingScore, ElementalScore]);
  return (
    <>
      <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 ">
        <div className="grid grid-cols-12 gap-4 mx-auto text-center">
          <div className="col-span-12 ">
            <p>
              {ElementName} {Elements[ElementName]["score"]}
            </p>
          </div>
          <div className="col-span-6 ">
            <label
              htmlFor="element_name"
              className="block text-sm font-medium leading-6 "
            >
              Element {Elements[ElementName]["input"]}
            </label>

            <input
              type="text"
              name={`${ElementName}_element`}
              id={ElementName}
              className={`rounded-md border-0 py-1.5 pl-7 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 inputfield`}
              placeholder="0"
              maxLength="1" // Ensures maximum input length is 1 digit
              // value={ElementalScore}
              onInput={elementScoreChange}
              onFocus={handleFocus}
            />
          </div>
          <div className="col-span-6 ">
            <label
              htmlFor="element_name"
              className="block text-sm font-medium leading-6 "
            >
              Dwelling {Elements[ElementName]["dwellings"]}
            </label>

            <input
              type="numeric"
              name={`${ElementName}_element`}
              id={ElementName}
              className={`rounded-md border-0 py-1.5 pl-7 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 inputfield`}
              placeholder="0"
              onChange={elementDwellingChange}
              onFocus={handleFocus}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ElementalInputs;
