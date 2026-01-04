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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white transition-colors ${
            errors.name
              ? 'border-red-500 dark:border-red-400'
              : 'border-gray-300 dark:border-gray-600'
          }`}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white transition-colors ${
            errors.email
              ? 'border-red-500 dark:border-red-400'
              : 'border-gray-300 dark:border-gray-600'
          }`}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          rows="5"
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white transition-colors resize-none ${
            errors.message
              ? 'border-red-500 dark:border-red-400'
              : 'border-gray-300 dark:border-gray-600'
          }`}
          placeholder="Your message..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
