import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Ball from './Components/Ball'
import nextjs from '/nextjs.svg'
import react from '/react.svg'
import express from '/express.svg'
import nodejs from '/nodejs.svg'
import mongodb from '/mongodb.svg'
import youtube from '/youtube.svg'
import github from '/github.svg'
import facebook from '/facebook.svg'
import instagram from '/instagram.svg'

function App() {

  const obj = [
    {
      title: "Itask",
      desc: "A multifunctional react todo app",
      pic: "todo.png"
    },

    {
      title: "Itask",
      desc: "A multifunctional react todo app",
      pic: "todo.png"
    },

    {
      title: "Itask",
      desc: "A multifunctional react todo app",
      pic: "todo.png"
    }
  ]


  const [projects, setProjects] = useState(obj)

  return (
    <>
      <Navbar />
      <div className="hr h-[1px] w-full mx-auto bg-gray-700"></div>
      <main>
        <section className="firstSection min-h-[90vh] flex justify-around flex-col-reverse md:flex-row items-center py-20 px-0">
          <div className="left">
            <div className="hed text-4xl sm:text-6xl md:text-5xl lg:text-6xl md:text-start text-center font-extrabold my-4">
              <div className='text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-cyan-500'>Hi, I'm</div>
              <div>a web</div>
              <div>developer</div>
            </div>
            <div className="desc md:w-md w-full mx-2 text-gray-400">Based in islamabad, Abdullah is a passionate web developer who love to be the part of big projects</div>
            <div className="buttons my-5 flex flex-col gap-2 md:flex-row md:w-md w-full justify-around items-center">
              <button className='bg-gradient-to-r from-green-400 to-blue-400 p-3 rounded-full cursor-pointer hover:from-red-400 hover:to-yellow-400 w-full md:w-fit'>Contact Me</button>
              <div className='bg-gradient-to-r from-green-400 to-blue-400 p-1 rounded-full w-full md:w-fit'>
                <div className='w-full h-[100%] rounded-full p-3 flex justify-center items-center bg-slate-900 hover:bg-slate-800 cursor-pointer'>My Projects</div>
              </div>
            </div>
          </div>
          <div className="right">
            <img src="dev.png" alt="Developer Image" className='rounded-full mt-5 mx-0 md:mt-0 md:w-lg w-full' />
          </div>
        </section>
        <div className="hr h-[1px] w-full mx-auto bg-gray-700"></div>

        <section id='about' className='secondSection'>
          <div className="info flex flex-col md:flex-row w-[120px] space-y-10 md:space-y-0 justify-around items-center md:w-[90%] mx-auto border-[1px] border-gray-400 my-10 py-7 px-0 rounded">
            <div className="projects text-center">
              <h3 className='font-bold text-4xl'>10+</h3>
              <p className='text-gray-400 text-center'>Projects</p>
            </div>

            <div className="Users text-center">
              <h3 className='font-bold text-4xl'>80+</h3>
              <p className='text-gray-400 text-center'>Users</p>
            </div>

            <div className="projects text-center">
              <h3 className='font-bold text-4xl'>7</h3>
              <p className='text-gray-400 text-center'>Certifications</p>
            </div>

            <div className="projects text-center">
              <h3 className='font-bold text-4xl'>5</h3>
              <p className='text-gray-400 text-center'>Years</p>
            </div>
          </div>

          <div className="about flex flex-col md:flex-row justify-around items-center">
            <img src="aboutme.png" alt="About me Image" className='md:w-[500px] w-full m-4 rounded-lg' />
            <div className="about md:w-lg w-full text-center">
              <h3 className='text-4xl font-bold my-4'>About Me</h3>
              <p className='text-start mx-4 text-xs md:text-sm'>I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Python, Node.js, Express, MongoDB, NextJS, HTML, CSS, React, & dev tools among others. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing web applications.</p>
              <div className="skills my-4 text-start mx-4">
                <h3 className='text-xl font-bold'>Skills</h3>
                <div className="skls">
                  <div className='ml-5 my-5 flex gap-5'>
                    <img src={nextjs} alt="NextJS" className='w-10' />
                    <img src={react} alt="React" className='w-10' />
                    <img src={express} alt="Express" className='w-10' />
                    <img src={nodejs} alt="NodeJS" className='w-10' />
                    <img src={mongodb} alt="MongoDB" className='w-10' />
                  </div>
                </div>
              </div>
            </div>
          </div>




        </section>


        <div className="hr h-[1px] w-full mx-auto bg-gray-700"></div>


        <section id='projects' className='thirdSection py-5'>
          <h3 className='text-4xl w-fit my-5 font-bold mx-auto'>My Projects</h3>
          <div className='flex flex-col justify-around md:grid-cols-3 md:flex-row'>
            {
              projects.map((item, index) => {
                return <div key={index} className='project bg-slate-950 w-fit mx-auto p-4 my-4 rounded-xl cursor-pointer'>
                  <img src={item.pic} alt="Picture" className='w-xs rounded-xl mx-auto' />
                  <h3 className='text-xl font-bold text-center'>{item.title}</h3>
                  <p className='text-gray-300 text-center'>{item.desc}</p>
                </div>
              })
            }
          </div>
          <div className='flex flex-col'>
            <p className='mx-auto my-4 text-gray-400'>For More Visit Our GitHub Profile</p>
            <button className='bg-gradient-to-r from-green-400 to-blue-400 p-3 rounded-full cursor-pointer hover:from-red-400 hover:to-yellow-400 mx-auto'>GitHub</button>
          </div>
        </section>

        <div className="hr h-[1px] w-full mx-auto bg-gray-700"></div>

        <section id="message" class="bg-[#121212] py-12 px-4">
  <div class="max-w-xl mx-auto bg-slate-900 p-8 rounded-2xl shadow-lg">
    <h2 class="text-3xl font-bold text-center text-gray-200 mb-6">Contact Me</h2>
    <form action="https://formsubmit.co/devabdullah50@gmail.com" method="POST" class="space-y-5">
      
      <div>
        <label class="block mb-1 text-gray-700 font-medium">Your Name</label>
        <input type="text" name="name" required
               class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
      </div>

      <div>
        <label class="block mb-1 text-gray-700 font-medium">Your Email</label>
        <input type="email" name="email" required
               class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
      </div>

      <div>
        <label class="block mb-1 text-gray-700 font-medium">Your Message</label>
        <textarea name="message" rows="5" required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"></textarea>
      </div>

      <button type="submit"
              class="w-full bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300">
        Send Message
      </button>
    </form>
  </div>
</section>


        <div className="hr h-[1px] w-full mx-auto bg-gray-700"></div>

        <section id='contact' className='fourthSection py-5 flex flex-col md:flex-row justify-around'>
          <div className="left md:w-lg w-full">
            <h3 className='font-bold text-xl ml-3'>Let's Connect</h3>
            <p className='text-xs md:text-sm ml-4'>I'm always excited to collaborate on new projects, discuss innovative ideas, or simply chat about tech! Whether you're looking for a skilled developer to bring your vision to life, need some advice on your latest project, or just want to connect with a fellow tech enthusiast, I'd love to hear from you. Feel free to reach out via email or connect with me on LinkedIn & I'll try my best to get back to you as soon as possible! Let's build something amazing together!</p>
            <a href="#message"><button className='bg-gradient-to-r from-green-400 to-blue-400 p-3 rounded-xl cursor-pointer hover:from-red-400 hover:to-yellow-400 mx-auto w-full my-5'>Send Message</button></a>
          </div>
          <div className="right flex flex-col justify-center items-center">
            <h3>My Socials</h3>
            <div className='flex gap-5'>
              <a href='https://github.com/devAbdullah50'><img src={github} alt="GitHub" className='my-5 w-10' /></a>
              <a href='https://web.facebook.com/muhammad.abdullah.446139'><img src={facebook} alt="Facebook" className='my-5 w-10' /></a>
              <a href='https://www.instagram.com/abdullah_developer_918/'><img src={instagram} alt="Instagram" className='my-5 w-10' /></a>
              <a href='https://www.youtube.com/@ZeroToCode50'><img src={youtube} alt="YouTube" className='my-5 w-10' /></a>
            </div>
          </div>
        </section>

        <div className="hr h-[1px] w-full mx-auto bg-gray-700"></div>

        <Ball />
      </main>
      <Footer />
    </>
  )
}

export default App
