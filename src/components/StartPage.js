import React from 'react'
import { Link } from "react-router-dom"

export class StartPage extends React.Component {
    render() {
        return (
            <section className="container text-center">
                <h1>Welcome to Raunty!</h1>
                <h3>I am looking for:</h3>
                <button className="btn btn-primary" style={{marginRight: '20px', width: '400px'}}>
                    <Link to="/prefs">An Aunty</Link>
                </button>
                <button className="btn btn-primary" style={{width: '400px'}}>
                    <Link to="/prefs">A Niece</Link>
                </button>
            </section>
        )
    }
}

export default StartPage