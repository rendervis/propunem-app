import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import TextArea from "./text-area";
import { TextSmall } from "../../../components/UI/ui-elements";

import {
  showText,
  createText,
  deleteText,
  showDefault,
} from "../../../redux/actions/about-us.actions";

let random = [
  0x10,
  0x91,
  0x56,
  0xbe,
  0xc4,
  0xfb,
  0xc1,
  0xea,
  0x71,
  0xb4,
  0xef,
  0xe1,
  0x67,
  0x1c,
  0x58,
  0x36,
];

const textAreaPlaceHolder = "Care este povestea ta? Cum ai inceput?";

const AboutUs = (props) => {
  const [newValue, setNewValue] = useState("");
  const [textCard, setTextCard] = useState({
    textId: `${1}`,
    aboutText: "",
    touched: false,
  });
  const dispatch = useDispatch();

  const aboutUsText = useSelector((state) =>
    Object.values(state.aboutUsText.aboutUs)
  );

  useEffect(() => {
    dispatch(showText(aboutUsText));
  }, []);

  useEffect(() => {
    dispatch(createText(textCard));
  }, [dispatch, textCard, newValue]);

  const onSaveHandler = (id) => {
    setTextCard({
      textId: (1 + id).toString(),
      aboutText: newValue,
      touched: false,
    });
    dispatch(
      showDefault({
        textId: (2 + id).toString(),
        aboutText: "",
        touched: false,
      })
    );
  };

  const onUpdateHandler = (id) => {
    setTextCard({
      textId: (1 + id).toString(),
      aboutText: newValue,
      touched: !aboutUsText[id].touched,
    });
  };

  const onDeleteHandler = (textId) => {
    dispatch(deleteText(textId));
  };

  const actions = (id, textId, touched) => {
    if (!aboutUsText[id]) {
      return null;
    }

    // console.log("[const actions =]");
    return (
      <div
        style={{
          display: "flex",
          flexFlow: "row-reverse ",
          textAlign: "right",
        }}
      >
        {!aboutUsText[id].aboutText ? (
          ""
        ) : (
          <TextSmall
            onClick={() => onDeleteHandler(textId)}
            hovered
            red
            style={{ marginLeft: "34px" }}
          >
            sterge
          </TextSmall>
        )}

        <TextSmall
          hovered
          display={!aboutUsText[id].aboutText.toString()}
          style={{ marginLeft: "34px" }}
          onClick={() => onUpdateHandler(id)}
          red={touched}
        >
          modifica
        </TextSmall>

        <TextSmall
          display={aboutUsText[id].aboutText.toString()}
          hovered
          red
          style={{ marginLeft: "34px" }}
          onClick={() => onSaveHandler(id)}
        >
          salveaza
        </TextSmall>
      </div>
    );
  };

  const onChangeTextHandler = (text) => {
    setNewValue(text);
  };
  const onClickHandler = (id) => {
    // console.log("[onClickHandler =]", aboutUsText[id]);
    setTextCard({
      textId: aboutUsText[id].textId,
      aboutText: aboutUsText[id].aboutText,
      touched: true,
    });
    // dispatch(updateTouched())
  };

  const renderText = () => {
    if (!aboutUsText[0]) {
      return <div>no list</div>;
    } else {
      return aboutUsText.map((about, index) => {
        // console.log("[renderText = () =>]", about.textId);
        return (
          <div key={random[about.textId].toString()}>
            <TextArea
              placeholder={textAreaPlaceHolder}
              onClick={() => onClickHandler(index)}
              onChange={(text) => onChangeTextHandler(text)}
            />
            {actions(index, about.textId, about.touched)}
          </div>
        );
      });
    }
  };

  return <div>{renderText()}</div>;
};

export default AboutUs;
