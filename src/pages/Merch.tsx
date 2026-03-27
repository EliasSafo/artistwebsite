import React, { useState, useEffect } from 'react';
import { useDocumentTitle, useLocalStorage } from '../hooks';
import { MerchItemCard } from '../components/MerchItemCard.tsx';
import { CartDrawer } from '../components/CartDrawer.tsx';
import { fetchMerchItems } from '../data/merch';
import { MerchItem, CartItem } from '../types';

export const Merch: React.FC = () => {
  useDocumentTitle('Merch - malaïka');
  const [cart, setCart] = useLocalStorage<CartItem[]>('malaika-cart', []);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [merchItems, setMerchItems] = useState<MerchItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchMerchItems()
      .then((items) => {
        setMerchItems(items);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load merch items.');
        setLoading(false);
      });
  }, []);

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
    <div className="min-h-screen">
      {/* Merch Banner with Background Image - Full Height with Content Overlay */}
      <section
        className="relative overflow-hidden bg-dark-bg min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}Pictures/EMZ_0347_Original.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-dark-bg/60" aria-hidden="true"></div>

        {/* Merch Content Overlay */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">Merch</h1>
            <p className="text-xl text-gray-200 drop-shadow mb-8">Shop exclusive Malaïka merchandise and support the music!</p>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative bg-primary hover:bg-primary-dark text-white font-medium rounded-lg px-6 py-3 transition-colors inline-flex items-center gap-2"
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
          {loading ? (
            <p className="text-gray-200 text-lg text-center">Loading merch...</p>
          ) : error ? (
            <p className="text-red-500 text-lg text-center">{error}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {merchItems.map((item) => (
                <MerchItemCard
                  key={item._id || item.id}
                  item={item}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          )}
        </div>
      </section>

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
