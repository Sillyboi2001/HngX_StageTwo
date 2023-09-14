import React from "react";

const Homepage = () => {
  return (
    <div className="header1">
      <h className="primary-text">John Wick 3: <br />Parabellum</h>
      <p1 className="additional-text">
        John Wick is on the run after killing a member of the international assassins' guild,
        and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
      </p1>
      <div className='btn-container'>
        <button type="button" className="watch-btn">WATCH TRAILER</button>
      </div>
    </div>
  )
};

export default Homepage;
