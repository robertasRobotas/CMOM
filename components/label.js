import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

const NameWrapper = styled.div`
  margin-left: 16px;
  align-items: flex-start;
`;

const Symbol = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 150%;
  font-size: ${(props) => props.symbolSize};
  font-weight: bold;
`;
const Name = styled.div`
  flex-basis: 100%;
  font-size: ${(props) => props.nameSize};
`;

const label = ({ name, symbol, nameSize, symbolSize }) => {
  return (
    <NameWrapper>
      <Symbol symbolSize={symbolSize}>{symbol.toUpperCase()}</Symbol>
      <Name nameSize={nameSize}>{name}</Name>
    </NameWrapper>
  );
};

export default label;
