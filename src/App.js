import { BrowserRouter, useParams, Route, Routes } from 'react-router-dom'
import Home from './containers/Home'
import Header from './containers/Header'
import List_display from './containers/List'
import Single_Repo from './containers/Single_repo'
import './App.css'
import './containers/containers.css'

function App()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Root />} /> 
                <Route path="/home" element={<Home />} />
                <Route path="/users/:user/repos" element={<Multi />} />
                <Route path="/users/:user/repos/:repo" element={<Single />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

function Root()
{
    window.location.pathname = '/home'
}

function Multi()
{
    let {user} = useParams();
    return (
        <div className="App">
            <Header user={user}/>
            <List_display user={user}/>
        </div>
    )
}

function Single()
{
    let {user, repo} = useParams()
    return (
        <div className='Single'>
            <Header user={user}/>
            <Single_Repo user={user} repo={repo}/>
        </div>
    )
}

function Error()
{
    return (
        <div>
            <h1>404 Permission Denied.</h1>
            <a href='/home'> Click here to turn back to /home. </a>
        </div>
    )
}

export default App