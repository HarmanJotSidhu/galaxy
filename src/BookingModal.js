// components/BookingModal.js
import React, { useState } from 'react';
import { X } from 'lucide-react';
import emailjs from 'emailjs-com';

const BookingModal = ({ setIsModalOpen, setIsContactModalOpen, isContactModalOpen }) => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', vehicle: '', message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.service) newErrors.service = 'Service selection is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    const formDataObj = new FormData();
    formDataObj.append('entry.85512677', formData.name);
    formDataObj.append('entry.1979428589', formData.email);
    formDataObj.append('entry.375568965', formData.phone);
    formDataObj.append('entry.976505808', formData.message);
    formDataObj.append('entry.1064077034', formData.vehicle);
    formDataObj.append('entry.1026329377', formData.service);

    try {
      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSfQ3kxbrUoXFNa0WWPuMncNhTnQiTbvswEtB4czBD5UQeiC4Q/formResponse',
        { method: 'POST', mode: 'no-cors', body: formDataObj }
      );

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          fullName: formData.name,
          email: formData.email,
          phoneNumber: formData.phone,
          serviceType: formData.service,
          vehicleDetails: formData.vehicle,
          additionalMessage: formData.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', service: '', vehicle: '', message: '' });
      setTimeout(() => {
        setIsModalOpen(false);
        setIsContactModalOpen(false);
        setSubmitSuccess(false);
      }, 2000);

    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h2>
          <p className="text-gray-700">We've received your message. We'll be in touch soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-blue-600">{isContactModalOpen ? 'Contact Us' : 'Book Your Service'}</h2>
          <button onClick={() => { setIsModalOpen(false); setIsContactModalOpen(false); }} className="text-gray-500">
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={isSubmitting}
              />
              {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={isSubmitting}
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Service Type</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                disabled={isSubmitting}
              >
                <option value="">Select a service</option>
                <option value="tinting">Window Tinting</option>
                <option value="wrapping">Vehicle Wrapping</option>
                <option value="protection">Paint Protection</option>
              </select>
              {errors.service && <p className="text-red-600 text-sm mt-1">{errors.service}</p>}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Vehicle Details</label>
              <input
                type="text"
                placeholder="Year, Make, Model"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600"
                value={formData.vehicle}
                onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Additional Message</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600"
                rows="3"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
      </div>
    </div>
  );
};

export default BookingModal;
