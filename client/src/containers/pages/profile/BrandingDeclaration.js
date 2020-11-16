import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4, parse as uuidParse } from "uuid";

///////COMPONENTS
import ProposalList from "../profile/ProposalList";
///////UX
import TextArea from "../../../components/UX/text-area";
///////UI
import { TextSmall } from "../../../components/UI/ui-elements";
//////actions
import {
  fetchBrandingDeclaration,
  brandingDeclarationSave,
  brandingDeclarationUpdate,
  showDefault,
  createText,
  updateTouched,
  brandingDeclarationClearState,
} from "../../../redux/actions/brandingDeclaration";

const textAreaPlaceHolder =
  "Declaratia ta de Branding (pozitionarea ta in piata).";

const BrandingDeclaration = (props) => {
  const [newValue, setNewValue] = useState("");
  const [textCard, setTextCard] = useState({
    text_id: `${1}`,
    text: "",
    touched: false,
    key: uuidv4(),
  });
  const dispatch = useDispatch();

  const accountId = useSelector((state) => state.account.accountId);
  let brandingDeclaration = useSelector((state) =>
    Object.values(state.branding.brandingDeclaration)
  );

  useEffect(() => {
    dispatch(brandingDeclarationClearState());
  }, []);
  useEffect(() => {
    dispatch(createText({ textCard }));
  }, []);
  useEffect(() => {
    dispatch(fetchBrandingDeclaration({ accountId, brandingDeclaration }));
  }, []);

  useEffect(() => {
    dispatch(updateTouched({ textCard }));
  }, [dispatch, textCard, newValue]);

  const onSaveHandler = (id) => {
    dispatch(
      brandingDeclarationSave({
        textCard: {
          text_id: (1 + id).toString(),
          text: newValue,
          touched: false,
          key: uuidv4(),
        },
        accountId,
      })
    );
  };
  const onUpdateHandler = (id) => {
    dispatch(
      brandingDeclarationUpdate({
        textCard: {
          text_id: (1 + id).toString(),
          text: newValue,
          touched: false,
          key: brandingDeclaration[id].key,
        },
        accountId,
      })
    );
    setTextCard({
      text_id: (1 + id).toString(),
      text: newValue,
      touched: !brandingDeclaration[id].touched,
      key: brandingDeclaration[id].key,
    });
  };

  const onAddDefaultHandler = (id) => {
    dispatch(
      showDefault({
        defaultText: {
          text_id: (2 + id).toString(),
          text: "",
          touched: false,
          key: uuidv4(),
        },
      })
    );
  };

  const actions = (id, touched) => {
    if (!brandingDeclaration[id]) {
      return null;
    }
    return (
      <div
        style={{
          display: "flex",
          flexFlow: "row-reverse ",
          textAlign: "right",
          marginTop: "16px",
        }}
      >
        <TextSmall
          hovered
          display={!brandingDeclaration[id].text.toString()}
          style={{ marginLeft: "34px" }}
          onClick={() => onUpdateHandler(id)}
          red={touched}
        >
          modifica
        </TextSmall>

        <TextSmall
          display={brandingDeclaration[id].text.toString()}
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
      text_id: brandingDeclaration[id].text_id,
      text: brandingDeclaration[id].text,
      touched: true,
      key: brandingDeclaration[id].key,
    });
  };

  const renderText = () => {
    if (!brandingDeclaration) {
      return null;
    } else {
      return brandingDeclaration.map((object, index) => {
        // console.log("[renderText = () =>]", object);

        return (
          <div key={object.key} style={{ width: "740px" }} {...props}>
            <TextArea
              placeholder={textAreaPlaceHolder}
              onClick={() => onClickHandler(index)}
              onChange={(text) => onChangeTextHandler(text)}
              defaultValue={object.text}
              text={object.text}
            ></TextArea>
            {actions(index, object.touched)}
          </div>
        );
      });
    }
  };

  return <div style={{ display: "flex" }}>{renderText()}</div>;
};

export default BrandingDeclaration;
