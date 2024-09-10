import React from 'react';
import { Bannerarrow } from '../assets/icon';
import footerlogo from "../images/lynclogo.svg";
import insta from "../images/insta.svg";
import vedioremote from "../images/vedioremote.svg";
import twitter from "../images/twitter.svg";




const Footer = () => {
    return (
        <div>

            <div className='footer-wrapper'>
                <button className='banner-primary-btn'>
                    Get started
                    <Bannerarrow />
                </button>
                <div className='footer-content container'>
                    <div className='social-media-wrapper'>
                        <a href='#'>
                            <img src={footerlogo} alt="logoIcon" />
                        </a>
                        <p>A GameFi Infrastructure</p>
                        <div className='social-media-icons'>
                            <a href='#'>
                                <img src={insta} alt="logoIcon" />
                            </a>
                            <a href='#'>
                                <img src={vedioremote} alt="logoIcon" />
                            </a>
                            <a href='#'>
                                <img src={twitter} alt="logoIcon" />
                            </a>
                        </div>
                    </div>
                    <div className='company-info-link-wrapper'>
                         <div className='links-wrapper'>
                            <h4>Product</h4>
                            <ul className='product-list'>
                                <li>
                                    <a href='#'>SDK’s</a>
                                </li>
                                <li>
                                    <a href='#'>Transfer API’s</a>
                                </li>
                                <li>
                                    <a href='#'>Token API’s</a>
                                </li>
                                <li>
                                    <a href='#'>NFT API’s</a>
                                </li>
                            </ul>
                         </div>
                         <div className='links-wrapper'>
                            <h4>Company</h4>
                            <ul className='product-list'>
                                <li>
                                    <a href='#'>About us</a>
                                </li>
                                <li>
                                    <a href='#'>Press Kit</a>
                                </li>
                                <li>
                                    <a href='#'>Security</a>
                                </li>
                                <li>
                                    <a href='#'>Privacy Policy</a>
                                </li>
                            </ul>
                         </div>
                         <div className='links-wrapper'>
                            <h4>Contact</h4>
                            <ul className='product-list'>
                                <li>
                                    <a href='#'>Email</a>
                                </li>
                                <li>
                                    <a href='#'>Discord</a>
                                </li>
                                <li>
                                    <a href='#'>Telegram</a>
                                </li>
                                <li>
                                    <a href='#'>Press</a>
                                </li>
                            </ul>
                         </div>
                    </div>
                    <div className='inbox-wrapper'>
                        <h4>Supercharge your inbox </h4>
                        <p>Sign up for our newsletter</p>
                        <div className='email-wrapper'>
                            <input type='text' placeholder='enter you email address'/>
                            <button className='submit'>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
                <div className='terms-wrapper'>
                    <p> <span>2024 LYNC World </span> · Terms of service</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
