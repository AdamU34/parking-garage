import {
  getCapacity,
  getTotalCapacity,
  getAllParkedCars,
  isFull,
} from "../helpers";

const Slots = ({ levels }) => (
  <div className="wrapper slot">
    <h3>Available slots</h3>
    <table style={{ margin: "0px auto" }}>
      <thead>
        <tr>
          <th></th>
          <th>compact</th>
          <th>large</th>
          <th>handicapped</th>
          <th>motorcycle</th>
        </tr>
      </thead>
      <tbody>
        {levels?.map((level) => (
          <tr key={level?.levelName}>
            <th>{level?.levelName}</th>
            <td className={isFull(level, "compact") ? "cellType" : ""}>
              {getCapacity(level, "compact")}
            </td>
            <td className={isFull(level, "large") ? "cellType" : ""}>
              {getCapacity(level, "large")}
            </td>
            <td className={isFull(level, "handicapped") ? "cellType" : ""}>
              {getCapacity(level, "handicapped")}
            </td>
            <td className={isFull(level, "motorcycle") ? "cellType" : ""}>
              {getCapacity(level, "motorcycle")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div>
      <p>
        Remaining spaces:{" "}
        <strong>
          {getTotalCapacity(levels) - getAllParkedCars(levels)?.length}{" "}
        </strong>{" "}
        --- Total spaces: <strong>{getTotalCapacity(levels)}</strong>
      </p>
      <p></p>
    </div>
  </div>
);

export default Slots;
