import { useState } from "react";
export default function LightSwitchButton(props) {
  const {light, setLight} = props
   
  const handleClick = () => { light ==="off" ? setLight("on") : setLight("off")}
  return (
    <button className="LightSwitchButton" onClick={handleClick}>
      {light==="on" && <span className="on"><i>💡</i> I'm on!</span>}
      {light==="off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
}
