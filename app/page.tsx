"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [connectMenu,setConnectMenu] = useState(false)
  const [companyMenu,setCompanyMenu] = useState(false)
  const [productMenu,setProductMenu] = useState(false)
  const [menu,setMenu] = useState(false)
  function closeAll() : void {
    setCompanyMenu(false)
    setProductMenu(false)
    setConnectMenu(false)
    setMenu(false)
  }
  return (
    <div className=' w-screen overflow-x-hidden h-screen'>
      <div className=' flex flex-col bg-gradient-to-r rounded-bl-[150px] from-custom-700 to-custom-800'>
        <div className='  bg-bg-desktop min-[930px]:px-20 bg-custom2s  md:bg-custom2  bg-no-repeat bg-custom2p'>
          <div className='relative flex flex-row p-10 justify-between'>
            <div className=' flex flex-row'>
              <div>
                <Image
                src={"/images/logo.svg"}
                width={101}
                height={40}
                alt='logo'/>
              </div>
              <div className=' md:flex hidden ml-8 justify-center items-center text-white space-x-8 flex-row'>
                <div onClick={()=>{setProductMenu(!productMenu),setCompanyMenu(false),setConnectMenu(false)}} className=' relative hover:underline cursor-pointer flex flex-row'>
                  Product
                  <div className=' ml-3 flex items-center'>
                    {!productMenu && (
                      <Image
                      src={"/images/icon-arrow-light.svg"}
                      width={10}
                      height={7}
                      alt='logo'/>
                    )}
                    {productMenu && (
                      <Image
                      src={"/images/icon-arrow-light.svg"}
                      width={10}
                      height={7}
                      className=' rotate-180'
                      alt='logo'/>
                    )}
                  </div>
                  {productMenu && (
                    <div className=' flex flex-col p-5 pr-16 rounded-md space-y-3 absolute top-10  bg-white'>
                      <Link className=' hover:font-semibold text-black' href={"/"}>
                        Overview 
                      </Link>
                      <Link className=' hover:font-semibold text-black' href={"/"}>
                        Pricing
                      </Link>
                      <Link className=' hover:font-semibold text-black' href={"/"}>
                        Marketplace
                      </Link>
                      <Link className=' hover:font-semibold text-black' href={"/"}>
                        Features 
                      </Link>
                      <Link className=' hover:font-semibold text-black' href={"/"}>
                        Integrations
                      </Link>
                    </div>
                  )}
                </div>
                <div onClick={()=>{setCompanyMenu(!companyMenu),setProductMenu(false),setConnectMenu(false)}} className=' relative hover:underline cursor-pointer flex flex-row'>
                  Company
                  <div className=' ml-3 flex items-center'>
                    {!companyMenu && (
                      <Image
                      src={"/images/icon-arrow-light.svg"}
                      width={10}
                      height={7}
                      alt='logo'/>
                    )}
                    {companyMenu && (
                      <Image
                      src={"/images/icon-arrow-light.svg"}
                      width={10}
                      height={7}
                      className=' rotate-180'
                      alt='logo'/>
                    )}
                    
                  </div>
                  {companyMenu && (
                    <div className=' flex flex-col p-5 pr-20 rounded-md space-y-3 absolute top-10  bg-white'>
                      <Link className=' hover:font-semibold text-black' href={"/"}>
                        About 
                      </Link>
                      <Link className=' hover:font-semibold text-black' href={"/"}>
                        Team 
                      </Link>
                      <Link className=' hover:font-semibold text-black' href={"/"}>
                        Blog 
                      </Link>
                      <Link className=' hover:font-semibold text-black' href={"/"}>
                        Careers
                      </Link>
                    </div>
                  )}
                </div>
                <div onClick={()=>{setConnectMenu(!connectMenu),setProductMenu(false),setCompanyMenu(false)}} className=' relative hover:underline cursor-pointer flex flex-row'>
                  Connect
                  <div className=' ml-3 flex items-center'>
                    {!connectMenu && (
                      <Image
                      src={"/images/icon-arrow-light.svg"}
                      width={10}
                      height={7}
                      alt='logo'/>
                    )}
                    {connectMenu && (
                      <Image
                      src={"/images/icon-arrow-light.svg"}
                      width={10}
                      height={7}
                      className=' rotate-180'
                      alt='logo'/>
                    )}
                    
                  </div>
                  {connectMenu && (
                    <div className=' flex flex-col p-5 pr-20 rounded-md space-y-3 absolute top-10  bg-white'>
                      <Link className=' hover:font-semibold text-black' href={"/"}>
                        Contact
                      </Link>
                      <Link className=' hover:font-semibold text-black' href={"/"}>
                        Newsletter
                      </Link>
                      <Link className=' hover:font-semibold text-black' href={"/"}>
                        LinkedIn
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className=' text-white space-x-5 hidden md:flex flex-row justify-center items-center'>
              <button>
                Login
              </button>
              <button className=' bg-white hover:bg-custom-200 hover:text-white  text-custom-800 font-semibold py-2 px-7 rounded-full'>
                Sign Up
              </button>
            </div>
            
            <button onClick={()=>{setMenu(!menu)}}  className=' md:hidden justify-center items-center flex'>
              {!menu && (
                <Image
                src={"/images/icon-hamburger.svg"}
                width={32}
                height={18}
                alt='menu'/>
              )}
              {menu && (
                <Image
                src={"/images/icon-close.svg"}
                width={32}
                height={18}
                alt='menu'/>
              )}
              
            </button>
            {menu && (
              <div className=' md:hidden  z-10 absolute top-28 left-0  w-full flex justify-center'>
                <div className=' space-y-5 w-11/12 py-10 rounded-lg text-custom-300 shadow-xl bg-white'>
                  <div onClick={()=>{setProductMenu(!productMenu)}} className=' flex space-x-2 flex-row justify-center items-center'>
                    <div>
                      Product
                    </div>
                    {!productMenu && (
                      <Image
                      src={"/images/icon-arrow-dark.svg"}
                      width={10}
                      height={7}
                      alt='arrow-dark'
                      />
                    )}
                    {productMenu && (
                      <Image
                      src={"/images/icon-arrow-dark.svg"}
                      width={10}
                      height={7}
                      className=' rotate-180'
                      alt='arrow-dark'
                      />
                    )}
                    
                  </div>
                  {productMenu && (
                    <div className=' mt-5 w-full flex justify-center items-center'>
                      <div className=' w-11/12 space-y-5 py-5 bg-custom-400 flex justify-center items-center flex-col rounded-md'>
                        <Link onClick={closeAll} className='' href={"/"}>
                          Overview 
                        </Link>
                        <Link onClick={closeAll} className='' href={"/"}>
                          Pricing
                        </Link>
                        <Link onClick={closeAll} className='' href={"/"}>
                          Marketplace
                        </Link>
                        <Link onClick={closeAll} className='' href={"/"}>
                          Features 
                        </Link>
                        <Link onClick={closeAll} className='' href={"/"}>
                          Integrations
                        </Link>
                      </div>
                    </div>
                    
                  )}
                  <div onClick={()=>{setCompanyMenu(!companyMenu)}} className=' flex space-x-2 flex-row justify-center items-center'>
                    <div>
                      Company
                    </div>
                    {!companyMenu && (
                      <Image
                      src={"/images/icon-arrow-dark.svg"}
                      width={10}
                      height={7}
                      alt='arrow-dark'
                      />
                    )}
                    {companyMenu && (
                      <Image
                      src={"/images/icon-arrow-dark.svg"}
                      width={10}
                      height={7}
                      className=' rotate-180'
                      alt='arrow-dark'
                      />
                    )}
                    
                  </div>
                  {companyMenu && (
                    <div className=' mt-5 w-full flex justify-center items-center'>
                      <div className=' w-11/12 space-y-5 py-5 bg-custom-400 flex justify-center items-center flex-col rounded-md'>
                      <Link onClick={closeAll} className='' href={"/"}>
                        About
                      </Link>
                      <Link onClick={closeAll} className='' href={"/"}>
                        Team
                      </Link>
                      <Link onClick={closeAll} className='' href={"/"}>
                        Blog
                      </Link>
                      <Link onClick={closeAll} className='' href={"/"}>
                        Careers 
                      </Link>
                      </div>
                    </div>
                    
                  )}
                  <div onClick={()=>{setConnectMenu(!connectMenu)}} className=' flex space-x-2 flex-row justify-center items-center'>
                    <div>
                      Connect
                    </div>
                    {!connectMenu && (
                      <Image
                      src={"/images/icon-arrow-dark.svg"}
                      width={10}
                      height={7}
                      alt='arrow-dark'
                      />
                    )}
                    {connectMenu && (
                      <Image
                      src={"/images/icon-arrow-dark.svg"}
                      width={10}
                      height={7}
                      className=' rotate-180'
                      alt='arrow-dark'
                      />
                    )}
                    
                  </div>
                  {connectMenu && (
                    <div className=' mt-5 w-full flex justify-center items-center'>
                      <div className=' w-11/12 space-y-5 py-5  bg-custom-400 flex justify-center items-center flex-col rounded-md'>
                        <Link onClick={closeAll} className='' href={"/"}>
                          Contact
                        </Link>
                        <Link onClick={closeAll} className='' href={"/"}>
                          Newsletter
                        </Link>
                        <Link onClick={closeAll} className='' href={"/"}>
                          LinkedIn
                        </Link>
                      </div>
                    </div>
                    
                  )}
                  <hr />
                  <div className=' space-y-3 flex flex-col justify-center items-center'>
                    <button>
                      Login
                    </button>
                    <button className=' text-white py-1 px-5 rounded-full bg-gradient-to-r from-custom-700 to-custom-800'>
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className=' pb-40 mt-20 flex flex-col justify-center items-center'>
            <div className=' text-center text-7xl text-white'>
              A modern publishing platform
            </div>
            <div className=' text-center text-xl  font-thin mt-5 text-white' >
              Grow your audience and build your online brand
            </div>
            <div className=' space-x-5 mt-5 flex flex-row justify-center items-center '>
              <button className=' bg-white hover:bg-custom-200 hover:text-white  text-custom-800 font-semibold py-2 px-3 rounded-full'>
                Start for Free
              </button>
              <button className=' hover:bg-white bg-transparent  border hover:border-transparent text-white  hover:text-custom-800 font-semibold py-2 px-5 rounded-full'>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=' w-full pb-16 pt-5'>    
        <div className='flex relative flex-col-reverse md:flex-row items-center justify-center'>
          <div className=' space-y-10 min-[1140px]:pt-0 pt-20 flex flex-col w-full md:w-1/2 items-center md:items-end justify-center'>
            <div className=' space-y-5 flex flex-col lg:w-2/3 w-10/12 md:text-start text-center'>
              <div className=' text-2xl text-custom-300'>
                Introducing an extensible editor 
              </div >
              <div className=' text-custom-500  lg:text-base md:text-xs'>
                Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
              </div>
            </div>
            <div className='space-y-5  flex flex-col  lg:w-2/3 md:text-start text-center w-10/12'>
              <div className=' text-2xl text-custom-300'>
                Robust content management
              </div>
              <div className=' text-custom-500  lg:text-base md:text-xs'>
                Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
              </div>
            </div>
          </div>
          <div className=' w-1/2 hidden md:flex '>
            <Image    
            src={"/images/illustration-editor-desktop.svg"}
            width={925}
            height={882}
            className=' w-full bg-cover '
            alt='illus'/>
          </div>
          <div className=' w-full md:hidden flex'>
            <Image    
            src={"/images/illustration-editor-mobile.svg"}
            width={498}
            height={359}
            className=' w-full bg-cover '
            alt='illus'/>
          </div>
          <div className=' static md:absolute md:py-0 py-10  text-custom-300 w-full min-[1320px]:top-[10%] top-0'>
            <div className='text-3xl text-center'>
              Designed for the future
            </div>
          </div>
        </div>  
      </div>
      <div className=' relative md:mt-0 mt-24 w-full bg-circle bg-no-repeat bg-custom1 md:bg-custom rounded-tr-[100px] rounded-bl-[100px] bg-custom-900 flex flex-col-reverse md:flex-row-reverse'> 
        <div className=' md:mt-0 mt-96  text-center md:text-start space-y-5 w-full md:w-1/2 py-16 xl:py-32 min-[1160px]:pl-0 md:pl-20 justify-center md:items-start items-center flex flex-col'>
          <div className=' text-white text-3xl lg:text-5xl'>
            State of the Art Infrastructure
          </div>
          <div className=' w-10/12 text-sm lg:text-base text-custom-400'>
            With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
          </div>
        </div>
        <div className='w-full -top-20 min-[500px]:-top-40 left-0  h-[300px] md:w-1/2 absolute min-[900px]:-top-16 md:-top-10 md:left-10'>
          <Image
          src={"/images/illustration-phones.svg"}
          width={552}
          height={579}
          className=' object-contain '
          alt='phone'/>
          
        </div>
      </div>
      <div className=' w-full pb-10 pt-20'>    
        <div className='flex relative flex-col-reverse md:flex-row-reverse items-center justify-center'>
          <div className=' space-y-10 flex flex-col  md:text-start text-center w-full md:w-1/2 items-center md:items-start justify-center'>
            <div className=' space-y-5 flex flex-col lg:w-2/3 w-10/12 '>
              <div className=' text-2xl text-custom-300'>
                Free, open, simple
              </div >
              <div className=' text-custom-500  lg:text-base md:text-xs'>
                Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
              </div>
            </div>
            <div className='space-y-5  flex flex-col jus lg:w-2/3 w-10/12'>
              <div className=' text-2xl text-custom-300'>
                Powerful tooling
              </div>
              <div className=' text-custom-500  lg:text-base md:text-xs'>
                Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.
              </div>
            </div>
          </div>
          <div className=' w-1/2  hidden md:flex  justify-center items-center '>
            <Image    
            src={"/images/illustration-laptop-desktop.svg"}
            width={974}
            height={786}
            className=' w-full object-cover '
            alt='illus'/>
          </div>
          <div className=' pb-5 w-full md:hidden flex'>
            <Image    
            src={"/images/illustration-laptop-mobile.svg"}
            width={498}
            height={359}
            className=' w-full bg-cover '
            alt='illus'/>
          </div>
        </div>  
      </div>
      <div className=' py-20 w-full flex flex-col  md:space-y-0 space-y-10 md:flex-row rounded-tr-[100px] bg-custom-600'>
        <div className=' w-full md:w-1/4 flex justify-center items-start'>
          <Image
          src={"/images/logo.svg"}
          width={101}
          height={40}
          alt='logo'/>
        </div>
        <div className=' w-full md:w-1/4 md:items-start items-center md:text-start text-center flex space-y-5 md:space-y-10 flex-col text-white '>
          <div className=' flex items-center text-white'>
            Product
          </div>
          <div className=' text-custom-400 flex md:space-y-3 flex-col'>
            <Link className='' href={"/"}>
              Overview 
            </Link>
            <Link className='' href={"/"}>
              Pricing
            </Link>
            <Link className='' href={"/"}>
              Marketplace
            </Link>
            <Link className='' href={"/"}>
              Features 
            </Link>
            <Link className='' href={"/"}>
              Integrations
            </Link>
          </div>
        </div>
        <div className=' w-full md:w-1/4 flex md:text-start text-center space-y-5 md:space-y-10 md:items-start items-center flex-col text-white '>
          <div className=' flex items-center text-white'>
            Company
          </div>
          <div className=' text-custom-400 flex md:space-y-3 flex-col'>
            <Link className='' href={"/"}>
              About
            </Link>
            <Link className='' href={"/"}>
              Team
            </Link>
            <Link className='' href={"/"}>
              Blog
            </Link>
            <Link className='' href={"/"}>
              Careers 
            </Link>
          </div>
        </div>
        <div className=' w-full md:w-1/4 md:text-start text-center md:items-start items-center flex space-y-5 md:space-y-10 flex-col text-white '>
          <div className=' flex items-center text-white'>
            Connect
          </div>
          <div className=' text-custom-400 flex md:space-y-3 flex-col'>
            <Link className='' href={"/"}>
              Contact
            </Link>
            <Link className='' href={"/"}>
              Newsletter
            </Link>
            <Link className='' href={"/"}>
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  )}