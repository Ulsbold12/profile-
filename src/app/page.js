import Image from "next/image";

const HomePage = () => {
  return (
    <div className="border w-screen h-screen flex justify-center items-center bg-black">
      <div className="border p-4 rounded-md w-[300px] bg-white flex  flex-col items-center gap-4">
        <img
          alt="profile-image"
          src="/ad.webp"
          className="w-16 h-16 object-cover rounded-full"
        />
        <div className="flex flex-col items-center">
          <h1 className="text-black">Anthony Davis</h1>
          <h1 className="text-black font-thin 20">
            Frond End Engineer @ Microsoft
          </h1>
        </div>
        <h2 className="text-center">
          I turn coffee into bugs which are fixed are fixed by someone else.
          Certified Stack Overflow and ChatGPT developer
        </h2>
        <button className="w-[200px] h-[30px] bg-purple-500 text-white rounded-sm">
          Contact me{" "}
        </button>
        <div className="flex flex-row gap-4">
          <img
            alt="logo"
            src="/instagram logo.avif"
            className="w-8 h-8 object-cover rounded-full"
          />
          <img
            alt="logo"
            src="/instagram logo.avif"
            className="w-8 h-8 object-cover rounded-full"
          />
          <img
            alt="logo"
            src="/instagram logo.avif"
            className="w-8 h-8 object-cover rounded-full"
          />
          <img
            alt="logo"
            src="/instagram logo.avif"
            className="w-8 h-8 object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
