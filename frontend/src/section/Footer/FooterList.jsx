import { GoDotFill } from "react-icons/go";
const FooterList = ({ title, subtile, list }) => {
  return (
    <div>
      <h4 className="text-lg font-medium">{title}</h4>
      <p className="py-1">{subtile}</p>
      {list.map((item, i) => (
        <div key={i} className="flex gap-1">
          <span className="pt-1 text-sm">
            <GoDotFill />
          </span>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default FooterList;
