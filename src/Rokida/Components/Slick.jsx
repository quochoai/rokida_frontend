import React from "react"
import Slider from "react-slick";
const SlickCpn = (props) => {
    return(
        <div>
            <Slider {...props.settings}>
                {props.children}
            </Slider>
        </div>
    )
}
export default React.memo(SlickCpn)