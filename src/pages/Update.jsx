import React, { useState } from 'react'

const Update = () => {
    const [updateName, setUpdateName] = useState('')
    const [updateEmail, setUpdateEmail] = useState('')

    const handleUpdate = (e) => {
        e.preventDefault
    }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
    <div className="shadow w-50 bg-light p-5">
      <form onSubmit={handleUpdate}>
        <h3 className="text-center">Update user</h3>
        <div>
          <label htmlFor="updateUser">Update Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your updated name"
            value={updateName}
            onchange={(e) => setUpdateName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="mt-3">Update Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your updated email"
            value={updateEmail}
            onchange={(e) => setUpdateEmail(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100 my-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  </div>
  )
}

export default Update