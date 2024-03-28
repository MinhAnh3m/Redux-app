import React from "react";
import { BsFillBagHeartFill } from "react-icons/bs";
import { useDispatch } from "react-redux";


const Card2 = (props) => {
  const { data } = props;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch({ type: "Add_To_Cart", payload: data });
  };

  return (
    // <div className="py-8 px-7 rounded-xl shadow-lg gap-5 grid grid-cols-3">
    <div className="p-8 text-sm bg-slate-800">
      <div className="flex items-center gap-5 ">
        <div>
          <img className="w-14 h-14 rounded-full " alt="" src={data.image} />
        </div>
        <div className="">
          <p className="text-base text-slate-900 font-semibold dark:text-slate-300">
            {data.name}
          </p>
          <p className="text-slate-300 dark:text-slate-300">{data.origin}</p>
        </div>
      </div>
      <div className="text-white mt-5">
        <p>{data.description}</p>
      </div>

      <div className="p-8 text-sm bg-slate-800">
        <BsFillBagHeartFill
          size={25}
          color="white"
          onClick={addToCart}
          className="cursor-pointer"
        />
      </div>
    </div>
    //   </div>
  );
};

export default Card2;
