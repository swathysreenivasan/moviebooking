import React from 'react'

const Logout = () => {
    window.location.href = "/login";
    
  return (
    <div>
      Redirecting to login page...
      {/* You can add a link to the login page if needed */}
      <a href="/login">Click here if you are not redirected</a>
    </div>

  )
}

export default Logout