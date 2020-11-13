import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4, parse as uuidParse } from "uuid";

///////COMPONENTS
import ProposalList from "../profile/ProposalList";
///////UX
import TextArea from "./text-area";
///////UI
import { TextSmall } from "../../../components/UI/ui-elements";
//////actions
import {
  createText,
  fetchAboutUsText,
  saveText,
  deleteText,
  showDefault,
  aboutUsClearState,
  updateTouched,
} from "../../../redux/actions/about-us.actions";

const textAreaPlaceHolder =
  "Declaratia ta de Branding (pozitionarea ta in piata).";

const ServicesAndCapabilities = (props) => {
  const [newValue, setNewValue] = useState("");
  const [textCard, setTextCard] = useState({
    text_id: `${1}`,
    capabilities: "",
    touched: false,
    key: uuidv4(),
  });
  const dispatch = useDispatch();

  const proposalId = useSelector((state) => state.proposal.proposalId);
  let aboutUs = useSelector((state) =>
    Object.values(state.aboutUsText.aboutUs)
  );

  useEffect(() => {
    dispatch(aboutUsClearState());
  }, []);
  useEffect(() => {
    dispatch(createText({ textCard }));
  }, []);
  useEffect(() => {
    dispatch(fetchAboutUsText({ proposalId, aboutUs }));
  }, []);

  useEffect(() => {
    dispatch(updateTouched({ textCard }));
  }, [dispatch, textCard, newValue]);

  const onSaveHandler = (id) => {
    // setTextCard({
    //   textId: (1 + id).toString(),
    //   about_text: newValue,
    //   touched: false,
    //   key: uuidv4(),
    // });
    dispatch(
      saveText({
        textCard: {
          text_id: (1 + id).toString(),
          about_text: newValue,
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
      about_text: newValue,
      touched: !aboutUs[id].touched,
      key: aboutUs[id].key,
    });
    dispatch(
      saveText({
        textCard: {
          text_id: (1 + id).toString(),
          about_text: newValue,
          touched: false,
          key: aboutUs[id].key,
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
          about_text: "",
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
    if (!aboutUs[id]) {
      return null;
    }
    return (
      <div
        style={{
          display: "flex",
          flexFlow: "row-reverse ",
          textAlign: "right",
        }}
      >
        <TextSmall
          hovered
          display={!aboutUs[id].about_text.toString()}
          style={{ marginLeft: "34px" }}
          onClick={() => onUpdateHandler(id)}
          red={touched}
        >
          modifica
        </TextSmall>

        <TextSmall
          display={aboutUs[id].about_text.toString()}
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
    setTextCard({
      text_id: aboutUs[id].text_id,
      about_text: aboutUs[id].about_text,
      touched: true,
      key: aboutUs[id].key,
    });
  };

  const renderText = () => {
    if (!aboutUs) {
      return null;
    } else {
      return aboutUs.map((about, index) => {
        // console.log("[renderText = () =>]", about.text_id);

        return (
          <div key={about.key}>
            <TextArea
              placeholder={textAreaPlaceHolder}
              onClick={() => onClickHandler(index)}
              onChange={(text) => onChangeTextHandler(text)}
              defaultValue={about.about_text}
            ></TextArea>
            {actions(index, about.text_id, about.touched)}
          </div>
        );
      });
    }
  };

  return (
    <div>
      {renderText()}
      <div></div>
      <ProposalList noClick="none" />
    </div>
  );
};

export default ServicesAndCapabilities;
