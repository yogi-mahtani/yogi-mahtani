'use client'
import Logo from "../Logo";
import './index.css'
import { Divider } from "./Divider";

export function Footer() {

   const supportPageLinks = ()=>{
    let pages = ['About Us','Services','Contact Us','FAQ','Blog'];
    return pages.map((page)=><div className="page-link">{page}</div>)
   }
  const socialLinks = ()=> {
   let links = ['/fb.png','/fb.png','/fb.png','/fb.png'];
   return links.map((link)=><img  src={link} className="socail-link"/>)
  }
    const contactLinks = () => {
        let contactLinks = [{ title: 'Email', value: 'Leadconsultant@fynder.com',img:'/location.png' }, { title: 'Hong Kong', value: '+852 55127188', img:'/location.png' }, { title: 'singapore', value: '+65 8333 4000',img:'/location.png' }]
        return contactLinks.map((links) =>
         <div className="footer-contact-link-item" >
            <img className="footer-contact-link-img" src={links.img}/>
            <h4>{links.title}</h4>
            <p>{links.value}</p>
        </div>)
  }


  const privacyLinks=()=>{
    let privacyLinks=['Privacy Policy','Terms and Conditions','Cookie Policy']
    return privacyLinks.map(privacyLink=>
        <div>{privacyLink}</div>
    )
  }

    return (
        <>
            <div className="footer-container">
                <div className="footer-contact-page-container">
                    <Logo></Logo>
                    <div className='footer-contact-page-links-container'>
                        {supportPageLinks()}
                      </div>
                    <div className="footer-socialMedia">
                        {socialLinks()}
                        </div>
                </div>
                <div className="footer-privacy-contact-links-container">
                    <Divider></Divider>

                    <div className="footer-privacy-links-container">
                    <div>&#xA9; 2024 Fynder Talent.All rights reserved </div>
                        {privacyLinks()}
                    </div>

                    <div className="footer-conatact-link-container">
                      {contactLinks()}
                    </div>
                </div>
            </div>
        </>
    )
}