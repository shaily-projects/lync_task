import React from 'react';
import symbolOne from "../images/symbolOne.svg";
import symbolTwo from "../images/symbolTwo.svg";
import symbolThree from "../images/symbolThree.svg";
import blockchainFirst from "../images/blockchainFirst.svg";
import blockchainSecond from "../images/blockchainSecond.svg";
import blockchainThree from "../images/blockchainThree.svg";
import blockchainFour from "../images/blockchainFour.svg";
import blockchainFive from "../images/blockchainFive.svg";
import diamond from "../images/diamond.png"
import cardImg from "../images/cardImg.png"
import remote from "../images/remote.svg"
import favouriteOne from "../images/favouriteOne.svg"
import favouriteTwo from "../images/favouriteTwo.svg"
import favouriteThree from "../images/favouriteThree.svg"
import favouriteFour from "../images/favouriteFour.svg"
import favouriteFive from "../images/favouriteFive.svg"
import favouriteSix from "../images/favouriteSix.svg"
import favouriteSeven from "../images/favouriteSeven.svg"
import favouriteEight from "../images/favouriteEight.svg"
import community from "../images/community.svg"
import usersBg from "../images/usersBg.svg"
import { Star } from '../assets/icon';
import Slide from './Slide';
import Reviewslider from './Reviewslider';
import partnerOne from "../images/partnerOne.svg";
import partnerTwo from "../images/partnerTwo.svg";
import partnerThree from "../images/partnerThree.svg";
import partnerFour from "../images/partnerFour.svg";
import partnerFive from "../images/partnerFive.svg";
import partnerSix from "../images/partnerSix.svg";
import partnerSeven from "../images/partnerSeven.svg";
import partnerEight from "../images/partnerEight.svg";
import lynclogo from "../images/lync-logo.svg";
import Footer from './Footer';
import floorpattern from "../images/floorpattern.svg"


