import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" flex flex-col lg:flex-row justify-between lg:px-32 px-5 bg-white p-6 items-center gap-4">
      <div className=" flex gap-6">
        <a href="https://www.instagram.com/_kumail.5/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <BsInstagram
          size={28}
          className=" hover:text-brightColor transition-all cursor-pointer"
        />
        </a>
       
        <a href="https://www.facebook.com/profile.php?id=100088652534308">
        <FaFacebook
          size={32}
          className=" hover:text-brightColor transition-all cursor-pointer"
        />
        </a>

       <a href="https://www.linkedin.com/learning/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
       <FaLinkedin
          size={28}
          className=" hover:text-brightColor transition-all cursor-pointer"
        />
       </a>

        <a href="https://www.youtube.com/@game.space72">
        <FaYoutube 
          size={32}
          className=" hover:text-brightColor transition-all cursor-pointer"
        />
        </a>

      </div>
      <div className=" flex flex-row items-center cursor-pointer mt-3 lg:mt-0">
        <h1 className=" text-xl font-semibold">Kumail Abbas</h1>
      </div>
    </footer>
  );
};

export default Footer;
