import React from "react";
import Avatar from "../components/Avatar/Avatar";
import Maps from "../components/Maps/Maps";
function page() {
  return (
    <div className="bg-white h-screen">
      <div className="flex p-4 bg-yellow-200">
        <Avatar />
        <div className="flex justify-center items-center w-[100%]">
          <span className="text-lg text-black font-bold">Report</span>
        </div>
      </div>
      <div className="w-[100%] min-h-[40%] p-4 bg-slate-200 rounded-b-[60px]">
        <div className="max-w-[100%]">
            <Maps style={{width: '100%', height: '100%'}}/>
        </div>
      </div>
    </div>
  );
}

export default page;
