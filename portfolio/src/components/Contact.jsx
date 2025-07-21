import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Contact Information</h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fa-solid fa-envelope text-green-400 text-xl mr-4"></i>
                  <span className="text-gray-700">athroam@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <i className="fa-solid fa-phone text-green-400 text-xl mr-4"></i>
                  <span className="text-gray-700">+91 9899979748</span>
                </div>
                <div className="flex items-center">
                  <i className="fa-solid fa-map-marker-alt text-green-400 text-xl mr-4"></i>
                  <span className="text-gray-700">
                    Department of Computer Science and Engineering<br />
                    UIE, Chandigarh University, Mohali
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Office Hours</h3>
              <div className="text-gray-700">
                <p className="mb-2"><strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM</p>
                <p className="mb-2"><strong>Saturday:</strong> 9:00 AM - 1:00 PM</p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
