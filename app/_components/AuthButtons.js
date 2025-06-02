const AuthButtons = () => (
  <>
    <button className="md:flex hidden justify-center items-center py-[8px] px-[21px] bg-black text-white border-[#94949480] border-[0.83px] my-[5px] font-medium rounded-4xl text-[12px] lg:text-[14px] w-[90px] h-[34px] md:w-[100px] md:h-[40px] xl:w-[122px] xl:h-[48px]">
      Sign In
    </button>
    <button className="flex justify-center items-center py-[8px] px-[21px] w-[90px] h-[34px] md:w-[100px] md:h-[40px] xl:w-[122px] xl:h-[48px] bg-white text-black my-[5px] font-medium rounded-4xl text-[12px] md:mr-[10px] lg:text-[14px]">
      Sign Up
    </button>
  </>
);
export default AuthButtons;