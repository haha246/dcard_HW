import { Component } from "react"
import Header from "./Header"

class Home extends Component
{
    constructor(props)
    {
        super(props)
        this.state = { user: "" }
        this.redirect = this.redirect.bind(this)
    }

    redirect(event)
    {
        event.preventDefault()
        let input = document.getElementsByName("user")[0].value
        if (input !== '')
            window.location.pathname = "/users/"+input+"/repos"
    }

    render()
    {
        return(
            <div>
                <Header />
                <div id="home">
                    <form name="input" onSubmit={this.redirect}>
                        Who appeals to you? Input his/her GitHub username:<br />
                        <input type="text" name="user" placeholder="I_love_Dcard" />
                        <input id="enter" type="submit" value="Enter" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Home