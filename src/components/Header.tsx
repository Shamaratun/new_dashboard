"use client";

import Link from "next/link";
import React from "react";

type StatCardProps = {
  title: string;
  value: number | string;
  icon?: string;
  href?: string;
  onClick?: () => void;
};

const StatCard = ({ title, value, icon, href, onClick }: StatCardProps) => {
  const content = (
    <div
      className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition transform hover:scale-105 cursor-pointer flex flex-col items-center text-center"
    >
      <h2 className="text-gray-600 font-semibold flex items-center gap-2">
        {icon && <span>{icon}</span>} {title}
      </h2>
      <p className="text-xl font-bold mt-2">{value}</p>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block w-full">
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className="w-full text-left">
      {content}
    </button>
  );
};

const ActionButton = ({
  children,
  color,
  href,
  onClick,
}: {
  children: React.ReactNode;
  color: string;
  href?: string;
  onClick?: () => void;
}) => {
  const baseClass =
    "px-4 py-2 rounded-lg text-white font-medium shadow transition transform hover:scale-105";
  const colorClass = {
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
    indigo: "bg-indigo-600 hover:bg-indigo-700",
    orange: "bg-orange-600 hover:bg-orange-700",
  }[color];

  const btn = (
    <span className={`${baseClass} ${colorClass}`}>{children}</span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {btn}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClass} ${colorClass}`}>
      {children}
    </button>
  );
};

const Header = () => {
  return (

    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 bg-white shadow px-6 py-3 flex flex-col md:flex-row justify-between items-center gap-3 z-10">
        <h1 className="text-2xl font-bold text-gray-800">
          🏥 Hospital Dashboard
        </h1>
        <input
          type="text"
          placeholder="Search patient..."
          className="px-3 py-2 border rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </header>

      {/* Main */}
      <main className="flex-1 px-6 lg:px-16 py-6 space-y-8 overflow-y-auto">
        {/* Stats Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Total Patients" value={12} icon="👥" onClick={() => alert("Viewing Total Patients")} href="/admissionTable"  /><br />
          <StatCard title="Currently Admitted" value={8} icon="🏨" onClick={() => alert("Viewing Admitted Patients")} href="/notReleasedTable"  /><br />
          <StatCard title="Released Patients" value={5} icon="✅" href="/released" /><br />
          <StatCard title="Upcoming Follow-ups" value={8} icon="📅" href="/upcoming-followups" /><br />
          <StatCard title="Today Follow-ups" value={5} icon="👥" href="/followupList" /><br />
        </section>

        {/* Actions */}
        <section className="p-6 bg-white rounded-xl shadow">
          <h3 className="font-bold mb-4 text-lg">⚡ Quick Actions</h3>
          <div className="flex flex-wrap gap-4">
            <ActionButton color="blue" href="/postForm">
              + Admit Patient
            </ActionButton>
            <ActionButton color="green" onClick={() => alert("Patient Released!")}>
              Release Patient
            </ActionButton>
            <ActionButton color="indigo" href="/scheduleFollowup">
              Schedule Follow-up
            </ActionButton>
            <ActionButton color="orange" href="/reports">
              View Reports
            </ActionButton>
          </div>
        </section>
      </main>

     
    </div>
  );
};

export default Header;