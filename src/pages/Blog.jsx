import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import './Blog.css'
import Swiper from 'swiper';
const Blog = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div id="app" data-v-app="">
        <>
  <meta charSet="UTF-8" />
  <link rel="icon" href="/favicon.png" />
  <meta
    name="description"
    content="UIC Group – это опыт реализации тысяч проектов и глубокое понимание тенденций развития информационных технологий. UIC Group это компания которая решает комплексные задачи по повышению эффективности процессов, а также предоставляет услуги в области создания систем управления, внедрения бизнес-приложений, управления данными и аналитики, системная интеграция, разработка программного обеспечения."
  />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta
    name="google-site-verification"
    content="K6d9wadljap9pmrmNFyBVjwXPtlAPAS3LJMj5yMUlNM"
  />
  <meta name="author" content="United IT Company" />
  <meta
    property="og:title"
    content="Digital Solutions for Your Business | UIC Group"
  />
  <meta property="og:site_name" content="uic.group" />
  <meta property="og:url" content="https://uic.group" />
  <meta
    property="og:description"
    content="UIC Group offers IT solutions of any complexity in 9 areas. Every project of our team has value and passes quality control. Сompany is pleased to provide its services to customers, offering them quality and the best prices on the market!"
  />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="/meta-cover-us.jpg" />
  <meta property="image" content="/meta-cover-us.jpg" />
  <meta property="og:image:url" content="/meta-cover-us.jpg" />
  <meta property="twitter:image" content="/meta-cover-us.jpg" />
  <meta property="og:image:width" content={1200} />
  <meta property="og:image:height" content={627} />
  <meta
    name="keywords"
    content="создание, Создание сайтов, Создание сайтов Ташкент, Создание сайтов Uzbekistan, разработка сайтов, разработка, Оптимизация сайта, Веб-сайт, мобильное приложение, Кибербезопасность, Разработка игр, сайт, интернет сайт, сайт визитка, интернет магазин, корпоративный сайт,  разработка логотипа, разработка дизайна"
  />
  <title>Blog</title>
  <meta name="robots" content="max-image-preview:large" />
  <link rel="stylesheet" href="https://uic.group/assets/index.72dbb0e3.css" />
  <link
    rel="stylesheet"
    href="https://cdn.botpress.cloud/webchat/v1/inject.css"
  />
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        ".vel-fade-enter-active,.vel-fade-leave-active{-webkit-transition:all .3s ease;transition:all .3s ease}.vel-fade-enter-from,.vel-fade-leave-to{opacity:0}.vel-img-swiper{display:block;position:relative}.vel-modal{background:rgba(0,0,0,.5);bottom:0;left:0;margin:0;position:fixed;right:0;top:0;z-index:9998}.vel-img-wrapper{left:50%;margin:0;position:absolute;top:50%;-webkit-transform:translate(-50% -50%);transform:translate(-50% -50%);-webkit-transition:.3s linear;transition:.3s linear;will-change:transform opacity}.vel-img,.vel-img-wrapper{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vel-img{background-color:rgba(0,0,0,.7);-webkit-box-shadow:0 5px 20px 2px rgba(0,0,0,.7);box-shadow:0 5px 20px 2px rgba(0,0,0,.7);display:block;max-height:80vh;max-width:80vw;position:relative;-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out}@media (max-width:750px){.vel-img{max-height:95vh;max-width:85vw}}.vel-btns-wrapper{position:static}.vel-btns-wrapper .btn__close,.vel-btns-wrapper .btn__next,.vel-btns-wrapper .btn__prev{-webkit-tap-highlight-color:transparent;color:#fff;cursor:pointer;font-size:32px;opacity:.6;outline:none;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:.15s linear;transition:.15s linear;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vel-btns-wrapper .btn__close:hover,.vel-btns-wrapper .btn__next:hover,.vel-btns-wrapper .btn__prev:hover{opacity:1}.vel-btns-wrapper .btn__close.disable,.vel-btns-wrapper .btn__close.disable:hover,.vel-btns-wrapper .btn__next.disable,.vel-btns-wrapper .btn__next.disable:hover,.vel-btns-wrapper .btn__prev.disable,.vel-btns-wrapper .btn__prev.disable:hover{cursor:default;opacity:.2}.vel-btns-wrapper .btn__next{right:12px}.vel-btns-wrapper .btn__prev{left:12px}.vel-btns-wrapper .btn__close{right:10px;top:24px}@media (max-width:750px){.vel-btns-wrapper .btn__next,.vel-btns-wrapper .btn__prev{font-size:20px}.vel-btns-wrapper .btn__close{font-size:24px}.vel-btns-wrapper .btn__next{right:4px}.vel-btns-wrapper .btn__prev{left:4px}}.vel-modal.is-rtl .vel-btns-wrapper .btn__next{left:12px;right:auto}.vel-modal.is-rtl .vel-btns-wrapper .btn__prev{left:auto;right:12px}@media (max-width:750px){.vel-modal.is-rtl .vel-btns-wrapper .btn__next{left:4px;right:auto}.vel-modal.is-rtl .vel-btns-wrapper .btn__prev{left:auto;right:4px}}.vel-modal.is-rtl .vel-img-title{direction:rtl}"
    }}
  />
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        '.vel-loading{left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vel-loading .ring{display:inline-block;height:64px;width:64px}.vel-loading .ring:after{-webkit-animation:ring 1.2s linear infinite;animation:ring 1.2s linear infinite;border-color:hsla(0,0%,100%,.7) transparent;border-radius:50%;border-style:solid;border-width:5px;content:" ";display:block;height:46px;margin:1px;width:46px}@-webkit-keyframes ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}'
    }}
  />
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        ".vel-on-error{left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vel-on-error .icon{color:#aaa;font-size:80px}"
    }}
  />
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        ".vel-img-title{bottom:60px;color:#ccc;cursor:default;font-size:12px;left:50%;line-height:1;max-width:80%;opacity:.8;overflow:hidden;position:absolute;text-align:center;text-overflow:ellipsis;-webkit-transform:translate(-50%);transform:translate(-50%);-webkit-transition:opacity .15s;transition:opacity .15s;white-space:nowrap}.vel-img-title:hover{opacity:1}"
    }}
  />
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        ".vel-icon{fill:currentColor;height:1em;overflow:hidden;vertical-align:-.15em;width:1em}"
    }}
  />
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        ".vel-toolbar{border-radius:4px;bottom:8px;display:-webkit-box;display:-ms-flexbox;display:flex;left:50%;opacity:.9;overflow:hidden;padding:0;position:absolute;-webkit-transform:translate(-50%);transform:translate(-50%)}.vel-toolbar,.vel-toolbar .toolbar-btn{background-color:#2d2d2d;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vel-toolbar .toolbar-btn{-ms-flex-negative:0;-webkit-tap-highlight-color:transparent;color:#fff;cursor:pointer;flex-shrink:0;font-size:20px;outline:none;padding:6px 10px}.vel-toolbar .toolbar-btn:active,.vel-toolbar .toolbar-btn:hover{background-color:#3d3d3d}"
    }}
  />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="https://uic.group/assets/PIndex.14e4e361.js"
  />
  <link rel="stylesheet" href="https://uic.group/assets/PIndex.ac2e390a.css" />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="https://uic.group/assets/PortfolioTitle.d53edc35.js"
  />
  <link rel="stylesheet" href="https://uic.group/assets/PortfolioTitle.c9874b09.css" />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="https://uic.group/assets/WhiteButton.da94156e.js"
  />
  <link rel="stylesheet" href="https://uic.group/assets/WhiteButton.d8aed8b5.css" />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="https://uic.group/assets/ClientsComment.75c68213.js"
  />
  <link rel="stylesheet" href="https://uic.group/assets/ClientsComment.43a4bcdc.css" />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="https://uic.group/assets/swiper.min.4bcce7ec.js"
  />
  <link rel="stylesheet" href="https://uic.group/assets/swiper.min.c4a73ca1.css" />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="https://uic.group/assets/navigation.a0dd03d0.js"
  />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="https://uic.group/assets/pagination.e7adf9b1.js"
  />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="https://uic.group/assets/useOnLanguageChange.029edf3e.js"
  />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="https://uic.group/assets/portfolio.10467127.js"
  />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="https://uic.group/assets/global.170671ce.js"
  />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="https://uic.group/assets/PVacancy.6695dd28.js"
  />
  <link rel="stylesheet" href="https://uic.group/assets/PVacancy.06d27473.css" />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="https://uic.group/assets/BigTitle.852a632a.js"
  />
  <link rel="stylesheet" href="https://uic.group/assets/BigTitle.7176b47c.css" />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="https://uic.group/assets/vacancy.bf59dabf.js"
  />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="https://uic.group/assets/PCSVacancy.9e37c235.js"
  />
  <link rel="stylesheet" href="https://uic.group/assets/PCSVacancy.e88e9213.css" />
  <link rel="stylesheet" href="https://uic.group/assets/pagination.min.7403cca2.css" />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="https://uic.group/assets/GalleryCardSlider.976ee11f.js"
  />
  <link rel="stylesheet" href="https://uic.group/assets/GalleryCardSlider.174ec93a.css" />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="https://uic.group/assets/BasicInput.588b6201.js"
  />
  <link rel="stylesheet" href="https://uic.group/assets/BasicInput.317b72db.css" />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="https://uic.group/assets/BasicSelect.392261f2.js"
  />
  <link rel="stylesheet" href="https://uic.group/assets/BasicSelect.6a6df70e.css" />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="https://uic.group/assets/gallery.5013f06c.js"
  />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="https://uic.group/assets/index.41e2f270.js"
  />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="https://uic.group/assets/blog-index.a3a61ae6.js"
  />
  <link rel="stylesheet" href="https://uic.group/assets/blog-index.fc202c8e.css" />
  <link
    rel="modulepreload"
    as="script"
    crossOrigin=""
    href="https://uic.group/assets/blog.965b4fb4.js"
  />
  <title />
  <meta name="description" />
