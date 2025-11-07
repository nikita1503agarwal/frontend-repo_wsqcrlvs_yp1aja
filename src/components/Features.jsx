import React from 'react';
import { Sparkles, Workflow, BarChart3, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: 'Unified Inbox',
    desc: 'See every message from every channel in one clean, filterable inbox.',
    icon: Sparkles,
  },
  {
    title: 'Automations',
    desc: 'Build workflows to auto-tag, route, and respond based on rules.',
    icon: Workflow,
  },
  {
    title: 'Analytics',
    desc: 'Track response times, sentiment, and agent performance across channels.',
    icon: BarChart3,
  },
  {
    title: 'Enterprise-grade Security',
    desc: 'Role-based controls, audit logs, and encryption in transit & at rest.',
    icon: ShieldCheck,
  },
];

const Features = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Everything you need to scale conversations</h2>
          <p className="mt-3 text-gray-600">A modern toolset for support, sales, and community teams.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
