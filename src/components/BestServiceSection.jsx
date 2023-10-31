import { IoIosBicycle, IoMdCafe, IoLogoUsd, IoIosContacts } from "react-icons/io";


const BestServiceSection = () => {
  const features = [
    {
      name: 'PREMIUM AQUA SCAPE',
      description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
      icon: IoMdCafe,
    },
    {
      name: 'Fast Delivery',
      description:
        'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
      icon: IoIosBicycle,
    },
    {
      name: '100% PAYMENT SECURE',
      description:
        'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
      icon: IoLogoUsd,
    },
    {
      name: '24/7 ONLINE SUPPORT',
      description:
        'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
      icon: IoIosContacts,
    },

  ]

  return (
    <section>
      <div className="bg-orange py-24 sm:py-32 opacity-80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why We Are The Best
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};



const FeatureCard = ({ name, description, icon: Icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:bg-gray-100 transition duration-300 transform hover:-translate-y-1 hover:scale-105">
      <div className="flex items-center mb-4">
        <Icon className="text-orange text-3xl mr-4" />
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default BestServiceSection;