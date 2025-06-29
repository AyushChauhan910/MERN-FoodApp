import React from "react";

function Contact() {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded shadow p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="border rounded px-3 py-2" required />
        <input type="email" placeholder="Your Email" className="border rounded px-3 py-2" required />
        <textarea placeholder="Your Message" className="border rounded px-3 py-2" rows={4} required />
        <button className="bg-pink-600 text-white py-2 rounded hover:bg-pink-700" type="submit">
          Send Message
        </button>
      </form>
      <p className="mt-4 text-gray-500">Or email us at <a href="mailto:support@feastly.com" className="text-pink-600">support@feastly.com</a></p>
    </div>
  );
}

export default Contact;
