import React from 'react';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { Sidebar } from '../components/dashboard/Sidebar';
import { Footer } from '../components/dashboard/Footer';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardNavbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8 mt-16">{children}</main>
      </div>
      <Footer />
    </div>
  );
}