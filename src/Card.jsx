export const Card = ({ children, className = '' }) => (
  <div className={`rounded-lg border bg-white shadow-lg p-6 ${className}`}>
    {children}
  </div>
);

export const CardHeader = ({ children }) => (
  <div className="mb-4">{children}</div>
);

export const CardTitle = ({ children }) => (
  <h3 className="text-xl font-semibold text-gray-800">{children}</h3>
);

export const CardContent = ({ children }) => (
  <div className="text-gray-700">{children}</div>
);
