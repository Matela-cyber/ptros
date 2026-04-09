// apps/coordinator/src/DataTable.tsx
type DataTableProps = {
  headers: string[];
  data: any[];
};

export default function DataTable({ headers, data }: DataTableProps) {
  return (
    <div className="overflow-x-auto bg-white rounded-lg border border-gray-200 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-3 text-left text-[11px] font-semibold text-gray-600 uppercase tracking-wide"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50 transition-colors">
              {headers.map((header, colIndex) => (
                <td
                  key={colIndex}
                  className="px-4 py-3 whitespace-nowrap text-sm text-gray-700"
                >
                  {row[header.toLowerCase().replace(/ /g, "_")] || "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
