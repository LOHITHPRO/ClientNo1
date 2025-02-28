import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="pt-16 min-h-screen bg-[#1a0f00] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#d4a574] mb-4">Your cart is empty</h2>
          <p className="text-gray-400">Add some delicious items to your cart!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-[#1a0f00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-[#d4a574] mb-8">Your Cart</h1>

        <div className="bg-[#2a1f10] rounded-lg p-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-4 border-b border-[#d4a574]/20 last:border-0"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#d4a574]">{item.name}</h3>
                <p className="text-white">₹{item.price} × {item.quantity}</p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 text-[#d4a574] hover:text-[#e5b584] transition-colors"
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                  <span className="text-white w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 text-[#d4a574] hover:text-[#e5b584] transition-colors"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-1 text-red-500 hover:text-red-400 transition-colors"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 pt-6 border-t border-[#d4a574]/20">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-semibold text-[#d4a574]">Total:</span>
              <span className="text-2xl font-bold text-white">₹{total}</span>
            </div>

            <div className="flex justify-between">
              <button
                onClick={clearCart}
                className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Clear Cart
              </button>
              <button
                onClick={() => alert('Checkout functionality coming soon!')}
                className="px-6 py-3 bg-[#d4a574] text-white rounded-lg hover:bg-[#e5b584] transition-colors"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;