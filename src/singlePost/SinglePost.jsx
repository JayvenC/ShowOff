import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrap">
            <img className='singlePostImg' src="../images/header-image.jpg" alt="" />
            <h1 className="singlePostTitle">
                To be great, you have to do something great!
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author: <b>Matthew Klimek</b></span>
                <span className='singlePostDate'> 12 hours ago</span>
            </div>
            <p className='singlePostDesc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae autem, omnis, error voluptatibus esse doloribus eius nihil perferendis ullam magni aliquam, quod recusandae velit excepturi aspernatur quo beatae dolores dignissimos. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et recusandae adipisci rerum. Delectus nemo a repudiandae tempore fugit. Exercitationem quisquam dolor nam ad qui eos, aspernatur voluptates ex! Doloribus, accusantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime cupiditate nemo, veritatis ab consequuntur deserunt quasi saepe dolores sit incidunt nostrum neque, consectetur molestiae ipsum earum repellendus, beatae officiis expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit excepturi, animi eos incidunt voluptatum maxime nobis sit magnam earum, dolorem, nihil maiores? Ex reprehenderit temporibus harum eum maiores possimus? Dolor? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla reiciendis esse fugiat sapiente, distinctio quo odio animi itaque explicabo voluptatum? Veritatis unde doloremque suscipit dolore ipsa, quidem adipisci aperiam!</p>
        
        </div>
        </div>
  )
}
