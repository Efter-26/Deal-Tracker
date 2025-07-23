"use client";

import { useEffect, useState } from "react";
import DealItem from "../components/DealItem";
import { fetchDeals } from "../utils/fetchDeals";

export default function HomePage() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    async function getDeals() {
      const data = await fetchDeals();
      setDeals(data);
    }
    getDeals();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white flex items-center justify-center py-12 px-6">
      <main className="w-full max-w-4xl bg-gradient-to-br from-green-100 to-green-300 text-gray-900 rounded-2xl shadow-2xl p-12 space-y-10">
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-extrabold text-green-800 tracking-tight drop-shadow-md">
            Deal Tracker
          </h1>
          <p className="text-xl font-medium text-gray-700 max-w-3xl mx-auto">
            Track every opportunity, monitor deal status.
          </p>
        </div>

        <div className="space-y-5">
          {deals.length === 0 ? (
            <p className="text-center text-lg font-semibold text-gray-600">No deals found.</p>
          ) : (
            deals.map((deal) => <DealItem key={deal.id} deal={deal} />)
          )}
        </div>
      </main>
    </div>
  );
}
