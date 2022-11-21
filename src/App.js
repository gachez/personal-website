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
import Anasa from './assets/anasa.png'
import Down from './assets/down-arrow.png'
import Menu from './assets/menu.png'
import React from 'react';

const projects = [
  {
    name: 'Auditpap - Personal finance application',
    img: 'http://auditpap.tengezastudios.co.ke/images/mockups.png',
    category: 'Digital products'
  },
  {
    name: 'Elimufy - School system',
    img: Dior,
    category: 'Digital products'
  },
  {
    name: 'Mengesa Advocates - Law firm',
    img: MA,
    category: 'Corporate'
  },
  {
    name: 'Purpleteam Cybersec - Cyber security firm',
    img: PT,
    category: 'Corporate'
  },
  {
    name: 'Bloomsfield Kindergarten - Pre school',
    img: BK,
    category: 'Corporate'
  },
  {
    name: 'Anwani Architects - Architecture firm',
    img: AA,
    category: 'Corporate'
  },
  {
    name: 'B2B - Business to business',
    img: B2b,
    category: 'Corporate'
  },
  {
    name: 'Datasec Ltd - Cybersecurity firm',
    img: DS,
    category: 'Corporate'
  },
  {
    name: 'Anasa Ventures - Art exchange website',
    img: Anasa,
    category: 'E-commerce'
  }
]

const skills = [
  {
    name: 'Frontend Development',
    description: 'Javascript, Typescript, ReactJs, HTML, CSS, SaSS, Tailwind, React Native'
  },
  {
    name: 'Backend Development',
    description: 'NodeJs, Express, Python, Rust'
  },
  {
    name: 'Database Development',
    description: 'SQL, TypeORM, MongoDB, PostgresQl'
  },
  {
    name: 'Version Control',
    description: 'Git, Github, Bitbucket'
  }
]

function App() {
  const [selectedSkill, setSelectedSkill] = React.useState('')
  React.useEffect(() => {
    setSelectedSkill(selectedSkill)
  },[selectedSkill])
  return (
    <div className="Container">
      <div className='navbar'>
        <h2 className='navbar-icon'>BG</h2>
        <div className='navbar-items'>
          <a href='#work'><p>Work</p></a>
          <a href='#skills'><p>Skills</p></a>
          <a href='./assets/Resume.docx'><p>Resume</p></a>
          <a href='#contact'><p>Contact</p></a>
        </div>
        <div className='menu'>
          <img src={Menu} style={{width: '36px', height: '36px'}} />
        </div>
      </div>
      <div className='hero' id='hero'>
        <div className='hero-div'>
          <h1 className='hero-title'>Hello 👋, I'm Brian a <strong style={{color:'white'}}>Fullstack</strong> Software engineer</h1>
          <p className='hero-subtitle'>I build perfomant websites and mobile application that scale</p>
        </div>
      </div>
      <div className='banner' id='banner'>
      </div>
      <div className='work' id='work'>
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
                .filter(it => it.category === 'Digital products')
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
                .filter(it => it.category === 'Corporate')
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
                <span>03</span>
              </div>
              <div className='section-details' >
                <h3 className='section-subtitle'>Ecommerce</h3>
                <p className='section-subparagraph'>
                Inspiring, functional, and result-oriented websites for enterprises.
                Full-cycle award-winning solutions from website strategy to 
                complex custom development.</p>
              </div>
        </div>
        <div className='projects-container'>
              {
                projects
                .filter(it => it.category === 'E-commerce')
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
      <div className='skills' id='skills' >
              <div className='skills-A'>
                <p className='skills-A-title'>My skills</p>
              </div>
              <div className='skills-B'>
                 {
                  skills.map(it => {
                    return(
                    <div className='skills-item' onClick={() => {
                      selectedSkill === it.name?setSelectedSkill(''):setSelectedSkill(it.name)
                    }}>
                      <div className='skill-item-section'>
                        <div style={{
                          display:'flex', 
                          alignItems: 'center', 
                          justifyContent: 'space-between'
                          }}
                          className='title-img'
                          >
                          <h4 className='skills-item-title'>{it.name}</h4>
                          <div className='down'>
                            <img style={{width: '24px', height: '16px', objectFit: 'contain'}} alt='down'  src={Down}  />
                          </div>
                        </div>
                        <p style={{color:'#fff', display: selectedSkill===it.name?'block':'none'}}>{it.description}</p>
                      </div>
                   </div>
                    )
                  })
                 }
              </div>
      </div>
      <footer className='footer'>

        <div className='links'>
          <a href='https://github.com/gachez'>Github</a>
          <a href='https://www.linkedin.com/in/brian-gacheru-4b8aa1165/'>Linkedin</a>
        </div>
        <div className='pill-presentation' onClick={() => {
          window.open('./assets/Resume.docx')
        }}>
          <span>Download resume</span>
        </div>
        <div className='pill'>
          <span>Get in touch</span>
        </div>
        <div className='cp'>
          <h2>BG</h2>
          <span>© BG 2022</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
