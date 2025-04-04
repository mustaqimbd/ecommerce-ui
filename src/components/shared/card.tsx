import React, { useState } from "react";
import { Star, Heart, Eye } from "lucide-react";

interface Product {
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  colors: string[];
  isNew?: boolean;
}

const Card: React.FC<{ product: Product }> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="p-4 border rounded-lg shadow-md">
      {product.isNew && <span className="bg-green-500 text-white px-2 py-1 text-xs rounded">NEW</span>}
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-40 object-contain" />
        <div className="absolute top-2 right-2 flex gap-2">
          <button className="p-1 bg-white rounded-full shadow"><Heart size={16} /></button>
          <button className="p-1 bg-white rounded-full shadow"><Eye size={16} /></button>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mt-2">{product.name}</h3>
        <p className="text-red-500 font-bold">${product.price}</p>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={14} className={i < product.rating ? "text-yellow-500" : "text-gray-300"} />
          ))}
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>
        <div className="flex gap-2 mt-2">
          {product.colors.map((color) => (
            <button
              key={color}
              className={`w-5 h-5 rounded-full border ${selectedColor === color ? "border-black" : "border-gray-300"}`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
