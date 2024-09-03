
import HomeText from "@/components/HomeText";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export const generateMetadata = () => {
  return {
    title: 'MMFD Portfolio',
    description: 'Created by Muhammad Moeen',
  };
};

export default function Home() {

 
  return (
    <main className="h-full ">
       <>
      <div className="container mx-auto mt-[100px]">
        <div className="h-full flex  mt-17 flex-col-reverse lg:flex-row items-center justify-between xl:pt-10 xl:pb-15 gap-4">
           <HomeText />
          <div className="pt-10">
            <Photo/>
          </div>
        </div>
      </div>
     <div className="my-[50px] md:my-[20px]">
     <Stats/>
     </div>
          </>
    </main>
  );
}
