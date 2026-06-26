const Card = ({ children, className = '', padding = true, hover = false }) => {
  return (
    <div
      className={`
        bg-white rounded-xl border border-gray-200 shadow-sm
        dark:bg-gray-900 dark:border-gray-800
        ${padding ? 'p-6' : ''}
        ${hover ? 'transition-shadow hover:shadow-md' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;