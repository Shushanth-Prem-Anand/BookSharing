import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div className="text-center">
            <h1>User's Page </h1>
            <p style={{fontSize:30}}> User Profile</p>
            <p style={{fontSize:30}}> Orders --</p>
            <Link to="/">
                <button className="primary-button">Buy</button>
            </Link>
            <Link to="/">
                <button className="primary-button">Add Books</button>
            </Link>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}
