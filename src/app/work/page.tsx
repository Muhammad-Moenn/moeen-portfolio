import WorkInner from "@/components/WorkInner";

export const generateMetadata = () => {
    return {
      title: 'My Work',
      description: 'MMDF Services',
    };
  };
function Work() {
  return (
    <div> 
      <WorkInner/>
    </div>
  )
}

export default Work;