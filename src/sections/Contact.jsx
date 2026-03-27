import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { personalData } from '../data';
import SectionWrapper from '../components/SectionWrapper';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const onSubmit = async (data) => {
    try {
      // Pointing to Node/Express backend that will be set up
      const response = await axios.post('http://localhost:5000/api/contact', data);
      setSubmitStatus('success');
      reset();
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <SectionWrapper id="contact" title="Get in Touch" subtitle="Let's build something amazing together">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-8"
        >
          <div className="glass p-8 rounded-3xl h-full border border-primary-500/20 bg-gradient-to-b from-primary-500/5 to-transparent">
            <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-light-textMuted dark:text-dark-textMuted uppercase tracking-wider mb-1">Email</h4>
                  <a href={`mailto:${personalData.email}`} className="text-lg font-medium text-light-text dark:text-dark-text hover:text-primary-500 transition-colors break-all">
                    {personalData.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-light-textMuted dark:text-dark-textMuted uppercase tracking-wider mb-1">Phone</h4>
                  <a href={`tel:${personalData.phone}`} className="text-lg font-medium text-light-text dark:text-dark-text hover:text-primary-500 transition-colors">
                    {personalData.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-light-textMuted dark:text-dark-textMuted uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-lg font-medium text-light-text dark:text-dark-text">
                    Lovely Professional University<br />
                    <span className="text-base text-primary-600 dark:text-primary-400">Phagwara, Punjab</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-sm font-semibold text-light-textMuted dark:text-dark-textMuted uppercase tracking-wider mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a href={personalData.socials.linkedin} target="_blank" rel="noreferrer" className="glass-card px-6 py-3 rounded-xl font-semibold text-light-text dark:text-dark-text hover:text-primary-500 hover:border-primary-500/50 transition-all flex-1 text-center">
                  LinkedIn
                </a>
                <a href={personalData.socials.github} target="_blank" rel="noreferrer" className="glass-card px-6 py-3 rounded-xl font-semibold text-light-text dark:text-dark-text hover:text-primary-500 hover:border-primary-500/50 transition-all flex-1 text-center">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3"
        >
          <div className="glass p-8 md:p-10 rounded-3xl relative overflow-hidden">
            {submitStatus === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-0 left-0 right-0 bg-green-500/10 border-b border-green-500/20 p-4 flex items-center justify-center gap-2 text-green-600 dark:text-green-400 font-medium"
              >
                <CheckCircle size={20} />
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-0 left-0 right-0 bg-red-500/10 border-b border-red-500/20 p-4 flex items-center justify-center gap-2 text-red-600 dark:text-red-400 font-medium"
              >
                <AlertCircle size={20} />
                Failed to send message. Please try again later.
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className={`space-y-6 ${submitStatus ? 'mt-8' : ''}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-light-text dark:text-dark-text mb-2">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className={`w-full px-5 py-4 rounded-xl glass-card bg-transparent border-2 outline-none focus:border-primary-500 transition-colors text-light-text dark:text-dark-text placeholder:text-gray-400 dark:placeholder:text-gray-600 ${errors.name ? 'border-red-500' : 'border-light-border dark:border-dark-border'}`}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1 absolute font-medium">{errors.name.message}</span>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-light-text dark:text-dark-text mb-2">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className={`w-full px-5 py-4 rounded-xl glass-card bg-transparent border-2 outline-none focus:border-primary-500 transition-colors text-light-text dark:text-dark-text placeholder:text-gray-400 dark:placeholder:text-gray-600 ${errors.email ? 'border-red-500' : 'border-light-border dark:border-dark-border'}`}
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1 absolute font-medium">{errors.email.message}</span>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-light-text dark:text-dark-text mb-2">Subject</label>
                <input
                  id="subject"
                  type="text"
                  {...register("subject", { required: "Subject is required" })}
                  className={`w-full px-5 py-4 rounded-xl glass-card bg-transparent border-2 outline-none focus:border-primary-500 transition-colors text-light-text dark:text-dark-text placeholder:text-gray-400 dark:placeholder:text-gray-600 ${errors.subject ? 'border-red-500' : 'border-light-border dark:border-dark-border'}`}
                  placeholder="Hello!"
                  disabled={isSubmitting}
                />
                {errors.subject && <span className="text-red-500 text-xs mt-1 absolute font-medium">{errors.subject.message}</span>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-light-text dark:text-dark-text mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  {...register("message", { required: "Message is required", minLength: { value: 10, message: "Minimum 10 characters required" } })}
                  className={`w-full px-5 py-4 rounded-xl glass-card bg-transparent border-2 outline-none focus:border-primary-500 transition-colors text-light-text dark:text-dark-text placeholder:text-gray-400 dark:placeholder:text-gray-600 resize-none ${errors.message ? 'border-red-500' : 'border-light-border dark:border-dark-border'}`}
                  placeholder="I'd love to discuss..."
                  disabled={isSubmitting}
                ></textarea>
                {errors.message && <span className="text-red-500 text-xs mt-1 absolute font-medium">{errors.message.message}</span>}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold bg-primary-600 text-white flex items-center justify-center gap-2 transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-700 shadow-lg shadow-primary-500/30'} `}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
};

export default Contact;
