import React, { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { BsFillBagHeartFill } from "react-icons/bs";
import { addToCart } from "./cartReducer";

const Headers = () => {
  const [isOpenN, setIsOpenN] = useState(false);
  const [isOpenC, setIsOpenC] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => {
    return state.items === undefined ? [] : [];
  });

   const handleCartIconClick = () => {
     dispatch(addToCart({ id: 1, name: "Product 1" }));
     
   };

  const handleLogOut = () => {
    navigate("/");
  };
  const handleOpenNotification = () => {
    setIsOpenN((prev) => !prev);
    setIsOpenC(false);
  };

  const handleOpenAcout = () => {
    setIsOpenC((prev) => !prev);
    setIsOpenN(false);
  };
  return (
    <div className="fixed top-0 w-full bg-red-200 py-6 lg:py-8 flex items-center justify-end gap-4 pb-4 text-slate-200 font-semibold text-sm leading-6 dark:text-slate-900 px-20">
      <div className="relative cursor-pointer" onclick={handleCartIconClick}>
        <BsFillBagHeartFill size={25} />
        <div className="absolute -top-2 w-6 h-6 -right-3 bg-white text-black rounded-full text-center">
          {cartItems !== undefined &&
            cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 text-sm hover:bg-slate-200 "
              >
                <img
                  className="w-14 h-14 rounded-full"
                  alt=""
                  src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/429948755_1052045432548989_2760582603953845443_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHKGttAiYJiEFUnlrPozQ7MxWZ4-CNWiCLFZnj4I1aIImVJNLlv3BHoDzqKOif3b8j1ydHZyvL3woTqIMzdMvho&_nc_ohc=dgNzxZXMXYsAX_Pw9G9&_nc_ht=scontent.fhan2-4.fna&oh=00_AfCJwz53k3GS6vxA7u9eF-38Xv_BE7DjSx9Ns3vr7GUdHw&oe=6606DBCD"
                />
              </div>
            ))}
        </div>
      </div>

      <div className="relative cursor-pointer" onClick={handleOpenNotification}>
        <IoIosNotifications size={30} />
        <div className="absolute -top-2 w-6 h-6 -right-3 bg-white text-black rounded-full text-center">
          20
        </div>
        {isOpenN && (
          <div className="bg-white absolute shadow-md w-[300px] divide-y-2 right-2 h-[400px] mt-3 overflow-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 10].map((item, index) => (
              <div className="flex items-center gap-4 p-3 text-sm hover:bg-slate-200 ">
                <img
                  className="w-14 h-14 rounded-full"
                  alt=""
                  src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/429948755_1052045432548989_2760582603953845443_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHKGttAiYJiEFUnlrPozQ7MxWZ4-CNWiCLFZnj4I1aIImVJNLlv3BHoDzqKOif3b8j1ydHZyvL3woTqIMzdMvho&_nc_ohc=dgNzxZXMXYsAX_Pw9G9&_nc_ht=scontent.fhan2-4.fna&oh=00_AfCJwz53k3GS6vxA7u9eF-38Xv_BE7DjSx9Ns3vr7GUdHw&oe=6606DBCD"
                />
                Tranh
              </div>
            ))}
          </div>
        )}
      </div>

      <div onClick={handleOpenAcout}>
        <RxAvatar size={30} />

        {isOpenC && (
          <div className="bg-white absolute shadow-md w-[300px] right-3 h-[400px] mt-3 text-base">
            <div className=" flex flex-col items-center gap-5 p-5">
              <img
                alt=""
                className="w-16 rounded-full h-16 p-1 "
                src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/429948755_1052045432548989_2760582603953845443_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHKGttAiYJiEFUnlrPozQ7MxWZ4-CNWiCLFZnj4I1aIImVJNLlv3BHoDzqKOif3b8j1ydHZyvL3woTqIMzdMvho&_nc_ohc=dgNzxZXMXYsAX_Pw9G9&_nc_ht=scontent.fhan2-4.fna&oh=00_AfCJwz53k3GS6vxA7u9eF-38Xv_BE7DjSx9Ns3vr7GUdHw&oe=6606DBCD"
              />

              <p className="text-base flex items-center gap-5 text-slate-900 font-semibold dark:text-slate-900">
                Tra Anh
              </p>
            </div>

            <div
              onMouseDown={handleLogOut}
              className="flex items-center gap-2 justify-center cursor-pointer"
            >
              <FiLogOut size={30} color="#ea597b" className="mt-1 " />
              <p>Dang Xuat</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Headers;
