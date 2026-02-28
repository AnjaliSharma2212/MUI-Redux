export default function Table({ columns, data }) {
  return (
    <table className="w-full border-collapse border">
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={col.accessor}
              className="border p-2 text-left bg-gray-100"
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((col) => (
              <td key={col.accessor} className="border p-2">
                {row[col.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}