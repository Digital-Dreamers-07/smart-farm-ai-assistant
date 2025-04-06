import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (

    <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-green-700/70 z-10" />
        <div className="h-[500px] bg-cover bg-center" style={{ background: "url('../assets/field.mp4')" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white p-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">Smart Farming Solutions</h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mb-8">
            Empowering farmers with AI-driven insights for better crop management and higher yields
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/recommendations"
              style={{ textDecoration: "none" }}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/market-prices"
              style={{ textDecoration: "none",color:"#166534" }}
              className="bg-white hover:bg-gray-100 text-green-800 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View Market Prices
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Home;
