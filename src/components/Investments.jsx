const money = [
  { label: "Jan", value: 18 },
  { label: "Feb", value: 22 },
  { label: "Mar", value: 26 },
  { label: "Apr", value: 24 },
  { label: "May", value: 30 },
  { label: "Jun", value: 28 },
];

const hours = [
  { label: "Partner D", value: 120 },
  { label: "Partner F", value: 95 },
  { label: "Partner B", value: 80 },
  { label: "Partner C", value: 60 },
];

export default function Investments() {
  const totalInvested = 250;
  const totalHours = hours.reduce((a, b) => a + b.value, 0);
  const totalAssets = 86;
  const sharedAssets = 48;

  return (
    <section className="mt-4">
      <h2 className="sr-only">Investments & Resources Overview</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-4 mb-3">
          <h3 className="font-medium text-slate-900 mb-3">Investments & Resources Overview</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {/* Money Invested */}
            <div className="rounded-xl border border-slate-200 p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-sm text-slate-500">Total Invested</div>
                  <div className="text-2xl font-semibold text-slate-900">${totalInvested}k</div>
                </div>
                <select className="h-9 px-2 rounded-lg border border-slate-200 text-sm">
                  <option>Last 30 days</option>
                  <option>YTD</option>
                  <option>All time</option>
                </select>
              </div>
              <div className="mt-2 h-28 grid grid-cols-6 items-end gap-2">
                {money.map(m => (
                  <div key={m.label} className="bg-teal-500/80 hover:bg-teal-500 transition-colors rounded-md" style={{ height: `${m.value}px` }} title={`$${m.value}k`} />
                ))}
              </div>
              <div className="mt-2 text-xs text-slate-500">Investment over time</div>
            </div>

            {/* Hours Invested */}
            <div className="rounded-xl border border-slate-200 p-4">
              <div>
                <div className="text-sm text-slate-500">Total Hours Spent</div>
                <div className="text-2xl font-semibold text-slate-900">{totalHours}h</div>
                <div className="text-xs text-slate-500">This quarter</div>
              </div>
              <div className="mt-3 space-y-2">
                {hours.map(h => (
                  <div key={h.label}>
                    <div className="text-sm text-slate-700 mb-1">{h.label}</div>
                    <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full bg-teal-500" style={{ width: `${(h.value/140)*100}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-2 text-xs text-slate-500">Top time-consuming partners</div>
            </div>

            {/* Assets Used */}
            <div className="rounded-xl border border-slate-200 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-500">Total Assets</div>
                  <div className="text-2xl font-semibold text-slate-900">{totalAssets}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500">Shared</div>
                  <div className="text-2xl font-semibold text-slate-900">{sharedAssets}</div>
                </div>
              </div>
              <div className="mt-3 h-3 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-teal-500" style={{ width: `${(sharedAssets/totalAssets)*100}%` }} />
              </div>
              <div className="mt-2 text-xs text-slate-500">Asset usage (internal vs shared)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
