import { useState } from 'react'

export default function App() {
  const [formData, setFormData] = useState(
    {
      email: '',
      password: '',
      confirmPassword: '',
      okayToEmail: false,
    }
  )

  function handleChange(event) {
    const {name, value, type, checked} = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value

      }
    });
  }

  function handleSubmit(event) {
    event.preventDefault()
    formData.okayToEmail ? console.log('Thanks for signing up') : null

    if (formData.password === formData.confirmPassword) {
      console.log('successfully signed up!')
    } else {
      console.log('passwords do not match')
    }
  }

  return (
      <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
              <input
                  type="email"
                  placeholder="Email address"
                  className="form--input"
                  onChange={handleChange}
                  name='email'
                  value={formData.email}
              />
              <input
                  type="password"
                  placeholder="Password"
                  className="form--input"
                  onChange={handleChange}
                  name='password'
                  value={formData.password}
              />
              <input
                  type="password"
                  placeholder="Confirm password"
                  className="form--input"
                  onChange={handleChange}
                  name='confirmPassword'
                  value={formData.confirmPassword}
              />

              <div className="form--marketing">
                  <input
                      id="okayToEmail"
                      type="checkbox"
                      onChange={handleChange}
                      name='okayToEmail'
                      checked={formData.okayToEmail}
                  />
                  <label htmlFor="okayToEmail">I want to join the newsletter</label>
              </div>
              <button
                  className="form--submit"
              >
                  Sign up
              </button>
          </form>
      </div>
  )
}

