import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { ParkingContext } from "../../context/ParkingContext"
const MainForm = () => {

    const { myParkingSlot, myEntryPoint, myParkingMap, setMyParkingMap, setMySlotData } = useContext(ParkingContext)
    const [parkingSlots, setParkingSlots] = useState(myParkingSlot)
    const [parkingMap, setParkingMap] = useState(myParkingMap)
    const [size, setSize] = useState('')
    const [entryPoint, setEntryPoint] = useState(myEntryPoint)
    const [parkingSpace, setParkingSpace] = useState('')
    const [hoursExceed, setHoursExceed] = useState(0)
    const [allowedSize, setAllowedSize] = useState([])
    const [calculate, setCalculate] = useState(0)
    const [price, setPrice] = useState(0)

    const calculateFee = (vehicleSize, parkingSpace, hoursExceed) => {
        switch (true) {


            case (vehicleSize == 'S' && parkingSpace == 'SP' && hoursExceed > 24):
                return 40 + 5000 * hoursExceed / 24
                break;
            case (vehicleSize == 'S' && parkingSpace == 'MP' && hoursExceed > 24):
                return 40 + 5000 * hoursExceed / 24
                break;
            case (vehicleSize == 'S' && parkingSpace == 'LP' && hoursExceed > 24):
                return 40 + 5000 * hoursExceed / 24
                break;
            case (vehicleSize == 'M' && parkingSpace == 'SP' && hoursExceed > 24):
                return 40 + 5000 * hoursExceed / 24
                break;
            case (vehicleSize == 'M' && parkingSpace == 'MP' && hoursExceed > 24):
                return 40 + 5000 * hoursExceed / 24
                break;
            case (vehicleSize == 'M' && parkingSpace == 'LP' && hoursExceed > 24):
                return 40 + 5000 * hoursExceed / 24
                break;
            case (vehicleSize == 'L' && parkingSpace == 'SP' && hoursExceed > 24):
                return 40 + 5000 * hoursExceed / 24
                break;
            case (vehicleSize == 'L' && parkingSpace == 'MP' && hoursExceed > 24):
                return 40 + 5000 * hoursExceed / 24
                break;
            case (vehicleSize == 'L' && parkingSpace == 'LP' && hoursExceed > 24):
                return 40 + 5000 * hoursExceed / 24
                break;

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
            default:
                return ''
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
        e.preventDefault()
        parkTheVehicle(entryPoint, parkingSpace)
    }

    const parkTheVehicle = (entryPoint, parkingSpace) => {
        let name;
        switch(parkingSpace) {
            case 'SP':
                name = entryPoint + '1';
                break;
                
            case 'MP':
                name = entryPoint + '2';
                break;
                
            case 'LP':
                name = entryPoint + '3';
                break;
        }
        
      alert ('Parked at: ' + name)
    }

    const unParkTheVehicle = (slotNumber,) => {
        alert("Total is: " + Math.ceil(calculateFee(size, parkingSpace, hoursExceed)))
    }

    useEffect(() => {
        switch (size) {
            case 'L':
                setAllowedSize([])
                setAllowedSize([{
                    value: 'LP',
                    name: 'Large Parking'
                }])
                break;
            case 'M':
                setAllowedSize([])
                setAllowedSize([{
                    value: 'LP',
                    name: 'Large Parking'
                },
                {
                    value: 'MP',
                    name: 'Medium Parking'
                }])
                break;
            case 'S':
                setAllowedSize([])
                setAllowedSize([{
                    value: 'LP',
                    name: 'Large Parking'
                },
                {
                    value: 'MP',
                    name: 'Medium Parking'
                },
                {
                    value: 'SP',
                    name: 'Small Parking'
                }])
                break;
            default:
                break;


        }
    }, [size])

    return (
        <>
            <Stack direction={'row'}>
                <Stack direction={'row'}>
                    <form onSubmit={handleSubmit}>
                        <Box p={2} m={2} gap={2} display={"flex"} flexDirection={"column"} width={250}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label"> Vehicle Size</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={size}
                                    label="VehicleSize"
                                    onChange={handleSizeChange}
                                >
                                    <MenuItem value={'S'}>SMALL</MenuItem>
                                    <MenuItem value={'M'}>MEDIUM</MenuItem>
                                    <MenuItem value={'L'}>LARGE</MenuItem>
                                </Select>

                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label"> Entry Point</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={entryPoint}
                                    label="ENTRY POINT"
                                    onChange={handleEntryChange}
                                >

                                    {myEntryPoint.map((item) =>

                                        <MenuItem key={item.name} value={item.name}>{item.name}</MenuItem>

                                    )}

                                </Select>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label"> Parking Space</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={parkingSpace}
                                    label="parkingSpace"
                                    onChange={handleParkSpaceChange}
                                >

                                    {allowedSize.map((item) =>

                                        <MenuItem key={item.name} value={item.value}>{item.name}</MenuItem>

                                    )}

                                </Select>

                            </FormControl>
                            <TextField id="outlined-basic" label="Hours Exceed" variant="outlined" value={hoursExceed} onChange={(e) => setHoursExceed(e.target.value)} />
                            <Typography>Total: {Math.ceil(calculateFee(size, parkingSpace, hoursExceed))}</Typography>
                            <Button type="submit">PARK</Button>
                            <Button onClick={unParkTheVehicle}>UNPARK</Button>
                        </Box>
                    </form>

                </Stack>
            </Stack>
        </>
    )

}

export default MainForm