"use client";

import { useState } from "react";
import { Users, Calendar, DollarSign, Package } from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("bookings");

  const mockBookings = [
    { id: 1, name: "Priya Sharma", service: "7 Chakra Complete", date: "2026-05-20", status: "Confirmed", amount: "₹7,999" },
    { id: 2, name: "Rahul Verma", service: "Reiki Healing", date: "2026-05-21", status: "Pending", amount: "₹800" },
    { id: 3, name: "Neha Gupta", service: "Webinar", date: "2026-05-22", status: "Confirmed", amount: "₹199" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-32 bg-black/40">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-4xl font-cinzel text-gold-light mb-8">Admin Dashboard</h1>
        
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-glass-purple p-6 rounded-lg border border-royal-purple/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-cormorant text-cream/70 text-lg">Total Bookings</h3>
              <Calendar className="text-gold-light w-5 h-5" />
            </div>
            <p className="font-cinzel text-3xl text-cream">124</p>
          </div>
          <div className="bg-glass-purple p-6 rounded-lg border border-royal-purple/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-cormorant text-cream/70 text-lg">Revenue (Monthly)</h3>
              <DollarSign className="text-gold-light w-5 h-5" />
            </div>
            <p className="font-cinzel text-3xl text-cream">₹45,200</p>
          </div>
          <div className="bg-glass-purple p-6 rounded-lg border border-royal-purple/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-cormorant text-cream/70 text-lg">Active Clients</h3>
              <Users className="text-gold-light w-5 h-5" />
            </div>
            <p className="font-cinzel text-3xl text-cream">86</p>
          </div>
          <div className="bg-glass-purple p-6 rounded-lg border border-royal-purple/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-cormorant text-cream/70 text-lg">Programs Sold</h3>
              <Package className="text-gold-light w-5 h-5" />
            </div>
            <p className="font-cinzel text-3xl text-cream">32</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8 border-b border-white/10 pb-4">
          <button 
            className={`font-cinzel tracking-widest uppercase text-sm ${activeTab === 'bookings' ? 'text-gold-light' : 'text-cream/50'}`}
            onClick={() => setActiveTab('bookings')}
          >
            Recent Bookings
          </button>
          <button 
            className={`font-cinzel tracking-widest uppercase text-sm ${activeTab === 'messages' ? 'text-gold-light' : 'text-cream/50'}`}
            onClick={() => setActiveTab('messages')}
          >
            Messages
          </button>
        </div>

        {/* Content */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <h2 className="text-2xl font-cinzel text-cream mb-6">Recent Bookings</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-cormorant text-lg text-cream/80">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-4 font-cinzel text-sm text-gold-light/70 uppercase">ID</th>
                  <th className="pb-4 font-cinzel text-sm text-gold-light/70 uppercase">Client Name</th>
                  <th className="pb-4 font-cinzel text-sm text-gold-light/70 uppercase">Service</th>
                  <th className="pb-4 font-cinzel text-sm text-gold-light/70 uppercase">Date</th>
                  <th className="pb-4 font-cinzel text-sm text-gold-light/70 uppercase">Amount</th>
                  <th className="pb-4 font-cinzel text-sm text-gold-light/70 uppercase">Status</th>
                </tr>
              </thead>
              <tbody>
                {mockBookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4">#{booking.id}</td>
                    <td className="py-4 text-cream font-bold">{booking.name}</td>
                    <td className="py-4">{booking.service}</td>
                    <td className="py-4">{booking.date}</td>
                    <td className="py-4 text-gold-deep">{booking.amount}</td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${booking.status === 'Confirmed' ? 'bg-green-900/50 text-green-400' : 'bg-yellow-900/50 text-yellow-400'}`}>
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
