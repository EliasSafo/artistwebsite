import React from 'react';
import { MerchItem } from '../types';
import { Card } from './Card';
import { Button } from './Button';

interface MerchItemCardProps {
  item: MerchItem;
  onAddToCart: (item: MerchItem, size?: string) => void;
}

export const MerchItemCard: React.FC<MerchItemCardProps> = ({ item, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = React.useState<string>(
    item.sizes?.[0] || ''
  );

  const handleAddToCart = () => {
    onAddToCart(item, item.sizes ? selectedSize : undefined);
  };

  return (
    <Card hover className="h-full flex flex-col">
      {/* Image */}
      <div className="mb-4 overflow-hidden rounded-lg">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Info */}
      <div className="flex-1">
        <h3 className="text-white font-bold text-lg mb-2">{item.name}</h3>
        <p className="text-primary text-xl font-bold mb-4">${item.price}</p>

        {/* Size Selector */}
        {item.sizes && item.sizes.length > 0 && (
          <div className="mb-4">
            <label className="text-gray-400 text-sm mb-2 block">Size:</label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full bg-dark-bg border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Select size"
            >
              {item.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Add to Cart Button */}
      <Button
        variant="primary"
        size="md"
        className="w-full"
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>
    </Card>
  );
};

