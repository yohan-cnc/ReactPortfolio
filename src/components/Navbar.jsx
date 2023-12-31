import React,{useState} from 'react'
import {FaBars,FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo2.png'
import {Link} from 'react-scroll'
import Resume from '../assets/CV_CANAC_Yohan.pdf'

const Navbar = () => {
    const  [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300">
        <div>   
            <img src={Logo} alt="" style={{width:'50px'}} />
        </div>

        {/*Menu*/}
        <ul className='hidden md:flex'>
            <li className='hover:scale-105 duration-200'>
                <Link to="home" smooth={true} duration={500}>
                    Home                
                </Link>
            </li>
            <li className='hover:scale-105 duration-200'>
                <Link to="about" smooth={true} duration={500}>
                    About Me               
                </Link>
            </li>
            <li className='hover:scale-105 duration-200'>
                <Link to="skills" smooth={true} duration={500}>
                    My Skills                
                </Link>
            </li>
            <li className='hover:scale-105 duration-200'>
                <Link to="work" smooth={true} duration={500}>
                    My Work                
                </Link>
            </li>
            <li className='hover:scale-105 duration-200'>
                <Link to="contact" smooth={true} duration={500}>
                    Contact Me                
                </Link>
            </li>
        </ul>
        

        {/*Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes/>}
        </div>

        {/*Mobile Menu*/}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen  bg-gradient-to-b from-black via-black to-gray-800 flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl hover:scale-105 duration-200' ><li>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home                
                </Link>
            </li></li>
            <li className='py-6 text-4xl hover:scale-105 duration-200'><li>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    About                
                </Link>
            </li></li>
            <li className='py-6 text-4xl hover:scale-105 duration-200'><li>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                    Skills                
                </Link>
            </li></li>
            <li className='py-6 text-4xl hover:scale-105 duration-200'><li>
                <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                    Work                
                </Link>
            </li></li>
            <li className='py-6 text-4xl hover:scale-105 duration-200'><li>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                    Contact                
                </Link>
            </li></li>
        </ul>

        {/*Social Icons*/}
        <div className='hidden  lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-tr-md'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://www.linkedin.com/in/yohan-canac-85a50b223/">
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://github.com/yohan-cnc">
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#56a292]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="mailto:yohan.canac.21@gmail.com">
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] rounded-br-md'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href={Resume} download={true}>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Navbar