import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Services = () => {
      useEffect(() => {
        AOS.init();
      }, [])
  return (
 <div id="app" data-v-app="">
  <div>
    {/**/}
    <div className="">
      <div
        data-v-1cc107bd=""
        className="bg-[#1E1E20] h-full overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
      <Navbar/>
        <main data-v-1cc107bd="" className="">
          <div data-v-1cc107bd="" className="min-h-[100vh]">
            {/**/}
            <div className="container !pb-12 md:pb-36 md:pt-[140px] sm:pt-28 pt-24">
              <div className="flex flex-col items-center gap-3 mt-8 mb-8 md:items-start md:mb-11">
                <div
                  data-aos-duration={600}
                  className="section-title_green aos-init aos-animate"
                  data-aos="fade-right"
                >
                  IS THERE A PROBLEM?
                </div>
                <div
                  data-aos-duration={700}
                  className="section-title_white text-white font-[700] :!text-[28px] md:!text-[36px] text-center md:text-left aos-init aos-animate"
                  data-aos="fade-right"
                >
                  What solution do you want?
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <a
                  href="/brief/websites"
                  className=" box-shadowww h-full p-3 transition duration-300 cursor-pointer services-card bg-vacancy-card-footer-bg rounded-8 xs:rounded-12 sm:py-4 sm:px-4 lg:py-8 lg:px-8 aos-init aos-animate "
                  data-aos-duration={500}
                  data-aos="fade-right"
                >
                  <div className="max-w-[380px]">
                    <h3 className="text-white text-base sm:text-[28px] lg:text-[38px] font-bold leading-120 mb-1 sm:mb-3">
                      Web Development
                    </h3>
                    <p className="text-gray font-sans font-normal text-[14px] sm:text-sm lg:text-base leading-130 lg:leading-140 xs:leading-140 tracking-[0.2px] line-clamp-3 text-[#e0e0e099]">
                      We develop websites with the high quality, from corporate
                      websites to web applications
                    </p>
                  </div>
                </a>
                <a
                  href="/brief/mobile-application"
                  className=" box-shadowww h-full p-3 transition duration-300 cursor-pointer services-card bg-vacancy-card-footer-bg rounded-8 xs:rounded-12 sm:py-4 sm:px-4 lg:py-8 lg:px-8 aos-init aos-animate "
                  data-aos-duration={600}
                  data-aos="fade-right"
                >
                  <div className="max-w-[380px]">
                    <h3 className="text-white text-base sm:text-[28px] lg:text-[38px] font-bold leading-120 mb-1 sm:mb-3">
                      Mobile apps
                    </h3>
                    <p className="text-gray font-sans font-normal text-[14px] sm:text-sm lg:text-base leading-130 lg:leading-140 xs:leading-140 tracking-[0.2px] line-clamp-3 text-[#e0e0e099]">
                      Development and technical support of mobile applications
                      of any complexity
                    </p>
                  </div>
                </a>
                <a
                  href="/brief/design"
                  className=" box-shadowww h-full p-3 transition duration-300 cursor-pointer services-card bg-vacancy-card-footer-bg rounded-8 xs:rounded-12 sm:py-4 sm:px-4 lg:py-8 lg:px-8 aos-init aos-animate "
                  data-aos-duration={700}
                  data-aos="fade-right"
                >
                  <div className="max-w-[380px]">
                    <h3 className="text-white text-base sm:text-[28px] lg:text-[38px] font-bold leading-120 mb-1 sm:mb-3">
                      UI&amp;UX
                    </h3>
                    <p className="text-gray font-sans font-normal text-[14px] sm:text-sm lg:text-base leading-130 lg:leading-140 xs:leading-140 tracking-[0.2px] line-clamp-3 text-[#e0e0e099]">
                      Developing a project MindMap and designing it with the
                      optimal solution based on its architecture
                    </p>
                  </div>
                </a>
                <a
                  href="/brief/media-production"
                  className=" box-shadowww h-full p-3 transition duration-300 cursor-pointer services-card bg-vacancy-card-footer-bg rounded-8 xs:rounded-12 sm:py-4 sm:px-4 lg:py-8 lg:px-8 aos-init aos-animate "
                  data-aos-duration={800}
                  data-aos="fade-right"
                >
                  <div className="max-w-[380px]">
                    <h3 className="text-white text-base sm:text-[28px] lg:text-[38px] font-bold leading-120 mb-1 sm:mb-3">
                      Media production
                    </h3>
                    <p className="text-gray font-sans font-normal text-[14px] sm:text-sm lg:text-base leading-130 lg:leading-140 xs:leading-140 tracking-[0.2px] line-clamp-3 text-[#e0e0e099]">
                      Professional preparation of 2D / 3D animation, project
                      presentation, advertising, video and other media
                      resources.
                    </p>
                  </div>
                </a>
                <a
                  href="/brief/crm-systems"
                  className=" box-shadowww h-full p-3 transition duration-300 cursor-pointer services-card bg-vacancy-card-footer-bg rounded-8 xs:rounded-12 sm:py-4 sm:px-4 lg:py-8 lg:px-8 aos-init aos-animate "
                  data-aos-duration={900}
                  data-aos="fade-right"
                >
                  <div className="max-w-[380px]">
                    <h3 className="text-white text-base sm:text-[28px] lg:text-[38px] font-bold leading-120 mb-1 sm:mb-3">
                      CRM Systems
                    </h3>
                    <p className="text-gray font-sans font-normal text-[14px] sm:text-sm lg:text-base leading-130 lg:leading-140 xs:leading-140 tracking-[0.2px] line-clamp-3 text-[#e0e0e099]">
                      Automation of business and processes, development of
                      electronic management systems that reduce paper-work by
                      100%
                    </p>
                  </div>
                </a>
                <a
                  href="/brief/logo-branding"
                  className=" box-shadowww h-full p-3 transition duration-300 cursor-pointer services-card bg-vacancy-card-footer-bg rounded-8 xs:rounded-12 sm:py-4 sm:px-4 lg:py-8 lg:px-8 aos-init aos-animate "
                  data-aos-duration={1000}
                  data-aos="fade-right"
                >
                  <div className="max-w-[380px]">
                    <h3 className="text-white text-base sm:text-[28px] lg:text-[38px] font-bold leading-120 mb-1 sm:mb-3">
                      Branding
                    </h3>
                    <p className="text-gray font-sans font-normal text-[14px] sm:text-sm lg:text-base leading-130 lg:leading-140 xs:leading-140 tracking-[0.2px] line-clamp-3 text-[#e0e0e099]">
                      Developing a creative and unique logo for your project and
                      create its branding guidelines
                    </p>
                  </div>
                </a>
                <a
                  href="/brief/game"
                  className=" box-shadowww h-full p-3 transition duration-300 cursor-pointer services-card bg-vacancy-card-footer-bg rounded-8 xs:rounded-12 sm:py-4 sm:px-4 lg:py-8 lg:px-8 aos-init aos-animate "
                  data-aos-duration={1100}
                  data-aos="fade-right"
                >
                  <div className="max-w-[380px]">
                    <h3 className="text-white text-base sm:text-[28px] lg:text-[38px] font-bold leading-120 mb-1 sm:mb-3">
                      Production of games
                    </h3>
                    <p className="text-gray font-sans font-normal text-[14px] sm:text-sm lg:text-base leading-130 lg:leading-140 xs:leading-140 tracking-[0.2px] line-clamp-3 text-[#e0e0e099]">
                      Development of games of any subject and complexity,
                      corresponding to the international level.
                    </p>
                  </div>
                </a>
                <a
                  href="/brief/ai"
                  className=" box-shadowww h-full p-3 transition duration-300 cursor-pointer services-card bg-vacancy-card-footer-bg rounded-8 xs:rounded-12 sm:py-4 sm:px-4 lg:py-8 lg:px-8 aos-init aos-animate "
                  data-aos-duration={1200}
                  data-aos="fade-right"
                >
                  <div className="max-w-[380px]">
                    <h3 className="text-white text-base sm:text-[28px] lg:text-[38px] font-bold leading-120 mb-1 sm:mb-3">
                      Artificial intelligence
                    </h3>
                    <p className="text-gray font-sans font-normal text-[14px] sm:text-sm lg:text-base leading-130 lg:leading-140 xs:leading-140 tracking-[0.2px] line-clamp-3 text-[#e0e0e099]">
                      Development of intelligent computer systems with the
                      capabilities of human intelligence.
                    </p>
                  </div>
                </a>
                <a
                  href="/brief/cybersecurity"
                  className=" box-shadowww h-full p-3 transition duration-300 cursor-pointer services-card bg-vacancy-card-footer-bg rounded-8 xs:rounded-12 sm:py-4 sm:px-4 lg:py-8 lg:px-8 aos-init aos-animate "
                  data-aos-duration={1300}
                  data-aos="fade-right"
                >
                  <div className="max-w-[380px]">
                    <h3 className="text-white text-base sm:text-[28px] lg:text-[38px] font-bold leading-120 mb-1 sm:mb-3">
                      Cybersecurity
                    </h3>
                    <p className="text-gray font-sans font-normal text-[14px] sm:text-sm lg:text-base leading-130 lg:leading-140 xs:leading-140 tracking-[0.2px] line-clamp-3 text-[#e0e0e099]">
                      Find and fix vulnerabilities in networks, devices, code,
                      and data.
                    </p>
                  </div>
                </a>
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
                    aria-current="page"
                    href="/brief"
                    className="router-link-active router-link-exact-active cursor-pointer text-white text-opacity-60 hover:text-opacity-100 transition duration-300 ease-in-out text-base uppercase xs:text-[13px] font-semibold lg:!text-base"
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
                    href="/blog"
                    className="cursor-pointer text-white text-opacity-60 hover:text-opacity-100 transition duration-300 ease-in-out text-base uppercase xs:text-[13px] font-semibold lg:!text-base"
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
                  {" "}
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
                      />{" "}
                      <path
                        data-v-82c499f6=""
                        d="M55.9801 6.33666C55.0132 6.29817 54.0452 6.36851 53.0939 6.54633V15.9252C53.099 16.0269 53.0652 16.1266 52.9992 16.2037C52.9333 16.2811 52.8407 16.3303 52.7397 16.3409H51.6596C51.555 16.3354 51.4569 16.2886 51.3864 16.2109C51.3161 16.1329 51.2794 16.0303 51.2843 15.9252V5.79644C51.2903 5.69179 51.3279 5.59142 51.3915 5.50839C51.4555 5.42537 51.5426 5.36351 51.6419 5.33089C52.8246 4.80847 54.2591 4.74805 55.9801 4.74805C56.2527 4.74805 56.4193 4.76936 56.4193 5.06078V6.01681C56.4193 6.2336 56.3769 6.33666 55.9801 6.33666Z"
                        fill="#B0ACAB"
                      />{" "}
                      <path
                        data-v-82c499f6=""
                        d="M62.8716 16.4866C59.8191 16.4866 58.2679 14.4647 58.2679 11.4011V9.81601C58.2679 6.75254 59.826 4.73389 62.8716 4.73389C65.9172 4.73389 67.4756 6.75254 67.4756 9.81601V11.4011C67.4756 14.4647 65.9066 16.4866 62.8716 16.4866ZM65.6764 9.81601C65.6764 7.68365 64.8231 6.33672 62.8716 6.33672C60.9204 6.33672 60.088 7.67299 60.088 9.81601V11.4011C60.088 13.5333 60.9204 14.8838 62.8716 14.8838C64.8231 14.8838 65.6764 13.5476 65.6764 11.4011V9.81601Z"
                        fill="#B0ACAB"
                      />{" "}
                      <path
                        data-v-82c499f6=""
                        d="M74.4024 16.4864H74.2043C72.7875 16.4864 69.9263 15.6939 69.9263 11.5892V5.29521C69.9217 5.24218 69.9283 5.18881 69.9455 5.1385C69.9627 5.08816 69.9902 5.04199 70.0263 5.00288C70.0622 4.96379 70.1058 4.93262 70.1545 4.91137C70.2033 4.89011 70.2557 4.87923 70.3085 4.8794H71.3889C71.4411 4.8802 71.493 4.8918 71.5406 4.91348C71.5885 4.93517 71.6312 4.96648 71.6664 5.00548C71.7017 5.04448 71.7284 5.09033 71.7453 5.14016C71.7622 5.19001 71.7685 5.24278 71.7642 5.29521V11.5892C71.7642 14.0771 72.8266 14.8836 74.2149 14.8836H74.4024C75.7908 14.8836 76.8531 14.0911 76.8531 11.5892V5.29521C76.8488 5.24307 76.8551 5.19059 76.8717 5.14099C76.8884 5.09139 76.9147 5.04571 76.9497 5.00676C76.9844 4.96782 77.0268 4.93642 77.0742 4.91454C77.1215 4.89262 77.1728 4.88068 77.225 4.8794H78.3051C78.3575 4.8802 78.4092 4.8918 78.457 4.91348C78.5046 4.93517 78.5476 4.96648 78.5829 5.00548C78.6179 5.04448 78.6448 5.09033 78.6618 5.14016C78.6784 5.19001 78.685 5.24278 78.6804 5.29521V11.5892C78.6804 15.6939 75.812 16.4864 74.4024 16.4864Z"
                        fill="#B0ACAB"
                      />{" "}
                      <path
                        data-v-82c499f6=""
                        d="M85.7597 16.4868C84.9451 16.4759 84.1328 16.3999 83.3303 16.2593V20.0301C83.3303 20.0821 83.3202 20.1332 83.3004 20.1812C83.2807 20.2289 83.2517 20.2724 83.2153 20.3092C83.1786 20.3458 83.1353 20.3749 83.0877 20.3946C83.0398 20.4143 82.9888 20.4246 82.9372 20.4246H81.8748C81.8241 20.4241 81.7739 20.4135 81.7275 20.3935C81.681 20.3732 81.6392 20.3438 81.6042 20.3069C81.5689 20.2703 81.5417 20.2266 81.5239 20.1792C81.5058 20.1318 81.4975 20.0809 81.4995 20.0301V5.68647C81.4995 5.41639 81.5632 5.29199 81.9351 5.21025C83.1866 4.90572 84.4686 4.74478 85.7563 4.73047C88.8512 4.73047 90.2857 6.74909 90.2857 9.87656V11.3728C90.2892 14.6531 88.791 16.4868 85.7597 16.4868ZM88.4581 9.88011C88.4581 7.69089 87.8173 6.27642 85.7597 6.27642C84.9457 6.28116 84.1334 6.35007 83.3303 6.48256V14.7348C84.1337 14.8671 84.9457 14.9374 85.7597 14.9445C87.7961 14.9445 88.4581 13.6117 88.4581 11.3905V9.88011Z"
                        fill="#B0ACAB"
                      />{" "}
                      <path
                        data-v-82c499f6=""
                        d="M11.7163 16.3161C10.7813 16.4619 8.17466 16.6467 7.27175 16.6467C3.263 16.6467 0.543091 15.6373 0.543091 10.5838V1.37196C0.543951 1.31859 0.555423 1.26596 0.576928 1.21711C0.598433 1.16828 0.629109 1.1242 0.667817 1.08748C0.706239 1.05074 0.75183 1.02209 0.801434 1.0032C0.851324 0.984315 0.904371 0.975573 0.957416 0.977459H4.3431C4.39615 0.975087 4.44948 0.983487 4.49937 1.0022C4.54926 1.02091 4.59514 1.04951 4.63385 1.08634C4.67227 1.12317 4.70324 1.16745 4.72446 1.21651C4.74567 1.26559 4.75685 1.31845 4.75743 1.37196V10.5838C4.75743 12.4602 5.38078 13.0715 6.85743 13.0715C7.52407 13.0694 8.18986 13.0266 8.85134 12.9436V1.37196C8.85163 1.31845 8.86281 1.26559 8.88403 1.21651C8.90524 1.16745 8.93621 1.12317 8.97492 1.08634C9.01363 1.04951 9.05922 1.02091 9.10911 1.0022C9.159 0.983487 9.21233 0.975087 9.26566 0.977459H12.6298C12.7397 0.972602 12.8466 1.01129 12.9283 1.08508C13.0098 1.15891 13.0591 1.26196 13.0654 1.37196V14.7099C13.0654 15.8756 12.7113 16.1704 11.7163 16.3161Z"
                        fill="white"
                      />{" "}
                      <path
                        data-v-82c499f6=""
                        d="M19.5853 16.4618H16.1784C16.0694 16.4592 15.9659 16.4138 15.8896 16.3353C15.8137 16.257 15.7709 16.1518 15.7709 16.0427V1.37193C15.7721 1.31918 15.7833 1.26716 15.8042 1.21879C15.8251 1.17042 15.8555 1.12665 15.8934 1.09002C15.9312 1.05339 15.9757 1.02459 16.0247 1.00528C16.0734 0.985966 16.1259 0.976509 16.1784 0.977451H19.5853C19.6383 0.975051 19.6917 0.983452 19.7415 1.00217C19.7914 1.02088 19.8373 1.04951 19.8757 1.08633C19.9144 1.12313 19.9454 1.16742 19.9666 1.2165C19.9878 1.26556 19.999 1.31844 19.9996 1.37193V16.0427C19.9999 16.0975 19.9896 16.1518 19.9689 16.2027C19.9483 16.2535 19.9179 16.2998 19.8795 16.339C19.8407 16.3778 19.7952 16.4087 19.7444 16.4298C19.6939 16.451 19.6398 16.4618 19.5853 16.4618Z"
                        fill="white"
                      />{" "}
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

export default Services