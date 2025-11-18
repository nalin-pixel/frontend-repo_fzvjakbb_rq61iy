import Navbar from './components/Navbar'
import Hero from './components/Hero'
import KPIs from './components/KPIs'
import Pipeline from './components/Pipeline'
import ActivePartners from './components/ActivePartners'
import RightColumn from './components/RightColumn'
import Investments from './components/Investments'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <Hero />

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* KPI strip */}
        <KPIs />

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <div className="lg:col-span-2 space-y-3">
            <Pipeline />
            <ActivePartners />
          </div>
          <div>
            <RightColumn />
          </div>
        </div>
      </main>

      {/* Bottom investments section */}
      <Investments />

      <footer className="py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Sharakahub. All rights reserved.
      </footer>
    </div>
  )
}

export default App