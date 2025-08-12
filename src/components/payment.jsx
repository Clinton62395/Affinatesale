import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Payment() {
  const handleProceedToPayment = () => {
    // Logique pour procéder au paiement
    console.log('Proceeding to payment');
  };

  const handleLogout = () => {
    // Logique de déconnexion
    console.log('Logging out');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-8">
           <Link to="/"><img src='/logo.png' alt='logo' className='h-24'/></Link>
          </div>
        </div>

        {/* Message de bienvenue */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Welcome Tobilola</h2>
        </div>

        {/* Bouton Proceed to Payment */}
        <div className="space-y-6">
          <button
            onClick={handleProceedToPayment}
            className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 ease-in-out"
          >
            Proceed to Payment
          </button>

          {/* Lien Logout */}
          <div className="text-center pt-2">
            <span className="text-gray-600 text-sm">
              Logout{' '}
            </span>
            <button
              onClick={handleLogout}
              className="text-green-400 hover:text-green-500 text-sm font-medium transition duration-200"
            >
              Click here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

