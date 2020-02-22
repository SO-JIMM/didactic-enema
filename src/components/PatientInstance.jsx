import React from 'react'

const PatientInstance = ({ patient }) => {
  const { guid, name, age } = patient
  return (
    <h1 key={guid}>
      {name} {age}
    </h1>
  )
}

export default PatientInstance
