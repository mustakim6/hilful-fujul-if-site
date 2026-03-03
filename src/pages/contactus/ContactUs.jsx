import React from 'react';
import ContactForm from './sectionsofcontact/ContactForm';
import DirectContact from './sectionsofcontact/DirectContact';

const ContactUs = () => {
    return (
    <div className="max-w-6xl mx-auto bg-gray-100 py-16 px-4">
        <h1 className="text-2xl md:text-5xl font-bold text-activeNavlinkColor mb-6">
        Contact Us
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <ContactForm />
        <DirectContact />
      </div>
    </div>
  );
};

export default ContactUs;