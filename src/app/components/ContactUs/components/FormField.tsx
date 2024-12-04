import styled from 'styled-components';
import { FormFieldProps } from '../types';

export const FormField = ({ label, value, icon }: FormFieldProps) => (
  <FieldWrapper>
    <FieldLabel>{label}</FieldLabel>
    <SelectOption>
      <OptionText>{value}</OptionText>
      {icon && <OptionIcon loading="lazy" src={icon} alt="" />}
    </SelectOption>
  </FieldWrapper>
);

const FieldWrapper = styled.div`
  margin-top: 8px;
  width: 100%;
`;

const FieldLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
`;

const SelectOption = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  border: 1px solid #000;
`;

const OptionText = styled.span`
  flex: 1;
`;

const OptionIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 24px;
`;
