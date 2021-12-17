import styled from "styled-components";

const AdditionalInfo = styled.div``;

const Description = styled.p`
  margin-top: 30px;
  line-height: 1.5;
`;

const InfoRow = styled.div`
  margin-top: 20px;
  line-height: 1.5;
  letter-spacing: 1px;
`;

const InfoLine = ({ title, arg }) => (
  <InfoRow>
    {title}: {arg || "-"}
  </InfoRow>
);

const additionalInfo = ({
  description,
  homepage,
  marketCap,
  hashingAlgorythm,
  genesisDate,
  currency,
}) => {
  return (
    <AdditionalInfo>
      <Description
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
      <InfoLine title="Homepage" arg={homepage} />
      <InfoLine title={`Market cap(${currency})`} arg={marketCap} />
      <InfoLine title="Hashing algorithm" arg={hashingAlgorythm} />
      <InfoLine title="Genesis Date" arg={genesisDate} />
    </AdditionalInfo>
  );
};

export default additionalInfo;
