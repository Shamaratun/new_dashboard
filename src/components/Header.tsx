import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <div className="flex text-md flex-col h-auto bg-gray-50 mt-0">
            {/* Header */}
            <header className="sticky top-0 bg-white shadow p-2 flex justify-between items-center z-10">
                <h1 className="text-2xl font-bold">🏥 Hospital Dashboard</h1>
                <input
                    type="text"
                    placeholder="Search patient..."
                    className="px-3 py-2 border rounded-lg w-64"
                />
            </header>

            {/* Main */}
            <main className="flex-1 px-16 space-y-6 overflow-y-auto inline-grid lg-grid-cols-4 md-grid-cols-4 grid-cols-1 gap-6 pt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 mb-2">
                    <a href="#" className="p-6 bg-white rounded-xl shadow text-center">
                        <h2 className="text-gray-600 font-bold">👥 Total Patients</h2>
                        <p className="text font-normal">12</p>
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
                    <a href="#" className="p-6 bg-white rounded-xl shadow text-center">
                        <h2 className="text-gray-600 font-bold">🏨 Currently Admitted</h2>
                        <p className="text font-normal">8</p>
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
                    <a href="#" className="p-6 bg-white rounded-xl shadow text-center">
                        <h2 className="text-gray-600 font-bold">✅ Released Patients</h2>
                        <p className="text font-normal">5</p>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
                    <a href="#" className="p-6 bg-white rounded-xl shadow text-center">
                        <h2 className="text-gray-600 font-bold">
                            👥 Upcoming Follow-up Patients
                        </h2>
                        <p className="text font-normal">8</p>
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
                    <Link
                        href="/FollowupList"
                        className="p-6 bg-white rounded-xl shadow text-center hover:shadow-lg transition"
                    >
                        <h2 className="text-gray-600 font-bold">
                            👥 Today Follow-up Patients
                        </h2>
                        <p className="text font-normal">5</p>
                    </Link>
                </div>
                {/* Actions */}
                <div
                    className="p-6 bg-white rounded-xl shadow">
                    <h3 className="font-bold mb-4">⚡ Quick Actions</h3>
                    <div className="flex gap-4 flex-wrap">
                        <a href="postForm" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            + Admit Patient
                        </a>
                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                            Release Patient
                        </button>
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                            Schedule Follow-up
                        </button>
                        <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                            View Reports
                        </button>
                    </div>
                </div>

            </main >

            {/* Footer */}
            < footer className="p-4 bg-white border-t text-center text-sm text-gray-500" >
                © {new Date().getFullYear()} Hospital System.All rights reserved.
            </ footer>
        </div >
    );
};

export default Header;