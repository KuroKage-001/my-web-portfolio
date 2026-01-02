import { useState } from 'react'

export default function useForm(initialValues, validate, onSubmit) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    const fieldErrors = validate(values)
    if (fieldErrors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: fieldErrors[name]
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(values)
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await onSubmit(values)
      setSubmitStatus('success')
      resetForm()
    } catch (error) {
      setSubmitStatus('error')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setValues(initialValues)
    setErrors({})
    setSubmitStatus('idle')
  }

  return {
    values,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm
  }
}
