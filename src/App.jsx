import React from 'react'
import './App.css'
// import './assets/css/bootstrap.min.css'
// import './assets/css/owl.carousel.min.css'
// import './assets/css/nivo-slider.css'
// import './assets/css/animate.css'
// import './assets/css/animated-text.css'
// import './assets/css/theme-default.css'
// import './assets/css/flaticon.css'
// import './assets/css/meanmenu.min.css'
// import './assets/css/owl.transitions.css'
// import './venobox/venobox.css'
// import './venobox/style.css'
// import './assets/css/widget.css'
// import './assets/css/responsive.css'

function App() {

  return (
    <>

      {/* <!-- Start besoft Main Menu Area --> */}
      <div id="sticky-header" className="besoft_nav_manu style-two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="logo">
                <a className="logo_img" href="index.html" title="besoft">
                  <img src="https://raulsigoli.rastremar.com.br/asd/besoft/assets/images/logo2.png" alt="" />
                </a>
                <a className="main_sticky" href="index.html" title="besoft">
                  <img src="https://raulsigoli.rastremar.com.br/asd/besoft/assets/images/logo2.png" alt="astute" />
                </a>
              </div>
            </div>
            <div className="col-lg-9">
              <nav className="besoft_menu text-center">
                <ul className="nav_scroll">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#page">Page</a></li>
                  <li><a href="#testimonial">Testimonial</a></li>
                  <li><a href="#service">Services</a></li>
                  <li><a href="#blog">Blog</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="search-box-btn search-box-outer">
                  <i className="flaticon-search"></i>
                </div>
                <div className="header-bage">
                  <span><i className="flaticon-shopping-bag"></i></span>
                  <div className="bage-number">
                    <span>0</span>
                  </div>
                </div>
              </nav>
            </div>
            <div className="lines style-three">
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- besoft Mobile Menu Area --> */}
      <div className="mobile-menu-area d-sm-block d-md-block d-lg-none ">
        <div className="mobile-menu">
          <nav className="besoft_menu">
            <ul className="nav_scroll">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#page">Page</a></li>
              <li><a href="#testimonial">Testimonial</a></li>
              <li><a href="#service">Services</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* <!-- Start besoft slider Area --> */}
      <div className="slider-area slider-two d-flex align-items-center" id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="slider-content">
                <h4>// Usability & Performance Service</h4>
                <h1>DIGITAL WEB</h1>
                <h1>DESIGN <span>ANEGNY</span></h1>
                <p>Monotonectally seize go forward intellectual capital rather than high fabricate accurate materials rather
                  than team building.</p>
                <div className="slider-video style-three pt-4">
                  <div className="animate-border">
                    <a className="video-vemo-icon venobox vbox-item" data-vbtype="youtube" data-autoplay="true"
                      href="https://youtu.be/BS4TUd7FJSg">
                      <i className="fas fa-play-circle"></i></a>
                  </div>
                  <div className="video-text">
                    <span className="video-left">VIDEO SHOWCASE</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Start besoft service Area --> */}
      <div className="service-area style-two" id="service">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="dreamit-section-title text-left">
                <h5>// WE TRANSFORM BUSINESSES</h5>
                <h1>For Over 15 Years For</h1>
                <h1>Millions of Users</h1>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="service-text">
                <p>Monotonectally seize open-source before unique human capital. Efficiently fashion technically sound niche
                  markets through unique methods of pakistan is empowerment. Conveniently implement future-proof</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="besoft-sinlge-service-box">
                <div className="besoft-service-thumb">
                  <img src="https://raulsigoli.rastremar.com.br/asd/besoft/assets/images/resource/blog1.png" alt="" />
                </div>
                <div className="besoft-service-content">
                  <div className="besoft-service-icon">
                    <i className="icon flaticon-laptop"></i>
                  </div>
                  <div className="besoft-service-title">
                    <span>Analysis</span>
                    <h4>Secure Data</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="besoft-sinlge-service-box">
                <div className="besoft-service-thumb">
                  <img src="https://raulsigoli.rastremar.com.br/asd/besoft/assets/images/resource/blog2.png" alt="" />
                </div>
                <div className="besoft-service-content">
                  <div className="besoft-service-icon">
                    <i className="flaticon-24-hours-3"></i>
                  </div>
                  <div className="besoft-service-title">
                    <span>Analysis</span>
                    <h4>24/7 Support</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="besoft-sinlge-service-box">
                <div className="besoft-service-thumb">
                  <img src="https://raulsigoli.rastremar.com.br/asd/besoft/assets/images/resource/blog3.png" alt="" />
                </div>
                <div className="besoft-service-content">
                  <div className="besoft-service-icon">
                    <i className="icon flaticon-mobile-app"></i>
                  </div>
                  <div className="besoft-service-title">
                    <span>Analysis</span>
                    <h4>Outsourcing</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Start besoft about Area --> */}
      <div className="about-area style-two" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="besoft-about-thumb-box">
                <div className="about-shape">
                  <div className="about-shape-inner rotateme">
                    <img src="https://raulsigoli.rastremar.com.br/asd/besoft/assets/images/about/about-bg.png" alt="" />
                  </div>
                </div>
                <div className="besoft-about-thumb">
                  <img src="https://raulsigoli.rastremar.com.br/asd/besoft/assets/images/about/about.png" alt="" />
                  <div className="rs-video style-two">
                    <div className="animate-border">
                      <a className="video-vemo-icon venobox vbox-item" data-vbtype="youtube" data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg">
                        <i className="fas fa-play-circle"></i></a>
                    </div>
                  </div>
                  <div className="about-counter-box">
                    <div className="about-counter-title">
                      <h2 className="counter">10</h2>
                      <span>K</span>
                      <h4>Happy Clients</h4>
                    </div>
                  </div>
                </div>
                <div className="about-section-title">
                  <h2>about us</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="row about-left">
                <div className="col-lg-12">
                  <div className="dreamit-section-title style_two">
                    <h5>// DISCOVER OUR COMPANY</h5>
                    <h1>We’re the best digital IT</h1>
                    <h1>agency in Newtown</h1>
                    <p>Energistically implement ubiquitous mindshare without turnkey functionalit Efficiently aggregate
                      empowered experiences for integrated collaboration idea-sharing. Proactively pursue impactful
                      intellectual capital effective Efficiently expedite innovative imperaive.</p>
                  </div>
                </div>
                <div className="col-lg-7 col-sm-12">
                  <div className="elementor-about-icon-box2">
                    <div className="about-icon">
                      <i className="far fa-check-circle"></i>
                    </div>
                    <div className="elementor-about-title">
                      <p>Great team of more than 450 more engineers team.</p>
                    </div>
                    <div className="about-icon">
                      <i className="far fa-check-circle"></i>
                    </div>
                    <div className="elementor-about-title">
                      <p>We help you to elevate motion have the market.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12">
                  <div className="about-since-content">
                    <div className="about-since-content-inner">
                      <div className="about-since-title">
                        <span>Since</span>
                        <h4>2010</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6 col-sm-12">
                  <div className="about-button">
                    <a href="#">Read More <i className="flaticon-right-arrow-2"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Start besoft technology Area --> */}

      <div className="technology-area style-three" id="page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="dreamit-section-title white style_two">
                <h5>// COMPANY TECHNOLOGY INDEX</h5>
                <h1>Our top trusting Secure</h1>
                <h1>Platforms tech trends</h1>
                <p className="technology-top">Dynamically implement bricks-and schemas and functional e-markets. Conveniently
                  predominate sticky improvements without.</p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="technology-icon-box2">
                      <div className="technology-icon2">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="elementor-technology-title">
                        <span>Application Development</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="technology-icon-box2">
                      <div className="technology-icon2">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="elementor-technology-title">
                        <span>Data Quality Check</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="prossess-ber-plugin">
                  <span className="prosses-bar">UI/UX DESIGN</span>
                  <div id="bar3" className="barfiller">
                    <div className="tipWrap">
                      <span className="tip"></span>
                    </div>
                    <span className="fill" data-percentage="85"></span>
                  </div>
                  <span className="prosses-bar">DIGITAL MARKETING</span>
                  <div id="bar4" className="barfiller">
                    <div className="tipWrap">
                      <span className="tip"></span>
                    </div>
                    <span className="fill" data-percentage="75"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="technology-single-icon-box">
                    <div className="technology-icon">
                      <i className="flaticon-android"></i>
                    </div>
                    <div className="technology-title">
                      <h3>ANDROID</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="technology-single-icon-box">
                    <div className="technology-icon">
                      <i className="flaticon-apple"></i>
                    </div>
                    <div className="technology-title">
                      <h3>IOS</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="technology-single-icon-box">
                    <div className="technology-icon">
                      <i className="icon flaticon-web-1"></i>
                    </div>
                    <div className="technology-title">
                      <h3>IOT</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="technology-single-icon-box">
                    <div className="technology-icon">
                      <i className="flaticon-iot"></i>
                    </div>
                    <div className="technology-title">
                      <h3>UI/UX</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="technology-single-icon-box">
                    <div className="technology-icon">
                      <i className="flaticon-smartband"></i>
                    </div>
                    <div className="technology-title">
                      <h3>CODE</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="technology-single-icon-box">
                    <div className="technology-icon">
                      <i className="icon flaticon-coding-1"></i>
                    </div>
                    <div className="technology-title">
                      <h3>WEB</h3>
                    </div>
                  </div>
                </div>
                <div className="technology-titile">
                  <h1>Platforms</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Start besoft call do actoin Area --> */}
      <div className="call-do-action-area" id="page">
        <div className="container">
          <div className="row align-items-center call-top">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="call-do-action-content">
                <div className="call-do-action-title">
                  <h1>Do you need any it help<span>?</span></h1>
                  <p>Efficiently customize just in time communities via user friendly customer service. Dramatically
                    optimize empowered mindshare done.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="call-do-action-button">
                <a href="#">Let's talk</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Start besoft Portfolio Area --> */}
      <div className="portfolio_area" id="page">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5 col-sm-12">
              <div className="dreamit-section-title">
                <h5>// LATEST PROJECT</h5>
                <h1>Our Case Studies</h1>
              </div>
            </div>
            <div className="col-lg-8 col-md-7 col-sm-12">
              <div className="portfolio_nav">
                <div className="portfolio_menu">
                  <ul className="menu-filtering">
                    <li className="current_menu_item" data-filter="*">All</li>
                    <li data-filter=".physics">BRANDING</li>
                    <li data-filter=".cemes">PHOTOGRAPHY</li>
                    <li data-filter=".math">GRAPHICS</li>
                    <li data-filter=".biology">VIDEO</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row image_load">
            <div className="col-lg-4 col-md-6 col-sm-12 grid-item physics cemes">
              <div className="single_portfolio">
                <div className="single_portfolio_inner">
                  <div className="single_portfolio_thumb">
                    <img src="https://raulsigoli.rastremar.com.br/asd/besoft/assets/images/project/prt1.png" alt="" />
                    <div className="single_portfolio_content">
                      <div className="single-portfolio-content-inner">
                        <span>GRAPHIC</span>
                        <h3><a href="portfolio-details.html">UI/UX APP DESIGN</a></h3>
                        <div className="portfolio-icon">
                          <a href="#"><i className="flaticon-right-arrow-2"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 grid-item biology cemes math">
              <div className="single_portfolio">
                <div className="single_portfolio_inner">
                  <div className="single_portfolio_thumb">
                    <img src="https://raulsigoli.rastremar.com.br/asd/besoft/assets/images/project/prt2.png" alt="" />
                    <div className="single_portfolio_content">
                      <div className="single-portfolio-content-inner">
                        <span>GRAPHIC</span>
                        <h3><a href="portfolio-details.html">Outsourcing</a></h3>
                        <div className="portfolio-icon">
                          <a href="#"><i className="flaticon-right-arrow-2"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 grid-item math english">
              <div className="single_portfolio">
                <div className="single_portfolio_inner">
                  <div className="single_portfolio_thumb">
                    <img src="https://raulsigoli.rastremar.com.br/asd/besoft/assets/images/project/prt3.png" alt="" />
                    <div className="single_portfolio_content">
                      <div className="single-portfolio-content-inner">
                        <span>GRAPHIC</span>
                        <h3><a href="portfolio-details.html">Secure Data</a></h3>
                        <div className="portfolio-icon">
                          <a href="#"><i className="flaticon-right-arrow-2"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 grid-item engi biology math">
              <div className="single_portfolio">
                <div className="single_portfolio_inner">
                  <div className="single_portfolio_thumb">
                    <img src="https://raulsigoli.rastremar.com.br/asd/besoft/assets/images/project/prt4.png" alt="" />
                    <div className="single_portfolio_content">
                      <div className="single-portfolio-content-inner">
                        <span>GRAPHIC</span>
                        <h3><a href="portfolio-details.html">Digital Marketing</a></h3>
                        <div className="portfolio-icon">
                          <a href="#"><i className="flaticon-right-arrow-2"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 grid-item physics">
              <div className="single_portfolio">
                <div className="single_portfolio_inner">
                  <div className="single_portfolio_thumb">
                    <img src="https://raulsigoli.rastremar.com.br/asd/besoft/assets/images/project/prt5.png" alt="" />
                    <div className="single_portfolio_content">
                      <div className="single-portfolio-content-inner">
                        <span>GRAPHIC</span>
                        <h3><a href="portfolio-details.html">Our Case Studies</a></h3>
                        <div className="portfolio-icon">
                          <a href="#"><i className="flaticon-right-arrow-2"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 grid-item cemes">
              <div className="single_portfolio">
                <div className="single_portfolio_inner">
                  <div className="single_portfolio_thumb">
                    <img src="https://raulsigoli.rastremar.com.br/asd/besoft/assets/images/project/prt6.png" alt="" />
                    <div className="single_portfolio_content">
                      <div className="single-portfolio-content-inner">
                        <span>GRAPHIC</span>
                        <h3><a href="portfolio-details.html">Graphic Design</a></h3>
                        <div className="portfolio-icon">
                          <a href="#"><i className="flaticon-right-arrow-2"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--Start besoft contact form Area --> */}
      <div class="contact-form-area style-two" id="contact">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-sm-12">
              <div class="contact-form-box">
                <div class="dreamit-section-title white  text-center">
                  <h4>CONTACT US</h4>
                  <h1>Feel Free Contact</h1>
                  <h1>Now Us</h1>
                  <div class="em_bar_bg text-left"></div>
                </div>
                <form action="https://formspree.io/f/myyleorq" method="POST" id="dreamit-form">
                  <div class="row">
                    <div class="col-lg-6 col-sm-12">
                      <div class="from_box">
                        <input type="text" name="name" placeholder="Your Name" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-sm-12">
                      <div class="from_box">
                        <input type="text" name="email" placeholder="Your Email" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-sm-12">
                      <div class="from_box">
                        <input type="text" name="phone" placeholder="Your Phone" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-sm-12">
                      <div class="from_box">
                        <input type="text" name="web" placeholder="Subject" />
                      </div>
                    </div>
                    <div class="col-lg-12 col-sm-12">
                      <div class="from_box">
                        <textarea name="massage" id="massage" cols="30" rows="10" placeholder="Massage"></textarea>
                      </div>
                      <div class="contact-button text-center">
                        <button type="submit">Send Message</button>
                      </div>
                    </div>
                  </div>
                </form>
                <div id="status"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--Start besoft testimonial Area --> */}

      <div id="testimonial" class="testimonial-area style-two">
        <div id="container-general" class="ready anim-section-features anim-section-desc anim-section-quote">
          <div class="row">
          </div>
          <section id="section-quote">
            <div class="col-lg-12 col-sm-12">
              <div class="dreamit-section-title white text-center">
                <h5>// CLIENT TESTIMONIAL</h5>
                <h1>What say our Client</h1>
              </div>
            </div>
            {/* <!--Left Bubble Images--> */}
            <div class="container-pe-quote left">
              <div class="pp-quote li-quote-1" data-textquote="quote-text-1">
                <div class="img animated bounce"></div>
              </div>
              <div class="pp-quote li-quote-2" data-textquote="quote-text-2">
                <div class="img animated bounce"></div>
              </div>
              <div class="pp-quote li-quote-3" data-textquote="quote-text-3">
                <div class="img animated bounce"></div>
              </div>
            </div>
            {/* <!--Left Bubble Images--> */}

            {/* <!--Center Testimonials--> */}
            <div class="container-quote carousel-on">
              {/* <!--Testimonial 1--> */}
              <div class="quote quote-text-3 hide-bottom" data-ppquote="li-quote-3">
                <div class="pp"></div>
                <p>Dramatically communicate high-payoff infrastructures without ubiquitous best practices. Interactively
                  synthesize innovative best practices with at go forward methods of empowerment. Proactively</p>
                <div class="container-info">
                  <div class="name">Tom Abel De /</div>
                  <div class="job">Digital Marketing</div>
                </div>
              </div>
              {/* <!--Testimonial 2--> */}
              <div class="quote quote-text-4 show" data-ppquote="li-quote-4">
                <div class="pp"></div>
                <p>Dramatically communicate high-payoff infrastructures without ubiquitous best practices. Interactively
                  synthesize innovative best practices with at go forward methods of empowerment. Proactively</p>
                <div class="container-info">
                  <div class="name">Sanuka Santa /</div>
                  <div class="job">To To Company</div>
                </div>
              </div>
              {/* <!--Testimonial 3--> */}
              <div class="quote hide-bottom quote-text-5" data-ppquote="li-quote-5">
                <div class="pp"></div>
                <p>Dramatically communicate high-payoff infrastructures without ubiquitous best practices. Interactively
                  synthesize innovative best practices with at go forward methods of empowerment. Proactively</p>
                <div class="container-info">
                  <div class="name">Grégoire Pasquet /</div>
                  <div class="job">Solf Solution</div>
                </div>
              </div>
              {/* <!--Testimonial 4--> */}
              <div class="quote hide-bottom quote-text-6" data-ppquote="li-quote-6">
                <div class="pp"></div>
                <p>Dramatically communicate high-payoff infrastructures without ubiquitous best practices. Interactively
                  synthesize innovative best practices with at go forward methods of empowerment. Proactively</p>
                <div class="container-info">

                  <div class="name">Nicolas Puran /</div>
                  <div class="job">CEO Founder</div>
                </div>
              </div>
              {/* <!--Testimonial 5--> */}
              <div class="quote hide-bottom quote-text-8" data-ppquote="li-quote-8">
                <div class="pp"></div>
                <p>Dramatically communicate high-payoff infrastructures without ubiquitous best practices. Interactively
                  synthesize innovative best practices with at go forward methods of empowerment. Proactively</p>
                <div class="container-info">

                  <div class="name">Charles Jadran /</div>
                  <div class="job">Web Development</div>
                </div>
              </div>
              {/* <!--Testimonial 6--> */}
              <div class="quote quote-text-1 hide-bottom" data-ppquote="li-quote-1">
                <div class="pp"></div>
                <p>Dramatically communicate high-payoff infrastructures without ubiquitous best practices. Interactively
                  synthesize innovative best practices with at go forward methods of empowerment. Proactively</p>
                <div class="container-info">
                  <div class="name">Bertier Luyt /</div>
                  <div class="job">Managing Director</div>
                </div>
              </div>
              {/* <!--Testimonial 7--> */}
              <div class="quote quote-text-2 hide-bottom" data-ppquote="li-quote-2">
                <div class="pp"></div>
                <p>Dramatically communicate high-payoff infrastructures without ubiquitous best practices. Interactively
                  synthesize innovative best practices with at go forward methods of empowerment. Proactively</p>
                <div class="container-info">
                  <div class="name">Darpon Abir Khan /</div>
                  <div class="job">Founder Officience</div>
                </div>
              </div>
            </div>
            {/* <!--Right Bubble Images--> */}
            <div class="container-pe-quote right">
              <div class="pp-quote li-quote-4 active" data-textquote="quote-text-4">
                <div class="img animated bounce"></div>
              </div>
              <div class="pp-quote li-quote-5" data-textquote="quote-text-5">
                <div class="img animated bounce"></div>
              </div>
              <div class="pp-quote li-quote-6" data-textquote="quote-text-6">
                <div class="img animated bounce"></div>
              </div>
              <div class="pp-quote li-quote-8" data-textquote="quote-text-8">
                <div class="img animated bounce"></div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* <!-- Start besoft Blog Area --> */}
      <div class="blog_area" id="blog">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="dreamit-section-title style-two">
                <h5>// LATEST BLOG POST</h5>
                <h1>Read our lates insights</h1>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="blog-button">
                <a href="#">View All Blog</a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="single_blog">
                <div class="single_blog_thumb">
                  <a href="blog-details.html">
                    <img src="https://raulsigoli.rastremar.com.br/asd/besoft/assets/images/resource/blog1.png" alt="" /></a>
                </div>
                <div class="single_blog_content">
                  <div class="post-categories">
                    <a href="#"><span><i class="fas fa-calendar-check"></i></span>July 10,2021</a>
                  </div>
                  <div class="besoft_blog_meta">
                    <a href="#"> <i class="far fa-user"></i>Posted By <span>Admin</span></a>
                  </div>
                  <div class="blog_page_title">
                    <h4><a href="blog-details.html">Benefits of mobile Android Apps Development</a></h4>
                  </div>
                  <div class="blog_button">
                    <a href="#">Read More <i class="flaticon-right-arrow-2"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="single_blog">
                <div class="single_blog_thumb">
                  <a href="blog-details.html"><img src="https://raulsigoli.rastremar.com.br/asd/besoft/assets/images/resource/blog2.png" alt="" /></a>
                </div>
                <div class="single_blog_content style_two">
                  <div class="post-categories">
                    <a href="#"><span><i class="fas fa-calendar-check"></i></span>July 10,2021</a>
                  </div>
                  <div class="besoft_blog_meta">
                    <a href="#"><i class="far fa-user"></i>Posted By <span>Admin</span></a>
                  </div>
                  <div class="blog_page_title">
                    <h4><a href="blog-details.html">We provide Home Repairs & Maintenance</a></h4>
                  </div>
                  <div class="blog_button">
                    <a href="#">Read More <i class="flaticon-right-arrow-2"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="single_blog">
                <div class="single_blog_thumb">
                  <a href="blog-details.html"><img src="https://raulsigoli.rastremar.com.br/asd/besoft/assets/images/resource/blog3.png" alt="" /></a>
                </div>
                <div class="single_blog_content">
                  <div class="post-categories">
                    <a href="#"><span><i class="fas fa-calendar-check"></i></span>July 10,2021</a>
                  </div>
                  <div class="besoft_blog_meta">
                    <a href="#"><i class="far fa-user"></i>Posted By <span>Admin</span></a>
                  </div>
                  <div class="blog_page_title">
                    <h4><a href="blog-details.html">We provide Home Repairs & Maintenance</a></h4>
                  </div>
                  <div class="blog_button">
                    <a href="#">Read More <i class="flaticon-right-arrow-2"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Start besoft subscribe Area --> */}
      <div class="subscribe-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="subscribe-content">
                <div class="subscribe-title">
                  <h1>Subscribe our newsletter</h1>
                  <p>Please Subscribe our news letter and and get update.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="contact-form-box">
                <form id="contact_form" action="mail.php" method="POST">
                  <div class="from-box">
                    <input type="text" placeholder="Enter E-Mail Address" />
                    <button>Subscribe</button>
                  </div>
                </form>
                <p class="form-message"></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Start besoft Footer Middle Area --> */}
      <div class="footer-middle">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="widget-widgets-company-info white">
                <div class="besoft-logo">
                  <a class="logo_img" href="index.html" title="besoft">
                    <img src="assets/images/logo2.png" alt="" />
                  </a>
                </div>
                <div class="company-info-desc">
                  <p>Our company has been developi high-quality and reliable softwar corporate needs since 2011 is renowned
                    professionals of soft development.</p>
                </div>
                <div class="company_icon">
                  <div class="company-title">
                    <h4>Follow Us :</h4>
                  </div>
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="widget widget-nav-menu">
                <h4 class="widget-title">Quick Links</h4>
                <div class="menu-quick-link-content">
                  <ul class="menu">
                    <li><a href="#">Project Development</a></li>
                    <li><a href="#">UI/UX Design Idea</a></li>
                    <li><a href="#">Our Pricing Plan</a></li>
                    <li><a href="#">Our Blog Classic</a></li>
                    <li><a href="#">Contact with Us</a></li>
                    <li><a href="#">Terms & Condition</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="widget-footer-title">
                <h4 class="widget-title">Popular Post</h4>
              </div>
              <div class="footer-recent-post style-two">
                <div class="footer-recent-post-thumb">
                  <a href="#"><img src="assets/images/resource/footer1.png" alt="" /></a>
                </div>
                <div class="footer-recent-post-title">
                  <p><a href="#">Android Application Program-2021</a></p>
                  <span>August 24, 2021</span>
                </div>
              </div>
              <div class="footer-recent-post-1">
                <div class="footer-recent-post-thumb">
                  <a href="#"><img src="assets/images/resource/footer2.png" alt="" /></a>
                </div>
                <div class="footer-recent-post-title">
                  <p><a href="#">Android Application Program-2021</a></p>
                  <span>August 24, 2021</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div id="footer-widget-address">
                <h4 class="widget-title">Quick Contact</h4>
                <div class="footer-inner">
                  <div class="footer-socail-icon">
                    <i class="flaticon-phone-call"></i>
                  </div>
                  <div class="footer-socail-info">
                    <p>
                      <span>(+001) 123-456-7890</span>
                    </p>
                  </div>
                </div>
                <div class="footer-inner">
                  <div class="footer-socail-icon">
                    <i class="icon flaticon-email-1"></i>
                  </div>
                  <div class="footer-socail-info">
                    <p>Example @gmail.com</p>
                  </div>
                </div>
                <div class="footer-inner">
                  <div class="footer-socail-icon">
                    <i class="icon flaticon-placeholder-1"></i>
                  </div>
                  <div class="footer-socail-info2">
                    <p>515 Carriag Court Coachella, CA, 92236 USA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row footer-bottom">
            <div class="col-lg-6 col-md-6">
              <div class="footer-bottom-content">
                <div class="footer-bottom-content-copy">
                  <p>© Copyright 2021 <span>beSoft</span> All Rights Reserved.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-12">
              <div class="footer-bottom-menu">
                <ul>
                  <li>About Us</li>
                  <li>FAQ</li>
                  <li>Our History</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
