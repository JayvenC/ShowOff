import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">THIS IS WHO I AM</span>
            <img src="../images/matt.png" alt="" />
            <p>My name is Matt!<br/><br/> I really love tech and hanging out with my friends and family
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">PASSIONS</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Sports</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Friends</li>
                <li className="sidebarListItem">Family</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Connect with Me</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-instagram"></i>
                <i className="sidebarIcon fa-brands fa-twitter"></i>
                <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon fa-brands fa-linkedin"></i>
            </div>
        </div>
        </div>
  )
}

