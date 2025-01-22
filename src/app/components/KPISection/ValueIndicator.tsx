type ValueIndicatorProps = {
  type: 'greater-than' | 'percentage' | null;
};

const ValueIndicator = ({ type }: ValueIndicatorProps) => {
  switch (type) {
    case 'greater-than':
      return <span>&gt;</span>;
    case 'percentage':
      return <span>%</span>;
  }
};

export default ValueIndicator;
