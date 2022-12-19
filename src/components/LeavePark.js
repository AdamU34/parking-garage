const LeavePark = ({ handleRegChange, regNo, leavePark, exitInfo = {} }) => (
  <div className="wrapper exit">
    {exitInfo?.fee ? (
      <>
        <h4>Reg no: "{exitInfo?.regNo}"</h4>
        <h3 style={{ color: "#1e88e5" }}>
          Your parking fee: NOK {exitInfo?.fee}
        </h3>
        <p>
          <strong>Exit time: </strong>
          {exitInfo?.exitTime}
        </p>
        <p>
          <strong>Duration: </strong>
          {exitInfo?.duration} mins
        </p>
      </>
    ) : (
      <>
        <h3>Leave park</h3>
        <div>
          <label htmlFor="regNo">Enter registration number: </label>
          <input id="regNo" onChange={handleRegChange} value={regNo} />
        </div>
        <br />
        <div>
          <button disabled={!regNo} onClick={() => leavePark()}>
            Submit
          </button>
        </div>
      </>
    )}
  </div>
);

export default LeavePark;
