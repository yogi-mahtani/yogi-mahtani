import React, { useState } from 'react';
import styled from 'styled-components';

interface SelectProps {
  label: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}

const Select = ({ label, value, options, onChange }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  return (
    <SelectWrapper>
      <FieldLabel>{label}</FieldLabel>
      <DropdownWrapper>
        <SelectedValue onClick={() => setIsOpen(!isOpen)}>
          {options.find((option) => option.value === value)?.label ||
            'Select an option'}
          <ArrowIcon isOpen={isOpen} />
        </SelectedValue>
        {isOpen && (
          <DropdownList>
            {options.map((option) => (
              <DropdownItem
                key={option.value}
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownWrapper>
    </SelectWrapper>
  );
};

// Styled Components for the Select component
const SelectWrapper = styled.div`
  width: 100%;
  max-width: 560px;
`;

const FieldLabel = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 8px;
`;

const DropdownWrapper = styled.div`
  position: relative;
`;

const SelectedValue = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
`;

const ArrowIcon = styled.span<{ isOpen: boolean }>`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-left: 2px solid #000;
  border-bottom: 2px solid #000;
  transform: ${(props) => (props.isOpen ? 'rotate(135deg)' : 'rotate(-45deg)')};
  transition: transform 0.2s ease;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  max-height: 200px;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 10;
`;

const DropdownItem = styled.li`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export default Select;
