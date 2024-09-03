import ContactInner from "@/components/ContactInner";

export const generateMetadata = () => {
    return {
      title: 'My Contact',
      description: 'MMDF Services',
    };
  };

function Contact() {
  return (
    <div> 
      <ContactInner/>
    </div>
  )
}

export default  Contact;