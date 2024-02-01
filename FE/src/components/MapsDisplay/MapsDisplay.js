import { Box, Stack, Typography } from "@mui/material"
import { ParkingContext } from "../../context/ParkingContext";
import { useContext } from "react";

const MapsDisplay = ({ parkingMap }) => {

    
    const  {myParkingMap} = useContext(ParkingContext);
    return (

        <>
            <Stack direction={'column'}>
                <Box>
                    <Typography variant="h5">Parking Map</Typography>

                </Box>
                <Box>
                    {
                        myParkingMap.map((item) =>
                            <>
                                {!item.occupied ? <Typography key={item.id}sx={{bgcolor: 'green'}}>{item.name}</Typography> : <Typography key={item.id} sx={{bgcolor: 'red'}}>{item.name}</Typography>}

                            </>
                        )
                    }
                </Box>
            </Stack>
        </>
    )
}

export default MapsDisplay