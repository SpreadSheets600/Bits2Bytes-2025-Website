import Image from "next/image";

function Brand() {
  return (
    <>
      <div className="overflow-hidden hidden xl:flex flex-col items-center justify-center">
        <div className="w-[100%] h-[600px] flex items-center justify-center">
          <Image src="/BITS2BYTES.svg" alt="BITS2BYTES" width={1500} height={300} className="p-4" />
        </div>
        <button className="px-11 py-3 bg-main_primary text-white font-semibold font-clash rounded-md shadow-lg hover:bg-white  hover:text-main_primary transition-colors duration-300">
          <a href="#" download> BROCHURE </a>
        </button>
      </div>
    </>
  );
}

export default Brand;