import Head from 'next/head'
import styles from '../styles/home.module.scss';
import React, {useState, useEffect} from 'react';
import 'swiper/css/bundle';
import {BsList, BsCaretDownFill, BsArrowRight} from "react-icons/bs";


const Home = () => {
    const [isMobileMenuActive, setMobileMenuActive] = useState(false);
    const [isHeaderFix, setHeaderFix] = useState(false);

    useEffect(() => {
        window.onscroll = function () {
            headerScroll()
        };
        headerScroll()
    }, []);


    const headerScroll = () => {
        var header = document.getElementById("my-header");
        var headerOffset = header.offsetHeight;
        if (window.pageYOffset > headerOffset) setHeaderFix(true)
        else setHeaderFix(false)
    }

    const updateMobileMenuActive = () => {
        setMobileMenuActive(!isMobileMenuActive);
    }

    return (<>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Rubik+Glitch&display=swap" rel="stylesheet"/>

                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>

            </Head>

            <div className={styles.mainContainer}>
                <header className={`my-header ${isHeaderFix && "fixed"}`} id="my-header">
                    <div className="container">
                        <div className="logo">
                            <img src="/img/logo.png" alt="logo"/>
                        </div>
                        <div className="menu">
                            <ul>
                                <li><a href="">Services</a></li>
                                <li><a href="">NFTs</a></li>
                                <li><a href="">Influencers</a></li>
                                <li><a href="">Tokens</a></li>
                            </ul>
                        </div>

                        <div className="menu">
                            <ul>
                                <li><a href="">Login</a></li>
                                <li><a className="active" href="">Sign up</a></li>
                            </ul>
                            <div className="toggle" onClick={() => updateMobileMenuActive()}>
                                <BsList/>
                            </div>
                        </div>
                    </div>

                    {
                        isMobileMenuActive &&
                        <div className="mobile-menu">
                            <ul>
                                <li><a href="">Product tour</a></li>
                                <li><a href="">Science</a></li>
                                <li><a href="">Test library</a></li>
                                <li><a href="">Pricing</a></li>
                                <li><a href="">Login</a></li>
                                <li><a className="active" href="">Request demo</a></li>
                                <li><a href="">Try for free!</a></li>
                            </ul>
                        </div>
                    }
                </header>


                <section className="welcome">
                    <div className="texts">
                        <h1>
                            Get your store r eady for the future <strong>Ultimate Customer Engagement with NFTs</strong>
                        </h1>
                        <p>
                            Pixurate provides ECommerce owners with seamlessly integrated Blockchain solutions to ace customer engagement.
                        </p>
                        <p>
                            Prepare your store for the future of social commerce and Web3.
                        </p>
                    </div>

                    <div className="actions">
                        <div>I’m a <strong>business owner</strong> <BsCaretDownFill/></div>
                        <div>I’m interested with <strong>NFT</strong> <BsCaretDownFill/></div>
                        <div className="add-wait-list">+ Add me waitlist</div>
                    </div>
                </section>

                <section className="generate">
                    <div className="content custom-tabs">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="generate-first-tab" data-bs-toggle="pill" data-bs-target="#generate-first" type="button" role="tab" aria-controls="generate-first" aria-selected="true">Generate NFTs</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="generate-two-tab" data-bs-toggle="pill" data-bs-target="#generate-two" type="button" role="tab" aria-controls="generate-two" aria-selected="false">Incentivize Customers</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="generate-three-tab" data-bs-toggle="pill" data-bs-target="#generate-three" type="button" role="tab" aria-controls="generate-three" aria-selected="false">Improve Social Media Presence</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="generate-four-tab" data-bs-toggle="pill" data-bs-target="#generate-four" type="button" role="tab" aria-controls="generate-four" aria-selected="false">Collect Authentic Reviews</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="generate-five-tab" data-bs-toggle="pill" data-bs-target="#generate-five" type="button" role="tab" aria-controls="generate-five" aria-selected="false">Build a Community</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="generate-first" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div className="content">
                                    <div className="left">
                                        <h2 className="text">Pixurate generates AI-powered NFTs for any product or service on your store</h2>
                                    </div>
                                    <div className="right">
                                        <div className="before">
                                            <img src="/img/generate/generate1.png"/>
                                        </div>
                                        <div className="text">
                                            <img src="/img/arrow.png"/>
                                            <div className="transform">
                                                <p>
                                                    from Real Product <span>to <strong>NFT</strong></span>
                                                </p>
                                                <hr/>
                                                <hr/>
                                                <div className="round">
                                                    <img src="/img/short_logo.png"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="after">
                                            <img src="/img/generate/generate2.png"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="generate-two" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <div className="content">
                                    <div className="left">
                                        <h2>Incentivize
                                            your customers
                                            for engagement;</h2>
                                        <div className="text">
                                            <ul>
                                                <li>to improve social media presence and reach out to your customer’s network,</li>
                                                <li>“to collect feedback and highlight customer experience.”</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <img src="/img/generate/incetivize1.png"/>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="generate-three" role="tabpanel" aria-labelledby="generate-three-tab">
                                <div className="content">
                                    <div className="left">
                                        <h2 className="text">Reach out to your customers’ social media network. Do not spend a fortune on social media ads.</h2>
                                    </div>
                                    <div className="right">
                                        <img src="/img/generate/social1.png"/>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="generate-four" role="tabpanel" aria-labelledby="generate-four-tab">
                                <div className="content">
                                    <div className="left">
                                        <h2 className="text">“Collect authentic reviews from your customers and promote your best products.”</h2>
                                    </div>
                                    <div className="right">
                                        <img src="/img/generate/collect1.png"/>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="generate-five" role="tabpanel" aria-labelledby="generate-five-tab">
                                <div className="content">
                                    <div className="left">
                                        <h2 className="text">“Build and connect with your community of loyal customers.”</h2>
                                    </div>
                                    <div className="right">
                                        <img src="/img/generate/community1.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="purchase">
                    <div className="content custom-tabs">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="purchase-one-tab" data-bs-toggle="pill" data-bs-target="#purchase-one" type="button" role="tab" aria-controls="purchase-one" aria-selected="true">Prooven purchase</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="purchase-two-tab" data-bs-toggle="pill" data-bs-target="#purchase-two" type="button" role="tab" aria-controls="purchase-two" aria-selected="false">Trusted Reviews</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="purchase-three-tab" data-bs-toggle="pill" data-bs-target="#purchase-three" type="button" role="tab" aria-controls="purchase-three" aria-selected="false">Customer Incentives</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="purchase-four-tab" data-bs-toggle="pill" data-bs-target="#purchase-four" type="button" role="tab" aria-controls="purchase-four" aria-selected="false">Community</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="purchase-one" role="tabpanel" aria-labelledby="purchase-one-tab">
                              <div className="content">
                                  <div className="left">
                                      <h2>Purchase verification</h2>
                                      <p>Transparent and secure. NFTs include purchase metadata. NFT owners are verified customers by blockchain.</p>
                                      <div className="join-beta-button">
                                          Join Beta <BsArrowRight/>
                                      </div>
                                  </div>
                                  <div className="right">
                                      <img src="/img/purchase/purchase1.png"/>
                                  </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="purchase-two" role="tabpanel" aria-labelledby="purchase-two-tab">
                                <div className="content">
                                    <div className="left">
                                        <h2>Trusted reviews</h2>
                                        <p>Genuine Customer Feedback <br/>
                                            Transparent on Blockchain <br/>
                                            Indirect Feedback Incentives <br/>
                                            High Feedback Frequency <br/>
                                            Review Upvote <br/>
                                            Universal Rating Scale <br/>
                                            Pure Information - Real Ratings (Not Inflated) <br/>
                                            Review&Rating Widgets</p>
                                        <div className="join-beta-button">
                                            Join Beta <BsArrowRight/>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <img src="/img/purchase/trusted1.png"/>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="purchase-three" role="tabpanel" aria-labelledby="purchase-three-tab">
                                <div className="content">
                                    <div className="left">
                                        <h2>Customer Incentives</h2>
                                        <div className="join-beta-button">
                                            Join Beta <BsArrowRight/>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <img src="/img/purchase/customer1.png"/>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="purchase-four" role="tabpanel" aria-labelledby="purchase-four-tab">
                                <div className="content">
                                    <div className="left">
                                        <h2>Community</h2>
                                        <p>
                                            FOMO effect <br/>
                                            Feedback <br/>
                                            Sharable <br/>
                                            Insight about product <br/>
                                            Influencer engagement
                                        </p>
                                        <div className="join-beta-button">
                                            Join Beta <BsArrowRight/>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <img src="/img/purchase/community1.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <style global jsx>{`
                * {
                  padding: 0;
                  margin: 0;
                }
                body {
                  font-family: 'Poppins', sans-serif;
                }
                
                
                @media only screen and (max-width: 1200px) {
                html {
                  font-size: 1.3vw;
                }
              }


              @media only screen and (max-width: 768px) {
                html {
                  font-size: 16px;
                }
              }
              
               @media only screen and (max-width: 400px) {
                html {
                   font-size: 4vw;
                }
              }
            `}</style>
        </>

    );
};

export default Home;