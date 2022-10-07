import React from "react";
import {  Image, Button } from "../Atoms/Atoms";


const USID = require("usid");
const usid = new USID();

const SectionBlockItem = (props) => {
 
  return (
    <div key={usid.rand()} className={props.className + "-card"}>
      <div key={usid.rand()} className={props.className + "-header"}>

        <div className={props.className + "__button-block"}>
          <Button
            id={props.id}
            key={usid.rand()}
            name={"X"}
            className={props.className + "-close"}
            onClick={props.onRemove}
          />
        </div>
      </div>
      <div key={usid.rand()} className={props.className + "-content"}>
        <Image key={usid.rand()}
        id={usid.rand(9)}
        name={"alt"}
        url={props.data}
        className={props.className + "-elem"}
        ></Image>
      </div>
    </div>
  );
};

export default SectionBlockItem;

