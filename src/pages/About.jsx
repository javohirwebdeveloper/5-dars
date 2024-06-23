import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import Swiper from 'swiper';

const About = () => {
  
  useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div id="app" data-v-app="">
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
            <div data-v-7179bf4a="" className="text-[#fff]">
              <div data-v-7179bf4a="" className="showrell-section pt-[129px]">
                <div data-v-7179bf4a="" className="container">
                  <div
                    data-v-f2fa45b4=""
                    data-v-7179bf4a=""
                    className="max-w-[990px] mx-auto"
                  >
                    <div data-v-f2fa45b4="" className="max-w-[567px] mx-auto">
                      <img
                        data-v-f2fa45b4=""
                        data-aos="zoom-in"
                        data-aos-duration={1000}
                        src="https://uic.group/uic-images/about/about-uic-logo.png"
                        alt="UIC logo"
                        className="mx-auto my-[88px] aos-init aos-animate"
                      />
                    </div>
                    <div data-v-f2fa45b4="">
                      <h4
                        data-v-f2fa45b4=""
                        className="mb-2 md:mb-4 about__title aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration={900}
                      >
                        About UIC
                      </h4>
                      <div
                        data-v-f2fa45b4=""
                        className="about_text aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration={900}
                      >
                        <h2 data-v-f2fa45b4="" className="mb-3">
                          “United IT Company” was founded on October 8, 2020.
                          According to the director of the company Murodkhuja
                          Muratov, the philosophy of the company is to create a
                          team that meets international standards in the IT
                          field of Uzbekistan, to open up the opportunity for
                          young programmers to work on themselves and at the
                          same time be officially employed, to bring the company
                          to a prominent place in the world arena IT.
                        </h2>
                        <p data-v-f2fa45b4="">
                          At the time the company was founded, the team
                          consisted of only 10 people, and now the team has +100
                          specialists. These people believed in the philosophy
                          of the company and sought to contribute to the
                          development of the project. To this day, these people
                          remain loyal to the company and develop their teams
                          within the company in different directions (Backend,
                          Frontend, QA, Mobile, Analytics, Marketing Team,
                          etc.).
                        </p>
                      </div>
                    </div>
                    <div
                      data-v-f2fa45b4=""
                      data-aos="fade-up"
                      data-aos-duration={700}
                      className="aos-init aos-animate"
                    >
                      <div
                        data-v-f2fa45b4=""
                        className="showrell-box bg-[#252527] border-[#00A795] hover border-dashed rounded-[12px] border-[1px] p-6 flex items-center justify-center flex-col md:flex-row gap-y-8 mt-10 cursor-pointer"
                      >
                        <div
                          data-v-f2fa45b4=""
                          className=" w-[94px] h-[94px] scale-125 opacity-90 relative flex justify-center showreel-wrapper text-[#fff] md:mr-7"
                        >
                          <i
                            data-v-56c03d90=""
                            data-v-f2fa45b4=""
                            className="icon hover:text-red-500 absolute z-10 flex items-center justify-center rotate-anim"
                          >
                            <svg
                              width={94}
                              height={94}
                              viewBox="0 0 94 94"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_539_50)">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M40.9214 8.54L39.7114 0L38.2314 0.21L39.6314 10.1L45.0914 9.33L44.9014 7.98L40.9214 8.54ZM54.2415 7.15L52.8015 6.81C52.4315 8.4 53.4915 10.1 55.5715 10.59C57.5315 11.05 59.1615 10.04 59.5415 8.42C59.8815 6.99 59.0715 5.86 57.5115 5.07L56.3515 4.47C55.1915 3.89 55.2515 3.19 55.3215 2.89C55.5415 1.99 56.4915 1.59 57.4115 1.8C58.4315 2.03 58.9815 2.83 58.7715 3.75L60.2115 4.09C60.6215 2.31 59.5115 0.889998 57.7615 0.479998C56.0215 0.0799984 54.2615 0.869998 53.8615 2.58C53.6815 3.39 53.7315 4.69 55.6815 5.7L56.8515 6.3C57.5915 6.71 58.2715 7.29 58.0715 8.15C57.8915 8.95 57.0415 9.53 55.8815 9.26C54.6615 8.97 54.0915 7.99 54.2415 7.15ZM65.7415 14.41L67.0715 15.08L71.5815 6.16L70.2514 5.49L68.2915 9.37L64.1714 7.29L66.1315 3.41L64.8015 2.74L60.3015 11.66L61.6315 12.33L63.5615 8.5L67.6714 10.58L65.7415 14.41ZM71.7014 12.08C73.6214 9.99 76.8314 9.75 78.9214 11.68C81.0214 13.61 81.0614 16.84 79.1414 18.93C77.2314 21.01 74.0214 21.22 71.9214 19.28C69.8414 17.36 69.7914 14.16 71.7014 12.08ZM78.0514 17.92C79.4314 16.42 79.4814 14.08 77.9914 12.7C76.5014 11.33 74.1914 11.59 72.8114 13.09C71.4314 14.59 71.3914 16.88 72.8814 18.26C74.3714 19.64 76.6714 19.42 78.0514 17.92ZM79.9714 29.5L80.6014 30.59L90.9314 28.56L90.1414 27.18L82.3914 28.83L86.8914 24.23L86.3214 23.24L80.0814 24.79L85.4414 18.95L84.6514 17.57L77.6614 25.46L78.2914 26.55L84.3814 25L79.9714 29.5ZM86.1915 35.13L82.5715 36L82.2215 34.55L91.9315 32.2L92.8315 35.91C93.3515 38.04 92.0215 39.27 90.4815 39.64C89.0815 39.98 87.5515 39.6 86.8915 37.87L83.8615 41.34L83.4415 39.61L86.4615 36.25L86.1915 35.13ZM87.9215 36.72C88.2515 38.07 89.1015 38.43 90.1315 38.19C91.1415 37.94 91.7315 37.17 91.5015 36.22L90.9615 33.98L87.4615 34.83L87.9215 36.72ZM83.9415 42.85L84.0615 48.97L85.4215 48.95L85.3315 44.31L88.1915 44.25L88.2715 48.18L89.6515 48.15L89.5715 44.22L92.6015 44.16L92.6915 48.67L94.0515 48.64L93.9315 42.65L83.9415 42.85ZM82.7215 56.6L83.8615 50.59L93.6815 52.45L92.5615 58.34L91.2215 58.09L92.0615 53.66L89.0815 53.1L88.3515 56.96L87.0015 56.69L87.7315 52.83L84.9215 52.3L84.0615 56.86L82.7215 56.6ZM82.8515 60.04L90.8515 63.28L91.4115 61.89L82.1515 58.14L80.0815 63.25L81.3415 63.76L82.8515 60.04ZM78.4715 71.05L77.4614 72.13C76.8114 71.58 75.6714 71.58 74.8114 72.49C74.0014 73.36 74.0714 74.38 74.6814 74.95C75.3315 75.55 76.1714 75.25 76.8914 74.82L78.0014 74.11C79.8514 72.92 81.0115 73.53 81.6115 74.09C82.8914 75.29 82.7015 77.22 81.4815 78.52C80.2515 79.83 78.4614 80.09 77.1314 78.84L78.1414 77.76C78.8315 78.41 79.8014 78.32 80.5214 77.56C81.1614 76.87 81.3015 75.84 80.6215 75.21C80.4015 75 79.8215 74.6 78.7315 75.31L77.6314 76.01C76.1614 76.96 74.7814 77.1 73.7114 76.1C72.4914 74.96 72.4415 73.04 73.8214 71.57C75.2715 70.01 77.2815 69.94 78.4715 71.05ZM65.4415 78.48L64.1915 79.3L69.6915 87.64L70.9415 86.82L68.5515 83.19L72.4015 80.65L74.7915 84.28L76.0415 83.46L70.5415 75.12L69.2915 75.94L71.6515 79.52L67.8015 82.06L65.4415 78.48ZM64.5115 84.8C65.3715 87.51 63.9715 90.41 61.2615 91.27C58.5415 92.13 55.7115 90.56 54.8615 87.85C54.0115 85.15 55.4315 82.27 58.1515 81.41C60.8615 80.56 63.6615 82.11 64.5115 84.8ZM56.2815 87.4C56.9015 89.35 58.9015 90.56 60.8415 89.94C62.7815 89.33 63.7015 87.2 63.0815 85.25C62.4615 83.3 60.5015 82.13 58.5615 82.74C56.6315 83.35 55.6715 85.45 56.2815 87.4ZM45.2415 83.26L43.9815 83.24L40.4415 93.16L42.0315 93.19L44.5715 85.68L46.2315 91.9L47.3815 91.92L49.2315 85.76L51.5215 93.35L53.1115 93.38L49.8915 83.34L48.6315 83.32L46.8515 89.35L45.2415 83.26ZM37.3015 85.87L38.3415 82.29L39.7715 82.71L36.9815 92.3L33.3215 91.24C31.2215 90.63 30.8115 88.87 31.2515 87.35C31.6515 85.97 32.7415 84.82 34.5715 85.12L33.0715 80.78L34.7815 81.28L36.1915 85.57L37.3015 85.87ZM35.0615 86.57C33.7215 86.18 32.9915 86.74 32.6915 87.75C32.4015 88.75 32.7715 89.65 33.7215 89.92L35.9315 90.56L36.9315 87.11L35.0615 86.57ZM31.6814 80.06L26.3214 77.1L25.6714 78.31L29.7314 80.55L28.3514 83.05L24.9114 81.15L24.2414 82.36L27.6814 84.26L26.2214 86.91L22.2715 84.73L21.6115 85.92L26.8514 88.81L31.6814 80.06ZM20.4114 72.14L25.0514 76.14L18.5214 83.71L13.9814 79.8L14.8714 78.77L18.2914 81.72L20.2714 79.42L17.2914 76.85L18.1914 75.81L21.1714 78.38L23.0414 76.22L19.5214 73.19L20.4114 72.14ZM17.3615 70.54L10.5715 75.86L11.4915 77.04L19.3515 70.88L15.9515 66.54L14.8815 67.38L17.3615 70.54ZM9.99144 61.26L9.56144 59.84C10.3714 59.55 10.9314 58.56 10.5614 57.37C10.2114 56.23 9.29144 55.79 8.50144 56.03C7.65144 56.29 7.50144 57.17 7.51144 58.01L7.58144 59.32C7.69144 61.52 6.58144 62.22 5.79144 62.46C4.11144 62.97 2.54144 61.84 2.02144 60.14C1.50144 58.42 2.17144 56.74 3.92144 56.21L4.35144 57.62C3.45144 57.89 3.04144 58.78 3.34144 59.78C3.61144 60.68 4.44144 61.31 5.33144 61.04C5.62144 60.95 6.26144 60.65 6.18144 59.36L6.12144 58.06C6.03144 56.32 6.60144 55.05 8.00144 54.63C9.60144 54.14 11.2814 55.05 11.8714 56.98C12.4914 59.02 11.5414 60.79 9.99144 61.26ZM10.0715 46.27L9.98146 44.78L0.00146484 45.36L0.0914648 46.86L4.43146 46.6L4.70146 51.2L0.361465 51.46L0.451465 52.95L10.4315 52.36L10.3415 50.87L6.05147 51.12L5.78147 46.52L10.0715 46.27ZM5.05147 42.28C2.27147 41.67 0.451474 39.01 1.06147 36.24C1.67147 33.45 4.44147 31.79 7.22147 32.4C9.98147 33.01 11.7715 35.67 11.1615 38.46C10.5515 41.23 7.81147 42.89 5.05147 42.28ZM6.90147 33.86C4.90147 33.42 2.86147 34.56 2.42147 36.54C1.98147 38.52 3.37147 40.39 5.37147 40.82C7.37147 41.25 9.36147 40.14 9.80147 38.16C10.2415 36.18 8.90147 34.29 6.90147 33.86ZM15.9615 26.38L16.5915 25.29L9.64149 17.34L8.84149 18.72L14.1615 24.61L7.92149 23.02L7.34149 24.01L11.8215 28.64L4.08149 26.93L3.28149 28.31L13.6315 30.41L14.2615 29.32L9.86149 24.82L15.9615 26.38ZM17.7015 18.19L20.2815 20.88L19.2015 21.91L12.2815 14.71L15.0315 12.07C16.6115 10.55 18.3415 11.08 19.4315 12.22C20.4215 13.25 20.8815 14.77 19.7115 16.21L24.2215 17.08L22.9315 18.31L18.5115 17.39L17.7015 18.19ZM18.2115 15.89C19.2115 14.93 19.1015 14.01 18.3715 13.25C17.6515 12.5 16.6915 12.38 15.9815 13.06L14.3215 14.66L16.8115 17.25L18.2115 15.89ZM25.5414 16.22L30.7714 13.04L30.0714 11.88L26.1114 14.29L24.6314 11.85L27.9914 9.81L27.2714 8.63L23.9114 10.67L22.3314 8.08L26.1814 5.74L25.4714 4.57L20.3514 7.68L25.5414 16.22ZM38.0215 10.38L32.2415 12.4L28.9415 2.97L34.5915 0.990002L35.0415 2.28L30.7815 3.77L31.7815 6.63L35.4915 5.33L35.9515 6.63L32.2415 7.93L33.1815 10.63L37.5615 9.1L38.0215 10.38Z"
                                  fill="url(#paint0_linear_539_50)"
                                />
                              </g>
                              <defs>
                                <linearGradient
                                  id="paint0_linear_539_50"
                                  x1="91.4999"
                                  y1={36}
                                  x2="-2.00006"
                                  y2={47}
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="white" />
                                  <stop
                                    offset="0.182292"
                                    stopColor="white"
                                    stopOpacity="0.6"
                                  />
                                  <stop
                                    offset={1}
                                    stopColor="white"
                                    stopOpacity="0.6"
                                  />
                                </linearGradient>
                                <clipPath id="clip0_539_50">
                                  <rect width={94} height={94} fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </i>
                          <i
                            data-v-56c03d90=""
                            data-v-f2fa45b4=""
                            className="icon hover:text-red-500 flex items-center justify-center left-[50%]"
                          >
                            <svg
                              width={25}
                              height={27}
                              viewBox="0 0 25 27"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21.6 8.86999C24.98 10.86 24.98 15.74 21.6 17.73L7.75 25.88C4.32 27.9 0 25.42 0 21.45L0 5.14999C0 1.16999 4.32 -1.30001 7.75 0.719988L21.6 8.86999Z"
                                fill="white"
                              />
                            </svg>
                          </i>
                        </div>
                        <div data-v-f2fa45b4="" className="inline">
                          <p
                            data-v-f2fa45b4=""
                            className="mr-2 font-['Roboto'] font-medium leading-[144%] inline text-[14px] text-center md:text-left"
                          >
                            You can find out more about our work in the showreel
                          </p>
                          <i
                            data-v-56c03d90=""
                            data-v-f2fa45b4=""
                            className="icon hover:text-red-500 inline translate-y-[3px]"
                          >
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_6148_4360)">
                                <rect
                                  width={16}
                                  height={16}
                                  rx={8}
                                  fill="#00A795"
                                />
                                <path
                                  d="M10.7886 9.70232L10.9195 4.85733L4.63413 11.1427M6.07453 4.98827L10.9195 4.85733L6.07453 4.98827Z"
                                  stroke="white"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_6148_4360">
                                  <rect
                                    width={16}
                                    height={16}
                                    rx={8}
                                    fill="white"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </i>
                        </div>
                      </div>
                    </div>
                    <div data-v-f2fa45b4="" className="overlay">
                      <div
                        data-v-f2fa45b4=""
                        className="relative flex items-center justify-center w-full h-full"
                      >
                        <button
                          data-v-f2fa45b4=""
                          className="text-white absolute top-[5%] right-[5%] text-base showreel-close-icon"
                          aria-label="button"
                        >
                          <i
                            data-v-56c03d90=""
                            data-v-f2fa45b4=""
                            className="icon hover:text-red-500 close--icon"
                          >
                            <svg
                              width={32}
                              height={32}
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.51465 7.51465L24.4852 24.4852"
                                stroke="white"
                                strokeWidth={2}
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                              />
                              <path
                                d="M24.4854 7.51465L7.51479 24.4852"
                                stroke="white"
                                strokeWidth={2}
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                              />
                            </svg>
                          </i>
                        </button>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-7179bf4a="" className="container">
                <div data-v-7179bf4a="" className="max-w-[990px] mx-auto">
                  <div data-v-502cb1da="" data-v-7179bf4a="" className="mt-10">
                    <h4
                      data-v-502cb1da=""
                      className="mb-4 about__title md:mb-8 lg:mb-10 aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-duration={800}
                    >
                      Currently, our company offers its IT solutions in 9 main
                      areas:
                    </h4>
                    <div
                      data-v-502cb1da=""
                      className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
                    >
                      <a
                        data-v-502cb1da=""
                        href="/brief/websites"
                        className="service-card bg-[#252527] md:px-6 p-2 md:p-5 rounded-[12px] lg:min-h-[180px] border-[transparent] border-[2px] border-solid transition-all duration-300 hover:border-[#00A795] aos-init aos-animate"
                        data-aos="fade-left"
                        data-aos-duration={700}
                      >
                        <h3
                          data-v-502cb1da=""
                          className="text-[13px] md:text-[16px] lg:text-[24px] font-bold leading-[120%] mb-3"
                        >
                          Web Development
                        </h3>
                        <p
                          data-v-502cb1da=""
                          className="text-[#E0E0E099] text-[12px] md:text-[14px] lg:text-[16px] leading-[140%]"
                        >
                          We develop websites with the high quality, from
                          corporate websites to web applications
                        </p>
                      </a>
                      <a
                        data-v-502cb1da=""
                        href="/brief/design"
                        className="service-card bg-[#252527] md:px-6 p-2 md:p-5 rounded-[12px] lg:min-h-[180px] border-[transparent] border-[2px] border-solid transition-all duration-300 hover:border-[#00A795] aos-init aos-animate"
                        data-aos="fade-left"
                        data-aos-duration={700}
                      >
                        <h3
                          data-v-502cb1da=""
                          className="text-[13px] md:text-[16px] lg:text-[24px] font-bold leading-[120%] mb-3"
                        >
                          UI&amp;UX
                        </h3>
                        <p
                          data-v-502cb1da=""
                          className="text-[#E0E0E099] text-[12px] md:text-[14px] lg:text-[16px] leading-[140%]"
                        >
                          Developing a project MindMap and designing it with the
                          optimal solution based on its architecture
                        </p>
                      </a>
                      <a
                        data-v-502cb1da=""
                        href="/brief/crm-systems"
                        className="service-card bg-[#252527] md:px-6 p-2 md:p-5 rounded-[12px] lg:min-h-[180px] border-[transparent] border-[2px] border-solid transition-all duration-300 hover:border-[#00A795] aos-init aos-animate"
                        data-aos="fade-left"
                        data-aos-duration={700}
                      >
                        <h3
                          data-v-502cb1da=""
                          className="text-[13px] md:text-[16px] lg:text-[24px] font-bold leading-[120%] mb-3"
                        >
                          CRM Systems
                        </h3>
                        <p
                          data-v-502cb1da=""
                          className="text-[#E0E0E099] text-[12px] md:text-[14px] lg:text-[16px] leading-[140%]"
                        >
                          Automation of business and processes, development of
                          electronic management systems that reduce paper-work
                          by 100%
                        </p>
                      </a>
                      <a
                        data-v-502cb1da=""
                        href="/brief/mobile-application"
                        className="service-card bg-[#252527] md:px-6 p-2 md:p-5 rounded-[12px] lg:min-h-[180px] border-[transparent] border-[2px] border-solid transition-all duration-300 hover:border-[#00A795] aos-init aos-animate"
                        data-aos="fade-left"
                        data-aos-duration={700}
                      >
                        <h3
                          data-v-502cb1da=""
                          className="text-[13px] md:text-[16px] lg:text-[24px] font-bold leading-[120%] mb-3"
                        >
                          Mobile apps
                        </h3>
                        <p
                          data-v-502cb1da=""
                          className="text-[#E0E0E099] text-[12px] md:text-[14px] lg:text-[16px] leading-[140%]"
                        >
                          Development and technical support of mobile
                          applications of any complexity
                        </p>
                      </a>
                      <a
                        data-v-502cb1da=""
                        href="/brief/media-production"
                        className="service-card bg-[#252527] md:px-6 p-2 md:p-5 rounded-[12px] lg:min-h-[180px] border-[transparent] border-[2px] border-solid transition-all duration-300 hover:border-[#00A795] aos-init aos-animate"
                        data-aos="fade-left"
                        data-aos-duration={700}
                      >
                        <h3
                          data-v-502cb1da=""
                          className="text-[13px] md:text-[16px] lg:text-[24px] font-bold leading-[120%] mb-3"
                        >
                          Media production
                        </h3>
                        <p
                          data-v-502cb1da=""
                          className="text-[#E0E0E099] text-[12px] md:text-[14px] lg:text-[16px] leading-[140%]"
                        >
                          Professional preparation of 2D / 3D animation, project
                          presentation, advertising, video and other media
                          resources.
                        </p>
                      </a>
                      <a
                        data-v-502cb1da=""
                        href="/brief/logo-branding"
                        className="service-card bg-[#252527] md:px-6 p-2 md:p-5 rounded-[12px] lg:min-h-[180px] border-[transparent] border-[2px] border-solid transition-all duration-300 hover:border-[#00A795] aos-init aos-animate"
                        data-aos="fade-left"
                        data-aos-duration={700}
                      >
                        <h3
                          data-v-502cb1da=""
                          className="text-[13px] md:text-[16px] lg:text-[24px] font-bold leading-[120%] mb-3"
                        >
                          Branding
                        </h3>
                        <p
                          data-v-502cb1da=""
                          className="text-[#E0E0E099] text-[12px] md:text-[14px] lg:text-[16px] leading-[140%]"
                        >
                          Developing a creative and unique logo for your project
                          and create its branding guidelines
                        </p>
                      </a>
                      <a
                        data-v-502cb1da=""
                        href="/brief/cybersecurity"
                        className="service-card bg-[#252527] md:px-6 p-2 md:p-5 rounded-[12px] lg:min-h-[180px] border-[transparent] border-[2px] border-solid transition-all duration-300 hover:border-[#00A795] aos-init aos-animate"
                        data-aos="fade-left"
                        data-aos-duration={700}
                      >
                        <h3
                          data-v-502cb1da=""
                          className="text-[13px] md:text-[16px] lg:text-[24px] font-bold leading-[120%] mb-3"
                        >
                          Cybersecurity
                        </h3>
                        <p
                          data-v-502cb1da=""
                          className="text-[#E0E0E099] text-[12px] md:text-[14px] lg:text-[16px] leading-[140%]"
                        >
                          Find and fix vulnerabilities in networks, devices,
                          code, and data.
                        </p>
                      </a>
                      <a
                        data-v-502cb1da=""
                        href="/brief/game"
                        className="service-card bg-[#252527] md:px-6 p-2 md:p-5 rounded-[12px] lg:min-h-[180px] border-[transparent] border-[2px] border-solid transition-all duration-300 hover:border-[#00A795] aos-init aos-animate"
                        data-aos="fade-left"
                        data-aos-duration={700}
                      >
                        <h3
                          data-v-502cb1da=""
                          className="text-[13px] md:text-[16px] lg:text-[24px] font-bold leading-[120%] mb-3"
                        >
                          Production of games
                        </h3>
                        <p
                          data-v-502cb1da=""
                          className="text-[#E0E0E099] text-[12px] md:text-[14px] lg:text-[16px] leading-[140%]"
                        >
                          Development of games of any subject and complexity,
                          corresponding to the international level.
                        </p>
                      </a>
                      <a
                        data-v-502cb1da=""
                        href="/brief/ai"
                        className="service-card bg-[#252527] md:px-6 p-2 md:p-5 rounded-[12px] lg:min-h-[180px] border-[transparent] border-[2px] border-solid transition-all duration-300 hover:border-[#00A795] aos-init aos-animate"
                        data-aos="fade-left"
                        data-aos-duration={700}
                      >
                        <h3
                          data-v-502cb1da=""
                          className="text-[13px] md:text-[16px] lg:text-[24px] font-bold leading-[120%] mb-3"
                        >
                          Artificial intelligence
                        </h3>
                        <p
                          data-v-502cb1da=""
                          className="text-[#E0E0E099] text-[12px] md:text-[14px] lg:text-[16px] leading-[140%]"
                        >
                          Development of intelligent computer systems with the
                          capabilities of human intelligence.
                        </p>
                      </a>
                    </div>
                  </div>
                  <div
                    data-v-d13273ec=""
                    data-v-7179bf4a=""
                    className="mt-10 bg-[#252527] rounded-[12px] p-5 lg:p-7"
                  >
                    <p
                      data-v-d13273ec=""
                      data-aos="fade-up"
                      data-aos-duration={800}
                      className="text-[14px] md:text-[16px] font-extralight md:font-normal leading-[144%] tracking-[0.2px] aos-init aos-animate"
                    >
                      <span
                        data-v-d13273ec=""
                        className="text-[#00A795] md:text-[#fff] text-[18px] md:text-[16px]"
                      >
                        "UIC Group"
                      </span>
                      is the address of projects that have their own values and
                      do not pass without quality control. Every opportunity and
                      demand in our company serves to meet the needs of our
                      customers with maximum efficiency. Our company is ready to
                      serve customers not just as customers, but as partners for
                      life with the best offers!
                    </p>
                    <div data-v-d13273ec="" className="relative">
                      <div
                        data-v-d13273ec=""
                        className="mt-[22px] projects-list duration-300"
                      >
                        <div
                          data-v-d13273ec=""
                          data-aos="fade-up"
                          data-aos-duration={800}
                          className="relative group project-item aos-init aos-animate"
                        >
                          <div
                            data-v-d13273ec=""
                            className="flex flex-col items-center md:gap-5 md:flex-row py-6 md:py-0"
                          >
                            <span
                              data-v-d13273ec=""
                              className="min-w-[120px] flex-center"
                            >
                              <img
                                data-v-d13273ec=""
                                src="https://uic.group/uic-images/about/portfolio/about-safenetpay.svg"
                                alt="company logo"
                                className="m-auto"
                              />
                            </span>
                            <p
                              data-v-d13273ec=""
                              className="pb-3 pt-5 md:pb-5 about_text"
                            >
                              We have developed the safenetpay.com website of
                              the international level using various types of
                              animation that meet all cybersecurity
                              requirements. Safenetpay is an international
                              company engaged in the optimization of payment
                              systems for companies.
                            </p>
                          </div>
                        </div>
                        <div
                          data-v-d13273ec=""
                          data-aos="fade-up"
                          data-aos-duration={800}
                          className="relative group project-item aos-init aos-animate"
                        >
                          <div
                            data-v-d13273ec=""
                            className="flex flex-col items-center md:gap-5 md:flex-row py-6 md:py-0"
                          >
                            <span
                              data-v-d13273ec=""
                              className="min-w-[120px] flex-center"
                            >
                              <img
                                data-v-d13273ec=""
                                src="https://uic.group/uic-images/about/portfolio/about-prosm.svg"
                                alt="company logo"
                                className="m-auto"
                              />
                            </span>
                            <p
                              data-v-d13273ec=""
                              className="pb-3 pt-5 md:pb-5 about_text"
                            >
                              The “Pro Service Management” project, for this
                              project our team gave a comprehensive solution - a
                              mobile application, a website, a KPI system for
                              employees, an automated billing system. The Pro SM
                              project belongs to the Akfa holding group and
                              manages all new buildings in Tashkent City. While
                              our application provides services for all
                              residents of new buildings.
                            </p>
                          </div>
                        </div>
                        <div
                          data-v-d13273ec=""
                          data-aos="fade-up"
                          data-aos-duration={800}
                          className="relative group project-item aos-init aos-animate"
                        >
                          <div
                            data-v-d13273ec=""
                            className="flex flex-col items-center md:gap-5 md:flex-row py-6 md:py-0"
                          >
                            <span
                              data-v-d13273ec=""
                              className="min-w-[120px] flex-center"
                            >
                              <img
                                data-v-d13273ec=""
                                src="https://uic.group/uic-images/about/portfolio/about-express24.svg"
                                alt="company logo"
                                className="m-auto"
                              />
                            </span>
                            <p
                              data-v-d13273ec=""
                              className="pb-3 pt-5 md:pb-5 about_text"
                            >
                              A mobile application for the largest food delivery
                              service Express24, as well as other solutions from
                              our side. So Express 24 Merchant is a tool for
                              establishments to receive orders and update order
                              statuses and an application for managing a
                              restaurant.
                            </p>
                          </div>
                        </div>
                        <div
                          data-v-d13273ec=""
                          data-aos="fade-up"
                          data-aos-duration={800}
                          className="relative group project-item aos-init aos-animate"
                        >
                          <div
                            data-v-d13273ec=""
                            className="flex flex-col items-center md:gap-5 md:flex-row py-6 md:py-0"
                          >
                            <span
                              data-v-d13273ec=""
                              className="min-w-[120px] flex-center"
                            >
                              <img
                                data-v-d13273ec=""
                                src="https://uic.group/uic-images/about/portfolio/about-tdiu.svg"
                                alt="company logo"
                                className="m-auto"
                              />
                            </span>
                            <p
                              data-v-d13273ec=""
                              className="pb-3 pt-5 md:pb-5 about_text"
                            >
                              Website for Tashkent State University of Economics
                              with interactive features for staff, students and
                              applicants of the university. Also, branding of
                              the university, an HR system for automating work
                              with personnel and mandatory testing of our
                              products by a team of our QA engineers were
                              carried out by our company.
                            </p>
                          </div>
                        </div>
                        <div
                          data-v-d13273ec=""
                          data-aos="fade-up"
                          data-aos-duration={800}
                          className="relative group project-item aos-init aos-animate"
                        >
                          <div
                            data-v-d13273ec=""
                            className="flex flex-col items-center md:gap-5 md:flex-row py-6 md:py-0"
                          >
                            <span
                              data-v-d13273ec=""
                              className="min-w-[120px] flex-center"
                            >
                              <img
                                data-v-d13273ec=""
                                src="https://uic.group/uic-images/about/portfolio/about-vilz.svg"
                                alt="company logo"
                                className="m-auto"
                              />
                            </span>
                            <p
                              data-v-d13273ec=""
                              className="pb-3 pt-5 md:pb-5 about_text"
                            >
                              For a company that sells cars of leading brands in
                              Uzbekistan, I prepared the website Vilz.uz to
                              increase sales of car dealerships. The site was
                              prepared with the necessary options for
                              registering for a test drive, buying a car on
                              credit and other cars. The task was to create a
                              mobile version of the site in the mode of a
                              full-fledged online store and give the opportunity
                              to read e-books. The mobile app is available on
                              Google Play and the App Store.
                            </p>
                          </div>
                        </div>
                        <div
                          data-v-d13273ec=""
                          data-aos="fade-up"
                          data-aos-duration={800}
                          className="relative group project-item aos-init aos-animate"
                        >
                          <div
                            data-v-d13273ec=""
                            className="flex flex-col items-center md:gap-5 md:flex-row py-6 md:py-0"
                          >
                            <span
                              data-v-d13273ec=""
                              className="min-w-[120px] flex-center"
                            >
                              <img
                                data-v-d13273ec=""
                                src="https://uic.group/uic-images/about/portfolio/about-ayoluchun.svg"
                                alt="company logo"
                                className="m-auto"
                              />
                            </span>
                            <p
                              data-v-d13273ec=""
                              className="pb-3 pt-5 md:pb-5 about_text"
                            >
                              Ayoluchun.uz, a special platform for women,
                              provides them with comprehensive support,
                              regardless of age and profession, and provides
                              them with video lessons in areas of interest to
                              them. Purpose: to unite women's education,
                              spiritual, cultural and educational development on
                              a single platform.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    <div
                      data-v-d13273ec=""
                      className="flex justify-center mt-4"
                    >
                      <a
                        data-v-ef362752=""
                        data-v-d13273ec=""
                        href="/portfolio"
                        className="flex group w-fit p-[10px] pl-[16px] items-center borders justify-center border-[1px] border-solid rounded-12 transition duration-500 ease-in-out backdrop-blur-xl cursor-pointer aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration={800}
                      >
                        <p
                          data-v-ef362752=""
                          className="group-hover:bg-white linear-wipe lg:!leading-130 transition duration-500 ease-in-out leading-[16px] link text-base font-bold flex justify-center items-center lg:!text-base text-[13px] md:!text-base gap-x-[10px]"
                        >
                          Portfolio
                          <i
                            data-v-56c03d90=""
                            data-v-ef362752=""
                            className="icon hover:text-red-500 text-white flex items-center -rotate-90"
                          >
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width={16}
                                height={16}
                                rx={8}
                                fill="white"
                                fillOpacity="0.3"
                              />
                              <path
                                d="M10.9997 6.50017L7.99986 9.49989L5 6.50012"
                                stroke="white"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </i>
                        </p>
                      </a>
                    </div>
                  </div>
                  <div data-v-7179bf4a="" className="mt-10">
                    <p
                      className="about_text mb-10 aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-duration={700}
                    >
                      The presence of our SaaS systems (these are the majority
                      of services on the Internet: email, CRM systems, task
                      schedulers, web designers for creating sites, blogging
                      platforms. That is, all cloud programs that allow you to
                      solve specific tasks) and PaaS (management system
                      databases, machine learning environments or big data
                      processing) in addition to core services.
                    </p>
                    <h4
                      className="about__title mb-4 aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-duration={800}
                    >
                      The company offered solutions for the education system of
                      the Republic of Uzbekistan in projects:
                    </h4>
                    <div className="flex flex-col sm:gap-5 gap-7">
                      <div
                        data-aos="fade-up"
                        data-aos-duration={800}
                        className="flex items-center sm:gap-5 gap-2 aos-init aos-animate"
                      >
                        <i
                          data-v-56c03d90=""
                          className="icon hover:text-red-500"
                        >
                          <svg
                            width={44}
                            height={44}
                            viewBox="0 0 44 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.5 21.9999L20.1667 25.6666L27.5 18.3333"
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M21.9999 5.5C26.2823 9.28872 31.8714 11.2614 37.5832 11C39.2634 16.7155 38.5538 22.868 35.6168 28.051C32.6798 33.234 27.7664 37.0043 21.9999 38.5C16.2334 37.0043 11.32 33.234 8.383 28.051C5.44597 22.868 4.73643 16.7155 6.41657 11C12.1284 11.2614 17.7176 9.28872 21.9999 5.5"
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </i>
                        <p className="about_text">
                          
                          Co-Learning Academy is a social project for teaching
                          IT professions. This project includes training in such
                          areas as Advanced Front-end, Basic Front-end, Python
                          Back-end, PHP Back-end, Graphic Design and Mobile
                          Development. Training to take place on a phased study
                          of video lessons directly from specialists.
                        </p>
                      </div>
                      <div
                        data-aos="fade-up"
                        data-aos-duration={800}
                        className="flex items-center sm:gap-5 gap-2 aos-init aos-animate"
                      >
                        <i
                          data-v-56c03d90=""
                          className="icon hover:text-red-500"
                        >
                          <svg
                            width={44}
                            height={44}
                            viewBox="0 0 44 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="7.33398"
                              y="5.5"
                              width="29.3333"
                              height={33}
                              rx={4}
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <rect
                              x="14.666"
                              y="12.8333"
                              width="14.6667"
                              height="5.5"
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14.6667 25.6668V25.6851"
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M22.0007 25.6668V25.6851"
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M29.3327 25.6668V25.6851"
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14.6667 31.1668V31.1851"
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M22.0007 31.1668V31.1851"
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M29.3327 31.1668V31.1851"
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </i>
                        <p className="about_text">
                          Mental arithmetic - automated multifunctional
                          platform! As a modern platform for teachers teaching
                          in this field, we have created a homework system in
                          the form of a website and mobile application for
                          children, they are specially designed in the style of
                          exciting games. The platform is currently among the
                          largest startups in the B2B direction.
                        </p>
                      </div>
                      <div
                        data-aos="fade-up"
                        data-aos-duration={800}
                        className="flex items-center sm:gap-5 gap-2 aos-init aos-animate"
                      >
                        <i
                          data-v-56c03d90=""
                          className="icon hover:text-red-500"
                        >
                          <svg
                            width={44}
                            height={45}
                            viewBox="0 0 44 45"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.33398 37.1666H14.6673L33.9173 17.9166C35.9424 15.8915 35.9424 12.6083 33.9173 10.5832C31.8923 8.55819 28.609 8.55819 26.584 10.5832L7.33398 29.8332V37.1666"
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M24.75 12.4167L32.0833 19.7501"
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </i>
                        <p className="about_text">
                          iMaktab — aims to provide all schools, regardless of
                          their size or the resources they have, with the
                          systems they need to provide effective learning,
                          teaching and school management. iMaktab is developed
                          with Python, Django, VueJS, PostgreSQL and other
                          software development tools.
                        </p>
                      </div>
                    </div>
                    <h4
                      className="about__title mb-4 mt-10 aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-duration={800}
                    >
                      In the field of state administration
                    </h4>
                    <div className="flex flex-col sm:gap-5 gap-7">
                      <div
                        data-aos="fade-up"
                        data-aos-duration={800}
                        className="flex items-center sm:gap-5 gap-2 aos-init aos-animate"
                      >
                        <i
                          data-v-56c03d90=""
                          className="icon hover:text-red-500"
                        >
                          <svg
                            width={44}
                            height={45}
                            viewBox="0 0 44 45"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.5 20.6667L22 26.1667L36.6667 11.5"
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M36.6673 22.4999V33.4999C36.6673 35.525 35.0257 37.1666 33.0007 37.1666H11.0007C8.97561 37.1666 7.33398 35.525 7.33398 33.4999V11.4999C7.33398 9.47487 8.97561 7.83325 11.0007 7.83325H27.5007"
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </i>
                        <p className="about_text">
                          Yosh saylovchi is an information website has been
                          prepared to attract the attention of young voters and
                          use their constitutional rights in the elections of
                          the President of the Republic of Uzbekistan in 2021.
                          On the site, visitors have the opportunity to see
                          where polling stations are located by entering their
                          data.
                        </p>
                      </div>
                      <div
                        data-aos="fade-up"
                        data-aos-duration={800}
                        className="flex items-center sm:gap-5 gap-2 aos-init aos-animate"
                      >
                        <i
                          data-v-56c03d90=""
                          className="icon hover:text-red-500"
                        >
                          <svg
                            width={44}
                            height={44}
                            viewBox="0 0 44 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.5 34.8334C10.6051 31.8859 16.8949 31.8859 22 34.8334C27.1051 31.8859 33.3949 31.8859 38.5 34.8334"
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5.5 10.9999C10.6051 8.05245 16.8949 8.05245 22 10.9999C27.1051 8.05245 33.3949 8.05245 38.5 10.9999"
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5.50065 11V34.8333"
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M22.0007 11V34.8333"
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M38.5007 11V34.8333"
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </i>
                        <p className="about_text">
                          Meningkonstitutsiyam.uz is a web portal that allows
                          expanding the opportunities for the participation of
                          citizens of our country in the implementation of
                          constitutional reforms, obtaining prompt and reliable
                          information about the activities of the Constitutional
                          Commission, familiarizing with the positions of
                          representatives of the general public, specialists and
                          experts on issues put forward for public discussion.
                        </p>
                      </div>
                      <div
                        data-aos="fade-up"
                        data-aos-duration={800}
                        className="flex items-center sm:gap-5 gap-2 aos-init aos-animate"
                      >
                        <i
                          data-v-56c03d90=""
                          className="icon hover:text-red-500"
                        >
                          <svg
                            width={44}
                            height={45}
                            viewBox="0 0 44 45"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.5 38.9999H38.5"
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5.5 18.8334H38.5"
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.16602 11.5L21.9993 6L34.8327 11.5"
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.33268 18.8333V38.9999"
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M36.6667 18.8333V38.9999"
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14.6667 26.1667V31.6667"
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M22.0007 26.1667V31.6667"
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M29.3327 26.1667V31.6667"
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </i>
                        <p className="about_text">
                          The project of the Notary Chamber provides many
                          opportunities by integrating all electronic services
                          of the Notary Chamber of the Republic of Uzbekistan.
                          The site serves to bring together all notary services
                          across the country and make their information easily
                          accessible to users.
                        </p>
                      </div>
                      <div
                        data-aos="fade-up"
                        data-aos-duration={800}
                        className="flex items-center sm:gap-5 gap-2 aos-init aos-animate"
                      >
                        <i
                          data-v-56c03d90=""
                          className="icon hover:text-red-500"
                        >
                          <svg
                            width={41}
                            height={45}
                            viewBox="0 0 41 45"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="5.04102"
                              y="13.3333"
                              width="30.2512"
                              height="23.8333"
                              rx={4}
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M13.4453 13.3333V9.66667C13.4453 7.64162 14.9502 6 16.8066 6H23.5291C25.3854 6 26.8903 7.64162 26.8903 9.66667V13.3333"
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M20.1684 22.5V22.5184"
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5.04102 24.3333C14.555 29.563 25.7783 29.563 35.2923 24.3333"
                              stroke="#00A795"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </i>
                        <p className="about_text">
                          Sergelihokimiyati.uz - the official page of the
                          district khokimiyat has been qualitatively enriched
                          with the help of our services. The ability to manage
                          vacancies from admin panels, a system for
                          automatically generating resumes by applicants and a
                          high-speed website - all this is dynamic and
                          interactive on the khokimiyat website.
                        </p>
                      </div>
                    </div>
                    <h4
                      className="about__title mt-10 mb-5 md:mb-10 aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-duration={800}
                    >
                      A cloud-based site management program - Wave, which has
                      such functionality as:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-[18px]">
                      <div
                        data-aos="fade-left"
                        data-aos-duration={800}
                        className="bg-[#252527] p-4 md:py-4 md:pl-6 md:pr-5 rounded-[12px] relative flex items-center aos-init aos-animate"
                      >
                        <span className="h-[25px] md:h-[46px] w-[4px] bg-[#FFFFFF1F] block absolute left-0 top-[50%] translate-y-[-50%] rounded-[4px]" />
                        <p className="about_text">Manage and edit site data</p>
                      </div>
                      <div
                        data-aos="fade-left"
                        data-aos-duration={800}
                        className="bg-[#252527] p-4 md:py-4 md:pl-6 md:pr-5 rounded-[12px] relative flex items-center aos-init aos-animate"
                      >
                        <span className="h-[25px] md:h-[46px] w-[4px] bg-[#FFFFFF1F] block absolute left-0 top-[50%] translate-y-[-50%] rounded-[4px]" />
                        <p className="about_text">
                          Adding, editing and deleting links to the site
                        </p>
                      </div>
                      <div
                        data-aos="fade-left"
                        data-aos-duration={800}
                        className="bg-[#252527] p-4 md:py-4 md:pl-6 md:pr-5 rounded-[12px] relative flex items-center aos-init aos-animate"
                      >
                        <span className="h-[25px] md:h-[46px] w-[4px] bg-[#FFFFFF1F] block absolute left-0 top-[50%] translate-y-[-50%] rounded-[4px]" />
                        <p className="about_text">
                          Add pages to the site to edit and delete them
                        </p>
                      </div>
                      <div
                        data-aos="fade-left"
                        data-aos-duration={800}
                        className="bg-[#252527] p-4 md:py-4 md:pl-6 md:pr-5 rounded-[12px] relative flex items-center aos-init aos-animate"
                      >
                        <span className="h-[25px] md:h-[46px] w-[4px] bg-[#FFFFFF1F] block absolute left-0 top-[50%] translate-y-[-50%] rounded-[4px]" />
                        <p className="about_text">
                          Ability to change the basic settings on the site
                        </p>
                      </div>
                      <div
                        data-aos="fade-left"
                        data-aos-duration={800}
                        className="bg-[#252527] p-4 md:py-4 md:pl-6 md:pr-5 rounded-[12px] relative flex items-center aos-init aos-animate"
                      >
                        <span className="h-[25px] md:h-[46px] w-[4px] bg-[#FFFFFF1F] block absolute left-0 top-[50%] translate-y-[-50%] rounded-[4px]" />
                        <p className="about_text">
                          Enabling and disabling the main options on the site
                        </p>
                      </div>
                      <div
                        data-aos="fade-left"
                        data-aos-duration={800}
                        className="bg-[#252527] p-4 md:py-4 md:pl-6 md:pr-5 rounded-[12px] relative flex items-center aos-init aos-animate"
                      >
                        <span className="h-[25px] md:h-[46px] w-[4px] bg-[#FFFFFF1F] block absolute left-0 top-[50%] translate-y-[-50%] rounded-[4px]" />
                        <p className="about_text">
                          Management of the SEO structure of the site
                        </p>
                      </div>
                      <div
                        data-aos="fade-left"
                        data-aos-duration={800}
                        className="bg-[#252527] p-4 md:py-4 md:pl-6 md:pr-5 rounded-[12px] relative flex items-center aos-init aos-animate"
                      >
                        <span className="h-[25px] md:h-[46px] w-[4px] bg-[#FFFFFF1F] block absolute left-0 top-[50%] translate-y-[-50%] rounded-[4px]" />
                        <p className="about_text">
                          Management of sections of the site
                        </p>
                      </div>
                      <div
                        data-aos="fade-left"
                        data-aos-duration={800}
                        className="bg-[#252527] p-4 md:py-4 md:pl-6 md:pr-5 rounded-[12px] relative flex items-center aos-init aos-animate"
                      >
                        <span className="h-[25px] md:h-[46px] w-[4px] bg-[#FFFFFF1F] block absolute left-0 top-[50%] translate-y-[-50%] rounded-[4px]" />
                        <p className="about_text">Control system users</p>
                      </div>
                      <div
                        data-aos="fade-left"
                        data-aos-duration={800}
                        className="bg-[#252527] p-4 md:py-4 md:pl-6 md:pr-5 rounded-[12px] relative flex items-center aos-init aos-animate"
                      >
                        <span className="h-[25px] md:h-[46px] w-[4px] bg-[#FFFFFF1F] block absolute left-0 top-[50%] translate-y-[-50%] rounded-[4px]" />
                        <p className="about_text">
                          Manage media files (photo/video/audio)
                        </p>
                      </div>
                      <div
                        data-aos="fade-left"
                        data-aos-duration={800}
                        className="bg-[#252527] p-4 md:py-4 md:pl-6 md:pr-5 rounded-[12px] relative flex items-center aos-init aos-animate"
                      >
                        <span className="h-[25px] md:h-[46px] w-[4px] bg-[#FFFFFF1F] block absolute left-0 top-[50%] translate-y-[-50%] rounded-[4px]" />
                        <p className="about_text">
                          Maintenance of site statistics
                        </p>
                      </div>
                      <div
                        data-aos="fade-left"
                        data-aos-duration={800}
                        className="bg-[#252527] p-4 md:py-4 md:pl-6 md:pr-5 rounded-[12px] relative flex items-center aos-init aos-animate"
                      >
                        <span className="h-[25px] md:h-[46px] w-[4px] bg-[#FFFFFF1F] block absolute left-0 top-[50%] translate-y-[-50%] rounded-[4px]" />
                        <p className="about_text">
                          Management of advertising information on the site
                        </p>
                      </div>
                      <div
                        data-aos="fade-left"
                        data-aos-duration={800}
                        className="bg-[#252527] p-4 md:py-4 md:pl-6 md:pr-5 rounded-[12px] relative flex items-center aos-init aos-animate"
                      >
                        <span className="h-[25px] md:h-[46px] w-[4px] bg-[#FFFFFF1F] block absolute left-0 top-[50%] translate-y-[-50%] rounded-[4px]" />
                        <p className="about_text">
                          Managing forms on the site and accepting applications
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-v-5474653a=""
                    data-v-7179bf4a=""
                    className="gallerySwiper md:bg-[#252527] relative rounded-[24px] px-0 sm:px-6 md:p-8 gallerySwiper_gallery md:pb-2.5 mt-10"
                  >
                    <h6
                      data-v-5474653a=""
                      data-aos="fade-up"
                      data-aos-duration={800}
                      className="text-[20px] font-bold leading-[130%] aos-init aos-animate"
                    >
                      Training Center under the UIC
                    </h6>
                    <p
                      data-v-5474653a=""
                      className="mt-3 about_text mb-5 sm:mb-7 aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-duration={800}
                    >
                      From the very foundation of the company, the team created
                      a unique internship system, which later grew into the UIC
                      Training Center. Today, more than 25 junior specialists
                      are studying in this center. A feature of the UIC Training
                      Center is the training of interns on real projects and in
                      working conditions
                    </p>
                    <div data-v-5474653a="" className="relative">
                      <div data-v-5474653a="" className="relative">
                        <div
                          data-v-5474653a=""
                          className="swiper swiper-initialized swiper-horizontal swiper-pointer-events gallerySwiper-slider relative h-[135px] sm:h-[150px] md:h-[200px] swiper-backface-hidden"
                        >
                          <div
                            className="swiper-wrapper"
                            style={{
                              cursor: "grab",
                              transform: "translate3d(-946px, 0px, 0px)",
                              transitionDuration: "0ms"
                            }}
                          >
                            <div
                              data-v-5474653a=""
                              className="swiper-slide"
                              style={{ width: "295.333px", marginRight: 20 }}
                            >
                              <div
                                data-v-5474653a=""
                                className="flex relative rounded-[10px] cursor-pointer h-full"
                              >
                                <img
                                  data-v-5474653a=""
                                  alt="about UIC"
                                  className="w-full h-full rounded-[10px] object-cover"
                                  lazy="loading"
                                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                />
                                <div
                                  data-v-5474653a=""
                                  className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                />
                              </div>
                            </div>
                            <div
                              data-v-5474653a=""
                              className="swiper-slide"
                              style={{ width: "295.333px", marginRight: 20 }}
                            >
                              <div
                                data-v-5474653a=""
                                className="flex relative rounded-[10px] cursor-pointer h-full"
                              >
                                <img
                                  data-v-5474653a=""
                                  alt="about UIC"
                                  className="w-full h-full rounded-[10px] object-cover"
                                  lazy="loading"
                                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                />
                                <div
                                  data-v-5474653a=""
                                  className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                />
                              </div>
                            </div>
                            <div
                              data-v-5474653a=""
                              className="swiper-slide swiper-slide-prev"
                              style={{ width: "295.333px", marginRight: 20 }}
                            >
                              <div
                                data-v-5474653a=""
                                className="flex relative rounded-[10px] cursor-pointer h-full"
                              >
                                <img
                                  data-v-5474653a=""
                                  alt="about UIC"
                                  className="w-full h-full rounded-[10px] object-cover"
                                  lazy="loading"
                                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                />
                                <div
                                  data-v-5474653a=""
                                  className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                />
                              </div>
                            </div>
                            <div
                              data-v-5474653a=""
                              className="swiper-slide swiper-slide-active"
                              style={{ width: "295.333px", marginRight: 20 }}
                            >
                              <div
                                data-v-5474653a=""
                                className="flex relative rounded-[10px] cursor-pointer h-full"
                              >
                                <img
                                  data-v-5474653a=""
                                  alt="about UIC"
                                  className="w-full h-full rounded-[10px] object-cover"
                                  lazy="loaded"
                                  src="https://uic.group/assets/senter6.aee5389c.jpg"
                                />
                                <div
                                  data-v-5474653a=""
                                  className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                />
                              </div>
                            </div>
                            <div
                              data-v-5474653a=""
                              className="swiper-slide swiper-slide-next"
                              style={{ width: "295.333px", marginRight: 20 }}
                            >
                              <div
                                data-v-5474653a=""
                                className="flex relative rounded-[10px] cursor-pointer h-full"
                              >
                                <img
                                  data-v-5474653a=""
                                  alt="about UIC"
                                  className="w-full h-full rounded-[10px] object-cover"
                                  lazy="loaded"
                                  src="https://uic.group/assets/senter4.10fb5d27.jpg"
                                />
                                <div
                                  data-v-5474653a=""
                                  className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                />
                              </div>
                            </div>
                            <div
                              data-v-5474653a=""
                              className="swiper-slide"
                              style={{ width: "295.333px", marginRight: 20 }}
                            >
                              <div
                                data-v-5474653a=""
                                className="flex relative rounded-[10px] cursor-pointer h-full"
                              >
                                <img
                                  data-v-5474653a=""
                                  alt="about UIC"
                                  className="w-full h-full rounded-[10px] object-cover"
                                  lazy="loaded"
                                  src="https://uic.group/assets/senter5.66af7fc7.jpg"
                                />
                                <div
                                  data-v-5474653a=""
                                  className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                />
                              </div>
                            </div>
                            <div
                              data-v-5474653a=""
                              className="swiper-slide"
                              style={{ width: "295.333px", marginRight: 20 }}
                            >
                              <div
                                data-v-5474653a=""
                                className="flex relative rounded-[10px] cursor-pointer h-full"
                              >
                                <img
                                  data-v-5474653a=""
                                  alt="about UIC"
                                  className="w-full h-full rounded-[10px] object-cover"
                                  lazy="loaded"
                                  src="https://uic.group/assets/senter3.da41edb3.jpg"
                                />
                                <div
                                  data-v-5474653a=""
                                  className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                />
                              </div>
                            </div>
                            <div
                              data-v-5474653a=""
                              className="swiper-slide"
                              style={{ width: "295.333px", marginRight: 20 }}
                            >
                              <div
                                data-v-5474653a=""
                                className="flex relative rounded-[10px] cursor-pointer h-full"
                              >
                                <img
                                  data-v-5474653a=""
                                  alt="about UIC"
                                  className="w-full h-full rounded-[10px] object-cover"
                                  lazy="loading"
                                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                />
                                <div
                                  data-v-5474653a=""
                                  className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                />
                              </div>
                            </div>
                          </div>
                          
                          
                          
                        </div>
                        <div
                          data-v-5474653a=""
                          className="swiper__btns hidden md:block"
                        >
                          <button
                            data-v-5474653a=""
                            className="absolute text-white z-10 left-5 top-1/2 -translate-y-1/2 gallery-prev-34"
                            aria-label="button"
                          >
                            <i
                              data-v-56c03d90=""
                              data-v-5474653a=""
                              className="icon hover:text-red-500"
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
                          <button
                            data-v-5474653a=""
                            className="absolute text-white z-10 right-5 top-1/2 -translate-y-1/2 gallery-next-34"
                            aria-label="button"
                          >
                            <i
                              data-v-56c03d90=""
                              data-v-5474653a=""
                              className="icon hover:text-red-500"
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
                        </div>
                      </div>
                      <div
                        data-v-5474653a=""
                        className="gallery-pagination flex items-center justify-center mt-3 mb-2 md:mb-3 md:mt-6 gallery-pagination-34 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"
                      >
                        <span className="swiper-pagination-bullet" />
                        <span className="swiper-pagination-bullet" />
                        <span className="swiper-pagination-bullet" />
                        <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
                        <span className="swiper-pagination-bullet" />
                        <span className="swiper-pagination-bullet" />
                      </div>
                    </div>
                    
                  </div>
                  <div data-v-7179bf4a="">
                    <p
                      data-v-7179bf4a=""
                      className="my-5 md:my-10 about_text aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-duration={800}
                    >
                      Since the beginning of its activity, the company has been
                      a partner of the Co-Learning Center , which in turn
                      provides free IT education. The center is focused on
                      teaching students in the following areas: Advanced
                      Front-end, Basic Front-end, Python Back-end, Back-end, UX
                      / UI, Game Dev, Digital Marketing and Mobile Development,
                      as well as the basics of Project Management.
                    </p>
                    <div
                      data-v-5474653a=""
                      data-v-7179bf4a=""
                      className="gallerySwiper md:bg-[#252527] relative rounded-[24px] px-0 sm:px-6 md:p-8 gallerySwiper_gallery md:pb-2.5 mt-10"
                    >
                      <h6
                        data-v-5474653a=""
                        data-aos="fade-up"
                        data-aos-duration={800}
                        className="text-[20px] font-bold leading-[130%] mb-2 sm:mb-4 lg:mb-8 aos-init aos-animate"
                      >
                        The Co-learning Center is a friend of UIC
                      </h6>
                      
                      <div data-v-5474653a="" className="relative">
                        <div data-v-5474653a="" className="relative">
                          <div
                            data-v-5474653a=""
                            className="swiper swiper-initialized swiper-horizontal swiper-pointer-events gallerySwiper-slider relative h-[135px] sm:h-[150px] md:h-[200px] swiper-backface-hidden"
                          >
                            <div
                              className="swiper-wrapper"
                              style={{
                                cursor: "grab",
                                transform: "translate3d(-946px, 0px, 0px)",
                                transitionDuration: "0ms"
                              }}
                            >
                              <div
                                data-v-5474653a=""
                                className="swiper-slide"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/clc-courses/clc1.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/clc-courses/clc7.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide swiper-slide-prev"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/clc-courses/clc2.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide swiper-slide-active"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/clc-courses/clc5.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide swiper-slide-next"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loading"
                                    src="https://uic.group/uic-images/image/clc-courses/clc3.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loading"
                                    src="https://uic.group/uic-images/image/clc-courses/clc4.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                            </div>
                            
                            
                            
                          </div>
                          <div
                            data-v-5474653a=""
                            className="swiper__btns hidden md:block"
                          >
                            <button
                              data-v-5474653a=""
                              className="absolute text-white z-10 left-5 top-1/2 -translate-y-1/2 gallery-prev-13"
                              aria-label="button"
                            >
                              <i
                                data-v-56c03d90=""
                                data-v-5474653a=""
                                className="icon hover:text-red-500"
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
                            <button
                              data-v-5474653a=""
                              className="absolute text-white z-10 right-5 top-1/2 -translate-y-1/2 gallery-next-13 swiper-button-disabled"
                              aria-label="button"
                              disabled=""
                            >
                              <i
                                data-v-56c03d90=""
                                data-v-5474653a=""
                                className="icon hover:text-red-500"
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
                          </div>
                        </div>
                        <div
                          data-v-5474653a=""
                          className="gallery-pagination flex items-center justify-center mt-3 mb-2 md:mb-3 md:mt-6 gallery-pagination-13 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"
                        >
                          <span className="swiper-pagination-bullet" />
                          <span className="swiper-pagination-bullet" />
                          <span className="swiper-pagination-bullet" />
                          <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div
                    data-v-76870866=""
                    data-v-7179bf4a=""
                    className="my-10 flex flex-col sm:flex-row rounded-[24px] bg-[#252527] border-solid border-[#37373A] aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration={800}
                  >
                    <img
                      data-v-76870866=""
                      src="https://uic.group/uic-images/image/brend_year.png"
                      alt="brand of the year"
                      className="rounded-l-[24px] rounded-r-[24px] sm:rounded-r-[0px] w-[100%] sm:w-[80%] md:w-[283px]"
                    />
                    <div
                      data-v-76870866=""
                      className="p-4 sm:p-6 md:p-8 flex flex-col justify-between w-full brand-year-gradient rounded-r-[24px] rounded-l-[24px] sm:rounded-l-[0px]"
                    >
                      <p
                        data-v-76870866=""
                        className="max-w-[494px] text-[16px] md:text-[18px] lg:text-[20px] font-bold leading-[140%] tracking-[0.2px] font-['Roboto'] mb-5"
                      >
                        At the end of 2021, the company took 3rd place in the
                        annual
                        <span data-v-76870866="" className="text-[#00A795]">
                          “Year brand”
                        </span>
                        competition in the IT direction.
                      </p>
                      <div
                        data-v-76870866=""
                        className="flex items-start md:items-center flex-col md:flex-row gap-y-2 md:w-fit border-[#FFFFFF33] border-solid md:border-[1px] rounded-[12px] p-[6px] pl-2"
                      >
                        <div
                          data-v-76870866=""
                          className="flex items-center gap-2"
                        >
                          <i
                            data-v-56c03d90=""
                            data-v-76870866=""
                            className="icon hover:text-red-500"
                          >
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.1153 13.2131C10.2704 14.0142 10.348 15.3825 11.278 16.083L14.1722 18.2632C15.2583 19.0813 16.827 18.5135 17.1378 17.1897L19.5898 6.74707C19.7633 6.00821 19.0359 5.37834 18.3295 5.6556L4.42637 11.1119C3.60609 11.4338 3.63821 12.6055 4.4749 12.882L7.04049 13.7298C7.31606 13.8209 7.61823 13.7797 7.85942 13.6183L17.4732 7.18447L11.1153 13.2131Z"
                                fill="white"
                                fillOpacity="0.6"
                              />
                            </svg>
                          </i>
                          <p
                            data-v-76870866=""
                            className="leading-[19px] tracking-[0.03em] text-[14px] md:text-[16px]"
                          >
                            
                            https://t.me/uicgroup/247
                          </p>
                        </div>
                        <a
                          data-v-76870866=""
                          href="https://t.me/uicgroup/247"
                          target="_blank"
                          className="bg-[#00A795] rounded-[6px] text-[16px] py-1 px-8 md:px-2 md:ml-8 hover:bg-[#049282] duration-300"
                        >
                          O'tish
                        </a>
                      </div>
                    </div>
                  </div>
                  <div data-v-03c9746a="" data-v-7179bf4a="">
                    <h4
                      data-v-03c9746a=""
                      className="about__title mb-4 aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-duration={800}
                    >
                      
                      Mangu Sarkarda
                    </h4>
                    <p
                      data-v-03c9746a=""
                      className="about_text aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-duration={800}
                    >
                      
                      Mangu Sarkarda - is a historical simulation game and now
                      it shows the future with the latest technology. You have
                      the opportunity to immerse yourself in the era of a great
                      empire that unites 3 continents! Go to the glorious XIV
                      century to the Kingdom of the Great Timurids and take part
                      in the campaigns of Amir Temur. A game dedicated to the
                      life of a great commander and statesman who played an
                      important role in the life of peoples and is associated
                      with intense struggle, will be a turning point in your
                      daily life. The opportunity to calm down is over. Get
                      ready for huge changes. Seal your heroism forever by
                      building history together!
                    </p>
                    <div
                      data-v-03c9746a=""
                      className="card min-h-[388px] rounded-[17px] mt-4 pt-[0px] sm:pt-[28px] p-4 md:p-[28px] flex flex-col items-center justify-center bg-[#000] relative overflow-hidden"
                    >
                      <video
                        data-v-03c9746a=""
                        className="w-[500px] absolute"
                        autoPlay=""
                        loop=""
                      >
                        <source
                          data-v-03c9746a=""
                          src="https://uic.group/assets/ms.40e27d31.mp4"
                          type="video/mp4"
                        />
                      </video>
                      <div
                        data-v-03c9746a=""
                        data-aos="fade-right"
                        data-aos-duration={800}
                        className="flex items-start md:items-center flex-col md:flex-row gap-y-3 w-full md:w-fit mr-auto mt-auto border-[#FFFFFF33] border-solid md:border-[1px] rounded-[12px] p-[6px] pl-2 aos-init aos-animate"
                      >
                        <div
                          data-v-03c9746a=""
                          className="flex items-center gap-2"
                        >
                          <i
                            data-v-56c03d90=""
                            data-v-03c9746a=""
                            className="icon hover:text-red-500"
                          >
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.56953 12.46L6.51953 15.51"
                                stroke="#A5A5A6"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M6.55078 12.4902L9.60078 15.5402"
                                stroke="#A5A5A6"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M13.5312 14H13.5413"
                                stroke="#A5A5A6"
                                strokeWidth={2}
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M17.4688 14H17.4788"
                                stroke="#A5A5A6"
                                strokeWidth={2}
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15.5 15.98V15.96"
                                stroke="#A5A5A6"
                                strokeWidth={2}
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15.5 12.04V12.02"
                                stroke="#A5A5A6"
                                strokeWidth={2}
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 22H15C20 22 22 20 22 15V13C22 8 20 6 15 6H9C4 6 2 8 2 13V15C2 20 4 22 9 22Z"
                                stroke="#A5A5A6"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M13.0105 2L13.0005 3.01C12.9905 3.56 12.5505 4 12.0005 4H11.9705C11.4205 4 10.9805 4.45 10.9805 5C10.9805 5.55 11.4305 6 11.9805 6H12.9805"
                                stroke="#A5A5A6"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </i>
                          <p
                            data-v-03c9746a=""
                            className="leading-[19px] tracking-[0.03em] text-[14px] md:text-[16px]"
                          >
                            
                            mangusarkarda.com
                          </p>
                        </div>
                        <a
                          data-v-03c9746a=""
                          href="https://mangusarkarda.com/"
                          target="_blank"
                          className="bg-[#00A795] max-md:w-full rounded-[6px] text-[16px] py-1 px-8 md:px-2 md:ml-8 hover:bg-[#049282] duration-300 text-center"
                        >
                          Download the game
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    data-v-5474653a=""
                    data-v-7179bf4a=""
                    className="gallerySwiper md:bg-[#252527] relative rounded-[24px] px-0 sm:px-6 md:p-8 gallerySwiper_gallery md:pb-2.5 mt-10"
                  >
                    
                    
                    <div data-v-5474653a="" className="relative">
                      <div data-v-5474653a="" className="relative">
                        <div
                          data-v-5474653a=""
                          className="swiper swiper-initialized swiper-horizontal swiper-pointer-events gallerySwiper-slider relative h-[135px] sm:h-[150px] md:h-[200px] swiper-backface-hidden"
                        >
                          <div
                            className="swiper-wrapper"
                            style={{
                              cursor: "grab",
                              transform: "translate3d(-315.333px, 0px, 0px)",
                              transitionDuration: "0ms"
                            }}
                          >
                            <div
                              data-v-5474653a=""
                              className="swiper-slide swiper-slide-prev"
                              style={{ width: "295.333px", marginRight: 20 }}
                            >
                              <div
                                data-v-5474653a=""
                                className="flex relative rounded-[10px] cursor-pointer h-full"
                              >
                                <img
                                  data-v-5474653a=""
                                  alt="about UIC"
                                  className="w-full h-full rounded-[10px] object-cover"
                                  lazy="loaded"
                                  src="https://uic.group/uic-images/image/sarkarda/sarkarda.png"
                                />
                                <div
                                  data-v-5474653a=""
                                  className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                />
                              </div>
                            </div>
                            <div
                              data-v-5474653a=""
                              className="swiper-slide swiper-slide-active"
                              style={{ width: "295.333px", marginRight: 20 }}
                            >
                              <div
                                data-v-5474653a=""
                                className="flex relative rounded-[10px] cursor-pointer h-full"
                              >
                                <img
                                  data-v-5474653a=""
                                  alt="about UIC"
                                  className="w-full h-full rounded-[10px] object-cover"
                                  lazy="loaded"
                                  src="https://uic.group/uic-images/image/sarkarda/sarkarda4.png"
                                />
                                <div
                                  data-v-5474653a=""
                                  className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                />
                              </div>
                            </div>
                            <div
                              data-v-5474653a=""
                              className="swiper-slide swiper-slide-next"
                              style={{ width: "295.333px", marginRight: 20 }}
                            >
                              <div
                                data-v-5474653a=""
                                className="flex relative rounded-[10px] cursor-pointer h-full"
                              >
                                <img
                                  data-v-5474653a=""
                                  alt="about UIC"
                                  className="w-full h-full rounded-[10px] object-cover"
                                  lazy="loaded"
                                  src="https://uic.group/uic-images/image/sarkarda/sarkarda2.png"
                                />
                                <div
                                  data-v-5474653a=""
                                  className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                />
                              </div>
                            </div>
                            <div
                              data-v-5474653a=""
                              className="swiper-slide"
                              style={{ width: "295.333px", marginRight: 20 }}
                            >
                              <div
                                data-v-5474653a=""
                                className="flex relative rounded-[10px] cursor-pointer h-full"
                              >
                                <img
                                  data-v-5474653a=""
                                  alt="about UIC"
                                  className="w-full h-full rounded-[10px] object-cover"
                                  lazy="loaded"
                                  src="https://uic.group/uic-images/image/sarkarda/sarkarda5.png"
                                />
                                <div
                                  data-v-5474653a=""
                                  className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                />
                              </div>
                            </div>
                            <div
                              data-v-5474653a=""
                              className="swiper-slide"
                              style={{ width: "295.333px", marginRight: 20 }}
                            >
                              <div
                                data-v-5474653a=""
                                className="flex relative rounded-[10px] cursor-pointer h-full"
                              >
                                <img
                                  data-v-5474653a=""
                                  alt="about UIC"
                                  className="w-full h-full rounded-[10px] object-cover"
                                  lazy="loading"
                                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                />
                                <div
                                  data-v-5474653a=""
                                  className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                />
                              </div>
                            </div>
                            <div
                              data-v-5474653a=""
                              className="swiper-slide"
                              style={{ width: "295.333px", marginRight: 20 }}
                            >
                              <div
                                data-v-5474653a=""
                                className="flex relative rounded-[10px] cursor-pointer h-full"
                              >
                                <img
                                  data-v-5474653a=""
                                  alt="about UIC"
                                  className="w-full h-full rounded-[10px] object-cover"
                                  lazy="loading"
                                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                />
                                <div
                                  data-v-5474653a=""
                                  className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                />
                              </div>
                            </div>
                            <div
                              data-v-5474653a=""
                              className="swiper-slide"
                              style={{ width: "295.333px", marginRight: 20 }}
                            >
                              <div
                                data-v-5474653a=""
                                className="flex relative rounded-[10px] cursor-pointer h-full"
                              >
                                <img
                                  data-v-5474653a=""
                                  alt="about UIC"
                                  className="w-full h-full rounded-[10px] object-cover"
                                  lazy="loading"
                                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                />
                                <div
                                  data-v-5474653a=""
                                  className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                />
                              </div>
                            </div>
                          </div>
                          
                          
                          
                        </div>
                        <div
                          data-v-5474653a=""
                          className="swiper__btns hidden md:block"
                        >
                          <button
                            data-v-5474653a=""
                            className="absolute text-white z-10 left-5 top-1/2 -translate-y-1/2 gallery-prev-41"
                            aria-label="button"
                          >
                            <i
                              data-v-56c03d90=""
                              data-v-5474653a=""
                              className="icon hover:text-red-500"
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
                          <button
                            data-v-5474653a=""
                            className="absolute text-white z-10 right-5 top-1/2 -translate-y-1/2 gallery-next-41"
                            aria-label="button"
                          >
                            <i
                              data-v-56c03d90=""
                              data-v-5474653a=""
                              className="icon hover:text-red-500"
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
                        </div>
                      </div>
                      <div
                        data-v-5474653a=""
                        className="gallery-pagination flex items-center justify-center mt-3 mb-2 md:mb-3 md:mt-6 gallery-pagination-41 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"
                      >
                        <span className="swiper-pagination-bullet" />
                        <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
                        <span className="swiper-pagination-bullet" />
                        <span className="swiper-pagination-bullet" />
                        <span className="swiper-pagination-bullet" />
                      </div>
                    </div>
                    
                  </div>
                  <div data-v-7179bf4a="" className="mt-10 photogallery--wrap">
                    <h4
                      className="mb-4 about__title aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-duration={800}
                    >
                      
                      UIC Clan
                    </h4>
                    <p
                      data-aos="fade-up"
                      data-aos-duration={800}
                      className="mb-20 about_text aos-init aos-animate"
                    >
                      The eSports CS:GO team UIC Clan deserve special attention,
                      because Players, they are employees, show impressive
                      results in major tournaments among other professional
                      players. The team was honored to participate in such a CAD
                      Corporate Cup tournament, by clicking on the
                      <a
                        href="https://www.youtube.com/watch?v=mFybAaWBwqo"
                        target="_blank"
                        className="text-[#00A795] hover:text-[#00a79587] duration-300"
                      >
                        link
                      </a>
                      you can see the game of our team in the tournament, where
                      it was noted as one of the most ambitious teams and showed
                      impressive results.
                    </p>
                    <div className="relative bg-[#252527] p-4 sm:p-6 md:p-8 !pt-[80px] md:pt-[116px] border-[#37373A] border-[1px] rounded-[24px] grid sm:grid-cols-2 gap-6">
                      <img
                        src="https://uic.group/uic-images/about/uic-clan.png"
                        alt="uic clan logo"
                        className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] w-[140px] h-[140px]"
                      />
                      <div
                        data-aos="fade-left"
                        data-aos-duration={800}
                        className="border-[transparent] border-[1px] rounded-[10px] duration-300 hover:border-[#00A795] hover:translate-y-[-5px] cursor-pointer aos-init aos-animate"
                      >
                        <img
                          alt="uic clan"
                          className="w-[100%]"
                          lazy="loaded"
                          src="https://uic.group/uic-images/image/uic_clan1.png"
                        />
                      </div>
                      <div
                        data-aos="fade-left"
                        data-aos-duration={800}
                        className="border-[transparent] border-[1px] rounded-[10px] duration-300 hover:border-[#00A795] hover:translate-y-[-5px] cursor-pointer aos-init aos-animate"
                      >
                        <img
                          alt="uic clan"
                          className="w-[100%]"
                          lazy="loaded"
                          src="https://uic.group/uic-images/image/uic_clan2.png"
                        />
                      </div>
                      <div
                        data-aos="fade-left"
                        data-aos-duration={800}
                        className="border-[transparent] border-[1px] rounded-[10px] duration-300 hover:border-[#00A795] hover:translate-y-[-5px] cursor-pointer aos-init aos-animate"
                      >
                        <img
                          alt="uic clan"
                          className="w-[100%]"
                          lazy="loaded"
                          src="https://uic.group/uic-images/image/uic_clan3.png"
                        />
                      </div>
                      <div
                        data-aos="fade-left"
                        data-aos-duration={800}
                        className="border-[transparent] border-[1px] rounded-[10px] duration-300 hover:border-[#00A795] hover:translate-y-[-5px] cursor-pointer aos-init aos-animate"
                      >
                        <img
                          alt="uic clan"
                          className="w-[100%]"
                          lazy="loaded"
                          src="https://uic.group/uic-images/image/uic_clan4.png"
                        />
                      </div>
                    </div>
                    
                  </div>
                  <div data-v-7179bf4a="">
                    <h4
                      className="about__title mt-10 mb-5 aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-duration={800}
                    >
                      At the moment, the company employs more than 100
                      employees, in such areas as:
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      <a
                        href="/vacancy"
                        className="border-[#FFFFFF33] border-[1px] rounded-[12px] p-[10px] md:py-[14px] md:px-[16px] flex sm:text-[14px] md:text-[16px] text-[#FFFFFF99] uppercase leading-[19px] tracking-[0.03em] text-[16px] group hover:bg-[#242426] duration-300 aos-init aos-animate"
                        data-aos="fade-right"
                        data-aos-duration={800}
                      >
                        <span className="group-hover:text-[#00A795] duration-300">
                          #
                        </span>
                        <p className="group-hover:text-[#fff] duration-300">
                          Front-end (Vue3)
                        </p>
                      </a>
                      <a
                        href="/vacancy"
                        className="border-[#FFFFFF33] border-[1px] rounded-[12px] p-[10px] md:py-[14px] md:px-[16px] flex sm:text-[14px] md:text-[16px] text-[#FFFFFF99] uppercase leading-[19px] tracking-[0.03em] text-[16px] group hover:bg-[#242426] duration-300 aos-init aos-animate"
                        data-aos="fade-right"
                        data-aos-duration={800}
                      >
                        <span className="group-hover:text-[#00A795] duration-300">
                          #
                        </span>
                        <p className="group-hover:text-[#fff] duration-300">
                          Back-end (Python)
                        </p>
                      </a>
                      <a
                        href="/vacancy"
                        className="border-[#FFFFFF33] border-[1px] rounded-[12px] p-[10px] md:py-[14px] md:px-[16px] flex sm:text-[14px] md:text-[16px] text-[#FFFFFF99] uppercase leading-[19px] tracking-[0.03em] text-[16px] group hover:bg-[#242426] duration-300 aos-init aos-animate"
                        data-aos="fade-right"
                        data-aos-duration={800}
                      >
                        <span className="group-hover:text-[#00A795] duration-300">
                          #
                        </span>
                        <p className="group-hover:text-[#fff] duration-300">
                          UX/UI
                        </p>
                      </a>
                      <a
                        href="/vacancy"
                        className="border-[#FFFFFF33] border-[1px] rounded-[12px] p-[10px] md:py-[14px] md:px-[16px] flex sm:text-[14px] md:text-[16px] text-[#FFFFFF99] uppercase leading-[19px] tracking-[0.03em] text-[16px] group hover:bg-[#242426] duration-300 aos-init aos-animate"
                        data-aos="fade-right"
                        data-aos-duration={800}
                      >
                        <span className="group-hover:text-[#00A795] duration-300">
                          #
                        </span>
                        <p className="group-hover:text-[#fff] duration-300">
                          Ma'lumotlar tahlili
                        </p>
                      </a>
                      <a
                        href="/vacancy"
                        className="border-[#FFFFFF33] border-[1px] rounded-[12px] p-[10px] md:py-[14px] md:px-[16px] flex sm:text-[14px] md:text-[16px] text-[#FFFFFF99] uppercase leading-[19px] tracking-[0.03em] text-[16px] group hover:bg-[#242426] duration-300 aos-init aos-animate"
                        data-aos="fade-right"
                        data-aos-duration={800}
                      >
                        <span className="group-hover:text-[#00A795] duration-300">
                          #
                        </span>
                        <p className="group-hover:text-[#fff] duration-300">
                          DevOps muhandisi
                        </p>
                      </a>
                      <a
                        href="/vacancy"
                        className="border-[#FFFFFF33] border-[1px] rounded-[12px] p-[10px] md:py-[14px] md:px-[16px] flex sm:text-[14px] md:text-[16px] text-[#FFFFFF99] uppercase leading-[19px] tracking-[0.03em] text-[16px] group hover:bg-[#242426] duration-300 aos-init aos-animate"
                        data-aos="fade-right"
                        data-aos-duration={800}
                      >
                        <span className="group-hover:text-[#00A795] duration-300">
                          #
                        </span>
                        <p className="group-hover:text-[#fff] duration-300">
                          Mobil Devs (Flutter)
                        </p>
                      </a>
                      <a
                        href="/vacancy"
                        className="border-[#FFFFFF33] border-[1px] rounded-[12px] p-[10px] md:py-[14px] md:px-[16px] flex sm:text-[14px] md:text-[16px] text-[#FFFFFF99] uppercase leading-[19px] tracking-[0.03em] text-[16px] group hover:bg-[#242426] duration-300 aos-init aos-animate"
                        data-aos="fade-right"
                        data-aos-duration={800}
                      >
                        <span className="group-hover:text-[#00A795] duration-300">
                          #
                        </span>
                        <p className="group-hover:text-[#fff] duration-300">
                          O'yin ishlab chiqaruvchilari
                        </p>
                      </a>
                      <a
                        href="/vacancy"
                        className="border-[#FFFFFF33] border-[1px] rounded-[12px] p-[10px] md:py-[14px] md:px-[16px] flex sm:text-[14px] md:text-[16px] text-[#FFFFFF99] uppercase leading-[19px] tracking-[0.03em] text-[16px] group hover:bg-[#242426] duration-300 aos-init aos-animate"
                        data-aos="fade-right"
                        data-aos-duration={800}
                      >
                        <span className="group-hover:text-[#00A795] duration-300">
                          #
                        </span>
                        <p className="group-hover:text-[#fff] duration-300">
                          Loyiha menejerlari
                        </p>
                      </a>
                      <a
                        href="/vacancy"
                        className="border-[#FFFFFF33] border-[1px] rounded-[12px] p-[10px] md:py-[14px] md:px-[16px] flex sm:text-[14px] md:text-[16px] text-[#FFFFFF99] uppercase leading-[19px] tracking-[0.03em] text-[16px] group hover:bg-[#242426] duration-300 aos-init aos-animate"
                        data-aos="fade-right"
                        data-aos-duration={800}
                      >
                        <span className="group-hover:text-[#00A795] duration-300">
                          #
                        </span>
                        <p className="group-hover:text-[#fff] duration-300">
                          Marketing menejerlari
                        </p>
                      </a>
                      <a
                        href="/vacancy"
                        className="border-[#FFFFFF33] border-[1px] rounded-[12px] p-[10px] md:py-[14px] md:px-[16px] flex sm:text-[14px] md:text-[16px] text-[#FFFFFF99] uppercase leading-[19px] tracking-[0.03em] text-[16px] group hover:bg-[#242426] duration-300 aos-init aos-animate"
                        data-aos="fade-right"
                        data-aos-duration={800}
                      >
                        <span className="group-hover:text-[#00A795] duration-300">
                          #
                        </span>
                        <p className="group-hover:text-[#fff] duration-300">
                          QA muhandislari
                        </p>
                      </a>
                      <a
                        href="/vacancy"
                        className="border-[#FFFFFF33] border-[1px] rounded-[12px] p-[10px] md:py-[14px] md:px-[16px] flex sm:text-[14px] md:text-[16px] text-[#FFFFFF99] uppercase leading-[19px] tracking-[0.03em] text-[16px] group hover:bg-[#242426] duration-300 aos-init aos-animate"
                        data-aos="fade-right"
                        data-aos-duration={800}
                      >
                        <span className="group-hover:text-[#00A795] duration-300">
                          #
                        </span>
                        <p className="group-hover:text-[#fff] duration-300">
                          Kontent menejeri
                        </p>
                      </a>
                      <a
                        href="/vacancy"
                        className="border-[#FFFFFF33] border-[1px] rounded-[12px] p-[10px] md:py-[14px] md:px-[16px] flex sm:text-[14px] md:text-[16px] text-[#FFFFFF99] uppercase leading-[19px] tracking-[0.03em] text-[16px] group hover:bg-[#242426] duration-300 aos-init aos-animate"
                        data-aos="fade-right"
                        data-aos-duration={800}
                      >
                        <span className="group-hover:text-[#00A795] duration-300">
                          #
                        </span>
                        <p className="group-hover:text-[#fff] duration-300">
                          3D dizaynerlar
                        </p>
                      </a>
                      <a
                        href="/vacancy"
                        className="border-[#FFFFFF33] border-[1px] rounded-[12px] p-[10px] md:py-[14px] md:px-[16px] flex sm:text-[14px] md:text-[16px] text-[#FFFFFF99] uppercase leading-[19px] tracking-[0.03em] text-[16px] group hover:bg-[#242426] duration-300 aos-init aos-animate"
                        data-aos="fade-right"
                        data-aos-duration={800}
                      >
                        <span className="group-hover:text-[#00A795] duration-300">
                          #
                        </span>
                        <p className="group-hover:text-[#fff] duration-300">
                          Koloristlar
                        </p>
                      </a>
                      <a
                        href="/vacancy"
                        className="border-[#FFFFFF33] border-[1px] rounded-[12px] p-[10px] md:py-[14px] md:px-[16px] flex sm:text-[14px] md:text-[16px] text-[#FFFFFF99] uppercase leading-[19px] tracking-[0.03em] text-[16px] group hover:bg-[#242426] duration-300 aos-init aos-animate"
                        data-aos="fade-right"
                        data-aos-duration={800}
                      >
                        <span className="group-hover:text-[#00A795] duration-300">
                          #
                        </span>
                        <p className="group-hover:text-[#fff] duration-300">
                          Video muharrirlari
                        </p>
                      </a>
                    </div>
                  </div>
                  <div
                    data-v-b76aee44=""
                    data-v-7179bf4a=""
                    className="silicon-valley font-['Roboto'] my-10 flex flex-col justify-between p-5 md:px-8 md:pt-[26px] md:pb-8 rounded-[24px] min-h-[332px] border-[1px] border-[#37373A] aos-init aos-animate"
                    data-aos="fade-left"
                    data-aos-duration={800}
                  >
                    <div data-v-b76aee44="" className="max-w-[550px]">
                      <h3
                        data-v-b76aee44=""
                        className="text-[20px] font-bold leading-[140%] tracking-[0.2px] mb-3 md:mb-5"
                      >
                        We are in Silicon Valley
                      </h3>
                      <p
                        data-v-b76aee44=""
                        className="text-[14px] md:text-[16px] leading-[140%] font-medium mb-32 sm:mb-10"
                      >
                        In order to further develop the company, enter the
                        international arena and improve the professional skills
                        of team members, a branch of the company was opened
                        <span data-v-b76aee44="" className="text-[#00A795]">
                          in San Francisco (Silicon Valley) in California
                        </span>
                        , USA.
                      </p>
                    </div>
                    <p
                      data-v-b76aee44=""
                      className="max-w-[820px] text-[#FFFFFF80] leading-[144%] text-[14px] md:text-[16px]"
                    >
                      This solution will serve as an excellent tool for
                      improving the skills of employees who want to get an
                      education.
                      <span data-v-b76aee44="" className="text-[#fff]">
                        Special grants from the company
                      </span>
                      will be allocated.
                    </p>
                  </div>
                  <div data-v-7179bf4a="">
                    <h4
                      data-v-7179bf4a=""
                      className="mb-4 about__title aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      Team building – ShanbaVibe
                    </h4>
                    <p
                      data-v-7179bf4a=""
                      className="about_text aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      Our team is distinguished by a special family spirit among
                      other organizations, which cannot but speak of a friendly
                      and comfortable atmosphere in the office. In order to
                      strengthen relationships among employees of the company,
                      improve the psychological climate, destroy communication
                      barriers, create a sense of mutual responsibility,
                      increase the level of trust, raise team spirit, create a
                      sense of joint victory and achieve goals and motivation,
                      we actively support the tradition of team building, the
                      most memorable of which are: :
                    </p>
                    <div
                      data-v-5474653a=""
                      data-v-7179bf4a=""
                      className="gallerySwiper md:bg-[#252527] relative rounded-[24px] px-0 sm:px-6 md:p-8 gallerySwiper_gallery md:pb-2.5 mt-10"
                    >
                      <h6
                        data-v-5474653a=""
                        data-aos="fade-up"
                        data-aos-duration={800}
                        className="text-[20px] font-bold leading-[130%] aos-init aos-animate"
                      >
                        Zakovat competition
                      </h6>
                      <p
                        data-v-5474653a=""
                        className="mt-3 about_text mb-5 sm:mb-7 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration={800}
                      >
                        in which we ask professional hosts to host an event and
                        test the knowledge of our team. Our guys were actively
                        motivated to test their knowledge and take the winner's
                        cup.
                      </p>
                      <div data-v-5474653a="" className="relative">
                        <div data-v-5474653a="" className="relative">
                          <div
                            data-v-5474653a=""
                            className="swiper swiper-initialized swiper-horizontal swiper-pointer-events gallerySwiper-slider relative h-[135px] sm:h-[150px] md:h-[200px] swiper-backface-hidden"
                          >
                            <div
                              className="swiper-wrapper"
                              style={{
                                cursor: "grab",
                                transform: "translate3d(-946px, 0px, 0px)",
                                transitionDuration: "0ms"
                              }}
                            >
                              <div
                                data-v-5474653a=""
                                className="swiper-slide"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/zakovat/zakovat1.png"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/zakovat/zakovat2.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide swiper-slide-prev"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/zakovat/zakovat3.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide swiper-slide-active"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/zakovat/zakovat4.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide swiper-slide-next"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/zakovat/zakovat5.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/zakovat/zakovat6.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                            </div>
                            
                            
                            
                          </div>
                          <div
                            data-v-5474653a=""
                            className="swiper__btns hidden md:block"
                          >
                            <button
                              data-v-5474653a=""
                              className="absolute text-white z-10 left-5 top-1/2 -translate-y-1/2 gallery-prev-26"
                              aria-label="button"
                            >
                              <i
                                data-v-56c03d90=""
                                data-v-5474653a=""
                                className="icon hover:text-red-500"
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
                            <button
                              data-v-5474653a=""
                              className="absolute text-white z-10 right-5 top-1/2 -translate-y-1/2 gallery-next-26 swiper-button-disabled"
                              aria-label="button"
                              disabled=""
                            >
                              <i
                                data-v-56c03d90=""
                                data-v-5474653a=""
                                className="icon hover:text-red-500"
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
                          </div>
                        </div>
                        <div
                          data-v-5474653a=""
                          className="gallery-pagination flex items-center justify-center mt-3 mb-2 md:mb-3 md:mt-6 gallery-pagination-26 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"
                        >
                          <span className="swiper-pagination-bullet" />
                          <span className="swiper-pagination-bullet" />
                          <span className="swiper-pagination-bullet" />
                          <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
                        </div>
                      </div>
                      
                    </div>
                    <div
                      data-v-5474653a=""
                      data-v-7179bf4a=""
                      className="gallerySwiper md:bg-[#252527] relative rounded-[24px] px-0 sm:px-6 md:p-8 gallerySwiper_gallery md:pb-2.5 mt-10"
                    >
                      <h6
                        data-v-5474653a=""
                        data-aos="fade-up"
                        data-aos-duration={800}
                        className="text-[20px] font-bold leading-[130%] aos-init aos-animate"
                      >
                        Meetup
                      </h6>
                      <p
                        data-v-5474653a=""
                        className="mt-3 about_text mb-5 sm:mb-7 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration={800}
                      >
                        
                        often employees themselves act as initiators in order to
                        combine business with pleasure, in connection with which
                        we actively arrange productive meetings with our
                        professionals where, in the format of master classes and
                        question-answer sessions, we share professional
                        experience with others in order to broaden our horizons
                        and professional the capabilities of our team. Our
                        guests were professionals in the field of financial
                        literacy - Nilyufar Sharipova, QA tester - Kurbanov
                        Kilichbek and others. Also, our employees make reports
                        on the books they read in the format of recommendations
                        for others.
                      </p>
                      <div data-v-5474653a="" className="relative">
                        <div data-v-5474653a="" className="relative">
                          <div
                            data-v-5474653a=""
                            className="swiper swiper-initialized swiper-horizontal swiper-pointer-events gallerySwiper-slider relative h-[135px] sm:h-[150px] md:h-[200px] swiper-backface-hidden"
                          >
                            <div
                              className="swiper-wrapper"
                              style={{
                                cursor: "grab",
                                transform: "translate3d(-315.333px, 0px, 0px)",
                                transitionDuration: "0ms"
                              }}
                            >
                              <div
                                data-v-5474653a=""
                                className="swiper-slide swiper-slide-prev"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/meetup/meetup1.png"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide swiper-slide-active"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/meetup/meetup2.png"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide swiper-slide-next"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/meetup/meetup3.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/meetup/meetup4.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/meetup/meetup5.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/meetup/meetup6.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/meetup/meetup7.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                            </div>
                            
                            
                            
                          </div>
                          <div
                            data-v-5474653a=""
                            className="swiper__btns hidden md:block"
                          >
                            <button
                              data-v-5474653a=""
                              className="absolute text-white z-10 left-5 top-1/2 -translate-y-1/2 gallery-prev-6"
                              aria-label="button"
                            >
                              <i
                                data-v-56c03d90=""
                                data-v-5474653a=""
                                className="icon hover:text-red-500"
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
                            <button
                              data-v-5474653a=""
                              className="absolute text-white z-10 right-5 top-1/2 -translate-y-1/2 gallery-next-6"
                              aria-label="button"
                            >
                              <i
                                data-v-56c03d90=""
                                data-v-5474653a=""
                                className="icon hover:text-red-500"
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
                          </div>
                        </div>
                        <div
                          data-v-5474653a=""
                          className="gallery-pagination flex items-center justify-center mt-3 mb-2 md:mb-3 md:mt-6 gallery-pagination-6 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"
                        >
                          <span className="swiper-pagination-bullet" />
                          <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
                          <span className="swiper-pagination-bullet" />
                          <span className="swiper-pagination-bullet" />
                          <span className="swiper-pagination-bullet" />
                        </div>
                      </div>
                      
                    </div>
                    <div
                      data-v-5474653a=""
                      data-v-7179bf4a=""
                      className="gallerySwiper md:bg-[#252527] relative rounded-[24px] px-0 sm:px-6 md:p-8 gallerySwiper_gallery md:pb-2.5 mt-10"
                    >
                      <h6
                        data-v-5474653a=""
                        data-aos="fade-up"
                        data-aos-duration={800}
                        className="text-[20px] font-bold leading-[130%] aos-init aos-animate"
                      >
                        Football competitions
                      </h6>
                      <p
                        data-v-5474653a=""
                        className="mt-3 about_text mb-5 sm:mb-7 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration={800}
                      >
                        are a frequent pastime of our team, our employees are
                        divided into mini-teams and identify the best players.
                        No wonder sports team building is the most sought-after
                        event, what could be better than playing on a night
                        football field surrounded by like-minded people!
                      </p>
                      <div data-v-5474653a="" className="relative">
                        <div data-v-5474653a="" className="relative">
                          <div
                            data-v-5474653a=""
                            className="swiper swiper-initialized swiper-horizontal swiper-pointer-events gallerySwiper-slider relative h-[135px] sm:h-[150px] md:h-[200px] swiper-backface-hidden"
                          >
                            <div
                              className="swiper-wrapper"
                              style={{
                                cursor: "grab",
                                transform: "translate3d(-946px, 0px, 0px)",
                                transitionDuration: "0ms"
                              }}
                            >
                              <div
                                data-v-5474653a=""
                                className="swiper-slide"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/football/footbal1.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/football/footbal2.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide swiper-slide-prev"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/football/footbal3.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide swiper-slide-active"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/football/footbal4.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide swiper-slide-next"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/football/footbal5.png"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/football/footbal6.png"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                            </div>
                            
                            
                            
                          </div>
                          <div
                            data-v-5474653a=""
                            className="swiper__btns hidden md:block"
                          >
                            <button
                              data-v-5474653a=""
                              className="absolute text-white z-10 left-5 top-1/2 -translate-y-1/2 gallery-prev-73"
                              aria-label="button"
                            >
                              <i
                                data-v-56c03d90=""
                                data-v-5474653a=""
                                className="icon hover:text-red-500"
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
                            <button
                              data-v-5474653a=""
                              className="absolute text-white z-10 right-5 top-1/2 -translate-y-1/2 gallery-next-73 swiper-button-disabled"
                              aria-label="button"
                              disabled=""
                            >
                              <i
                                data-v-56c03d90=""
                                data-v-5474653a=""
                                className="icon hover:text-red-500"
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
                          </div>
                        </div>
                        <div
                          data-v-5474653a=""
                          className="gallery-pagination flex items-center justify-center mt-3 mb-2 md:mb-3 md:mt-6 gallery-pagination-73 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"
                        >
                          <span className="swiper-pagination-bullet" />
                          <span className="swiper-pagination-bullet" />
                          <span className="swiper-pagination-bullet" />
                          <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
                        </div>
                      </div>
                      
                    </div>
                    <div
                      data-v-5474653a=""
                      data-v-7179bf4a=""
                      className="gallerySwiper md:bg-[#252527] relative rounded-[24px] px-0 sm:px-6 md:p-8 gallerySwiper_gallery md:pb-2.5 mt-10 birthday-slider"
                    >
                      <h6
                        data-v-5474653a=""
                        data-aos="fade-up"
                        data-aos-duration={800}
                        className="text-[20px] font-bold leading-[130%] aos-init aos-animate"
                      >
                        Birthday of UIC
                      </h6>
                      <p
                        data-v-5474653a=""
                        className="mt-3 about_text mb-5 sm:mb-7 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration={800}
                      >
                        Another significant day of the year for us is the
                        birthday of UIC. This is an excellent opportunity to sum
                        up the results of the year and mark new goals and peaks.
                        The company appreciates each of the employees and their
                        contribution, we are pleased with the monthly growth of
                        the team and the growth of trust in us.
                      </p>
                      <div data-v-5474653a="" className="relative">
                        <div data-v-5474653a="" className="relative">
                          <div
                            data-v-5474653a=""
                            className="swiper swiper-initialized swiper-horizontal swiper-pointer-events gallerySwiper-slider relative h-[135px] sm:h-[150px] md:h-[200px]"
                          >
                            <div
                              className="swiper-wrapper"
                              style={{
                                cursor: "grab",
                                transform: "translate3d(-2207.33px, 0px, 0px)",
                                transitionDuration: "0ms"
                              }}
                            >
                              <div
                                data-v-5474653a=""
                                className="swiper-slide"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loading"
                                    src='https://uic.group/uic-images/image/birthday/birthday1.jpg'
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loading"
                                    src="https://uic.group/uic-images/image/birthday/birthday2.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loading"
                                    src="https://uic.group/uic-images/image/birthday/birthday3.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loading"
                                    src="https://uic.group/uic-images/image/birthday/birthday4.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/birthday/birthday5.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/birthday/birthday6.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide swiper-slide-prev"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/birthday/birthday8.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide swiper-slide-active"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loading"
                                    src="https://uic.group/uic-images/image/birthday/birthday7.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide swiper-slide-next"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loading"
                                    src="https://uic.group/uic-images/image/birthday/birthday9.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loading"
                                    src="https://uic.group/uic-images/image/birthday/birthday2.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loading"
                                    src="https://uic.group/uic-images/image/birthday/birthday11.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loading"
                                    src="https://uic.group/uic-images/image/birthday/birthday12.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loading"
                                    src="https://uic.group/uic-images/image/birthday/birthday13.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                            </div>
                            
                            
                            
                          </div>
                          <div
                            data-v-5474653a=""
                            className="swiper__btns hidden md:block"
                          >
                            <button
                              data-v-5474653a=""
                              className="absolute text-white z-10 left-5 top-1/2 -translate-y-1/2 gallery-prev-10"
                              aria-label="button"
                            >
                              <i
                                data-v-56c03d90=""
                                data-v-5474653a=""
                                className="icon hover:text-red-500"
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
                            <button
                              data-v-5474653a=""
                              className="absolute text-white z-10 right-5 top-1/2 -translate-y-1/2 gallery-next-10"
                              aria-label="button"
                            >
                              <i
                                data-v-56c03d90=""
                                data-v-5474653a=""
                                className="icon hover:text-red-500"
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
                          </div>
                        </div>
                        <div
                          data-v-5474653a=""
                          className="gallery-pagination flex items-center justify-center mt-3 mb-2 md:mb-3 md:mt-6 gallery-pagination-10 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"
                        >
                          <span className="swiper-pagination-bullet" />
                          <span className="swiper-pagination-bullet" />
                          <span className="swiper-pagination-bullet" />
                          <span className="swiper-pagination-bullet" />
                          <span className="swiper-pagination-bullet" />
                          <span className="swiper-pagination-bullet" />
                          <span className="swiper-pagination-bullet" />
                          <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
                          <span className="swiper-pagination-bullet" />
                          <span className="swiper-pagination-bullet" />
                          <span className="swiper-pagination-bullet" />
                        </div>
                      </div>
                      
                    </div>
                    <div
                      data-v-5474653a=""
                      data-v-7179bf4a=""
                      className="gallerySwiper md:bg-[#252527] relative rounded-[24px] px-0 sm:px-6 md:p-8 gallerySwiper_gallery md:pb-2.5 mt-10"
                    >
                      <h6
                        data-v-5474653a=""
                        data-aos="fade-up"
                        data-aos-duration={800}
                        className="text-[20px] font-bold leading-[130%] aos-init aos-animate"
                      >
                        BeFit Race - 2022
                      </h6>
                      <p
                        data-v-5474653a=""
                        className="mt-3 about_text mb-5 sm:mb-7 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration={800}
                      >
                        Everyone loves mountains and the UIC family is no
                        exception! After tiring working days, the best solution
                        is to go in search of truly beautiful views. This year
                        we proudly defended the honor of our team at the annual
                        competition of professional athletes Befit race, in
                        which we showed impressive results, and we are also
                        preparing for the upcoming races.
                      </p>
                      <div data-v-5474653a="" className="relative">
                        <div data-v-5474653a="" className="relative">
                          <div
                            data-v-5474653a=""
                            className="swiper swiper-initialized swiper-horizontal swiper-pointer-events gallerySwiper-slider relative h-[135px] sm:h-[150px] md:h-[200px] swiper-backface-hidden"
                          >
                            <div
                              className="swiper-wrapper"
                              style={{
                                cursor: "grab",
                                transform: "translate3d(0px, 0px, 0px)",
                                transitionDuration: "0ms"
                              }}
                            >
                              <div
                                data-v-5474653a=""
                                className="swiper-slide swiper-slide-active"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loading"
                                    src="https://uic.group/uic-images/image/befit/befit1.png"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide swiper-slide-next"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/befit/befit3.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/befit/befit4.png"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/befit/befit2.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loading"
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                            </div>
                            
                            
                            
                          </div>
                          <div
                            data-v-5474653a=""
                            className="swiper__btns hidden md:block"
                          >
                            <button
                              data-v-5474653a=""
                              className="absolute text-white z-10 left-5 top-1/2 -translate-y-1/2 gallery-prev-80 swiper-button-disabled"
                              aria-label="button"
                              disabled=""
                            >
                              <i
                                data-v-56c03d90=""
                                data-v-5474653a=""
                                className="icon hover:text-red-500"
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
                            <button
                              data-v-5474653a=""
                              className="absolute text-white z-10 right-5 top-1/2 -translate-y-1/2 gallery-next-80"
                              aria-label="button"
                            >
                              <i
                                data-v-56c03d90=""
                                data-v-5474653a=""
                                className="icon hover:text-red-500"
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
                          </div>
                        </div>
                        <div
                          data-v-5474653a=""
                          className="gallery-pagination flex items-center justify-center mt-3 mb-2 md:mb-3 md:mt-6 gallery-pagination-80 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"
                        >
                          <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
                          <span className="swiper-pagination-bullet" />
                          <span className="swiper-pagination-bullet" />
                        </div>
                      </div>
                      
                    </div>
                    <p
                      data-v-7179bf4a=""
                      className="mt-10 mb-2 about_text aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      As you mentioned above, our guys stand out for their
                      professional CS:GO play, which is why we often hold
                      internal tournaments to determine the best players.
                    </p>
                    <p
                      data-v-7179bf4a=""
                      className="mb-10 about_text aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      The company's management highly appreciates the comfort of
                      employees in the workspace, and therefore the office has a
                      table tennis room, a game room for PS5, rest rooms with
                      sleeping places and a prayer room on a permanent basis.
                    </p>
                    <div
                      data-v-5474653a=""
                      data-v-7179bf4a=""
                      className="gallerySwiper md:bg-[#252527] relative rounded-[24px] px-0 sm:px-6 md:p-8 gallerySwiper_gallery md:pb-2.5 mt-10"
                    >
                      <h6
                        data-v-5474653a=""
                        data-aos="fade-up"
                        data-aos-duration={800}
                        className="text-[20px] font-bold leading-[130%] mb-2 sm:mb-4 lg:mb-8 aos-init aos-animate"
                      >
                        Our office
                      </h6>
                      
                      <div data-v-5474653a="" className="relative">
                        <div data-v-5474653a="" className="relative">
                          <div
                            data-v-5474653a=""
                            className="swiper swiper-initialized swiper-horizontal swiper-pointer-events gallerySwiper-slider relative h-[135px] sm:h-[150px] md:h-[200px] swiper-backface-hidden"
                          >
                            <div
                              className="swiper-wrapper"
                              style={{
                                transform: "translate3d(0px, 0px, 0px)",
                                transitionDuration: "0ms"
                              }}
                            >
                              <div
                                data-v-5474653a=""
                                className="swiper-slide swiper-slide-active"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/video1.png"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide swiper-slide-next"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/video2.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/uic-images/image/video3.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                            </div>
                            
                            
                            
                          </div>
                          <div
                            data-v-5474653a=""
                            className="swiper__btns hidden md:block"
                          >
                            <button
                              data-v-5474653a=""
                              className="absolute text-white z-10 left-5 top-1/2 -translate-y-1/2 gallery-prev-75 swiper-button-lock swiper-button-disabled"
                              aria-label="button"
                              disabled=""
                            >
                              <i
                                data-v-56c03d90=""
                                data-v-5474653a=""
                                className="icon hover:text-red-500"
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
                            <button
                              data-v-5474653a=""
                              className="absolute text-white z-10 right-5 top-1/2 -translate-y-1/2 gallery-next-75 swiper-button-disabled swiper-button-lock"
                              aria-label="button"
                              disabled=""
                            >
                              <i
                                data-v-56c03d90=""
                                data-v-5474653a=""
                                className="icon hover:text-red-500"
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
                          </div>
                        </div>
                        <div
                          data-v-5474653a=""
                          className="gallery-pagination flex items-center justify-center mt-3 mb-2 md:mb-3 md:mt-6 gallery-pagination-75 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-lock"
                        >
                          <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
                        </div>
                      </div>
                      
                    </div>
                    <div
                      data-v-5474653a=""
                      data-v-7179bf4a=""
                      className="gallerySwiper md:bg-[#252527] relative rounded-[24px] px-0 sm:px-6 md:p-8 gallerySwiper_gallery md:pb-2.5 mt-10"
                    >
                      <h6
                        data-v-5474653a=""
                        data-aos="fade-up"
                        data-aos-duration={800}
                        className="text-[20px] font-bold leading-[130%] aos-init aos-animate"
                      >
                        The next achievement in the UIC GROUP
                      </h6>
                      <p
                        data-v-5474653a=""
                        className="mt-3 about_text mb-5 sm:mb-7 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration={800}
                      >
                        On September 17, the 'BUKHARA NIGHT RACE' night running
                        marathon was held in Bukhara, the jewel of the East.
                        took the honorable 4th place.
                      </p>
                      <div data-v-5474653a="" className="relative">
                        <div data-v-5474653a="" className="relative">
                          <div
                            data-v-5474653a=""
                            className="swiper swiper-initialized swiper-horizontal swiper-pointer-events gallerySwiper-slider relative h-[135px] sm:h-[150px] md:h-[200px] swiper-backface-hidden"
                          >
                            <div
                              className="swiper-wrapper"
                              style={{
                                cursor: "grab",
                                transform: "translate3d(-315.333px, 0px, 0px)",
                                transitionDuration: "0ms"
                              }}
                            >
                              <div
                                data-v-5474653a=""
                                className="swiper-slide swiper-slide-prev"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loading"
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide swiper-slide-active"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/assets/bukhara2.97ffe2e4.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide swiper-slide-next"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/assets/bukhara3.c091f3a8.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                              <div
                                data-v-5474653a=""
                                className="swiper-slide"
                                style={{ width: "295.333px", marginRight: 20 }}
                              >
                                <div
                                  data-v-5474653a=""
                                  className="flex relative rounded-[10px] cursor-pointer h-full"
                                >
                                  <img
                                    data-v-5474653a=""
                                    alt="about UIC"
                                    className="w-full h-full rounded-[10px] object-cover"
                                    lazy="loaded"
                                    src="https://uic.group/assets/bukhara4.5ab139c4.jpg"
                                  />
                                  <div
                                    data-v-5474653a=""
                                    className="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
                                  />
                                </div>
                              </div>
                            </div>
                            
                            
                            
                          </div>
                          <div
                            data-v-5474653a=""
                            className="swiper__btns hidden md:block"
                          >
                            <button
                              data-v-5474653a=""
                              className="absolute text-white z-10 left-5 top-1/2 -translate-y-1/2 gallery-prev-40"
                              aria-label="button"
                            >
                              <i
                                data-v-56c03d90=""
                                data-v-5474653a=""
                                className="icon hover:text-red-500"
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
                            <button
                              data-v-5474653a=""
                              className="absolute text-white z-10 right-5 top-1/2 -translate-y-1/2 gallery-next-40 swiper-button-disabled"
                              aria-label="button"
                              disabled=""
                            >
                              <i
                                data-v-56c03d90=""
                                data-v-5474653a=""
                                className="icon hover:text-red-500"
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
                          </div>
                        </div>
                        <div
                          data-v-5474653a=""
                          className="gallery-pagination flex items-center justify-center mt-3 mb-2 md:mb-3 md:mt-6 gallery-pagination-40 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"
                        >
                          <span className="swiper-pagination-bullet" />
                          <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div data-v-7179bf4a="">
                    <div data-v-7179bf4a="">
                      <div
                        data-v-7179bf4a=""
                        className="mt-10 mb-4 about__title aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration={800}
                      >
                        Health
                      </div>
                      <p
                        data-v-7179bf4a=""
                        className="mb-10 about_text aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration={850}
                      >
                        Interim medical examinations throughout the year and
                        consultation with a full-time medical officer are
                        available to employees all year round. The health of all
                        employees is always under control.
                      </p>
                    </div>
                    <div data-v-7179bf4a="">
                      <div
                        data-v-7179bf4a=""
                        className="mb-4 about__title aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration={800}
                      >
                        UIC values
                      </div>
                      <p
                        data-v-7179bf4a=""
                        data-aos="fade-up"
                        data-aos-duration={850}
                        className="mb-3 about_text last:mb-10 aos-init aos-animate"
                      >
                        UIC Group offers its solutions in all aspects of the IT
                        world of any complexity in Uzbekistan. "UIC Group" is
                        the address of projects that have their own values ​​and
                        where quality control comes first. The company's
                        activity is aimed at meeting the demand of our customers
                        at the highest level. Our company is ready to serve
                        customers not just as customers, but as partners
                      </p>
                      <p
                        data-v-7179bf4a=""
                        data-aos="fade-up"
                        data-aos-duration={850}
                        className="mb-3 about_text last:mb-10 aos-init aos-animate"
                      >
                        The company differs from classical companies in its
                        focus and system. What matters is not the income, but
                        the result and experience. We are engaged in robotics,
                        digital marketing, game development, maintenance of
                        various software systems.
                      </p>
                      <p
                        data-v-7179bf4a=""
                        data-aos="fade-up"
                        data-aos-duration={850}
                        className="mb-3 about_text last:mb-10 aos-init aos-animate"
                      >
                        The United IT Company team puts quality ahead of
                        financial gain. More precisely, we work with people, not
                        with computers. Feedback from our clients also confirms
                        that UIC takes a responsible approach to the assigned
                        tasks and responsibilities, and maintains a
                        well-coordinated team process.
                      </p>
                      <p
                        data-v-7179bf4a=""
                        data-aos="fade-up"
                        data-aos-duration={850}
                        className="mb-3 about_text last:mb-10 aos-init aos-animate"
                      >
                        After all, we strive to become a leading team in the
                        field of IT, conducting activities based on
                        international standards. Feedback from our clients also
                        confirms that UIC takes a responsible approach to the
                        assigned tasks and responsibilities, and maintains a
                        well-coordinated team process.
                      </p>
                    </div>
                    <div data-v-7179bf4a="">
                      <div
                        data-v-7179bf4a=""
                        className="mt-10 mb-4 about__title aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration={800}
                      >
                        Corporate Code of the company
                      </div>
                      <p
                        data-v-7179bf4a=""
                        data-aos="fade-up"
                        data-aos-duration={850}
                        className="mb-3 about_text last:mb-10 aos-init aos-animate"
                      >
                        Ensuring high standards of corporate governance in
                        practice is very difficult. Therefore, the adoption of a
                        code that summarizes the rules of corporate etiquette is
                        a way to ensure information openness and publicity of
                        the company's activities, with the help of which the
                        company can use it as a means of increasing its
                        corporate attractiveness in the market of its
                        activities.
                      </p>
                      <p
                        data-v-7179bf4a=""
                        data-aos="fade-up"
                        data-aos-duration={850}
                        className="mb-3 about_text last:mb-10 aos-init aos-animate"
                      >
                        The corporate code is valid for each employee of the
                        company, from the degree of obligation to the function
                        of a specific company constitution.
                      </p>
                      <p
                        data-v-7179bf4a=""
                        data-aos="fade-up"
                        data-aos-duration={850}
                        className="mb-3 about_text last:mb-10 aos-init aos-animate"
                      >
                        The corporate code is valid for each employee of the
                        company, from the degree of obligation to the function
                        of a specific company constitution. This code regulates
                        the activities of the company not only by etiquette, but
                        also by general laws. In particular, employees of the
                        company must not take actions that are contrary to or
                        not in the interests of the company, regardless of their
                        position. That is, an employee with a higher competence
                        should not have a negative impact on the opinion of
                        employees whose position is lower than him, force him to
                        perform work that is beyond his competence or contrary
                        to his competence. Administration employees, as well as
                        all employees of the company, use the company's property
                        in the interests of third parties or for personal
                        interests, disclose limited (confidential) information,
                        etc. they do not have the right to pursue (directly or
                        indirectly) any material and / or moral interest.
                      </p>
                    </div>
                  </div>
                  <div data-v-ed0b00c6="" data-v-7179bf4a="">
                    <h4
                      data-v-ed0b00c6=""
                      className="mb-4 about__title aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-duration={800}
                    >
                      About management at UIC
                    </h4>
                    <ul data-v-ed0b00c6="">
                      <li
                        data-v-ed0b00c6=""
                        data-aos="fade-up"
                        data-aos-duration={800}
                        className="pt-5 first:pt-0 last:border-b-[0px] flex md:items-center gap-3 aos-init aos-animate"
                      >
                        <span
                          data-v-ed0b00c6=""
                          className="w-[8px] h-[8px] bg-[#00A795] rounded-[50%] flex shrink-0 mt-2 md:-mt-5"
                        />
                        <p
                          data-v-ed0b00c6=""
                          className="font-['Roboto'] border-b-[#39393B] border-b-[1px] w-full pb-5"
                        >
                          The main project management tool is Atlassian's
                          products based on the Platinum partnership with UIC
                          Group, Jira is a commercial error tracking system
                          designed to organize interaction with users, although
                          in some cases it is also used for project management.
                          Agile methodology is also used in project management.
                        </p>
                      </li>
                      <li
                        data-v-ed0b00c6=""
                        data-aos="fade-up"
                        data-aos-duration={800}
                        className="pt-5 first:pt-0 last:border-b-[0px] flex md:items-center gap-3 aos-init aos-animate"
                      >
                        <span
                          data-v-ed0b00c6=""
                          className="w-[8px] h-[8px] bg-[#00A795] rounded-[50%] flex shrink-0 mt-2 md:-mt-5"
                        />
                        <p
                          data-v-ed0b00c6=""
                          className="font-['Roboto'] border-b-[#39393B] border-b-[1px] w-full pb-5"
                        >
                          When implementing each new project, automated code
                          analysis is carried out, which helps to find
                          vulnerabilities in the code and timely suppress
                          errors.
                        </p>
                      </li>
                      <li
                        data-v-ed0b00c6=""
                        data-aos="fade-up"
                        data-aos-duration={800}
                        className="pt-5 first:pt-0 last:border-b-[0px] flex md:items-center gap-3 aos-init aos-animate"
                      >
                        <span
                          data-v-ed0b00c6=""
                          className="w-[8px] h-[8px] bg-[#00A795] rounded-[50%] flex shrink-0 mt-2 md:-mt-5"
                        />
                        <p
                          data-v-ed0b00c6=""
                          className="font-['Roboto'] border-b-[#39393B] border-b-[1px] w-full pb-5"
                        >
                          When implementing projects, we use our own project
                          life cycle, which was developed by our team and has
                          huge advantages in terms of time and quality of
                          product creation.
                        </p>
                      </li>
                      <li
                        data-v-ed0b00c6=""
                        data-aos="fade-up"
                        data-aos-duration={800}
                        className="pt-5 first:pt-0 last:border-b-[0px] flex md:items-center gap-3 aos-init aos-animate"
                      >
                        <span
                          data-v-ed0b00c6=""
                          className="w-[8px] h-[8px] bg-[#00A795] rounded-[50%] flex shrink-0 mt-2 md:-mt-5"
                        />
                        <p
                          data-v-ed0b00c6=""
                          className="font-['Roboto'] border-b-[#39393B] border-b-[1px] w-full pb-5"
                        >
                          The presence of qualified specialists in the QA
                          testing team, the team is interested in making any
                          product user-friendly, both in terms of functionality
                          and design. To do this, they constantly interact with
                          all members of the development team and constantly
                          compare the result with the given requirements.
                        </p>
                      </li>
                      <li
                        data-v-ed0b00c6=""
                        data-aos="fade-up"
                        data-aos-duration={800}
                        className="pt-5 first:pt-0 last:border-b-[0px] flex md:items-center gap-3 aos-init aos-animate"
                      >
                        <span
                          data-v-ed0b00c6=""
                          className="w-[8px] h-[8px] bg-[#00A795] rounded-[50%] flex shrink-0 mt-2 md:-mt-5"
                        />
                        <p
                          data-v-ed0b00c6=""
                          className="font-['Roboto'] border-b-[#39393B] border-b-[1px] w-full pb-5"
                        >
                          Well-established work with checklists, all these
                          recommendations are difficult to take into account and
                          implement at the checklist design stage. We pay much
                          attention to this mechanism, the better it works and
                          the more benefits it brings to our business. We have
                          been automating work with checklists for many years
                          and have accumulated our own large database of
                          templates that can become the basis for your own
                          checklist.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div data-v-7179bf4a="" className="mt-10">
                    <h4
                      className="about__title mb-4 aos-init aos-animate"
                      data-aos="fade-down"
                      data-aos-duration={800}
                    >
                      Additional pluses:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div
                        data-aos="fade-left"
                        data-aos-duration={800}
                        className="bg-[#252527] p-4 md:py-4 md:pl-6 md:pr-5 rounded-[12px] relative flex items-center aos-init aos-animate"
                      >
                        <span className="w-[4px] min-h-[24px] bg-[#00A795] block absolute left-0 top-[50%] translate-y-[-50%] rounded-[4px]" />
                        <p className="about_text">
                          A licensed version of the Windows software
                        </p>
                      </div>
                      <div
                        data-aos="fade-left"
                        data-aos-duration={800}
                        className="bg-[#252527] p-4 md:py-4 md:pl-6 md:pr-5 rounded-[12px] relative flex items-center aos-init aos-animate"
                      >
                        <span className="w-[4px] min-h-[24px] bg-[#00A795] block absolute left-0 top-[50%] translate-y-[-50%] rounded-[4px]" />
                        <p className="about_text">
                          Licensed antivirus for each device
                        </p>
                      </div>
                      <div
                        data-aos="fade-left"
                        data-aos-duration={800}
                        className="bg-[#252527] p-4 md:py-4 md:pl-6 md:pr-5 rounded-[12px] relative flex items-center aos-init aos-animate"
                      >
                        <span className="w-[4px] min-h-[24px] bg-[#00A795] block absolute left-0 top-[50%] translate-y-[-50%] rounded-[4px]" />
                        <p className="about_text">
                          Monthly bonus system (in addition to the basic monthly
                          salary, additional bonuses can be obtained through
                          monthly initiatives in accordance with existing
                          criteria)
                        </p>
                      </div>
                      <div
                        data-aos="fade-left"
                        data-aos-duration={800}
                        className="bg-[#252527] p-4 md:py-4 md:pl-6 md:pr-5 rounded-[12px] relative flex items-center aos-init aos-animate"
                      >
                        <span className="w-[4px] min-h-[24px] bg-[#00A795] block absolute left-0 top-[50%] translate-y-[-50%] rounded-[4px]" />
                        <p className="about_text">
                          Location in the city center (within walking distance
                          from the Oybek metro station and bus stops, convenient
                          parking, a minute from Korzinka.uz, pharmacies and
                          cafes)
                        </p>
                      </div>
                      <div
                        data-aos="fade-left"
                        data-aos-duration={800}
                        className="bg-[#252527] p-4 md:py-4 md:pl-6 md:pr-5 rounded-[12px] relative flex items-center aos-init aos-animate"
                      >
                        <span className="w-[4px] min-h-[24px] bg-[#00A795] block absolute left-0 top-[50%] translate-y-[-50%] rounded-[4px]" />
                        <p className="about_text">
                          Comfortable office with all conditions
                        </p>
                      </div>
                      <div
                        data-aos="fade-left"
                        data-aos-duration={800}
                        className="bg-[#252527] p-4 md:py-4 md:pl-6 md:pr-5 rounded-[12px] relative flex items-center aos-init aos-animate"
                      >
                        <span className="w-[4px] min-h-[24px] bg-[#00A795] block absolute left-0 top-[50%] translate-y-[-50%] rounded-[4px]" />
                        <p className="about_text">
                          The company's employees are allocated computers
                          according to their needs
                        </p>
                      </div>
                      <div
                        data-aos="fade-left"
                        data-aos-duration={800}
                        className="bg-[#252527] p-4 md:py-4 md:pl-6 md:pr-5 rounded-[12px] relative flex items-center aos-init aos-animate"
                      >
                        <span className="w-[4px] min-h-[24px] bg-[#00A795] block absolute left-0 top-[50%] translate-y-[-50%] rounded-[4px]" />
                        <p className="about_text">
                          Opportunity to work in a large and friendly team
                        </p>
                      </div>
                      <div
                        data-aos="fade-left"
                        data-aos-duration={800}
                        className="bg-[#252527] p-4 md:py-4 md:pl-6 md:pr-5 rounded-[12px] relative flex items-center aos-init aos-animate"
                      >
                        <span className="w-[4px] min-h-[24px] bg-[#00A795] block absolute left-0 top-[50%] translate-y-[-50%] rounded-[4px]" />
                        <p className="about_text">
                          Training from experienced professionals
                        </p>
                      </div>
                      <div
                        data-aos="fade-left"
                        data-aos-duration={800}
                        className="bg-[#252527] p-4 md:py-4 md:pl-6 md:pr-5 rounded-[12px] relative flex items-center aos-init aos-animate"
                      >
                        <span className="w-[4px] min-h-[24px] bg-[#00A795] block absolute left-0 top-[50%] translate-y-[-50%] rounded-[4px]" />
                        <p className="about_text">
                          Work in large-scale projects (local and foreign
                          projects)
                        </p>
                      </div>
                      <div
                        data-aos="fade-left"
                        data-aos-duration={800}
                        className="bg-[#252527] p-4 md:py-4 md:pl-6 md:pr-5 rounded-[12px] relative flex items-center aos-init aos-animate"
                      >
                        <span className="w-[4px] min-h-[24px] bg-[#00A795] block absolute left-0 top-[50%] translate-y-[-50%] rounded-[4px]" />
                        <p className="about_text">
                          Official employment (according to the labor code of
                          the Republic of Uzbekistan)
                        </p>
                      </div>
                      <div
                        data-aos="fade-left"
                        data-aos-duration={800}
                        className="bg-[#252527] p-4 md:py-4 md:pl-6 md:pr-5 rounded-[12px] relative flex items-center aos-init aos-animate"
                      >
                        <span className="w-[4px] min-h-[24px] bg-[#00A795] block absolute left-0 top-[50%] translate-y-[-50%] rounded-[4px]" />
                        <p className="about_text">
                          Business trips (to regions and international
                          countries)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div data-v-6be8d37a="" data-v-7179bf4a="" className="mt-10">
                    <h4
                      data-v-6be8d37a=""
                      className="about__title mb-4 aos-init aos-animate"
                      data-aos="fade-down"
                      data-aos-duration={800}
                    >
                      Our Portfolio
                    </h4>
                    <div
                      data-v-6be8d37a=""
                      className="grid grid-cols-1 md:grid-cols-2 gap-3"
                    >
                      <a
                        data-v-6be8d37a=""
                        target="_blank"
                        data-aos="fade-left"
                        data-aos-duration={800}
                        href="https://dribbble.com/uicgroup"
                        className="portfolio-item bg-[#252527] transition p-4 md:py-4 md:pl-6 md:pr-5 rounded-[12px] relative flex items-center group cursor-pointer duration-500 hover:bg-[#D85888] aos-init aos-animate"
                      >
                        <span
                          data-v-6be8d37a=""
                          className="w-[4px] min-h-[24px] bg-[#ffffff1f] transition duration-300 group-hover:bg-[#ffffff1f] block absolute left-0 top-[50%] translate-y-[-50%] rounded-[4px]"
                        />
                      </a>
                      <div
                        data-v-6be8d37a=""
                        className="about_text flex items-center"
                      >
                        <a
                          data-v-6be8d37a=""
                          target="_blank"
                          data-aos="fade-left"
                          data-aos-duration={800}
                          href="https://dribbble.com/uicgroup"
                          className="portfolio-item bg-[#252527] transition p-4 md:py-4 md:pl-6 md:pr-5 rounded-[12px] relative flex items-center group cursor-pointer duration-500 hover:bg-[#D85888] aos-init aos-animate"
                        >
                          <i
                            data-v-56c03d90=""
                            data-v-6be8d37a=""
                            className="icon hover:text-red-500 cursor-pointer w-[20px] md:w-[26px]"
                          >
                            <svg
                              width={32}
                              height={32}
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.394 14.077C7.282 14.3995 11.005 13.6195 14.0875 11.857C12.5367 9.5535 10.7197 7.44091 8.674 5.56302C7.26457 6.55205 6.07009 7.81635 5.16263 9.27963C4.25516 10.7429 3.65352 12.3749 3.394 14.077ZM8.041 2.40702C5.6687 3.79539 3.70125 5.7807 2.3344 8.16546C0.96754 10.5502 0.248911 13.2513 0.250001 16C0.250001 24.6985 7.3015 31.75 16 31.75C24.6985 31.75 31.75 24.6985 31.75 16C31.75 7.30152 24.6985 0.250021 16 0.250021C13.2022 0.24549 10.4541 0.989732 8.041 2.40552V2.40702ZM11.47 4.07652C13.3614 5.91397 15.0592 7.94057 16.537 10.1245C18.4076 8.51059 19.859 6.46724 20.767 4.16952C19.2518 3.55967 17.6333 3.24748 16 3.25002C14.4527 3.24829 12.9181 3.52889 11.4715 4.07802L11.47 4.07652ZM23.4115 5.62452C22.2637 8.38051 20.4537 10.8108 18.142 12.7C18.664 13.6135 19.1485 14.548 19.594 15.5005C22.4185 14.401 25.474 13.894 28.6165 14.1535C28.3681 12.455 27.7792 10.8241 26.885 9.35873C25.9909 7.89337 24.8099 6.62375 23.413 5.62602L23.4115 5.62452ZM28.696 17.1715C25.963 16.8925 23.266 17.3065 20.758 18.268C21.7948 21.0093 22.4817 23.8704 22.8025 26.7835C24.4559 25.7404 25.8473 24.331 26.8689 22.6643C27.8906 20.9976 28.5152 19.1182 28.6945 17.1715H28.696ZM19.912 28.1365C19.6913 25.2055 19.0606 22.3199 18.0385 19.564C14.8615 21.3895 12.1345 24.118 10.24 27.3775C12.025 28.2826 13.9987 28.7529 16 28.75C17.365 28.75 18.6805 28.5355 19.9135 28.138L19.912 28.1365ZM7.7395 25.7125C9.9355 22.0015 13.1245 18.8545 16.8775 16.774C16.5018 15.9708 16.0965 15.1818 15.6625 14.4085C12.0415 16.4965 7.7125 17.4145 3.2935 17.077C3.57539 20.4302 5.17398 23.5351 7.7395 25.7125Z"
                                fill="white"
                              />
                            </svg>
                          </i>
                        </a>
                        <a
                          data-v-6be8d37a=""
                          href="https://dribbble.com/uicgroup"
                          target="_blank"
                          className="ml-4 pl-4 border-l border-solid border-[#ffffff1f] leading-[24px] font-semibold text-sm sm:text-base transition"
                        >
                          www.dribbble.com/uicgroup
                        </a>
                      </div>
                      <a
                        data-v-6be8d37a=""
                        target="_blank"
                        data-aos="fade-left"
                        data-aos-duration={800}
                        href="https://www.behance.net/uic_group"
                        className="portfolio-item bg-[#252527] transition p-4 md:py-4 md:pl-6 md:pr-5 rounded-[12px] relative flex items-center group cursor-pointer duration-500 hover:bg-[#2157F6] aos-init aos-animate"
                      >
                        <span
                          data-v-6be8d37a=""
                          className="w-[4px] min-h-[24px] bg-[#ffffff1f] transition duration-300 group-hover:bg-[#ffffff1f] block absolute left-0 top-[50%] translate-y-[-50%] rounded-[4px]"
                        />
                      </a>
                      <div
                        data-v-6be8d37a=""
                        className="about_text flex items-center"
                      >
                        <a
                          data-v-6be8d37a=""
                          target="_blank"
                          data-aos="fade-left"
                          data-aos-duration={800}
                          href="https://www.behance.net/uic_group"
                          className="portfolio-item bg-[#252527] transition p-4 md:py-4 md:pl-6 md:pr-5 rounded-[12px] relative flex items-center group cursor-pointer duration-500 hover:bg-[#2157F6] aos-init aos-animate"
                        >
                          <i
                            data-v-56c03d90=""
                            data-v-6be8d37a=""
                            className="icon hover:text-red-500 cursor-pointer w-[20px] md:w-[26px]"
                          >
                            <svg
                              width={36}
                              height={24}
                              viewBox="0 0 36 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M23.0038 4.50452H32.5372V1.7732H23.0038V4.50452ZM25.2623 10.4642C24.6548 11.0823 24.2717 11.9196 24.1151 12.9762H31.5297C31.4514 11.8486 31.0662 10.9966 30.3846 10.4099C29.6946 9.82726 28.8458 9.537 27.8298 9.537C26.7291 9.537 25.8698 9.84606 25.2623 10.4642ZM31.6969 6.79733C32.8463 7.30267 33.7924 8.10453 34.5375 9.19873C35.2169 10.1635 35.6529 11.2827 35.8519 12.5544C35.9683 13.2978 36.0149 14.3753 35.9959 15.7764H24.0092C24.0812 17.4031 24.6484 18.5454 25.7322 19.199C26.3883 19.6061 27.1779 19.8108 28.1049 19.8108C29.0807 19.8108 29.8787 19.5623 30.4904 19.0674C30.827 18.798 31.1233 18.4263 31.3773 17.9502H35.7694C35.653 18.9108 35.1196 19.8901 34.1755 20.8841C32.7023 22.4607 30.6386 23.25 27.9864 23.25C25.7957 23.25 23.8632 22.586 22.1932 21.2537C20.5147 19.9236 19.6807 17.756 19.6807 14.7574C19.6807 11.9447 20.4363 9.78759 21.9455 8.2862C23.4589 6.78898 25.4168 6.03516 27.8277 6.03516C29.2607 6.03516 30.5497 6.28991 31.6969 6.79733ZM4.4344 13.0347V18.8878H9.8361C10.8013 18.8878 11.5548 18.7583 12.0904 18.5015C13.0661 18.0212 13.553 17.1108 13.553 15.7618C13.553 14.6175 13.0831 13.8345 12.1369 13.4064C11.6078 13.1683 10.8648 13.043 9.91232 13.0347H4.4344ZM4.4344 4.56091V9.40337H9.84457C10.8077 9.40337 11.5929 9.2217 12.1983 8.85836C12.7994 8.49502 13.1021 7.85185 13.1021 6.93306C13.1021 5.90777 12.7042 5.2333 11.9083 4.90337C11.2183 4.67576 10.342 4.56091 9.27731 4.56091H4.4344ZM16.5162 3.08875C17.1957 4.02216 17.5365 5.13724 17.5365 6.43817C17.5365 7.77669 17.1957 8.85626 16.5078 9.67065C16.1226 10.1259 15.5574 10.5435 14.8103 10.9194C15.9448 11.3286 16.7999 11.9739 17.382 12.8572C17.9577 13.7384 18.2477 14.8117 18.2477 16.073C18.2477 17.3739 17.9175 18.5412 17.255 19.5727C16.8359 20.2556 16.311 20.8319 15.6802 21.2997C14.9711 21.8363 14.135 22.2017 13.1677 22.4022C12.2004 22.6006 11.1548 22.6966 10.0245 22.6966H0V0.75H10.7505C13.464 0.789675 15.3838 1.56856 16.5162 3.08875Z"
                                fill="white"
                              />
                            </svg>
                          </i>
                        </a>
                        <a
                          data-v-6be8d37a=""
                          href="https://www.behance.net/uic_group"
                          target="_blank"
                          className="ml-4 pl-4 border-l border-solid border-[#ffffff1f] leading-[24px] font-semibold text-sm sm:text-base transition"
                        >
                          www.behance.net/uic_group
                        </a>
                      </div>
                    </div>
                  </div>
                  <div data-v-1663021d="" data-v-7179bf4a="" className="mt-10">
                    <div
                      data-v-1663021d=""
                      className="flex items-center justify-between mb-5"
                    >
                      <h4
                        data-v-1663021d=""
                        data-aos="fade-right"
                        data-aos-duration={800}
                        className="about__title aos-init aos-animate"
                      >
                        Do you want to join us?
                      </h4>
                      <a
                        data-v-1663021d=""
                        href="/vacancy"
                        className="text-[18px] font-medium leading-[130%] tracking-[0.002em] text-[#00A795] hover:text-[#049282] duration-300 aos-init aos-animate"
                        data-aos="fade-left"
                        data-aos-duration={800}
                      >
                        All vacancies
                      </a>
                    </div>
                    <div data-v-1663021d="" className="relative">
                      <div data-v-1663021d="" className="flex swiper_buttons">
                        <button
                          data-v-1663021d=""
                          className="swiper-next-button swiper-button group absolute top-[190px] sm:top-[70px] left-auto right-[70px] sm:right-[25px] z-10 cursor-pointer"
                          aria-label="button"
                        >
                          <i
                            data-v-56c03d90=""
                            data-v-1663021d=""
                            className="icon hover:text-red-500 text-[#00A795] md:text-[#fff] transition duration-300 hover:translate-x-[5px]"
                          >
                            <svg
                              width={23}
                              height={11}
                              viewBox="0 0 23 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.8224 0.218756L22.7722 4.97188C23.0759 5.26355 23.0759 5.73645 22.7722 6.02812L17.8224 10.7812C17.5187 11.0729 17.0262 11.0729 16.7225 10.7812C16.4188 10.4896 16.4188 10.0167 16.7225 9.72499L20.3445 6.24688H0V4.75312H20.3445L16.7225 1.27501C16.4188 0.98333 16.4188 0.510431 16.7225 0.218756C17.0262 -0.0729188 17.5187 -0.0729188 17.8224 0.218756Z"
                                fill="white"
                              />
                            </svg>
                          </i>
                        </button>
                        <button
                          data-v-1663021d=""
                          className="swiper-prev-button swiper-button absolute top-[190px] sm:top-[70px] left-[70px] sm:left-[26px] md:left-[0] z-10 group cursor-pointer"
                          aria-label="button"
                        >
                          <i
                            data-v-56c03d90=""
                            data-v-1663021d=""
                            className="icon hover:text-red-500 text-[#00A795] md:text-[#fff] transition duration-300 hover:translate-x-[-5px]"
                          >
                            <svg
                              width={23}
                              height={11}
                              viewBox="0 0 23 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.17755 0.218756L0.227806 4.97188C-0.0759354 5.26355 -0.0759354 5.73645 0.227806 6.02812L5.17755 10.7812C5.48129 11.0729 5.97375 11.0729 6.2775 10.7812C6.58124 10.4896 6.58124 10.0167 6.2775 9.72499L2.6555 6.24688H23V4.75312H2.6555L6.2775 1.27501C6.58124 0.98333 6.58124 0.510431 6.2775 0.218756C5.97375 -0.0729188 5.48129 -0.0729188 5.17755 0.218756Z"
                                fill="white"
                              />
                            </svg>
                          </i>
                        </button>
                      </div>
                      <span
                        data-v-1663021d=""
                        className="slider-gradient slider-gradient_left absolute opacity-0 sm:opacity-100 left-0 top-0 w-[50px] sm:w-[150px] md:w-[180px] h-full z-[3]"
                      />
                      <div
                        data-v-1663021d=""
                        className="swiper swiper-initialized swiper-horizontal swiper-pointer-events vacancy-slider h-[220px] sm:h-[200px]"
                      >
                        <div
                          className="swiper-wrapper"
                          style={{
                            transform: "translate3d(-1717px, 0px, 0px)",
                            transitionDuration: "0ms"
                          }}
                        >
                          <div
                            className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next swiper-slide-duplicate"
                            data-swiper-slide-index={3}
                            style={{ width: 384, marginRight: 20 }}
                          >
                            <a
                              data-v-1663021d=""
                              href="/vacancy/21"
                              className="relative group bg-vacancy-card-background text-white p-3 sm:pt-5 sm:p-4 rounded-8 cursor-pointer block vacancy-card"
                            >
                              <span
                                data-v-1663021d=""
                                className="text-base sm:text-lg font-bold line-clamp-1"
                              >
                                HR manager
                              </span>
                              <hr
                                data-v-1663021d=""
                                className="my-3 sm:my-4 border-vacancy-card-divider"
                              />
                              <div
                                data-v-1663021d=""
                                className="flex flex-col justify-between gap-2 sm:flex-row"
                              >
                                <div
                                  data-v-1663021d=""
                                  className="flex items-center"
                                >
                                  <div data-v-1663021d="" className="icon-bg">
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={12}
                                        height={14}
                                        viewBox="0 0 12 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M0.861328 5.50245H11.1444"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.5629 7.75559H8.56824"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M6.00284 7.75559H6.00818"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.4379 7.75559H3.44324"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.5629 9.99781H8.56824"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M6.00284 9.99781H6.00818"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.4379 9.99781H3.44324"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.33315 1.23077V3.12929"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.67299 1.23077V3.12929"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M8.44557 2.14184H3.56058C1.86634 2.14184 0.808105 3.08565 0.808105 4.82051V10.0415C0.808105 11.8036 1.86634 12.7692 3.56058 12.7692H8.44022C10.1398 12.7692 11.1927 11.82 11.1927 10.0851V4.82051C11.198 3.08565 10.1452 2.14184 8.44557 2.14184Z"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                  <span
                                    data-v-1663021d=""
                                    className="font-xs text-[13px] text-vacancy-card-icon-text"
                                  >
                                    Monday - Friday
                                  </span>
                                </div>
                                <div
                                  data-v-1663021d=""
                                  className="flex items-center"
                                >
                                  <div data-v-1663021d="" className="icon-bg">
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M11.3367 6.00028C11.3367 8.94778 8.94761 11.3368 6.00011 11.3368C3.05261 11.3368 0.663574 8.94778 0.663574 6.00028C0.663574 3.05278 3.05261 0.663742 6.00011 0.663742C8.94761 0.663742 11.3367 3.05278 11.3367 6.00028Z"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M7.97969 7.69782L5.80469 6.40032V3.60397"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                  <span
                                    data-v-1663021d=""
                                    className="font-xs text-[13px] text-vacancy-card-icon-text"
                                  >
                                    09:00 - 18:00
                                  </span>
                                </div>
                              </div>
                              <div data-v-1663021d="" className="h-7" />
                              <div
                                data-v-1663021d=""
                                className="absolute bottom-0 left-0 w-full px-3 translate-y-1/2"
                              >
                                <div
                                  data-v-1663021d=""
                                  className="transition-colors footer"
                                >
                                  <div
                                    data-v-1663021d=""
                                    className="flex-1 py-0.5 px-2 flex items-center gap-2"
                                  >
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500 text-[#00A795] group-hover:text-white transition-colors icons"
                                    >
                                      <svg
                                        width={22}
                                        height={22}
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M3.26586 19.6625C3.28304 19.8344 3.38617 19.9719 3.52367 20.0578C3.60961 20.0922 3.69555 20.1266 3.78148 20.1266C3.85023 20.1266 3.93617 20.1094 4.00492 20.075L5.25961 19.4734C9.09242 17.6344 13.3549 16.6719 17.6174 16.6719H19.9377C20.2299 16.6719 20.4534 16.4484 20.4534 16.1562C20.4534 15.8641 20.2299 15.6406 19.9377 15.6406H17.6174C13.2174 15.6406 8.80023 16.6375 4.81273 18.5281L4.21117 18.8203L3.95336 16.6031C3.91898 16.3281 3.66117 16.1219 3.38617 16.1562C3.11117 16.1906 2.90492 16.4484 2.9393 16.7234L3.26586 19.6625Z"
                                          fill="#00A795"
                                        />
                                        <path
                                          d="M1.71875 8.9375C2.01094 8.9375 2.23438 8.71406 2.23438 8.42188C2.23438 8.12969 2.01094 7.90625 1.71875 7.90625C1.42656 7.90625 1.20312 7.68281 1.20312 7.39062C1.20312 7.09844 1.42656 6.875 1.71875 6.875H20.2812C20.5734 6.875 20.7969 7.09844 20.7969 7.39062C20.7969 7.68281 20.5734 7.90625 20.2812 7.90625C19.9891 7.90625 19.7656 8.12969 19.7656 8.42188C19.7656 8.71406 19.9891 8.9375 20.2812 8.9375C21.1406 8.9375 21.8281 8.25 21.8281 7.39062C21.8281 6.53125 21.1406 5.84375 20.2812 5.84375H1.71875C0.859375 5.84375 0.171875 6.53125 0.171875 7.39062C0.171875 8.25 0.859375 8.9375 1.71875 8.9375Z"
                                          fill="#00A795"
                                        />
                                        <path
                                          d="M20.3497 14.7469C20.4528 14.6094 20.47 14.4547 20.4356 14.3L18.7169 8.28438C18.6481 8.06094 18.459 7.90625 18.2184 7.90625H3.78092C3.55748 7.90625 3.35123 8.06094 3.28248 8.28438L1.56373 14.3C1.51217 14.4547 1.54654 14.6266 1.64967 14.7469C1.75279 14.8844 1.90748 14.9531 2.06217 14.9531H19.9372C20.0919 14.9531 20.2465 14.8844 20.3497 14.7469ZM10.9997 12.0312C9.86529 12.0312 8.93717 11.3438 8.93717 10.4844C8.93717 9.625 9.86529 8.9375 10.9997 8.9375C12.134 8.9375 13.0622 9.625 13.0622 10.4844C13.0622 11.3438 12.134 12.0312 10.9997 12.0312Z"
                                          fill="#00A795"
                                        />
                                      </svg>
                                    </i>
                                    <span
                                      data-v-1663021d=""
                                      className="text-white text-[13px]"
                                    >
                                      10 000 000 - 20 000 000 UZS
                                    </span>
                                  </div>
                                  <button
                                    data-v-1663021d=""
                                    className="bg-[#00A795] group-hover:bg-[#FFFFFF47] transition-colors h-[24px] w-[24px] rounded-full"
                                    aria-label="button"
                                  >
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={16}
                                        height={12}
                                        viewBox="0 0 16 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M9.05572 11L14.3335 6L1.00016 6M9.05572 1L14.3335 6L9.05572 1Z"
                                          stroke="#fff"
                                          strokeWidth="1.6"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </button>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div
                            className="swiper-slide swiper-slide-duplicate"
                            data-swiper-slide-index={4}
                            style={{ width: 384, marginRight: 20 }}
                          >
                            <a
                              data-v-1663021d=""
                              href="/vacancy/23"
                              className="relative group bg-vacancy-card-background text-white p-3 sm:pt-5 sm:p-4 rounded-8 cursor-pointer block vacancy-card"
                            >
                              <span
                                data-v-1663021d=""
                                className="text-base sm:text-lg font-bold line-clamp-1"
                              >
                                Project manager
                              </span>
                              <hr
                                data-v-1663021d=""
                                className="my-3 sm:my-4 border-vacancy-card-divider"
                              />
                              <div
                                data-v-1663021d=""
                                className="flex flex-col justify-between gap-2 sm:flex-row"
                              >
                                <div
                                  data-v-1663021d=""
                                  className="flex items-center"
                                >
                                  <div data-v-1663021d="" className="icon-bg">
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={12}
                                        height={14}
                                        viewBox="0 0 12 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M0.861328 5.50245H11.1444"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.5629 7.75559H8.56824"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M6.00284 7.75559H6.00818"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.4379 7.75559H3.44324"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.5629 9.99781H8.56824"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M6.00284 9.99781H6.00818"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.4379 9.99781H3.44324"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.33315 1.23077V3.12929"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.67299 1.23077V3.12929"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M8.44557 2.14184H3.56058C1.86634 2.14184 0.808105 3.08565 0.808105 4.82051V10.0415C0.808105 11.8036 1.86634 12.7692 3.56058 12.7692H8.44022C10.1398 12.7692 11.1927 11.82 11.1927 10.0851V4.82051C11.198 3.08565 10.1452 2.14184 8.44557 2.14184Z"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                  <span
                                    data-v-1663021d=""
                                    className="font-xs text-[13px] text-vacancy-card-icon-text"
                                  >
                                    Monday - Friday
                                  </span>
                                </div>
                                <div
                                  data-v-1663021d=""
                                  className="flex items-center"
                                >
                                  <div data-v-1663021d="" className="icon-bg">
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M11.3367 6.00028C11.3367 8.94778 8.94761 11.3368 6.00011 11.3368C3.05261 11.3368 0.663574 8.94778 0.663574 6.00028C0.663574 3.05278 3.05261 0.663742 6.00011 0.663742C8.94761 0.663742 11.3367 3.05278 11.3367 6.00028Z"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M7.97969 7.69782L5.80469 6.40032V3.60397"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                  <span
                                    data-v-1663021d=""
                                    className="font-xs text-[13px] text-vacancy-card-icon-text"
                                  >
                                    09:00 - 18:00
                                  </span>
                                </div>
                              </div>
                              <div data-v-1663021d="" className="h-7" />
                              <div
                                data-v-1663021d=""
                                className="absolute bottom-0 left-0 w-full px-3 translate-y-1/2"
                              >
                                <div
                                  data-v-1663021d=""
                                  className="transition-colors footer"
                                >
                                  <div
                                    data-v-1663021d=""
                                    className="flex-1 py-0.5 px-2 flex items-center gap-2"
                                  >
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500 text-[#00A795] group-hover:text-white transition-colors icons"
                                    >
                                      <svg
                                        width={22}
                                        height={22}
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M3.26586 19.6625C3.28304 19.8344 3.38617 19.9719 3.52367 20.0578C3.60961 20.0922 3.69555 20.1266 3.78148 20.1266C3.85023 20.1266 3.93617 20.1094 4.00492 20.075L5.25961 19.4734C9.09242 17.6344 13.3549 16.6719 17.6174 16.6719H19.9377C20.2299 16.6719 20.4534 16.4484 20.4534 16.1562C20.4534 15.8641 20.2299 15.6406 19.9377 15.6406H17.6174C13.2174 15.6406 8.80023 16.6375 4.81273 18.5281L4.21117 18.8203L3.95336 16.6031C3.91898 16.3281 3.66117 16.1219 3.38617 16.1562C3.11117 16.1906 2.90492 16.4484 2.9393 16.7234L3.26586 19.6625Z"
                                          fill="#00A795"
                                        />
                                        <path
                                          d="M1.71875 8.9375C2.01094 8.9375 2.23438 8.71406 2.23438 8.42188C2.23438 8.12969 2.01094 7.90625 1.71875 7.90625C1.42656 7.90625 1.20312 7.68281 1.20312 7.39062C1.20312 7.09844 1.42656 6.875 1.71875 6.875H20.2812C20.5734 6.875 20.7969 7.09844 20.7969 7.39062C20.7969 7.68281 20.5734 7.90625 20.2812 7.90625C19.9891 7.90625 19.7656 8.12969 19.7656 8.42188C19.7656 8.71406 19.9891 8.9375 20.2812 8.9375C21.1406 8.9375 21.8281 8.25 21.8281 7.39062C21.8281 6.53125 21.1406 5.84375 20.2812 5.84375H1.71875C0.859375 5.84375 0.171875 6.53125 0.171875 7.39062C0.171875 8.25 0.859375 8.9375 1.71875 8.9375Z"
                                          fill="#00A795"
                                        />
                                        <path
                                          d="M20.3497 14.7469C20.4528 14.6094 20.47 14.4547 20.4356 14.3L18.7169 8.28438C18.6481 8.06094 18.459 7.90625 18.2184 7.90625H3.78092C3.55748 7.90625 3.35123 8.06094 3.28248 8.28438L1.56373 14.3C1.51217 14.4547 1.54654 14.6266 1.64967 14.7469C1.75279 14.8844 1.90748 14.9531 2.06217 14.9531H19.9372C20.0919 14.9531 20.2465 14.8844 20.3497 14.7469ZM10.9997 12.0312C9.86529 12.0312 8.93717 11.3438 8.93717 10.4844C8.93717 9.625 9.86529 8.9375 10.9997 8.9375C12.134 8.9375 13.0622 9.625 13.0622 10.4844C13.0622 11.3438 12.134 12.0312 10.9997 12.0312Z"
                                          fill="#00A795"
                                        />
                                      </svg>
                                    </i>
                                    <span
                                      data-v-1663021d=""
                                      className="text-white text-[13px]"
                                    >
                                      8 000 000 - 14 000 000 UZS
                                    </span>
                                  </div>
                                  <button
                                    data-v-1663021d=""
                                    className="bg-[#00A795] group-hover:bg-[#FFFFFF47] transition-colors h-[24px] w-[24px] rounded-full"
                                    aria-label="button"
                                  >
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={16}
                                        height={12}
                                        viewBox="0 0 16 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M9.05572 11L14.3335 6L1.00016 6M9.05572 1L14.3335 6L9.05572 1Z"
                                          stroke="#fff"
                                          strokeWidth="1.6"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </button>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div
                            className="swiper-slide swiper-slide-duplicate"
                            data-swiper-slide-index={5}
                            style={{ width: 384, marginRight: 20 }}
                          >
                            <a
                              data-v-1663021d=""
                              href="/vacancy/1"
                              className="relative group bg-vacancy-card-background text-white p-3 sm:pt-5 sm:p-4 rounded-8 cursor-pointer block vacancy-card"
                            >
                              <span
                                data-v-1663021d=""
                                className="text-base sm:text-lg font-bold line-clamp-1"
                              >
                                Frontend developer (VueJS)
                              </span>
                              <hr
                                data-v-1663021d=""
                                className="my-3 sm:my-4 border-vacancy-card-divider"
                              />
                              <div
                                data-v-1663021d=""
                                className="flex flex-col justify-between gap-2 sm:flex-row"
                              >
                                <div
                                  data-v-1663021d=""
                                  className="flex items-center"
                                >
                                  <div data-v-1663021d="" className="icon-bg">
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={12}
                                        height={14}
                                        viewBox="0 0 12 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M0.861328 5.50245H11.1444"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.5629 7.75559H8.56824"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M6.00284 7.75559H6.00818"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.4379 7.75559H3.44324"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.5629 9.99781H8.56824"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M6.00284 9.99781H6.00818"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.4379 9.99781H3.44324"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.33315 1.23077V3.12929"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.67299 1.23077V3.12929"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M8.44557 2.14184H3.56058C1.86634 2.14184 0.808105 3.08565 0.808105 4.82051V10.0415C0.808105 11.8036 1.86634 12.7692 3.56058 12.7692H8.44022C10.1398 12.7692 11.1927 11.82 11.1927 10.0851V4.82051C11.198 3.08565 10.1452 2.14184 8.44557 2.14184Z"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                  <span
                                    data-v-1663021d=""
                                    className="font-xs text-[13px] text-vacancy-card-icon-text"
                                  >
                                    Monday - Friday
                                  </span>
                                </div>
                                <div
                                  data-v-1663021d=""
                                  className="flex items-center"
                                >
                                  <div data-v-1663021d="" className="icon-bg">
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M11.3367 6.00028C11.3367 8.94778 8.94761 11.3368 6.00011 11.3368C3.05261 11.3368 0.663574 8.94778 0.663574 6.00028C0.663574 3.05278 3.05261 0.663742 6.00011 0.663742C8.94761 0.663742 11.3367 3.05278 11.3367 6.00028Z"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M7.97969 7.69782L5.80469 6.40032V3.60397"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                  <span
                                    data-v-1663021d=""
                                    className="font-xs text-[13px] text-vacancy-card-icon-text"
                                  >
                                    09:00 - 18:00
                                  </span>
                                </div>
                              </div>
                              <div data-v-1663021d="" className="h-7" />
                              <div
                                data-v-1663021d=""
                                className="absolute bottom-0 left-0 w-full px-3 translate-y-1/2"
                              >
                                <div
                                  data-v-1663021d=""
                                  className="transition-colors footer"
                                >
                                  <div
                                    data-v-1663021d=""
                                    className="flex-1 py-0.5 px-2 flex items-center gap-2"
                                  >
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500 text-[#00A795] group-hover:text-white transition-colors icons"
                                    >
                                      <svg
                                        width={22}
                                        height={22}
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M3.26586 19.6625C3.28304 19.8344 3.38617 19.9719 3.52367 20.0578C3.60961 20.0922 3.69555 20.1266 3.78148 20.1266C3.85023 20.1266 3.93617 20.1094 4.00492 20.075L5.25961 19.4734C9.09242 17.6344 13.3549 16.6719 17.6174 16.6719H19.9377C20.2299 16.6719 20.4534 16.4484 20.4534 16.1562C20.4534 15.8641 20.2299 15.6406 19.9377 15.6406H17.6174C13.2174 15.6406 8.80023 16.6375 4.81273 18.5281L4.21117 18.8203L3.95336 16.6031C3.91898 16.3281 3.66117 16.1219 3.38617 16.1562C3.11117 16.1906 2.90492 16.4484 2.9393 16.7234L3.26586 19.6625Z"
                                          fill="#00A795"
                                        />
                                        <path
                                          d="M1.71875 8.9375C2.01094 8.9375 2.23438 8.71406 2.23438 8.42188C2.23438 8.12969 2.01094 7.90625 1.71875 7.90625C1.42656 7.90625 1.20312 7.68281 1.20312 7.39062C1.20312 7.09844 1.42656 6.875 1.71875 6.875H20.2812C20.5734 6.875 20.7969 7.09844 20.7969 7.39062C20.7969 7.68281 20.5734 7.90625 20.2812 7.90625C19.9891 7.90625 19.7656 8.12969 19.7656 8.42188C19.7656 8.71406 19.9891 8.9375 20.2812 8.9375C21.1406 8.9375 21.8281 8.25 21.8281 7.39062C21.8281 6.53125 21.1406 5.84375 20.2812 5.84375H1.71875C0.859375 5.84375 0.171875 6.53125 0.171875 7.39062C0.171875 8.25 0.859375 8.9375 1.71875 8.9375Z"
                                          fill="#00A795"
                                        />
                                        <path
                                          d="M20.3497 14.7469C20.4528 14.6094 20.47 14.4547 20.4356 14.3L18.7169 8.28438C18.6481 8.06094 18.459 7.90625 18.2184 7.90625H3.78092C3.55748 7.90625 3.35123 8.06094 3.28248 8.28438L1.56373 14.3C1.51217 14.4547 1.54654 14.6266 1.64967 14.7469C1.75279 14.8844 1.90748 14.9531 2.06217 14.9531H19.9372C20.0919 14.9531 20.2465 14.8844 20.3497 14.7469ZM10.9997 12.0312C9.86529 12.0312 8.93717 11.3438 8.93717 10.4844C8.93717 9.625 9.86529 8.9375 10.9997 8.9375C12.134 8.9375 13.0622 9.625 13.0622 10.4844C13.0622 11.3438 12.134 12.0312 10.9997 12.0312Z"
                                          fill="#00A795"
                                        />
                                      </svg>
                                    </i>
                                    <span
                                      data-v-1663021d=""
                                      className="text-white text-[13px]"
                                    >
                                      10 000 000 - 20 000 000 UZS
                                    </span>
                                  </div>
                                  <button
                                    data-v-1663021d=""
                                    className="bg-[#00A795] group-hover:bg-[#FFFFFF47] transition-colors h-[24px] w-[24px] rounded-full"
                                    aria-label="button"
                                  >
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={16}
                                        height={12}
                                        viewBox="0 0 16 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M9.05572 11L14.3335 6L1.00016 6M9.05572 1L14.3335 6L9.05572 1Z"
                                          stroke="#fff"
                                          strokeWidth="1.6"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </button>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div
                            data-v-1663021d=""
                            className="swiper-slide"
                            data-swiper-slide-index={0}
                            style={{ width: 384, marginRight: 20 }}
                          >
                            <a
                              data-v-1663021d=""
                              href="/vacancy/19"
                              className="relative group bg-vacancy-card-background text-white p-3 sm:pt-5 sm:p-4 rounded-8 cursor-pointer block vacancy-card"
                            >
                              <span
                                data-v-1663021d=""
                                className="text-base sm:text-lg font-bold line-clamp-1"
                              >
                                Flutter developer
                              </span>
                              <hr
                                data-v-1663021d=""
                                className="my-3 sm:my-4 border-vacancy-card-divider"
                              />
                              <div
                                data-v-1663021d=""
                                className="flex flex-col justify-between gap-2 sm:flex-row"
                              >
                                <div
                                  data-v-1663021d=""
                                  className="flex items-center"
                                >
                                  <div data-v-1663021d="" className="icon-bg">
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={12}
                                        height={14}
                                        viewBox="0 0 12 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M0.861328 5.50245H11.1444"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.5629 7.75559H8.56824"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M6.00284 7.75559H6.00818"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.4379 7.75559H3.44324"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.5629 9.99781H8.56824"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M6.00284 9.99781H6.00818"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.4379 9.99781H3.44324"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.33315 1.23077V3.12929"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.67299 1.23077V3.12929"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M8.44557 2.14184H3.56058C1.86634 2.14184 0.808105 3.08565 0.808105 4.82051V10.0415C0.808105 11.8036 1.86634 12.7692 3.56058 12.7692H8.44022C10.1398 12.7692 11.1927 11.82 11.1927 10.0851V4.82051C11.198 3.08565 10.1452 2.14184 8.44557 2.14184Z"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                  <span
                                    data-v-1663021d=""
                                    className="font-xs text-[13px] text-vacancy-card-icon-text"
                                  >
                                    Monday - Friday
                                  </span>
                                </div>
                                <div
                                  data-v-1663021d=""
                                  className="flex items-center"
                                >
                                  <div data-v-1663021d="" className="icon-bg">
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M11.3367 6.00028C11.3367 8.94778 8.94761 11.3368 6.00011 11.3368C3.05261 11.3368 0.663574 8.94778 0.663574 6.00028C0.663574 3.05278 3.05261 0.663742 6.00011 0.663742C8.94761 0.663742 11.3367 3.05278 11.3367 6.00028Z"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M7.97969 7.69782L5.80469 6.40032V3.60397"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                  <span
                                    data-v-1663021d=""
                                    className="font-xs text-[13px] text-vacancy-card-icon-text"
                                  >
                                    09:00 - 18:00
                                  </span>
                                </div>
                              </div>
                              <div data-v-1663021d="" className="h-7" />
                              <div
                                data-v-1663021d=""
                                className="absolute bottom-0 left-0 w-full px-3 translate-y-1/2"
                              >
                                <div
                                  data-v-1663021d=""
                                  className="transition-colors footer"
                                >
                                  <div
                                    data-v-1663021d=""
                                    className="flex-1 py-0.5 px-2 flex items-center gap-2"
                                  >
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500 text-[#00A795] group-hover:text-white transition-colors icons"
                                    >
                                      <svg
                                        width={22}
                                        height={22}
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M3.26586 19.6625C3.28304 19.8344 3.38617 19.9719 3.52367 20.0578C3.60961 20.0922 3.69555 20.1266 3.78148 20.1266C3.85023 20.1266 3.93617 20.1094 4.00492 20.075L5.25961 19.4734C9.09242 17.6344 13.3549 16.6719 17.6174 16.6719H19.9377C20.2299 16.6719 20.4534 16.4484 20.4534 16.1562C20.4534 15.8641 20.2299 15.6406 19.9377 15.6406H17.6174C13.2174 15.6406 8.80023 16.6375 4.81273 18.5281L4.21117 18.8203L3.95336 16.6031C3.91898 16.3281 3.66117 16.1219 3.38617 16.1562C3.11117 16.1906 2.90492 16.4484 2.9393 16.7234L3.26586 19.6625Z"
                                          fill="#00A795"
                                        />
                                        <path
                                          d="M1.71875 8.9375C2.01094 8.9375 2.23438 8.71406 2.23438 8.42188C2.23438 8.12969 2.01094 7.90625 1.71875 7.90625C1.42656 7.90625 1.20312 7.68281 1.20312 7.39062C1.20312 7.09844 1.42656 6.875 1.71875 6.875H20.2812C20.5734 6.875 20.7969 7.09844 20.7969 7.39062C20.7969 7.68281 20.5734 7.90625 20.2812 7.90625C19.9891 7.90625 19.7656 8.12969 19.7656 8.42188C19.7656 8.71406 19.9891 8.9375 20.2812 8.9375C21.1406 8.9375 21.8281 8.25 21.8281 7.39062C21.8281 6.53125 21.1406 5.84375 20.2812 5.84375H1.71875C0.859375 5.84375 0.171875 6.53125 0.171875 7.39062C0.171875 8.25 0.859375 8.9375 1.71875 8.9375Z"
                                          fill="#00A795"
                                        />
                                        <path
                                          d="M20.3497 14.7469C20.4528 14.6094 20.47 14.4547 20.4356 14.3L18.7169 8.28438C18.6481 8.06094 18.459 7.90625 18.2184 7.90625H3.78092C3.55748 7.90625 3.35123 8.06094 3.28248 8.28438L1.56373 14.3C1.51217 14.4547 1.54654 14.6266 1.64967 14.7469C1.75279 14.8844 1.90748 14.9531 2.06217 14.9531H19.9372C20.0919 14.9531 20.2465 14.8844 20.3497 14.7469ZM10.9997 12.0312C9.86529 12.0312 8.93717 11.3438 8.93717 10.4844C8.93717 9.625 9.86529 8.9375 10.9997 8.9375C12.134 8.9375 13.0622 9.625 13.0622 10.4844C13.0622 11.3438 12.134 12.0312 10.9997 12.0312Z"
                                          fill="#00A795"
                                        />
                                      </svg>
                                    </i>
                                    <span
                                      data-v-1663021d=""
                                      className="text-white text-[13px]"
                                    >
                                      10 000 000 - 20 000 000 UZS
                                    </span>
                                  </div>
                                  <button
                                    data-v-1663021d=""
                                    className="bg-[#00A795] group-hover:bg-[#FFFFFF47] transition-colors h-[24px] w-[24px] rounded-full"
                                    aria-label="button"
                                  >
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={16}
                                        height={12}
                                        viewBox="0 0 16 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M9.05572 11L14.3335 6L1.00016 6M9.05572 1L14.3335 6L9.05572 1Z"
                                          stroke="#fff"
                                          strokeWidth="1.6"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </button>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div
                            data-v-1663021d=""
                            className="swiper-slide swiper-slide-prev"
                            data-swiper-slide-index={1}
                            style={{ width: 384, marginRight: 20 }}
                          >
                            <a
                              data-v-1663021d=""
                              href="/vacancy/12"
                              className="relative group bg-vacancy-card-background text-white p-3 sm:pt-5 sm:p-4 rounded-8 cursor-pointer block vacancy-card"
                            >
                              <span
                                data-v-1663021d=""
                                className="text-base sm:text-lg font-bold line-clamp-1"
                              >
                                UI/UX designer
                              </span>
                              <hr
                                data-v-1663021d=""
                                className="my-3 sm:my-4 border-vacancy-card-divider"
                              />
                              <div
                                data-v-1663021d=""
                                className="flex flex-col justify-between gap-2 sm:flex-row"
                              >
                                <div
                                  data-v-1663021d=""
                                  className="flex items-center"
                                >
                                  <div data-v-1663021d="" className="icon-bg">
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={12}
                                        height={14}
                                        viewBox="0 0 12 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M0.861328 5.50245H11.1444"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.5629 7.75559H8.56824"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M6.00284 7.75559H6.00818"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.4379 7.75559H3.44324"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.5629 9.99781H8.56824"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M6.00284 9.99781H6.00818"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.4379 9.99781H3.44324"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.33315 1.23077V3.12929"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.67299 1.23077V3.12929"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M8.44557 2.14184H3.56058C1.86634 2.14184 0.808105 3.08565 0.808105 4.82051V10.0415C0.808105 11.8036 1.86634 12.7692 3.56058 12.7692H8.44022C10.1398 12.7692 11.1927 11.82 11.1927 10.0851V4.82051C11.198 3.08565 10.1452 2.14184 8.44557 2.14184Z"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                  <span
                                    data-v-1663021d=""
                                    className="font-xs text-[13px] text-vacancy-card-icon-text"
                                  >
                                    Monday - Friday
                                  </span>
                                </div>
                                <div
                                  data-v-1663021d=""
                                  className="flex items-center"
                                >
                                  <div data-v-1663021d="" className="icon-bg">
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M11.3367 6.00028C11.3367 8.94778 8.94761 11.3368 6.00011 11.3368C3.05261 11.3368 0.663574 8.94778 0.663574 6.00028C0.663574 3.05278 3.05261 0.663742 6.00011 0.663742C8.94761 0.663742 11.3367 3.05278 11.3367 6.00028Z"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M7.97969 7.69782L5.80469 6.40032V3.60397"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                  <span
                                    data-v-1663021d=""
                                    className="font-xs text-[13px] text-vacancy-card-icon-text"
                                  >
                                    09:00 - 18:00
                                  </span>
                                </div>
                              </div>
                              <div data-v-1663021d="" className="h-7" />
                              <div
                                data-v-1663021d=""
                                className="absolute bottom-0 left-0 w-full px-3 translate-y-1/2"
                              >
                                <div
                                  data-v-1663021d=""
                                  className="transition-colors footer"
                                >
                                  <div
                                    data-v-1663021d=""
                                    className="flex-1 py-0.5 px-2 flex items-center gap-2"
                                  >
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500 text-[#00A795] group-hover:text-white transition-colors icons"
                                    >
                                      <svg
                                        width={22}
                                        height={22}
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M3.26586 19.6625C3.28304 19.8344 3.38617 19.9719 3.52367 20.0578C3.60961 20.0922 3.69555 20.1266 3.78148 20.1266C3.85023 20.1266 3.93617 20.1094 4.00492 20.075L5.25961 19.4734C9.09242 17.6344 13.3549 16.6719 17.6174 16.6719H19.9377C20.2299 16.6719 20.4534 16.4484 20.4534 16.1562C20.4534 15.8641 20.2299 15.6406 19.9377 15.6406H17.6174C13.2174 15.6406 8.80023 16.6375 4.81273 18.5281L4.21117 18.8203L3.95336 16.6031C3.91898 16.3281 3.66117 16.1219 3.38617 16.1562C3.11117 16.1906 2.90492 16.4484 2.9393 16.7234L3.26586 19.6625Z"
                                          fill="#00A795"
                                        />
                                        <path
                                          d="M1.71875 8.9375C2.01094 8.9375 2.23438 8.71406 2.23438 8.42188C2.23438 8.12969 2.01094 7.90625 1.71875 7.90625C1.42656 7.90625 1.20312 7.68281 1.20312 7.39062C1.20312 7.09844 1.42656 6.875 1.71875 6.875H20.2812C20.5734 6.875 20.7969 7.09844 20.7969 7.39062C20.7969 7.68281 20.5734 7.90625 20.2812 7.90625C19.9891 7.90625 19.7656 8.12969 19.7656 8.42188C19.7656 8.71406 19.9891 8.9375 20.2812 8.9375C21.1406 8.9375 21.8281 8.25 21.8281 7.39062C21.8281 6.53125 21.1406 5.84375 20.2812 5.84375H1.71875C0.859375 5.84375 0.171875 6.53125 0.171875 7.39062C0.171875 8.25 0.859375 8.9375 1.71875 8.9375Z"
                                          fill="#00A795"
                                        />
                                        <path
                                          d="M20.3497 14.7469C20.4528 14.6094 20.47 14.4547 20.4356 14.3L18.7169 8.28438C18.6481 8.06094 18.459 7.90625 18.2184 7.90625H3.78092C3.55748 7.90625 3.35123 8.06094 3.28248 8.28438L1.56373 14.3C1.51217 14.4547 1.54654 14.6266 1.64967 14.7469C1.75279 14.8844 1.90748 14.9531 2.06217 14.9531H19.9372C20.0919 14.9531 20.2465 14.8844 20.3497 14.7469ZM10.9997 12.0312C9.86529 12.0312 8.93717 11.3438 8.93717 10.4844C8.93717 9.625 9.86529 8.9375 10.9997 8.9375C12.134 8.9375 13.0622 9.625 13.0622 10.4844C13.0622 11.3438 12.134 12.0312 10.9997 12.0312Z"
                                          fill="#00A795"
                                        />
                                      </svg>
                                    </i>
                                    <span
                                      data-v-1663021d=""
                                      className="text-white text-[13px]"
                                    >
                                      10 000 000 - 15 000 000 UZS
                                    </span>
                                  </div>
                                  <button
                                    data-v-1663021d=""
                                    className="bg-[#00A795] group-hover:bg-[#FFFFFF47] transition-colors h-[24px] w-[24px] rounded-full"
                                    aria-label="button"
                                  >
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={16}
                                        height={12}
                                        viewBox="0 0 16 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M9.05572 11L14.3335 6L1.00016 6M9.05572 1L14.3335 6L9.05572 1Z"
                                          stroke="#fff"
                                          strokeWidth="1.6"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </button>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div
                            data-v-1663021d=""
                            className="swiper-slide swiper-slide-active"
                            data-swiper-slide-index={2}
                            style={{ width: 384, marginRight: 20 }}
                          >
                            <a
                              data-v-1663021d=""
                              href="/vacancy/28"
                              className="relative group bg-vacancy-card-background text-white p-3 sm:pt-5 sm:p-4 rounded-8 cursor-pointer block vacancy-card"
                            >
                              <span
                                data-v-1663021d=""
                                className="text-base sm:text-lg font-bold line-clamp-1"
                              >
                                AI Engineer
                              </span>
                              <hr
                                data-v-1663021d=""
                                className="my-3 sm:my-4 border-vacancy-card-divider"
                              />
                              <div
                                data-v-1663021d=""
                                className="flex flex-col justify-between gap-2 sm:flex-row"
                              >
                                <div
                                  data-v-1663021d=""
                                  className="flex items-center"
                                >
                                  <div data-v-1663021d="" className="icon-bg">
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={12}
                                        height={14}
                                        viewBox="0 0 12 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M0.861328 5.50245H11.1444"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.5629 7.75559H8.56824"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M6.00284 7.75559H6.00818"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.4379 7.75559H3.44324"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.5629 9.99781H8.56824"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M6.00284 9.99781H6.00818"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.4379 9.99781H3.44324"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.33315 1.23077V3.12929"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.67299 1.23077V3.12929"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M8.44557 2.14184H3.56058C1.86634 2.14184 0.808105 3.08565 0.808105 4.82051V10.0415C0.808105 11.8036 1.86634 12.7692 3.56058 12.7692H8.44022C10.1398 12.7692 11.1927 11.82 11.1927 10.0851V4.82051C11.198 3.08565 10.1452 2.14184 8.44557 2.14184Z"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                  <span
                                    data-v-1663021d=""
                                    className="font-xs text-[13px] text-vacancy-card-icon-text"
                                  >
                                    Monday - Friday
                                  </span>
                                </div>
                                <div
                                  data-v-1663021d=""
                                  className="flex items-center"
                                >
                                  <div data-v-1663021d="" className="icon-bg">
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M11.3367 6.00028C11.3367 8.94778 8.94761 11.3368 6.00011 11.3368C3.05261 11.3368 0.663574 8.94778 0.663574 6.00028C0.663574 3.05278 3.05261 0.663742 6.00011 0.663742C8.94761 0.663742 11.3367 3.05278 11.3367 6.00028Z"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M7.97969 7.69782L5.80469 6.40032V3.60397"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                  <span
                                    data-v-1663021d=""
                                    className="font-xs text-[13px] text-vacancy-card-icon-text"
                                  >
                                    09:00 - 18:00
                                  </span>
                                </div>
                              </div>
                              <div data-v-1663021d="" className="h-7" />
                              <div
                                data-v-1663021d=""
                                className="absolute bottom-0 left-0 w-full px-3 translate-y-1/2"
                              >
                                <div
                                  data-v-1663021d=""
                                  className="transition-colors footer"
                                >
                                  <div
                                    data-v-1663021d=""
                                    className="flex-1 py-0.5 px-2 flex items-center gap-2"
                                  >
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500 text-[#00A795] group-hover:text-white transition-colors icons"
                                    >
                                      <svg
                                        width={22}
                                        height={22}
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M3.26586 19.6625C3.28304 19.8344 3.38617 19.9719 3.52367 20.0578C3.60961 20.0922 3.69555 20.1266 3.78148 20.1266C3.85023 20.1266 3.93617 20.1094 4.00492 20.075L5.25961 19.4734C9.09242 17.6344 13.3549 16.6719 17.6174 16.6719H19.9377C20.2299 16.6719 20.4534 16.4484 20.4534 16.1562C20.4534 15.8641 20.2299 15.6406 19.9377 15.6406H17.6174C13.2174 15.6406 8.80023 16.6375 4.81273 18.5281L4.21117 18.8203L3.95336 16.6031C3.91898 16.3281 3.66117 16.1219 3.38617 16.1562C3.11117 16.1906 2.90492 16.4484 2.9393 16.7234L3.26586 19.6625Z"
                                          fill="#00A795"
                                        />
                                        <path
                                          d="M1.71875 8.9375C2.01094 8.9375 2.23438 8.71406 2.23438 8.42188C2.23438 8.12969 2.01094 7.90625 1.71875 7.90625C1.42656 7.90625 1.20312 7.68281 1.20312 7.39062C1.20312 7.09844 1.42656 6.875 1.71875 6.875H20.2812C20.5734 6.875 20.7969 7.09844 20.7969 7.39062C20.7969 7.68281 20.5734 7.90625 20.2812 7.90625C19.9891 7.90625 19.7656 8.12969 19.7656 8.42188C19.7656 8.71406 19.9891 8.9375 20.2812 8.9375C21.1406 8.9375 21.8281 8.25 21.8281 7.39062C21.8281 6.53125 21.1406 5.84375 20.2812 5.84375H1.71875C0.859375 5.84375 0.171875 6.53125 0.171875 7.39062C0.171875 8.25 0.859375 8.9375 1.71875 8.9375Z"
                                          fill="#00A795"
                                        />
                                        <path
                                          d="M20.3497 14.7469C20.4528 14.6094 20.47 14.4547 20.4356 14.3L18.7169 8.28438C18.6481 8.06094 18.459 7.90625 18.2184 7.90625H3.78092C3.55748 7.90625 3.35123 8.06094 3.28248 8.28438L1.56373 14.3C1.51217 14.4547 1.54654 14.6266 1.64967 14.7469C1.75279 14.8844 1.90748 14.9531 2.06217 14.9531H19.9372C20.0919 14.9531 20.2465 14.8844 20.3497 14.7469ZM10.9997 12.0312C9.86529 12.0312 8.93717 11.3438 8.93717 10.4844C8.93717 9.625 9.86529 8.9375 10.9997 8.9375C12.134 8.9375 13.0622 9.625 13.0622 10.4844C13.0622 11.3438 12.134 12.0312 10.9997 12.0312Z"
                                          fill="#00A795"
                                        />
                                      </svg>
                                    </i>
                                    <span
                                      data-v-1663021d=""
                                      className="text-white text-[13px]"
                                    >
                                      5 000 000 - 25 000 000 UZS
                                    </span>
                                  </div>
                                  <button
                                    data-v-1663021d=""
                                    className="bg-[#00A795] group-hover:bg-[#FFFFFF47] transition-colors h-[24px] w-[24px] rounded-full"
                                    aria-label="button"
                                  >
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={16}
                                        height={12}
                                        viewBox="0 0 16 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M9.05572 11L14.3335 6L1.00016 6M9.05572 1L14.3335 6L9.05572 1Z"
                                          stroke="#fff"
                                          strokeWidth="1.6"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </button>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div
                            data-v-1663021d=""
                            className="swiper-slide swiper-slide-next"
                            data-swiper-slide-index={3}
                            style={{ width: 384, marginRight: 20 }}
                          >
                            <a
                              data-v-1663021d=""
                              href="/vacancy/21"
                              className="relative group bg-vacancy-card-background text-white p-3 sm:pt-5 sm:p-4 rounded-8 cursor-pointer block vacancy-card"
                            >
                              <span
                                data-v-1663021d=""
                                className="text-base sm:text-lg font-bold line-clamp-1"
                              >
                                HR manager
                              </span>
                              <hr
                                data-v-1663021d=""
                                className="my-3 sm:my-4 border-vacancy-card-divider"
                              />
                              <div
                                data-v-1663021d=""
                                className="flex flex-col justify-between gap-2 sm:flex-row"
                              >
                                <div
                                  data-v-1663021d=""
                                  className="flex items-center"
                                >
                                  <div data-v-1663021d="" className="icon-bg">
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={12}
                                        height={14}
                                        viewBox="0 0 12 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M0.861328 5.50245H11.1444"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.5629 7.75559H8.56824"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M6.00284 7.75559H6.00818"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.4379 7.75559H3.44324"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.5629 9.99781H8.56824"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M6.00284 9.99781H6.00818"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.4379 9.99781H3.44324"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.33315 1.23077V3.12929"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.67299 1.23077V3.12929"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M8.44557 2.14184H3.56058C1.86634 2.14184 0.808105 3.08565 0.808105 4.82051V10.0415C0.808105 11.8036 1.86634 12.7692 3.56058 12.7692H8.44022C10.1398 12.7692 11.1927 11.82 11.1927 10.0851V4.82051C11.198 3.08565 10.1452 2.14184 8.44557 2.14184Z"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                  <span
                                    data-v-1663021d=""
                                    className="font-xs text-[13px] text-vacancy-card-icon-text"
                                  >
                                    Monday - Friday
                                  </span>
                                </div>
                                <div
                                  data-v-1663021d=""
                                  className="flex items-center"
                                >
                                  <div data-v-1663021d="" className="icon-bg">
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M11.3367 6.00028C11.3367 8.94778 8.94761 11.3368 6.00011 11.3368C3.05261 11.3368 0.663574 8.94778 0.663574 6.00028C0.663574 3.05278 3.05261 0.663742 6.00011 0.663742C8.94761 0.663742 11.3367 3.05278 11.3367 6.00028Z"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M7.97969 7.69782L5.80469 6.40032V3.60397"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                  <span
                                    data-v-1663021d=""
                                    className="font-xs text-[13px] text-vacancy-card-icon-text"
                                  >
                                    09:00 - 18:00
                                  </span>
                                </div>
                              </div>
                              <div data-v-1663021d="" className="h-7" />
                              <div
                                data-v-1663021d=""
                                className="absolute bottom-0 left-0 w-full px-3 translate-y-1/2"
                              >
                                <div
                                  data-v-1663021d=""
                                  className="transition-colors footer"
                                >
                                  <div
                                    data-v-1663021d=""
                                    className="flex-1 py-0.5 px-2 flex items-center gap-2"
                                  >
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500 text-[#00A795] group-hover:text-white transition-colors icons"
                                    >
                                      <svg
                                        width={22}
                                        height={22}
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M3.26586 19.6625C3.28304 19.8344 3.38617 19.9719 3.52367 20.0578C3.60961 20.0922 3.69555 20.1266 3.78148 20.1266C3.85023 20.1266 3.93617 20.1094 4.00492 20.075L5.25961 19.4734C9.09242 17.6344 13.3549 16.6719 17.6174 16.6719H19.9377C20.2299 16.6719 20.4534 16.4484 20.4534 16.1562C20.4534 15.8641 20.2299 15.6406 19.9377 15.6406H17.6174C13.2174 15.6406 8.80023 16.6375 4.81273 18.5281L4.21117 18.8203L3.95336 16.6031C3.91898 16.3281 3.66117 16.1219 3.38617 16.1562C3.11117 16.1906 2.90492 16.4484 2.9393 16.7234L3.26586 19.6625Z"
                                          fill="#00A795"
                                        />
                                        <path
                                          d="M1.71875 8.9375C2.01094 8.9375 2.23438 8.71406 2.23438 8.42188C2.23438 8.12969 2.01094 7.90625 1.71875 7.90625C1.42656 7.90625 1.20312 7.68281 1.20312 7.39062C1.20312 7.09844 1.42656 6.875 1.71875 6.875H20.2812C20.5734 6.875 20.7969 7.09844 20.7969 7.39062C20.7969 7.68281 20.5734 7.90625 20.2812 7.90625C19.9891 7.90625 19.7656 8.12969 19.7656 8.42188C19.7656 8.71406 19.9891 8.9375 20.2812 8.9375C21.1406 8.9375 21.8281 8.25 21.8281 7.39062C21.8281 6.53125 21.1406 5.84375 20.2812 5.84375H1.71875C0.859375 5.84375 0.171875 6.53125 0.171875 7.39062C0.171875 8.25 0.859375 8.9375 1.71875 8.9375Z"
                                          fill="#00A795"
                                        />
                                        <path
                                          d="M20.3497 14.7469C20.4528 14.6094 20.47 14.4547 20.4356 14.3L18.7169 8.28438C18.6481 8.06094 18.459 7.90625 18.2184 7.90625H3.78092C3.55748 7.90625 3.35123 8.06094 3.28248 8.28438L1.56373 14.3C1.51217 14.4547 1.54654 14.6266 1.64967 14.7469C1.75279 14.8844 1.90748 14.9531 2.06217 14.9531H19.9372C20.0919 14.9531 20.2465 14.8844 20.3497 14.7469ZM10.9997 12.0312C9.86529 12.0312 8.93717 11.3438 8.93717 10.4844C8.93717 9.625 9.86529 8.9375 10.9997 8.9375C12.134 8.9375 13.0622 9.625 13.0622 10.4844C13.0622 11.3438 12.134 12.0312 10.9997 12.0312Z"
                                          fill="#00A795"
                                        />
                                      </svg>
                                    </i>
                                    <span
                                      data-v-1663021d=""
                                      className="text-white text-[13px]"
                                    >
                                      10 000 000 - 20 000 000 UZS
                                    </span>
                                  </div>
                                  <button
                                    data-v-1663021d=""
                                    className="bg-[#00A795] group-hover:bg-[#FFFFFF47] transition-colors h-[24px] w-[24px] rounded-full"
                                    aria-label="button"
                                  >
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={16}
                                        height={12}
                                        viewBox="0 0 16 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M9.05572 11L14.3335 6L1.00016 6M9.05572 1L14.3335 6L9.05572 1Z"
                                          stroke="#fff"
                                          strokeWidth="1.6"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </button>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div
                            data-v-1663021d=""
                            className="swiper-slide"
                            data-swiper-slide-index={4}
                            style={{ width: 384, marginRight: 20 }}
                          >
                            <a
                              data-v-1663021d=""
                              href="/vacancy/23"
                              className="relative group bg-vacancy-card-background text-white p-3 sm:pt-5 sm:p-4 rounded-8 cursor-pointer block vacancy-card"
                            >
                              <span
                                data-v-1663021d=""
                                className="text-base sm:text-lg font-bold line-clamp-1"
                              >
                                Project manager
                              </span>
                              <hr
                                data-v-1663021d=""
                                className="my-3 sm:my-4 border-vacancy-card-divider"
                              />
                              <div
                                data-v-1663021d=""
                                className="flex flex-col justify-between gap-2 sm:flex-row"
                              >
                                <div
                                  data-v-1663021d=""
                                  className="flex items-center"
                                >
                                  <div data-v-1663021d="" className="icon-bg">
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={12}
                                        height={14}
                                        viewBox="0 0 12 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M0.861328 5.50245H11.1444"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.5629 7.75559H8.56824"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M6.00284 7.75559H6.00818"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.4379 7.75559H3.44324"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.5629 9.99781H8.56824"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M6.00284 9.99781H6.00818"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.4379 9.99781H3.44324"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.33315 1.23077V3.12929"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.67299 1.23077V3.12929"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M8.44557 2.14184H3.56058C1.86634 2.14184 0.808105 3.08565 0.808105 4.82051V10.0415C0.808105 11.8036 1.86634 12.7692 3.56058 12.7692H8.44022C10.1398 12.7692 11.1927 11.82 11.1927 10.0851V4.82051C11.198 3.08565 10.1452 2.14184 8.44557 2.14184Z"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                  <span
                                    data-v-1663021d=""
                                    className="font-xs text-[13px] text-vacancy-card-icon-text"
                                  >
                                    Monday - Friday
                                  </span>
                                </div>
                                <div
                                  data-v-1663021d=""
                                  className="flex items-center"
                                >
                                  <div data-v-1663021d="" className="icon-bg">
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M11.3367 6.00028C11.3367 8.94778 8.94761 11.3368 6.00011 11.3368C3.05261 11.3368 0.663574 8.94778 0.663574 6.00028C0.663574 3.05278 3.05261 0.663742 6.00011 0.663742C8.94761 0.663742 11.3367 3.05278 11.3367 6.00028Z"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M7.97969 7.69782L5.80469 6.40032V3.60397"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                  <span
                                    data-v-1663021d=""
                                    className="font-xs text-[13px] text-vacancy-card-icon-text"
                                  >
                                    09:00 - 18:00
                                  </span>
                                </div>
                              </div>
                              <div data-v-1663021d="" className="h-7" />
                              <div
                                data-v-1663021d=""
                                className="absolute bottom-0 left-0 w-full px-3 translate-y-1/2"
                              >
                                <div
                                  data-v-1663021d=""
                                  className="transition-colors footer"
                                >
                                  <div
                                    data-v-1663021d=""
                                    className="flex-1 py-0.5 px-2 flex items-center gap-2"
                                  >
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500 text-[#00A795] group-hover:text-white transition-colors icons"
                                    >
                                      <svg
                                        width={22}
                                        height={22}
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M3.26586 19.6625C3.28304 19.8344 3.38617 19.9719 3.52367 20.0578C3.60961 20.0922 3.69555 20.1266 3.78148 20.1266C3.85023 20.1266 3.93617 20.1094 4.00492 20.075L5.25961 19.4734C9.09242 17.6344 13.3549 16.6719 17.6174 16.6719H19.9377C20.2299 16.6719 20.4534 16.4484 20.4534 16.1562C20.4534 15.8641 20.2299 15.6406 19.9377 15.6406H17.6174C13.2174 15.6406 8.80023 16.6375 4.81273 18.5281L4.21117 18.8203L3.95336 16.6031C3.91898 16.3281 3.66117 16.1219 3.38617 16.1562C3.11117 16.1906 2.90492 16.4484 2.9393 16.7234L3.26586 19.6625Z"
                                          fill="#00A795"
                                        />
                                        <path
                                          d="M1.71875 8.9375C2.01094 8.9375 2.23438 8.71406 2.23438 8.42188C2.23438 8.12969 2.01094 7.90625 1.71875 7.90625C1.42656 7.90625 1.20312 7.68281 1.20312 7.39062C1.20312 7.09844 1.42656 6.875 1.71875 6.875H20.2812C20.5734 6.875 20.7969 7.09844 20.7969 7.39062C20.7969 7.68281 20.5734 7.90625 20.2812 7.90625C19.9891 7.90625 19.7656 8.12969 19.7656 8.42188C19.7656 8.71406 19.9891 8.9375 20.2812 8.9375C21.1406 8.9375 21.8281 8.25 21.8281 7.39062C21.8281 6.53125 21.1406 5.84375 20.2812 5.84375H1.71875C0.859375 5.84375 0.171875 6.53125 0.171875 7.39062C0.171875 8.25 0.859375 8.9375 1.71875 8.9375Z"
                                          fill="#00A795"
                                        />
                                        <path
                                          d="M20.3497 14.7469C20.4528 14.6094 20.47 14.4547 20.4356 14.3L18.7169 8.28438C18.6481 8.06094 18.459 7.90625 18.2184 7.90625H3.78092C3.55748 7.90625 3.35123 8.06094 3.28248 8.28438L1.56373 14.3C1.51217 14.4547 1.54654 14.6266 1.64967 14.7469C1.75279 14.8844 1.90748 14.9531 2.06217 14.9531H19.9372C20.0919 14.9531 20.2465 14.8844 20.3497 14.7469ZM10.9997 12.0312C9.86529 12.0312 8.93717 11.3438 8.93717 10.4844C8.93717 9.625 9.86529 8.9375 10.9997 8.9375C12.134 8.9375 13.0622 9.625 13.0622 10.4844C13.0622 11.3438 12.134 12.0312 10.9997 12.0312Z"
                                          fill="#00A795"
                                        />
                                      </svg>
                                    </i>
                                    <span
                                      data-v-1663021d=""
                                      className="text-white text-[13px]"
                                    >
                                      8 000 000 - 14 000 000 UZS
                                    </span>
                                  </div>
                                  <button
                                    data-v-1663021d=""
                                    className="bg-[#00A795] group-hover:bg-[#FFFFFF47] transition-colors h-[24px] w-[24px] rounded-full"
                                    aria-label="button"
                                  >
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={16}
                                        height={12}
                                        viewBox="0 0 16 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M9.05572 11L14.3335 6L1.00016 6M9.05572 1L14.3335 6L9.05572 1Z"
                                          stroke="#fff"
                                          strokeWidth="1.6"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </button>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div
                            data-v-1663021d=""
                            className="swiper-slide"
                            data-swiper-slide-index={5}
                            style={{ width: 384, marginRight: 20 }}
                          >
                            <a
                              data-v-1663021d=""
                              href="/vacancy/1"
                              className="relative group bg-vacancy-card-background text-white p-3 sm:pt-5 sm:p-4 rounded-8 cursor-pointer block vacancy-card"
                            >
                              <span
                                data-v-1663021d=""
                                className="text-base sm:text-lg font-bold line-clamp-1"
                              >
                                Frontend developer (VueJS)
                              </span>
                              <hr
                                data-v-1663021d=""
                                className="my-3 sm:my-4 border-vacancy-card-divider"
                              />
                              <div
                                data-v-1663021d=""
                                className="flex flex-col justify-between gap-2 sm:flex-row"
                              >
                                <div
                                  data-v-1663021d=""
                                  className="flex items-center"
                                >
                                  <div data-v-1663021d="" className="icon-bg">
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={12}
                                        height={14}
                                        viewBox="0 0 12 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M0.861328 5.50245H11.1444"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.5629 7.75559H8.56824"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M6.00284 7.75559H6.00818"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.4379 7.75559H3.44324"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.5629 9.99781H8.56824"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M6.00284 9.99781H6.00818"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.4379 9.99781H3.44324"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.33315 1.23077V3.12929"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.67299 1.23077V3.12929"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M8.44557 2.14184H3.56058C1.86634 2.14184 0.808105 3.08565 0.808105 4.82051V10.0415C0.808105 11.8036 1.86634 12.7692 3.56058 12.7692H8.44022C10.1398 12.7692 11.1927 11.82 11.1927 10.0851V4.82051C11.198 3.08565 10.1452 2.14184 8.44557 2.14184Z"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                  <span
                                    data-v-1663021d=""
                                    className="font-xs text-[13px] text-vacancy-card-icon-text"
                                  >
                                    Monday - Friday
                                  </span>
                                </div>
                                <div
                                  data-v-1663021d=""
                                  className="flex items-center"
                                >
                                  <div data-v-1663021d="" className="icon-bg">
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M11.3367 6.00028C11.3367 8.94778 8.94761 11.3368 6.00011 11.3368C3.05261 11.3368 0.663574 8.94778 0.663574 6.00028C0.663574 3.05278 3.05261 0.663742 6.00011 0.663742C8.94761 0.663742 11.3367 3.05278 11.3367 6.00028Z"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M7.97969 7.69782L5.80469 6.40032V3.60397"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                  <span
                                    data-v-1663021d=""
                                    className="font-xs text-[13px] text-vacancy-card-icon-text"
                                  >
                                    09:00 - 18:00
                                  </span>
                                </div>
                              </div>
                              <div data-v-1663021d="" className="h-7" />
                              <div
                                data-v-1663021d=""
                                className="absolute bottom-0 left-0 w-full px-3 translate-y-1/2"
                              >
                                <div
                                  data-v-1663021d=""
                                  className="transition-colors footer"
                                >
                                  <div
                                    data-v-1663021d=""
                                    className="flex-1 py-0.5 px-2 flex items-center gap-2"
                                  >
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500 text-[#00A795] group-hover:text-white transition-colors icons"
                                    >
                                      <svg
                                        width={22}
                                        height={22}
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M3.26586 19.6625C3.28304 19.8344 3.38617 19.9719 3.52367 20.0578C3.60961 20.0922 3.69555 20.1266 3.78148 20.1266C3.85023 20.1266 3.93617 20.1094 4.00492 20.075L5.25961 19.4734C9.09242 17.6344 13.3549 16.6719 17.6174 16.6719H19.9377C20.2299 16.6719 20.4534 16.4484 20.4534 16.1562C20.4534 15.8641 20.2299 15.6406 19.9377 15.6406H17.6174C13.2174 15.6406 8.80023 16.6375 4.81273 18.5281L4.21117 18.8203L3.95336 16.6031C3.91898 16.3281 3.66117 16.1219 3.38617 16.1562C3.11117 16.1906 2.90492 16.4484 2.9393 16.7234L3.26586 19.6625Z"
                                          fill="#00A795"
                                        />
                                        <path
                                          d="M1.71875 8.9375C2.01094 8.9375 2.23438 8.71406 2.23438 8.42188C2.23438 8.12969 2.01094 7.90625 1.71875 7.90625C1.42656 7.90625 1.20312 7.68281 1.20312 7.39062C1.20312 7.09844 1.42656 6.875 1.71875 6.875H20.2812C20.5734 6.875 20.7969 7.09844 20.7969 7.39062C20.7969 7.68281 20.5734 7.90625 20.2812 7.90625C19.9891 7.90625 19.7656 8.12969 19.7656 8.42188C19.7656 8.71406 19.9891 8.9375 20.2812 8.9375C21.1406 8.9375 21.8281 8.25 21.8281 7.39062C21.8281 6.53125 21.1406 5.84375 20.2812 5.84375H1.71875C0.859375 5.84375 0.171875 6.53125 0.171875 7.39062C0.171875 8.25 0.859375 8.9375 1.71875 8.9375Z"
                                          fill="#00A795"
                                        />
                                        <path
                                          d="M20.3497 14.7469C20.4528 14.6094 20.47 14.4547 20.4356 14.3L18.7169 8.28438C18.6481 8.06094 18.459 7.90625 18.2184 7.90625H3.78092C3.55748 7.90625 3.35123 8.06094 3.28248 8.28438L1.56373 14.3C1.51217 14.4547 1.54654 14.6266 1.64967 14.7469C1.75279 14.8844 1.90748 14.9531 2.06217 14.9531H19.9372C20.0919 14.9531 20.2465 14.8844 20.3497 14.7469ZM10.9997 12.0312C9.86529 12.0312 8.93717 11.3438 8.93717 10.4844C8.93717 9.625 9.86529 8.9375 10.9997 8.9375C12.134 8.9375 13.0622 9.625 13.0622 10.4844C13.0622 11.3438 12.134 12.0312 10.9997 12.0312Z"
                                          fill="#00A795"
                                        />
                                      </svg>
                                    </i>
                                    <span
                                      data-v-1663021d=""
                                      className="text-white text-[13px]"
                                    >
                                      10 000 000 - 20 000 000 UZS
                                    </span>
                                  </div>
                                  <button
                                    data-v-1663021d=""
                                    className="bg-[#00A795] group-hover:bg-[#FFFFFF47] transition-colors h-[24px] w-[24px] rounded-full"
                                    aria-label="button"
                                  >
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={16}
                                        height={12}
                                        viewBox="0 0 16 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M9.05572 11L14.3335 6L1.00016 6M9.05572 1L14.3335 6L9.05572 1Z"
                                          stroke="#fff"
                                          strokeWidth="1.6"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </button>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div
                            className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate"
                            data-swiper-slide-index={0}
                            style={{ width: 384, marginRight: 20 }}
                          >
                            <a
                              data-v-1663021d=""
                              href="/vacancy/19"
                              className="relative group bg-vacancy-card-background text-white p-3 sm:pt-5 sm:p-4 rounded-8 cursor-pointer block vacancy-card"
                            >
                              <span
                                data-v-1663021d=""
                                className="text-base sm:text-lg font-bold line-clamp-1"
                              >
                                Flutter developer
                              </span>
                              <hr
                                data-v-1663021d=""
                                className="my-3 sm:my-4 border-vacancy-card-divider"
                              />
                              <div
                                data-v-1663021d=""
                                className="flex flex-col justify-between gap-2 sm:flex-row"
                              >
                                <div
                                  data-v-1663021d=""
                                  className="flex items-center"
                                >
                                  <div data-v-1663021d="" className="icon-bg">
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={12}
                                        height={14}
                                        viewBox="0 0 12 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M0.861328 5.50245H11.1444"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.5629 7.75559H8.56824"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M6.00284 7.75559H6.00818"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.4379 7.75559H3.44324"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.5629 9.99781H8.56824"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M6.00284 9.99781H6.00818"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.4379 9.99781H3.44324"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.33315 1.23077V3.12929"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.67299 1.23077V3.12929"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M8.44557 2.14184H3.56058C1.86634 2.14184 0.808105 3.08565 0.808105 4.82051V10.0415C0.808105 11.8036 1.86634 12.7692 3.56058 12.7692H8.44022C10.1398 12.7692 11.1927 11.82 11.1927 10.0851V4.82051C11.198 3.08565 10.1452 2.14184 8.44557 2.14184Z"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                  <span
                                    data-v-1663021d=""
                                    className="font-xs text-[13px] text-vacancy-card-icon-text"
                                  >
                                    Monday - Friday
                                  </span>
                                </div>
                                <div
                                  data-v-1663021d=""
                                  className="flex items-center"
                                >
                                  <div data-v-1663021d="" className="icon-bg">
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M11.3367 6.00028C11.3367 8.94778 8.94761 11.3368 6.00011 11.3368C3.05261 11.3368 0.663574 8.94778 0.663574 6.00028C0.663574 3.05278 3.05261 0.663742 6.00011 0.663742C8.94761 0.663742 11.3367 3.05278 11.3367 6.00028Z"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M7.97969 7.69782L5.80469 6.40032V3.60397"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                  <span
                                    data-v-1663021d=""
                                    className="font-xs text-[13px] text-vacancy-card-icon-text"
                                  >
                                    09:00 - 18:00
                                  </span>
                                </div>
                              </div>
                              <div data-v-1663021d="" className="h-7" />
                              <div
                                data-v-1663021d=""
                                className="absolute bottom-0 left-0 w-full px-3 translate-y-1/2"
                              >
                                <div
                                  data-v-1663021d=""
                                  className="transition-colors footer"
                                >
                                  <div
                                    data-v-1663021d=""
                                    className="flex-1 py-0.5 px-2 flex items-center gap-2"
                                  >
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500 text-[#00A795] group-hover:text-white transition-colors icons"
                                    >
                                      <svg
                                        width={22}
                                        height={22}
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M3.26586 19.6625C3.28304 19.8344 3.38617 19.9719 3.52367 20.0578C3.60961 20.0922 3.69555 20.1266 3.78148 20.1266C3.85023 20.1266 3.93617 20.1094 4.00492 20.075L5.25961 19.4734C9.09242 17.6344 13.3549 16.6719 17.6174 16.6719H19.9377C20.2299 16.6719 20.4534 16.4484 20.4534 16.1562C20.4534 15.8641 20.2299 15.6406 19.9377 15.6406H17.6174C13.2174 15.6406 8.80023 16.6375 4.81273 18.5281L4.21117 18.8203L3.95336 16.6031C3.91898 16.3281 3.66117 16.1219 3.38617 16.1562C3.11117 16.1906 2.90492 16.4484 2.9393 16.7234L3.26586 19.6625Z"
                                          fill="#00A795"
                                        />
                                        <path
                                          d="M1.71875 8.9375C2.01094 8.9375 2.23438 8.71406 2.23438 8.42188C2.23438 8.12969 2.01094 7.90625 1.71875 7.90625C1.42656 7.90625 1.20312 7.68281 1.20312 7.39062C1.20312 7.09844 1.42656 6.875 1.71875 6.875H20.2812C20.5734 6.875 20.7969 7.09844 20.7969 7.39062C20.7969 7.68281 20.5734 7.90625 20.2812 7.90625C19.9891 7.90625 19.7656 8.12969 19.7656 8.42188C19.7656 8.71406 19.9891 8.9375 20.2812 8.9375C21.1406 8.9375 21.8281 8.25 21.8281 7.39062C21.8281 6.53125 21.1406 5.84375 20.2812 5.84375H1.71875C0.859375 5.84375 0.171875 6.53125 0.171875 7.39062C0.171875 8.25 0.859375 8.9375 1.71875 8.9375Z"
                                          fill="#00A795"
                                        />
                                        <path
                                          d="M20.3497 14.7469C20.4528 14.6094 20.47 14.4547 20.4356 14.3L18.7169 8.28438C18.6481 8.06094 18.459 7.90625 18.2184 7.90625H3.78092C3.55748 7.90625 3.35123 8.06094 3.28248 8.28438L1.56373 14.3C1.51217 14.4547 1.54654 14.6266 1.64967 14.7469C1.75279 14.8844 1.90748 14.9531 2.06217 14.9531H19.9372C20.0919 14.9531 20.2465 14.8844 20.3497 14.7469ZM10.9997 12.0312C9.86529 12.0312 8.93717 11.3438 8.93717 10.4844C8.93717 9.625 9.86529 8.9375 10.9997 8.9375C12.134 8.9375 13.0622 9.625 13.0622 10.4844C13.0622 11.3438 12.134 12.0312 10.9997 12.0312Z"
                                          fill="#00A795"
                                        />
                                      </svg>
                                    </i>
                                    <span
                                      data-v-1663021d=""
                                      className="text-white text-[13px]"
                                    >
                                      10 000 000 - 20 000 000 UZS
                                    </span>
                                  </div>
                                  <button
                                    data-v-1663021d=""
                                    className="bg-[#00A795] group-hover:bg-[#FFFFFF47] transition-colors h-[24px] w-[24px] rounded-full"
                                    aria-label="button"
                                  >
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={16}
                                        height={12}
                                        viewBox="0 0 16 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M9.05572 11L14.3335 6L1.00016 6M9.05572 1L14.3335 6L9.05572 1Z"
                                          stroke="#fff"
                                          strokeWidth="1.6"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </button>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div
                            className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev swiper-slide-duplicate"
                            data-swiper-slide-index={1}
                            style={{ width: 384, marginRight: 20 }}
                          >
                            <a
                              data-v-1663021d=""
                              href="/vacancy/12"
                              className="relative group bg-vacancy-card-background text-white p-3 sm:pt-5 sm:p-4 rounded-8 cursor-pointer block vacancy-card"
                            >
                              <span
                                data-v-1663021d=""
                                className="text-base sm:text-lg font-bold line-clamp-1"
                              >
                                UI/UX designer
                              </span>
                              <hr
                                data-v-1663021d=""
                                className="my-3 sm:my-4 border-vacancy-card-divider"
                              />
                              <div
                                data-v-1663021d=""
                                className="flex flex-col justify-between gap-2 sm:flex-row"
                              >
                                <div
                                  data-v-1663021d=""
                                  className="flex items-center"
                                >
                                  <div data-v-1663021d="" className="icon-bg">
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={12}
                                        height={14}
                                        viewBox="0 0 12 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M0.861328 5.50245H11.1444"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.5629 7.75559H8.56824"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M6.00284 7.75559H6.00818"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.4379 7.75559H3.44324"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.5629 9.99781H8.56824"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M6.00284 9.99781H6.00818"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.4379 9.99781H3.44324"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.33315 1.23077V3.12929"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.67299 1.23077V3.12929"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M8.44557 2.14184H3.56058C1.86634 2.14184 0.808105 3.08565 0.808105 4.82051V10.0415C0.808105 11.8036 1.86634 12.7692 3.56058 12.7692H8.44022C10.1398 12.7692 11.1927 11.82 11.1927 10.0851V4.82051C11.198 3.08565 10.1452 2.14184 8.44557 2.14184Z"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                  <span
                                    data-v-1663021d=""
                                    className="font-xs text-[13px] text-vacancy-card-icon-text"
                                  >
                                    Monday - Friday
                                  </span>
                                </div>
                                <div
                                  data-v-1663021d=""
                                  className="flex items-center"
                                >
                                  <div data-v-1663021d="" className="icon-bg">
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M11.3367 6.00028C11.3367 8.94778 8.94761 11.3368 6.00011 11.3368C3.05261 11.3368 0.663574 8.94778 0.663574 6.00028C0.663574 3.05278 3.05261 0.663742 6.00011 0.663742C8.94761 0.663742 11.3367 3.05278 11.3367 6.00028Z"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M7.97969 7.69782L5.80469 6.40032V3.60397"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                  <span
                                    data-v-1663021d=""
                                    className="font-xs text-[13px] text-vacancy-card-icon-text"
                                  >
                                    09:00 - 18:00
                                  </span>
                                </div>
                              </div>
                              <div data-v-1663021d="" className="h-7" />
                              <div
                                data-v-1663021d=""
                                className="absolute bottom-0 left-0 w-full px-3 translate-y-1/2"
                              >
                                <div
                                  data-v-1663021d=""
                                  className="transition-colors footer"
                                >
                                  <div
                                    data-v-1663021d=""
                                    className="flex-1 py-0.5 px-2 flex items-center gap-2"
                                  >
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500 text-[#00A795] group-hover:text-white transition-colors icons"
                                    >
                                      <svg
                                        width={22}
                                        height={22}
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M3.26586 19.6625C3.28304 19.8344 3.38617 19.9719 3.52367 20.0578C3.60961 20.0922 3.69555 20.1266 3.78148 20.1266C3.85023 20.1266 3.93617 20.1094 4.00492 20.075L5.25961 19.4734C9.09242 17.6344 13.3549 16.6719 17.6174 16.6719H19.9377C20.2299 16.6719 20.4534 16.4484 20.4534 16.1562C20.4534 15.8641 20.2299 15.6406 19.9377 15.6406H17.6174C13.2174 15.6406 8.80023 16.6375 4.81273 18.5281L4.21117 18.8203L3.95336 16.6031C3.91898 16.3281 3.66117 16.1219 3.38617 16.1562C3.11117 16.1906 2.90492 16.4484 2.9393 16.7234L3.26586 19.6625Z"
                                          fill="#00A795"
                                        />
                                        <path
                                          d="M1.71875 8.9375C2.01094 8.9375 2.23438 8.71406 2.23438 8.42188C2.23438 8.12969 2.01094 7.90625 1.71875 7.90625C1.42656 7.90625 1.20312 7.68281 1.20312 7.39062C1.20312 7.09844 1.42656 6.875 1.71875 6.875H20.2812C20.5734 6.875 20.7969 7.09844 20.7969 7.39062C20.7969 7.68281 20.5734 7.90625 20.2812 7.90625C19.9891 7.90625 19.7656 8.12969 19.7656 8.42188C19.7656 8.71406 19.9891 8.9375 20.2812 8.9375C21.1406 8.9375 21.8281 8.25 21.8281 7.39062C21.8281 6.53125 21.1406 5.84375 20.2812 5.84375H1.71875C0.859375 5.84375 0.171875 6.53125 0.171875 7.39062C0.171875 8.25 0.859375 8.9375 1.71875 8.9375Z"
                                          fill="#00A795"
                                        />
                                        <path
                                          d="M20.3497 14.7469C20.4528 14.6094 20.47 14.4547 20.4356 14.3L18.7169 8.28438C18.6481 8.06094 18.459 7.90625 18.2184 7.90625H3.78092C3.55748 7.90625 3.35123 8.06094 3.28248 8.28438L1.56373 14.3C1.51217 14.4547 1.54654 14.6266 1.64967 14.7469C1.75279 14.8844 1.90748 14.9531 2.06217 14.9531H19.9372C20.0919 14.9531 20.2465 14.8844 20.3497 14.7469ZM10.9997 12.0312C9.86529 12.0312 8.93717 11.3438 8.93717 10.4844C8.93717 9.625 9.86529 8.9375 10.9997 8.9375C12.134 8.9375 13.0622 9.625 13.0622 10.4844C13.0622 11.3438 12.134 12.0312 10.9997 12.0312Z"
                                          fill="#00A795"
                                        />
                                      </svg>
                                    </i>
                                    <span
                                      data-v-1663021d=""
                                      className="text-white text-[13px]"
                                    >
                                      10 000 000 - 15 000 000 UZS
                                    </span>
                                  </div>
                                  <button
                                    data-v-1663021d=""
                                    className="bg-[#00A795] group-hover:bg-[#FFFFFF47] transition-colors h-[24px] w-[24px] rounded-full"
                                    aria-label="button"
                                  >
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={16}
                                        height={12}
                                        viewBox="0 0 16 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M9.05572 11L14.3335 6L1.00016 6M9.05572 1L14.3335 6L9.05572 1Z"
                                          stroke="#fff"
                                          strokeWidth="1.6"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </button>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div
                            className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-duplicate"
                            data-swiper-slide-index={2}
                            style={{ width: 384, marginRight: 20 }}
                          >
                            <a
                              data-v-1663021d=""
                              href="/vacancy/28"
                              className="relative group bg-vacancy-card-background text-white p-3 sm:pt-5 sm:p-4 rounded-8 cursor-pointer block vacancy-card"
                            >
                              <span
                                data-v-1663021d=""
                                className="text-base sm:text-lg font-bold line-clamp-1"
                              >
                                AI Engineer
                              </span>
                              <hr
                                data-v-1663021d=""
                                className="my-3 sm:my-4 border-vacancy-card-divider"
                              />
                              <div
                                data-v-1663021d=""
                                className="flex flex-col justify-between gap-2 sm:flex-row"
                              >
                                <div
                                  data-v-1663021d=""
                                  className="flex items-center"
                                >
                                  <div data-v-1663021d="" className="icon-bg">
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={12}
                                        height={14}
                                        viewBox="0 0 12 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M0.861328 5.50245H11.1444"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.5629 7.75559H8.56824"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M6.00284 7.75559H6.00818"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.4379 7.75559H3.44324"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.5629 9.99781H8.56824"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M6.00284 9.99781H6.00818"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.4379 9.99781H3.44324"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.33315 1.23077V3.12929"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.67299 1.23077V3.12929"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M8.44557 2.14184H3.56058C1.86634 2.14184 0.808105 3.08565 0.808105 4.82051V10.0415C0.808105 11.8036 1.86634 12.7692 3.56058 12.7692H8.44022C10.1398 12.7692 11.1927 11.82 11.1927 10.0851V4.82051C11.198 3.08565 10.1452 2.14184 8.44557 2.14184Z"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                  <span
                                    data-v-1663021d=""
                                    className="font-xs text-[13px] text-vacancy-card-icon-text"
                                  >
                                    Monday - Friday
                                  </span>
                                </div>
                                <div
                                  data-v-1663021d=""
                                  className="flex items-center"
                                >
                                  <div data-v-1663021d="" className="icon-bg">
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M11.3367 6.00028C11.3367 8.94778 8.94761 11.3368 6.00011 11.3368C3.05261 11.3368 0.663574 8.94778 0.663574 6.00028C0.663574 3.05278 3.05261 0.663742 6.00011 0.663742C8.94761 0.663742 11.3367 3.05278 11.3367 6.00028Z"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M7.97969 7.69782L5.80469 6.40032V3.60397"
                                          stroke="white"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </div>
                                  <span
                                    data-v-1663021d=""
                                    className="font-xs text-[13px] text-vacancy-card-icon-text"
                                  >
                                    09:00 - 18:00
                                  </span>
                                </div>
                              </div>
                              <div data-v-1663021d="" className="h-7" />
                              <div
                                data-v-1663021d=""
                                className="absolute bottom-0 left-0 w-full px-3 translate-y-1/2"
                              >
                                <div
                                  data-v-1663021d=""
                                  className="transition-colors footer"
                                >
                                  <div
                                    data-v-1663021d=""
                                    className="flex-1 py-0.5 px-2 flex items-center gap-2"
                                  >
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500 text-[#00A795] group-hover:text-white transition-colors icons"
                                    >
                                      <svg
                                        width={22}
                                        height={22}
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M3.26586 19.6625C3.28304 19.8344 3.38617 19.9719 3.52367 20.0578C3.60961 20.0922 3.69555 20.1266 3.78148 20.1266C3.85023 20.1266 3.93617 20.1094 4.00492 20.075L5.25961 19.4734C9.09242 17.6344 13.3549 16.6719 17.6174 16.6719H19.9377C20.2299 16.6719 20.4534 16.4484 20.4534 16.1562C20.4534 15.8641 20.2299 15.6406 19.9377 15.6406H17.6174C13.2174 15.6406 8.80023 16.6375 4.81273 18.5281L4.21117 18.8203L3.95336 16.6031C3.91898 16.3281 3.66117 16.1219 3.38617 16.1562C3.11117 16.1906 2.90492 16.4484 2.9393 16.7234L3.26586 19.6625Z"
                                          fill="#00A795"
                                        />
                                        <path
                                          d="M1.71875 8.9375C2.01094 8.9375 2.23438 8.71406 2.23438 8.42188C2.23438 8.12969 2.01094 7.90625 1.71875 7.90625C1.42656 7.90625 1.20312 7.68281 1.20312 7.39062C1.20312 7.09844 1.42656 6.875 1.71875 6.875H20.2812C20.5734 6.875 20.7969 7.09844 20.7969 7.39062C20.7969 7.68281 20.5734 7.90625 20.2812 7.90625C19.9891 7.90625 19.7656 8.12969 19.7656 8.42188C19.7656 8.71406 19.9891 8.9375 20.2812 8.9375C21.1406 8.9375 21.8281 8.25 21.8281 7.39062C21.8281 6.53125 21.1406 5.84375 20.2812 5.84375H1.71875C0.859375 5.84375 0.171875 6.53125 0.171875 7.39062C0.171875 8.25 0.859375 8.9375 1.71875 8.9375Z"
                                          fill="#00A795"
                                        />
                                        <path
                                          d="M20.3497 14.7469C20.4528 14.6094 20.47 14.4547 20.4356 14.3L18.7169 8.28438C18.6481 8.06094 18.459 7.90625 18.2184 7.90625H3.78092C3.55748 7.90625 3.35123 8.06094 3.28248 8.28438L1.56373 14.3C1.51217 14.4547 1.54654 14.6266 1.64967 14.7469C1.75279 14.8844 1.90748 14.9531 2.06217 14.9531H19.9372C20.0919 14.9531 20.2465 14.8844 20.3497 14.7469ZM10.9997 12.0312C9.86529 12.0312 8.93717 11.3438 8.93717 10.4844C8.93717 9.625 9.86529 8.9375 10.9997 8.9375C12.134 8.9375 13.0622 9.625 13.0622 10.4844C13.0622 11.3438 12.134 12.0312 10.9997 12.0312Z"
                                          fill="#00A795"
                                        />
                                      </svg>
                                    </i>
                                    <span
                                      data-v-1663021d=""
                                      className="text-white text-[13px]"
                                    >
                                      5 000 000 - 25 000 000 UZS
                                    </span>
                                  </div>
                                  <button
                                    data-v-1663021d=""
                                    className="bg-[#00A795] group-hover:bg-[#FFFFFF47] transition-colors h-[24px] w-[24px] rounded-full"
                                    aria-label="button"
                                  >
                                    <i
                                      data-v-56c03d90=""
                                      data-v-1663021d=""
                                      className="icon hover:text-red-500"
                                    >
                                      <svg
                                        width={16}
                                        height={12}
                                        viewBox="0 0 16 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M9.05572 11L14.3335 6L1.00016 6M9.05572 1L14.3335 6L9.05572 1Z"
                                          stroke="#fff"
                                          strokeWidth="1.6"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </i>
                                  </button>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        
                        
                        
                      </div>
                      <span
                        data-v-1663021d=""
                        className="slider-gradient slider-gradient_right absolute opacity-0 sm:opacity-100 right-0 top-0 w-[50px] sm:w-[150px] md:w-[180px] h-full z-[3]"
                      />
                    </div>
                  </div>
                  <div
                    data-v-7179bf4a=""
                    className="font-['Roboto'] text-[16px] leading-[144%] tracking-[0.2px] mt-10 mb-[64px]"
                  >
                    <p
                      data-v-7179bf4a=""
                      data-aos="fade-up"
                      data-aos-duration={800}
                      className="mb-2 font-semibold aos-init aos-animate"
                    >
                      Working time 10:00-19:00 (Monday-Saturday)
                    </p>
                    <p
                      data-v-7179bf4a=""
                      data-aos="fade-up"
                      data-aos-duration={850}
                      className="aos-init aos-animate"
                    >
                      Become part of our team! Contact us.
                    </p>
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
                    aria-current="page"
                    href="/about"
                    className="router-link-active router-link-exact-active cursor-pointer text-white text-opacity-60 hover:text-opacity-100 transition duration-300 ease-in-out text-base uppercase xs:text-[13px] font-semibold lg:!text-base"
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
                      src="https://uic.group/uic-images/socials/facebook.svg"
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
                      src="https://uic.group/uic-images/socials/twitter.svg"
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
                      src="https://uic.group/uic-images/socials/instagram.svg"
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
                      src="https://uic.group/uic-images/socials/telegram.svg"
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
                      src="https://uic.group/uic-images/socials/linkedin.svg"
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
                      src="https://uic.group/uic-images/socials/behance.svg"
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
                      src="https://uic.group/uic-images/socials/dribbble.svg"
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
                      src="https://uic.group/uic-images/socials/trustpilot.svg"
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
                      src="https://uic.group/uic-images/socials/yelp.svg"
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

export default About