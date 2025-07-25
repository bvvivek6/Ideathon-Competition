import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const SubmissionForm = () => {
  const [formData, setFormData] = useState({
    problemStatement: "",
    innovativeIdea: "",
    estimatedBudget: "",
    name: "",
    email: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log("Form submitted:", formData);

    // Show success message and reset form
    setShowSuccess(true);
    setFormData({
      problemStatement: "",
      innovativeIdea: "",
      estimatedBudget: "",
      name: "",
      email: "",
    });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const inputClasses =
    "w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-mysuru-gold focus:ring-1 focus:ring-mysuru-gold transition-colors";

  return (
    <section
      className="section relative bg-gradient-to-br from-mysuru-maroon/5 to-mysuru-gold/5"
      id="submit"
    >
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-left md:text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl ">Submit Your Idea</h2>
          <div className="w-24 h-1 bg-mysuru-gold mx-auto "></div>
          <p className="text-md md:text-xl max-w-3xl mx-auto">
            Share your innovative solution to help shape the future of Mysuru
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {showSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded-lg shadow-md"
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-green-800">
                    Thank you for your submission!
                  </p>
                  <p className="text-green-700 mt-1">
                    Your idea has been successfully submitted. We'll review it
                    soon.
                  </p>
                </div>
              </div>
            </motion.div>
          ) : null}

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <label
                htmlFor="problemStatement"
                className="block text-mysuru-charcoal font-medium mb-2"
              >
                Problem Statement
              </label>
              <textarea
                id="problemStatement"
                name="problemStatement"
                rows="4"
                value={formData.problemStatement}
                onChange={handleChange}
                placeholder="Describe the problem you've identified in Mysuru"
                className={inputClasses}
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="innovativeIdea"
                className="block text-mysuru-charcoal font-medium mb-2"
              >
                Your Innovative Idea
              </label>
              <textarea
                id="innovativeIdea"
                name="innovativeIdea"
                rows="5"
                value={formData.innovativeIdea}
                onChange={handleChange}
                placeholder="Describe your solution in detail"
                className={inputClasses}
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="estimatedBudget"
                className="block text-mysuru-charcoal font-medium mb-2"
              >
                Estimated Budget
              </label>
              <input
                type="text"
                id="estimatedBudget"
                name="estimatedBudget"
                value={formData.estimatedBudget}
                onChange={handleChange}
                placeholder="e.g., ₹50,000 - ₹2,00,000"
                className={inputClasses}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-mysuru-charcoal font-medium mb-2"
                >
                  Name (Optional)
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-mysuru-charcoal font-medium mb-2"
                >
                  Email (Optional)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="text-center">
              <motion.button
                type="submit"
                className="btn-primary text-lg py-3 px-8 w-full md:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Your Idea
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default SubmissionForm;
