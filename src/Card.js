function Card({heading,image,info,link}) {
    return (
        <div className='card'>
            <div className="card_heading"><p>{heading}</p></div>
            
            <div className="card_image">
                <img src={image} alt="" />
            </div>
            <div className="card_info">
                <p>{info}</p>
            </div>
            <div className="card_link">
                <a href="">{link}</a>
            </div>
        </div>
    )
}

export default Card
