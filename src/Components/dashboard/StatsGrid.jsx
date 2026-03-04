import SeverityCard from "./SeverityCard";

const stats = [
  {
    title: "Critical",
    count: 12,
    change: "+12%",
    color: "text-red-500",
  },
  {
    title: "High",
    count: 28,
    change: "+8%",
    color: "text-orange-500",
  },
  {
    title: "Medium",
    count: 45,
    change: "-4%",
    color: "text-yellow-500",
  },
  {
    title: "Low",
    count: 67,
    change: "+2%",
    color: "text-green-500",
  },
];

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-6 lg:mb-8">
      {stats.map((stat) => (
        <SeverityCard
          key={stat.title}
          title={stat.title}
          count={stat.count}
          change={stat.change}
          color={stat.color}
        />
      ))}
    </div>
  );
};

export default StatsGrid;