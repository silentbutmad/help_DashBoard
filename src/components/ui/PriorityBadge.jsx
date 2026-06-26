import { PRIORITY, PRIORITY_COLORS, PRIORITY_LABELS } from '../../utils/constants';

const PriorityBadge = ({ priority, className = '' }) => {
  const label = PRIORITY_LABELS[priority] || priority;
  const colorClass = PRIORITY_COLORS[priority] || PRIORITY_COLORS[PRIORITY.MEDIUM];

  return (
    <span className={`badge ${colorClass} ${className}`}>
      {label}
    </span>
  );
};

export default PriorityBadge;