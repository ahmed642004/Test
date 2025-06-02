import React from "react";
import SvgComponent from "./SvgComponent";

const Rectangle_1 = () => {
  return (
    <>
      <div className="relative w-fit h-fit mx-auto mt-[36px] mb-[13px] md:mt-0 md:mb-0 md:absolute md:top-[27px] md:left-[27px] xl:top-[40px] xl:left-[40px]">
        <p className="absolute text-[20px] lg:text-[30px] xl:text-[40px] font-extrabold h-[80px] lg:h-[122px] max-w-[249px] lg:max-w-[374px] xl:max-w-[498px] left-[20px] top-[12px] lg:top-[26px] xl:top-[35px] xl:left-[40px]">
          Find the<span className="text-[#D0FF00]"> talent</span> sign up & get
          The <span className="text-[#D0FF00]">job</span> done
        </p>

        {/* Mobile */}
        <div className="md:hidden lg:hidden mb-[13px] md:mt-0 md:mb-0">
          <SvgComponent />
        </div>

        {/* Tablet */}
        <div className="hidden md:block lg:hidden">
          <svg
            width="299"
            height="107"
            viewBox="0 0 299 107"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <foreignObject
              x="-67.0004"
              y="-67.0004"
              width="433.001"
              height="241.001"
            >
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  backdropFilter: "blur(33.5px)",
                  clipPath: "url(#bgblur_0_2_1530_clip_path)",
                  height: "100%",
                  width: "100%",
                }}
              ></div>
            </foreignObject>
            <path
              data-figma-bg-blur-radius="67.0004"
              d="M0 16C0 7.16345 7.16344 0 16 0H283C291.837 0 299 7.16344 299 16V48.7755C299 51.8594 298.109 54.8775 296.434 57.4667L269.115 99.6912C266.167 104.248 261.109 107 255.682 107H16C7.16346 107 0 99.8366 0 91V16Z"
              fill="#6C6C6C"
              fillOpacity="0.06"
            />
            <defs>
              <clipPath
                id="bgblur_0_2_1530_clip_path"
                transform="translate(67.0004 67.0004)"
              >
                <path d="M0 16C0 7.16345 7.16344 0 16 0H283C291.837 0 299 7.16344 299 16V48.7755C299 51.8594 298.109 54.8775 296.434 57.4667L269.115 99.6912C266.167 104.248 261.109 107 255.682 107H16C7.16346 107 0 99.8366 0 91V16Z" />
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Laptop */}
        <div className="hidden lg:block xl:hidden">
          <svg
            width="474"
            height="160"
            viewBox="0 0 474 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <foreignObject
              x="-66.6332"
              y="-66.7152"
              width="606.92"
              height="293.168"
            >
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  backdropFilter: "blur(33.5px)",
                  clipPath: "url(#bgblur_0_2_3941_clip_path)",
                  height: "100%",
                  width: "100%",
                }}
              ></div>
            </foreignObject>
            <path
              data-figma-bg-blur-radius="67.0004"
              d="M0.367188 23.6186C0.367188 10.7319 10.8139 0.285156 23.7006 0.285156H449.953C462.84 0.285156 473.286 10.7319 473.286 23.6186V72.6182C473.286 77.3406 471.853 81.9519 469.177 85.8427L425.494 149.344C421.141 155.672 413.951 159.453 406.27 159.453H23.7006C10.8139 159.453 0.367188 149.006 0.367188 136.119V23.6186Z"
              fill="#6C6C6C"
              fillOpacity="0.06"
            />
            <defs>
              <clipPath
                id="bgblur_0_2_3941_clip_path"
                transform="translate(66.6332 66.7152)"
              >
                <path d="M0.367188 23.6186C0.367188 10.7319 10.8139 0.285156 23.7006 0.285156H449.953C462.84 0.285156 473.286 10.7319 473.286 23.6186V72.6182C473.286 77.3406 471.853 81.9519 469.177 85.8427L425.494 149.344C421.141 155.672 413.951 159.453 406.27 159.453H23.7006C10.8139 159.453 0.367188 149.006 0.367188 136.119V23.6186Z" />
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Desktop */}
        <div className="hidden xl:block">
          <svg
            width="568"
            height="191"
            viewBox="0 0 568 191"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <foreignObject x="-80.4" y="-80.4" width="728.3" height="351.8">
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  backdropFilter: "blur(40.2px)",
                  clipPath: "url(#bgblur_0_2_457_clip_path)",
                  height: "100%",
                  width: "100%",
                }}
              ></div>
            </foreignObject>
            <path
              data-figma-bg-blur-radius="80.4"
              d="M0 28C0 12.536 12.536 0 28 0H539.5C554.964 0 567.5 12.536 567.5 28V86.7992C567.5 92.4661 565.781 97.9996 562.569 102.668L510.149 178.869C504.925 186.463 496.298 191 487.081 191H28C12.536 191 0 178.464 0 163V28Z"
              fill="#6C6C6C"
              fillOpacity="0.06"
            />
            <defs>
              <clipPath
                id="bgblur_0_2_457_clip_path"
                transform="translate(80.4 80.4)"
              >
                <path d="M0 28C0 12.536 12.536 0 28 0H539.5C554.964 0 567.5 12.536 567.5 28V86.7992C567.5 92.4661 565.781 97.9996 562.569 102.668L510.149 178.869C504.925 186.463 496.298 191 487.081 191H28C12.536 191 0 178.464 0 163V28Z" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Rectangle_1;
