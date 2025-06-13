import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="bg-hitam min-h-screen text-white">
      {/* Navigation */}
      <Navigation />

      <div>
        {/* Nama */}
        <div className="pt-[150px] ml-[45px] md:pt-[200px] md:ml-[77px] lg:float-right lg:mr-[300px] lg:pt-[300px]">
          <p className="text-[14px] text-putih font-poppins md:text-[17px] lg:text-[24px] animate-slide-in">Hi! My name is</p>
          <h1 className="text-[24px] text-[#ddad81] font-russo md:text-[30px] lg:text-[40px] animate-slide-in hover:text-[#634647] transition-colors duration-300">
            Ridho Anjar Maulana
          </h1>
          <p className="text-[13px] text-putih font-russo md:text-[16px] lg:text-[20px] animate-slide-in">Frontend developer</p>
        </div>

        {/* Foto */}
        <div className="w-[230px] h-[240px] mx-auto mt-[75px] md:w-[260px] md:h-[270px] md:mt-[85px] relative flex items-center justify-center lg:float-start lg:mt-[300px] lg:ml-[250px]">
          <div className="absolute z-10 w-[190px] h-[200px] bg-[#634647] rounded-[10px] md:w-[220px] md:h-[230px] lg:w-[340px] lg:h-[350px] animate-slide-scale overflow-hidden border-2 border-[#634647]">
            <img src="../../img/7543fdb969708432716ec83b223b34fc.jpg" alt="Cover" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="absolute z-0 w-[190px] h-[200px] bg-abu -rotate-12 rounded-[10px] md:w-[220px] md:h-[230px] lg:w-[340px] lg:h-[350px] animate-spin-once"></div>
        </div>

        {/* Tombol */}
        <div className="w-full flex justify-center lg:justify-end">
          <button className="w-[135px] h-[40px] border-[#ddad81] border-2 border-e-0 rounded-s-[15px] mt-[75px] lg:-mt-[70px] lg:w-[170px] lg:h-[49px] lg:mr-[542px] animate-slide-in relative overflow-hidden group">
            <span className="absolute inset-0 bg-[#ddad81] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"></span>
            <div className="flex items-center justify-center relative z-10">
              <p className="text-[10px] text-putih font-russo md:text-[12px] lg:text-[15px] group-hover:text-[#634647] transition-colors duration-300">
                Explore My Work
              </p>
              <span className="ml-2 text-[10px] md:text-[12px] lg:text-[17px] font-russo text-putih group-hover:text-[#634647] opacity-0 group-hover:opacity-100 transition-opacity duration-300">

              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}