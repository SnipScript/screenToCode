
const CommonHeader = ({ children, className }) => {
  return (
    <h2
      className={`text-3xl font-bold sm:text-4xl md:text-5xl text-center ${className}`}
    >
      {children}
    </h2>
  );
};

export default CommonHeader;
