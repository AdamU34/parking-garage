export const ENTER = "enter";
export const LEAVE = "leave";

export const initialState = {
  garageName: "Oslo Parking",
  levels: [
    {
      levelName: "level0",
      capacity: 16,
      slots: [
        {
          typeName: "compact",
          capacity: 7,
          parkedCars: [],
        },
        {
          typeName: "large",
          capacity: 4,
          parkedCars: [],
        },
        {
          typeName: "handicapped",
          capacity: 3,
          parkedCars: [],
        },
        {
          typeName: "motorcycle",
          capacity: 2,
          parkedCars: [],
        },
      ],
    },
    {
      levelName: "level1",
      capacity: 20,
      slots: [
        {
          typeName: "compact",
          capacity: 8,
          parkedCars: [],
        },
        {
          typeName: "large",
          capacity: 4,
          parkedCars: [],
        },
        {
          typeName: "handicapped",
          capacity: 5,
          parkedCars: [],
        },
        {
          typeName: "motorcycle",
          capacity: 3,
          parkedCars: [],
        },
      ],
    },
    {
      levelName: "level2",
      capacity: 22,
      slots: [
        {
          typeName: "compact",
          capacity: 9,
          parkedCars: [],
        },
        {
          typeName: "large",
          capacity: 5,
          parkedCars: [],
        },
        {
          typeName: "handicapped",
          capacity: 5,
          parkedCars: [],
        },
        {
          typeName: "motorcycle",
          capacity: 3,
          parkedCars: [],
        },
      ],
    },
  ],
};
