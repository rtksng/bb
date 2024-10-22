import logo from "../../../assets/logo.svg";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoFacebook } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import bugbot from "../../../assets/BUGBOT.png";
const Footer = () => {
  return (
    <footer className="mt-32 px-16 pt-16 bg-custom-accent5">
      <div className="grid grid-cols-12 space-x-56">
        <div className="col-span-6">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
          <p className="max-w-[420px] text-custom-secondary2 text-xl mt-8">
            The first free end-to-end analytics service for the site, designed
            to work with enterprises of various levels and business segments.
          </p>
          <div className="flex items-center justify-between mt-48">
            <ul className="flex items-center gap-3 ">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center bg-white w-10 h-10 rounded-full "
                >
                  <IoLogoFacebook size={24} color="#0C1518" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center bg-white w-10 h-10 rounded-full "
                >
                  <RiInstagramFill size={24} color="#0C1518" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center bg-white w-10 h-10 rounded-full "
                >
                  <FaYoutube size={24} color="#0C1518" />
                </a>
              </li>
            </ul>
            <p className="text-custom-secondary2 text-xl">
              © 2024 — Copyright All Rights reserved
            </p>
          </div>
        </div>
        <div className="col-span-6 flex flex-col justify-between">
          <ul className="flex items-center gap-8">
            <li>
              <a
                href="#"
                className="text-custom-secondary2 text-xl hover:text-custom-accent transition-all"
              >
                Home.
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-custom-secondary2 text-xl hover:text-custom-accent transition-all"
              >
                Features.
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-custom-secondary2 text-xl hover:text-custom-accent transition-all"
              >
                Pricing.
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-custom-secondary2 text-xl hover:text-custom-accent transition-all"
              >
                Blog.
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-custom-secondary2 text-xl hover:text-custom-accent transition-all"
              >
                Privacy Policy.
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-custom-secondary2 text-xl hover:text-custom-accent transition-all"
              >
                Terms of Service.
              </a>
            </li>
          </ul>
          <div className="space-y-12">
            <div>
              <h5 className="text-white text-[20px] mb-4 font-medium">
                Contact Us
              </h5>
              <a
                href="tel: +1 (999) 888-77-66"
                className="text-custom-secondary2 text-xl block"
              >
                +1 (999) 888-77-66
              </a>
              <a
                href="mailto: hello@logoipsum.com"
                className="text-custom-secondary2 text-xl block"
              >
                hello@logoipsum.com
              </a>
            </div>
            <div>
              <h5 className="text-white text-[20px] mb-4 font-medium">
                Location
              </h5>
              <address className="text-custom-secondary2 text-xl block">
                483920, Moscow, Myasnitskaya 22/2/5, Office 4
              </address>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[95px]">
        <img src={bugbot} alt="BugBot" />
      </div>
    </footer>
  );
};

export default Footer;
