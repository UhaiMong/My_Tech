/* eslint-disable no-unused-vars */

import { json } from "react-router-dom";
import { serviceData } from "../Services/serviceData";

export const services = [
  {
    id: 1,
    title: "Software Development",
      description:
      "Harnessing the power of cloud computing can significantly enhance your business's scalability, flexibility, and cost-efficiency. We offer cloud consulting, migration, and management services to help you leverage cloud platforms effectively, ensuring data security, reliability, and seamless access from anywhere in the world.",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "With the exponential growth of mobile devices, having a mobile app is essential for businesses. Our skilled developers create intuitive and feature-rich mobile applications for iOS and Android platforms, ensuring seamless user experiences and optimal performance.",
  },
  {
    id: 3,
    title: " Cloud Computing",
    description:
      "We offer custom software development services to streamline your business operations and enhance productivity. Our talented developers build robust and scalable software solutions tailored to your specific requirements, helping you automate tasks, manage data effectively, and improve overall efficiency.",
  },
  {
    id: 4,
    title: "E-commerce Solutions",
    description:
      "In today's digital marketplace, having a robust e-commerce platform is crucial for businesses to thrive. We provide end-to-end e-commerce solutions, including online store development, secure payment gateways, inventory management systems, and user-friendly interfaces that optimize your online sales and customer experiences.",
  },
  {
    id: 5,
    title: "UI/UX Design",
    description:
      "We understand the significance of user experience in driving customer satisfaction and engagement. Our skilled designers create visually appealing and intuitive user interfaces that ensure seamless interactions, smooth navigation, and delightful user experiences across various platforms",
  },

    {
      id: 6,
      title: "Digital Marketing",
      description:
        "Reach your target audience and boost your online visibility with our digital marketing services. We offer SEO, social media marketing, and content creation to drive traffic and conversions.",
    },
  {
    id: 7,
    title: "IT Consulting",
    description:
      "We offer strategic IT consulting services to help businesses leverage technology effectively and achieve their goals. Our experienced consultants provide tailored advice and solutions to optimize your IT infrastructure, improve processes, and align technology with your business objectives.",
  },
  {
    id: 8,
    title: "Cyber Security",
    description:
      "In today's increasingly interconnected world, safeguarding your digital assets is of paramount importance. Our cybersecurity experts provide comprehensive solutions to protect your sensitive data from cyber threats, including risk assessments, penetration testing, security audits, and implementation of robust security measures.",
  },
  {
    id: 9,
     title: "Web Development",
     description:
     "Our company, we harness the power of technology to build dynamic and interactive websites tailored to your specific needs. Our skilled team of developers utilizes the latest frameworks and programming languages to create robust, scalable, and secure web solutions. From intuitive user interfaces to seamless integrations, we ensure that your website not only looks impressive but also performs flawlessly across all devices. With a focus on clean code and optimization, we strive to deliver fast-loading and SEO-friendly websites that drive traffic and conversions. Trust us to bring your digital vision to life with our expertise in web development.",
  
    },
  {
    id: 10,
     title: "Data Analytics",
     description:
     "We specialize in data analytics, leveraging insights to drive informed business decisions. Our expert team utilizes advanced tools and techniques to extract valuable information from complex datasets. From data cleansing and modeling to visualization and reporting, we provide comprehensive analytics solutions. Partner with us to unlock the power of your data, gain actionable insights, and achieve data-driven success.",
  
    },
];

 const addId =(activeIndex)=>{

if(activeIndex==1){
    const data=  serviceData.find(item=>item.id===1)
    setCardData(data)
    }
    else if(activeIndex==2){
    const data=  serviceData.find(item=>item.id===2)
      setCardData(data)
    }
    else if(activeIndex==3){
    const data=  serviceData.find(item=>item.id===3)
      setCardData(data)
    }
    else if(activeIndex==4){
    const data=  serviceData.find(item=>item.id===4)
      setCardData(data)
    }
    else if(activeIndex==5){
    const data=  serviceData.find(item=>item.id===5)
      setCardData(data)
    }
    else if(activeIndex==6){
    const data=  serviceData.find(item=>item.id===6)
      setCardData(data)
    }
    else if(activeIndex==7){
    const data=  serviceData.find(item=>item.id===7)
      setCardData(data)
    }
    else if(activeIndex==8){
    const data=  serviceData.find(item=>item.id===8)
      setCardData(data)
    }
    else if(activeIndex==9){
    const data=  serviceData.find(item=>item.id===9)
      setCardData(data)
    }
    else {
    const data=  serviceData.find(item=>item.id===10)
      setCardData(data)
    }
}

const setCardData=(data)=>{

  const cardData=data
  console.log(cardData);
  return cardData;
}

export{
  addId,
  setCardData
}

const setId=(activeIndex)=>{
  console.log("Active Id",activeIndex);

  
}