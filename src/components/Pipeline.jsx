import { useMemo, useState } from "react";

const stages = [
  { key: "prospect", label: "Prospect" },
  { key: "discussion", label: "In Discussion" },
  { key: "contracting", label: "Contracting" },
  { key: "active", label: "Active" },
  { key: "hold", label: "On Hold / Inactive" },
];

const seedPartners = [
  { name: "Partner A", stage: "prospect", industry: "Fintech", owner: "Amira", progress: 20 },
  { name: "Partner B", stage: "discussion", industry: "Retail", owner: "Rashid", progress: 45 },
  { name: "Partner C", stage: "contracting", industry: "Healthcare", owner: "Omar", progress: 60 },
  { name: "Partner D", stage: "active", industry: "Logistics", owner: "Lina", progress: 82 },
  { name: "Partner E", stage: "hold", industry: "Fintech", owner: "Ziad", progress: 35 },
  { name: "Partner F", stage: "active", industry: "Energy", owner: "Lina", progress: 74 },
  { name: "Partner G", stage: "discussion", industry: "Fintech", owner: "Amira", progress: 38 },
];

function PartnerCard({ p }) {
  return (
    <a href="#" className="block bg-white rounded-xl border border-slate-200 hover:border-teal-300 hover:shadow transition-all p-3">
      <div className="flex items-center justify-between">
        <div className="font-medium text-slate-900">{p.name}</div>
        <div className="text-xs text-slate-500">{p.industry}</div>
      </div>
      <div className="text-xs text-slate-500">Owner • {p.owner}</div>
      <div className="mt-2 h-2 rounded-full bg-slate-100 overflow-hidden">
        <div className="h-full bg-teal-500" style={{ width: `${p.progress}%` }} />
      </div>
    </a>
  );
}

export default function Pipeline() {
  const [stageFilter, setStageFilter] = useState("all");
  const [industryFilter, setIndustryFilter] = useState("all");
  const partners = seedPartners;

  const industries = useMemo(() => Array.from(new Set(partners.map(p => p.industry))), [partners]);

  const filtered = useMemo(() => {
    return partners.filter(p => (
      (stageFilter === "all" || p.stage === stageFilter) &&
      (industryFilter === "all" || p.industry === industryFilter)
    ));
  }, [partners, stageFilter, industryFilter]);

  return (
    <section className="space-y-3">
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2">
        <select value={stageFilter} onChange={e => setStageFilter(e.target.value)} className="h-9 px-3 rounded-lg border border-slate-200 text-sm">
          <option value="all">All stages</option>
          {stages.map(s => (
            <option key={s.key} value={s.key}>{s.label}</option>
          ))}
        </select>
        <select value={industryFilter} onChange={e => setIndustryFilter(e.target.value)} className="h-9 px-3 rounded-lg border border-slate-200 text-sm">
          <option value="all">All industries</option>
          {industries.map(ind => (
            <option key={ind} value={ind}>{ind}</option>
          ))}
        </select>
        <select className="h-9 px-3 rounded-lg border border-slate-200 text-sm">
          <option>Last 90 days</option>
          <option>Last 30 days</option>
          <option>Year to date</option>
        </select>
      </div>

      {/* Columns */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {stages.map(col => (
          <div key={col.key} className="bg-slate-50 rounded-2xl p-3 border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-slate-700">{col.label}</h3>
              <span className="text-xs text-slate-500">{filtered.filter(p=>p.stage===col.key).length}</span>
            </div>
            <div className="space-y-2 min-h-[140px]">
              {filtered.filter(p => p.stage === col.key).map(p => (
                <PartnerCard key={p.name} p={p} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
