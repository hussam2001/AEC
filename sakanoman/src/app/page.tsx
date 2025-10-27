'use client';

import React, { useState } from 'react';
import { 
  MagnifyingGlassIcon, 
  MapPinIcon, 
  HomeIcon, 
  UserGroupIcon,
  CheckBadgeIcon,
  ChatBubbleLeftRightIcon,
  StarIcon,
  HeartIcon,
  ShareIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const [searchFilters, setSearchFilters] = useState({
    city: '',
    propertyType: '',
    priceRange: '',
    gender: '',
    furnished: ''
  });

  const cities = ['Muscat', 'Sohar', 'Salalah', 'Nizwa', 'Sur', 'Ibri'];
  const propertyTypes = ['Room', 'Studio', 'Apartment', 'Villa'];
  const priceRanges = ['Under 200 OMR', '200-400 OMR', '400-600 OMR', '600+ OMR'];

  const featuredProperties = [
    {
      id: 1,
      title: 'Modern Studio in Muscat',
      location: 'Al Khuwair, Muscat',
      price: '350',
      type: 'Studio',
      gender: 'Mixed',
      furnished: true,
      image: '/api/placeholder/300/200',
      rating: 4.8,
      verified: true
    },
    {
      id: 2,
      title: 'Shared Room in Villa',
      location: 'Al Hail, Muscat',
      price: '180',
      type: 'Room',
      gender: 'Male Only',
      furnished: true,
      image: '/api/placeholder/300/200',
      rating: 4.6,
      verified: true
    },
    {
      id: 3,
      title: 'Luxury Apartment',
      location: 'Qurum, Muscat',
      price: '650',
      type: 'Apartment',
      gender: 'Mixed',
      furnished: true,
      image: '/api/placeholder/300/200',
      rating: 4.9,
      verified: true
    }
  ];

  const features = [
    {
      icon: <CheckBadgeIcon className="w-8 h-8" />,
      title: 'Verified Listings',
      description: 'All properties are verified to ensure authenticity and quality'
    },
    {
      icon: <ChatBubbleLeftRightIcon className="w-8 h-8" />,
      title: 'Direct WhatsApp Contact',
      description: 'Connect instantly with property owners via WhatsApp'
    },
    {
      icon: <MapPinIcon className="w-8 h-8" />,
      title: 'Location-Based Search',
      description: 'Find properties in your preferred area across Oman'
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: 'Gender Preferences',
      description: 'Filter by gender preferences for shared accommodations'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <HomeIcon className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">SakanOman</span>
              <span className="text-sm text-gray-500 hidden sm:block">سكن عمان</span>
            </div>
            <nav className="flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Browse</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">List Property</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Sign In
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Find Your Perfect
            <span className="text-blue-600 block">Home in Oman</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Discover apartments, rooms, and studios for rent across Muscat, Sohar, Salalah, and more. 
            Connect directly with verified landlords and find your ideal accommodation.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="relative">
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchFilters.city}
                  onChange={(e) => setSearchFilters({...searchFilters, city: e.target.value})}
                >
                  <option value="">Select City</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
              
              <div className="relative">
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchFilters.propertyType}
                  onChange={(e) => setSearchFilters({...searchFilters, propertyType: e.target.value})}
                >
                  <option value="">Property Type</option>
                  {propertyTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div className="relative">
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchFilters.priceRange}
                  onChange={(e) => setSearchFilters({...searchFilters, priceRange: e.target.value})}
                >
                  <option value="">Price Range</option>
                  {priceRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
              
              <div className="relative">
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchFilters.gender}
                  onChange={(e) => setSearchFilters({...searchFilters, gender: e.target.value})}
                >
                  <option value="">Gender Preference</option>
                  <option value="mixed">Mixed</option>
                  <option value="male">Male Only</option>
                  <option value="female">Female Only</option>
                </select>
              </div>
              
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                <MagnifyingGlassIcon className="w-5 h-5" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-gray-600">Handpicked accommodations with verified landlords</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
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
                    <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
                      <HeartIcon className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
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
                    <button className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2">
                      <ChatBubbleLeftRightIcon className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              View All Properties
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose SakanOman?</h2>
            <p className="text-gray-600">Making home finding easier across Oman</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to List Your Property?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join thousands of landlords who trust SakanOman to find quality tenants
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
              List Your Property
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <HomeIcon className="w-6 h-6" />
                <span className="text-xl font-bold">SakanOman</span>
              </div>
              <p className="text-gray-400">
                Your trusted platform for finding quality accommodation across Oman.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Browse Properties</a></li>
                <li><a href="#" className="hover:text-white transition-colors">List Property</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Cities</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Muscat</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sohar</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Salalah</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Nizwa</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SakanOman. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
