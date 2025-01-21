const features = [
  {
    name: "Basic",
    price: "$40/month",
    fees: "3.7% + 30¢ per transaction",
    description:
      "Exceptional education, transparent pricing your path to success starts here, without breaking the bank!",
  },
  {
    name: "Standard",
    price: "$80/month",
    fees: "2.9% + 30¢ per transaction",
    description:
      "Affordable rates, unmatched value get the education you deserve without the financial stress!",
  },
  {
    name: "Premium",
    price: "$200/month",
    fees: "2.4% + 30¢ per transaction",
    description:
      "Quality learning at an unbeatable price your future is within reach!",
  },
];

const Pricing = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="
        text-4xl 
        text-center
         md:text-6xl 
         font-bold 
         bg-gradient-to-r
        from-black
         to-gray-500 
         bg-clip-text
         text-transparent md:pb-10
        
        "
      >
        Pricing
        <div className="text-2xl text-center md:text-4xl font-bold md:py-10">
          Simple and transparent pricing plans for all student.
        </div>
      </div>

      <div className="md:flex">
        {features.map((feature, index) => (
          <div key={index} className="p-4">
            <div
              className="
                    grid
                    justify-center
                    items-center
                    gap-4
                    border
                    rounded-xl
                    p-4 
                    w-96
                    h-96
                    
                    
                    
                    "
            >
              <div className="text-2xl text-black pb-4">{feature.name}</div>
              <div className="text-xl ">{feature.price}</div>
              <div className="text-xl ">{feature.fees}</div>
              <div className="text-xl">{feature.description}</div>

              <div className="bg-blue-500 text-white p-4 border rounded-xl items-center justify-center">
                Get Started
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
