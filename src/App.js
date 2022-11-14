import logo from './logo.svg';
import './App.css';
import Video from './assets/videos/video.mp4'
import Dior from './assets/dior.jpg'
import MA from './assets/mengesa5.png'
import PT from './assets/purple-purp.png'
import BK from './assets/bloomsfield.png'
import AA from './assets/anwani.png'
import B2b from './assets/b2b.png'
import DS from './assets/ds.png'

const projects = [
  {
    name: 'Auditpap - Personal finance application',
    img: 'http://auditpap.tengezastudios.co.ke/images/mockups.png',
    category: 'digital products'
  },
  {
    name: 'Elimufy - School system',
    img: Dior,
    category: 'digital products'
  },
  {
    name: 'Mengesa Advocates - Law firm',
    img: MA,
    category: 'corporate'
  },
  {
    name: 'Purpleteam Cybersec - Cyber security firm',
    img: PT,
    category: 'corporate'
  },
  {
    name: 'Bloomsfield Kindergarten - Pre school',
    img: BK,
    category: 'corporate'
  },
  {
    name: 'Anwani Architects - Architecture firm',
    img: AA,
    category: 'corporate'
  },
  {
    name: 'B2B - Business to business',
    img: B2b,
    category: 'corporate'
  },
  {
    name: 'Datasec Ltd - Cybersecurity firm',
    img: DS,
    category: 'corporate'
  }
]

function App() {
  return (
    <div className="Container">
      <div className='navbar'>
        <h2 className='navbar-icon'>BG</h2>
        <div className='navbar-items'>
          <p>Work</p>
          <p>About</p>
          <p>Resume</p>
          <p>Contact</p>
        </div>
      </div>
      <div className='hero'>
        <div className='hero-div'>
          <h1 className='hero-title'>Hello 👋, I'm Brian a Software engineer, Innovator and Enterprenuer</h1>
          <p className='hero-subtitle'>I build perfomant websites and mobile apps using React</p>
        </div>
      </div>
      <div className='banner'>
      </div>
      <div className='work'>
        <h1 className='work-title'>Work</h1>
        <div className='work-section'>
            <div className='section-title-desc'>
              <div className='numberRound'>
                <span>01</span>
              </div>
              <div className='section-details' >
                <h3 className='section-subtitle'>Digital Products</h3>
                <p className='section-subparagraph'>
                  From idea to a product: 
                  creating successful digital services for innovative 
                  startups and established businesses with cutting-edge 
                  UX, UI design,front and back-end development.</p>
              </div>
            </div>
            <div className='projects-container'>
              {
                projects
                .filter(it => it.category === 'digital products')
                .map(it => {
                  return(
                    <div className='project'>
                      <img src={it.img} className='project-img' />
                      <span className='project-title'>{it.name}</span>
                  </div>
                  )
                })
              }
            </div>

            <div className='section-title-desc'>
              <div className='numberRound'>
                <span>02</span>
              </div>
              <div className='section-details' >
                <h3 className='section-subtitle'>Corporate Websites</h3>
                <p className='section-subparagraph'>
                Inspiring, functional, and result-oriented websites for enterprises.
                Full-cycle award-winning solutions from website strategy to 
                complex custom development.</p>
              </div>
            </div>
            <div className='projects-container'>
              {
                projects
                .filter(it => it.category === 'corporate')
                .map(it => {
                  return(
                    <div className='project'>
                      <img src={it.img} className='project-img' />
                      <span className='project-title'>{it.name}</span>
                  </div>
                  )
                })
              }
            </div>
        </div>

      </div>
    </div>
  );
}

export default App;
