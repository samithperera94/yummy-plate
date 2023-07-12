import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/UI/Card'

const AdminHomePage = () => {
    return (
        <>
            <h2> AdminHomePage </h2>
            <Card>
                <Link to="addmeal">Add Meal</Link>
            </Card>
        </>
    )
}

export default AdminHomePage