import { Box, Button, CardActions, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { forwardRef, MouseEventHandler } from "react";

import { FloorCard, FloorImage } from "./Floor.styles.tsx";
import { FloorProps, TFloor } from "./Floor.types.ts";

const Floor: React.FC<FloorProps> = forwardRef<HTMLButtonElement, FloorProps>(
  ({ floor, totalFloors, onCallElevator }, ref) => {
    const activeFloor =
      floor == 1
        ? TFloor.BOTTOM_FLOOR
        : floor == totalFloors
        ? TFloor.TOP_FLOOR
        : TFloor.FLOOR;

    const handleClick: MouseEventHandler<HTMLButtonElement> = (ev) => {
      const targetButton = ev.target as HTMLButtonElement;
      const offsetTop =
        targetButton.offsetTop +
        (targetButton.parentNode?.parentNode as HTMLDivElement).offsetTop;
      onCallElevator({ floor, position: offsetTop });
    };

    return (
      <FloorCard floor={activeFloor}>
        <FloorImage
          component="div"
          floor={activeFloor}
          title={`floor ${floor + 1}`}
        />
        <CardContent>
          <Box bgcolor="warning.main">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ px: 1 }}
            >
              floor {floor}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            onClick={handleClick}
            ref={ref}
          >
            Call elevator
          </Button>
        </CardActions>
      </FloorCard>
    );
  },
);

export default Floor;
