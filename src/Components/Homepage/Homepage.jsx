import React from 'react'

// IMPORT AASSET
import headerBand from '../../Assets/Images/headerBand.png';
import img1 from '../../Assets/Images/img1.png';
import img2 from '../../Assets/Images/img2.png';
import img3 from '../../Assets/Images/img3.png';
import img4 from '../../Assets/Images/img4.png';
import rbVideo from '../../Assets/Videos/rbVideo.webm'
import footer from '../../Assets/Images/footer.png';


const Homepage = ({ searchVisible, catTwo, catOne }) => {
    return (
        <div className={`homepage-wrapper ${searchVisible || catOne || catTwo ? 'hidden' : 'active'}`}>
            <div>
                <img src={headerBand} alt="home" />
            </div>
            <div>
                <video src={rbVideo} autoPlay loop />
            </div>
            <div>
                <img src={img1} alt="home" />
            </div>
            <div>
                <img src={img2} alt="home" />
            </div>
            <div>
                <img src={img3} alt="home" />
            </div>
            <div>
                <img src={img4} alt="home" />
            </div>
            <div>
                <img src={footer} alt="home" />
            </div>
        </div>
    );
}

export default Homepage;