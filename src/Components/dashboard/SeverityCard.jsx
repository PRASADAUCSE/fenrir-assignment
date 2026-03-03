const SeverityCard = ({ title, count, change, color }) => {
  const isNegative = change.includes("-");

  return (
    <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-md transition-all duration-300">

      {/* Title */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        {title}
      </p>

      {/* Count */}
      <h2 className={`text-3xl font-semibold ${color}`}>
        {count}
      </h2>

      {/* Change */}
      <p
        className={`text-xs mt-3 font-medium ${
          isNegative ? "text-red-500" : "text-green-500"
        }`}
      >
        {change}
      </p>
    </div>
  );
};

export default SeverityCard;