</>

  <div>
    <div className="">
      <div
        data-v-1cc107bd=""
        className="bg-[#1E1E20] h-full overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
      <Navbar/>
        <main data-v-1cc107bd="" className="">
          <div data-v-1cc107bd="" className="min-h-[100vh]">
    
            <div>
              <div
                data-v-2082a543=""
                className="pt-[120px] mb-16 aos-init aos-animate"
                data-aos-duration={500}
                data-aos="fade-left"
              >
                <div
                  data-v-2082a543=""
                  className="$style.word-wrapper overflow-hidden"
                >
                  <h1
                    data-v-2082a543=""
                    className="flex items-center justify-center relative font-['Greycliff CF'] font-extrabold whitespace-nowrap text-[56px] leading-[67px] sm:text-[56px] sm:leading-[67px] md:text-[100px] md:leading-[150px] lg:text-[210px] lg:leading-[252px] stroke-[#ffffff1a] border-solid uppercase"
                  >
                    Blog
                    <span
                      data-v-2082a543=""
                      className="flex items-center justify-center font-['Greycliff CF'] absolute top-[50%] left-[50%] translate-y-[-30%] -translate-x-2/4 uppercase !text-white !font-extrabold text-[40px] leading-[48px] sm:text-[40px] sm:leading-[48px] md:text-[56px] md:leading-[74px] lg:text-[78px] lg:leading-[94px]"
                    >
                      Blog
                    </span>
                  </h1>
                </div>
              </div>
              <h2 className="invisible">
                
                The latest news and events from the life of a large family UIC
                Group🤍
              </h2>
              <div className="container">
                <div
                  className="hidden md:flex items-start gap-[32px] card-tabs relative aos-init aos-animate"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                >
                  <span className="_active-all flex border-solid border-[1px] border-[#4A4B4D] p-[11px] rounded-[12px] cursor-pointer group hover:border-[#00A795] duration-300">
                    <i
                      data-v-56c03d90=""
                      className="icon hover:text-red-500 text-[#979798] group-hover:text-[#00A795] duration-300"
                    >
                      <svg
                        width={22}
                        height={22}
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.8571 0H15.7143C13.9786 0 12.5714 1.40721 12.5714 3.14286V6.28571C12.5714 8.02136 13.9786 9.42857 15.7143 9.42857H18.8571C20.5928 9.42857 22 8.02136 22 6.28571V3.14286C22 1.40721 20.5928 0 18.8571 0ZM18.8571 12.5714H15.7143C13.9786 12.5714 12.5714 13.9786 12.5714 15.7143V18.8571C12.5714 20.5928 13.9786 22 15.7143 22H18.8571C20.5928 22 22 20.5928 22 18.8571V15.7143C22 13.9786 20.5928 12.5714 18.8571 12.5714ZM6.28571 12.5714H3.14286C1.40721 12.5714 0 13.9786 0 15.7143V18.8571C0 20.5928 1.40721 22 3.14286 22H6.28571C8.02136 22 9.42857 20.5928 9.42857 18.8571V15.7143C9.42857 13.9786 8.02136 12.5714 6.28571 12.5714ZM6.28571 0H3.14286C1.40721 0 0 1.40721 0 3.14286V6.28571C0 8.02136 1.40721 9.42857 3.14286 9.42857H6.28571C8.02136 9.42857 9.42857 8.02136 9.42857 6.28571V3.14286C9.42857 1.40721 8.02136 0 6.28571 0Z"
                          fill="#979798"
                        />
                      </svg>
                    </i>
                  </span>
                  <div className="overflow-hidden relative tabs-wrapper flex gap-[24px] items-center transition duration-300">
                    <span className="category-gradient absolute right-[-50px] top-0 w-[100px] h-[50px] pointer-events-none" />
                    <span className="text-[#979798] border-[#4A4B4D] border-[1px] whitespace-nowrap cursor-pointer py-[11px] px-[32px] rounded-[12px] font-bold text-[16px] duration-300 hover:text-[#00A795] hover:border-[#00A795]">
                      Holidays
                    </span>
                    <span className="text-[#979798] border-[#4A4B4D] border-[1px] whitespace-nowrap cursor-pointer py-[11px] px-[32px] rounded-[12px] font-bold text-[16px] duration-300 hover:text-[#00A795] hover:border-[#00A795]">
                      Advice
                    </span>
                    <span className="text-[#979798] border-[#4A4B4D] border-[1px] whitespace-nowrap cursor-pointer py-[11px] px-[32px] rounded-[12px] font-bold text-[16px] duration-300 hover:text-[#00A795] hover:border-[#00A795]">
                      About programming languages
                    </span>
                    <span className="text-[#979798] border-[#4A4B4D] border-[1px] whitespace-nowrap cursor-pointer py-[11px] px-[32px] rounded-[12px] font-bold text-[16px] duration-300 hover:text-[#00A795] hover:border-[#00A795]">
                      Articles
                    </span>
                    <span className="text-[#979798] border-[#4A4B4D] border-[1px] whitespace-nowrap cursor-pointer py-[11px] px-[32px] rounded-[12px] font-bold text-[16px] duration-300 hover:text-[#00A795] hover:border-[#00A795]">
                      News
                    </span>
                    <span className="text-[#979798] border-[#4A4B4D] border-[1px] whitespace-nowrap cursor-pointer py-[11px] px-[32px] rounded-[12px] font-bold text-[16px] duration-300 hover:text-[#00A795] hover:border-[#00A795]">
                      From our project
                    </span>
                  </div>
                  <i
                    data-v-56c03d90=""
                    className="icon hover:text-red-500 text-[#00A795] z-10 cursor-pointer hover:text-[#00A79590] duration-300 ml-auto relative top-[10px] right-0"
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={24} height={24} rx={12} fill="#1B2C2C" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.6932 10.2917L7.3065 10.2917C7.14542 10.2917 7.01483 10.3943 7.01483 10.5208C7.01483 10.5675 7.03293 10.613 7.0667 10.6513L11.76 15.9779C11.8517 16.0819 12.0334 16.1079 12.1659 16.0358C12.1947 16.0201 12.2197 16.0005 12.2396 15.9779L16.933 10.6513C17.0247 10.5472 16.9916 10.4045 16.8592 10.3324C16.8104 10.3059 16.7525 10.2917 16.6932 10.2917Z"
                        fill="#00A795"
                      />
                    </svg>
                  </i>
                </div>
                <div
                  data-v-1f1a0c78=""
                  className="flex flex-col mt-[28px] aos-init aos-animate"
                  data-aos-duration={1500}
                  maxLength={100}
                  data-aos="fade-right"
                >
            
                  <div
                    data-v-1f1a0c78=""
                    className="input-wrapper transition duration-300"
                    style={{ backgroundColor: "rgba(20, 20, 21, 0.46)" }}
                  >
                    <div data-v-1f1a0c78="" className="text-[#515151]">
                      <i
                        data-v-56c03d90=""
                        data-v-1f1a0c78=""
                        className="icon hover:text-red-500 py-3 pl-3"
                      >
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                            stroke="#515151"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M20.9999 20.9999L16.6499 16.6499"
                            stroke="#515151"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </i>
                    </div>
                    <input
                      data-v-1f1a0c78=""
                      maxLength={100}
                      placeholder="Search"
                      required=""
                      type="text"
                      autoComplete="off"
                      className="placeholder main-input"
                    />
            
            
            
                  </div>
                </div>
                <div className="grid mt-24 mb-12 md:grid-cols-2 md:gap-x-11 gap-y-24 md:gap-y-10 sm:mt-12">
                  <a
                    href="/blog/77"
                    className="aos-init aos-animate"
                    data-aos-duration={1500}
                    data-aos="fade-right"
                  >
                    <div className="blog-card sm:ml-[15px] ml-0 bg-blog-card-background grid grid-cols-12 sm:px-0 px-4 rounded-8 group hover:transition hover:ease-in-out hover:duration-500">
                      <div className="sm:col-span-5 col-span-12 sm:-mt-0 -mt-[70px] sm:mr-3 h-[180px] sm:h-[210px]">
                        <div className="relative group-hover:-translate-x-0 sm:-translate-x-[24px] w-[100%] h-[100%] -translate-x-[0px] group-hover:-translate-y-0 md:-translate-y-[16px] group-hover:transition transition group-hover:duration-500 duration-500">
                          <img
                            className="w-full h-full sm:w-[280px] rounded-8 object-cover object-center"
                            src="https://uic.group/media/cache/38/89/3889da51d22ef8e77caae15bdb47f3dc.jpg"
                          />
                          <div className="bg-[#00000070] rounded backdrop-blur-[6px] py-2 px-4 absolute left-3 bottom-3">
                            <h2 className="font-['Roboto'] font-normal text-xs tracking-[0.002em] text-white relative ml-1 before:content-[''] before:w-[1px] before:h-[16px] before:absolute before:-left-[4px] before:bottom-0 before:rounded-t-sm before:rounded-b-sm before:bg-[#00A795]">
                              News
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-11 py-6 pr-0 sm:py-5.5 sm:pr-7 sm:col-span-7 text-white flex flex-col justify-between">
                        <div>
                          The UIC Group team in Fergana!
                          <p className="font-['Roboto'] font-normal text-xs !leading-140 text-gray line-clamp-1 sm:line-clamp-3 sm:my-4 mt-2 mb-3">
                            The captains of the UIC Group teams took part in
                            several meetings and trainings in the Fergana
                            region. In particular, Tashkent University of
                            Information Technology (TUIT) and Fergana
                            Polytechnic Institute met with students from Fergana
                            branches and shared their knowledge and experience
                            on the topic of "building your own IT company and
                            its proper systematization". These meetings were an
                            excellent opportunity for students to learn about
                            current trends in the IT field and receive valuable
                            advice from experienced specialists.
                          </p>
                        </div>
                        <div>
                          <hr className="text-white opacity-30" />
                          <div className="flex items-center gap-6 mt-2 sm:mt-4">
                            <div className="flex items-center gap-2">
                              <span className="bg-[#ffffff24] group-hover:bg-[#00A795] transition group-hover:transition duration-500 group-hover:duration-500 w-5 h-5 rounded-[50%] flex items-center justify-center text-white">
                                <i
                                  data-v-56c03d90=""
                                  className="icon hover:text-red-500"
                                >
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M1.86133 5.50245H12.1444"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.5629 7.75558H9.56824"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.00284 7.75558H7.00818"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.4379 7.75558H4.44324"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.5629 9.99781H9.56824"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.00284 9.99781H7.00818"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.4379 9.99781H4.44324"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.33315 1.23076V3.12929"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.67299 1.23076V3.12929"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M9.44557 2.14183H4.56058C2.86634 2.14183 1.80811 3.08564 1.80811 4.8205V10.0414C1.80811 11.8036 2.86634 12.7692 4.56058 12.7692H9.44022C11.1398 12.7692 12.1927 11.82 12.1927 10.0851V4.8205C12.198 3.08564 11.1452 2.14183 9.44557 2.14183Z"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </i>
                              </span>
                              <span className="font-['Roboto'] font-medium text-[13px] !leading-[15px] text-[#A5A5A6] line-clamp-1">
                                20.03.2024
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="bg-[#ffffff24] group-hover:bg-[#00A795] transition group-hover:transition duration-500 group-hover:duration-500 w-5 h-5 rounded-[50%] flex items-center justify-center text-white">
                                <i
                                  data-v-56c03d90=""
                                  className="icon hover:text-red-500"
                                >
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M0.583496 6.99996C0.583496 6.99996 2.91683 2.3333 7.00016 2.3333C11.0835 2.3333 13.4168 6.99996 13.4168 6.99996C13.4168 6.99996 11.0835 11.6666 7.00016 11.6666C2.91683 11.6666 0.583496 6.99996 0.583496 6.99996Z"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75Z"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </i>
                              </span>
                              <span className="font-['Roboto'] font-medium text-[13px] !leading-[15px] text-[#A5A5A6] line-clamp-1">
                                513
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="/blog/76"
                    className="aos-init aos-animate"
                    data-aos-duration={1500}
                    data-aos="fade-right"
                  >
                    <div className="blog-card sm:ml-[15px] ml-0 bg-blog-card-background grid grid-cols-12 sm:px-0 px-4 rounded-8 group hover:transition hover:ease-in-out hover:duration-500">
                      <div className="sm:col-span-5 col-span-12 sm:-mt-0 -mt-[70px] sm:mr-3 h-[180px] sm:h-[210px]">
                        <div className="relative group-hover:-translate-x-0 sm:-translate-x-[24px] w-[100%] h-[100%] -translate-x-[0px] group-hover:-translate-y-0 md:-translate-y-[16px] group-hover:transition transition group-hover:duration-500 duration-500">
                          <img
                            className="w-full h-full sm:w-[280px] rounded-8 object-cover object-center"
                            src="https://uic.group/media/cache/79/a4/79a4ba21ccffb1486aa0afa3df153dae.jpg"
                          />
                          <div className="bg-[#00000070] rounded backdrop-blur-[6px] py-2 px-4 absolute left-3 bottom-3">
                            <h2 className="font-['Roboto'] font-normal text-xs tracking-[0.002em] text-white relative ml-1 before:content-[''] before:w-[1px] before:h-[16px] before:absolute before:-left-[4px] before:bottom-0 before:rounded-t-sm before:rounded-b-sm before:bg-[#00A795]">
                              News
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-11 py-6 pr-0 sm:py-5.5 sm:pr-7 sm:col-span-7 text-white flex flex-col justify-between">
                        <div>
                          The opportunity to become part of a professional team
                          as a developer!
                          <p className="font-['Roboto'] font-normal text-xs !leading-140 text-gray line-clamp-1 sm:line-clamp-3 sm:my-4 mt-2 mb-3">
                            We're on the lookout for passionate and skilled
                            Frontend, Backend, and Flutter Programmers to join
                            our team of professionals at a leading IT company in
                            Uzbekistan. This is your chance to work on
                            cutting-edge projects, collaborate with experts in
                            the field, and push the boundaries of technology.
                          </p>
                        </div>
                        <div>
                          <hr className="text-white opacity-30" />
                          <div className="flex items-center gap-6 mt-2 sm:mt-4">
                            <div className="flex items-center gap-2">
                              <span className="bg-[#ffffff24] group-hover:bg-[#00A795] transition group-hover:transition duration-500 group-hover:duration-500 w-5 h-5 rounded-[50%] flex items-center justify-center text-white">
                                <i
                                  data-v-56c03d90=""
                                  className="icon hover:text-red-500"
                                >
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M1.86133 5.50245H12.1444"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.5629 7.75558H9.56824"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.00284 7.75558H7.00818"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.4379 7.75558H4.44324"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.5629 9.99781H9.56824"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.00284 9.99781H7.00818"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.4379 9.99781H4.44324"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.33315 1.23076V3.12929"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.67299 1.23076V3.12929"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M9.44557 2.14183H4.56058C2.86634 2.14183 1.80811 3.08564 1.80811 4.8205V10.0414C1.80811 11.8036 2.86634 12.7692 4.56058 12.7692H9.44022C11.1398 12.7692 12.1927 11.82 12.1927 10.0851V4.8205C12.198 3.08564 11.1452 2.14183 9.44557 2.14183Z"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </i>
                              </span>
                              <span className="font-['Roboto'] font-medium text-[13px] !leading-[15px] text-[#A5A5A6] line-clamp-1">
                                13.03.2024
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="bg-[#ffffff24] group-hover:bg-[#00A795] transition group-hover:transition duration-500 group-hover:duration-500 w-5 h-5 rounded-[50%] flex items-center justify-center text-white">
                                <i
                                  data-v-56c03d90=""
                                  className="icon hover:text-red-500"
                                >
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M0.583496 6.99996C0.583496 6.99996 2.91683 2.3333 7.00016 2.3333C11.0835 2.3333 13.4168 6.99996 13.4168 6.99996C13.4168 6.99996 11.0835 11.6666 7.00016 11.6666C2.91683 11.6666 0.583496 6.99996 0.583496 6.99996Z"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75Z"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </i>
                              </span>
                              <span className="font-['Roboto'] font-medium text-[13px] !leading-[15px] text-[#A5A5A6] line-clamp-1">
                                212
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="/blog/74"
                    className="aos-init aos-animate"
                    data-aos-duration={1500}
                    data-aos="fade-right"
                  >
                    <div className="blog-card sm:ml-[15px] ml-0 bg-blog-card-background grid grid-cols-12 sm:px-0 px-4 rounded-8 group hover:transition hover:ease-in-out hover:duration-500">
                      <div className="sm:col-span-5 col-span-12 sm:-mt-0 -mt-[70px] sm:mr-3 h-[180px] sm:h-[210px]">
                        <div className="relative group-hover:-translate-x-0 sm:-translate-x-[24px] w-[100%] h-[100%] -translate-x-[0px] group-hover:-translate-y-0 md:-translate-y-[16px] group-hover:transition transition group-hover:duration-500 duration-500">
                          <img
                            className="w-full h-full sm:w-[280px] rounded-8 object-cover object-center"
                            src="https://uic.group/media/cache/6a/9d/6a9d84021707ef44e6fe7f30d31c9b25.jpg"
                          />
                          <div className="bg-[#00000070] rounded backdrop-blur-[6px] py-2 px-4 absolute left-3 bottom-3">
                            <h2 className="font-['Roboto'] font-normal text-xs tracking-[0.002em] text-white relative ml-1 before:content-[''] before:w-[1px] before:h-[16px] before:absolute before:-left-[4px] before:bottom-0 before:rounded-t-sm before:rounded-b-sm before:bg-[#00A795]">
                              News
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-11 py-6 pr-0 sm:py-5.5 sm:pr-7 sm:col-span-7 text-white flex flex-col justify-between">
                        <div>
                          Opportunity for an internship at the UIC Group in the
                          direction of Project Manager
                          <p className="font-['Roboto'] font-normal text-xs !leading-140 text-gray line-clamp-1 sm:line-clamp-3 sm:my-4 mt-2 mb-3">
                            Primary requirements: Good knowledge of English and
                            Russian; At least one year of experience with a real
                            IT project; Have basic knowledge in the field of
                            management; Ability to work with documents (official
                            letter, appeal, act); Good communication skills;
                            Discipline and responsibility; Ability to pitch.
                            &nbsp; Opportunities during the internship: Work on
                            real projects; Development of PM skills;
                            Participation in various events; Teamwork skills;
                            Studying the process of receiving (frontline) and
                            transfer (delivery management) of the project from
                            the client; Skills for calculating risks and
                            behavior (Risk Management); Training in design
                            (planning); Have knowledge in the field of
                            copywriting; Learning Jira/Agile applications;
                            Ability to work with development teams (in real
                            cases). &nbsp; Practice conditions: The internship
                            period is free; Duration - 3 months &nbsp;
                            Facilities and conditions: Good internet; Constant
                            learning and development environment; Events like
                            Standup/meetup; Employability after the internship
                            period (most likely at UIC or one of our joint
                            projects); &nbsp; It should be noted, the number of
                            applicants for internships is 3&nbsp;people. &nbsp;
                            Contacts: UIC Group HR: @uicgroup_hr Phone:+998 71
                            2007007 Website: www.uic.group Telegram: @uicgroup
                            Instagram: @uicgroup
                          </p>
                        </div>
                        <div>
                          <hr className="text-white opacity-30" />
                          <div className="flex items-center gap-6 mt-2 sm:mt-4">
                            <div className="flex items-center gap-2">
                              <span className="bg-[#ffffff24] group-hover:bg-[#00A795] transition group-hover:transition duration-500 group-hover:duration-500 w-5 h-5 rounded-[50%] flex items-center justify-center text-white">
                                <i
                                  data-v-56c03d90=""
                                  className="icon hover:text-red-500"
                                >
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M1.86133 5.50245H12.1444"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.5629 7.75558H9.56824"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.00284 7.75558H7.00818"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.4379 7.75558H4.44324"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.5629 9.99781H9.56824"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.00284 9.99781H7.00818"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.4379 9.99781H4.44324"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.33315 1.23076V3.12929"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.67299 1.23076V3.12929"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M9.44557 2.14183H4.56058C2.86634 2.14183 1.80811 3.08564 1.80811 4.8205V10.0414C1.80811 11.8036 2.86634 12.7692 4.56058 12.7692H9.44022C11.1398 12.7692 12.1927 11.82 12.1927 10.0851V4.8205C12.198 3.08564 11.1452 2.14183 9.44557 2.14183Z"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </i>
                              </span>
                              <span className="font-['Roboto'] font-medium text-[13px] !leading-[15px] text-[#A5A5A6] line-clamp-1">
                                27.10.2023
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="bg-[#ffffff24] group-hover:bg-[#00A795] transition group-hover:transition duration-500 group-hover:duration-500 w-5 h-5 rounded-[50%] flex items-center justify-center text-white">
                                <i
                                  data-v-56c03d90=""
                                  className="icon hover:text-red-500"
                                >
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M0.583496 6.99996C0.583496 6.99996 2.91683 2.3333 7.00016 2.3333C11.0835 2.3333 13.4168 6.99996 13.4168 6.99996C13.4168 6.99996 11.0835 11.6666 7.00016 11.6666C2.91683 11.6666 0.583496 6.99996 0.583496 6.99996Z"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75Z"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </i>
                              </span>
                              <span className="font-['Roboto'] font-medium text-[13px] !leading-[15px] text-[#A5A5A6] line-clamp-1">
                                882
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="/blog/73"
                    className="aos-init aos-animate"
                    data-aos-duration={1500}
                    data-aos="fade-right"
                  >
                    <div className="blog-card sm:ml-[15px] ml-0 bg-blog-card-background grid grid-cols-12 sm:px-0 px-4 rounded-8 group hover:transition hover:ease-in-out hover:duration-500">
                      <div className="sm:col-span-5 col-span-12 sm:-mt-0 -mt-[70px] sm:mr-3 h-[180px] sm:h-[210px]">
                        <div className="relative group-hover:-translate-x-0 sm:-translate-x-[24px] w-[100%] h-[100%] -translate-x-[0px] group-hover:-translate-y-0 md:-translate-y-[16px] group-hover:transition transition group-hover:duration-500 duration-500">
                          <img
                            className="w-full h-full sm:w-[280px] rounded-8 object-cover object-center"
                            src="https://uic.group/media/cache/07/6b/076b8bf9bc63b8b5ae945add9f1ba07c.jpg"
                          />
                          <div className="bg-[#00000070] rounded backdrop-blur-[6px] py-2 px-4 absolute left-3 bottom-3">
                            <h2 className="font-['Roboto'] font-normal text-xs tracking-[0.002em] text-white relative ml-1 before:content-[''] before:w-[1px] before:h-[16px] before:absolute before:-left-[4px] before:bottom-0 before:rounded-t-sm before:rounded-b-sm before:bg-[#00A795]">
                              News
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-11 py-6 pr-0 sm:py-5.5 sm:pr-7 sm:col-span-7 text-white flex flex-col justify-between">
                        <div>
                          The UIC Group team at the Zaamin Ultra Marathon
                          <p className="font-['Roboto'] font-normal text-xs !leading-140 text-gray line-clamp-1 sm:line-clamp-3 sm:my-4 mt-2 mb-3">
                            Our team has been actively participating in all
                            marathons until now, these marathons not only raise
                            the team's family spirit, but also contribute to
                            increasing their attention to a healthy lifestyle.
                            In order to participate in the organized marathon in
                            a wonderful atmosphere and environment, the team
                            members set up their tents on the mountainside on
                            June 17 and prepared for the marathon. The marathon,
                            which started early in the morning on June 18,
                            continued with great rain and unusual temperatures.
                            The UIC Group team expresses its gratitude to the
                            organizers who organized the marathon full of
                            unforgettable emotions.
                          </p>
                        </div>
                        <div>
                          <hr className="text-white opacity-30" />
                          <div className="flex items-center gap-6 mt-2 sm:mt-4">
                            <div className="flex items-center gap-2">
                              <span className="bg-[#ffffff24] group-hover:bg-[#00A795] transition group-hover:transition duration-500 group-hover:duration-500 w-5 h-5 rounded-[50%] flex items-center justify-center text-white">
                                <i
                                  data-v-56c03d90=""
                                  className="icon hover:text-red-500"
                                >
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M1.86133 5.50245H12.1444"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.5629 7.75558H9.56824"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.00284 7.75558H7.00818"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.4379 7.75558H4.44324"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.5629 9.99781H9.56824"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.00284 9.99781H7.00818"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.4379 9.99781H4.44324"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.33315 1.23076V3.12929"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.67299 1.23076V3.12929"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M9.44557 2.14183H4.56058C2.86634 2.14183 1.80811 3.08564 1.80811 4.8205V10.0414C1.80811 11.8036 2.86634 12.7692 4.56058 12.7692H9.44022C11.1398 12.7692 12.1927 11.82 12.1927 10.0851V4.8205C12.198 3.08564 11.1452 2.14183 9.44557 2.14183Z"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </i>
                              </span>
                              <span className="font-['Roboto'] font-medium text-[13px] !leading-[15px] text-[#A5A5A6] line-clamp-1">
                                20.06.2023
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="bg-[#ffffff24] group-hover:bg-[#00A795] transition group-hover:transition duration-500 group-hover:duration-500 w-5 h-5 rounded-[50%] flex items-center justify-center text-white">
                                <i
                                  data-v-56c03d90=""
                                  className="icon hover:text-red-500"
                                >
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M0.583496 6.99996C0.583496 6.99996 2.91683 2.3333 7.00016 2.3333C11.0835 2.3333 13.4168 6.99996 13.4168 6.99996C13.4168 6.99996 11.0835 11.6666 7.00016 11.6666C2.91683 11.6666 0.583496 6.99996 0.583496 6.99996Z"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75Z"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </i>
                              </span>
                              <span className="font-['Roboto'] font-medium text-[13px] !leading-[15px] text-[#A5A5A6] line-clamp-1">
                                563
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="/blog/72"
                    className="aos-init aos-animate"
                    data-aos-duration={1500}
                    data-aos="fade-right"
                  >
                    <div className="blog-card sm:ml-[15px] ml-0 bg-blog-card-background grid grid-cols-12 sm:px-0 px-4 rounded-8 group hover:transition hover:ease-in-out hover:duration-500">
                      <div className="sm:col-span-5 col-span-12 sm:-mt-0 -mt-[70px] sm:mr-3 h-[180px] sm:h-[210px]">
                        <div className="relative group-hover:-translate-x-0 sm:-translate-x-[24px] w-[100%] h-[100%] -translate-x-[0px] group-hover:-translate-y-0 md:-translate-y-[16px] group-hover:transition transition group-hover:duration-500 duration-500">
                          <img
                            className="w-full h-full sm:w-[280px] rounded-8 object-cover object-center"
                            src="https://uic.group/media/cache/37/d4/37d4647f451ecf11487e68a188b2509f.jpg"
                          />
                          <div className="bg-[#00000070] rounded backdrop-blur-[6px] py-2 px-4 absolute left-3 bottom-3">
                            <h2 className="font-['Roboto'] font-normal text-xs tracking-[0.002em] text-white relative ml-1 before:content-[''] before:w-[1px] before:h-[16px] before:absolute before:-left-[4px] before:bottom-0 before:rounded-t-sm before:rounded-b-sm before:bg-[#00A795]">
                              News
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-11 py-6 pr-0 sm:py-5.5 sm:pr-7 sm:col-span-7 text-white flex flex-col justify-between">
                        <div>
                          Another international memorandum at UIC&nbsp;Group!
                          <p className="font-['Roboto'] font-normal text-xs !leading-140 text-gray line-clamp-1 sm:line-clamp-3 sm:my-4 mt-2 mb-3">
                            Recently, a meeting was held between the members of
                            the Singaporean delegation that visited our country
                            and the UIC Group. During the meeting, issues of
                            cooperation between UIC Group and Singaporean
                            entrepreneurs were discussed. In the end, a
                            memorandum on cooperation was signed, which is
                            beneficial for both sides.
                          </p>
                        </div>
                        <div>
                          <hr className="text-white opacity-30" />
                          <div className="flex items-center gap-6 mt-2 sm:mt-4">
                            <div className="flex items-center gap-2">
                              <span className="bg-[#ffffff24] group-hover:bg-[#00A795] transition group-hover:transition duration-500 group-hover:duration-500 w-5 h-5 rounded-[50%] flex items-center justify-center text-white">
                                <i
                                  data-v-56c03d90=""
                                  className="icon hover:text-red-500"
                                >
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M1.86133 5.50245H12.1444"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.5629 7.75558H9.56824"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.00284 7.75558H7.00818"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.4379 7.75558H4.44324"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.5629 9.99781H9.56824"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.00284 9.99781H7.00818"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.4379 9.99781H4.44324"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.33315 1.23076V3.12929"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.67299 1.23076V3.12929"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M9.44557 2.14183H4.56058C2.86634 2.14183 1.80811 3.08564 1.80811 4.8205V10.0414C1.80811 11.8036 2.86634 12.7692 4.56058 12.7692H9.44022C11.1398 12.7692 12.1927 11.82 12.1927 10.0851V4.8205C12.198 3.08564 11.1452 2.14183 9.44557 2.14183Z"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </i>
                              </span>
                              <span className="font-['Roboto'] font-medium text-[13px] !leading-[15px] text-[#A5A5A6] line-clamp-1">
                                30.05.2023
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="bg-[#ffffff24] group-hover:bg-[#00A795] transition group-hover:transition duration-500 group-hover:duration-500 w-5 h-5 rounded-[50%] flex items-center justify-center text-white">
                                <i
                                  data-v-56c03d90=""
                                  className="icon hover:text-red-500"
                                >
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M0.583496 6.99996C0.583496 6.99996 2.91683 2.3333 7.00016 2.3333C11.0835 2.3333 13.4168 6.99996 13.4168 6.99996C13.4168 6.99996 11.0835 11.6666 7.00016 11.6666C2.91683 11.6666 0.583496 6.99996 0.583496 6.99996Z"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75Z"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </i>
                              </span>
                              <span className="font-['Roboto'] font-medium text-[13px] !leading-[15px] text-[#A5A5A6] line-clamp-1">
                                262
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="/blog/71"
                    className="aos-init aos-animate"
                    data-aos-duration={1500}
                    data-aos="fade-right"
                  >
                    <div className="blog-card sm:ml-[15px] ml-0 bg-blog-card-background grid grid-cols-12 sm:px-0 px-4 rounded-8 group hover:transition hover:ease-in-out hover:duration-500">
                      <div className="sm:col-span-5 col-span-12 sm:-mt-0 -mt-[70px] sm:mr-3 h-[180px] sm:h-[210px]">
                        <div className="relative group-hover:-translate-x-0 sm:-translate-x-[24px] w-[100%] h-[100%] -translate-x-[0px] group-hover:-translate-y-0 md:-translate-y-[16px] group-hover:transition transition group-hover:duration-500 duration-500">
                          <img
                            className="w-full h-full sm:w-[280px] rounded-8 object-cover object-center"
                            src="https://uic.group/media/cache/51/c8/51c8a43b573a016d0a8418575037882b.jpg"
                          />
                          <div className="bg-[#00000070] rounded backdrop-blur-[6px] py-2 px-4 absolute left-3 bottom-3">
                            <h2 className="font-['Roboto'] font-normal text-xs tracking-[0.002em] text-white relative ml-1 before:content-[''] before:w-[1px] before:h-[16px] before:absolute before:-left-[4px] before:bottom-0 before:rounded-t-sm before:rounded-b-sm before:bg-[#00A795]">
                              Advice
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-11 py-6 pr-0 sm:py-5.5 sm:pr-7 sm:col-span-7 text-white flex flex-col justify-between">
                        <div>
                          It's time to automate your processes!
                          <p className="font-['Roboto'] font-normal text-xs !leading-140 text-gray line-clamp-1 sm:line-clamp-3 sm:my-4 mt-2 mb-3">
                            SAS solutions play an important role in automating
                            business processes, including ERP (enterprise
                            resource planning) and CRM (customer relationship
                            management) systems. These solutions help
                            organizations manage data, optimize customer
                            relations and business processes, and increase their
                            efficiency and competitiveness.
                          </p>
                        </div>
                        <div>
                          <hr className="text-white opacity-30" />
                          <div className="flex items-center gap-6 mt-2 sm:mt-4">
                            <div className="flex items-center gap-2">
                              <span className="bg-[#ffffff24] group-hover:bg-[#00A795] transition group-hover:transition duration-500 group-hover:duration-500 w-5 h-5 rounded-[50%] flex items-center justify-center text-white">
                                <i
                                  data-v-56c03d90=""
                                  className="icon hover:text-red-500"
                                >
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M1.86133 5.50245H12.1444"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.5629 7.75558H9.56824"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.00284 7.75558H7.00818"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.4379 7.75558H4.44324"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.5629 9.99781H9.56824"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.00284 9.99781H7.00818"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.4379 9.99781H4.44324"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.33315 1.23076V3.12929"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.67299 1.23076V3.12929"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M9.44557 2.14183H4.56058C2.86634 2.14183 1.80811 3.08564 1.80811 4.8205V10.0414C1.80811 11.8036 2.86634 12.7692 4.56058 12.7692H9.44022C11.1398 12.7692 12.1927 11.82 12.1927 10.0851V4.8205C12.198 3.08564 11.1452 2.14183 9.44557 2.14183Z"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </i>
                              </span>
                              <span className="font-['Roboto'] font-medium text-[13px] !leading-[15px] text-[#A5A5A6] line-clamp-1">
                                16.05.2023
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="bg-[#ffffff24] group-hover:bg-[#00A795] transition group-hover:transition duration-500 group-hover:duration-500 w-5 h-5 rounded-[50%] flex items-center justify-center text-white">
                                <i
                                  data-v-56c03d90=""
                                  className="icon hover:text-red-500"
                                >
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M0.583496 6.99996C0.583496 6.99996 2.91683 2.3333 7.00016 2.3333C11.0835 2.3333 13.4168 6.99996 13.4168 6.99996C13.4168 6.99996 11.0835 11.6666 7.00016 11.6666C2.91683 11.6666 0.583496 6.99996 0.583496 6.99996Z"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75Z"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </i>
                              </span>
                              <span className="font-['Roboto'] font-medium text-[13px] !leading-[15px] text-[#A5A5A6] line-clamp-1">
                                192
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="/blog/70"
                    className="aos-init aos-animate"
                    data-aos-duration={1500}
                    data-aos="fade-right"
                  >
                    <div className="blog-card sm:ml-[15px] ml-0 bg-blog-card-background grid grid-cols-12 sm:px-0 px-4 rounded-8 group hover:transition hover:ease-in-out hover:duration-500">
                      <div className="sm:col-span-5 col-span-12 sm:-mt-0 -mt-[70px] sm:mr-3 h-[180px] sm:h-[210px]">
                        <div className="relative group-hover:-translate-x-0 sm:-translate-x-[24px] w-[100%] h-[100%] -translate-x-[0px] group-hover:-translate-y-0 md:-translate-y-[16px] group-hover:transition transition group-hover:duration-500 duration-500">
                          <img
                            className="w-full h-full sm:w-[280px] rounded-8 object-cover object-center"
                            src="https://uic.group/media/cache/69/82/69822fb9315f34954a432f7d0e26c8b8.jpg"
                          />
                          <div className="bg-[#00000070] rounded backdrop-blur-[6px] py-2 px-4 absolute left-3 bottom-3">
                            <h2 className="font-['Roboto'] font-normal text-xs tracking-[0.002em] text-white relative ml-1 before:content-[''] before:w-[1px] before:h-[16px] before:absolute before:-left-[4px] before:bottom-0 before:rounded-t-sm before:rounded-b-sm before:bg-[#00A795]">
                              News
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-11 py-6 pr-0 sm:py-5.5 sm:pr-7 sm:col-span-7 text-white flex flex-col justify-between">
                        <div>
                          A special master class on project management at UIC
                          Group!
                          <p className="font-['Roboto'] font-normal text-xs !leading-140 text-gray line-clamp-1 sm:line-clamp-3 sm:my-4 mt-2 mb-3">
                            Iskandar Yusupov, an expert with 18 years of
                            experience in project management, founder of the
                            Sello brand, holder of PMI, PMP certificates
                            (instagram.com/iskandaryusupov_pm) shared his
                            knowledge and experience in project management and
                            product management with UIC Group employees. During
                            the interview, the project managers were discussed
                            in detail about their tasks in the work processes,
                            what needs to be focused on in order to meet the
                            deadlines and the successful completion of the
                            project, and the role of mutual communication
                            processes in this.
                          </p>
                        </div>
                        <div>
                          <hr className="text-white opacity-30" />
                          <div className="flex items-center gap-6 mt-2 sm:mt-4">
                            <div className="flex items-center gap-2">
                              <span className="bg-[#ffffff24] group-hover:bg-[#00A795] transition group-hover:transition duration-500 group-hover:duration-500 w-5 h-5 rounded-[50%] flex items-center justify-center text-white">
                                <i
                                  data-v-56c03d90=""
                                  className="icon hover:text-red-500"
                                >
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M1.86133 5.50245H12.1444"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.5629 7.75558H9.56824"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.00284 7.75558H7.00818"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.4379 7.75558H4.44324"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.5629 9.99781H9.56824"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.00284 9.99781H7.00818"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.4379 9.99781H4.44324"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.33315 1.23076V3.12929"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.67299 1.23076V3.12929"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M9.44557 2.14183H4.56058C2.86634 2.14183 1.80811 3.08564 1.80811 4.8205V10.0414C1.80811 11.8036 2.86634 12.7692 4.56058 12.7692H9.44022C11.1398 12.7692 12.1927 11.82 12.1927 10.0851V4.8205C12.198 3.08564 11.1452 2.14183 9.44557 2.14183Z"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </i>
                              </span>
                              <span className="font-['Roboto'] font-medium text-[13px] !leading-[15px] text-[#A5A5A6] line-clamp-1">
                                07.05.2023
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="bg-[#ffffff24] group-hover:bg-[#00A795] transition group-hover:transition duration-500 group-hover:duration-500 w-5 h-5 rounded-[50%] flex items-center justify-center text-white">
                                <i
                                  data-v-56c03d90=""
                                  className="icon hover:text-red-500"
                                >
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M0.583496 6.99996C0.583496 6.99996 2.91683 2.3333 7.00016 2.3333C11.0835 2.3333 13.4168 6.99996 13.4168 6.99996C13.4168 6.99996 11.0835 11.6666 7.00016 11.6666C2.91683 11.6666 0.583496 6.99996 0.583496 6.99996Z"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75Z"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </i>
                              </span>
                              <span className="font-['Roboto'] font-medium text-[13px] !leading-[15px] text-[#A5A5A6] line-clamp-1">
                                395
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="/blog/69"
                    className="aos-init aos-animate"
                    data-aos-duration={1500}
                    data-aos="fade-right"
                  >
                    <div className="blog-card sm:ml-[15px] ml-0 bg-blog-card-background grid grid-cols-12 sm:px-0 px-4 rounded-8 group hover:transition hover:ease-in-out hover:duration-500">
                      <div className="sm:col-span-5 col-span-12 sm:-mt-0 -mt-[70px] sm:mr-3 h-[180px] sm:h-[210px]">
                        <div className="relative group-hover:-translate-x-0 sm:-translate-x-[24px] w-[100%] h-[100%] -translate-x-[0px] group-hover:-translate-y-0 md:-translate-y-[16px] group-hover:transition transition group-hover:duration-500 duration-500">
                          <img
                            className="w-full h-full sm:w-[280px] rounded-8 object-cover object-center"
                            src="https://uic.group/media/cache/1b/a3/1ba3bd2ed8692c5a6b4793c9664284da.jpg"
                          />
                          <div className="bg-[#00000070] rounded backdrop-blur-[6px] py-2 px-4 absolute left-3 bottom-3">
                            <h2 className="font-['Roboto'] font-normal text-xs tracking-[0.002em] text-white relative ml-1 before:content-[''] before:w-[1px] before:h-[16px] before:absolute before:-left-[4px] before:bottom-0 before:rounded-t-sm before:rounded-b-sm before:bg-[#00A795]">
                              News
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-11 py-6 pr-0 sm:py-5.5 sm:pr-7 sm:col-span-7 text-white flex flex-col justify-between">
                        <div>
                          UIC Group Technical Director shared his experience at
                          PDP University!
                          <p className="font-['Roboto'] font-normal text-xs !leading-140 text-gray line-clamp-1 sm:line-clamp-3 sm:my-4 mt-2 mb-3">
                            UIC Group Technical Director, Android and Java
                            development, Backend &amp; Frontend, SysAdmin and
                            DevOps, Amon Olimov (t.me/amonolimov), who has many
                            years of experience in DevOps and worked on more
                            than 100 projects, is a guest speaker at the event
                            organized at PDP University participated as During
                            the meeting, students&nbsp; got interesting and
                            necessary information on such topics how: - how to
                            prepare for the interview of IT companies; -
                            effective improvement of Soft &amp; Hard skills; -
                            networking within the field; - how building a
                            successful career; and got answers to their
                            questions at the end of the interview.
                          </p>
                        </div>
                        <div>
                          <hr className="text-white opacity-30" />
                          <div className="flex items-center gap-6 mt-2 sm:mt-4">
                            <div className="flex items-center gap-2">
                              <span className="bg-[#ffffff24] group-hover:bg-[#00A795] transition group-hover:transition duration-500 group-hover:duration-500 w-5 h-5 rounded-[50%] flex items-center justify-center text-white">
                                <i
                                  data-v-56c03d90=""
                                  className="icon hover:text-red-500"
                                >
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M1.86133 5.50245H12.1444"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.5629 7.75558H9.56824"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.00284 7.75558H7.00818"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.4379 7.75558H4.44324"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.5629 9.99781H9.56824"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.00284 9.99781H7.00818"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.4379 9.99781H4.44324"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.33315 1.23076V3.12929"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.67299 1.23076V3.12929"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M9.44557 2.14183H4.56058C2.86634 2.14183 1.80811 3.08564 1.80811 4.8205V10.0414C1.80811 11.8036 2.86634 12.7692 4.56058 12.7692H9.44022C11.1398 12.7692 12.1927 11.82 12.1927 10.0851V4.8205C12.198 3.08564 11.1452 2.14183 9.44557 2.14183Z"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </i>
                              </span>
                              <span className="font-['Roboto'] font-medium text-[13px] !leading-[15px] text-[#A5A5A6] line-clamp-1">
                                02.05.2023
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="bg-[#ffffff24] group-hover:bg-[#00A795] transition group-hover:transition duration-500 group-hover:duration-500 w-5 h-5 rounded-[50%] flex items-center justify-center text-white">
                                <i
                                  data-v-56c03d90=""
                                  className="icon hover:text-red-500"
                                >
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M0.583496 6.99996C0.583496 6.99996 2.91683 2.3333 7.00016 2.3333C11.0835 2.3333 13.4168 6.99996 13.4168 6.99996C13.4168 6.99996 11.0835 11.6666 7.00016 11.6666C2.91683 11.6666 0.583496 6.99996 0.583496 6.99996Z"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75Z"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </i>
                              </span>
                              <span className="font-['Roboto'] font-medium text-[13px] !leading-[15px] text-[#A5A5A6] line-clamp-1">
                                318
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="/blog/68"
                    className="aos-init aos-animate"
                    data-aos-duration={1500}
                    data-aos="fade-right"
                  >
                    <div className="blog-card sm:ml-[15px] ml-0 bg-blog-card-background grid grid-cols-12 sm:px-0 px-4 rounded-8 group hover:transition hover:ease-in-out hover:duration-500">
                      <div className="sm:col-span-5 col-span-12 sm:-mt-0 -mt-[70px] sm:mr-3 h-[180px] sm:h-[210px]">
                        <div className="relative group-hover:-translate-x-0 sm:-translate-x-[24px] w-[100%] h-[100%] -translate-x-[0px] group-hover:-translate-y-0 md:-translate-y-[16px] group-hover:transition transition group-hover:duration-500 duration-500">
                          <img
                            className="w-full h-full sm:w-[280px] rounded-8 object-cover object-center"
                            src="https://uic.group/media/cache/32/52/3252cb32c223e7b7426056c374a6cba4.jpg"
                          />
                          <div className="bg-[#00000070] rounded backdrop-blur-[6px] py-2 px-4 absolute left-3 bottom-3">
                            <h2 className="font-['Roboto'] font-normal text-xs tracking-[0.002em] text-white relative ml-1 before:content-[''] before:w-[1px] before:h-[16px] before:absolute before:-left-[4px] before:bottom-0 before:rounded-t-sm before:rounded-b-sm before:bg-[#00A795]">
                              From our project
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-11 py-6 pr-0 sm:py-5.5 sm:pr-7 sm:col-span-7 text-white flex flex-col justify-between">
                        <div>
                          We offer ready-made solutions for FinTex applications!
                          <p className="font-['Roboto'] font-normal text-xs !leading-140 text-gray line-clamp-1 sm:line-clamp-3 sm:my-4 mt-2 mb-3">
                            The use of various applications for financial
                            services and money transfers has become increasingly
                            popular in recent years. We offer ready-made
                            solutions for the short-term development of FinTex
                            applications that allow you to perform payment
                            operations, track expenses or manage multiple
                            accounts in a modern business environment. As a
                            clear example of this, you can see the Paylov
                            (paylov.uz) application, which allows you to
                            implement online payment services and control
                            financial accounts in our portfolio.
                          </p>
                        </div>
                        <div>
                          <hr className="text-white opacity-30" />
                          <div className="flex items-center gap-6 mt-2 sm:mt-4">
                            <div className="flex items-center gap-2">
                              <span className="bg-[#ffffff24] group-hover:bg-[#00A795] transition group-hover:transition duration-500 group-hover:duration-500 w-5 h-5 rounded-[50%] flex items-center justify-center text-white">
                                <i
                                  data-v-56c03d90=""
                                  className="icon hover:text-red-500"
                                >
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M1.86133 5.50245H12.1444"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.5629 7.75558H9.56824"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.00284 7.75558H7.00818"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.4379 7.75558H4.44324"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.5629 9.99781H9.56824"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.00284 9.99781H7.00818"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.4379 9.99781H4.44324"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.33315 1.23076V3.12929"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.67299 1.23076V3.12929"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M9.44557 2.14183H4.56058C2.86634 2.14183 1.80811 3.08564 1.80811 4.8205V10.0414C1.80811 11.8036 2.86634 12.7692 4.56058 12.7692H9.44022C11.1398 12.7692 12.1927 11.82 12.1927 10.0851V4.8205C12.198 3.08564 11.1452 2.14183 9.44557 2.14183Z"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </i>
                              </span>
                              <span className="font-['Roboto'] font-medium text-[13px] !leading-[15px] text-[#A5A5A6] line-clamp-1">
                                25.04.2023
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="bg-[#ffffff24] group-hover:bg-[#00A795] transition group-hover:transition duration-500 group-hover:duration-500 w-5 h-5 rounded-[50%] flex items-center justify-center text-white">
                                <i
                                  data-v-56c03d90=""
                                  className="icon hover:text-red-500"
                                >
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M0.583496 6.99996C0.583496 6.99996 2.91683 2.3333 7.00016 2.3333C11.0835 2.3333 13.4168 6.99996 13.4168 6.99996C13.4168 6.99996 11.0835 11.6666 7.00016 11.6666C2.91683 11.6666 0.583496 6.99996 0.583496 6.99996Z"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75Z"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </i>
                              </span>
                              <span className="font-['Roboto'] font-medium text-[13px] !leading-[15px] text-[#A5A5A6] line-clamp-1">
                                165
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="/blog/67"
                    className="aos-init aos-animate"
                    data-aos-duration={1500}
                    data-aos="fade-right"
                  >
                    <div className="blog-card sm:ml-[15px] ml-0 bg-blog-card-background grid grid-cols-12 sm:px-0 px-4 rounded-8 group hover:transition hover:ease-in-out hover:duration-500">
                      <div className="sm:col-span-5 col-span-12 sm:-mt-0 -mt-[70px] sm:mr-3 h-[180px] sm:h-[210px]">
                        <div className="relative group-hover:-translate-x-0 sm:-translate-x-[24px] w-[100%] h-[100%] -translate-x-[0px] group-hover:-translate-y-0 md:-translate-y-[16px] group-hover:transition transition group-hover:duration-500 duration-500">
                          <img
                            className="w-full h-full sm:w-[280px] rounded-8 object-cover object-center"
                            src="https://uic.group/media/cache/78/07/780768d59cce1101ef7b06256ffc3d23.jpg"
                          />
                          <div className="bg-[#00000070] rounded backdrop-blur-[6px] py-2 px-4 absolute left-3 bottom-3">
                            <h2 className="font-['Roboto'] font-normal text-xs tracking-[0.002em] text-white relative ml-1 before:content-[''] before:w-[1px] before:h-[16px] before:absolute before:-left-[4px] before:bottom-0 before:rounded-t-sm before:rounded-b-sm before:bg-[#00A795]">
                              News
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-11 py-6 pr-0 sm:py-5.5 sm:pr-7 sm:col-span-7 text-white flex flex-col justify-between">
                        <div>
                          "UIC Group" in Business Quiz 2023
                          <p className="font-['Roboto'] font-normal text-xs !leading-140 text-gray line-clamp-1 sm:line-clamp-3 sm:my-4 mt-2 mb-3">
                            Business Quiz - is the largest entertainment
                            business event and intellectual competition in
                            Uzbekistan, which brings together hundreds of
                            leaders and top managers of large companies. In this
                            annual Business Quiz (bsnss.uz) tournament, hundreds
                            of companies in our country, including "UIC Group"
                            company, participate in the intellectual competition
                            for the title of "the smartest company of the
                            Republic of Uzbekistan". Business Quiz 1st round
                            took place in a very intense spirit and excitement.
                            We wish you luck in the next rounds and look forward
                            to your support.
                          </p>
                        </div>
                        <div>
                          <hr className="text-white opacity-30" />
                          <div className="flex items-center gap-6 mt-2 sm:mt-4">
                            <div className="flex items-center gap-2">
                              <span className="bg-[#ffffff24] group-hover:bg-[#00A795] transition group-hover:transition duration-500 group-hover:duration-500 w-5 h-5 rounded-[50%] flex items-center justify-center text-white">
                                <i
                                  data-v-56c03d90=""
                                  className="icon hover:text-red-500"
                                >
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M1.86133 5.50245H12.1444"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.5629 7.75558H9.56824"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.00284 7.75558H7.00818"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.4379 7.75558H4.44324"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.5629 9.99781H9.56824"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.00284 9.99781H7.00818"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.4379 9.99781H4.44324"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.33315 1.23076V3.12929"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.67299 1.23076V3.12929"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M9.44557 2.14183H4.56058C2.86634 2.14183 1.80811 3.08564 1.80811 4.8205V10.0414C1.80811 11.8036 2.86634 12.7692 4.56058 12.7692H9.44022C11.1398 12.7692 12.1927 11.82 12.1927 10.0851V4.8205C12.198 3.08564 11.1452 2.14183 9.44557 2.14183Z"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </i>
                              </span>
                              <span className="font-['Roboto'] font-medium text-[13px] !leading-[15px] text-[#A5A5A6] line-clamp-1">
                                18.04.2023
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="bg-[#ffffff24] group-hover:bg-[#00A795] transition group-hover:transition duration-500 group-hover:duration-500 w-5 h-5 rounded-[50%] flex items-center justify-center text-white">
                                <i
                                  data-v-56c03d90=""
                                  className="icon hover:text-red-500"
                                >
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M0.583496 6.99996C0.583496 6.99996 2.91683 2.3333 7.00016 2.3333C11.0835 2.3333 13.4168 6.99996 13.4168 6.99996C13.4168 6.99996 11.0835 11.6666 7.00016 11.6666C2.91683 11.6666 0.583496 6.99996 0.583496 6.99996Z"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75Z"
                                      stroke="white"
                                      strokeMiterlimit={10}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </i>
                              </span>
                              <span className="font-['Roboto'] font-medium text-[13px] !leading-[15px] text-[#A5A5A6] line-clamp-1">
                                147
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="flex items-center justify-end pagination-wrapp">
                  <span className="pointer-events-none inline-block cursor-pointer group w-5 h-5 items-center justify-center">
                    <svg
                      width={7}
                      height={10}
                      viewBox="0 0 7 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="group-hover:fill-[#00A795] transition duration-300"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.70826 9.69329L6.70826 0.306624C6.70826 0.145541 6.60566 0.0149575 6.47909 0.0149575C6.43248 0.0149575 6.38697 0.0330486 6.34865 0.0668178L1.02208 4.76015C0.918023 4.85184 0.892067 5.03354 0.964109 5.16598C0.979792 5.19481 0.999431 5.2198 1.02208 5.23976L6.34865 9.9331C6.45271 10.0248 6.59547 9.99175 6.66751 9.85931C6.69404 9.81054 6.70826 9.75262 6.70826 9.69329Z"
                        fill="#515151"
                      />
                    </svg>
                  </span>
                  <ul data-v-2a30deb0="" className="Pagination">
                    <li data-v-2a30deb0="" className="PaginationControl">
                      <svg
                        data-v-2a30deb0=""
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="Control"
                      >
                        <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41M6 6h2v12H6V6z" />
                      </svg>
                    </li>
                    <li data-v-2a30deb0="" className="PaginationControl">
                      <svg
                        data-v-2a30deb0=""
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="Control"
                      >
                        <path d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.42z" />
                      </svg>
                    </li>
                    <li data-v-060ca318="" data-v-2a30deb0="">
                      <button
                        data-v-060ca318=""
                        className="Page Page-active"
                        type="button"
                        aria-label="Go to page 1"
                        style={{ backgroundColor: "red" }}
                      >
                        1
                      </button>
                    </li>
                    <li data-v-060ca318="" data-v-2a30deb0="">
                      <button
                        data-v-060ca318=""
                        className="Page"
                        type="button"
                        aria-label="Go to page 2"
                        style={{ backgroundColor: "transparent" }}
                      >
                        2
                      </button>
                    </li>
                    <li data-v-060ca318="" data-v-2a30deb0="">
                      <button
                        data-v-060ca318=""
                        className="Page"
                        type="button"
                        aria-label="Go to page 3"
                        style={{ backgroundColor: "transparent" }}
                      >
                        3
                      </button>
                    </li>
                    <li data-v-060ca318="" data-v-2a30deb0="">
                      <button
                        data-v-060ca318=""
                        className="Page"
                        type="button"
                        aria-label="Go to page 4"
                        style={{ backgroundColor: "transparent" }}
                      >
                        4
                      </button>
                    </li>
                    <li data-v-060ca318="" data-v-2a30deb0="">
                      <button
                        data-v-060ca318=""
                        className="Page"
                        type="button"
                        aria-label="Go to page 5"
                        style={{ backgroundColor: "transparent" }}
                      >
                        5
                      </button>
                    </li>
                    <li data-v-060ca318="" data-v-2a30deb0="">
                      <button
                        data-v-060ca318=""
                        className="Page"
                        type="button"
                        aria-label="Go to page 6"
                        style={{ backgroundColor: "transparent" }}
                      >
                        6
                      </button>
                    </li>
                    <li data-v-060ca318="" data-v-2a30deb0="">
                      <button
                        data-v-060ca318=""
                        className="Page"
                        type="button"
                        aria-label="Go to page 7"
                        style={{ backgroundColor: "transparent" }}
                      >
                        7
                      </button>
                    </li>
                    <li data-v-2a30deb0="" className="PaginationControl">
                      <svg
                        data-v-2a30deb0=""
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="Control Control-active"
                      >
                        <path d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z" />
                      </svg>
                    </li>
                    <li data-v-2a30deb0="" className="PaginationControl">
                      <svg
                        data-v-2a30deb0=""
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="Control Control-active"
                      >
                        <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6-1.41 1.41M16 6h2v12h-2V6z" />
                      </svg>
                    </li>
                  </ul>
                  <span className="inline-block cursor-pointer group w-5 h-5items-center justify-center">
                    <svg
                      width={7}
                      height={11}
                      viewBox="0 0 7 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="group-hover:fill-[#00A795] transition duration-300"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.5 0.821664L0.5 10.2083C0.5 10.3694 0.602601 10.5 0.729167 10.5C0.77578 10.5 0.821285 10.4819 0.859611 10.4481L6.18617 5.75481C6.29023 5.66312 6.31619 5.48142 6.24415 5.34898C6.22846 5.32015 6.20883 5.29515 6.18617 5.27519L0.859611 0.581858C0.75555 0.490168 0.61279 0.523203 0.540748 0.655645C0.514215 0.704422 0.5 0.762338 0.5 0.821664Z"
                        fill="#515151"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="mt-16 blog-index-clients-comment">
                <div className="clients-comment bg-[#141415] pt-11 pb-[45px] md:py-16 blog-clients-review">
                  <div className="container relative">
                    <div
                      className="text-center section-title_green mb-9 md:mb-11 aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-duration={500}
                    >
                      Client Opinion
                    </div>
                    <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events relative mb-10 clients-swiper md:mb-0 swiper-backface-hidden">
                      <div
                        className="swiper-wrapper"
                        style={{
                          transform: "translate3d(-1176px, 0px, 0px)",
                          transitionDuration: "0ms"
                        }}
                      >
                        <div
                          className="swiper-slide swiper-slide-duplicate swiper-slide-prev"
                          data-swiper-slide-index={2}
                          style={{ width: 1168, marginRight: 8 }}
                        >
                          <div
                            data-v-643a1fb5=""
                            className="grid grid-cols-12 md:gap-x-[21px] gap-x-0 grid-rows-3 md:gap-y-[35px] md:grid-flow-col md:pb-48"
                          >
                            <div
                              data-v-643a1fb5=""
                              className="flex items-start justify-center order-last col-span-12 gap-5 pb-3 mb-6 md:col-span-6 md:justify-start md:order-first md:mt-0 mt-14 md:mb-0 md:pb-0 aos-init aos-animate"
                              data-aos="fade-up"
                              data-aos-duration={500}
                            >
                              <img
                                data-v-643a1fb5=""
                                src="https://uic.group/media/AboutUs/b4f45ba4086151b9c882f9bfeecc6c23.jpeg"
                                className="md:w-[60px] w-[39px] md:h-[60px] h-[39px] rounded-[50%] object-cover object-center"
                              />
                              <div
                                data-v-643a1fb5=""
                                className="grid md:gap-1.5 gap-1"
                              >
                                <h2
                                  data-v-643a1fb5=""
                                  className="font-['Greycliff CF'] font-bold sm:text-base text-[13px] text-white sm:!leading-[20.8px] !leading-[16px] uppercase line-clamp-1"
                                >
                                  Musaev Amirtemurkhon
                                </h2>
                                <h3
                                  data-v-643a1fb5=""
                                  className="font-roboto font-normal sm:text-base text-[13px] text-[#e0e0e099] sm:!leading-[22.4px] !leading-[18px] tracking-[0.2px] line-clamp-1"
                                >
                                  Deputy Director
                                </h3>
                              </div>
                            </div>
                            <div
                              data-v-643a1fb5=""
                              className="order-first col-span-12 md:col-span-6 md:row-span-2 row-span-full blockquote-icon-wrapper aos-init aos-animate"
                              data-aos="fade-up"
                              data-aos-duration={600}
                            >
                              <i
                                data-v-56c03d90=""
                                data-v-643a1fb5=""
                                className="icon hover:text-red-500 md:w-[48px] w-[32px] md:h-[48px] h-[32px] text-[#00A795]"
                              >
                                <svg
                                  width={48}
                                  height={48}
                                  viewBox="0 0 48 48"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11.6025 40.8001C17.445 40.8001 22.005 36.2401 22.005 30.5401C22.005 24.6976 17.445 20.1376 11.6025 20.1376C11.6025 16.1476 12.7425 11.8726 14.4525 8.16759C14.88 7.3126 14.4525 6.6001 13.455 6.6001H11.6025C11.0325 6.6001 10.605 6.7426 10.035 7.3126C6.61495 11.1601 1.19995 19.5676 1.19995 29.1151C1.19995 36.2401 5.90245 40.8001 11.6025 40.8001ZM36.9675 40.8001C42.81 40.8001 47.37 36.2401 47.37 30.5401C47.37 24.6976 42.81 20.1376 36.9675 20.1376C36.9675 16.1476 38.1075 11.8726 39.8175 8.16759C40.245 7.3126 39.8175 6.6001 38.82 6.6001H36.9675C36.3975 6.6001 35.97 6.7426 35.4 7.3126C31.98 11.1601 26.565 19.5676 26.565 29.1151C26.565 36.2401 31.2675 40.8001 36.9675 40.8001Z"
                                    fill="#00A795"
                                  />
                                </svg>
                              </i>
                              <div
                                data-v-643a1fb5=""
                                className="mt-0 mb-3 md:mt-3 md:mb-5 min-h-[63px]"
                              >
                                <div
                                  data-v-643a1fb5=""
                                  className="client-comment-content font-bold sm:text-xl text-[15px] text-white md:!leading-[28px] sm:leading-[21px] leading-[21px] line-clamp-3"
                                >
                                  <h2>
                                    <span style={{ fontSize: 16 }}>
                                      Argos.uz is the only national labor
                                      system.
                                    </span>
                                  </h2>
                                </div>
                              </div>
                              <div
                                data-v-643a1fb5=""
                                className="flex gap-3 mb-6 sm:gap-4 md:mb-0"
                              >
                                <p
                                  data-v-643a1fb5=""
                                  className="font-sofia font-medium text-[#ffffff4d] sm:text-sm text-[13px] sm:!leading-[18px] !leading-[16px] uppercase line-clamp-1 max-w-[250px]"
                                >
                                  Website
                                </p>
                                <a
                                  data-v-643a1fb5=""
                                  href="https://argos.uz/oz"
                                  className="font-medium text-[#00A795] sm:text-sm text-[13px] sm:!leading-[18px] !leading-[16px] uppercase line-clamp-1 max-w-[250px]"
                                  target="_blank"
                                >
                                  ARGOS.UZ
                                </a>
                              </div>
                            </div>
                            <div
                              data-v-643a1fb5=""
                              className="col-span-12 row-span-3 md:col-span-6 aos-init aos-animate"
                              data-aos="fade-up"
                              data-aos-duration={700}
                            >
                              <div
                                data-v-643a1fb5=""
                                className="client-comment-content lg-pt-[30px] font-roboto font-normal sm:text-base text-[13px] sm:!leading-[22px] !leading-[18px] tracking-[0.2px] text-[#e0e0e099] overflow-hidden"
                              >
                                <p>
                                  Argos.uz is a remote training portal for state
                                  civil servants. The main purpose of this
                                  portal is to ensure selection of qualified
                                  personnel. We express our gratitude to the
                                  team of "UIC Group" for the modern design of
                                  this unified system.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-active"
                          data-swiper-slide-index={0}
                          style={{ width: 1168, marginRight: 8 }}
                        >
                          <div
                            data-v-643a1fb5=""
                            className="grid grid-cols-12 md:gap-x-[21px] gap-x-0 grid-rows-3 md:gap-y-[35px] md:grid-flow-col md:pb-48"
                          >
                            <div
                              data-v-643a1fb5=""
                              className="flex items-start justify-center order-last col-span-12 gap-5 pb-3 mb-6 md:col-span-6 md:justify-start md:order-first md:mt-0 mt-14 md:mb-0 md:pb-0 aos-init aos-animate"
                              data-aos="fade-up"
                              data-aos-duration={500}
                            >
                              <img
                                data-v-643a1fb5=""
                                src="https://uic.group/media/AboutUs/_A8A1925_HQCUw7a.jpeg"
                                className="md:w-[60px] w-[39px] md:h-[60px] h-[39px] rounded-[50%] object-cover object-center"
                              />
                              <div
                                data-v-643a1fb5=""
                                className="grid md:gap-1.5 gap-1"
                              >
                                <h2
                                  data-v-643a1fb5=""
                                  className="font-['Greycliff CF'] font-bold sm:text-base text-[13px] text-white sm:!leading-[20.8px] !leading-[16px] uppercase line-clamp-1"
                                >
                                  Sharipov Kongratboy
                                </h2>
                                <h3
                                  data-v-643a1fb5=""
                                  className="font-roboto font-normal sm:text-base text-[13px] text-[#e0e0e099] sm:!leading-[22.4px] !leading-[18px] tracking-[0.2px] line-clamp-1"
                                >
                                  Rector of Tashkent State University of
                                  Economics
                                </h3>
                              </div>
                            </div>
                            <div
                              data-v-643a1fb5=""
                              className="order-first col-span-12 md:col-span-6 md:row-span-2 row-span-full blockquote-icon-wrapper aos-init aos-animate"
                              data-aos="fade-up"
                              data-aos-duration={600}
                            >
                              <i
                                data-v-56c03d90=""
                                data-v-643a1fb5=""
                                className="icon hover:text-red-500 md:w-[48px] w-[32px] md:h-[48px] h-[32px] text-[#00A795]"
                              >
                                <svg
                                  width={48}
                                  height={48}
                                  viewBox="0 0 48 48"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11.6025 40.8001C17.445 40.8001 22.005 36.2401 22.005 30.5401C22.005 24.6976 17.445 20.1376 11.6025 20.1376C11.6025 16.1476 12.7425 11.8726 14.4525 8.16759C14.88 7.3126 14.4525 6.6001 13.455 6.6001H11.6025C11.0325 6.6001 10.605 6.7426 10.035 7.3126C6.61495 11.1601 1.19995 19.5676 1.19995 29.1151C1.19995 36.2401 5.90245 40.8001 11.6025 40.8001ZM36.9675 40.8001C42.81 40.8001 47.37 36.2401 47.37 30.5401C47.37 24.6976 42.81 20.1376 36.9675 20.1376C36.9675 16.1476 38.1075 11.8726 39.8175 8.16759C40.245 7.3126 39.8175 6.6001 38.82 6.6001H36.9675C36.3975 6.6001 35.97 6.7426 35.4 7.3126C31.98 11.1601 26.565 19.5676 26.565 29.1151C26.565 36.2401 31.2675 40.8001 36.9675 40.8001Z"
                                    fill="#00A795"
                                  />
                                </svg>
                              </i>
                              <div
                                data-v-643a1fb5=""
                                className="mt-0 mb-3 md:mt-3 md:mb-5 min-h-[63px]"
                              >
                                <div
                                  data-v-643a1fb5=""
                                  className="client-comment-content font-bold sm:text-xl text-[15px] text-white md:!leading-[28px] sm:leading-[21px] leading-[21px] line-clamp-3"
                                >
                                  <p>
                                    <span style={{ fontSize: 20 }}>
                                      <span
                                        style={{
                                          fontFamily: 'Calibri,"sans-serif"'
                                        }}
                                      >
                                        TDIU reestrlik tizimining &nbsp;samarali
                                        yo’lga qo’yilishi
                                      </span>
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div
                                data-v-643a1fb5=""
                                className="flex gap-3 mb-6 sm:gap-4 md:mb-0"
                              >
                                <p
                                  data-v-643a1fb5=""
                                  className="font-sofia font-medium text-[#ffffff4d] sm:text-sm text-[13px] sm:!leading-[18px] !leading-[16px] uppercase line-clamp-1 max-w-[250px]"
                                >
                                  Personnel registry system
                                </p>
                                <a
                                  data-v-643a1fb5=""
                                  href="http://tsue.uz/"
                                  className="font-medium text-[#00A795] sm:text-sm text-[13px] sm:!leading-[18px] !leading-[16px] uppercase line-clamp-1 max-w-[250px]"
                                  target="_blank"
                                >
                                  Website
                                </a>
                              </div>
                            </div>
                            <div
                              data-v-643a1fb5=""
                              className="col-span-12 row-span-3 md:col-span-6 aos-init aos-animate"
                              data-aos="fade-up"
                              data-aos-duration={700}
                            >
                              <div
                                data-v-643a1fb5=""
                                className="client-comment-content lg-pt-[30px] font-roboto font-normal sm:text-base text-[13px] sm:!leading-[22px] !leading-[18px] tracking-[0.2px] text-[#e0e0e099] overflow-hidden"
                              >
                                <p>
                                  <span style={{ fontSize: "11pt" }}>
                                    <span
                                      style={{
                                        fontFamily: 'Calibri,"sans-serif"'
                                      }}
                                    >
                                      Toshkent Davlat iqtisodiyot universiteti
                                      kadrlar reestrlik tizimini “UIC&nbsp;
                                      Group” jamoasi bilan birgalikda yo’lga
                                      qo’ydi. Bu optimallashtirish kadrlar
                                      boshqaruv tizimini yanada osonlashtirdi.
                                      TDIU jamoasi &nbsp;“UIC Group” IT
                                      kompaniyasining malakali mutaxassislariga
                                      o'z minnatdorchiligini bildiradi.
                                    </span>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-next"
                          data-swiper-slide-index={1}
                          style={{ width: 1168, marginRight: 8 }}
                        >
                          <div
                            data-v-643a1fb5=""
                            className="grid grid-cols-12 md:gap-x-[21px] gap-x-0 grid-rows-3 md:gap-y-[35px] md:grid-flow-col md:pb-48"
                          >
                            <div
                              data-v-643a1fb5=""
                              className="flex items-start justify-center order-last col-span-12 gap-5 pb-3 mb-6 md:col-span-6 md:justify-start md:order-first md:mt-0 mt-14 md:mb-0 md:pb-0 aos-init aos-animate"
                              data-aos="fade-up"
                              data-aos-duration={500}
                            >
                              <img
                                data-v-643a1fb5=""
                                src="https://uic.group/media/AboutUs/IMG_2356_3_1.png"
                                className="md:w-[60px] w-[39px] md:h-[60px] h-[39px] rounded-[50%] object-cover object-center"
                              />
                              <div
                                data-v-643a1fb5=""
                                className="grid md:gap-1.5 gap-1"
                              >
                                <h2
                                  data-v-643a1fb5=""
                                  className="font-['Greycliff CF'] font-bold sm:text-base text-[13px] text-white sm:!leading-[20.8px] !leading-[16px] uppercase line-clamp-1"
                                >
                                  Aziz Halikov
                                </h2>
                                <h3
                                  data-v-643a1fb5=""
                                  className="font-roboto font-normal sm:text-base text-[13px] text-[#e0e0e099] sm:!leading-[22.4px] !leading-[18px] tracking-[0.2px] line-clamp-1"
                                >
                                  The founder of AZ Capital project
                                </h3>
                              </div>
                            </div>
                            <div
                              data-v-643a1fb5=""
                              className="order-first col-span-12 md:col-span-6 md:row-span-2 row-span-full blockquote-icon-wrapper aos-init aos-animate"
                              data-aos="fade-up"
                              data-aos-duration={600}
                            >
                              <i
                                data-v-56c03d90=""
                                data-v-643a1fb5=""
                                className="icon hover:text-red-500 md:w-[48px] w-[32px] md:h-[48px] h-[32px] text-[#00A795]"
                              >
                                <svg
                                  width={48}
                                  height={48}
                                  viewBox="0 0 48 48"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11.6025 40.8001C17.445 40.8001 22.005 36.2401 22.005 30.5401C22.005 24.6976 17.445 20.1376 11.6025 20.1376C11.6025 16.1476 12.7425 11.8726 14.4525 8.16759C14.88 7.3126 14.4525 6.6001 13.455 6.6001H11.6025C11.0325 6.6001 10.605 6.7426 10.035 7.3126C6.61495 11.1601 1.19995 19.5676 1.19995 29.1151C1.19995 36.2401 5.90245 40.8001 11.6025 40.8001ZM36.9675 40.8001C42.81 40.8001 47.37 36.2401 47.37 30.5401C47.37 24.6976 42.81 20.1376 36.9675 20.1376C36.9675 16.1476 38.1075 11.8726 39.8175 8.16759C40.245 7.3126 39.8175 6.6001 38.82 6.6001H36.9675C36.3975 6.6001 35.97 6.7426 35.4 7.3126C31.98 11.1601 26.565 19.5676 26.565 29.1151C26.565 36.2401 31.2675 40.8001 36.9675 40.8001Z"
                                    fill="#00A795"
                                  />
                                </svg>
                              </i>
                              <div
                                data-v-643a1fb5=""
                                className="mt-0 mb-3 md:mt-3 md:mb-5 min-h-[63px]"
                              >
                                <div
                                  data-v-643a1fb5=""
                                  className="client-comment-content font-bold sm:text-xl text-[15px] text-white md:!leading-[28px] sm:leading-[21px] leading-[21px] line-clamp-3"
                                >
                                  <p>
                                    “AZ Capital” &nbsp;kompaniyasi hamda “UIC
                                    Group” &nbsp;IT kompaniyasi bilan yaratilgan
                                    loyiha professional tradingga yetaklaydi .
                                    Professionallikka erishishda to’g’ri
                                    bilimlarni olish ko’zlangan maqsadga yanda
                                    tezroq erishishni ta’minlaydi. &nbsp;“UIC
                                    Group” &nbsp;mijozlari qaysi soha vakili
                                    bolishidan qat'iy nazar talab va
                                    istaklaridan kelib chiqqan holda eng optimal
                                    yechimni bera oladigan kuchli jamoadir.
                                  </p>
                                </div>
                              </div>
                              <div
                                data-v-643a1fb5=""
                                className="flex gap-3 mb-6 sm:gap-4 md:mb-0"
                              >
                                <p
                                  data-v-643a1fb5=""
                                  className="font-sofia font-medium text-[#ffffff4d] sm:text-sm text-[13px] sm:!leading-[18px] !leading-[16px] uppercase line-clamp-1 max-w-[250px]"
                                >
                                  Website
                                </p>
                                <a
                                  data-v-643a1fb5=""
                                  href="https://super1000.uz/"
                                  className="font-medium text-[#00A795] sm:text-sm text-[13px] sm:!leading-[18px] !leading-[16px] uppercase line-clamp-1 max-w-[250px]"
                                  target="_blank"
                                >
                                  SUPER1000.UZ
                                </a>
                              </div>
                            </div>
                            <div
                              data-v-643a1fb5=""
                              className="col-span-12 row-span-3 md:col-span-6 aos-init aos-animate"
                              data-aos="fade-up"
                              data-aos-duration={700}
                            >
                              <div
                                data-v-643a1fb5=""
                                className="client-comment-content lg-pt-[30px] font-roboto font-normal sm:text-base text-[13px] sm:!leading-[22px] !leading-[18px] tracking-[0.2px] text-[#e0e0e099] overflow-hidden"
                              >
                                <p>
                                  “AZ Capital” &nbsp;kompaniyasi hamda “UIC
                                  Group” &nbsp;IT kompaniya
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-duplicate-prev"
                          data-swiper-slide-index={2}
                          style={{ width: 1168, marginRight: 8 }}
                        >
                          <div
                            data-v-643a1fb5=""
                            className="grid grid-cols-12 md:gap-x-[21px] gap-x-0 grid-rows-3 md:gap-y-[35px] md:grid-flow-col md:pb-48"
                          >
                            <div
                              data-v-643a1fb5=""
                              className="flex items-start justify-center order-last col-span-12 gap-5 pb-3 mb-6 md:col-span-6 md:justify-start md:order-first md:mt-0 mt-14 md:mb-0 md:pb-0 aos-init aos-animate"
                              data-aos="fade-up"
                              data-aos-duration={500}
                            >
                              <img
                                data-v-643a1fb5=""
                                src="https://uic.group/media/AboutUs/b4f45ba4086151b9c882f9bfeecc6c23.jpeg"
                                className="md:w-[60px] w-[39px] md:h-[60px] h-[39px] rounded-[50%] object-cover object-center"
                              />
                              <div
                                data-v-643a1fb5=""
                                className="grid md:gap-1.5 gap-1"
                              >
                                <h2
                                  data-v-643a1fb5=""
                                  className="font-['Greycliff CF'] font-bold sm:text-base text-[13px] text-white sm:!leading-[20.8px] !leading-[16px] uppercase line-clamp-1"
                                >
                                  Musaev Amirtemurkhon
                                </h2>
                                <h3
                                  data-v-643a1fb5=""
                                  className="font-roboto font-normal sm:text-base text-[13px] text-[#e0e0e099] sm:!leading-[22.4px] !leading-[18px] tracking-[0.2px] line-clamp-1"
                                >
                                  Deputy Director
                                </h3>
                              </div>
                            </div>
                            <div
                              data-v-643a1fb5=""
                              className="order-first col-span-12 md:col-span-6 md:row-span-2 row-span-full blockquote-icon-wrapper aos-init aos-animate"
                              data-aos="fade-up"
                              data-aos-duration={600}
                            >
                              <i
                                data-v-56c03d90=""
                                data-v-643a1fb5=""
                                className="icon hover:text-red-500 md:w-[48px] w-[32px] md:h-[48px] h-[32px] text-[#00A795]"
                              >
                                <svg
                                  width={48}
                                  height={48}
                                  viewBox="0 0 48 48"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11.6025 40.8001C17.445 40.8001 22.005 36.2401 22.005 30.5401C22.005 24.6976 17.445 20.1376 11.6025 20.1376C11.6025 16.1476 12.7425 11.8726 14.4525 8.16759C14.88 7.3126 14.4525 6.6001 13.455 6.6001H11.6025C11.0325 6.6001 10.605 6.7426 10.035 7.3126C6.61495 11.1601 1.19995 19.5676 1.19995 29.1151C1.19995 36.2401 5.90245 40.8001 11.6025 40.8001ZM36.9675 40.8001C42.81 40.8001 47.37 36.2401 47.37 30.5401C47.37 24.6976 42.81 20.1376 36.9675 20.1376C36.9675 16.1476 38.1075 11.8726 39.8175 8.16759C40.245 7.3126 39.8175 6.6001 38.82 6.6001H36.9675C36.3975 6.6001 35.97 6.7426 35.4 7.3126C31.98 11.1601 26.565 19.5676 26.565 29.1151C26.565 36.2401 31.2675 40.8001 36.9675 40.8001Z"
                                    fill="#00A795"
                                  />
                                </svg>
                              </i>
                              <div
                                data-v-643a1fb5=""
                                className="mt-0 mb-3 md:mt-3 md:mb-5 min-h-[63px]"
                              >
                                <div
                                  data-v-643a1fb5=""
                                  className="client-comment-content font-bold sm:text-xl text-[15px] text-white md:!leading-[28px] sm:leading-[21px] leading-[21px] line-clamp-3"
                                >
                                  <h2>
                                    <span style={{ fontSize: 16 }}>
                                      Argos.uz is the only national labor
                                      system.
                                    </span>
                                  </h2>
                                </div>
                              </div>
                              <div
                                data-v-643a1fb5=""
                                className="flex gap-3 mb-6 sm:gap-4 md:mb-0"
                              >
                                <p
                                  data-v-643a1fb5=""
                                  className="font-sofia font-medium text-[#ffffff4d] sm:text-sm text-[13px] sm:!leading-[18px] !leading-[16px] uppercase line-clamp-1 max-w-[250px]"
                                >
                                  Website
                                </p>
                                <a
                                  data-v-643a1fb5=""
                                  href="https://argos.uz/oz"
                                  className="font-medium text-[#00A795] sm:text-sm text-[13px] sm:!leading-[18px] !leading-[16px] uppercase line-clamp-1 max-w-[250px]"
                                  target="_blank"
                                >
                                  ARGOS.UZ
                                </a>
                              </div>
                            </div>
                            <div
                              data-v-643a1fb5=""
                              className="col-span-12 row-span-3 md:col-span-6 aos-init aos-animate"
                              data-aos="fade-up"
                              data-aos-duration={700}
                            >
                              <div
                                data-v-643a1fb5=""
                                className="client-comment-content lg-pt-[30px] font-roboto font-normal sm:text-base text-[13px] sm:!leading-[22px] !leading-[18px] tracking-[0.2px] text-[#e0e0e099] overflow-hidden"
                              >
                                <p>
                                  Argos.uz is a remote training portal for state
                                  civil servants. The main purpose of this
                                  portal is to ensure selection of qualified
                                  personnel. We express our gratitude to the
                                  team of "UIC Group" for the modern design of
                                  this unified system.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                          data-swiper-slide-index={0}
                          style={{ width: 1168, marginRight: 8 }}
                        >
                          <div
                            data-v-643a1fb5=""
                            className="grid grid-cols-12 md:gap-x-[21px] gap-x-0 grid-rows-3 md:gap-y-[35px] md:grid-flow-col md:pb-48"
                          >
                            <div
                              data-v-643a1fb5=""
                              className="flex items-start justify-center order-last col-span-12 gap-5 pb-3 mb-6 md:col-span-6 md:justify-start md:order-first md:mt-0 mt-14 md:mb-0 md:pb-0 aos-init aos-animate"
                              data-aos="fade-up"
                              data-aos-duration={500}
                            >
                              <img
                                data-v-643a1fb5=""
                                src="https://uic.group/media/AboutUs/_A8A1925_HQCUw7a.jpeg"
                                className="md:w-[60px] w-[39px] md:h-[60px] h-[39px] rounded-[50%] object-cover object-center"
                              />
                              <div
                                data-v-643a1fb5=""
                                className="grid md:gap-1.5 gap-1"
                              >
                                <h2
                                  data-v-643a1fb5=""
                                  className="font-['Greycliff CF'] font-bold sm:text-base text-[13px] text-white sm:!leading-[20.8px] !leading-[16px] uppercase line-clamp-1"
                                >
                                  Sharipov Kongratboy
                                </h2>
                                <h3
                                  data-v-643a1fb5=""
                                  className="font-roboto font-normal sm:text-base text-[13px] text-[#e0e0e099] sm:!leading-[22.4px] !leading-[18px] tracking-[0.2px] line-clamp-1"
                                >
                                  Rector of Tashkent State University of
                                  Economics
                                </h3>
                              </div>
                            </div>
                            <div
                              data-v-643a1fb5=""
                              className="order-first col-span-12 md:col-span-6 md:row-span-2 row-span-full blockquote-icon-wrapper aos-init aos-animate"
                              data-aos="fade-up"
                              data-aos-duration={600}
                            >
                              <i
                                data-v-56c03d90=""
                                data-v-643a1fb5=""
                                className="icon hover:text-red-500 md:w-[48px] w-[32px] md:h-[48px] h-[32px] text-[#00A795]"
                              >
                                <svg
                                  width={48}
                                  height={48}
                                  viewBox="0 0 48 48"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11.6025 40.8001C17.445 40.8001 22.005 36.2401 22.005 30.5401C22.005 24.6976 17.445 20.1376 11.6025 20.1376C11.6025 16.1476 12.7425 11.8726 14.4525 8.16759C14.88 7.3126 14.4525 6.6001 13.455 6.6001H11.6025C11.0325 6.6001 10.605 6.7426 10.035 7.3126C6.61495 11.1601 1.19995 19.5676 1.19995 29.1151C1.19995 36.2401 5.90245 40.8001 11.6025 40.8001ZM36.9675 40.8001C42.81 40.8001 47.37 36.2401 47.37 30.5401C47.37 24.6976 42.81 20.1376 36.9675 20.1376C36.9675 16.1476 38.1075 11.8726 39.8175 8.16759C40.245 7.3126 39.8175 6.6001 38.82 6.6001H36.9675C36.3975 6.6001 35.97 6.7426 35.4 7.3126C31.98 11.1601 26.565 19.5676 26.565 29.1151C26.565 36.2401 31.2675 40.8001 36.9675 40.8001Z"
                                    fill="#00A795"
                                  />
                                </svg>
                              </i>
                              <div
                                data-v-643a1fb5=""
                                className="mt-0 mb-3 md:mt-3 md:mb-5 min-h-[63px]"
                              >
                                <div
                                  data-v-643a1fb5=""
                                  className="client-comment-content font-bold sm:text-xl text-[15px] text-white md:!leading-[28px] sm:leading-[21px] leading-[21px] line-clamp-3"
                                >
                                  <p>
                                    <span style={{ fontSize: 20 }}>
                                      <span
                                        style={{
                                          fontFamily: 'Calibri,"sans-serif"'
                                        }}
                                      >
                                        TDIU reestrlik tizimining &nbsp;samarali
                                        yo’lga qo’yilishi
                                      </span>
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div
                                data-v-643a1fb5=""
                                className="flex gap-3 mb-6 sm:gap-4 md:mb-0"
                              >
                                <p
                                  data-v-643a1fb5=""
                                  className="font-sofia font-medium text-[#ffffff4d] sm:text-sm text-[13px] sm:!leading-[18px] !leading-[16px] uppercase line-clamp-1 max-w-[250px]"
                                >
                                  Personnel registry system
                                </p>
                                <a
                                  data-v-643a1fb5=""
                                  href="http://tsue.uz/"
                                  className="font-medium text-[#00A795] sm:text-sm text-[13px] sm:!leading-[18px] !leading-[16px] uppercase line-clamp-1 max-w-[250px]"
                                  target="_blank"
                                >
                                  Website
                                </a>
                              </div>
                            </div>
                            <div
                              data-v-643a1fb5=""
                              className="col-span-12 row-span-3 md:col-span-6 aos-init aos-animate"
                              data-aos="fade-up"
                              data-aos-duration={700}
                            >
                              <div
                                data-v-643a1fb5=""
                                className="client-comment-content lg-pt-[30px] font-roboto font-normal sm:text-base text-[13px] sm:!leading-[22px] !leading-[18px] tracking-[0.2px] text-[#e0e0e099] overflow-hidden"
                              >
                                <p>
                                  <span style={{ fontSize: "11pt" }}>
                                    <span
                                      style={{
                                        fontFamily: 'Calibri,"sans-serif"'
                                      }}
                                    >
                                      Toshkent Davlat iqtisodiyot universiteti
                                      kadrlar reestrlik tizimini “UIC&nbsp;
                                      Group” jamoasi bilan birgalikda yo’lga
                                      qo’ydi. Bu optimallashtirish kadrlar
                                      boshqaruv tizimini yanada osonlashtirdi.
                                      TDIU jamoasi &nbsp;“UIC Group” IT
                                      kompaniyasining malakali mutaxassislariga
                                      o'z minnatdorchiligini bildiradi.
                                    </span>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                
                
                      <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                        <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
                        <span className="swiper-pagination-bullet" />
                        <span className="swiper-pagination-bullet" />
                      </div>
                    </div>
                    <div className="flex swiper_buttons">
                      <button
                        className="swiper-next-button swiper-button group absolute bottom-[-40px] xs:bottom-[-10px] md:bottom-5 left-auto md:left-[70px] right-[25px] md:right-auto z-10 cursor-pointer"
                        aria-label="button"
                      >
                        <i
                          data-v-56c03d90=""
                          className="icon hover:text-red-500 text-[#00A795] md:text-[#fff] transition duration-300"
                        >
                          <svg
                            width={48}
                            height={48}
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx={24}
                              cy={24}
                              r="23.5"
                              stroke="white"
                              strokeOpacity="0.8"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M29.8224 18.2188L34.7722 22.9719C35.0759 23.2636 35.0759 23.7364 34.7722 24.0281L29.8224 28.7812C29.5187 29.0729 29.0262 29.0729 28.7225 28.7812C28.4188 28.4896 28.4188 28.0167 28.7225 27.725L32.3445 24.2469H12V22.7531H32.3445L28.7225 19.275C28.4188 18.9833 28.4188 18.5104 28.7225 18.2188C29.0262 17.9271 29.5187 17.9271 29.8224 18.2188Z"
                              fill="#00A795"
                            />
                          </svg>
                        </i>
                      </button>
                      <button
                        className="swiper-prev-button swiper-button absolute bottom-[-40px] xs:bottom-[-10px] md:bottom-5 left-[26px] md:left-[0] z-10 group cursor-pointer"
                        aria-label="button"
                      >
                        <i
                          data-v-56c03d90=""
                          className="icon hover:text-red-500 text-[#00A795] md:text-[#fff] transition duration-300"
                        >
                          <svg
                            width={48}
                            height={48}
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx={24}
                              cy={24}
                              r="23.5"
                              transform="rotate(-180 24 24)"
                              stroke="white"
                              strokeOpacity="0.8"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18.1776 29.7812L13.2278 25.0281C12.9241 24.7364 12.9241 24.2636 13.2278 23.9719L18.1776 19.2188C18.4813 18.9271 18.9738 18.9271 19.2775 19.2188C19.5812 19.5104 19.5812 19.9833 19.2775 20.275L15.6555 23.7531L36 23.7531V25.2469L15.6555 25.2469L19.2775 28.725C19.5812 29.0167 19.5812 29.4896 19.2775 29.7812C18.9738 30.0729 18.4813 30.0729 18.1776 29.7812Z"
                              fill="#00A795"
                            />
                          </svg>
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer
          data-v-34700754=""
          data-v-1cc107bd=""
          className="bg-[#1E1E20] w-full h-full pt-[30px] md:pt-10 xs:pb-0 relative z-1 pb-[18px]"
          email="info@uic.group"
        >
          <div data-v-34700754="" className="container">
            <div
              data-v-34700754=""
              className="justify-center items-center pb-7 hidden lg:!hidden xs:flex"
            >
              <a
                data-v-34700754=""
                className="bottom-footer__logo"
                href="https://uic.group"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="link"
              >
                <i
                  data-v-56c03d90=""
                  data-v-34700754=""
                  className="icon hover:text-red-500 text-white"
                >
                  <svg
                    width={60}
                    height={32}
                    viewBox="0 0 60 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.8786 7.66382C11.724 5.71305 6.02524 10.3488 2.51993 5.13621C2.50943 5.11521 2.49894 5.10473 2.48845 5.08376C2.394 4.93693 2.51993 4.72717 2.68784 4.76911C9.90838 6.48917 11.0838 5.41938 14.1169 5.78645C16.919 6.12207 19.8786 7.66382 19.8786 7.66382Z"
                      fill="white"
                    />
                    <path
                      d="M21.3162 8.97456C14.1375 7.91528 9.04741 13.2747 5.20625 9.15287C5.19575 9.14239 5.18526 9.12141 5.16427 9.11093C5.05933 8.99556 5.13279 8.7858 5.2902 8.79628C11.8496 9.27873 13.3923 8.12505 16.0897 8.00968C18.6083 7.9048 21.3162 8.97456 21.3162 8.97456Z"
                      fill="white"
                    />
                    <path
                      d="M22.6492 10.6632C16.3836 9.81372 13.697 15.4353 8.61744 11.9952C8.60695 11.9847 8.59645 11.9743 8.57547 11.9533C8.47052 11.8589 8.50201 11.5862 8.64893 11.5862C14.2008 11.5967 15.6491 10.3066 17.9896 10.0235C21.1591 9.64589 22.6492 10.6632 22.6492 10.6632Z"
                      fill="white"
                    />
                    <path
                      d="M25.4723 12.5196C22.1979 12.8657 22.7122 15.4877 19.123 14.9003C18.6507 14.8269 18.7557 14.4913 18.9656 14.4284C21.9776 13.5683 21.9776 12.9915 23.0586 12.5615C24.0871 12.1734 25.4723 12.5196 25.4723 12.5196Z"
                      fill="white"
                    />
                    <path
                      d="M23.9923 11.7119C19.2696 11.8063 18.0628 15.1939 14.0851 14.0927C13.4764 13.9249 13.6863 13.4634 14.0117 13.4215C18.5666 12.6978 18.7868 12.0266 20.4765 11.628C22.0612 11.2504 23.9923 11.7119 23.9923 11.7119Z"
                      fill="white"
                    />
                    <path
                      d="M21.2949 7.65318C21.2634 7.70561 21.19 7.71609 21.1375 7.69512C20.1615 7.13925 19.2486 6.48899 18.1991 5.77581C17.2125 5.11506 15.0925 4.21309 10.6846 4.42285C8.58561 4.52773 5.39515 4.95775 2.09973 2.70282C1.3021 2.16792 0.493987 1.25546 0.0741874 0.405949C0.0322103 0.332522 0.0112221 0.238125 0.00072781 0.143728C-0.00976646 0.0493311 0.0951755 -0.0240665 0.189653 0.00738968C8.34424 3.27966 10.6741 2.00013 15.8062 3.18526C17.9156 3.67822 20.5288 6.74072 21.2846 7.50633C21.3265 7.53781 21.3265 7.60072 21.2949 7.65318Z"
                      fill="white"
                    />
                    <path
                      d="M28.3897 25.5879C28.2951 25.8813 28.316 26.2276 28.1274 26.4793C27.8963 26.815 27.3297 26.8464 27.0567 26.5421C26.8784 26.385 26.8784 26.1333 26.8153 25.9339C26.4061 24.1405 26.0073 22.3468 25.6085 20.5429C25.5666 20.4172 25.6085 20.3332 25.7343 20.2809C25.9339 20.2283 25.9548 20.4486 26.0176 20.5746C26.4689 21.8017 26.8887 23.0391 27.3506 24.2662C27.4974 24.6859 27.9909 24.5493 28.316 24.6545C28.6624 24.8745 28.4525 25.2836 28.3897 25.5879Z"
                      fill="white"
                    />
                    <path
                      d="M28.925 20.6372C28.9671 20.7527 28.904 20.8889 28.7782 20.9098C28.7048 20.9204 28.6417 20.9098 28.6208 20.8049C28.3162 20.1967 28.0539 19.557 27.7391 18.9487C27.3299 18.6024 26.8995 18.2459 26.6478 17.753C26.1965 16.9559 26.2383 15.9176 26.7421 15.1519C26.784 15.0995 26.8155 15.0366 26.8577 14.9841C26.9311 14.8793 27.0885 14.9002 27.1303 15.0261C27.1619 15.1205 27.1828 15.2149 27.225 15.2988C27.7915 17.0713 28.3375 18.8647 28.925 20.6372Z"
                      fill="white"
                    />
                    <path
                      d="M29.009 12.1946C28.9881 12.6665 28.8098 13.107 28.6942 13.558C28.6836 13.5895 28.6733 13.6105 28.6417 13.6209C28.5683 13.6524 28.4949 13.6 28.4949 13.5266C28.5052 12.9078 28.7257 12.2995 28.5683 11.6911C28.3375 10.8626 27.7706 10.1389 27.7288 9.25793C27.7076 8.79646 27.8231 8.34548 27.9177 7.89449C27.5817 7.1918 27.4243 6.3842 27.6026 5.61859C27.6342 5.52419 27.6448 5.52419 27.6972 5.59759C28.0227 6.06958 28.4528 6.54153 28.4528 7.16031C28.4109 8.04131 27.9281 8.92231 28.2535 9.80332C28.5159 10.5899 29.0824 11.3241 29.009 12.1946Z"
                      fill="white"
                    />
                    <path
                      d="M31.7792 9.15276C31.7582 10.3064 30.7507 11.2294 30.8662 12.4041C30.8662 12.855 30.9815 13.3165 30.929 13.7675C30.8556 14.166 30.4043 14.229 30.0792 14.3234C29.8902 14.4073 29.6803 14.187 29.7328 13.9982C29.7328 12.6348 29.7328 11.2609 29.7328 9.89742C29.7537 9.33107 29.8902 8.73323 30.2784 8.30324C30.5199 8.02005 30.7716 7.73689 31.034 7.4537C31.0864 7.39076 31.118 7.31736 31.1077 7.24393C31.0864 6.99223 31.034 6.77197 31.1495 6.4783C31.3279 6.11122 31.559 5.89097 31.8001 5.64975C31.8422 5.60781 31.905 5.62878 31.9157 5.68121C32.0837 6.42587 31.9157 7.23345 31.5693 7.90468C31.6533 8.30324 31.7792 8.72274 31.7792 9.15276Z"
                      fill="white"
                    />
                    <path
                      d="M45.0348 4.93668C43.6075 5.33521 42.9463 5.81765 42.3797 6.26863C42.3797 6.26863 43.6706 5.81765 45.528 5.6184C50.7966 5.04156 51.1009 7.00281 56.9991 4.72691C57.1984 4.69546 57.2509 4.85276 57.1984 4.93668C56.4114 6.30012 55.5403 7.81039 52.2449 7.94672C48.6556 8.09358 46.7876 6.65671 43.4185 7.08672C41.2672 7.3594 40.1547 8.03064 39.5354 8.43968C46.8819 7.03427 46.2732 10.2646 53.4727 8.54456C53.5567 8.52356 53.6513 8.50259 53.7353 8.51308C53.924 8.53405 53.9977 8.76481 53.8821 8.89067C53.8297 8.95358 53.7562 9.01652 53.7038 9.07943C52.7593 10.0968 51.7621 11.2085 48.4036 10.9568C44.4576 10.6631 44.2059 8.21943 36.6704 10.0863C43.9748 10.0548 43.8489 12.4461 49.3484 11.7329C49.5373 11.7119 49.6526 11.9427 49.5058 12.0685C49.4218 12.1419 49.3272 12.2049 49.2537 12.2678C48.4248 12.9181 47.2177 13.7151 44.9508 13.2537C40.2281 12.2678 40.8265 10.317 34.7499 11.3868C39.4829 11.5127 39.1577 13.3481 44.0169 13.7991C44.0169 13.7991 44.0169 13.7991 44.0273 13.7991C44.2896 13.8305 44.3633 14.1766 44.1428 14.3235C43.9748 14.4388 43.7858 14.5227 43.6075 14.5961C40.0604 15.9701 38.4125 11.5232 34.0571 12.5195C37.1742 12.7922 36.9221 13.841 39.7349 14.6066C40.0391 14.6905 40.0079 15.0996 39.6718 15.131C36.3346 15.4667 36.6285 13.2222 34.5818 13.1383C34.0362 13.1173 33.5324 13.411 33.2594 13.8935C32.4514 15.2988 32.7766 16.6308 32.7241 17.3545C32.9131 18.1096 33.1967 18.8439 33.207 19.6408C33.2176 20.1967 33.1651 20.7736 32.9865 21.3084C32.6507 22.4201 32.315 23.5321 31.9686 24.6543C31.8952 24.8849 31.9055 25.1366 31.9895 25.3569C32.1154 25.6926 32.2416 26.0177 32.294 26.3743C32.4199 26.972 32.3359 27.5908 32.126 28.1676C31.6853 29.2479 31.2443 30.3281 30.8036 31.419C30.7196 31.6181 30.6568 31.8281 30.5097 31.9958C30.2895 32.0378 30.3104 31.7547 30.3314 31.6181C30.7618 27.5802 31.1709 23.5423 31.5907 19.5045L31.9267 18.5396C31.2655 19.1059 30.9716 19.8925 30.5413 20.5953C30.4888 20.763 30.237 20.7944 30.1846 20.6059C30.2264 19.903 30.3208 19.2005 30.342 18.4977C30.4048 17.7845 30.3945 17.0608 30.6359 16.3791C30.9086 15.6869 31.4333 15.131 31.8427 14.5332C32.5142 13.6732 33.018 12.6978 33.3644 11.67C33.5743 11.0407 34.0153 10.4848 34.5818 10.1387C36.5445 8.90115 37.6883 7.83136 39.546 6.42597C41.2566 5.13593 42.579 4.12907 43.3348 3.82494C46.7876 2.40904 53.7247 3.92982 59.6649 0.0702289C59.8117 -0.0136828 60.0006 0.154112 59.8854 0.395333C59.3291 1.80075 58.6679 2.70272 57.0935 3.47884C52.5597 5.71279 47.3542 4.28641 45.0348 4.93668Z"
                      fill="white"
                    />
                    <path
                      d="M31.2654 7.3596C31.2654 7.3596 30.8769 6.67788 29.9324 6.59396C29.2187 6.53105 28.8936 6.77227 28.8936 6.77227C28.8936 6.77227 29.754 6.52057 30.4258 7.11838C31.0974 7.71619 30.7301 8.23011 30.7301 8.23011C30.7301 8.23011 31.4647 7.8001 31.2654 7.3596Z"
                      fill="white"
                    />
                    <path
                      d="M31.2234 7.26508C31.2234 7.26508 30.7302 6.7407 29.7227 6.69873C29.7227 6.69873 30.3208 6.84555 30.3945 7.17069C30.5203 7.7895 29.9747 8.61804 29.8697 9.0166C29.7857 9.37319 31.2234 7.26508 31.2234 7.26508Z"
                      fill="white"
                    />
                  </svg>
                </i>
              </a>
            </div>
            <div
              data-v-34700754=""
              className="flex justify-center sm:justify-center md:justify-center lg:!justify-between"
            >
              <ul
                data-v-34700754=""
                className="flex gap-x-5 px-3 md:px-0 lg:!gap-x-12 items-center lg:!justify-start justify-center flex-wrap"
              >
                <li data-v-34700754="">
                  <a
                    data-v-34700754=""
                    href="/about"
                    className="cursor-pointer text-white text-opacity-60 hover:text-opacity-100 transition duration-300 ease-in-out text-base uppercase xs:text-[13px] font-semibold lg:!text-base"
                  >
                    About us
                  </a>
                </li>
                <li data-v-34700754="">
                  <a
                    data-v-34700754=""
                    href="/brief"
                    className="cursor-pointer text-white text-opacity-60 hover:text-opacity-100 transition duration-300 ease-in-out text-base uppercase xs:text-[13px] font-semibold lg:!text-base"
                  >
                    Services
                  </a>
                </li>
                <li data-v-34700754="">
                  <a
                    data-v-34700754=""
                    href="/portfolio"
                    className="cursor-pointer text-white text-opacity-60 hover:text-opacity-100 transition duration-300 ease-in-out text-base uppercase xs:text-[13px] font-semibold lg:!text-base"
                  >
                    Portfolio
                  </a>
                </li>
                <li data-v-34700754="">
                  <a
                    data-v-34700754=""
                    href="/vacancy"
                    className="cursor-pointer text-white text-opacity-60 hover:text-opacity-100 transition duration-300 ease-in-out text-base uppercase xs:text-[13px] font-semibold lg:!text-base"
                  >
                    Career
                  </a>
                </li>
                <li data-v-34700754="">
                  <a
                    data-v-34700754=""
                    aria-current="page"
                    href="/blog"
                    className="router-link-active router-link-exact-active cursor-pointer text-white text-opacity-60 hover:text-opacity-100 transition duration-300 ease-in-out text-base uppercase xs:text-[13px] font-semibold lg:!text-base"
                  >
                    Blog
                  </a>
                </li>
              </ul>
              <div
                data-v-34700754=""
                className="hidden lg:!flex group cursor-pointer"
              >
                <div
                  data-v-34700754=""
                  className="border-[1px] group-hover:border-[#00A795] transition duration-300 ease-in-out flex items-center justify-center w-12 h-12 rounded-[50%]"
                >
                  <i
                    data-v-56c03d90=""
                    data-v-34700754=""
                    className="icon hover:text-red-500 text-[#FFFFFF99] group-hover:!text-[#00A795] transition duration-300 ease-in-out"
                  >
                    <svg
                      width={11}
                      height={23}
                      viewBox="0 0 11 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.218756 5.17755L4.97187 0.227806C5.26355 -0.0759356 5.73645 -0.0759356 6.02812 0.227806L10.7812 5.17755C11.0729 5.48129 11.0729 5.97375 10.7812 6.2775C10.4896 6.58124 10.0167 6.58124 9.72499 6.2775L6.24688 2.6555L6.24688 23L4.75312 23L4.75312 2.6555L1.275 6.2775C0.983329 6.58124 0.510431 6.58124 0.218756 6.2775C-0.0729195 5.97375 -0.0729195 5.48129 0.218756 5.17755Z"
                        fill="white"
                        fillOpacity="0.6"
                      />
                    </svg>
                  </i>
                </div>
              </div>
            </div>
            <div
              data-v-34700754=""
              className="flex justify-center lg:!justify-start lg:!items-center mb-5 md:mb-10 lg:mb-[50px]"
            >
              <div
                data-v-34700754=""
                className="flex flex-col pt-[12px] ss:flex-row xs:items-center lg:items-center gap-x-8 sm:gap-y-0 gap-y-4"
              >
                <div
                  data-v-15e837cc=""
                  data-v-34700754=""
                  className="grid grid-cols-5 md:grid-cols-9 gap-3 mb-2 xs:mb-1"
                >
                  <a
                    data-v-15e837cc=""
                    href="https://www.facebook.com/uicgroup.org"
                    className="text-white social"
                    target="_blank"
                    aria-label="link"
                  >
                    <img
                      data-v-15e837cc=""
                      className="md:hover:bg-green rounded-full md:hover:border-green border-[#6A6A6C] sm:border border-solid flex justify-center items-center transition duration-300 ease-in-out"
                      src="/uic-images/socials/facebook.svg"
                      alt=""
                    />
                  </a>
                  <a
                    data-v-15e837cc=""
                    href="https://twitter.com/UIC_Group"
                    className="text-white social"
                    target="_blank"
                    aria-label="link"
                  >
                    <img
                      data-v-15e837cc=""
                      className="md:hover:bg-green rounded-full md:hover:border-green border-[#6A6A6C] sm:border border-solid flex justify-center items-center transition duration-300 ease-in-out"
                      src="/uic-images/socials/twitter.svg"
                      alt=""
                    />
                  </a>
                  <a
                    data-v-15e837cc=""
                    href="https://www.instagram.com/uic.group"
                    className="text-white social"
                    target="_blank"
                    aria-label="link"
                  >
                    <img
                      data-v-15e837cc=""
                      className="md:hover:bg-green rounded-full md:hover:border-green border-[#6A6A6C] sm:border border-solid flex justify-center items-center transition duration-300 ease-in-out"
                      src="/uic-images/socials/instagram.svg"
                      alt=""
                    />
                  </a>
                  <a
                    data-v-15e837cc=""
                    href="https://t.me/uicgroup"
                    className="text-white social"
                    target="_blank"
                    aria-label="link"
                  >
                    <img
                      data-v-15e837cc=""
                      className="md:hover:bg-green rounded-full md:hover:border-green border-[#6A6A6C] sm:border border-solid flex justify-center items-center transition duration-300 ease-in-out"
                      src="/uic-images/socials/telegram.svg"
                      alt=""
                    />
                  </a>
                  <a
                    data-v-15e837cc=""
                    href="https://www.linkedin.com/company/uic-group/"
                    className="text-white social"
                    target="_blank"
                    aria-label="link"
                  >
                    <img
                      data-v-15e837cc=""
                      className="md:hover:bg-green rounded-full md:hover:border-green border-[#6A6A6C] sm:border border-solid flex justify-center items-center transition duration-300 ease-in-out"
                      src="/uic-images/socials/linkedin.svg"
                      alt=""
                    />
                  </a>
                  <a
                    data-v-15e837cc=""
                    href="https://www.behance.net/uic_group"
                    className="text-white social"
                    target="_blank"
                    aria-label="link"
                  >
                    <img
                      data-v-15e837cc=""
                      className="md:hover:bg-green rounded-full md:hover:border-green border-[#6A6A6C] sm:border border-solid flex justify-center items-center transition duration-300 ease-in-out"
                      src="/uic-images/socials/behance.svg"
                      alt=""
                    />
                  </a>
                  <a
                    data-v-15e837cc=""
                    href="https://dribbble.com/uicgroup"
                    className="text-white social"
                    target="_blank"
                    aria-label="link"
                  >
                    <img
                      data-v-15e837cc=""
                      className="md:hover:bg-green rounded-full md:hover:border-green border-[#6A6A6C] sm:border border-solid flex justify-center items-center transition duration-300 ease-in-out"
                      src="/uic-images/socials/dribbble.svg"
                      alt=""
                    />
                  </a>
                  <a
                    data-v-15e837cc=""
                    href="https://www.trustpilot.com/review/uic.group"
                    className="text-white social"
                    target="_blank"
                    aria-label="link"
                  >
                    <img
                      data-v-15e837cc=""
                      className="md:hover:bg-green rounded-full md:hover:border-green border-[#6A6A6C] sm:border border-solid flex justify-center items-center transition duration-300 ease-in-out"
                      src="/uic-images/socials/trustpilot.svg"
                      alt=""
                    />
                  </a>
                  <a
                    data-v-15e837cc=""
                    href="https://www.yelp.com/biz/uic-group-san-francisco"
                    className="text-white social"
                    target="_blank"
                    aria-label="link"
                  >
                    <img
                      data-v-15e837cc=""
                      className="md:hover:bg-green rounded-full md:hover:border-green border-[#6A6A6C] sm:border border-solid flex justify-center items-center transition duration-300 ease-in-out"
                      src="/uic-images/socials/yelp.svg"
                      alt=""
                    />
                  </a>
                </div>
                <div
                  data-v-34700754=""
                  className="flex flex-col gap-y-2 xs:flex-row justify-center xs:gap-x-4 xs:pt-2 sm:!pt-0 lg:!pt-0 lg:!items-center"
                >
                  <div
                    data-v-34700754=""
                    className="flex gap-x-1 sm:!gap-x-3 items-center xs:justify-center"
                  >
                    <i
                      data-v-56c03d90=""
                      data-v-34700754=""
                      className="icon hover:text-red-500 text-white"
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width={24}
                          height={24}
                          rx={12}
                          fill="white"
                          fillOpacity="0.3"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 4.8C8.02355 4.8 4.8 8.02355 4.8 12C4.8 15.9765 8.02355 19.2 12 19.2C13.1511 19.2 14.2367 18.9305 15.1995 18.4521C15.6446 18.2309 16.1847 18.4124 16.4059 18.8575C16.6272 19.3026 16.4456 19.8428 16.0005 20.064C14.7944 20.6634 13.4352 21 12 21C7.02943 21 3 16.9705 3 12C3 7.02943 7.02943 3 12 3C16.9705 3 21 7.02943 21 12V12.9C21 14.1681 20.6826 15.1818 20.0883 15.8949C19.485 16.6188 18.663 16.95 17.85 16.95C16.7458 16.95 15.6292 16.328 15.0691 15.291C14.2651 16.0411 13.1862 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C13.013 7.5 13.9479 7.83475 14.7 8.39967C14.7002 7.90277 15.103 7.5 15.6 7.5C16.0971 7.5 16.5 7.90295 16.5 8.4V13.8C16.5 14.5955 17.1626 15.15 17.85 15.15C18.162 15.15 18.465 15.0312 18.7055 14.7426C18.9549 14.4432 19.2 13.8819 19.2 12.9V12C19.2 8.02355 15.9765 4.8 12 4.8ZM14.7 12C14.7 10.5088 13.4912 9.3 12 9.3C10.5088 9.3 9.3 10.5088 9.3 12C9.3 13.4912 10.5088 14.7 12 14.7C13.4912 14.7 14.7 13.4912 14.7 12Z"
                          fill="white"
                        />
                      </svg>
                    </i>
                    <a
                      data-v-34700754=""
                      href="mailto:info@uic.group"
                      className="text-base text-white md:text-[#FFFFFF99] hover:text-white transition duration-300 ease-in-out text-[15px] lg:!text-[16px] xs:leading-[18px] font-normal"
                      target="_blank"
                      aria-label="link"
                    >
                      info@uic.group
                    </a>
                  </div>
                  <div
                    data-v-34700754=""
                    className="flex items-center xs:justify-center sm:!gap-x-3 xs:gap-x-1"
                  >
                    <i
                      data-v-56c03d90=""
                      data-v-34700754=""
                      className="icon hover:text-red-500 text-white"
                    >
                      <svg
                        width={25}
                        height={24}
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.427979"
                          width={24}
                          height={24}
                          rx={12}
                          fill="white"
                          fillOpacity="0.3"
                        />
                        <path
                          d="M13.3975 13.6577C13.1606 13.8944 12.9237 14.2495 12.7461 14.5455C11.6802 13.7168 10.7327 12.7106 9.90364 11.7044C10.2589 11.5269 10.555 11.2901 10.7919 11.0534C11.9762 9.86958 11.5617 8.33068 10.3774 7.14691C9.19303 5.96314 7.7126 5.48963 6.46904 6.73259C5.22548 7.97555 5.10705 10.1063 6.05452 11.4677C7.77182 14.072 10.3774 16.6763 12.9829 18.3927C14.4041 19.3398 16.536 19.1622 17.7203 17.9784C18.9047 16.7946 18.4901 15.2557 17.3058 14.072C16.1214 12.8882 14.5818 12.4147 13.3975 13.6577Z"
                          stroke="white"
                          strokeWidth="1.6"
                          strokeMiterlimit={10}
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.428 11C19.428 7.66667 16.7613 5 13.428 5"
                          stroke="white"
                          strokeWidth="1.6"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.428 11C16.428 9.34043 15.081 8 13.428 8"
                          stroke="white"
                          strokeWidth="1.6"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </i>
                    <a
                      data-v-34700754=""
                      href="tel:+998 71 200 70 07"
                      className="text-base text-white md:text-[#FFFFFF99] hover:text-white transition duration-300 ease-in-out font-normal text-[15px] lg:!text-[16px] xs:leading-[18px] lg:!w-[132px] xs:w-[124px]"
                      target="_blank"
                      aria-label="link"
                    >
                      +998 71 200 70 07
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr data-v-34700754="" className="text-[#FFFFFF] opacity-[0.1]" />
            <div
              data-v-34700754=""
              className="mt-[18px] flex flex-col-reverse h-auto md:flex-row items-center md:justify-between"
            >
              <div data-v-34700754="" className="mt-4 sm:!mb-9 mb-[28px]">
                <p
                  data-v-34700754=""
                  className="text-[#FFFFFF] opacity-[0.6] text-base font-medium xs:text-[13px] sm:!text-base"
                >
                  
                  © UIC GROUP <span data-v-34700754="">2024</span>
                </p>
              </div>
              <div data-v-34700754="" className="hidden lg:inline mb-[16px]">
                <a
                  data-v-34700754=""
                  href="/"
                  className="md:gap-[8px] flex items-center justify-center lg:!flex text-center uic"
                >
                  <i
                    data-v-56c03d90=""
                    data-v-34700754=""
                    className="icon hover:text-red-500 uicLogo text-white opacity-[0.8]"
                  >
                    <svg
                      width={60}
                      height={32}
                      viewBox="0 0 60 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.8786 7.66382C11.724 5.71305 6.02524 10.3488 2.51993 5.13621C2.50943 5.11521 2.49894 5.10473 2.48845 5.08376C2.394 4.93693 2.51993 4.72717 2.68784 4.76911C9.90838 6.48917 11.0838 5.41938 14.1169 5.78645C16.919 6.12207 19.8786 7.66382 19.8786 7.66382Z"
                        fill="white"
                      />
                      <path
                        d="M21.3162 8.97456C14.1375 7.91528 9.04741 13.2747 5.20625 9.15287C5.19575 9.14239 5.18526 9.12141 5.16427 9.11093C5.05933 8.99556 5.13279 8.7858 5.2902 8.79628C11.8496 9.27873 13.3923 8.12505 16.0897 8.00968C18.6083 7.9048 21.3162 8.97456 21.3162 8.97456Z"
                        fill="white"
                      />
                      <path
                        d="M22.6492 10.6632C16.3836 9.81372 13.697 15.4353 8.61744 11.9952C8.60695 11.9847 8.59645 11.9743 8.57547 11.9533C8.47052 11.8589 8.50201 11.5862 8.64893 11.5862C14.2008 11.5967 15.6491 10.3066 17.9896 10.0235C21.1591 9.64589 22.6492 10.6632 22.6492 10.6632Z"
                        fill="white"
                      />
                      <path
                        d="M25.4723 12.5196C22.1979 12.8657 22.7122 15.4877 19.123 14.9003C18.6507 14.8269 18.7557 14.4913 18.9656 14.4284C21.9776 13.5683 21.9776 12.9915 23.0586 12.5615C24.0871 12.1734 25.4723 12.5196 25.4723 12.5196Z"
                        fill="white"
                      />
                      <path
                        d="M23.9923 11.7119C19.2696 11.8063 18.0628 15.1939 14.0851 14.0927C13.4764 13.9249 13.6863 13.4634 14.0117 13.4215C18.5666 12.6978 18.7868 12.0266 20.4765 11.628C22.0612 11.2504 23.9923 11.7119 23.9923 11.7119Z"
                        fill="white"
                      />
                      <path
                        d="M21.2949 7.65318C21.2634 7.70561 21.19 7.71609 21.1375 7.69512C20.1615 7.13925 19.2486 6.48899 18.1991 5.77581C17.2125 5.11506 15.0925 4.21309 10.6846 4.42285C8.58561 4.52773 5.39515 4.95775 2.09973 2.70282C1.3021 2.16792 0.493987 1.25546 0.0741874 0.405949C0.0322103 0.332522 0.0112221 0.238125 0.00072781 0.143728C-0.00976646 0.0493311 0.0951755 -0.0240665 0.189653 0.00738968C8.34424 3.27966 10.6741 2.00013 15.8062 3.18526C17.9156 3.67822 20.5288 6.74072 21.2846 7.50633C21.3265 7.53781 21.3265 7.60072 21.2949 7.65318Z"
                        fill="white"
                      />
                      <path
                        d="M28.3897 25.5879C28.2951 25.8813 28.316 26.2276 28.1274 26.4793C27.8963 26.815 27.3297 26.8464 27.0567 26.5421C26.8784 26.385 26.8784 26.1333 26.8153 25.9339C26.4061 24.1405 26.0073 22.3468 25.6085 20.5429C25.5666 20.4172 25.6085 20.3332 25.7343 20.2809C25.9339 20.2283 25.9548 20.4486 26.0176 20.5746C26.4689 21.8017 26.8887 23.0391 27.3506 24.2662C27.4974 24.6859 27.9909 24.5493 28.316 24.6545C28.6624 24.8745 28.4525 25.2836 28.3897 25.5879Z"
                        fill="white"
                      />
                      <path
                        d="M28.925 20.6372C28.9671 20.7527 28.904 20.8889 28.7782 20.9098C28.7048 20.9204 28.6417 20.9098 28.6208 20.8049C28.3162 20.1967 28.0539 19.557 27.7391 18.9487C27.3299 18.6024 26.8995 18.2459 26.6478 17.753C26.1965 16.9559 26.2383 15.9176 26.7421 15.1519C26.784 15.0995 26.8155 15.0366 26.8577 14.9841C26.9311 14.8793 27.0885 14.9002 27.1303 15.0261C27.1619 15.1205 27.1828 15.2149 27.225 15.2988C27.7915 17.0713 28.3375 18.8647 28.925 20.6372Z"
                        fill="white"
                      />
                      <path
                        d="M29.009 12.1946C28.9881 12.6665 28.8098 13.107 28.6942 13.558C28.6836 13.5895 28.6733 13.6105 28.6417 13.6209C28.5683 13.6524 28.4949 13.6 28.4949 13.5266C28.5052 12.9078 28.7257 12.2995 28.5683 11.6911C28.3375 10.8626 27.7706 10.1389 27.7288 9.25793C27.7076 8.79646 27.8231 8.34548 27.9177 7.89449C27.5817 7.1918 27.4243 6.3842 27.6026 5.61859C27.6342 5.52419 27.6448 5.52419 27.6972 5.59759C28.0227 6.06958 28.4528 6.54153 28.4528 7.16031C28.4109 8.04131 27.9281 8.92231 28.2535 9.80332C28.5159 10.5899 29.0824 11.3241 29.009 12.1946Z"
                        fill="white"
                      />
                      <path
                        d="M31.7792 9.15276C31.7582 10.3064 30.7507 11.2294 30.8662 12.4041C30.8662 12.855 30.9815 13.3165 30.929 13.7675C30.8556 14.166 30.4043 14.229 30.0792 14.3234C29.8902 14.4073 29.6803 14.187 29.7328 13.9982C29.7328 12.6348 29.7328 11.2609 29.7328 9.89742C29.7537 9.33107 29.8902 8.73323 30.2784 8.30324C30.5199 8.02005 30.7716 7.73689 31.034 7.4537C31.0864 7.39076 31.118 7.31736 31.1077 7.24393C31.0864 6.99223 31.034 6.77197 31.1495 6.4783C31.3279 6.11122 31.559 5.89097 31.8001 5.64975C31.8422 5.60781 31.905 5.62878 31.9157 5.68121C32.0837 6.42587 31.9157 7.23345 31.5693 7.90468C31.6533 8.30324 31.7792 8.72274 31.7792 9.15276Z"
                        fill="white"
                      />
                      <path
                        d="M45.0348 4.93668C43.6075 5.33521 42.9463 5.81765 42.3797 6.26863C42.3797 6.26863 43.6706 5.81765 45.528 5.6184C50.7966 5.04156 51.1009 7.00281 56.9991 4.72691C57.1984 4.69546 57.2509 4.85276 57.1984 4.93668C56.4114 6.30012 55.5403 7.81039 52.2449 7.94672C48.6556 8.09358 46.7876 6.65671 43.4185 7.08672C41.2672 7.3594 40.1547 8.03064 39.5354 8.43968C46.8819 7.03427 46.2732 10.2646 53.4727 8.54456C53.5567 8.52356 53.6513 8.50259 53.7353 8.51308C53.924 8.53405 53.9977 8.76481 53.8821 8.89067C53.8297 8.95358 53.7562 9.01652 53.7038 9.07943C52.7593 10.0968 51.7621 11.2085 48.4036 10.9568C44.4576 10.6631 44.2059 8.21943 36.6704 10.0863C43.9748 10.0548 43.8489 12.4461 49.3484 11.7329C49.5373 11.7119 49.6526 11.9427 49.5058 12.0685C49.4218 12.1419 49.3272 12.2049 49.2537 12.2678C48.4248 12.9181 47.2177 13.7151 44.9508 13.2537C40.2281 12.2678 40.8265 10.317 34.7499 11.3868C39.4829 11.5127 39.1577 13.3481 44.0169 13.7991C44.0169 13.7991 44.0169 13.7991 44.0273 13.7991C44.2896 13.8305 44.3633 14.1766 44.1428 14.3235C43.9748 14.4388 43.7858 14.5227 43.6075 14.5961C40.0604 15.9701 38.4125 11.5232 34.0571 12.5195C37.1742 12.7922 36.9221 13.841 39.7349 14.6066C40.0391 14.6905 40.0079 15.0996 39.6718 15.131C36.3346 15.4667 36.6285 13.2222 34.5818 13.1383C34.0362 13.1173 33.5324 13.411 33.2594 13.8935C32.4514 15.2988 32.7766 16.6308 32.7241 17.3545C32.9131 18.1096 33.1967 18.8439 33.207 19.6408C33.2176 20.1967 33.1651 20.7736 32.9865 21.3084C32.6507 22.4201 32.315 23.5321 31.9686 24.6543C31.8952 24.8849 31.9055 25.1366 31.9895 25.3569C32.1154 25.6926 32.2416 26.0177 32.294 26.3743C32.4199 26.972 32.3359 27.5908 32.126 28.1676C31.6853 29.2479 31.2443 30.3281 30.8036 31.419C30.7196 31.6181 30.6568 31.8281 30.5097 31.9958C30.2895 32.0378 30.3104 31.7547 30.3314 31.6181C30.7618 27.5802 31.1709 23.5423 31.5907 19.5045L31.9267 18.5396C31.2655 19.1059 30.9716 19.8925 30.5413 20.5953C30.4888 20.763 30.237 20.7944 30.1846 20.6059C30.2264 19.903 30.3208 19.2005 30.342 18.4977C30.4048 17.7845 30.3945 17.0608 30.6359 16.3791C30.9086 15.6869 31.4333 15.131 31.8427 14.5332C32.5142 13.6732 33.018 12.6978 33.3644 11.67C33.5743 11.0407 34.0153 10.4848 34.5818 10.1387C36.5445 8.90115 37.6883 7.83136 39.546 6.42597C41.2566 5.13593 42.579 4.12907 43.3348 3.82494C46.7876 2.40904 53.7247 3.92982 59.6649 0.0702289C59.8117 -0.0136828 60.0006 0.154112 59.8854 0.395333C59.3291 1.80075 58.6679 2.70272 57.0935 3.47884C52.5597 5.71279 47.3542 4.28641 45.0348 4.93668Z"
                        fill="white"
                      />
                      <path
                        d="M31.2654 7.3596C31.2654 7.3596 30.8769 6.67788 29.9324 6.59396C29.2187 6.53105 28.8936 6.77227 28.8936 6.77227C28.8936 6.77227 29.754 6.52057 30.4258 7.11838C31.0974 7.71619 30.7301 8.23011 30.7301 8.23011C30.7301 8.23011 31.4647 7.8001 31.2654 7.3596Z"
                        fill="white"
                      />
                      <path
                        d="M31.2234 7.26508C31.2234 7.26508 30.7302 6.7407 29.7227 6.69873C29.7227 6.69873 30.3208 6.84555 30.3945 7.17069C30.5203 7.7895 29.9747 8.61804 29.8697 9.0166C29.7857 9.37319 31.2234 7.26508 31.2234 7.26508Z"
                        fill="white"
                      />
                    </svg>
                  </i>
                  <i
                    data-v-56c03d90=""
                    data-v-34700754=""
                    className="icon hover:text-red-500 uicIcon text-white opacity-[0.8] md:opacity-0"
                  >
                    <svg
                      data-v-82c499f6=""
                      width={91}
                      height={21}
                      viewBox="0 0 91 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        data-v-82c499f6=""
                        d="M47.8634 16.1741C46.4974 16.3996 45.1145 16.5041 43.7305 16.4867C41.1347 16.4867 38.3511 14.7773 38.3511 10.0045V7.21105C38.3511 2.15027 41.2692 0.710917 43.9145 0.710917C45.2366 0.699117 46.5573 0.7966 47.8634 1.00234C48.0474 1.02368 48.2175 1.10542 48.2175 1.3151V2.35638C48.2175 2.50209 48.136 2.56609 47.9482 2.56609H47.8668C46.6413 2.463 45.6854 2.42035 43.918 2.42035C41.988 2.42035 40.2421 3.46166 40.2421 7.21105V10.0045C40.2421 13.4448 41.8005 14.7988 43.7339 14.7988C44.9984 14.7988 45.8588 14.717 46.3474 14.6742V8.71438C46.3431 8.66178 46.3494 8.60881 46.3664 8.55878C46.383 8.50876 46.4099 8.46267 46.4449 8.42342C46.4802 8.38413 46.5229 8.35248 46.5708 8.33042C46.6187 8.30833 46.6703 8.29628 46.7228 8.29502H47.8456C47.9522 8.30051 48.0529 8.34722 48.126 8.42539C48.1994 8.50353 48.2395 8.6071 48.2387 8.71438V15.7156C48.2418 15.8247 48.2054 15.9313 48.1366 16.0156C48.0675 16.0999 47.9703 16.1561 47.8634 16.1741Z"
                        fill="#B0ACAB"
                      />
                      <path
                        data-v-82c499f6=""
                        d="M55.9801 6.33666C55.0132 6.29817 54.0452 6.36851 53.0939 6.54633V15.9252C53.099 16.0269 53.0652 16.1266 52.9992 16.2037C52.9333 16.2811 52.8407 16.3303 52.7397 16.3409H51.6596C51.555 16.3354 51.4569 16.2886 51.3864 16.2109C51.3161 16.1329 51.2794 16.0303 51.2843 15.9252V5.79644C51.2903 5.69179 51.3279 5.59142 51.3915 5.50839C51.4555 5.42537 51.5426 5.36351 51.6419 5.33089C52.8246 4.80847 54.2591 4.74805 55.9801 4.74805C56.2527 4.74805 56.4193 4.76936 56.4193 5.06078V6.01681C56.4193 6.2336 56.3769 6.33666 55.9801 6.33666Z"
                        fill="#B0ACAB"
                      />
                      <path
                        data-v-82c499f6=""
                        d="M62.8716 16.4866C59.8191 16.4866 58.2679 14.4647 58.2679 11.4011V9.81601C58.2679 6.75254 59.826 4.73389 62.8716 4.73389C65.9172 4.73389 67.4756 6.75254 67.4756 9.81601V11.4011C67.4756 14.4647 65.9066 16.4866 62.8716 16.4866ZM65.6764 9.81601C65.6764 7.68365 64.8231 6.33672 62.8716 6.33672C60.9204 6.33672 60.088 7.67299 60.088 9.81601V11.4011C60.088 13.5333 60.9204 14.8838 62.8716 14.8838C64.8231 14.8838 65.6764 13.5476 65.6764 11.4011V9.81601Z"
                        fill="#B0ACAB"
                      />
                      <path
                        data-v-82c499f6=""
                        d="M74.4024 16.4864H74.2043C72.7875 16.4864 69.9263 15.6939 69.9263 11.5892V5.29521C69.9217 5.24218 69.9283 5.18881 69.9455 5.1385C69.9627 5.08816 69.9902 5.04199 70.0263 5.00288C70.0622 4.96379 70.1058 4.93262 70.1545 4.91137C70.2033 4.89011 70.2557 4.87923 70.3085 4.8794H71.3889C71.4411 4.8802 71.493 4.8918 71.5406 4.91348C71.5885 4.93517 71.6312 4.96648 71.6664 5.00548C71.7017 5.04448 71.7284 5.09033 71.7453 5.14016C71.7622 5.19001 71.7685 5.24278 71.7642 5.29521V11.5892C71.7642 14.0771 72.8266 14.8836 74.2149 14.8836H74.4024C75.7908 14.8836 76.8531 14.0911 76.8531 11.5892V5.29521C76.8488 5.24307 76.8551 5.19059 76.8717 5.14099C76.8884 5.09139 76.9147 5.04571 76.9497 5.00676C76.9844 4.96782 77.0268 4.93642 77.0742 4.91454C77.1215 4.89262 77.1728 4.88068 77.225 4.8794H78.3051C78.3575 4.8802 78.4092 4.8918 78.457 4.91348C78.5046 4.93517 78.5476 4.96648 78.5829 5.00548C78.6179 5.04448 78.6448 5.09033 78.6618 5.14016C78.6784 5.19001 78.685 5.24278 78.6804 5.29521V11.5892C78.6804 15.6939 75.812 16.4864 74.4024 16.4864Z"
                        fill="#B0ACAB"
                      />
                      <path
                        data-v-82c499f6=""
                        d="M85.7597 16.4868C84.9451 16.4759 84.1328 16.3999 83.3303 16.2593V20.0301C83.3303 20.0821 83.3202 20.1332 83.3004 20.1812C83.2807 20.2289 83.2517 20.2724 83.2153 20.3092C83.1786 20.3458 83.1353 20.3749 83.0877 20.3946C83.0398 20.4143 82.9888 20.4246 82.9372 20.4246H81.8748C81.8241 20.4241 81.7739 20.4135 81.7275 20.3935C81.681 20.3732 81.6392 20.3438 81.6042 20.3069C81.5689 20.2703 81.5417 20.2266 81.5239 20.1792C81.5058 20.1318 81.4975 20.0809 81.4995 20.0301V5.68647C81.4995 5.41639 81.5632 5.29199 81.9351 5.21025C83.1866 4.90572 84.4686 4.74478 85.7563 4.73047C88.8512 4.73047 90.2857 6.74909 90.2857 9.87656V11.3728C90.2892 14.6531 88.791 16.4868 85.7597 16.4868ZM88.4581 9.88011C88.4581 7.69089 87.8173 6.27642 85.7597 6.27642C84.9457 6.28116 84.1334 6.35007 83.3303 6.48256V14.7348C84.1337 14.8671 84.9457 14.9374 85.7597 14.9445C87.7961 14.9445 88.4581 13.6117 88.4581 11.3905V9.88011Z"
                        fill="#B0ACAB"
                      />
                      <path
                        data-v-82c499f6=""
                        d="M11.7163 16.3161C10.7813 16.4619 8.17466 16.6467 7.27175 16.6467C3.263 16.6467 0.543091 15.6373 0.543091 10.5838V1.37196C0.543951 1.31859 0.555423 1.26596 0.576928 1.21711C0.598433 1.16828 0.629109 1.1242 0.667817 1.08748C0.706239 1.05074 0.75183 1.02209 0.801434 1.0032C0.851324 0.984315 0.904371 0.975573 0.957416 0.977459H4.3431C4.39615 0.975087 4.44948 0.983487 4.49937 1.0022C4.54926 1.02091 4.59514 1.04951 4.63385 1.08634C4.67227 1.12317 4.70324 1.16745 4.72446 1.21651C4.74567 1.26559 4.75685 1.31845 4.75743 1.37196V10.5838C4.75743 12.4602 5.38078 13.0715 6.85743 13.0715C7.52407 13.0694 8.18986 13.0266 8.85134 12.9436V1.37196C8.85163 1.31845 8.86281 1.26559 8.88403 1.21651C8.90524 1.16745 8.93621 1.12317 8.97492 1.08634C9.01363 1.04951 9.05922 1.02091 9.10911 1.0022C9.159 0.983487 9.21233 0.975087 9.26566 0.977459H12.6298C12.7397 0.972602 12.8466 1.01129 12.9283 1.08508C13.0098 1.15891 13.0591 1.26196 13.0654 1.37196V14.7099C13.0654 15.8756 12.7113 16.1704 11.7163 16.3161Z"
                        fill="white"
                      />
                      <path
                        data-v-82c499f6=""
                        d="M19.5853 16.4618H16.1784C16.0694 16.4592 15.9659 16.4138 15.8896 16.3353C15.8137 16.257 15.7709 16.1518 15.7709 16.0427V1.37193C15.7721 1.31918 15.7833 1.26716 15.8042 1.21879C15.8251 1.17042 15.8555 1.12665 15.8934 1.09002C15.9312 1.05339 15.9757 1.02459 16.0247 1.00528C16.0734 0.985966 16.1259 0.976509 16.1784 0.977451H19.5853C19.6383 0.975051 19.6917 0.983452 19.7415 1.00217C19.7914 1.02088 19.8373 1.04951 19.8757 1.08633C19.9144 1.12313 19.9454 1.16742 19.9666 1.2165C19.9878 1.26556 19.999 1.31844 19.9996 1.37193V16.0427C19.9999 16.0975 19.9896 16.1518 19.9689 16.2027C19.9483 16.2535 19.9179 16.2998 19.8795 16.339C19.8407 16.3778 19.7952 16.4087 19.7444 16.4298C19.6939 16.451 19.6398 16.4618 19.5853 16.4618Z"
                        fill="white"
                      />
                      <path
                        data-v-82c499f6=""
                        d="M31.6294 16.2734C30.6846 16.5436 29.7043 16.6696 28.7219 16.6465C24.9007 16.6465 22.3262 14.564 22.3262 9.79103V7.65867C22.3262 2.8715 24.9007 0.78891 28.7219 0.78891C29.7043 0.76774 30.684 0.893507 31.6294 1.16207C31.9623 1.26869 32.0864 1.32909 32.0864 1.62054V4.28954C32.0864 4.55962 31.9623 4.68402 31.7323 4.68402H31.6684C30.7032 4.57085 29.7327 4.50917 28.7609 4.49922C27.6384 4.49922 26.636 4.99678 26.636 7.64444V9.7768C26.636 12.4031 27.6347 12.9256 28.7609 12.9256C29.7327 12.9146 30.7032 12.8518 31.6684 12.7372H31.7074C31.9554 12.7372 32.0615 12.8616 32.0615 13.1317V15.8148C32.0864 16.0851 31.9623 16.1702 31.6294 16.2734Z"
                        fill="white"
                      />
                    </svg>
                  </i>
                </a>
              </div>
              <div data-v-34700754="" className="w-full md:!w-auto">
                <a
                  data-v-34700754=""
                  className="group flex items-center justify-between border-[1px] border-solid transition duration-300 ease-in-out hover:border-[#00A795] border-[#FFFFFF33] rounded-12 mb-[16px] py-1 xs:py-0"
                  href="https://yandex.com/maps/-/CCUZF6Eq1D"
                  target="_blank"
                  aria-label="link"
                >
                  <div data-v-34700754="" className="flex items-center pl-3">
                    <i
                      data-v-56c03d90=""
                      data-v-34700754=""
                      className="icon hover:text-red-500 text-[#FFFFFF99] sm:mr-[10px] mr-0 lg:!ml-[19.5px] lg:!mr-[11.5px]"
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.29292 5.2071L9.79292 8.7071C9.91541 8.82918 10.0674 8.91744 10.2342 8.96328C10.4009 9.00913 10.5767 9.01099 10.7444 8.9687C10.9121 8.9264 11.0659 8.84138 11.191 8.72193C11.316 8.60248 11.408 8.45267 11.4579 8.2871L12.9579 3.2871C13.0098 3.11418 13.0138 2.93045 12.9696 2.75541C12.9255 2.58037 12.8348 2.42054 12.7071 2.29289C12.5795 2.16524 12.4197 2.07453 12.2446 2.03037C12.0696 1.98622 11.8858 1.99027 11.7129 2.0421L6.71292 3.5421C6.54773 3.59251 6.39835 3.68473 6.27926 3.80982C6.16017 3.93491 6.07539 4.08863 6.03315 4.2561C5.99091 4.42357 5.99262 4.59911 6.03813 4.76572C6.08364 4.93233 6.17141 5.08436 6.29292 5.2071Z"
                          fill="white"
                          fillOpacity="0.6"
                        />
                        <path
                          d="M4.96009 8.15717C3.25209 9.65817 3.00809 12.3252 4.41209 14.1252C5.82609 15.9372 8.40209 16.2322 10.1681 14.7832L15.0481 10.7792C15.2669 10.5994 15.5197 10.4655 15.7914 10.3854C16.063 10.3053 16.3481 10.2806 16.6294 10.3129C16.9108 10.3452 17.1828 10.4337 17.4293 10.5733C17.6758 10.7128 17.8916 10.9005 18.0641 11.1252C18.8131 12.0852 18.6811 13.5252 17.7711 14.3252L16.7281 15.2412C16.3191 15.6012 16.2721 16.2312 16.6221 16.6512C16.9721 17.0712 17.5881 17.1192 17.9971 16.7592L19.0401 15.8432C20.7481 14.3412 20.9931 11.6772 19.5871 9.87517C18.1751 8.06517 15.5951 7.76917 13.8311 9.21717L8.95109 13.2212C8.73236 13.4012 8.4796 13.5354 8.2079 13.6156C7.9362 13.6959 7.65112 13.7206 7.36965 13.6883C7.08819 13.656 6.81611 13.5674 6.56965 13.4277C6.32318 13.288 6.10737 13.1001 5.93509 12.8752C5.18809 11.9172 5.31909 10.4752 6.22809 9.67517L6.77009 9.26017C7.17909 8.90017 7.23009 8.27017 6.88009 7.85017C6.79787 7.75061 6.69649 7.66858 6.58196 7.60895C6.46743 7.54932 6.34209 7.51331 6.21338 7.50305C6.08466 7.49279 5.9552 7.50849 5.83267 7.54922C5.71014 7.58996 5.59705 7.65489 5.50009 7.74017L4.96009 8.15717Z"
                          fill="white"
                          fillOpacity="0.6"
                        />
                        <path
                          d="M10 19C10 18.2044 10.3161 17.4413 10.8787 16.8787C11.4413 16.3161 12.2044 16 13 16C13.7956 16 14.5587 16.3161 15.1213 16.8787C15.6839 17.4413 16 18.2044 16 19C16 19.7956 15.6839 20.5587 15.1213 21.1213C14.5587 21.6839 13.7956 22 13 22C12.2044 22 11.4413 21.6839 10.8787 21.1213C10.3161 20.5587 10 19.7956 10 19Z"
                          fill="white"
                          fillOpacity="0.6"
                        />
                      </svg>
                    </i>
                    <h3
                      data-v-34700754=""
                      className="text-[#FFFFFF] flex-wrap text-base font-medium opacity-[0.6] text-[13px] lg:!text-[16px] leading-[19px]"
                    >
                      Tashkent city. Shayxontoxur district. Adkham Rakhmat
                      street - 15/1
                    </h3>
                  </div>
                  <div
                    data-v-34700754=""
                    className="whitespace-nowrap lg:!px-2.5 px-2 sm:px-2 xs:py-2 lg:!pt-[3px] lg:!pb-[6px] font-normal group-hover:bg-[#00A795] transition duration-300 ease-in-out bg-[#FFFFFF29] text-white rounded-6 lg:!text-[16px] xs:mb-[6px] xs:ml-[14px] xs:my-[6px] ml-[14px] mr-[6px] xs:text-[13px]"
                  >
                    Map
                  </div>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</div>

  )
}

export default Blog