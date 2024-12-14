import React from 'react';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { Users } from 'lucide-react';

export function Agents() {
  return (
    <DashboardLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center mb-6">
          <Users className="h-6 w-6 text-indigo-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900">Agents</h2>
        </div>
        {/* Add your agents list component here */}
        <p className="text-gray-600">Agents management interface goes here.</p>
      </div>
    </DashboardLayout>
  );
}