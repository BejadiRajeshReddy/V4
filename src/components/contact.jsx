// import { useState } from "react";
import {
  MessageCircle,
  MapPin,
  Phone,
  Smile,
  // ChevronDown,
  // ChevronUp,
} from "lucide-react";

// const FAQ = ({ question, answer }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="border-b">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full py-4 flex items-center justify-between text-left"
//       >
//         <div className="flex items-center gap-2">
//           <Smile className="w-5 h-5" />
//           <span className="font-medium">{question}</span>
//         </div>
//         {isOpen ? (
//           <ChevronUp className="w-5 h-5" />
//         ) : (
//           <ChevronDown className="w-5 h-5" />
//         )}
//       </button>
//       {isOpen && <div className="pb-4 text-gray-600">{answer}</div>}
//     </div>
//   );
// };

const Contact = () => {
  const contactMethods = [
    {
      title: "Chat to support",
      description: "We're here to help.",
      contact: "enasup@techspira.co.in",
      icon: <MessageCircle className="w-6 h-6" />,
      link: "mailto:enasup@techspira.co.in",
      buttonText: "Send us an email",
    },
    {
      title: "Visit us",
      description: "Visit our office HQ.",
      contact: "View on Google Maps",
      icon: <MapPin className="w-6 h-6" />,
      link: "https://maps.app.goo.gl/hEGTaqjz1zb5Kd2T7",
      buttonText: "Open in Maps",
    },
    {
      title: "Call us",
      description: "Mon-Fri from 10am to 5pm.",
      contact: "+91 9035473867",
      icon: <Phone className="w-6 h-6" />,
      link: "https://wa.me/919035473867",
      buttonText: "Chat on WhatsApp",
    },
  ];

  const handleClick = (link) => {
    window.open(link, "_blank", "noopener noreferrer");
  };

  // const faqs = [
  //   {
  //     question: "Is there a free trial available?",
  //     answer:
  //       "Yes, you can try our service for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  //   },
  //   {
  //     question: "Can I change my plan later?",
  //     answer:
  //       "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the start of the next billing cycle.",
  //   },
  //   {
  //     question: "Is there a free trial available?",
  //     answer:
  //       "Yes, you can try our service for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  //   },
  //   {
  //     question: "Can I change my plan later?",
  //     answer:
  //       "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the start of the next billing cycle.",
  //   },
  //   // Add more FAQs as needed
  // ];

  return (
    <div className="bg-white">
      {/* Main Content */}
      <main className=" py-12 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="pt-16 text-center mb-16">
          <div className="mb-4">
            <Smile className="w-8 h-8 mx-auto" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Contact our friendly team</h1>
          <p className="text-gray-600">Let us know how we can help.</p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid m-20 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="text-center flex flex-col items-center border rounded-lg p-6 bg-white shadow-sm"
            >
              <div className="mb-4 text-2xl">{method.icon}</div>
              <h3 className="font-semibold mb-1">{method.title}</h3>
              <p className="text-gray-600 mb-4">{method.description}</p>
              <button
                onClick={() => handleClick(method.link)}
                className="px-4 py-2 bg-[#4874e9] text-white rounded-lg hover:bg-blue-800 duration-200 ease-in-out delay-50 transition-colors hover:scale-105 animate-bounce"
              >
                {method.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        {/* <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently asked questions
          </h2>
          <div className="divide-y border-t border-b">
            {faqs.map((faq, index) => (
              <FAQ key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div> */}
      </main>
    </div>
  );
};

export default Contact;
