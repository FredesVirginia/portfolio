import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoIosRemove } from "react-icons/io";
import { MdOutlineMarkEmailRead } from "react-icons/md";
export default function Footer() {
  return (
    <div>
      <div className=" mt-10 py-10 bg-gradient-to-r from-sky-600 to-sky-900 ">
        <div className="flex justify-center align-center space-x-4  ">


          <a href="https://www.instagram.com/jonh_clein_dev/" target="_blank" rel="noopener noreferrer">
            <FaInstagram  size={20} fill="white"/>
          </a>
      
          <a href="https://github.com/FredesVirginia" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} fill="white"/>
          </a>
          <a href="https://www.linkedin.com/in/fredes-virginia-37889511b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin  size={20} fill="white"/>
          </a>
        </div>

        <p className='pt-5 text-sm text-center italic text-white px-5 lg:px-0'>
          Mi mente se rebela en el estancamiento. Dame problemas, dame trabajo, dame el criptograma más abstracto o el análisis más complejo
          <div className="flex  justify-center align-center mt-2  ">
            <IoIosRemove />
            <IoIosRemove />
            <IoIosRemove />
            <IoIosRemove />
            <IoIosRemove />
          </div>
        </p>
        <p className='mt-1 text-sm text-center mb-2 text-white'>Contactame por aqui</p>
        <div className="flex justify-center align-center space-x-4 ">


          <div className="flex items-center justify-center">
            <MdOutlineMarkEmailRead />
            <p className="ml-2">William-Champion@outlook.com</p>
          </div>


        </div>
      </div>
     

    </div>
  )
}