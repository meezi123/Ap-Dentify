import Navbar from "@/components/Navbar";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";

const index = () => {
  return (
    <>
      <div className="w-full px-16 py-10">
        <Navbar />
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </>
  );
};
export default index;
