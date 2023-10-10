import './Home.scss';
import Other07 from './assets/Other 07.png';
import Logos from './assets/Logos.png';
import Other18 from './assets/Other 18.png';
import Olivia from './assets/Olivia.png';

function Home() {

  return(
    <div className='home-container'>


        <header className='home-header-container'>
          <nav className="navbar">
            <h1 className='logo'>KRYPTO</h1>
              <ul className="nav-links">
                <li><a href="/">about</a></li>
                <li><a href="/">pricing</a></li>
                <li><a href="/">contact</a></li>
                <li><a href="/">buy nfts</a></li>
              </ul>
          </nav>

        </header>
      <div className='radial'></div>
        <main className='home-main-container'>
          <div className="hero-content">

            <div className="info-container-one">
              <div>
                <h2 className='h2-content'>Discover and Collect Rare NFTs</h2>
                <p>The most secure marketplace for buying <br />
                  and selling unique crypto assets.</p>
                <div className='info-buttons'>
                  <button id='b1'>BUY NFTS</button>
                  <button id='b2'>SELL NFTS</button>
                </div>
              </div>
              <img src={Other07} alt="a picture" />
            </div>

            <div className="info-container-two">            
              <img src={Logos} alt="" />
            </div>
            <div className="info-container-three">
                <img src={Other18} alt="" />
              <div className="container">
                <h1 className="title">This Is My Amazing H2</h1>
                <p className="subtitle">Use our built-in analytics dashboard to pull valuable insights and monitor <br /> 
                the value of your Krypto portfolio over time.</p>
                <button id='b3'>BUY MORE NFTS</button>
              </div>
            </div>
            <div className="info-container-four">
                  <p>TESTIMONIALS</p>
                  <h2>Read What Others Have To Say</h2>
              <div className="persons-container"> 
                <div className="person-container">
                  <img src={Olivia} alt="Olivia" />
                  <h3>Olivia</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncullamcorper
                    scelerisque mi, in malesuada felis malesuada vel.
                  </p>  
                </div>
                <div className="person-container">
                  <img src={Olivia} alt="Olivia" />
                  <h3>Olivia</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper
                    scelerisque mi, in malesuada felis malesuada vel.
                  </p>
                  <div></div>
                </div>
                <div className="person-container">
                  <img src={Olivia} alt="Olivia" />
                  <h3>Olivia</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper
                    scelerisque mi, in malesuada felis malesuada vel.
                  </p>
                </div>
              </div>
            </div>

              <div className="info-container-five">                
                <div>
                  <h1>This is my amazing H2</h1>
                </div>
              </div>
          </div>

        </main>

        <footer>
          <div className='footer'>

            <div className="footer-column">
              <h3>Footer Column</h3>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
              <a href="#">Link 4</a>
            </div>
            <div className="footer-column">
                <h3>Footer Column</h3>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                <a href="#">Link 4</a>
            </div>
            <div className="footer-column">
                <h3>Footer Column</h3>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                <a href="#">Link 4</a>
            </div>

          </div>

        </footer>
    </div>
  )
}

export default Home
