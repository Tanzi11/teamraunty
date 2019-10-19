import React from 'react'

export const MiniMatch = () => {
    return (
        <div className="MiniMatch container">
            <div className="row">
                <div className="avatar-container col-3">
                    <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.tvgcdn.net%2Fmediabin%2Fshowcards%2Fcelebs%2Fm-o%2Fthumbs%2Foprah-winfrey-168611_828x1104.png&f=1&nofb=1" alt="oprah" />
                </div>
                <div className="col-7">
                    <h4>Oprah Winfrey (verified)</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary">contact</button>
                </div>
            </div>
        </div>
    )
}

export class MatchList extends React.Component {
    render() {
        const matches = [0,0,0]
        const matchList = matches.map((match, idx) => <MiniMatch key={idx} />)
        console.log(matchList)
        return (
            <section>
                {matchList}
            </section>
        )
    }
}

export default MatchList