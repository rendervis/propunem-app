import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4, parse as uuidParse } from "uuid";

///////COMPONENTS
import ProposalList from "../profile/ProposalList";

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

const ServicesAndCapabilities = (props) => {
  const [newValue, setNewValue] = useState("");

  const dispatch = useDispatch();

  const proposalId = useSelector((state) => state.proposal.proposalId);
  let aboutUs = useSelector((state) =>
    Object.values(state.aboutUsText.aboutUs)
  );

  return (
    <div>
      <div>BRANDING DECLARATION</div>

      <ProposalList noClick="none" />
    </div>
  );
};

export default ServicesAndCapabilities;
