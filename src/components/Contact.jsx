import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // --- PASTE YOUR ACCESS KEY HERE ---
    formData.append("access_key", "cba7d9e3-c396-4a5c-88aa-12ee16974b36"); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#050209] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 max-w-2xl relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Contact <span className="text-pink-500">Me</span>
        </h2>

        <form onSubmit={onSubmit} className="space-y-6 bg-[#1a0b2e]/50 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
          
          <div className="space-y-2">
            <label className="text-sm text-gray-400 ml-1">Name</label>
            <input 
                type="text" 
                name="name" 
                required 
                className="w-full bg-[#050209] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500 transition"
                placeholder="Your Name"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm text-gray-400 ml-1">Email</label>
            <input 
                type="email" 
                name="email" 
                required 
                className="w-full bg-[#050209] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500 transition"
                placeholder="your@email.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-400 ml-1">Message</label>
            <textarea 
                name="message" 
                rows="5" 
                required 
                className="w-full bg-[#050209] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500 transition resize-none"
                placeholder="Write your message here..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition transform hover:-translate-y-1"
          >
            Send a Message
          </button>
          
          {/* Status Message */}
          <p className="text-center mt-4 text-gray-400">{result}</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;