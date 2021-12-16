import styled from "styled-components";
import Image from "next/image";
import refreshIcon from "../assets/refreshIcon.png";

const PageLabelWrapper = styled.div`
  display: flex;
`;
const Text = styled.div`
  margin-left: 2px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Refresh = styled.div`
  margin-left: auto;
  cursor: pointer;
`;

const mainLabel = ({ text, onRefresh }) => (
  <PageLabelWrapper>
    <Text>{text}</Text>
    <Refresh onClick={() => onRefresh()}>
      <Image src={refreshIcon} width={15} height={15} />
    </Refresh>
  </PageLabelWrapper>
);

export default mainLabel;
