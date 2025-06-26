import React from 'react'


function Login() {
  return (
     
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: '60vh',
        display:'flex', 
        justifyContent: 'center' ,
        alignItems : 'center' ,
        padding: '1rem',
      }}
    >
      <div
        className="card shadow-lg border-0 p-4 text-white"
        style={{
          width: '100%',
          maxWidth: '400px',
          background: 'rgba(0,0,0,0.6)',background: 'linear-gradient(to right, #6a11cb, #2575fc)',
          borderRadius: '15px',
        }}
      >
        <h2 className="text-center mb-4">🚀 Login to Your Account</h2>

        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">Email address : </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              required
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid #ccc', padding : '2px 4px'  }}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label text-white">Password : </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              required
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid #ccc' , padding : '2px 4px' }}
              
            />
          </div>

          <button type="submit" className="btn btn-warning text-center pt-1 px-5 d-flex items-center mb-3 fw-bold bg-black d-block">
            🔓 Log In
          </button>
        </form>

        <p className="text-center">
          <span className="text-white-50">Don't have an account? </span>
          <a href="/signup" className="text-warning fw-bold text-decoration-none">Sign up</a>
        </p>
      </div>
    </div>
  )
}

export default Login
