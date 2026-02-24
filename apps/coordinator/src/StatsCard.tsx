// apps/coordinator/src/StatsCard.tsx
type StatsCardProps = {
  title: string;
  value: string | number;
  icon: string;
  color: string;
};

export default function StatsCard({
  title,
  value,
  icon,
  color,
}: StatsCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-t-4 border-primary">
      <div className="flex items-center">
        <div className={`p-3 ${color} rounded-lg mr-4 shadow-sm`}>
          <span className="text-2xl">{icon}</span>
        </div>
        <div>
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-800">{value}</p>
        </div>
      </div>
    </div>
  );
}
