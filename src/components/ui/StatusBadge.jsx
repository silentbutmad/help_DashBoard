import { TICKET_STATUS, STATUS_COLORS, STATUS_LABELS } from '../../utils/constants';

const StatusBadge = ({ status, className = '' }) => {
  const label = STATUS_LABELS[status] || status;
  const colorClass = STATUS_COLORS[status] || STATUS_COLORS[TICKET_STATUS.OPEN];

  return (
    <span className={`badge ${colorClass} ${className}`}>
      {label}
    </span>
  );
};

export default StatusBadge;