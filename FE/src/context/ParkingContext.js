import { createContext, useEffect, useState } from "react";
const INITIAL_STATE = {
  myParkingSlot: undefined,
  myParkingMap: undefined,
  myEntryPoint: undefined
  ,
};

export const ParkingContext = createContext(INITIAL_STATE);



export const ParkingContextProvider = ({ children }) => {


  const [slotData, setSlotsData] = useState([{}])
  const [mapData, setMapData] = useState([{}])
  const [entryPointsData, setEntryPointsData] = useState([{}])


  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let slotData = await (
      await fetch("/api/slots")
    ).json();

    let mapData = await (
      await fetch("/api/maps")
    ).json();


    let entryPointsData = await (
      await fetch("/api/entryPoints")
    ).json();
    setSlotsData(slotData);
    setMapData(mapData);
    setEntryPointsData(entryPointsData);
  };

  return (
    <ParkingContext.Provider
      value={{
        myParkingSlot: slotData,
        myEntryPoint: entryPointsData,
        myParkingMap: mapData,
        setMyParkingMap: setMapData,
        setMySlotData: setSlotsData
      }}
    >
      {children}
    </ParkingContext.Provider>
  )
}