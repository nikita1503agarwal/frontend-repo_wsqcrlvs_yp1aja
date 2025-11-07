import React from 'react';
import { MessageSquare, Slack, Send, MessageCircle } from 'lucide-react';

const integrations = [
  { name: 'WhatsApp', icon: MessageCircle, color: 'from-emerald-500 to-emerald-400' },
  { name: 'Slack', icon: Slack, color: 'from-purple-500 to-fuchsia-500' },
  { name: 'Telegram', icon: Send, color: 'from-sky-500 to-blue-500' },
  { name: 'Messenger', icon: MessageSquare, color: 'from-indigo-500 to-violet-500' },
];

const Integrations = () => {
  return (
    <section id="integrations" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Plug-and-play integrations</h2>
            <p className="mt-2 text-gray-600">Connect your channels in minutes. No code required.</p>
          </div>
          <a href="#get-started" className="hidden text-sm font-medium text-gray-900 hover:underline sm:inline">
            Explore all integrations →
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {integrations.map(({ name, icon: Icon, color }) => (
            <div key={name} className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${color} text-white shadow`}> 
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{name}</h3>
              <p className="mt-1 text-sm text-gray-600">Secure, OAuth-based connection with scoped permissions.</p>
              <div className="pointer-events-none absolute -bottom-12 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-gray-100 to-transparent opacity-0 blur-2xl transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
