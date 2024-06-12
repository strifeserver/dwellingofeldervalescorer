import InputForm from "../inputs/InputForm";
import ElementalInputs from "../elements_and_dwellings/ElementalInputs";
import AdventureCards from "../elements_and_dwellings/AdventureCards";
import React, { useState, useEffect } from "react";

function EldervaleScoring() {
  const [TotalScore, setTotalScore] = useState(0);
  const [ElementalScore, setElementalScore] = useState(0);
  const [UnspentOrbs, setUnspentOrbs] = useState(0);
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
    console.log("ElementalScore", ElementalScore);
    console.log("UnspentOrbs", UnspentOrbs);
    console.log("StarterElementalScore", StarterElementalScore);
    console.log("ProphecyScore", ProphecyScore);
    console.log("VaultScore", VaultScore);
    console.log("MagicScore", MagicScore);
  };
  const resetScore = () => {
    setTotalScore(0);
    setElementalScore(0);
    setUnspentOrbs(0);
    setStarterElementalScore(0);
    setProphecyScore(0);
    setVaultScore(0);
    setMagicScore(0);
    setAirElement(0);
    setAirElementalScore(0);
    setEarthElement(0);
    setEarthElementalScore(0);
    setFireElement(0);
    setFireElementalScore(0);
    setWaterElement(0);
    setWaterElementalScore(0);
    setLightElement(0);
    setLightElementalScore(0);
    setDarknessElement(0);
    setDarknessElementalScore(0);
    setOrderElement(0);
    setOrderElementalScore(0);
    setChaosElement(0);
    setChaosElementalScore(0);
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
      const compute = parseInt(elementValue) * 1;
      starterCard.classList.add(`${selectedElement}-starter`);
      console.log(selectedElement);
      console.log(elementMap[selectedElement]);
      setStarterElementalScore(compute);
    }
  };

  useEffect(() => {
    setElementalScore(
      AirElementalScore +
        EarthElementalScore +
        FireElementalScore +
        WaterElementalScore +
        LightElementalScore +
        DarknessElementalScore +
        OrderElementalScore +
        ChaosElementalScore
    );

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
              CurrentTotalElementScore={ElementalScore}
              CurrentElementScore={AirElementalScore}
              setElementScore={setAirElementalScore}
              setSelectedElementScore={setAirElement}
              setDwellings={setDwellings}
              Dwellings={Dwellings}
            ></ElementalInputs>
            <ElementalInputs
              ElementName="Earth"
              CurrentTotalElementScore={ElementalScore}
              CurrentElementScore={EarthElementalScore}
              setElementScore={setEarthElementalScore}
              setSelectedElementScore={setEarthElement}
              setDwellings={setDwellings}
              Dwellings={Dwellings}
            ></ElementalInputs>
            <ElementalInputs
              ElementName="Fire"
              CurrentTotalElementScore={ElementalScore}
              CurrentElementScore={FireElementalScore}
              setElementScore={setFireElementalScore}
              setSelectedElementScore={setFireElement}
              setDwellings={setDwellings}
              Dwellings={Dwellings}
            ></ElementalInputs>
            <ElementalInputs
              ElementName="Water"
              CurrentTotalElementScore={ElementalScore}
              CurrentElementScore={WaterElementalScore}
              setElementScore={setWaterElementalScore}
              setSelectedElementScore={setWaterElement}
              setDwellings={setDwellings}
              Dwellings={Dwellings}
            ></ElementalInputs>
            <ElementalInputs
              ElementName="Light"
              CurrentTotalElementScore={ElementalScore}
              CurrentElementScore={LightElementalScore}
              setElementScore={setLightElementalScore}
              setSelectedElementScore={setLightElement}
              setDwellings={setDwellings}
              Dwellings={Dwellings}
            ></ElementalInputs>
            <ElementalInputs
              ElementName="Darkness"
              CurrentTotalElementScore={ElementalScore}
              CurrentElementScore={DarknessElementalScore}
              setElementScore={setDarknessElementalScore}
              setSelectedElementScore={setDarknessElement}
              setDwellings={setDwellings}
              Dwellings={Dwellings}
            ></ElementalInputs>
            <ElementalInputs
              ElementName="Order"
              CurrentTotalElementScore={ElementalScore}
              CurrentElementScore={OrderElementalScore}
              setElementScore={setOrderElementalScore}
              setSelectedElementScore={setOrderElement}
              setDwellings={setDwellings}
              Dwellings={Dwellings}
            ></ElementalInputs>
            <ElementalInputs
              ElementName="Chaos"
              CurrentTotalElementScore={ElementalScore}
              CurrentElementScore={ChaosElementalScore}
              setElementScore={setChaosElementalScore}
              setSelectedElementScore={setChaosElement}
              setDwellings={setDwellings}
              Dwellings={Dwellings}
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
          CurrentElementalScores={{
            Air: AirElementalScore,
            Earth: EarthElementalScore,
            Fire: FireElementalScore,
            Water: WaterElementalScore,
            Light: LightElementalScore,
            Darkness: DarknessElementalScore,
            Order: OrderElementalScore,
            Chaos: ChaosElementalScore,
          }}
          setAdventures={setAdventures}
          Dwellings={Dwellings}
        />

        <div className="grid grid-cols-12 gap-4 mx-auto col-span-12 ">
          <div className="grid grid-cols-subgrid gap-4 col-span-12 ">
            <div className="col-span-6 md:col-span-3  ">
              <label className="block text-sm font-medium leading-6 ">
                <p>Starter Card Score: {StarterElementalScore}</p>
                <p>Prophecy Score: {ProphecyScore}</p>
                <p>Vault Card Score: {VaultScore}</p>
                <p>Magic Card Score: {MagicScore}</p>
                <p>Elemental Score: {ElementalScore}</p>
              </label>
            </div>
            <div className="col-span-6 md:col-span-3  ">
              <label className="block text-sm font-medium leading-6 ">
                <p>Adventure Card Scores</p>
                <p className="ml-3">Air: {Adventures.Air}</p>
                <p className="ml-3">Earth: {Adventures.Earth}</p>
                <p className="ml-3">Fire: {Adventures.Fire}</p>
                <p className="ml-3">Water: {Adventures.Water}</p>
                <p className="ml-3">Light: {Adventures.Light}</p>
                <p className="ml-3">Darkness: {Adventures.Darkness}</p>
                <p className="ml-3">Order: {Adventures.Order}</p>
                <p className="ml-3">Chaos:{ Adventures.Chaos}</p>
              </label>
            </div>
            <div className=" col-span-6 md:col-span-3  ">
              <label className="block text-sm font-medium leading-6 ">
                <p>Dwelling Scores</p>
                <p className="ml-3">Air Dwelling: {Dwellings.Air}</p>
                <p className="ml-3">Earth Dwelling: {Dwellings.Earth}</p>
                <p className="ml-3">Fire Dwelling: {Dwellings.Fire}</p>
                <p className="ml-3">Water Dwelling: {Dwellings.Water}</p>
                <p className="ml-3">Light Dwelling: {Dwellings.Light}</p>
                <p className="ml-3">Darkness Dwelling: {Dwellings.Darkness}</p>
                <p className="ml-3">Order Dwelling: {Dwellings.Order}</p>
                <p className="ml-3">Chaos Dwelling: {Dwellings.Chaos}</p>
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
