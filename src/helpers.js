import flattenDeep from "lodash.flattendeep";

const findType = (level = {}, type = "") => {
  return level.slots.find((e) => e?.typeName === type);
};

export const isTypeAvailable = (levels, level, type) => {
  const targetLevel = levels?.find((el) => el?.levelName === level);
  const targetType = findType(targetLevel, type);

  if (targetType?.parkedCars?.length < targetType?.capacity) {
    return true;
  } else {
    return false;
  }
};

export const getCapacity = (level = {}, type = "") => {
  const targetType = findType(level, type);

  const size = targetType?.parkedCars?.length;
  const capacity = targetType?.capacity;

  return `${size} / ${capacity}`;
};

export const isFull = (level = {}, type = "") => {
  const targetType = findType(level, type);

  const size = targetType?.parkedCars?.length;
  const capacity = targetType?.capacity;

  if (size < capacity) {
    return false;
  } else {
    return true;
  }
};

export const getAllParkedCars = (levels = []) => {
  const levelKeys = levels.map((el) => el.slots);
  const allCars = flattenDeep(levelKeys).map((el) => el.parkedCars);

  return flattenDeep(allCars);
};

export const isCarParked = (levels = [], regNo) => {
  const allCars = getAllParkedCars(levels);

  const isCarInside = allCars.every((car) => car.regNo !== regNo);
  return !isCarInside;
};

export const getTotalCapacity = (levels = []) => {
  const capacity = levels.map((el) => el.capacity);
  return capacity.reduce((a, b) => a + b);
};