const Backed = () => {
    return (
        <>
        <div className='container'>
            <div className='backed-wrapper'>
                <p>Backed by</p>
                <div className='backed-logos'>
                    <img src={symbolOne} alt="logoIcon" className='symbolOne' />
                    <img src={symbolTwo} alt="logoIcon"
                    className='symbolTwo'  />
                    <img src={symbolThree} alt="logoIcon"
                    className='symbolThree'  />
                </div>

            </div>
            <div className='lync'>
                <p>LYNC provides a scalable infrastructure for launching web3 games, without hampering the      <span>gaming experience.</span>  So that you can deliver the next big hit!</p>
            </div>
            <div className='blockchain-wrapper'>
                <p>Making blockchain gaming accessible to
                    <span> everyone! </span> </p>
                <div className='blockchain-gaming-platform'>
                    <img src={blockchainFirst} alt="logoFirst"  />
                    <img src={blockchainSecond} alt="logoSecond" />
                    <img src={blockchainThree} alt="logoThree" />
                    <img src={blockchainFour} alt="logoFour" />
                    <img src={blockchainFive} alt="logoFive" />
                </div>
            </div>
            <div className='webGames-wrapper'>
                <h2>Power Up Your Web3 Game Development, With
                    <span> LYNC SDKs</span>  </h2>
                <p>LYNC SDKs can be easily integrated into game engines like Unity 3D and Unreal Engine in a few clicks.</p>
            </div>
            <div className='complexities-wrapper'>
                <div>
                    <h2>Don't Worry about the <span>  Web3
                    </span> Complexities
                    </h2>
                    <div className='complexity-details'>
                        <div className='complexity'>
                            <Star />
                            <p>Save 9-12 months of development time</p></div>
                        <div className='complexity'>
                            <Star />
                            <p>Save 9-12 months of development time</p></div>
                        <div className='complexity'>
                            <Star />
                            <p>Save 9-12 months of development time</p></div>
                        <div className='complexity'>
                            <Star />
                            <p>Save 9-12 months of development time</p></div>
                    </div>
                </div>
                <div className='diamond-wrapper'>
                    <img src={diamond} alt="diamond" className='diamond' />
                </div>
            </div>
            <div className='gameplay-wrapper'>
                <div className='gameplay'>
                    <div>
                        <h2>Elevate Your Gameplay with Essential Insights!</h2>
                        <p>Unleash Your Potential - Explore the Knowledge Hub Today!</p>
                        <button className='view-docs'>
                            View Docs
                        </button>
                    </div>
                    <div>
                        <img src={remote} alt="remote" className='remote' />
                    </div>


                </div>
                <div className='gameplay-contents'>
                       <div className='project-contacts-wrapper'>
                          <div className='projects'>
                                <h4>200+</h4>
                                <p>Projects have downloaded & integrated LYNC SDKs</p>
                            </div>
                            <div className='contacts'>
                                <h4>8000+</h4>
                                <p>Contracts have been deployed via LYNC</p>
                            </div>  
                       </div>
                       <div className='users'>
                           <h4>50000+</h4>
                           <p>User ops created in 10 hours</p>
                    <img src={usersBg} alt="userBg" className='usersimage' />

                       </div>
                </div>
            </div>
            <div className='product-wrapper'>
                <h3>Product <span>Suite</span></h3>
                <div className='product-card-wrapper'>
                    <div className='card'>
                        <img src={cardImg} alt="cardimg" />
                        <div className='card-content'>
                            <h4>LYNC Wallet SDK</h4>
                            <p>Empowering developers to integrate
                                account abstraction in their game,
                                dapp, metaverse and more in
                                minutes.</p>
                        </div>

                    </div>
                    <div className='card'>
                        <img src={cardImg} alt="cardimg" />
                        <div className='card-content'>
                            <h4>LYNC Wallet SDK</h4>
                            <p>Empowering developers to integrate
                                account abstraction in their game,
                                dapp, metaverse and more in
                                minutes.</p>
                        </div>

                    </div>
                    <div className='card'>
                        <img src={cardImg} alt="cardimg" />
                        <div className='card-content'>
                            <h4>LYNC Wallet SDK</h4>
                            <p>Empowering developers to integrate
                                account abstraction in their game,
                                dapp, metaverse and more in
                                minutes.</p>
                        </div>

                    </div>
                    <div className='card'>
                        <img src={cardImg} alt="cardimg" />
                        <div className='card-content'>
                            <h4>LYNC Wallet SDK</h4>
                            <p>Empowering developers to integrate
                                account abstraction in their game,
                                dapp, metaverse and more in
                                minutes.</p>
                        </div>

                    </div>
                    <div className='card'>
                        <img src={cardImg} alt="cardimg" />
                        <div className='card-content'>
                            <h4>LYNC Wallet SDK</h4>
                            <p>Empowering developers to integrate
                                account abstraction in their game,
                                dapp, metaverse and more in
                                minutes.</p>
                        </div>

                    </div>
                    <div className='card'>
                        <img src={cardImg} alt="cardimg" />
                        <div className='card-content'>
                            <h4>LYNC Wallet SDK</h4>
                            <p>Empowering developers to integrate
                                account abstraction in their game,
                                dapp, metaverse and more in
                                minutes.</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='favourite-chain'>
                <h3>With LYNC, build on your <span> favorite chain.</span>  </h3>
                <div className='favourite-icons-wrapper'>
                    <div className='favourite-icons favourite-icons-gap'>
                        <img src={favouriteOne} alt="favourite-one" className='fav-one' />
                        <img src={favouriteTwo} alt="favourite-Two" className='fav-two' />
                        <img src={favouriteThree} alt="favourite-Three" className='fav-three' />
                        <img src={favouriteFour} alt="favourite-Four" className='fav-four' />
                    </div>
                    <div className='favourite-icons'>
                        <img src={favouriteFive} alt="favourite-Five" className='fav-five' />
                        <img src={favouriteSix} alt="favourite-Six"
                        className='fav-six' />
                        <img src={favouriteSeven} alt="favourite-Seven"
                        className='fav-seven' />
                        <img src={favouriteEight}  alt="favourite-Eight"
                        className='fav-eight'
                        />
                    </div>


                </div>
            </div>
            <div className='blog-wrapper'>
                <h4>
                    From our <span> Blog</span>
                </h4>
                <p>Level Up Your Web3 Gaming Experience: Explore Our Blog for Insights, Tips, and Innovations in Gaming SDKs!</p>
                <Slide />
            </div>
            <div className='review-wrapper'>
                <h4>Valuable <span>Reviews</span> </h4>
                <Reviewslider />

            </div>
            <div className='community-wrapper'>
                <img src={community} alt="community" className='community' />

            </div>
            <div className='partner-wrapper'>
                <h4>Our  <span>Believers and Partners</span>
                </h4>
                <div className='partner-logos-wrapper'>
                    <div className='partner-logos'>
                        <img src={partnerOne} alt="partnerOne" />
                        <img src={partnerTwo} alt="partnerTwo" />
                        <img src={partnerThree} alt="partnerTHree" />
                        <img src={partnerFour} alt="partnerFour" />
                        <img src={partnerFive} alt="partnerFive" />
                        <img src={partnerSix} alt="partnerSix" />
                        <img src={partnerSeven} alt="partnerSeven" />
                        <img src={partnerEight} alt="partnerEight" />
                    </div>
                </div>
            </div>
            <div className='lync-wrapper'>
                <img src={lynclogo} alt="lynclogo" />
                <p>Got a game idea ?
                    Let's make it big together !!!</p>
            </div>
        </div>
        <Footer/>
        </>
        
    );
}

export default Backed;
