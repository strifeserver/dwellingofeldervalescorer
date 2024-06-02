import InputForm from "../inputs/InputForm";
import React, { useState, useEffect } from "react";

function EldervaleScoring() {
  const [TotalScore, setTotalScore] = useState(0);
  const [ElementalScore, setElementalScore] = useState(0);
  const [UnspentOrbs, setUnspentOrbs] = useState(0);
  const [StarterElementalScore, setStarterElementalScore] = useState(0);

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

  // Function to handle input value changes
  const handleInputChange = (value) => {
    let compute = parseInt(TotalScore) + parseInt(value);
    setTotalScore(compute);
    console.log(TotalScore);
  };

  const handleSelectChange = (event) => {
    const starterCard = document.getElementById("starter_div");
    let compute = null;

    if (starterCard) {
      starterCard.classList.remove(
        "Air-starter",
        "Earth-starter",
        "Fire-starter",
        "Water-starter",
        "Light-starter",
        "Darkness-starter",
        "Order-starter",
        "Chaos-starter"
      );

      switch (event.target.value) {
        case "Air":
          compute = parseInt(AirElement) * 1;
          // setTotalScore(compute);
          starterCard.classList.add("Air-starter");
          break;
        case "Earth":
          compute = parseInt(EarthElement) * 1;
          // setTotalScore(compute);
          starterCard.classList.add("Earth-starter");
          break;
        case "Fire":
          compute = parseInt(FireElement) * 1;
          // setTotalScore(compute);
          starterCard.classList.add("Fire-starter");
          break;
        case "Water":
          compute = parseInt(WaterElement) * 1;
          // setTotalScore(compute);
          starterCard.classList.add("Water-starter");
          break;
        case "Light":
          compute = parseInt(LightElement) * 1;
          // setTotalScore(compute);
          starterCard.classList.add("Light-starter");
          break;
        case "Darkness":
          compute = parseInt(DarknessElement) * 1;
          // setTotalScore(compute);
          starterCard.classList.add("Darkness-starter");
          break;
        case "Order":
          compute = parseInt(OrderElement) * 1;
          // setTotalScore(compute);
          starterCard.classList.add("Order-starter");
          break;
        case "Chaos":
          compute = parseInt(ChaosElement) * 1;
          // setTotalScore(compute);
          starterCard.classList.add("Chaos-starter");
          break;
      }
      setStarterElementalScore(compute);
      // let computeTheTotal = parseInt(TotalScore) + parseInt(ElementalScore);
      console.log(compute);
    } else {
      console.error("Element with ID 'starter_card' not found.");
    }
  };

  const handleDwellingChange = (mode) => (value) => {
    let compute = null;
    mode = mode + "_dwellings";
    switch (mode) {
      case "air_dwellings":
        compute = parseInt(AirElement) * parseInt(value);
        compute = parseInt(compute) + parseInt(AirElement);
        setAirElementalScore(compute);
        break;
      case "earth_dwellings":
        setEarthElementalScore(0);
        compute = parseInt(EarthElement) * parseInt(value);
        compute = parseInt(compute) + parseInt(EarthElement);
        setEarthElementalScore(compute);

        break;
      case "fire_dwellings":
        setFireElementalScore(0);
        compute = parseInt(FireElement) * parseInt(value);
        compute = parseInt(compute) + parseInt(FireElement);
        setFireElementalScore(compute);
        break;
      case "water_dwellings":
        setWaterElementalScore(0);
        compute = parseInt(WaterElement) * parseInt(value);
        compute = parseInt(compute) + parseInt(WaterElement);
        setWaterElementalScore(compute);
        break;
      case "light_dwellings":
        setLightElementalScore(0);
        compute = parseInt(LightElement) * parseInt(value);
        compute = parseInt(compute) + parseInt(LightElement);
        setLightElementalScore(compute);
        break;
      case "darkness_dwellings":
        setDarknessElementalScore(0);
        compute = parseInt(DarknessElement) * parseInt(value);
        compute = parseInt(compute) + parseInt(DarknessElement);
        setDarknessElementalScore(compute);
        break;
      case "order_dwellings":
        setOrderElementalScore(0);
        compute = parseInt(OrderElement) * parseInt(value);
        compute = parseInt(compute) + parseInt(OrderElement);
        setOrderElementalScore(compute);
        break;
      case "chaos_dwellings":
        setChaosElementalScore(0);
        compute = parseInt(ChaosElement) * parseInt(value);
        compute = parseInt(compute) + parseInt(ChaosElement);
        setChaosElementalScore(compute);
        break;
    }

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
  ]);
  return (
    <>
      <div className="p-4 bg-gray-900 text-white">
        <h1 className="text-2xl font-bold">Eldervale Scoring</h1>
      </div>

      <div className="p-4">
        <p>
          <span className=" text-sm font-medium leading-6">
            Victory Points:
          </span>{" "}
          <span id="">{TotalScore}</span>
        </p>
        <InputForm
          type="text"
          name="unspent_orbs"
          id="unspent_orbs"
          placeholder="0"
          value=""
          label="Unspent Orbs"
          onChange={handleInputChange} // Pass the handler as a prop
        ></InputForm>
      </div>
      <div className=" p-4">
        <div className="grid grid-cols-12 gap-4 mx-auto ">
          <div className="grid grid-cols-subgrid gap-4 col-span-4 "></div>

          <div className="grid grid-cols-subgrid gap-4 col-span-12">
            <div className="col-span-12">
              <label className="block text-sm font-medium leading-6">
                Elemental Score: {ElementalScore}
              </label>
            </div>

            <div className="col-span-3">
              <InputForm
                type="text"
                name="air_element"
                id="air_element"
                placeholder="0"
                // value=
                label="Air Element"
                onChange={setAirElement}
              ></InputForm>
            </div>
            <div className="col-span-3">
              <InputForm
                type="text"
                name="air_dwellings"
                id="air_dwellings"
                placeholder="0"
                // value=
                label="Air Dwellings"
                onChange={handleDwellingChange("air")}
              ></InputForm>
            </div>
            <div className="col-span-3 ">
              <InputForm
                type="text"
                name="earth_element"
                id="earth_element"
                placeholder="0"
                // value=
                label="Earth Element"
                onChange={setEarthElement}
              ></InputForm>
            </div>
            <div className="col-span-3">
              <InputForm
                type="text"
                name="earth_dwellings"
                id="earth_dwellings"
                placeholder="0"
                // value=
                label="Earth Dwellings"
                onChange={handleDwellingChange("earth")}
              ></InputForm>
            </div>

            <div className="col-span-3 ">
              <InputForm
                type="text"
                name="fire_element"
                id="fire_element"
                placeholder="0"
                // value=
                label="Fire Element"
                onChange={setFireElement}
              ></InputForm>
            </div>
            <div className="col-span-3 ">
              <InputForm
                type="text"
                name="fire_dwellings"
                id="fire_dwellings"
                placeholder="0"
                // value=
                label="Fire Dwellings"
                onChange={handleDwellingChange("fire")}
              ></InputForm>
            </div>

            <div className="col-span-3 ">
              <InputForm
                type="text"
                name="water_element"
                id="water_element"
                placeholder="0"
                // value=
                label="Water Element"
                onChange={setWaterElement}
              ></InputForm>
            </div>
            <div className="col-span-3 ">
              <InputForm
                type="text"
                name="water_dwellings"
                id="water_dwellings"
                placeholder="0"
                // value=
                label="Water Dwellings"
                onChange={handleDwellingChange("water")}
              ></InputForm>
            </div>

            <div className="col-span-3 ">
              <InputForm
                type="text"
                name="light_element"
                id="light_element"
                placeholder="0"
                // value=
                label="Light Element"
                onChange={setLightElement}
              ></InputForm>
            </div>
            <div className="col-span-3 ">
              <InputForm
                type="text"
                name="light_dwellings"
                id="light_dwellings"
                placeholder="0"
                // value=
                label="Light Dwellings"
                onChange={handleDwellingChange("light")}
              ></InputForm>
            </div>

            <div className="col-span-3 ">
              <InputForm
                type="text"
                name="darkness_element"
                id="darkness_element"
                placeholder="0"
                // value=
                label="Darkness Element"
                onChange={setDarknessElement}
              ></InputForm>
            </div>
            <div className="col-span-3 ">
              <InputForm
                type="text"
                name="darkness_dwellings"
                id="darkness_dwellings"
                placeholder="0"
                // value=
                label="Darkness Dwellings"
                onChange={handleDwellingChange("darkness")}
              ></InputForm>
            </div>

            <div className="col-span-3 ">
              <InputForm
                type="text"
                name="order_element"
                id="order_element"
                placeholder="0"
                // value=
                label="Order Element"
                onChange={setOrderElement}
              ></InputForm>
            </div>
            <div className="col-span-3 ">
              <InputForm
                type="text"
                name="order_dwellings"
                id="order_dwellings"
                placeholder="0"
                // value=
                label="Order Dwellings"
                onChange={handleDwellingChange("order")}
              ></InputForm>
            </div>

            <div className="col-span-3 ">
              <InputForm
                type="text"
                name="chaos_element"
                id="chaos_element"
                placeholder="0"
                // value=
                label="Chaos Element"
                onChange={setChaosElement}
              ></InputForm>
            </div>
            <div className="col-span-3 ">
              <InputForm
                type="text"
                name="chaos_dwellings"
                id="chaos_dwellings"
                placeholder="0"
                // value=
                label="Chaos Dwellings"
                onChange={handleDwellingChange("chaos")}
              ></InputForm>
            </div>
          </div>
        </div>
      </div>

      <div className=" p-4">
        <div className="grid grid-cols-12 gap-4 mx-auto ">
          <div className="grid grid-cols-subgrid gap-4 col-span-12 ">
            <div className="col-span-12 ">
              <label className="block text-sm font-medium leading-6">
                Tableau Cards:
              </label>
            </div>
            <div className="col-start-3 col-span-4  ">
              <label className="block text-sm font-medium leading-6 guide">
                Starter Card Score: {StarterElementalScore}
              </label>
            </div>

            <div className="grid grid-cols-12 gap-4 mx-auto col-span-12 ">
              <div
                id="starter_div"
                className="col-span-4  flex justify-center items-center  guide"
              >
                <select
                  id="starter_element"
                  name="starter_element"
                  className="rounded-md border-0 py-1.5 pl-7 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleSelectChange}
                >
                  <option value="">Select</option>
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
              <div className=" col-span-4  flex justify-center items-center  prophecy-div guide">
                <InputForm
                  type="text"
                  name="vault"
                  id="vault"
                  // placeholder="0"
                  label=""
                />
              </div>
              <div className="col-span-4  flex justify-center items-center vault-div guide">
                <InputForm
                  type="text"
                  name="vault"
                  id="vault"
                  // placeholder="0"
                  label=""
                />
              </div>
            </div>

            <div className="col-span-3"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EldervaleScoring;
