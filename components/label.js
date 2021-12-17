import styled from 'styled-components';

const NameWrapper = styled.div`
  margin-left: 16px;
  align-items: flex-start;
`;

const Symbol = styled.div`
  font-size: ${(props) => props.symbolSize};
  font-weight: bold;
`;
const Name = styled.div`
  flex-basis: 100%;
  font-size: ${(props) => props.nameSize};
`;

const label = ({name, symbol, nameSize, symbolSize}) => {
  return (
    <NameWrapper>
      <Symbol symbolSize={symbolSize}>{symbol.toUpperCase()}</Symbol>
      <Name nameSize={nameSize}>{name}</Name>
    </NameWrapper>
  );
};

export default label;
