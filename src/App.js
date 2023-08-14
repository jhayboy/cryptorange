import {useEffect, useState} from 'react'; 
import {BsThreeDots, BsFillBellFill} from 'react-icons/bs';
import {RiTiktokLine} from 'react-icons/ri';
import {TfiEmail} from 'react-icons/tfi';
import {PiWhatsappLogo} from 'react-icons/pi';
import {TbBrandTelegram} from 'react-icons/tb';
import {LiaDiscord} from 'react-icons/lia';
import {BsInstagram} from 'react-icons/bs';
import {LuTwitter} from 'react-icons/lu';
import Data from './Dats';
import './App.css';

function App() {

  // useEffect (() => {
  //   const propo = Data.map()
  // })
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollY = window.scrollY;

      // Check if the page has been scrolled 500px downward
      setIsScrolledDown(scrollY > 100);
    };

    // Add event listener for scroll events
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="p-5 bg-black h-full">
      <div className={isScrolledDown ? 'justify-between flex bg-white bg-opacity-40 fixed right-0 left-0  w-full rounded-full' : 'justify-between flex w-full'}>
        <div className='bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center'><BsThreeDots/></div>
        <div className={isScrolledDown ? 'flex' : 'hidden'}><img src='' alt='profile'/></div>
        <div className='bg-white rounded-full p-2 flex items-center h-10 gap-2'>
          <BsFillBellFill/>
          <p className='font-bold'>Subscribe</p>
        </div>
      </div>

      <div className='h-full flex flex-col justify-center items-center'>
        <div className='bg-white h-24 w-24 rounded-full'><img src='/capitalclub.jpeg' alt=''/></div>
        <p className='text-white font-bold text-2xl pt-3'>Crypto Range</p>
        <p className='text-xl pt-2 text-center text-gray-500'>Crypto Update 
AI & Tech
Stay ahead of 99% of people
For Kings Only 👑</p>
        <div className='text-white flex gap-3 pt-2'>
          <a href='www.tiktok.com/@crypto.range'><RiTiktokLine className='text-2xl'/></a>
          {/* <a href='https://wa.me/+2349013779517'><TfiEmail className='text-2xl'/></a> */}
          {/* <a href='https://wa.me/+2349013779517'><PiWhatsappLogo className='text-2xl'/></a> */}
          <a href='https://t.me/+W_s6bkDAbXVjZTU8'><TbBrandTelegram className='text-2xl'/></a>
        </div>
      </div>

      <div className='w-full flex flex-col gap-3 mt-5'>
        

        <div className='hover:scale-105 w-full flex justify-between items-center px-3 py-3 bg-gray-600 bg-opacity-40 rounded-md text-white'>
          <img className="rounded-full p-2 w-14 h-14" src='https://miro.medium.com/v2/resize:fit:658/0*h-_lr2umnOnqPJAH.png' alt='logo'/>
          <a href='https://www.catly.io/mobile/#/pages/cat?rid=99758' className='font-semibold text-lg'>Catly Airdrop</a>
          <BsThreeDots className='text-lg text-white'/>
        </div>

        <div className='hover:scale-105 w-full flex justify-between items-center px-3 py-3 bg-gray-600 bg-opacity-40 rounded-md text-white'>
          <img className="rounded-full p-2 w-14 h-14 " src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJPu28vDBYKxmNkpKmXO6LntdsNzI-PibDg5dJwC92e5Oso_DRuzefex3h4rYueQx-FVM&usqp=CAU' alt='logo'/>
          <a href='https://minepi.com/jhayboypi' className='font-semibold text-lg'>Pi Network</a>
          <BsThreeDots className='text-lg text-white'/>
        </div>

        <div className='hover:scale-105 w-full flex justify-between items-center px-3 py-3 bg-gray-600 bg-opacity-40 rounded-md text-white'>
          <img className="rounded-full p-2 w-14 h-14 " src='https://play-lh.googleusercontent.com/peecVpF209G33-d_IKTKHvD1Dm5ss5H_sdsSiGr_YIIoK7lMQThyACX-VJSuTJuUmMI=w240-h480-rw' alt='logo'/>
          <a href='https://gee.bio/register?k=0x2098C' className='font-semibold text-lg'>GEE</a>
          <BsThreeDots className='text-lg text-white'/>
        </div>


      </div>

      <div className='pt-5 text-sm text-gray-700 w-full flex justify-center items-center'>
        <p>The eyes is useless when the mind is blind</p>
      </div>
    </div>
  );
}

export default App;
