import React, { useEffect, useState } from "react";
import Headers from "../button/card/Headers";
import Card2 from "../button/card/Card2";


const Home = () => {
    const [data, setData] = useState();
    const [showmore, setShowMore] = useState(6);

    const handleClick = () => {
      setShowMore(showmore === 6 ? data.length : 6);
    };

    const getData = fetch(
      "https://api.freeapi.app/api/v1/public/cats?page=1&limit=30"
    )
      .then((response) => response.json())
      .then((data) => data);
    useEffect(() => {
      const fetchData = async () => {
        const data = await getData;
        setData(data.data.data);
      };
      fetchData();
    }, []);
    console.log(data);
    return (
        <div>
         <>
      <Headers />

     {!data ? (
        <div class="loader"></div>
      ) : (
        <>
          <div className="grid grid-cols-3 w-full h-full gap-4 px-10 mt-10">
          {data
            .filter((item, index) => index < showmore)
           .map((val) => {
             return <Card2 data={val} key={val.id} />;
             })}
         </div>
         <div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t">
           <button
          onClick={handleClick}
               type="button"
             className="h-12 px-6 rounded-lg flex items-center text-sm font-semibold  ring-2 ring-purple-400 ring-offset-4 bg-slate-100 "
            >
               {showmore === data.length ? "Show less" : "Show more"}
             </button>
           </div>
        </>
      )}
     </>
        </div>
    );
};

export default Home;