import { ENTER, LEAVE } from "./constants";

export const reducer = (state, action) => {
  switch (action.type) {
    case ENTER: {
      const { car = {} } = action;
      const { level, type } = car;
      // Find the level
      const targetLevel = state?.levels?.find((el) => el?.levelName === level);

      // Find the type
      const targetType = targetLevel?.slots?.find(
        (el) => el?.typeName === type
      );

      // Add new entrance and update slots
      const updatedTypeObj = {
        ...targetType,
        parkedCars: [...targetType.parkedCars, car],
      };
      const slotsArr = targetLevel?.slots?.map((k) =>
        k.typeName !== type ? k : updatedTypeObj
      );

      // Add new slot and update levels
      const updatedLevelObj = {
        ...targetLevel,
        slots: slotsArr,
      };
      const levelsArr = state?.levels?.map((u) =>
        u.levelName !== level ? u : updatedLevelObj
      );

      return {
        ...state,
        levels: levelsArr,
      };
    }

    case LEAVE: {
      const { car = {} } = action;
      const { level, type, regNo } = car;

      // Find the level
      const targetLevel = state?.levels?.find((el) => el?.levelName === level);

      // Find the type
      const targetType = targetLevel?.slots?.find(
        (el) => el?.typeName === type
      );

      // Remove the car and update slots
      const updatedTypeObj = {
        ...targetType,
        parkedCars: [
          ...targetType?.parkedCars?.filter((v) => v?.regNo !== regNo),
        ],
      };
      const slotsArr = targetLevel?.slots?.map((k) =>
        k.typeName !== type ? k : updatedTypeObj
      );

      // Add new slot and update levels
      const updatedLevelObj = {
        ...targetLevel,
        slots: slotsArr,
      };
      const levelsArr = state?.levels?.map((u) =>
        u.levelName !== level ? u : updatedLevelObj
      );

      return {
        ...state,
        levels: levelsArr,
      };
    }

    default:
      throw new Error();
  }
};
