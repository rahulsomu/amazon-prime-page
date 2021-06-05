function Product({image,desc,price}) {
    return (
        <div className='product'>
          <div className="product_img">
              <img src={image} alt="" />
          </div>
          <div className="product_desc"><p>{desc}</p></div>
          <div className="product_price">
              <div className="current"><p>&#8377;{Math.floor(price*70)}</p></div>
              <div className="selling">&#8377;{Math.floor(price*70+(0.6*price*70))}</div>
          </div>
        </div>
    )
}

export default Product
