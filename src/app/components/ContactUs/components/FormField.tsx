import styled from 'styled-components';

import Select from '@/app/ui-kit/Select';
import { FormFieldProps } from '../types';

export const FormField = ({
  label,
  options,
  value,
  setSelectedValue,
}: FormFieldProps) => {
  return (
    <FieldWrapper>
      <SelectOption>
        <Select
          label={label}
          value={value}
          options={options}
          onChange={setSelectedValue}
        />
      </SelectOption>
    </FieldWrapper>
  );
};

const FieldWrapper = styled.div`
  margin-top: 8px;
  width: 100%;
  padding-bottom: 8px;
`;

const SelectOption = styled.div`
  display: flex;
  align-items: center;
`;
