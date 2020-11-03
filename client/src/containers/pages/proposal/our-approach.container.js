import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4, parse as uuidParse } from "uuid";

import TextArea from "./text-area";
import { TextSmall } from "../../../components/UI/ui-elements";

import {
  createText,
  fetchOurApproachText,
  saveText,
  deleteText,
  showDefault,
  ourApproachClearState,
  updateTouched,
} from "../../../redux/actions/our-approach.actions";

const textAreaPlaceHolder =
  "Ce te face să ieși în evidență? De ce esti cea mai buna alegere?";

const OurApproach = () => {
  const [newValue, setNewValue] = useState("");
  const [textCard, setTextCard] = useState({
    text_id: `${1}`,
    approach_text: "",
    touched: false,
    key: uuidv4(),
  });
  const dispatch = useDispatch();

  const proposalId = useSelector((state) => state.proposal.proposalId);
  const ourApproach = useSelector((state) =>
    Object.values(state.ourApproachText.ourApproach)
  );

  useEffect(() => {
    dispatch(ourApproachClearState());
  }, []);
  useEffect(() => {
    dispatch(createText({ textCard }));
  }, []);

  useEffect(() => {
    dispatch(fetchOurApproachText({ proposalId, ourApproach }));
  }, []);
  useEffect(() => {
    dispatch(updateTouched({ textCard }));
  }, [dispatch, textCard, newValue]);

  const onSaveHandler = (id) => {
    dispatch(
      saveText({
        textCard: {
          text_id: (1 + id).toString(),
          approach_text: newValue,
          touched: false,
          key: uuidv4(),
        },
        proposalId,
      })
    );
  };

  const onUpdateHandler = (id) => {
    setTextCard({
      text_id: (1 + id).toString(),
      approach_text: newValue,
      touched: !ourApproach[id].touched,
      key: ourApproach[id].key,
    });
    dispatch(
      saveText({
        textCard: {
          text_id: (1 + id).toString(),
          approach_text: newValue,
          touched: false,
          key: ourApproach[id].key,
        },
        proposalId,
      })
    );
  };

  const onAddDefaultHandler = (id) => {
    dispatch(
      showDefault({
        defaultText: {
          text_id: (2 + id).toString(),
          approach_text: "",
          touched: false,
          key: uuidv4(),
        },
      })
    );
  };

  const onDeleteHandler = (text_id) => {
    dispatch(deleteText({ proposalId, text_id }));
  };

  const actions = (id, text_id, touched) => {
    if (!ourApproach[id]) {
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
        {!ourApproach[id].approach_text ? (
          ""
        ) : (
          <TextSmall
            onClick={() => onDeleteHandler(text_id)}
            hovered
            red
            style={{ marginLeft: "34px" }}
          >
            sterge
          </TextSmall>
        )}

        <TextSmall
          hovered
          display={!ourApproach[id].approach_text.toString()}
          style={{ marginLeft: "34px" }}
          onClick={() => onUpdateHandler(id)}
          red={touched}
        >
          modifica
        </TextSmall>

        <TextSmall
          display={ourApproach[id].approach_text.toString()}
          hovered
          red
          style={{ marginLeft: "34px" }}
          onClick={() => onSaveHandler(id)}
        >
          salveaza
        </TextSmall>
        {ourApproach.length - 1 === id ? (
          <span onClick={() => onAddDefaultHandler(id)}>+</span>
        ) : (
          ""
        )}
      </div>
    );
  };

  const onChangeTextHandler = (text) => {
    setNewValue(text);
  };
  const onClickHandler = (id) => {
    // console.log("[onClickHandler =]", aboutUsText[id]);
    setTextCard({
      text_id: ourApproach[id].text_id,
      approach_text: ourApproach[id].approach_text,
      touched: true,
      key: ourApproach[id].key,
    });
  };

  const renderText = () => {
    if (!ourApproach) {
      return null;
    } else {
      return ourApproach.map((about, index) => {
        // console.log("[renderText = () =>]", about.textId);
        return (
          <div key={about.key}>
            <TextArea
              placeholder={textAreaPlaceHolder}
              onClick={() => onClickHandler(index)}
              onChange={(text) => onChangeTextHandler(text)}
              defaultValue={about.approach_text}
            />
            {actions(index, about.text_id, about.touched)}
          </div>
        );
      });
    }
  };

  return <div>{renderText()}</div>;
};

export default OurApproach;
