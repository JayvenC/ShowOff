import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <img className='postImg' src="../images/arcade.jpg" alt="" />
        <div className="postInfo">
            <div className="postPassions">
                <span className="postPass">Tech</span>
                </div>
                <span className="postTitle">Lorem ipsum, dolor sit
                </span>
                <hr />
                <span className="postDate">12 hours ago</span>
                <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis natus eius consectetur quasi, est hic odit quidem illum blanditiis impedit iure reprehenderit error? Aliquam, ipsum! Aut modi illo quis autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam quis vitae corporis quod veritatis quidem! Vero, non laudantium. Iste tenetur placeat molestias odit ut error illum perferendis natus quae?</p>
                </div>
        </div>
  )
}
