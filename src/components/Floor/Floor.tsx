import { zodResolver } from "@hookform/resolvers/zod";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { forwardRef, MouseEventHandler } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { FloorCard, FloorImage } from "./Floor.styles.tsx";
import { FloorProps, TFloor } from "./Floor.types.ts";

export const MIN_FLOORS = 3;
export const MAX_FLOORS = 100;
export const MIN_ELEVATORS = 1;
export const MAX_ELEVATORS = 10;

const schema = z.object({
  floors: z
    .number()
    .min(MIN_FLOORS, { message: `Can't be smaller than ${MIN_FLOORS}` })
    .max(MAX_FLOORS, { message: `Can't be bigger than ${MAX_FLOORS}` }),
  elevators: z
    .number()
    .min(MIN_ELEVATORS, { message: `Walking is not an option` })
    .max(MAX_ELEVATORS, { message: `Not enough power to sustain that` }),
});

const Floor: React.FC<FloorProps> = forwardRef<HTMLButtonElement, FloorProps>(
  ({ isCalled, floor, totalFloors, elevatorsCount, onCallElevator }, ref) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(schema),
    });

    const activeFloor =
      floor == 1
        ? TFloor.BOTTOM_FLOOR
        : floor == totalFloors
        ? TFloor.TOP_FLOOR
        : TFloor.FLOOR;

    const handleClick: MouseEventHandler<HTMLElement> = (ev) => {
      const targetButton = ev.target as HTMLElement;
      const offsetTop =
        targetButton.offsetTop +
        (
          (targetButton.parentNode?.parentNode as HTMLDivElement)
            .parentNode as HTMLDivElement
        ).offsetTop;
      onCallElevator({ floor, position: offsetTop, isProcessed: false });
    };

    return (
      <FloorCard floor={activeFloor} elevators={elevatorsCount}>
        <FloorImage
          component="div"
          floor={activeFloor}
          elevators={elevatorsCount}
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
        <CardActions
          sx={{
            flexDirection: "column",
            flexGrow: 1,
            alignItems: "flex-start",
          }}
        >
          {floor == totalFloors && (
            <>
              {/*<form onSubmit={handleSubmit((d) => console.log(d))}>*/}
              {/*  <input {...register('name')} />*/}
              {/*  {errors.name?.message && <p>{errors.name?.message}</p>}*/}
              {/*  <input type="number" {...register('age', { valueAsNumber: true })} />*/}
              {/*  {errors.age?.message && <p>{errors.age?.message}</p>}*/}
              {/*  <input type="submit" />*/}
              {/*</form>*/}
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ px: 1, flexGrow: 1 }}
              >
                controls
              </Typography>
            </>
          )}
          <ToggleButtonGroup
            value={isCalled ? floor : null}
            onChange={handleClick}
          >
            <ToggleButton value={floor} size="small" ref={ref}>
              <ArrowCircleRightIcon /> Call elevator
            </ToggleButton>
          </ToggleButtonGroup>
        </CardActions>
      </FloorCard>
    );
  },
);

export default Floor;
