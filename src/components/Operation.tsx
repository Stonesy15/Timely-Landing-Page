import React from 'react';

const Operation = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-2 ce">Operation Mode</h2>
      
      <div className="mt-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <OperationStep
            number="1"
            title="Connect"
            description="The process starts when you place the order through our app, web or contact your local sales rep."
            image="/src/Images/image 3.svg"
          />
          
          <OperationStep
            number="2"
            title="Store"
            description="When your operation is up and running and the logistics flow is established, we manage your warehouse."
            image="/src/Images/Rectangle 1314.svg"
          />
          
          <OperationStep
            number="3"
            title="Ship"
            description="We pick and pack all of your pending orders, ensuring they are delivered within 24-48hrs."
            image="/src/Images/91fa59e6781adbdced82e349bb595d99 1.svg"
          />
        </div>
        
        {/* Dotted connection line */}
        <div className="absolute top-1/2 left-0 right-0 border-t-2 border-dashed border-gray-300 -z-10" />
      </div>
    </section>
  );
}

const OperationStep = ({ number, title, description, image }) => (
  <div className="flex flex-col items-center text-center">
    <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mb-4">
      {number}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <img src={image} alt={title} className="w-48 h-48 object-contain" />
  </div>
);

export default Operation;