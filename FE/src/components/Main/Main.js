import { useEffect, useState } from "react"
import './main.css'
const Main = () => {

    const myParkingMap = [
        {
            id: 1,
            name: 'A1',
            value: (1, 0, 0),
            occupied: false
        },
        {
            id: 2,
            name: 'A2',
            value: (0, 1, 0),
            occupied: false
        },
        {
            id: 3,
            name: 'A1',
            value: (0, 0, 1),
            occupied: false
        },
        {
            id: 4,
            name: 'B1',
            value: (2, 0, 0),
            occupied: false
        },
        {
            id: 5,
            name: 'B2',
            value: (0, 2, 0),
            occupied: false
        },
        {
            id: 6,
            name: 'B3',
            value: (0, 0, 2),
            occupied: false
        },
        {
            id: 7,
            name: 'C1',
            value: (3, 0, 0),
            occupied: false
        },
        {
            id: 8,
            name: 'C2',
            value: (0, 3, 0),
            occupied: false
        },
        {
            id: 9,
            name: 'C3',
            value: (0, 0, 3),
            occupied: false
        }
        
    ]
    const myAvailableSlots = [
        {
            id: 1,
            name: 'SP',
            mapSlot: 1
        },
        {
            id: 2,
            name: 'MP',
            mapSlot: 2
        },
        {
            id: 3,
            name: 'LP',
            mapSlot: 3
        },
        {
            id: 4,
            name: 'SP',
            mapSlot: 4
        },
        {
            id: 5,
            name: 'MP',
            mapSlot: 5
        },
        {
            id: 6,
            name: 'LP',
            mapSlot: 6
        },
        {
            id: 7,
            name: 'SP',
            mapSlot: 7
        },
        {
            id: 8,
            name: 'MP',
            mapSlot: 8
        },
        {
            id: 9,
            name: 'LP',
            mapSlot: 9
        }
    ]

    const [parkingMap, setParkingMap] = useState([])
    const [parkingSlot, setParkingSlot] = useState([])
    const [fee, setFee] = useState(0)
    const [size, setSize] = useState('')
    const [entryPoint, setEntryPoint] = useState('')
    const [parkingSpace, setParkingSpace] = useState('')
    const [hoursExceed, setHoursExceed] = useState(0)
    const [abc, setABC] = useState('')

    const calculateFee = (vehicleSize, parkingSpace, hoursExceed) => {
        switch (true) {
            case (vehicleSize == 'S' && parkingSpace == 'LP'):
                return 40 + 100 * hoursExceed
            case (vehicleSize == 'S' && parkingSpace == 'MP'):
                return 40 + 60 * hoursExceed
            case (vehicleSize == 'S' && parkingSpace == 'SP'):
                return 40 + 20 * hoursExceed
            case (vehicleSize == 'M' && parkingSpace == 'LP'):
                return 40 + 100 * hoursExceed
            case (vehicleSize == 'M' && parkingSpace == 'MP'):
                return 40 + 60 * hoursExceed
            case (vehicleSize == 'M' && parkingSpace == 'SP'):
                return 40 + 20 * hoursExceed
            case (vehicleSize == 'L' && parkingSpace == 'LP'):
                return 40 + 100 * hoursExceed
            case (vehicleSize == 'L' && parkingSpace == 'MP'):
                return 40 + 60 * hoursExceed
            case (vehicleSize == 'L' && parkingSpace == 'SP'):
                return 40 + 20 * hoursExceed

            case (vehicleSize == 'L' && parkingSpace == 'LP' && hoursExceed > 24):
                return 40 + 5000 * hoursExceed / 24
            default:
                return ': PHP'
        }
    }
    const handleSizeChange = (event) => {
        setSize(event.target.value)

    }
    const handleEntryChange = (e) => {
        setEntryPoint(e.target.value)
    }
    const handleParkSpaceChange = (e) => {
        setParkingSpace(e.target.value)
    }

    const handleSubmit = (e) => {
        setParkingSlot([...parkingSlot, size])
        parkTheVehicle(1)
    }


    const parkTheVehicle = (slotNumber, vehicleSize) => {
        //occupy parking - remove slots
        myParkingMap[slotNumber].occupied = true
    }

    const unParkTheVehicle = (slotNumber, ) => {
        myParkingMap[slotNumber].occupied = false

    }

    return (
        <>
            <div className="main">

                <div className="left">


                    <label>Entry Points</label>
                    <input type="number" value={entryPoint} onChange={e => setEntryPoint(e.target.value)} />
                    <br />
                    <form>
                        <label>vehicleSize</label>
                        <select value={size} onChange={handleSizeChange}>
                            <option value="S" selected>Small</option>
                            <option value="M">Medium</option>
                            <option value="L">Large</option>
                        </select>

                    </form>
                    <br />
                    <label>entrance</label>
                    <select value={entryPoint} onChange={handleEntryChange}>
                        <option value="A" >A</option>
                        <option value="B" selected>B</option>
                        <option value="C">C</option>
                    </select>
                    <br />
                    <label>parkingSpace</label>
                    <select value={parkingSpace} onChange={handleParkSpaceChange}>
                        <option value="LP">Large Parking</option>
                        <option value="MP">Medium Parking</option>
                        <option value="SP">Small Parking</option>
                    </select>
                    <br></br>
                    <label>hoursExceeded</label>
                    <input type="number" value={hoursExceed} onChange={e => setHoursExceed(e.target.value)} />
                    <br />
                    <button onClick={handleSubmit}>Park</button>
                    <br />
                    Size: {size}
                    <br />
                    entrance: {entryPoint}
                    <br />
                    parkingSpace: {parkingSpace}
                    <br />
                </div>


                <div>
                    ParkingSlots


                    <br />
                    {parkingSlot}

                </div>



            </div >
            <div>
                calculateFee {calculateFee(size, entryPoint, parkingSpace, hoursExceed)}
            </div>
        </>

    )
}


export default Main