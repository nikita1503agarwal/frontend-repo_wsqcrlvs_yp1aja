import React from 'react';
import Hero from './components/Hero';
import Integrations from './components/Integrations';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-20 w-full bg-white/70 backdrop-blur border-b border-gray-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gray-900" />
            <span className="text-lg font-semibold">Unified</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-gray-600 sm:flex">
            <a href="#integrations" className="hover:text-gray-900">Integrations</a>
            <a href="#" className="hover:text-gray-900">Features</a>
            <a href="#get-started" className="hover:text-gray-900">Pricing</a>
          </nav>
          <div className="hidden gap-3 sm:flex">
            <a href="#" className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50">Sign in</a>
            <a href="#get-started" className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">Start free</a>
          </div>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <Integrations />
        <Features />
        <CTA />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-10">
        <div className="mx-auto max-w-7xl px-6 text-sm text-gray-600">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>© {new Date().getFullYear()} Unified Labs. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-gray-900">Privacy</a>
              <a href="#" className="hover:text-gray-900">Terms</a>
              <a href="#" className="hover:text-gray-900">Status</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
