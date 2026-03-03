const StatusBadge = ({ status }) => {
  const styles =
    status === "Completed"
      ? "bg-green-100 text-green-600"
      : status === "Failed"
      ? "bg-red-100 text-red-600"
      : "bg-gray-100 text-gray-600";

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles}`}>
      {status}
    </span>
  );
};

export default StatusBadge;