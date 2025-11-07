import React from 'react';

const CTA = () => {
  return (
    <section id="get-started" className="py-20">
      <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white px-8 py-12 text-center shadow-sm">
        <h3 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Bring every channel together today</h3>
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          Start your free trial, connect your first channels, and see how much simpler your customer conversations can be.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#"
            className="inline-flex w-full items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-white shadow-sm transition hover:bg-gray-800 sm:w-auto"
          >
            Create your workspace
          </a>
          <p className="text-sm text-gray-500">No credit card required</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
