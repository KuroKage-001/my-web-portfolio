import { useEffect } from 'react'
import useForm from '../hooks/useForm'

export default function ContactForm({ onSuccess, onError }) {
  const initialValues = {
    name: '',
    email: '',
    message: ''
  }

  const validate = (values) => {
    const errors = {}

    if (!values.name || values.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!values.email) {
      errors.email = 'Email is required'
    } else if (!emailRegex.test(values.email)) {
      errors.email = 'Please enter a valid email address'
    }

    if (!values.message || values.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters'
    }

    return errors
  }

  const handleFormSubmit = async (values) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'
      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(values),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message')
      }

      return data
    } catch (error) {
      console.error('Error submitting form:', error)
      throw error
    }
  }

  const {
    values,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleBlur,
    handleSubmit
  } = useForm(initialValues, validate, handleFormSubmit)

  // Trigger callbacks when submit status changes
  useEffect(() => {
    if (submitStatus === 'success' && onSuccess) {
      onSuccess()
    }
    if (submitStatus === 'error' && onError) {
      onError()
    }
  }, [submitStatus, onSuccess, onError])

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-8 border border-gray-100 dark:border-gray-700">
        {/* Form Header */}
        <div className="text-center space-y-2 pb-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Get In Touch
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Fill out the form below and I'll get back to you as soon as possible
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          {/* Name Field */}
          <div className="group">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2.5"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-5 py-3.5 border-2 rounded-xl focus:outline-none focus:ring-4 dark:bg-gray-700 dark:text-white transition-all duration-200 ${
                  errors.name
                    ? 'border-red-500 dark:border-red-400 focus:ring-red-100 dark:focus:ring-red-900/30'
                    : 'border-gray-200 dark:border-gray-600 focus:border-primary-500 focus:ring-primary-100 dark:focus:ring-primary-900/30'
                }`}
                placeholder="John Doe"
              />
              {errors.name && (
                <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            {errors.name && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="group">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2.5"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-5 py-3.5 border-2 rounded-xl focus:outline-none focus:ring-4 dark:bg-gray-700 dark:text-white transition-all duration-200 ${
                  errors.email
                    ? 'border-red-500 dark:border-red-400 focus:ring-red-100 dark:focus:ring-red-900/30'
                    : 'border-gray-200 dark:border-gray-600 focus:border-primary-500 focus:ring-primary-100 dark:focus:ring-primary-900/30'
                }`}
                placeholder="john.doe@example.com"
              />
              {errors.email && (
                <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            {errors.email && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                {errors.email}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="group">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2.5"
            >
              Your Message <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows="6"
                className={`w-full px-5 py-3.5 border-2 rounded-xl focus:outline-none focus:ring-4 dark:bg-gray-700 dark:text-white transition-all duration-200 resize-none ${
                  errors.message
                    ? 'border-red-500 dark:border-red-400 focus:ring-red-100 dark:focus:ring-red-900/30'
                    : 'border-gray-200 dark:border-gray-600 focus:border-primary-500 focus:ring-primary-100 dark:focus:ring-primary-900/30'
                }`}
                placeholder="Tell me about your project or inquiry..."
              />
              {errors.message && (
                <div className="absolute top-4 right-4">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            {errors.message && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                {errors.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold text-lg hover:from-primary-700 hover:to-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800 disabled:opacity-60 disabled:cursor-not-allowed transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-3">
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending Message...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                Send Message
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            )}
          </button>
        </div>

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-green-800 dark:text-green-300 font-medium">
                Message sent successfully! I'll get back to you soon.
              </p>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <p className="text-red-800 dark:text-red-300 font-medium">
                Failed to send message. Please try again.
              </p>
            </div>
          </div>
        )}
      </div>
    </form>
  )
}
