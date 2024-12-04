import styled from 'styled-components';

interface SelectOptionProps {
  text: string;
  icon: string;
}

export const SelectOption = ({ text, icon }: SelectOptionProps) => (
  <SelectWrapper>
    <SelectText>{text}</SelectText>
    <SelectIcon loading="lazy" src={icon} alt="" />
  </SelectWrapper>
);

const SelectWrapper = styled.div`
  background-color: #fff;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 16px;
  justify-content: space-between;
  padding: 12px;
  border: 1px solid #000;
`;

const SelectText = styled.span`
  flex: 1;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const SelectIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 24px;
`;
