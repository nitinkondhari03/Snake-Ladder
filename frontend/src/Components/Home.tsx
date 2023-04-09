import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BsRobot, BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  let welcome = new Audio("Sneaky-Snitch.mp3");
  const navigate = useNavigate();
  const handleClick = () => {
    setOpen(true);
  };
  useEffect(() => {}, []);

  return (
    <div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              style={{
                backgroundImage: "url(wp.jpg)",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="flex min-h-full items-end justify-center p-4 text-center items-center p-0"
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 translate-y-0 scale-95"
                enterTo="opacity-100 translate-y-0 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 scale-100"
                leaveTo="opacity-0 translate-y-4 translate-y-0 scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg text-left transition-all my-8 w-full max-w-lg">
                  <div className="px-4 pb-4 pt-5 p-6 pb-4">
                    <div>
                      <div className="mt-3 text-center">
                        <Dialog.Title
                          as="h1"
                          className="text-base text-center font-semibold leading-6 text-xl text-gray-1000"
                        >
                          Select Mode
                        </Dialog.Title>
                      </div>
                    </div>
                  </div>
                  <div className=" px-8 py-5 flex space-x-12 items-center justify-center ">
                    <button
                      type="button"
                      className="flex space-x-10 justify-center rounded-md bg-red-600 px-5 py-8 text-sm font-semibold text-white hover:bg-red-500 w-auto"
                      onClick={() => navigate("/randomplayer")}
                    >
                      <BsRobot size={"25px"} /> <p className="text-lg">VS</p>
                      <BsFillPersonFill size={"25px"} />
                    </button>
                    <button
                      type="button"
                      className="flex space-x-10 justify-center rounded-md bg-purple-500 px-5 py-8 text-sm font-semibold text-white hover:bg-purple-400 w-auto"
                      onClick={() => navigate("/twoplayer")}
                      ref={cancelButtonRef}
                    >
                      <BsFillPersonFill size={"25px"} />{" "}
                      <p className="text-lg">VS</p>
                      <BsFillPersonFill size={"25px"} />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <div>
        <div
          style={{
            backgroundImage: `url(home.jpg)`,
            backgroundRepeat: "no-repeat",
            height: "100vh",
            width: "100%",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundColor: "#6E1B05",
          }}
        >
          <div
            style={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <button
              style={{
                fontSize: "30px",
                borderRadius: "100px",
                color: "#212517",
                backgroundColor: "#C7AD61",
                border: "none",
                padding: "20px",
                cursor: "pointer",
                width: "150px",
                height: "100px",
                margin: "auto",
                backgroundImage:
                  "url(https://cdnb.artstation.com/p/assets/images/images/032/539/853/original/anto-thomas-button-gif.gif?1606754895)",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                marginTop: "580px",
              }}
              onClick={handleClick}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
