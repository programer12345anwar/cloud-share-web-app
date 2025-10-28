import {
  ArrowUpCircle,
  CreditCard,
  FileText,
  Share2,
  Shield,
  Clock,
} from "lucide-react";

const FeatureSection = ({ features }) => {
  const renderIcon = (iconName, iconColor) => {
    const iconProps = { size: 30, className: `${iconColor}` };
    switch (iconName) {
      case "ArrowUpCircle":
        return <ArrowUpCircle {...iconProps} />;
      case "Shield":
        return <Shield {...iconProps} />;
      case "Share2":
        return <Share2 {...iconProps} />;
      case "CreditCard":
        return <CreditCard {...iconProps} />;
      case "FileText":
        return <FileText {...iconProps} />;
      case "Clock":
        return <Clock {...iconProps} />;
      default:
        return <FileText {...iconProps} />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Everything You Need for Effortless File Sharing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            CloudShare gives you all the tools to store, manage, and share your
            digital content seamlessly and securely.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-8 text-center">
                <div className="flex justify-center">
                  <div className="p-4 bg-gray-100 rounded-full group-hover:bg-purple-50 transition-colors duration-300">
                    {renderIcon(feature.iconName, `${feature.iconColor}`)}
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-gray-900 group-hover:text-purple-700">
                  {feature.title}
                </h3>
                <p className="mt-3 text-gray-600 text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;




// import { ArrowUpCircle, CreditCard, FileText, Share2, Shield, Wallet, Clock } from "lucide-react";

// const FeatureSection = ({ features }) => {
//   const renderIcon = (iconName, iconColor) => {
//     const iconProps = { size: 25, className: iconColor };
//     switch (iconName) {
//       case "ArrowUpCircle":
//         return <ArrowUpCircle {...iconProps} />;
//       case "Shield":
//         return <Shield {...iconProps} />;
//       case "Share2":
//         return <Share2 {...iconProps} />;
//       case "CreditCard":
//         return <CreditCard {...iconProps} />;
//       case "FileText":
//         return <FileText {...iconProps} />;
//       case "Clock":
//         return <Clock {...iconProps} />;
//       default:
//         return <FileText {...iconProps} />;
//     }
//   };

//   return (
//     <div className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//             Everything you need for the file sharing
//           </h2>
//           <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
//             CloudShare provides all the tools you need to manage your digital content
//           </p>
//         </div>

//         <div className="mt-16">
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="pt-5 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
//               >
//                 <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
//                   <div className="-mt-6">
//                     <div className="inline-flex items-center justify-center p-3 bg-white rounded-md shadow-lg">
//                       {renderIcon(feature.iconName, feature.iconColor)}
//                     </div>
//                     <h3 className="mt-5 text-lg font-medium text-gray-900 tracking-tight">
//                       {feature.title}
//                     </h3>
//                     <p className="mt-2 text-base text-gray-500">{feature.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureSection;
