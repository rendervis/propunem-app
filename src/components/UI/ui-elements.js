import styled, { css } from "styled-components";

export const TitleText = styled.span`
  font-family: Arimo;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  margin-left: 32px;
  margin-right: auto;
`;

export const UlStyled = styled.ul`
  font-family: Arimo;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;

export const TextSmall = styled.p`
  font-family: Arimo;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.86;
  letter-spacing: normal;
  text-align: left;
  color: #777777;
  
  ${(props) =>
    props.black &&
    css`
      color: #000000;
    `}
  ${(props) =>
    props.blue &&
    css`
      color: #0277bd;
    `}
  ${(props) =>
    props.marginLeft &&
    css`
      margin-left: 0.375rem;
    `}
`;

export const TextRegular = styled.p`
  font-family: Arimo;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 22px;
  letter-spacing: 1px;
  text-align: left;
  color: #6F6F6F;
  margin-bottom: 24px;

  ${(props) =>
    props.black &&
    css`
      color: #000000;
    `}

  ${(props) =>
    props.secondaryTitle &&
    css`
      font-size: 18px;
      /* line-height: 8px; */
      font-weight: regular;
      color: #000000;
      margin-bottom: 16px;
    `}
  ${(props) =>
    props.titleStyle &&
    css`
      font-size: 18px;
      font-weight: bold;
      color: #000000;
      margin-bottom: 7px;
    `}
  ${(props) =>
    props.displayNone &&
    css`
      display: none;
    `}
  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}


  ${(props) =>
    props.withPadding &&
    css`
      padding: 0 1.25rem;
    `}
  ${(props) =>
    props.paddingBottom &&
    css`
      padding-bottom: 0.75rem;
    `}

  ${(props) =>
    props.blue &&
    css`
      color: #0277bd;
    `}
`;
