import { TrendingUp, Users, Target, Gauge, CircleCheck } from "lucide-react";

const Card = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="group w-full text-left bg-white rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all p-4 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
  >
    {children}
  </button>
);

export default function KPIs() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {/* Total Partners */}
      <Card>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-semibold text-slate-900">42</div>
            <div className="text-sm text-slate-500">Total partners</div>
          </div>
          <div className="h-10 w-10 rounded-xl grid place-items-center bg-teal-50 text-teal-600 border border-teal-100">
            <Users className="h-5 w-5" />
          </div>
        </div>
      </Card>

      {/* Partners by Stage */}
      <Card>
        <div className="flex items-start justify-between">
          <div>
            <div className="text-sm text-slate-500 mb-2">Partners by stage</div>
            <ul className="text-sm space-y-1">
              <li className="flex justify-between"><span>Prospects</span><span className="font-medium text-slate-900">12</span></li>
              <li className="flex justify-between"><span>In Negotiation</span><span className="font-medium text-slate-900">8</span></li>
              <li className="flex justify-between"><span>Active</span><span className="font-medium text-slate-900">18</span></li>
              <li className="flex justify-between"><span>On Hold</span><span className="font-medium text-slate-900">4</span></li>
            </ul>
          </div>
          {/* mini bars */}
          <div className="w-20 mt-1">
            <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full bg-teal-500" style={{ width: "45%" }} />
            </div>
            <div className="h-2 rounded-full bg-slate-100 mt-2 overflow-hidden">
              <div className="h-full bg-teal-400" style={{ width: "30%" }} />
            </div>
            <div className="h-2 rounded-full bg-slate-100 mt-2 overflow-hidden">
              <div className="h-full bg-teal-300" style={{ width: "65%" }} />
            </div>
            <div className="h-2 rounded-full bg-slate-100 mt-2 overflow-hidden">
              <div className="h-full bg-teal-200" style={{ width: "15%" }} />
            </div>
          </div>
        </div>
      </Card>

      {/* Active Partners */}
      <Card>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-semibold text-slate-900">18</div>
            <div className="text-sm text-slate-500">Currently active</div>
          </div>
          <div className="h-10 w-10 rounded-xl grid place-items-center bg-green-50 text-green-600 border border-green-100">
            <CircleCheck className="h-5 w-5" />
          </div>
        </div>
      </Card>

      {/* Overall Progress */}
      <Card>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-slate-500">Avg. progress</div>
            <div className="text-2xl font-semibold text-slate-900">70%</div>
          </div>
          <div className="relative h-12 w-12">
            <svg viewBox="0 0 36 36" className="h-12 w-12">
              <path className="text-slate-200" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2a16 16 0 1 1 0 32 16 16 0 0 1 0-32" />
              <path className="text-teal-500" strokeWidth="4" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2 a16 16 0 1 1 0 32" strokeDasharray="70 100" />
            </svg>
          </div>
        </div>
      </Card>

      {/* Total Investment */}
      <Card>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-semibold text-slate-900">$250,000</div>
            <div className="text-sm text-slate-500">Invested</div>
          </div>
          <div className="flex items-center gap-1 text-teal-600 text-sm font-medium">
            <TrendingUp className="h-4 w-4" />
            <span>+8.2%</span>
          </div>
        </div>
      </Card>
    </section>
  );
}
