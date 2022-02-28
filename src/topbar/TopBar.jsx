import './topbar.css'

export default function TopBar() {
  return (
    <div className="top">
        <div className="topLeft">
        <i className="socialIcons fa-brands fa-instagram"></i>
        <i className="socialIcons fa-brands fa-twitter"></i>
        <i className="socialIcons fa-brands fa-facebook"></i>
        <i className="socialIcons fa-brands fa-linkedin"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">Home</li>
                <li className="topListItem">About</li>
                <li className="topListItem">Contact Us</li>
                <li className="topListItem">Post</li>
                <li className="topListItem">Logout</li>
            </ul>
        </div>
        <div className="topRight">
            <img className="profileImage"
            src="../images/matt.png" alt="" />
            <i className="searchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
