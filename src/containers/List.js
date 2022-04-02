import { request } from "@octokit/request"
import React, { Component } from "react"

class List_display extends Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            exists: true,
            data: [],
            page: 1
        }
        this.getRepos = this.getRepos.bind(this)
        this.getRepos()
    }

    componentDidMount()
    {
        if (this.scroll)
        {
            this.scroll.addEventListener("scroll", e => {
                const { clientHeight, scrollHeight, scrollTop } = e.target
                console.log(scrollTop, clientHeight, scrollHeight)
                if (Math.round(scrollTop) + clientHeight == scrollHeight)
                {
                    this.setState({page: this.state.page+1})
                    this.getRepos()
                }
            })
        }
    }

    getRepos = async() => 
    {
        let repos = await request("GET /users/{username}/repos", {
            username: this.props.user,
            per_page: 10,
            page: this.state.page
        })
        .catch(() => this.setState({exists: false}))

        if (repos.data.length > 0)
        {
            let new_data = this.state.data.concat (
                repos.data.map((value, index, array) => 
                [array[index].name, array[index].stargazers_count, array[index].html_url])
            )

            this.setState({
                exist: true,
                data: new_data
            })
        }
    }
    
    render()
    {
        if (this.state.exists === true)
        {
            return (
                <div ref={e => (this.scroll = e)} id="scroll">
                    <table>
                        <tr className="FirstRow">
                            <th className="num">No.</th>
                            <th className="name">Repository Name</th>
                            <th className="count">Repository Stargazer Count</th>
                        </tr>
                        {
                            this.state.data.map((value, index) =>
                                <tr>
                                    <td className="num">{index+1}</td>
                                    <td className="name"><a href={window.location.pathname+'/'+value[0]}>{value[0]}</a></td>
                                    <td className="count">{value[1]}</td>
                                </tr>
                            )
                        }
                    </table>
                </div>
            )
        }
        else
        {
            return(
                <div>
                    <h1>User {this.props.user} does not exist. Please try again.</h1>
                    <h1><a href="/home">Click here to get /home.</a></h1>
                </div>
            )
        }
    } 
}

export default List_display