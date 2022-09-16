import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between header ">
      <div className="">
        <svg
          width="190"
          height="36"
          viewBox="0 0 190 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_14_3)">
            <path
              d="M17.862 0.276006C13.3885 0.308574 9.08713 2.00401 5.79452 5.03251C-1.52698 11.745 -1.95448 23.1555 4.75802 30.477C5.06252 30.843 5.42852 31.149 5.79452 31.515C5.88703 31.5801 5.99982 31.6098 6.1124 31.5988C6.22498 31.5878 6.32987 31.5368 6.40802 31.455L7.20152 30.54C7.28947 30.4503 7.33873 30.3297 7.33873 30.204C7.33873 30.0784 7.28947 29.9577 7.20152 29.868C0.79352 23.949 0.36602 13.881 6.34502 7.47301C12.324 1.06651 22.3335 0.640505 28.74 6.62101C35.145 12.6015 35.571 22.605 29.5905 29.013C29.286 29.3175 29.043 29.6235 28.7385 29.868C28.651 29.9577 28.602 30.078 28.602 30.2033C28.602 30.3285 28.651 30.4489 28.7385 30.5385L29.5335 31.4565C29.6234 31.5384 29.7378 31.5884 29.8589 31.599C29.98 31.6096 30.1013 31.5801 30.204 31.515C37.5255 24.741 37.953 13.3935 31.2405 6.07051C29.539 4.22331 27.4692 2.75327 25.1646 1.75522C22.86 0.757168 20.3718 0.253262 17.8605 0.276006H17.862ZM18.4425 5.55151C15.0317 5.43629 11.7139 6.67614 9.21452 9.00001C4.02752 13.821 3.72302 21.936 8.54252 27.123C8.72552 27.306 8.90852 27.549 9.15302 27.732C9.24249 27.8199 9.36288 27.8691 9.48827 27.8691C9.61366 27.8691 9.73405 27.8199 9.82352 27.732L10.6185 26.817C10.7056 26.7274 10.7543 26.6074 10.7543 26.4825C10.7543 26.3576 10.7056 26.2376 10.6185 26.148C9.54542 25.1357 8.68909 23.916 8.10147 22.5628C7.51384 21.2096 7.20716 19.7512 7.20002 18.276C7.20002 12.357 12.018 7.53601 17.937 7.53601C23.856 7.53601 28.677 12.4155 28.677 18.3345C28.6748 19.7962 28.3761 21.2422 27.7991 22.5852C27.2221 23.9282 26.3787 25.1402 25.32 26.148C25.2322 26.2375 25.1829 26.3579 25.1829 26.4833C25.1829 26.6087 25.2322 26.729 25.32 26.8185L26.115 27.7335C26.2965 27.915 26.601 27.9765 26.784 27.7935C29.2686 25.4587 30.7278 22.2353 30.8428 18.8278C30.9577 15.4204 29.7191 12.1059 27.3975 9.60901C26.2478 8.37311 24.864 7.37799 23.3265 6.68144C21.7889 5.9849 20.1283 5.60081 18.441 5.55151H18.4425ZM18.0435 10.527C15.9806 10.4967 13.9897 11.2853 12.507 12.72C9.39452 15.7095 9.33452 20.5905 12.3255 23.703L12.5055 23.8875C12.5951 23.9758 12.7158 24.0253 12.8415 24.0253C12.9673 24.0253 13.088 23.9758 13.1775 23.8875L13.9725 22.9695C14.06 22.8799 14.109 22.7595 14.109 22.6343C14.109 22.509 14.06 22.3887 13.9725 22.299C12.9152 21.2266 12.3234 19.7805 12.3255 18.2745C12.3233 17.5367 12.467 16.8058 12.7483 16.1237C13.0296 15.4416 13.443 14.8219 13.9646 14.3001C14.4862 13.7784 15.1058 13.3649 15.7878 13.0834C16.4698 12.8019 17.2007 12.658 17.9385 12.66C18.6763 12.658 19.4072 12.8019 20.0892 13.0834C20.7712 13.3649 21.3908 13.7784 21.9125 14.3001C22.4341 14.8219 22.8474 15.4416 23.1287 16.1237C23.41 16.8058 23.5537 17.5367 23.5515 18.2745C23.5515 19.8 22.9425 21.1995 21.8445 22.299C21.757 22.3887 21.708 22.509 21.708 22.6343C21.708 22.7595 21.757 22.8799 21.8445 22.9695L22.638 23.8875C22.7277 23.975 22.848 24.024 22.9733 24.024C23.0985 24.024 23.2189 23.975 23.3085 23.8875C26.3595 20.8965 26.484 16.0155 23.493 12.903C22.788 12.1647 21.9431 11.5741 21.0074 11.1656C20.0718 10.7572 19.0643 10.5391 18.0435 10.524V10.527ZM18.0525 22.143C17.8314 22.1393 17.6167 22.2173 17.4495 22.362L17.3895 22.4235L6.64952 34.506C6.52636 34.6544 6.46433 34.8442 6.47603 35.0367C6.48773 35.2292 6.57229 35.4101 6.71252 35.5425C6.82688 35.6536 6.97779 35.7192 7.13702 35.727H28.6785C28.8718 35.7243 29.0564 35.6463 29.1931 35.5096C29.3298 35.3729 29.4078 35.1883 29.4105 34.995C29.4163 34.8148 29.3517 34.6395 29.2305 34.506L18.6105 22.4235C18.5431 22.3394 18.4584 22.2708 18.3621 22.2224C18.2658 22.174 18.1602 22.1469 18.0525 22.143Z"
              fill="#365AA3"
            />
          </g>
          <path
            d="M62.098 15.5469C61.6932 12.1875 59.1506 10.2557 55.7841 10.2557C51.9418 10.2557 49.0085 12.9688 49.0085 17.7273C49.0085 22.4716 51.892 25.1989 55.7841 25.1989C59.5128 25.1989 61.7642 22.7202 62.098 20.0426L58.9872 20.0284C58.696 21.5838 57.4744 22.4787 55.8338 22.4787C53.625 22.4787 52.1264 20.8381 52.1264 17.7273C52.1264 14.7017 53.6037 12.9759 55.8551 12.9759C57.5384 12.9759 58.7528 13.9489 58.9872 15.5469H62.098ZM66.1311 10.4545H62.7149L67.7362 25H71.6993L76.7135 10.4545H73.3044L69.7817 21.5057H69.6467L66.1311 10.4545ZM94.3269 15.5469C93.9221 12.1875 91.3795 10.2557 88.013 10.2557C84.1707 10.2557 81.2374 12.9688 81.2374 17.7273C81.2374 22.4716 84.121 25.1989 88.013 25.1989C91.7417 25.1989 93.9931 22.7202 94.3269 20.0426L91.2161 20.0284C90.9249 21.5838 89.7033 22.4787 88.0627 22.4787C85.8539 22.4787 84.3553 20.8381 84.3553 17.7273C84.3553 14.7017 85.8326 12.9759 88.084 12.9759C89.7673 12.9759 90.9817 13.9489 91.2161 15.5469H94.3269ZM95.6754 25H98.7009V14.0909H95.6754V25ZM97.1952 12.6847C98.0972 12.6847 98.8359 11.9957 98.8359 11.1506C98.8359 10.3125 98.0972 9.62358 97.1952 9.62358C96.3004 9.62358 95.5617 10.3125 95.5617 11.1506C95.5617 11.9957 96.3004 12.6847 97.1952 12.6847ZM100.325 29.0909H103.35V23.2528H103.442C103.862 24.1619 104.778 25.1776 106.539 25.1776C109.025 25.1776 110.964 23.2102 110.964 19.5597C110.964 15.8097 108.94 13.9489 106.546 13.9489C104.721 13.9489 103.847 15.0355 103.442 15.9233H103.308V14.0909H100.325V29.0909ZM103.286 19.5455C103.286 17.5994 104.11 16.3565 105.58 16.3565C107.079 16.3565 107.874 17.6562 107.874 19.5455C107.874 21.4489 107.065 22.7699 105.58 22.7699C104.124 22.7699 103.286 21.4915 103.286 19.5455ZM117.983 14.0909H115.931V11.4773H112.905V14.0909H111.414V16.3636H112.905V22.0455C112.891 24.1832 114.347 25.2415 116.542 25.1491C117.323 25.1207 117.877 24.9645 118.182 24.8651L117.706 22.6136C117.557 22.642 117.238 22.7131 116.954 22.7131C116.35 22.7131 115.931 22.4858 115.931 21.6477V16.3636H117.983V14.0909ZM122.265 25.206C123.877 25.206 124.921 24.5028 125.454 23.4872H125.539V25H128.409V17.642C128.409 15.0426 126.207 13.9489 123.778 13.9489C121.164 13.9489 119.445 15.1989 119.026 17.1875L121.825 17.4148C122.031 16.6903 122.677 16.1577 123.764 16.1577C124.793 16.1577 125.383 16.6761 125.383 17.571V17.6136C125.383 18.3168 124.637 18.4091 122.741 18.5938C120.582 18.7926 118.643 19.517 118.643 21.9531C118.643 24.1122 120.184 25.206 122.265 25.206ZM123.132 23.1179C122.201 23.1179 121.534 22.6847 121.534 21.8537C121.534 21.0014 122.237 20.5824 123.302 20.4332C123.963 20.3409 125.042 20.1847 125.404 19.9432V21.1009C125.404 22.2443 124.46 23.1179 123.132 23.1179ZM133.842 10.4545V25H136.825V15.4972H136.945L140.709 24.929H142.741L146.505 15.5327H146.626V25H149.609V10.4545H145.816L141.81 20.2273H141.64L137.634 10.4545H133.842ZM156.257 25.2131C158.956 25.2131 160.774 23.8991 161.2 21.875L158.402 21.6903C158.097 22.5213 157.315 22.9545 156.307 22.9545C154.794 22.9545 153.835 21.9531 153.835 20.3267V20.3196H161.264V19.4886C161.264 15.7812 159.02 13.9489 156.136 13.9489C152.926 13.9489 150.845 16.2287 150.845 19.5952C150.845 23.054 152.898 25.2131 156.257 25.2131ZM153.835 18.4446C153.899 17.2017 154.844 16.2074 156.186 16.2074C157.5 16.2074 158.409 17.1449 158.416 18.4446H153.835ZM166.459 25.1776C168.22 25.1776 169.136 24.1619 169.555 23.2528H169.683V25H172.666V10.4545H169.647V15.9233H169.555C169.15 15.0355 168.277 13.9489 166.451 13.9489C164.058 13.9489 162.034 15.8097 162.034 19.5597C162.034 23.2102 163.973 25.1776 166.459 25.1776ZM167.417 22.7699C165.933 22.7699 165.123 21.4489 165.123 19.5455C165.123 17.6562 165.919 16.3565 167.417 16.3565C168.887 16.3565 169.711 17.5994 169.711 19.5455C169.711 21.4915 168.873 22.7699 167.417 22.7699ZM174.353 25H177.379V14.0909H174.353V25ZM175.873 12.6847C176.775 12.6847 177.514 11.9957 177.514 11.1506C177.514 10.3125 176.775 9.62358 175.873 9.62358C174.978 9.62358 174.24 10.3125 174.24 11.1506C174.24 11.9957 174.978 12.6847 175.873 12.6847ZM182.114 25.206C183.726 25.206 184.77 24.5028 185.302 23.4872H185.388V25H188.257V17.642C188.257 15.0426 186.055 13.9489 183.626 13.9489C181.013 13.9489 179.294 15.1989 178.875 17.1875L181.673 17.4148C181.879 16.6903 182.525 16.1577 183.612 16.1577C184.642 16.1577 185.231 16.6761 185.231 17.571V17.6136C185.231 18.3168 184.486 18.4091 182.589 18.5938C180.43 18.7926 178.491 19.517 178.491 21.9531C178.491 24.1122 180.033 25.206 182.114 25.206ZM182.98 23.1179C182.05 23.1179 181.382 22.6847 181.382 21.8537C181.382 21.0014 182.085 20.5824 183.15 20.4332C183.811 20.3409 184.89 20.1847 185.253 19.9432V21.1009C185.253 22.2443 184.308 23.1179 182.98 23.1179Z"
            fill="url(#paint0_linear_14_3)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_14_3"
              x1="56.5"
              y1="18"
              x2="190"
              y2="30"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#365AA3" />
              <stop offset="1" stopColor="#4370CD" />
            </linearGradient>
            <clipPath id="clip0_14_3">
              <rect width="36" height="36" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="flex gap-10 font-bold -translate-x-52 navigation">
        <p>Home</p>
        <p>Books</p>
        <p>Best seller</p>
        <p className="flex gap-1 font-extralight">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>
          (0905) 494 564
        </p>
      </div>
      <div className="flex gap-3">
        <p>Login</p>/<p>Sign up</p>
      </div>
    </div>
  );
};

export default Header;
