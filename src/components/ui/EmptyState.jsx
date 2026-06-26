import { LucideIcon } from 'lucide-react';

const EmptyState = ({ 
  icon: Icon, 
  title, 
  description, 
  action, 
  actionLabel 
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center">
      {Icon && (
        <div className="w-16 h-16 mb-4 text-gray-400 dark:text-gray-600">
          <Icon className="w-full h-full" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 max-w-md">
        {description}
      </p>
      {action && actionLabel && (
        <button onClick={action} className="btn-primary">
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export default EmptyState;