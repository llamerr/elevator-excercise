import { Box, Button, CardActions, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

import { FloorCard, FloorImage } from "./Floor.styles.tsx";
import { FloorProps, TFloor } from "./Floor.types.ts";

const Floor: React.FC<FloorProps> = ({ floor, totalFloors }) => {
  const activeFloor =
    floor == 1
      ? TFloor.BOTTOM_FLOOR
      : floor == totalFloors
      ? TFloor.TOP_FLOOR
      : TFloor.FLOOR;
  return (
    <FloorCard floor={activeFloor}>
      <FloorImage
        component="div"
        floor={activeFloor}
        title={`floor ${floor + 1}`}
      />
      <CardContent>
        <Box bgcolor="warning.main">
          <Typography gutterBottom variant="h5" component="div" sx={{ px: 1 }}>
            floor {floor}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">
          Call elevator
        </Button>
      </CardActions>
    </FloorCard>
  );
};

export default Floor;
