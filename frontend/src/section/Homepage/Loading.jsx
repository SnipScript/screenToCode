const Loading = () => {
  const list = new Array(6).fill(null);
  return (
    <div className="flex flex-col gap-4 px-4 py-10 bg-white rounded-lg shadow-md ">
      <div className="w-3/4 p-4 mb-6 rounded-full bg-slate-200 animate-pulse"></div>

      <div className="w-[40%] py-4 rounded-full  bg-slate-200 animate-pulse"></div>

      <div className="flex flex-col gap-4">
        {list.map((item, i) => (
          <div key={i} className="flex items-center gap-2 ">
            <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse "></div>
            <p className="w-1/2 p-4 rounded-full bg-slate-200 animate-pulse"></p>
          </div>
        ))}
      </div>

      <div className="w-1/2 py-6 mx-auto mt-6 rounded-full bg-slate-200 animate-pulse"></div>
    </div>
  );
};

export default Loading;
