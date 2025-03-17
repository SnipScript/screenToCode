import React from "react";
import CommonContainer from "../common/CommonContainer";
import react from "../assets/ggg.png";
const Conversion = () => {
  const list = new Array(10).fill(null);
  return (
    <div>
      <CommonContainer>
        <div className="flex flex-col gap-4 py-10">
          <h2 className="text-xl sm:text-3xl font-Nunito">
            Your total conversion list
          </h2>
          {list.map((item, i) => (
            <div className="max-w-2xl p-4 rounded-md shadow">
              <p>{i + 1}</p>
              <div>
                <img src={react} alt="ramjan" />
              </div>
            </div>
          ))}
        </div>
      </CommonContainer>
    </div>
  );
};

export default Conversion;
