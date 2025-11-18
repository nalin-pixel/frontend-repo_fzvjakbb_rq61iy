const rows = [
  { name: "Partner D", stage: "Active", progress: 82, last: "2025-03-14", next: "QBR prep", owner: "Lina" },
  { name: "Partner F", stage: "Active", progress: 74, last: "2025-03-18", next: "Contract addendum", owner: "Lina" },
  { name: "Partner H", stage: "Active", progress: 68, last: "2025-03-10", next: "Enablement", owner: "Amira" },
  { name: "Partner K", stage: "Active", progress: 55, last: "2025-03-05", next: "Integration review", owner: "Omar" },
];

export default function ActivePartners() {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium text-slate-900">Active Partners</h3>
        <div className="text-sm text-slate-500">Sort by: <button className="text-teal-600 hover:underline">Progress</button></div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-slate-500 border-b border-slate-200">
              <th className="py-2 pr-4">Partner Name</th>
              <th className="py-2 pr-4">Current Stage</th>
              <th className="py-2 pr-4">Progress</th>
              <th className="py-2 pr-4">Last Activity</th>
              <th className="py-2 pr-4">Next Step</th>
              <th className="py-2">Owner</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.name} className="border-b border-slate-100">
                <td className="py-3 pr-4 font-medium text-slate-900">{r.name}</td>
                <td className="py-3 pr-4">{r.stage}</td>
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-2">
                    <div className="w-28 h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full bg-teal-500" style={{ width: `${r.progress}%` }} />
                    </div>
                    <span className="tabular-nums text-slate-700">{r.progress}%</span>
                  </div>
                </td>
                <td className="py-3 pr-4 text-slate-700">{r.last}</td>
                <td className="py-3 pr-4 text-slate-700">{r.next}</td>
                <td className="py-3 text-slate-700">{r.owner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
