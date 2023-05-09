import React, { useState } from 'react'

export default function About() {

    const[myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    // let myStyle = {
    //     color: 'white',
    //     backgroundColor: 'black'
    // }

    const [btnText, setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = () => {
        if (myStyle.color === "black") {
            setMyStyle({
                color: "white",
                backgroundColor: "black",
                border: "1px solid white",
            })
            setBtnText("Enable Light Mode")
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable dark Mode")
        }
    }
    
    return (
        <div className='container my-6' style={myStyle}>
            <h2  style={{color:'white',background:'black'}} >About Us</h2>
            <div classNmae="accordion" id="accordionExample" style={myStyle}>
                <div classNmae="accordion-item" >
                    <h2 classNmae="accordion-header" id="headingOne">
                        <button classNmae="accordion-button" type="button" style={myStyle}  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" classNmae="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div classNmae="accordion-body" style={myStyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div classNmae="accordion-item" style={myStyle} >
                    <h2 classNmae="accordion-header" id="headingTwo">
                        <button classNmae="accordion-button collapsed"  type="button" style={myStyle}  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" classNmae="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div classNmae="accordion-body" style={myStyle}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div classNmae="accordion-item" >
                    <h2 classNmae="accordion-header" id="headingThree">
                        <button classNmae="accordion-button collapsed"  type="button" style={myStyle}  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" classNmae="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div classNmae="accordion-body" style={myStyle}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-2">
            <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
            </div>
        </div>
    )
}
