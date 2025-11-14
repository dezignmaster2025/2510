import Logo from '../assets/logo.svg'
import HomeIcon from '../assets/home-icon.svg'
import AccountIcon from '../assets/account.svg'
import BellIcon from '../assets/bell.svg'
import BookmarkIcon from '../assets/bookmark.svg'
import GridIcon from '../assets/grid.svg'
import ListIcon from '../assets/list.svg'
import MailIcon from '../assets/mail.svg'
import MoreIcon from '../assets/more.svg'
import './navigation.css'

const navButtons = [
    {
    label: 'Home',
    icon: HomeIcon
}, 
{
    label: 'Notifications',
    icon: BellIcon
},
{
    label: 'Explore',
    icon: GridIcon
},
{
    label: 'Messages',
    icon: MailIcon
},
{
    label: 'Bookmarks',
    icon: BookmarkIcon
},
{
    label: 'Lists',
    icon: ListIcon
},
{
    label: 'Profile',
    icon: AccountIcon
},
{
    label: 'More',
    icon: MoreIcon
},
]

const NavigationButton = ({icon, label})=>{
    const handleButtonClick = ()=>{
        console.log(label)
    }

    return <button className='nav-button-container' onClick={handleButtonClick}>
        <img src={icon} className='nav-icon' />
        <h3>{label}</h3>
    </button>
}

export const Navigation = ()=>{
    return <section className='nav-container'>
        <img src={Logo} width="50" />
        <div>
        {navButtons.map((navBtn)=><NavigationButton key={navBtn.label} label={navBtn.label} icon={navBtn.icon} />)}
        </div>
        <button className='tweet-btn'>Tweet</button>
    </section>
}
