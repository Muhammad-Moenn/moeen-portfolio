import Servicescontext from "@/components/Services";

export const generateMetadata = () => {
  return {
    title: 'My Services',
    description: 'MMDF Services',
  };
};



function Services() {
  return (
    <div >
      <Servicescontext/>
    </div>
    
  )
}

export default Services;