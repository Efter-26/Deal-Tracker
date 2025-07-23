'use client';

import { useState } from 'react';

const statusOptions = ['Lead', 'Negotiating', 'Closed - Won', 'Closed - Lost'];

export default function DealItem({ deal }) {
  const [status, setStatus] = useState(deal.status);

  return (
    <div className="bg-white dark:bg-[#121212] w-full max-w-2xl mx-auto p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 hover:shadow-lg transition duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex-1">
          <h2 className="text-xl sm:text-xl font-semibold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 inline-block px-4 py-2 rounded-md shadow-md">
            {deal.dealName}
          </h2>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            Status: <span className="font-medium text-blue-600 dark:text-blue-400">{status}</span>
          </p>
        </div>
        <div>
          <select
            className="mt-2 sm:mt-0 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-green-200 text-gray-900 dark:text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            {statusOptions.map((option) => (
              <option key={option} value={option} className="text-gray-900">
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
