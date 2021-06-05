import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MicIcon from '@material-ui/icons/Mic';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MovieIcon from '@material-ui/icons/Movie';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { useState } from 'react';
import cards, { sidebarData, product, movies, songs, books } from './Data';
import Card from './Card';
import Product from './Product';
function Main() {
  const [expand, setExpand] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState('Rahul');
  const [bookCount, setBookCount] = useState(0);
  const [searchOpen,setSearchOpen]=useState(false);

  const moveLeft = () => {};

  return (
    <div className="main">
      <div
          className="sidebar"
          style={sidebarOpen ? {} : { transform: 'translateX(-100%)'}}
        >
          <div className="sidebar_heading">
            <AccountCircleIcon style={{ color: 'whitesmoke' }} />
            <h1>{`Hello, ${user}`}</h1>
          </div>
          <ul>
            {sidebarData.map(list => {
              return <li>{list}</li>;
            })}
          </ul>
        </div>
       <div
          className="overlay"
          style={sidebarOpen ? { display: 'block' } : { display: 'none' }}
          onClick={() => {setSidebarOpen(!sidebarOpen)
            document.body.style.overflow='unset';}}
        ></div>
       
      {/* header */}
      <div className="header">
        
       
        <div className="header_upper">
          <div className="upper_left">
            <div className="menu" onClick={() => {
              if(!sidebarOpen){

              setSidebarOpen(!sidebarOpen)
              document.body.style.overflow='hidden';
            }
            
            }
              }>
              <MenuIcon />
            </div>
            <div className="logo">
              <img src="amazon-logo.png" height="40px" alt="" />
            </div>
          </div>
          <div className="upper_right">
            <SearchIcon onClick={()=>setSearchOpen(!searchOpen)}/>
            <MicIcon />
            <ShoppingCartIcon />
          </div>
        </div>
        <div className="header_search" style={searchOpen?{height:'60px'}:{height:'0'}}>
          <input type="text" />
          <button><SearchIcon/></button>
        </div>
        <div className="header_lower">
          <div className="lower_left">
            <h1>prime</h1>
            <button className="toggle" onClick={() => setExpand(!expand)}>
              <ExpandMoreIcon
                style={
                  expand
                    ? { transform: 'rotate(180deg)', color: 'Gray' }
                    : { transform: 'rotate(0deg)', color: 'Gray' }
                }
              />
            </button>
            <ul style={expand ? { display: 'flex' } : { display: 'none' }}>
              <li>Manage My Membership</li>
              <li>Help</li>
            </ul>
          </div>
          <div className="lower_right">
            <p style={expand ? { color: 'lightgray' } : {}}>
              Manage My Membership
            </p>
          </div>
        </div>
      </div>

      {/* hero */}
      <div className="hero" style={{ backgroundImage: "url('hero.jpg')" }}>
        <div className="hero_text">
          <h1>{`Welcome back, ${user} !`}</h1>
          <p>Have fun exploring what Prime has to offer.</p>
        </div>
      </div>

      {/* hero_card */}
      <div className="hero_card">
        <div className="heading">
          <div className="heading_left">
            <h1>Prime Savings</h1>
            <p>since July 25,2020</p>
            <a href="">Learn More</a>
          </div>
          <div className="heading_right">
            <p>2899</p>
          </div>
        </div>
        <div className="hero_card_bottom">
          <div className="hero_card-bottom_left">
            <div className="image_icon">
              <SportsEsportsIcon
                style={{ color: 'whitesmoke', fontSize: '30px' }}
              />
            </div>
          </div>
          <div className="hero_card-bottom_right">
            <h1>Delivery Savings</h1>
            <p>&#8377;2880</p>
          </div>
        </div>
        <div className="hero_card_bottom">
          <div className="hero_card-bottom_left">
            <div className="image_icon">
              <p>&#8377;</p>
            </div>
          </div>
          <div className="hero_card-bottom_right">
            <h1>Deals Savings</h1>
            <p>&#8377;99</p>
          </div>
        </div>
      </div>

      {/* cards */}
      {cards.map(data => {
        return (
          <Card
            key={data.id}
            heading={data.heading}
            image={data.image}
            info={data.info}
            link={data.link}
          />
        );
      })}

      {/* shopping slider */}
      <div className="slider_heading">
        <p>prime shopping</p>
      </div>
      <div className="slider">
        <div className="slider_info">
          <p>More Prime exclusive offers</p>
        </div>
        <div className="slider_main">
          <button>
            <ChevronLeftIcon onclick={moveLeft} />
          </button>
          <div className="content">
            {product.map(item => {
              return (
                <Product
                  image={item.image}
                  desc={item.title}
                  price={item.price}
                />
              );
            })}
          </div>
          <button>
            <ChevronRightIcon />
          </button>
        </div>
      </div>
      {/* grids */}
      <div className="grid_heading">
        <p>prime Entertainment</p>
      </div>
      <div className="grid">
        <p>See all movies & TV shows on Prime Video</p>
        <div className="grid_container">
          {movies.map(movie => (
            <div className="grid_items">
              <img src={movie} alt="movie_poster" />
            </div>
          ))}
        </div>
      </div>
      <div className="grid2">
        <p>Popular and Trending Music</p>
        <div className="grid_container">
          {songs.map(song => (
            <div className="grid_items">
              <img src={song} alt="album_art" />
            </div>
          ))}
        </div>
      </div>

      {/* reading */}
      <div className="reading">
        <div className="reading_heading">
          <p>Trending in Prime Reading</p>
        </div>
        <div className="reading_main">
          <button>
            <ChevronLeftIcon
              onClick={() => {
                bookCount != 0
                  ? setBookCount(bookCount - 1)
                  : setBookCount(bookCount);
              }}
            />
          </button>
          <div className="reading_content">
            <div className="book_image">
              <img src={books[bookCount].thumbnailUrl} alt="" />
            </div>
            <div className="book_title">
              <p>{books[bookCount].title}</p>
            </div>
            <div className="book_author">
              <p>{[...books[bookCount].authors].join(',')}</p>
            </div>
            <div className="book_price">
              <p>&#8377;{books[bookCount].price}</p>
            </div>
          </div>
          <button>
            <ChevronRightIcon
              onClick={() => {
                bookCount < books.length - 1
                  ? setBookCount(bookCount + 1)
                  : setBookCount(bookCount);
              }}
            />
          </button>
        </div>
      </div>

      {/* categories */}
      <div className="categories_heading">
        <p>explore my prime</p>
      </div>
      <div className="categories">
              <div className="video">
               <MovieIcon className='icon'/>
                <p>video</p>
              </div>
              <div className="music">
            <PlayCircleFilledIcon className='icon'/>
              <p>music</p>
              </div>
              <div className="kindle">
             <ChromeReaderModeIcon className='icon'/>
              <p>reading</p>
              </div>
              <div className="credit_card">
            <CreditCardIcon className='icon'/>
              <p>credit card</p>
              </div>
              <div className="delivery">
             <LocalMallIcon className='icon' />
              <p>delivery</p>
              </div>

      </div>

      {/* footer */}

      <div className="footer">
        <div className="footer_link">
          <a href="#">Back to Top</a>
        </div>
       <div className="terms">
         <p>Amazon Prime Terms and Conditions</p>
       </div>
      </div>
    </div>
  );
}

export default Main;
