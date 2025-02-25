import { FC } from "react";
import { endToEndServicesData } from "@/config/marketing";

interface pageProps {}

const cardBackgrounColor = [
  "#EAECF2",
  "#EAE9EE",
  "#84357B1A",
  "#EAECF2",
  "#322A5E1A",
  "#84357B1A",
];

const cardTextColor = [
  "#384D89",
  "#322A5E",
  "#84357B",
  "#384D89",
  "#322A5E",
  "#84357B",
];
const page: FC<pageProps> = function () {
  return (
    <section className="w-screen flex min-h-screen flex-col items-center justify-center bg-transparent pt-28 pb-16 relative">
      <div className="container flex flex-col items-start justify-between gap-4">
        <h2 className="w-full font-normal leading-tight text-left text-primary font-heading text-secondary_heading z-10">
          End-to-End Services
          <br />
          <span className="font-heading text-tertiary_heading">
            {" "}
            to Meet your Needs
          </span>
        </h2>
        <div className="flex items-center justify-center flex-col w-full gap-6 py-8">
          {endToEndServicesData.map((item, i) => (
            <div
              key={i}
              className="grid w-full grid-cols-1 md:grid-cols-5 px-3 py-5 md:p-5 min-h-[300px] rounded-md"
              style={{ backgroundColor: `${cardBackgrounColor[i]}` }}
            >
              <div className="flex items-center md:justify-center">
                <h3
                  className="font-heading text-special_heading "
                  style={{ color: `${cardTextColor[i]}` }}
                >
                  {i + 1}
                </h3>
              </div>
              <div className="flex md:col-start-2 md:col-end-6 flex-col items-start justify-center gap-4">
                <h2
                  className="w-full font-normal leading-tight text-left  font-heading text-tertiary_heading "
                  style={{ color: `${cardTextColor[i]}` }}
                >
                  {item.title}
                </h2>
                {item.subText.length ? (
                  <h4
                    className="text-subtitle_heading leading-tight font-heading font-normal"
                    style={{ color: `${cardTextColor[i]}` }}
                  >
                    {item.subText}
                  </h4>
                ) : null}
                <ul className="flex flex-wrap items-start justify-start gap-3">
                  {item.services.map((subItem, index) => (
                    <li
                      className="text-popover py-2 px-3 text-paragraph_heading bg-foreground rounded-md"
                      key={index}
                    >
                      {subItem.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
