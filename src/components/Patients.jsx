import React from 'react'
import PatientData from '../data/patients.json'
import PatientInstance from './PatientInstance'

class Patients extends React.Component {
  state = {
    patients: []
  }

  componentDidMount() {
    this.setState({
      patients: PatientData
    })
  }

  render() {
    const { patients } = this.state
    return (
      <div className="Patients">
        {patients.map(patient => (
          <PatientInstance patient={patient} />
        ))}
      </div>
    )
  }
}

export default Patients
