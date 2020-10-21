import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import TextArea from "./text-area";
import { TextSmall } from "../../../components/UI/ui-elements";

import {
  createText,
  fetchAboutUsText,
  saveText,
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

  const accountId = useSelector((state) => state.account.accountId);
  const proposalId = useSelector((state) => state.proposal.proposalId);
  const aboutUs = useSelector((state) =>
    Object.values(state.aboutUsText.aboutUs)
  );
  console.log("aboutUs", aboutUs);
  console.log("accountId", accountId);
  console.log("proposalId", proposalId);

  useEffect(() => {
    dispatch(fetchAboutUsText({ proposalId, aboutUs }));
  }, []);

  useEffect(() => {
    dispatch(createText({ textCard }));
  }, [dispatch, textCard, newValue]);

  // useEffect(() => {
  //   dispatch(saveText({ textCard, proposalId }));
  // }, [dispatch, textCard, newValue]);

  const onSaveHandler = (id) => {
    setTextCard({
      textId: (1 + id).toString(),
      aboutText: newValue,
      touched: false,
    });
    dispatch(
      saveText({
        textCard: { textId: (1 + id).toString(), aboutText: newValue },
        proposalId,
      })
    );
  };

  const onAddDefaultHandler = (id) => {
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
      touched: !aboutUs[id].touched,
    });
  };

  const onDeleteHandler = (textId) => {
    dispatch(deleteText(textId));
  };

  const actions = (id, textId, touched) => {
    if (!aboutUs[id]) {
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
        {!aboutUs[id].aboutText ? (
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
          display={!aboutUs[id].aboutText.toString()}
          style={{ marginLeft: "34px" }}
          onClick={() => onUpdateHandler(id)}
          red={touched}
        >
          modifica
        </TextSmall>

        <TextSmall
          display={aboutUs[id].aboutText.toString()}
          hovered
          red
          style={{ marginLeft: "34px" }}
          onClick={() => onSaveHandler(id)}
        >
          salveaza
        </TextSmall>
        <span onClick={() => onAddDefaultHandler(id)}>+</span>
      </div>
    );
  };

  const onChangeTextHandler = (text) => {
    setNewValue(text);
  };
  const onClickHandler = (id) => {
    // console.log("[onClickHandler =]", aboutUsText[id]);
    setTextCard({
      textId: aboutUs[id].textId,
      aboutText: aboutUs[id].aboutText,
      touched: true,
    });
    // dispatch(updateTouched())
  };

  const renderText = () => {
    if (!aboutUs[0]) {
      return null;
    } else {
      return aboutUs.map((about, index) => {
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
