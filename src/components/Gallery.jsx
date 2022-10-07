import React, { useState, useEffect } from "react";
import Form from "./Molecules/form/FormSearch";
import SectionBlock from "./Sections/SectionBlock";
import SectionBlockItem from "./Sections/SectionBlockItem";

import Storage from "../utils/Storage";

const USID = require("usid");
const usid = new USID();
const storage = new Storage();
let state = storage.getPinCards();

const Gallery = (data) => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const picState = storage.getPinCards();
    setPictures(picState);
  }, []);

  const handleAdd = (data) => {
    state.push(data);
    storage.save(state);

    setPictures((prev) => [...prev, data]);
  };

  const handleRemove = (id) => {
    const idx = state.findIndex((o) => o.id === id);

    state.splice(idx, 1);
    storage.save(state);

    setPictures((prev) => prev.filter((o) => o.id !== id));
  };

  const props = {
    childData: data,
    onAdd: handleAdd,
  };
  return (
    <>
      <Form key={usid.rand()} data={props}></Form>
      <SectionBlock
        key={usid.rand()}
        className="gallery"
        handleRemove={handleRemove}
      >
        {pictures.map((item) => {
          return (
            <SectionBlockItem
              key={usid.rand()}
              {...item}
              className={"picture"}
              onRemove={handleRemove}
            />
          );
        })}
      </SectionBlock>
    </>
  );
};
export default Gallery;
