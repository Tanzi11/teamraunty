import React from 'react'

export class Chatbox extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            chats: [],
            newChat: ''
        }
    }

    handleChange = (e) => {
        this.setState({newChat: e.target.value})
    }

    addChat = () => {
        this.state.chats.push(this.state.newChat)
        this.setState({newChat: ''})
        this.triggerResponse()
    }

    triggerResponse = () => {
        setTimeout(() => {
            // check if last chat is positive or negative
            const pastChat = this.state.chats[this.state.chats.length - 1]
            const negativeConditions = ['hopeless', 'angry', 'sad', 'need', 'terrible']
            const isNegative = negativeConditions.some(el => pastChat.includes(el))
            const negativeResponses = ["Be thankful for what you have; you'll end up having more. If you concentrate on what you don't have, you will never, ever have enough.", "Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure.", "I'm sorry to hear that", 'You can achieve whatever you want']
            const neutralResponses = ['Tell me more', 'Wow', 'At the end of the day, what do you want?', 'You are a beam of light, dont forget that']
            if (isNegative) {
                this.state.chats.push(negativeResponses[Math.floor(Math.random()*negativeResponses.length)])
                this.setState({chats: this.state.chats})
            } else {
                this.state.chats.push(neutralResponses[Math.floor(Math.random()*neutralResponses.length)])
                this.setState({chats: this.state.chats})
            }
        }, 1000)
    }


    render() {
        const chats = this.state.chats.map(chat => {
            return <div>{chat}</div>
        })
        return (
            <article className="container">
                <div className="row justify-content-md-center">
                    <picture class='col-2'>
                        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.tvgcdn.net%2Fmediabin%2Fshowcards%2Fcelebs%2Fm-o%2Fthumbs%2Foprah-winfrey-168611_828x1104.png&f=1&nofb=1" alt="Kehlani" className="rounded mx-auto d-block img-circle" />
                    </picture>
        

                </div>
                <div className="chat-history row">
                    <div className="col">
                        {this.state.chats.length === 0 && <p>Begin a chat..</p>}
                        {this.state.chats.length !== 0 && chats}
                    </div>
                </div>
                <div className="send-chat row">
                    <div class="input-group col-12">
                        <input type="text" class="form-control" id="chat-msg" onChange={this.handleChange} placeholder="Send Chat" />
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" onClick={this.addChat} type="button" id="button-addon2">Send</button>
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}

export default Chatbox