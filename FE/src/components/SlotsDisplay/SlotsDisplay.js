import { Box, Stack, Typography } from "@mui/material"
import { ParkingContext } from "../../context/ParkingContext";
import { useContext } from "react";

const SlotsDisplay = ({ slots , map }) => {

    const  {myParkingSlot} = useContext(ParkingContext);
    return (
       
        <>
        <Stack direction={'column'}>
            <Box>
                <Typography variant="h5">Parking Slots</Typography> 
            </Box>
            <Box>
                {
                    myParkingSlot.map((item) =>
                        <>
                        
                            <Typography key={item.id}>{item.name}</Typography>
                        </>
                    )
                }
            </Box>
            </Stack>
        </>
    )
}

export default SlotsDisplay