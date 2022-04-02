import dcard_logo from '../images/Dcard_logo.png'

function Header(props)
{
    return (
        <header>
            { props.user && <h1 id='headerText'>User name:&emsp;{props.user}</h1> }
            <img src={dcard_logo} height='180px' id='logo'/>
        </header>
    )
}

export default Header