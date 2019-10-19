import React from 'react'

export class StartPage extends React.Component {
    render() {
        return (
            <section>
                <p>Please sign in or sign up</p>
                <button className="btn btn-primary">Sign Up</button>
                <button className="btn btn-btn secondary">Login</button>
            </section>
        )
    }
}

export default StartPage