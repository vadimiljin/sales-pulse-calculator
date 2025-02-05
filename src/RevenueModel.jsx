import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './Card';

export const RevenueModel = () => {
  const [users, setUsers] = useState(5000);
  const [months, setMonths] = useState(6);
  const [conversionRate, setConversionRate] = useState(5);
  const [basePrice, setBasePrice] = useState(25);
  const [adIncome, setAdIncome] = useState(0.67);
  
  const calculations = {
    freeUsers: Math.floor(users * (1 - conversionRate / 100)),
    paidUsers: Math.floor(users * (conversionRate / 100)),
    subscriptionRevenue: Math.floor(users * (conversionRate / 100) * basePrice),
    adRevenue: Math.floor(users * (1 - conversionRate / 100) * adIncome),
    totalRevenue: Math.floor((users * (conversionRate / 100) * basePrice) + (users * (1 - conversionRate / 100) * adIncome))
  };

  return (
    <Card className="w-full max-w-[90%] lg:max-w-[1400px] mx-auto mt-8 px-12 flex flex-col">
      <CardHeader>
        <CardTitle>Sales-Pulse Revenue Projection Calculator</CardTitle>
        <p className="text-gray-500">by Vadim Iljin</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          <div>
            <label className="block font-medium">Total Users</label>
            <input 
              type="range" 
              min="1000" 
              max="10000" 
              value={users} 
              onChange={(e) => setUsers(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-gray-600">{users}</p>
          </div>
          <div>
            <label className="block font-medium">Time Period (months)</label>
            <input 
              type="range" 
              min="1"
              max="12"
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-gray-600">{months} months</p>
          </div>
          <div>
            <label className="block font-medium">Monthly Paying Users (%)</label>
            <input 
              type="range" 
              min="1" 
              max="20" 
              value={conversionRate} 
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-gray-600">{conversionRate}%</p>
          </div>
          <div>
            <label className="block font-medium">Monthly subscription price ($)</label>
            <input 
              type="range" 
              min="25" 
              max="200" 
              value={basePrice} 
              onChange={(e) => setBasePrice(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-gray-600">${basePrice}</p>
          </div>
          <div className="sm:col-span-2">
            <label className="block font-medium">Ad income per free user ($)</label>
            <input 
              type="range" 
              min="0" 
              max="2" 
              step="0.1"
              value={adIncome} 
              onChange={(e) => setAdIncome(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-gray-600">${adIncome}</p>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1200px] mx-auto">
          <div className="p-6 border rounded-lg bg-white shadow-lg flex-1">
            <h3 className="font-bold mb-2">Monthly Metrics</h3>
            <div className="space-y-2">
              <p>Free Users: {calculations.freeUsers}</p>
              <p>Paid Users: {calculations.paidUsers}</p>
              <p>Monthly subscription Revenue: ${calculations.subscriptionRevenue}</p>
              <p>Ad Revenue: ${calculations.adRevenue}</p>
              <p className="font-bold">Total Monthly Revenue: ${calculations.totalRevenue}</p>
            </div>
          </div>
          <div className="p-6 border rounded-lg bg-white shadow-lg flex-1">
            <h3 className="font-bold mb-2">{months}-Month Projection</h3>
            <div className="space-y-2">
              <p>Total Revenue: ${calculations.totalRevenue * months}</p>
              <p>Team Share (25%): ${(calculations.totalRevenue * months * 0.25).toFixed(0)}</p>
              <p>Owner Share (75%): ${(calculations.totalRevenue * months * 0.75).toFixed(0)}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
