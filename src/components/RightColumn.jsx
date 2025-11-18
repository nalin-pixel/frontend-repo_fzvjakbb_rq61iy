import { AlertTriangle } from "lucide-react";

const bands = [
  { label: "0–25%", value: 4 },
  { label: "26–50%", value: 9 },
  { label: "51–75%", value: 12 },
  { label: "76–100%", value: 7 },
];

const fastest = [
  { name: "Partner D", progress: 82, stage: "Active" },
  { name: "Partner F", progress: 74, stage: "Active" },
  { name: "Partner C", progress: 60, stage: "Contracting" },
];

const risks = [
  { name: "Partner G", reason: "No activity in 30 days" },
  { name: "Partner E", reason: "Stalled in discussion" },
  { name: "Partner B", reason: "Contract review delayed" },
];

function Bars() {
  const max = Math.max(...bands.map(b => b.value));
  return (
    <div className="space-y-2">
      {bands.map(b => (
        <div key={b.label} className="flex items-center gap-3">
          <div className="w-20 text-xs text-slate-600">{b.label}</div>
          <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
            <div className="h-full bg-teal-500" style={{ width: `${(b.value/max)*100}%` }} />
          </div>
          <div className="w-6 text-xs text-slate-600 tabular-nums text-right">{b.value}</div>
        </div>
      ))}
    </div>
  );
}

export default function RightColumn() {
  return (
    <div className="space-y-3">
      <section className="bg-white rounded-2xl border border-slate-200 p-4">
        <h3 className="font-medium text-slate-900 mb-3">Progress Overview</h3>
        <Bars />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <h4 className="text-sm text-slate-500 mb-2">Top 3 fastest-moving partners</h4>
            <ul className="space-y-1 text-sm">
              {fastest.map(f => (
                <li key={f.name} className="flex items-center justify-between">
                  <span className="text-slate-800">{f.name}</span>
                  <span className="text-slate-600">{f.progress}% • {f.stage}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm text-slate-500 mb-2">At-risk partners</h4>
            <ul className="space-y-1 text-sm">
              {risks.map(r => (
                <li key={r.name} className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-amber-700"><AlertTriangle className="h-4 w-4" />{r.name}</span>
                  <span className="text-slate-600">{r.reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-2xl border border-slate-200 p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-slate-900">Next Steps Calendar</h3>
          <div className="inline-flex rounded-lg border border-slate-200 overflow-hidden">
            <button className="px-3 py-1.5 text-sm hover:bg-slate-50">Month</button>
            <button className="px-3 py-1.5 text-sm bg-slate-50 border-x border-slate-200">Week</button>
            <button className="px-3 py-1.5 text-sm hover:bg-slate-50">List</button>
          </div>
        </div>
        {/* Simple faux-calendar grid */}
        <div className="mt-3 grid grid-cols-7 gap-2">
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="h-24 rounded-xl border border-slate-200 bg-slate-50 p-2 text-xs text-slate-600">
              <div className="font-medium text-slate-700">{i + 1}</div>
              {i === 1 && <div className="mt-1 text-teal-700 bg-teal-50 border border-teal-100 rounded px-1">Review w/ Partner D — 10:00</div>}
              {i === 4 && <div className="mt-1 text-indigo-700 bg-indigo-50 border border-indigo-100 rounded px-1">Contract deadline — 16:00</div>}
              {i === 7 && <div className="mt-1 text-amber-700 bg-amber-50 border border-amber-100 rounded px-1">Deliverable due — 12:00</div>}
            </div>
          ))}
        </div>
        <div className="mt-3">
          <h4 className="text-sm text-slate-500 mb-1">Upcoming 7 days</h4>
          <ul className="text-sm space-y-1">
            <li>Kickoff with Partner B — Tomorrow, 09:00</li>
            <li>Enablement for Partner H — Thu, 14:00</li>
            <li>QBR with Partner D — Mon, 11:30</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
