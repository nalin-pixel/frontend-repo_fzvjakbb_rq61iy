import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative h-[260px] md:h-[320px] bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-4">
        <div className="bg-white/80 backdrop-blur rounded-2xl border border-slate-200 shadow-sm p-3">
          <div className="text-xs text-slate-500">Welcome to</div>
          <div className="text-xl md:text-2xl font-semibold text-slate-900">Sharakahub Partnerships Dashboard</div>
        </div>
      </div>
    </section>
  );
}
