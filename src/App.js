import './App.css';
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
import Close from './assets/close.png'
import Up from './assets/up-arrow.png'
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Parallax } from 'react-scroll-parallax';

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
  const [openMenu,setOpenMenu] = React.useState(false)
  React.useEffect(() => {
    setSelectedSkill(selectedSkill)
  },[selectedSkill])

  return (
    <div className="Container">
      <div style={{
        position: 'fixed',
        top: '95%',
        right: '1rem',
        width: '2.5rem',
        height: '2.5rem',
        borderRadius: '50%',
        backgroundColor: '#fff',
        display: 'grid'
      }}
      onClick={() => {
        window.scrollTo(0,0)
      }}
      >
        <img
         style={{margin: 'auto',width: '1.75rem', height:'1.75rem'}}
         src={Up}
         alt='up'
        />
      </div>
      <div className='navbar' style={{zIndex: 99}}>
        <h2 className='navbar-icon'>BG</h2>
        <div className='navbar-items'>
          <a href='#work'><p>Work</p></a>
          <a href='#skills'><p>Skills</p></a>
          <a href='./assets/Resume.docx'><p>Resume</p></a>
          <a href='#contact'><p>Contact</p></a>
        </div>
        <div className='menu'>
          <img
           alt='close'
           src={!openMenu?Menu:Close} 
           style={{width: '32px', height: '32px'}}
           onClick={() => {
            openMenu?setOpenMenu(false):setOpenMenu(true)
         }} 
          />
        </div>
      </div>
      <div className='small-menu' style={{display: openMenu?'flex':'none'}}>
          <div className='small-menu-items'>
            <a href='#work' onClick={() => {
              setOpenMenu(false)
            }}><p>Work</p></a>
            <a href='#skills' onClick={() => {
              setOpenMenu(false)
            }} ><p>Skills</p></a>
            <a href='./assets/Resume.docx' onClick={() => {
              setOpenMenu(false)
            }} ><p>Resume</p></a>
            <a href='#contact' onClick={() => {
              setOpenMenu(false)
            }} ><p>Contact</p></a>
          </div>
          <div className='small-menu-footer'>
            <div className='sm-pill1'>
              <span>Resume</span>
            </div>
            <div className='sm-pill2'>
              <span>Get in touch</span>
            </div>
          </div>
        </div>
     <Parallax speed={-30}>
      <div className='hero' id='hero'>
          <div className='hero-div'>
                <h1 className='hero-title animate__animated animate__fadeIn animate__fast'>Hello 👋, I'm Brian <strong style={{color:'white'}}>Fullstack</strong> Software Engineer</h1>
            </div>
        </div>
      </Parallax>   
      <Parallax speed={1}>
        <div className='banner animate__animated animate__fadeIn animate__slower' id='banner'>
          <h1 className='banner-text'>
            I build solid and scalable websites and mobile applications with great user experiences.
          </h1>
        </div>
      </Parallax>
      <Parallax speed={10}>
        <div className='work' id='work'>
          <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true}>
            <h1 className='work-title'>Work</h1>
          </AnimationOnScroll> 
          <div className='work-section'>
            <AnimationOnScroll animateIn='animate__slideInUp' animateOnce={true}>
              <div className='section-title-desc'>
                <AnimationOnScroll animateIn='animate__sildeInUp' delay={800} animateOnce={true}> 
                  <div className='numberRound'>
                    <span>01</span>
                  </div></AnimationOnScroll>
                <AnimationOnScroll className='section-details' animateIn='animate__slideInUp' delay={950} animateOnce={true} >
                  <div>
                      <h3 className='section-subtitle'>Digital Products</h3>
                      <p className='section-subparagraph'>
                        From idea to a product: 
                        creating successful digital services for innovative 
                        startups and established businesses with cutting-edge 
                        UX, UI design,front and back-end development.</p>
                    </div>
                  </AnimationOnScroll> 
                </div>
              </AnimationOnScroll>
                <div className='projects-container'>
                  {
                    projects
                    .filter(it => it.category === 'Digital products')
                    .map((it,index) => {
                      return(
                        <AnimationOnScroll className='project' delay={index * 100 } animateIn='animate__slideInUp' animateOnce={true}>
                          <div >
                            <img alt='img' src={it.img} className='project-img' />
                            <div>
                              <span className='project-title'>{it.name.split('-')[0]}</span><br />
                              <span className='project-subtitle'>{it.name.split('-')[1]}</span>
                            </div>
                            
                        </div>
                        </AnimationOnScroll>
                      )
                    })
                  }
                </div>
              <AnimationOnScroll animateIn='animate__sildeInUp'>
                <div className='section-title-desc'>
                  <AnimationOnScroll animateIn='animate__slideInUp' delay={800} animateOnce={true}> 
                    <div className='numberRound'>
                      <span>02</span>
                    </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll className='section-details' animateIn='animate__slideInUp' delay={950} animateOnce={true}>
                      <div>
                        <h3 className='section-subtitle'>Corporate Websites</h3>
                        <p className='section-subparagraph'>
                        Inspiring, functional, and result-oriented websites for enterprises.
                        Full-cycle award-winning solutions from website strategy to 
                        complex custom development.</p>
                      </div>
                    </AnimationOnScroll>
                  </div>
              </AnimationOnScroll>   

              <div className='projects-container'>
                {
                  projects
                  .filter(it => it.category === 'Corporate')
                  .map((it,index) => {
                    return(
                      <AnimationOnScroll className='project' delay={index * 100 } animateIn='animate__slideInUp' animateOnce={true}>
                          <div>
                            <img alt='img' src={it.img} className='project-img' />
                            <div>
                              <span className='project-title'>{it.name.split('-')[0]}</span><br />
                              <span className='project-subtitle'>{it.name.split('-')[1]}</span>
                            </div>
                        </div>
                      </AnimationOnScroll>  
                    )
                  })
                }
              </div>
            <AnimationOnScroll animateIn='animate__slideInUp' animateOnce={true}>
              <div className='section-title-desc'>
                <AnimationOnScroll animateIn='animate__slideInUp' delay={800} animateOnce={true}>
                  <div className='numberRound'>
                    <span>03</span>
                  </div>
                </AnimationOnScroll>
                <AnimationOnScroll className='section-details' animateIn='animate__slideInUp' delay={950} animateOnce={true}>
                  <div >
                    <h3 className='section-subtitle'>Ecommerce</h3>
                    <p className='section-subparagraph'>
                    Inspiring, functional, and result-oriented websites for enterprises.
                    Full-cycle award-winning solutions from website strategy to 
                    complex custom development.</p>
                  </div>
                </AnimationOnScroll>
          </div></AnimationOnScroll>
          <div className='projects-container'>
                {
                  projects
                  .filter(it => it.category === 'E-commerce')
                  .map(it => {
                    return(
                    <AnimationOnScroll className='project' animateIn='animate__slideInUp' delay={1000} animateOnce={true}>
                        <div>
                          <img alt='img' src={it.img} className='project-img' />
                          <span className='project-title'>{it.name.split('-')[0]}</span><br />
                          <span className='project-subtitle'>{it.name.split('-')[1]}</span>
                        </div>
                    </AnimationOnScroll> 
                    )
                  })
                }
              </div>
        </div>
        </div>
      </Parallax>
      <Parallax speed={5} >
      <div className='skills' id='skills'>
            <AnimationOnScroll className='skills-A' animateIn='animate__slideInUp' animateOnce>
              <div>
                <p className='skills-A-title'>My skills</p>
              </div>
            </AnimationOnScroll>
              <div className='skills-B'>
                 {
                  skills.map((it,index) => {
                    return(
                    <AnimationOnScroll animateIn='animate__slideInUp' delay={index * 100} animateOnce>
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
                    </AnimationOnScroll>
                    )
                  })
                 }
              </div>
      </div>
      </Parallax>
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
