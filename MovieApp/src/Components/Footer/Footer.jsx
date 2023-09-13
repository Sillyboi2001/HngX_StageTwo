import Twitter from '../../Images/Twitter.png';
import Yt from '../../Images/Yt.png';
import Ig from '../../Images/Insta.jpg';
import Facebook from '../../Images/Facebook.png';

const Footer = () => {
  return (
    <>   
      <footer>
        <div className='social-page'>
          <button><img alt='imob' src={Facebook} /></button>
          <button><img alt='imob' src={Ig} /></button>
          <button><img alt='imob' src={Twitter} /></button>
          <button><img alt='imob' src={Yt} /></button>
        </div>
        <div className='terms'>
          <p>Condition of use</p>
          <p>Privacy and Policy</p>
          <p>Press Room</p>
        </div>
        <div className='dedication'>
          <p>@2023 Moviebox By Silas</p>
        </div>
      </footer>
    </>
  )
};

export default Footer;