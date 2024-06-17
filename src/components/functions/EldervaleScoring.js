import InputForm from "../inputs/InputForm";
import ElementalInputs from "../elements_and_dwellings/ElementalInputs";
import AdventureCards from "../elements_and_dwellings/AdventureCards";
import React, { useState, useEffect } from "react";

function EldervaleScoring() {
  const [ElementalScore, setElementalScore] = useState(0);
  const [UnspentOrbs, setUnspentOrbs] = useState(0);
  const [TotalScore, setTotalScore] = useState(0);
  const [VictoryPoints, setVictoryPoints] = useState(0);
  const [StarterElementalScore, setStarterElementalScore] = useState(0);
  const [ProphecyScore, setProphecyScore] = useState(0);
  const [VaultScore, setVaultScore] = useState(0);
  const [MagicScore, setMagicScore] = useState(0);

  const [AirElement, setAirElement] = useState(0);
  const [AirElementalScore, setAirElementalScore] = useState(0);
  const [EarthElement, setEarthElement] = useState(0);
  const [EarthElementalScore, setEarthElementalScore] = useState(0);
  const [FireElement, setFireElement] = useState(0);
  const [FireElementalScore, setFireElementalScore] = useState(0);
  const [WaterElement, setWaterElement] = useState(0);
  const [WaterElementalScore, setWaterElementalScore] = useState(0);
  const [LightElement, setLightElement] = useState(0);
  const [LightElementalScore, setLightElementalScore] = useState(0);
  const [DarknessElement, setDarknessElement] = useState(0);
  const [DarknessElementalScore, setDarknessElementalScore] = useState(0);
  const [OrderElement, setOrderElement] = useState(0);
  const [OrderElementalScore, setOrderElementalScore] = useState(0);
  const [ChaosElement, setChaosElement] = useState(0);
  const [ChaosElementalScore, setChaosElementalScore] = useState(0);

  const [Elements, setElements] = useState({
    Air: {
      score: 0,
      input: 0,
      dwellings: 0,
      adventure: 0,
    },
    Earth: {
      score: 0,
      input: 0,
      dwellings: 0,
      adventure: 0,
    },
    Fire: {
      score: 0,
      input: 0,
      dwellings: 0,
      adventure: 0,
    },
    Water: {
      score: 0,
      input: 0,
      dwellings: 0,
      adventure: 0,
    },
    Light: {
      score: 0,
      input: 0,
      dwellings: 0,
      adventure: 0,
    },
    Darkness: {
      score: 0,
      input: 0,
      dwellings: 0,
      adventure: 0,
    },
    Order: {
      score: 0,
      input: 0,
      dwellings: 0,
      adventure: 0,
    },
    Chaos: {
      score: 0,
      input: 0,
      dwellings: 0,
      adventure: 0,
    },
  });

  const [Adventures, setAdventures] = useState({
    Air: 0,
    Earth: 0,
    Fire: 0,
    Water: 0,
    Light: 0,
    Darkness: 0,
    Order: 0,
    Chaos: 0,
  });
  const [Dwellings, setDwellings] = useState({
    Air: 0,
    Earth: 0,
    Fire: 0,
    Water: 0,
    Light: 0,
    Darkness: 0,
    Order: 0,
    Chaos: 0,
  });

  const getScore = () => {
    // Extract ElementalInputs from Elements
    const ElementalInputs = Object.fromEntries(
      Object.keys(Elements).map((key) => [key, Elements[key].input])
    );

    // Find the highest input value
    const highestValue = Math.max(...Object.values(ElementalInputs));

    let TotalAdventureScore = 0;
    Object.keys(Elements).forEach((key) => {
      let adventureInput = parseInt(Elements[key]["adventure"]);
      let computeAdventureScore = adventureInput * highestValue;
      TotalAdventureScore = TotalAdventureScore + computeAdventureScore;
    });
    // Calculate computeScores
    const computeScores = [
      ElementalScore,
      UnspentOrbs,
      StarterElementalScore,
      ProphecyScore,
      VaultScore,
      MagicScore,
      TotalAdventureScore,
      VictoryPoints,
    ].reduce((total, score) => total + parseInt(score || 0, 10), 0);

    setTotalScore(computeScores);
  };

  const resetScore = () => {
    setElementalScore(0);
    setUnspentOrbs(0);
    setStarterElementalScore(0);
    setProphecyScore(0);
    setVaultScore(0);
    setMagicScore(0);
    // setAirElement(0);
    // setAirElementalScore(0);
    // setEarthElement(0);
    // setEarthElementalScore(0);
    // setFireElement(0);
    // setFireElementalScore(0);
    // setWaterElement(0);
    // setWaterElementalScore(0);
    // setLightElement(0);
    // setLightElementalScore(0);
    // setDarknessElement(0);
    // setDarknessElementalScore(0);
    // setOrderElement(0);
    // setOrderElementalScore(0);
    // setChaosElement(0);
    // setChaosElementalScore(0);
  };

  const handleStarterChange = (event) => {
    const starterCard = document.getElementById("starter_div");
    if (!starterCard) {
      console.error("Element with ID 'starter_card' not found.");
      return;
    }

    const elementMap = {
      Air: AirElement,
      Earth: EarthElement,
      Fire: FireElement,
      Water: WaterElement,
      Light: LightElement,
      Darkness: DarknessElement,
      Order: OrderElement,
      Chaos: ChaosElement,
    };

    const starterClasses = [
      "Air-starter",
      "Earth-starter",
      "Fire-starter",
      "Water-starter",
      "Light-starter",
      "Darkness-starter",
      "Order-starter",
      "Chaos-starter",
    ];

    starterCard.classList.remove(...starterClasses);

    const selectedElement = event.target.value;
    const elementValue = elementMap[selectedElement];

    if (elementValue !== undefined) {
      const compute = parseInt(Elements[selectedElement]["input"]) * 1;
      starterCard.classList.add(`${selectedElement}-starter`);

      setStarterElementalScore(compute);

      setElements((prevElements) => ({
        ...prevElements,
        [selectedElement]: {
          ...prevElements[selectedElement],
          starter: compute,
        },
      }));
    }
  };

  useEffect(() => {
    console.log("Air Element");
    console.log(Elements);
    console.log("----");

    let ElementalScore = 0;
    Object.keys(Elements).forEach((key) => {
      ElementalScore = ElementalScore + Elements[key]["score"];
      setElementalScore(ElementalScore);
    });
  }, [
    AirElementalScore,
    EarthElementalScore,
    FireElementalScore,
    WaterElementalScore,
    LightElementalScore,
    DarknessElementalScore,
    OrderElementalScore,
    ChaosElementalScore,
    ElementalScore,
    StarterElementalScore,
    Adventures,
    Dwellings,
    Elements,
  ]);
  return (
    <>
      <div className="p-4 bg-gray-900 text-white">
        <h1 className="text-2xl font-bold">Eldervale Scoring</h1>
      </div>

      <div className="p-4 bgTransparent">
        <p>
          <span className="text-2xl leading-10 ">Victory Points:</span>
          <span className="text-2xl"> {TotalScore}</span>
        </p>
      </div>
      <div className=" p-4">
        <div className="grid grid-cols-12 gap-4 mx-auto ">
          <div className="grid grid-cols-subgrid gap-4 col-span-4 "></div>

          <div className="grid grid-cols-subgrid gap-4 col-span-12">
            <div className="col-span-6 md:col-span-3 ">
              <InputForm
                type="text"
                name="unspent_orbs"
                id="unspent_orbs"
                classes="inputfield"
                placeholder="0"
                value=""
                label="Unspent Orbs"
                onChange={setUnspentOrbs} // Pass the handler as a prop
              ></InputForm>
            </div>
            <div className="col-span-6 md:col-span-3 ">
              <InputForm
                type="text"
                name="victory_points"
                id="victory_points"
                classes="inputfield"
                placeholder="0"
                value=""
                label="Victory Points"
                onChange={setVictoryPoints} // Pass the handler as a prop
              ></InputForm>
            </div>

            <div className="col-span-12">
              <label className="block text-sm font-medium leading-6">
                Elemental Score: {ElementalScore}
              </label>
            </div>

            <ElementalInputs
              ElementName="Air"
              Elements={Elements}
              setElements={setElements}
            ></ElementalInputs>
            <ElementalInputs
              ElementName="Earth"
              Elements={Elements}
              setElements={setElements}
            ></ElementalInputs>
            <ElementalInputs
              ElementName="Fire"
              Elements={Elements}
              setElements={setElements}
            ></ElementalInputs>
            <ElementalInputs
              ElementName="Water"
              Elements={Elements}
              setElements={setElements}
            ></ElementalInputs>
            <ElementalInputs
              ElementName="Light"
              Elements={Elements}
              setElements={setElements}
            ></ElementalInputs>
            <ElementalInputs
              ElementName="Darkness"
              Elements={Elements}
              setElements={setElements}
            ></ElementalInputs>
            <ElementalInputs
              ElementName="Order"
              Elements={Elements}
              setElements={setElements}
            ></ElementalInputs>
            <ElementalInputs
              ElementName="Chaos"
              Elements={Elements}
              setElements={setElements}
            ></ElementalInputs>

          </div>
        </div>
      </div>

      <div className=" p-4">
        <div className="grid grid-cols-12 gap-4 mx-auto ">
          <div className="grid grid-cols-subgrid gap-4 col-span-12 ">
            <div className="col-span-12 flex justify-center items-center bgTransparent">
              <div className="p-4 text-white">
                <h1 className="text-2xl font-bold">Tableau Cards:</h1>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 mx-auto col-span-12 ">
              <div
                id="starter_div"
                className="col-span-12 md:col-span-3 flex justify-center items-center  "
              >
                <select
                  id="starter_element"
                  name="starter_element"
                  className="rounded-md border-0 py-1.5 pl-7 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 inputfield"
                  onChange={handleStarterChange}
                >
                  <option value="">Select Starter Element</option>
                  <option>Air</option>
                  <option>Earth</option>
                  <option>Fire</option>
                  <option>Water</option>
                  <option>Light</option>
                  <option>Darkness</option>
                  <option>Order</option>
                  <option>Chaos</option>
                </select>
              </div>

              <div className=" col-span-12 md:col-span-3 flex justify-center items-center  prophecy-div ">
                <InputForm
                  type="text"
                  name="vault"
                  id="vault"
                  classes="inputfield" //
                  placeholder="0"
                  label=""
                  onChange={setProphecyScore}
                />
              </div>
              <div className="col-span-12 md:col-span-3 flex justify-center items-center vault-div ">
                <InputForm
                  type="text"
                  name="vault"
                  id="vault"
                  classes="inputfield" //
                  placeholder="0"
                  label=""
                  onChange={setVaultScore}
                />
              </div>
              <div className="col-span-12 md:col-span-3  flex justify-center items-center magic-div ">
                <InputForm
                  type="text"
                  name="magic"
                  id="magic"
                  classes="inputfield" //
                  placeholder="0"
                  label=""
                  onChange={setMagicScore}
                />
              </div>
            </div>
          </div>
        </div>

        <AdventureCards
          Elements={Elements}
          setElements={setElements}
        />

        <div className="grid grid-cols-12 gap-4 mx-auto col-span-12 ">
          <div className="grid grid-cols-subgrid gap-4 col-span-12 ">
            <div className="col-span-6 md:col-span-3  " hidden>
              <label className="block text-sm font-medium leading-6 " >
                <p>Prophecy Score: {ProphecyScore}</p>
                <p>Vault Card Score: {VaultScore}</p>
                <p>Magic Card Score: {MagicScore}</p>
                <p>Elemental Score: {ElementalScore}</p>
              </label>
            </div>
            <div className="col-span-6 md:col-span-3  " hidden>
              <label className="block text-sm font-medium leading-6 ">
                <p>Adventure Card Scores</p>

                <p className="ml-3">Air: {Elements["Air"]["adventure"]}</p>
                <p className="ml-3">Earth: {Elements["Earth"]["adventure"]}</p>
                <p className="ml-3">Fire: {Elements["Fire"]["adventure"]}</p>
                <p className="ml-3">Water: {Elements["Water"]["adventure"]}</p>
                <p className="ml-3">Light: {Elements["Light"]["adventure"]}</p>
                <p className="ml-3">
                  Darkness: {Elements["Darkness"]["adventure"]}
                </p>
                <p className="ml-3">Order: {Elements["Order"]["adventure"]}</p>
                <p className="ml-3">Chaos: {Elements["Chaos"]["adventure"]}</p>
              </label>
            </div>
            <div className=" col-span-6 md:col-span-3  " hidden>
              <label className="block text-sm font-medium leading-6 ">
                <p>Dwelling Scores</p>
                <p className="ml-3">
                  Air Dwelling: {Elements["Air"]["dwellings"]}
                </p>
                <p className="ml-3">
                  Earth Dwelling: {Elements["Earth"]["dwellings"]}
                </p>
                <p className="ml-3">
                  Fire Dwelling: {Elements["Fire"]["dwellings"]}
                </p>
                <p className="ml-3">
                  Water Dwelling: {Elements["Water"]["dwellings"]}
                </p>
                <p className="ml-3">
                  Light Dwelling: {Elements["Light"]["dwellings"]}
                </p>
                <p className="ml-3">
                  Darkness Dwelling: {Elements["Darkness"]["dwellings"]}
                </p>
                <p className="ml-3">
                  Order Dwelling: {Elements["Order"]["dwellings"]}
                </p>
                <p className="ml-3">
                  Chaos Dwelling: {Elements["Chaos"]["dwellings"]}
                </p>
              </label>
            </div>

            <div className="col-span-12  "></div>
            <div className="col-span-6 md:col-span-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline inputfield"
                type="button"
                onClick={getScore}
              >
                Get Score
              </button>
            </div>

            <div className="col-span-6 md:col-span-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline inputfield"
                type="button"
                onClick={resetScore}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EldervaleScoring;
