import ResumeInner from "@/components/ResumeInner";

export const generateMetadata = () => {
  return {
    title: 'My Resume',
    description: 'MMDF Services',
  };
};


function Resume() {
    return (
     <div>
       <ResumeInner/>
     </div>
    )
  }
  
  export default  Resume;