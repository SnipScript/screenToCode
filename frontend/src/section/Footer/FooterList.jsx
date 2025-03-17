import { LuBadgeCheck } from "react-icons/lu";
const FooterList = ({ title, subtile, list }) => {
  return (
    <div>
      <h4 className="text-lg font-medium">{title}</h4>
      <p className="py-1">{subtile}</p>
      {list.map((item, i) => (
        <div key={i} className="flex items-center gap-1">
          <span className="">
            <LuBadgeCheck />
          </span>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default FooterList;
