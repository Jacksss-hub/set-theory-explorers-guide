
import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your feedback. We'll get back to you soon.",
    });

    setFormData({ email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about set theory or suggestions for improvement? We'd love to hear from you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Contact Us?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Ask Questions</h4>
                      <p className="text-gray-600">Get help with specific set theory concepts or problems</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Suggest Improvements</h4>
                      <p className="text-gray-600">Share ideas for new features or content improvements</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Report Issues</h4>
                      <p className="text-gray-600">Let us know about any technical problems or errors</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Share Feedback</h4>
                      <p className="text-gray-600">Tell us about your learning experience and suggestions</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-math-blue-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Mail className="h-6 w-6 text-math-blue-600 mr-3" />
                  <h4 className="font-semibold text-math-blue-800">Response Time</h4>
                </div>
                <p className="text-math-blue-700">
                  We typically respond to messages within 24-48 hours. For urgent questions about 
                  set theory concepts, please be as specific as possible in your message.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-math-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-math-blue-500 focus:border-transparent transition-colors duration-200 resize-vertical"
                    placeholder="Tell us about your question, suggestion, or feedback..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-math-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-math-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors duration-200"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-500">
                  By sending a message, you agree to our privacy policy and terms of use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
