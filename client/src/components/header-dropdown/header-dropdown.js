import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";

///////actions
import { logout, clearGoogleUser } from "../../redux/actions/account";
import { toggleHidden } from "../header-dropdown/redux/dropdown.actions";

import styled from "styled-components";

let HeaderDropdown = ({ props, dispatch, history }) => {
  const user = useSelector((state) => state.account.user);

  const renderLogoutText = () => {
    switch (user) {
      case "googleUser":
        return (
          <li onClick={() => dispatch(clearGoogleUser())}>
            <a href="/auth/logout">Deconectati-va</a>
          </li>
        );

      default:
        return (
          <button
            type="button"
            style={{
              cursor: "pointer",
            }}
            onClick={logoutHandler}
          >
            Deconectati-va
          </button>
        );
    }
  };
  const logoutHandler = () => {
    dispatch(logout());
    dispatch(toggleHidden());
    history.push("/");
  };
  const onLinkHandler = () => {
    dispatch(toggleHidden());
  };

  return (
    <DropdownStyle>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "8px",
        }}
      >
        <p>Notificari</p>
        <p>Toate</p>
      </div>
      <Divider />
      <ShotNotificationStyle>
        <li>Nu exista notificari</li>
      </ShotNotificationStyle>
      <Divider />
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "264px",
          width: "100%",
        }}
      >
        <Link to="/profil/profil" onClick={onLinkHandler}>
          <ListText>Profil</ListText>
        </Link>
        <Link to="/profil/oferte-trimise" onClick={onLinkHandler}>
          <ListText>Oferte Trimise</ListText>
        </Link>
        <Link to="/profil/situatie" onClick={onLinkHandler}>
          <ListText>Situatie</ListText>
        </Link>
        <Divider />
        <ListText
          style={{
            marginTop: "auto",
            marginBottom: "0",
            //   alignSelf: "end",
          }}
        >
          {renderLogoutText()}
        </ListText>
      </ul>
    </DropdownStyle>
  );
};

const DropdownStyle = styled.div`
  position: absolute;
  width: 240px;
  min-height: 340px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  top: 7vh;
  right: 12vw;
  border: 1px solid #d8d8d8;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 2px 1px 1px rgba(0, 0, 0, 0.1);
  z-index: 101;
`;

const Divider = styled.div`
  height: 1px;
  margin: 8px 0;
  overflow: hidden;
  background-color: #333;
  color: #777;
  border-bottom: 1px solid #fff;
  border-bottom-color: #333;
`;

const ShotNotificationStyle = styled.ul`
  display: block;
  float: left;
  clear: left;
  width: 100%;
  margin: 0;
  padding: 0;
  color: #777;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  line-height: 1.6em;
  text-align: -webkit-match-parent;
`;

const ListText = styled.li`
  line-height: 1.6em;
  display: list-item;
  text-align: -webkit-match-parent;
  display: block;
  color: #777;
  font-size: 15px;
  padding: 2px 0;
  font-weight: 400;
  text-align: left;
  line-height: 1.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  letter-spacing: 1.05px;
`;
HeaderDropdown = connect()(HeaderDropdown);
export default withRouter(HeaderDropdown);
