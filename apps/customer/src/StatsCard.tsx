// apps/customer/src/StatsCard.tsx
type StatsCardProps = {
  icon: string;
  label: string;
  value: string | number;
  bgColor: string;
  iconBgColor: string;
};

export default function StatsCard({
  icon,
  label,
  value,
  bgColor,
  iconBgColor,
}: StatsCardProps) {
  return (
    <div className={`${bgColor} p-6 rounded-xl shadow`}>
      <div className="flex items-center">
        <div className={`${iconBgColor} p-3 rounded-lg mr-4`}>
          <span className="text-2xl">{icon}</span>
        </div>
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
}
