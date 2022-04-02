import React, { Component } from "react"
import { request } from "@octokit/request"

class Single_Repo extends Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            exists: true,
            data: []
        }
        this.getRepo = this.getRepo.bind(this)
        this.getRepo()
    }

    getRepo = async() => 
    {
        let repo = await request("GET /repos/{owner}/{repo}", {
            owner: this.props.user,
            repo:  this.props.repo
        })
        .catch(() => this.setState({exists: false}))

        let description = repo.data.description
        if (description == null)    description = "N/A"
        this.setState({data: [repo.data.full_name, description, 
                                repo.data.stargazers_count, repo.data.html_url],
                       exists: true})
    }
    
    render()
    {
        if (this.state.exists === true)
        {
            let value = this.state.data
            return (
                <table>
                    <tr className="FirstRow">
                        <th>Repository Full Name</th>
                        <th>Repository Description</th>
                        <th>Repository Stargazer Count</th>
                    </tr>

                    <tr>
                        <td><a href={value[3]} target="_blank">{value[0]}</a></td>
                        <td>{value[1]}</td>
                        <td>{value[2]}</td>
                    </tr>
                </table>
            )
        }
        else
        {
            return (
                <div id="error">
                    <h1>The repository {this.props.repo} you are searching for is not found.</h1>
                    <h1><a href="javascript:history.back()">Click here to turn back to the previous page.</a></h1>
                </div>
            )
        }
    }
}

export default Single_Repo