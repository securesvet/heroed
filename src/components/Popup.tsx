const Popup = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
      <div className="absolute inset-0 bg-black w-screen h-screen opacity-15"></div>
    </>
  );
};

export default Popup;
