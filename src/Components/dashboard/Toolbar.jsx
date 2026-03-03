const Toolbar = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search scans..."
          className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
        />

        <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition">
          Filter
        </button>

        <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition">
          Columns
        </button>
      </div>

      <button className="px-5 py-2 bg-[#0CC8A8] text-white rounded-lg text-sm font-medium hover:bg-[#0ab79a] transition">
        New Scan
      </button>
    </div>
  );
};

export default Toolbar;