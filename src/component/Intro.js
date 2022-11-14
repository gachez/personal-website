import { Parallax } from 'react-scroll-parallax';

export const Intro = () => (
  <Parallax translateX={['-100px', '200px']}>
    <div style={{
        width: '50%',
        height: '50px'
    }} className="intro-comp" >
    </div>
  </Parallax>
);