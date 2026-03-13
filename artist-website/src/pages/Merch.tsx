import React, { useState } from 'react';
import { useDocumentTitle, useLocalStorage } from '../hooks';
import { SectionTitle } from '../components/SectionTitle';
import { MerchItemCard } from '../components/MerchItemCard';
import { CartDrawer } from '../components/CartDrawer';
import { merchItems } from '../data/merch';
import { MerchItem, CartItem } from '../types';

export const Merch: React.FC = () => {
  useDocumentTitle('Merch - MALAIKA');
  const [cart, setCart] = useLocalStorage<CartItem[]>('malaika-cart', []);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const handleAddToCart = (item: MerchItem, size?: string) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) =>
        cartItem.id === item.id &&
        cartItem.selectedSize === size
    );

    if (existingItemIndex > -1) {
      // Update quantity
      const newCart = [...cart];
      newCart[existingItemIndex].quantity += 1;
      setCart(newCart);
    } else {
      // Add new item
      setCart([...cart, { ...item, quantity: 1, selectedSize: size }]);
    }

    // Show notification
    setNotification(`Added ${item.name} to cart`);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      handleRemoveItem(id);
    } else {
      setCart(cart.map((item) => (item.id === id ? { ...item, quantity } : item)));
    }
  };

  const handleRemoveItem = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    // In a real app, this would redirect to a payment processor
    window.open('https://shop.example.com/checkout', '_blank');
    setCart([]);
    setIsCartOpen(false);
    setNotification('Redirecting to checkout...');
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex justify-between items-start mb-8">
        <SectionTitle subtitle="Official NOVA merchandise">
          Shop
        </SectionTitle>

        {/* Cart Button */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative bg-primary hover:bg-primary-dark text-white font-medium rounded-lg px-6 py-3 transition-colors flex items-center gap-2"
          aria-label={`Shopping cart with ${cart.length} items`}
        >
          🛒 Cart
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </button>
      </div>

      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-20 right-4 bg-primary text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          {notification}
        </div>
      )}

      {/* Merch Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {merchItems.map((item) => (
          <MerchItemCard
            key={item.id}
            item={item}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
    </div>
  );
};
