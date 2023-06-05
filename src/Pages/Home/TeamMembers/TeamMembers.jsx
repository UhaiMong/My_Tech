import { useState } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { data } from "./data";
import Modal from "./Modal";
const TeamMembers = () => {
  const [next, setNext] = useState(4);
  const [previous, setPrevious] = useState(0);
  const [modalData, setModalData] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const handleNext = () => {
    setNext(next + 4);
    setPrevious(previous + 4);
  };
  const handlePrev = () => {
    setNext(next - 4);
    setPrevious(previous - 4);
  };

  const handleModalData = (selectedData) => {
    setModalData(selectedData);
    setModalOpen(true);
  };
  return (
    <>
      <div className="m-title-outline w-48 mx-auto mt-20">
        <div className="text-2xl font-semibold text-[#1DA1F2] m-title text-center uppercase">
          Team
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center w-[90%] mx-auto my-10">
        <div className="w-full md:w-[20%] mx-auto">
          <div className="w-full">
            <h1 className="text-2xl font-bold text-center capitalize  tracking-[6px] font-[cursive]">
              Our <br></br> Best Team members
            </h1>
          </div>
        </div>
        <div className="w-[80%] mt-5 mx-auto">
          <div className="flex flex-wrap w-full">
            {data.slice(previous, next).map((info) => (
              <div
                onClick={() => handleModalData(info)}
                key={info.id}
                className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4"
              >
                <div className="flex flex-col">
                  <div className="mx-auto rounded-full border-solid border-4 lg:border-2 border-indigo-600">
                    <img
                      className="rounded-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 w-52 h-52 lg:w-36 lg:h-36 md:w-48 md:h-48"
                      src={info.imgURL}
                    />
                  </div>
                  <div className="text-center mt-6">
                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                      {info.name}
                    </h1>
                    <div className="text-gray-700 font-light mb-2">
                      {info.designation}
                    </div>
                    <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                      <Link
                        target={"_blank"}
                        to={info.facebook}
                        className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                      >
                        <FaFacebookF className="text-[#1da1f2]" />
                      </Link>
                      <a
                        target={"_blank"}
                        to={info.github}
                        className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                      >
                        <FaGithub className="text-[#1da1f2]" />
                      </a>
                      <a
                        target={"_blank"}
                        to={info.linkedIn}
                        className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                      >
                        <FaLinkedinIn className="text-[#1da1f2]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[90%] text-end">
        <button disabled={previous <= 0} onClick={handlePrev} title="Previous">
          <FaLongArrowAltRight
            className="rotate-180 text-[#1da1f2] mr-4"
            size={30}
          />
        </button>
        <button
          disabled={next >= data.length}
          onClick={handleNext}
          title="Next"
        >
          <FaLongArrowAltRight className="text-[#1da1f2]" size={30} />
        </button>
      </div>
      <div className={`fixed left-0 right-0 bottom-0 md:top-[212px] top-[21px] z-50 ${modalOpen?"visible":"hidden"}`}>
        <Modal
          modalData={modalData}
          setModalOpen={setModalOpen}
        />
      </div>
    </>
  );
};

export default TeamMembers;
