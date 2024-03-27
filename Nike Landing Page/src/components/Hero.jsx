const Hero = () => {
    return (
        <div className="mainHeroContainer">
            <div className="firstHeroContainer">
                <h1>YOUR FEET <br /> <span>DESERVE</span> <br /> THE BEST</h1>
                <p>YOUR FEET <span>DESERVE</span> THE <span>BEST</span> AND WE'RE HERE TO HELP YOU WITH OUR <span>SHOES</span>. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <button className="shopnowBtn">SHOP NOW</button>
                <button className="categoryBtn">CATEGORY</button>
                <p style={{ fontSize: "15px" }}>Also Available On</p>
                <img className="amazonLogo" src="https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png" alt="Reload" />
            </div>
            <div className="secondHeroContainer">
                <img src="src\assets\domino-164_6wVEHfI-unsplash-removebg-preview.png" alt="Reload" />
            </div>
        </div>
    )
}
export default Hero;