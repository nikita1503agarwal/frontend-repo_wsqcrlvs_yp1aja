import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-28 sm:pt-24 sm:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 text-sm font-medium">
              New • Unified Messaging Hub
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Connect WhatsApp, Slack, Telegram and more in one place
            </h1>
            <p className="mt-6 max-w-xl text-lg text-gray-600">
              Bring every conversation together. Collaborate with your team, automate workflows, and get actionable insights across all your channels — from a single, powerful dashboard.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-white shadow-sm transition hover:bg-gray-800"
              >
                Get started free
              </a>
              <a
                href="#integrations"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-900 transition hover:bg-gray-50"
              >
                See integrations
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">Free 14‑day trial. No credit card required.</p>
          </div>

          <div className="relative h-[420px] w-full rounded-2xl border border-gray-200 bg-white/60 shadow-xl backdrop-blur">
            <Spline
              scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/40 via-transparent to-white/40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
