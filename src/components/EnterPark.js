const EnterPark = ({
  handleLevelChange,
  level,
  handleTypeChange,
  type,
  handleRegChange,
  regNo,
  enterPark,
  enterInfo,
}) => (
  <div className="wrapper entry">
    {enterInfo?.regNo ? (
      <>
        <h4>Take your parking ticket!</h4>
        <h3 style={{ color: "#1e88e5" }}>Reg no: "{enterInfo?.regNo}"</h3>
        <p>
          <strong>Entry time:</strong> {enterInfo?.entryTime}
        </p>
      </>
    ) : (
      <>
        <h3>Enter park</h3>
        <div>
          <label htmlFor="levels">Choose level: </label>
          <select id="levels" onChange={handleLevelChange} value={level}>
            <option value="level0">Level-0</option>
            <option value="level1">Level-1</option>
            <option value="level2">Level-2</option>
          </select>
        </div>
        <br />
        <div>
          <label htmlFor="types">Choose slot type: </label>
          <select id="types" onChange={handleTypeChange} value={type}>
            <option value="compact">Compact</option>
            <option value="large">Large</option>
            <option value="handicapped">Handicapped</option>
            <option value="motorcycle">Motorcycle</option>
          </select>
        </div>
        <br />
        <div>
          <label htmlFor="regNo">Enter registration number: </label>
          <input id="regNo" onChange={handleRegChange} value={regNo} />
        </div>
        <br />
        <div>
          <button disabled={!regNo} onClick={() => enterPark()}>
            Submit
          </button>
        </div>
      </>
    )}
  </div>
);

export default EnterPark;
