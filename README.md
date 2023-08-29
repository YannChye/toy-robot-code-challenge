# TOY ROBOT CODE CHALLENGE

This is a **console application** that simulates a toy robot moving on a square table top, of dimensions 5 units x 5 units.

## REQUIREMENTS AND CONSTRAINTS

- There are no other obstructions on the table surface.
- The robot is free to roam around the surface of the table, but must not fall off the table during movement or placement. Any move that would cause the robot to fall must be ignored.
- No graphical output showing the movement of the toy robot is necessary.
- The application should handle error states appropriately and be robust to user input.

## COMMANDS

| Command       | Description                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `PLACE X,Y,F` | will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST. The origin (0,0) is the SOUTH WEST most corner. It is required that the first command to the robot is a `PLACE` command, after that, any sequence of commands may be issued, in any order, including another `PLACE` command. The application will discard all commands in the sequence until a valid `PLACE` command has been executed. |
| `MOVE`        | will move the toy robot one unit forward in the direction it is currently facing.                                                                                                                                                                                                                                                                                                                                                   |
| `LEFT`        | will rotate the robot 90 degrees to the LEFT without changing the position of the robot.                                                                                                                                                                                                                                                                                                                                            |
| `RIGHT`       | will rotate the robot 90 degrees to the RIGHT without changing the position of the robot.                                                                                                                                                                                                                                                                                                                                           |
| `REPORT`      | will announce the X,Y and F of the robot, where X and Y are the position of the robot, and F is the direction the robot is facing.                                                                                                                                                                                                                                                                                                  |

## EXAMPLE INPUT AND OUTPUT

```
> PLACE 0,0,NORTH
> MOVE
> REPORT
Robot location: 0,1,NORTH
```

```
> PLACE 0,0,NORTH
> LEFT
> REPORT
Robot location: 0,0,WEST
```

```
> PLACE 1,2,EAST
> MOVE
> MOVE
> LEFT
> MOVE
> REPORT
Robot location: 3,3,NORTH
```

## HOW TO RUN

### Prerequisite

- Install `Node` by following the instructions [here](https://nodejs.org/en/download).
- If this is your first time running this app, run `npm install`.
- Alternatively you may also run the app within a docker container. See [Docker](#docker).

### Use

- To start the toy robot, run `npm run start`.
- To run the unit tests, run `npm run test`.

### Docker

- To run the toy robot app within docker, run `docker compose run --rm toy-robot`.
  To run the unit tests within docker, run`docker compose run --rm test`.`
