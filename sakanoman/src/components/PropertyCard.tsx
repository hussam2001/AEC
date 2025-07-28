import React from 'react';
import { 
  MapPinIcon, 
  CheckBadgeIcon,
  ChatBubbleLeftRightIcon,
  StarIcon,
  HeartIcon,
  ShareIcon
} from '@heroicons/react/24/outline';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  type: string;
  gender: string;
  furnished: boolean;
  image: string;
  rating: number;
  verified: boolean;
}

interface PropertyCardProps {
  property: Property;
  onWhatsAppClick?: (property: Property) => void;
  onDetailsClick?: (property: Property) => void;
  onFavoriteClick?: (property: Property) => void;
  onShareClick?: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onWhatsAppClick,
  onDetailsClick,
  onFavoriteClick,
  onShareClick
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow property-card">
      <div className="relative">
        <div className="w-full h-48 bg-gradient-to-r from-blue-400 to-purple-500"></div>
        <div className="absolute top-4 left-4 flex space-x-2">
          {property.verified && (
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
              <CheckBadgeIcon className="w-3 h-3 mr-1" />
              Verified
            </span>
          )}
          <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
            {property.type}
          </span>
        </div>
        <div className="absolute top-4 right-4 flex space-x-2">
          <button 
            onClick={() => onFavoriteClick?.(property)}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
          >
            <HeartIcon className="w-4 h-4 text-gray-600" />
          </button>
          <button 
            onClick={() => onShareClick?.(property)}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
          >
            <ShareIcon className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{property.title}</h3>
          <div className="flex items-center space-x-1">
            <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{property.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPinIcon className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-blue-600">
            {property.price} <span className="text-sm text-gray-500">OMR/month</span>
          </div>
          <span className="text-sm bg-gray-100 px-2 py-1 rounded">{property.gender}</span>
        </div>
        
        <div className="flex space-x-2">
          <button 
            onClick={() => onWhatsAppClick?.(property)}
            className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
          >
            <ChatBubbleLeftRightIcon className="w-4 h-4" />
            <span>WhatsApp</span>
          </button>
          <button 
            onClick={() => onDetailsClick?.(property)}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;