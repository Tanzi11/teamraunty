import React from 'react'
import { Link } from "react-router-dom"

const matchData = [
    {
        id: 0,
        name: 'Oprah Winfrey',
        img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.tvgcdn.net%2Fmediabin%2Fshowcards%2Fcelebs%2Fm-o%2Fthumbs%2Foprah-winfrey-168611_828x1104.png&f=1&nofb=1',
        isAI: true,
        sassyOrSweet: 'sweet',
        isVerified: true
    },
    {
        id: 1,
        name: 'Samantha Bee',
        img: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Samantha_Bee_2017.jpg',
        isAI: false,
        sassyOrSweet: 'sassy',
        isVerified: false
    },
    {
        id: 2,
        name: 'Gail King',
        img: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w425/cast/a8accb2b5e3ac4f9_cbstm_gaylek_800x1000.jpg',
        isAI: true,
        sassyOrSweet: 'sassy',
        isVerified: true
    },
]
export const MiniMatch = ({match}) => {
    return (
        <div className="MiniMatch container">
            <div className="row">
                <div className="avatar-container col-3">
                    <img src={match.img} alt={match.name} />
                </div>
                <div className="col-7">
                    <h4>{`${match.name} ${match.isVerified ? '(Verified)' : ''}`}</h4>
                    {match.isAI && <h6>I'm an AI</h6>}
                    <h6 className="text-bold">{match.sassyOrSweet}</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary">
                        <Link to="/chat">Contact</Link>
                    </button>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export class MatchList extends React.Component {
    render() {
        const matchList = matchData.map((match, idx) => <MiniMatch key={idx} match={match} />)
        console.log(matchList)
        return (
            <section>
                {matchList}
            </section>
        )
    }
}

export default MatchList