import { Check } from "lucide-react";

const PricingSection=({pricingPlans})=>{
    return(
        <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Choose the plan that's right for you
                    </p>
                </div>
                <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
                    {pricingPlans.map((plan,index)=>(
                        <div key={index} className={`flex flex-col rounded-lg shadow-lh overflow-hidden ${plan.highlighted?'border-2 border-purple-500 transform scale-105':'border border-gray-200'}`}>
                            <div className={`px-6 py-8 bg-white ${plan.highlighted?'bg-gradient-to-br from-purple-50 to-white':''}`}>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-2xl font-medium text-gray-900">
                                        {plan.name}
                                    </h3>
                                    {plan.highlighted && (
                                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                                            Popular
                                        </span>
                                    )}
                                </div>
                                <p className=" mt-4 text-sm text-gray-900">
                                    {plan.description}
                                </p>
                                <p className="mt-8 ">
                                    {plan.price}
                                </p>
                            </div>
                            <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-0">
                                <ul className="space-y-4">
                                    {plan.features.map((feature,featureIndex)=>(
                                        <li key={featureIndex} className="flex flex-start">
                                            <div className="flex-shrink-0">
                                                <Check className="h-5 w-5 text-purple-500"/>
                                            </div>
                                            <p className="ml-3 text-base text-gray-700">{feature}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PricingSection;



// const PricingSection = ({ pricingPlans }) => {
//   return (
//     <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
//             Simple, Transparent Pricing
//           </h2>
//           <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
//             Choose a plan that fits your needs — upgrade anytime.
//           </p>
//         </div>

//         {/* Pricing Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {pricingPlans.map((plan, index) => (
//             <div
//               key={index}
//               className={`relative flex flex-col justify-between rounded-2xl shadow-md border bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
//                 plan.highlighted
//                   ? "border-purple-500 shadow-purple-200 scale-105"
//                   : "border-gray-200"
//               }`}
//             >
//               {/* Highlighted Badge */}
//               {plan.highlighted && (
//                 <span className="absolute top-4 right-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-purple-100 text-purple-700">
//                   Most Popular
//                 </span>
//               )}

//               {/* Card Content */}
//               <div className="p-8 text-center">
//                 <h3
//                   className={`text-2xl font-bold ${
//                     plan.highlighted ? "text-purple-700" : "text-gray-900"
//                   }`}
//                 >
//                   {plan.name}
//                 </h3>
//                 <p className="mt-3 text-gray-600 text-sm">{plan.description}</p>
//                 <div className="mt-6">
//                   <span className="text-4xl font-extrabold text-gray-900">
//                     {plan.price}
//                   </span>
//                 </div>
//               </div>

//               {/* CTA Button */}
//               <div className="px-8 pb-8">
//                 <button
//                   className={`w-full py-3 text-sm font-semibold rounded-lg transition-colors duration-300 ${
//                     plan.highlighted
//                       ? "bg-purple-600 text-white hover:bg-purple-700"
//                       : "bg-gray-100 text-gray-900 hover:bg-gray-200"
//                   }`}
//                 >
//                   {plan.highlighted ? "Get Started" : "Choose Plan"}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingSection;
