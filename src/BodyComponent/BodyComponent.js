import React from "react";
import './BodyComponent.css'

const BodyComponent = () =>{
    return(
        <>
                <div>
                    <h1 className="text">ABCD CONSTRUCTIONS</h1>
                    <p className="para">"WE BUILD YOUR DREAMS"</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="img1"></img>
                    <p className="new">This text is the content of the box. We have added a 50px padding, 20px margin and a 15px green border. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2018/01/20/08/01/craftsmen-3094035_960_720.jpg" className="nest"></img>
                </div>
        </>
    )
}
export default BodyComponent;;