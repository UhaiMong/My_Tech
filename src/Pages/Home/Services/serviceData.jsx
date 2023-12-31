import { FaConnectdevelop } from "react-icons/fa";

import {BsCodeSlash, BsDatabaseCheck } from "react-icons/bs";

import { GiCyberEye } from "react-icons/gi";

import { MdBusiness } from "react-icons/md";

import { SiSimpleanalytics } from "react-icons/si";

export const serviceData = [
  {
    serviceId: "#1",
    id: 1,
    title: "Software Development",
    description:
      "Our tech company offer tailored solutions to design, develop and deliver high-quality software products that align with the company's specific needs and objectives.",
    icon: <FaConnectdevelop size={23}  />,
    bg:"#51ebad",
    rounded:"lg:rounded-tl-[50px]  rounded-xl"
  },
  {
    serviceId: "#2",
    id: 2,
    title: "Cyber Security",
    description:
      "Our tech company offer comprehensive solutions to protect sensitive data, mitigate cyber threats, and safeguard digital assets through proactive measures and advanced security technologies.",
    icon: <GiCyberEye size={23}  />,
    bg:" #b9e2fc",
    rounded:"lg:rounded-tr-[50px] rounded-xl"
  },
  {
    serviceId: "#3",
    id: 3,
    title: "IT Consulting",
    description:
      "Our tech company provide expert guidance, assessment, and recommendations to optimize technology infrastructure, streamline operations, and align IT strategies with business goals.",
    icon: <BsDatabaseCheck size={23}  />,
    bg:"#b9e2fc",
    rounded:"rounded-xl"
  },
  {
    serviceId: "#4",
    id: 4,
    title: "Web Development",
    description:
      "Our tech company provide custom-designed websites and web applications that cater to their unique requirements, enhancing their online presence and user experience.",
    icon: <BsCodeSlash size={23}  />,
    bg:"#51ebad",
    rounded:" rounded-xl"
  },
  {
    serviceId: "#5",
    id: 5,
    title: "Digital Marketing",
    description:
      "Our tech company offer strategic planning, execution, and optimization of online marketing campaigns to drive brand awareness, generate leads, and foster customer engagement in the digital space.",
    icon: <MdBusiness size={23}  />,
    bg:"#51ebad",
    rounded:" rounded-xl"
  },
  {
    serviceId: "#6",
    id: 6,
    title: "UI/UX design",
    description:
      "Our tech company provide innovative and intuitive user interface and experience designs that optimize user engagement, enhance product usability, and differentiate brands in the digital landscape.",
    icon: <SiSimpleanalytics size={23}  />,
    bg:"#b9e2fc",
    rounded:"rounded-xl"
  },
  {
    serviceId: "#7",
    id: 7,
    title: "Mobile App Development",
    description:
      "Our tech company deliver customized and user-centric mobile applications that enhance brand visibility, engage users, and drive business growth in the mobile ecosystem.",
    icon: <SiSimpleanalytics size={23}  />,
    bg:"#b9e2fc",
    rounded:"lg:rounded-bl-[50px]  rounded-xl"
  },
  {
    serviceId: "#8",
    id: 8,
    title: "E-commerce Solutions",
    description:
      "Our tech company offer end-to-end expertise and technologies to build, optimize, and manage online stores, enabling seamless transactions, personalized customer experiences, and revenue growth in the e-commerce space.",
    icon: <SiSimpleanalytics size={23}  />,
    bg:"#51ebad",
    rounded:"lg:rounded-br-[50px] rounded-xl"
  },
];
