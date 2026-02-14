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
    <div className="bg-white p-6 rounded-xl shadow">
      <div className="flex items-center">
        <div className={`p-3 ${color} rounded-lg mr-4`}>
          <span className="text-2xl">{icon}</span>
        </div>
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
}
