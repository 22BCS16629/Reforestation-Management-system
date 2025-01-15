import React from 'react';
import ForestMap from './components/ForestMap';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="hero-gradient text-white">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Forest Monitor</h1>
          <div className="space-x-6">
            <a href="#dashboard" className="hover:text-gray-200">Dashboard</a>
            <a href="#map" className="hover:text-gray-200">Map</a>
            <a href="#reports" className="hover:text-gray-200">Reports</a>
            <a href="#impact" className="hover:text-gray-200">Impact</a>
          </div>
        </nav>
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-5xl font-bold mb-4">Reforestation Management System</h2>
          <p className="text-xl mb-8">Track forest growth and monitor environmental impact in real-time</p>
          <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </header>

      {/* Dashboard Section */}
      <section id="dashboard" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Real-Time Forest Monitoring</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
              <h3 className="text-xl font-semibold mb-2">Trees Planted</h3>
              <p className="text-4xl font-bold text-green-700">1,234</p>
              <p className="text-gray-600">Last 30 days</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
              <h3 className="text-xl font-semibold mb-2">Growth Rate</h3>
              <p className="text-4xl font-bold text-green-700">56.7%</p>
              <p className="text-gray-600">Above target</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
              <h3 className="text-xl font-semibold mb-2">CO₂ Absorbed</h3>
              <p className="text-4xl font-bold text-green-700">2.3t</p>
              <p className="text-gray-600">This month</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
              <h3 className="text-xl font-semibold mb-2">Area Covered</h3>
              <p className="text-4xl font-bold text-green-700">89ha</p>
              <p className="text-gray-600">Total area</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Forest Growth Map</h2>
          <ForestMap />
        </div>
      </section>

      {/* Rest of the sections remain unchanged */}
      {/* Reports Section */}
      <section id="reports" className="py-20">
        {/* ... (previous reports section content) ... */}
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-white">
        {/* ... (previous impact section content) ... */}
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        {/* ... (previous footer content) ... */}
      </footer>
    </div>
  );
}

export default App;