type Props = {
  id?: string;
  name: string;
  vehicle?: string;
  phone?: string;
  onLocate?: () => void;
};

export default function CarrierCard({ name, vehicle, phone, onLocate }: Props) {
  return (
    <div className="bg-white rounded p-4 shadow">
      <div className="font-bold">{name}</div>
      <div className="text-sm text-gray-600">{vehicle}</div>
      <div className="text-sm mt-2">📱 {phone}</div>
      {onLocate && (
        <button onClick={onLocate} className="mt-3 px-3 py-1 bg-blue-100 text-blue-700 rounded">
          Locate
        </button>
      )}
    </div>
  );
}
