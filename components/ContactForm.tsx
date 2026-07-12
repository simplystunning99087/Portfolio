'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, AlertCircle } from 'lucide-react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/mvgzkyqn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-4 max-w-md mx-auto"
    >
      {/* Name Input */}
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-cyan-300">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full px-4 py-3 bg-cyan-400/10 border border-cyan-400/30 rounded-lg text-foreground placeholder-secondary/50 focus:outline-none focus:border-cyan-300/70 focus:bg-cyan-400/20 transition-all duration-300 backdrop-blur-sm"
          disabled={status === 'loading'}
        />
      </div>

      {/* Email Input */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-cyan-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full px-4 py-3 bg-cyan-400/10 border border-cyan-400/30 rounded-lg text-foreground placeholder-secondary/50 focus:outline-none focus:border-cyan-300/70 focus:bg-cyan-400/20 transition-all duration-300 backdrop-blur-sm"
          disabled={status === 'loading'}
        />
      </div>

      {/* Message Input */}
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-cyan-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
          rows={5}
          className="w-full px-4 py-3 bg-cyan-400/10 border border-cyan-400/30 rounded-lg text-foreground placeholder-secondary/50 focus:outline-none focus:border-cyan-300/70 focus:bg-cyan-400/20 transition-all duration-300 backdrop-blur-sm resize-none"
          disabled={status === 'loading'}
        />
      </div>

      {/* Status Message */}
      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 p-3 bg-green-400/20 border border-green-400/50 rounded-lg text-green-300 text-sm"
        >
          <Check size={18} />
          Message sent successfully! I&apos;ll get back to you soon.
        </motion.div>
      )}

      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 p-3 bg-red-400/20 border border-red-400/50 rounded-lg text-red-300 text-sm"
        >
          <AlertCircle size={18} />
          {!formData.name || !formData.email || !formData.message
            ? 'Please fill in all fields'
            : 'Failed to send message. Please try again.'}
        </motion.div>
      )}

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={status === 'loading'}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 backdrop-blur-sm"
      >
        {status === 'loading' ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-4 h-4 border-2 border-background border-t-transparent rounded-full"
            />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </motion.button>
    </motion.form>
  );
}
