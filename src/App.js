import { useState, useReducer } from "react";
import moment from "moment";
import EnterPark from "./components/EnterPark";
import LeavePark from "./components/LeavePark";
import Slots from "./components/Slots";
import { reducer } from "./reducer";
import { ENTER, LEAVE, initialState } from "./constants";
import { isTypeAvailable, getAllParkedCars, isCarParked } from "./helpers";
import "./App.css";

export default function App() {
  const [regNo, setRegNo] = useState("");
  const [type, setType] = useState("compact");
  const [level, setLevel] = useState("level0");
  const [enterBtn, setEnterBtn] = useState(false);
  const [leaveBtn, setLeaveBtn] = useState(false);
  const [infoMsg, setInfoMsg] = useState("");
  const [enterInfo, setEnterInfo] = useState({});
  const [exitInfo, setExitInfo] = useState({});

  const [data, dispatch] = useReducer(reducer, initialState);

  const handleLevelChange = (e) => {
    setLevel(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleRegChange = (e) => {
    setRegNo(e.target.value);
  };

  const enterPark = () => {
    const isSlotAvailable = isTypeAvailable(data.levels, level, type);
    const isCarInside = isCarParked(data.levels, regNo);

    if (isSlotAvailable && regNo) {
      if (!isCarInside) {
        dispatch({
          type: ENTER,
          car: {
            regNo,
            level,
            type,
            entryTime: moment(),
          },
        });
        setEnterInfo({
          regNo,
          entryTime: moment().format("MMMM Do YYYY, h:mm:ss a"),
        });
        setInfoMsg("");
      } else {
        setInfoMsg(`"${regNo}" is already registered!`);
      }
    } else {
      setInfoMsg(`There is no space for "${type}" at "${level}"`);
    }

    setRegNo("");
    setType("compact");
    setLevel("level0");
  };

  const leavePark = () => {
    const allCars = getAllParkedCars(data.levels);

    if (isCarParked(data.levels, regNo)) {
      const carToLeave = allCars.find((c) => c?.regNo === regNo);
      const exitTime = moment();
      const duration = moment.duration(exitTime.diff(carToLeave?.entryTime));
      const hours = duration.asHours();

      let total = 0;

      if (hours <= 1) {
        total = 50;
      } else if (hours > 1 && hours <= 3) {
        total = 50 + 30;
      } else {
        total = 50 + 30 + 10;
      }

      setExitInfo({
        fee: total,
        regNo,
        exitTime: moment().format("MMMM Do YYYY, h:mm:ss a"),
        duration: Math.round(hours * 60),
      });

      dispatch({
        type: LEAVE,
        car: carToLeave,
      });
      setInfoMsg("");
    } else {
      setInfoMsg(`"${regNo}" is not registered to this park!`);
    }

    setRegNo("");
  };

  return (
    <div className="App">
      <h1 style={{ color: "coral" }}>Welcome {data?.garageName}</h1>
      <Slots levels={data?.levels} />

      {infoMsg && <h3 style={{ color: "#e61919" }}>{infoMsg}</h3>}

      <div>
        <button
          className="btnStyle"
          onClick={() => {
            setEnterBtn(true);
            setLeaveBtn(false);
            setEnterInfo({});
            setExitInfo({});
            setInfoMsg("");
          }}
        >
          Enter
        </button>
        <button
          className="btnStyle leaveBtn"
          onClick={() => {
            setLeaveBtn(true);
            setEnterBtn(false);
            setEnterInfo({});
            setExitInfo({});
            setInfoMsg("");
          }}
        >
          Leave
        </button>
      </div>

      {enterBtn && (
        <EnterPark
          handleLevelChange={handleLevelChange}
          level={level}
          handleTypeChange={handleTypeChange}
          type={type}
          handleRegChange={handleRegChange}
          regNo={regNo}
          enterPark={enterPark}
          enterInfo={enterInfo}
        />
      )}
      {leaveBtn && (
        <LeavePark
          handleRegChange={handleRegChange}
          regNo={regNo}
          leavePark={leavePark}
          exitInfo={exitInfo}
        />
      )}
    </div>
  );
}
