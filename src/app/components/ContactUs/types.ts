export interface SelectOptionProps {
  text: string;
  icon: string;
}

export interface FormFieldProps {
  label: string;
  value: string;
  icon?: boolean;
  options: { label: string; value: string }[];
  setSelectedValue: (value: string) => void;
}

export interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
}
