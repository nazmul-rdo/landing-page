
const Collections=()=>{
    const callouts = [
        {
          name: 'Origins of Coffee',
          description: 'A Journey through Cultivating Regions',
          imageSrc: 'https://brewminate.com/wp-content/uploads/2018/03/030318-01-Single-Origin-History-Coffee.jpg',
          imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
          href: '#',
        },
        {
          name: 'Coffee Brewing Mastery',
          description: 'The Art of Coffee Processing',
          imageSrc: 'https://imgmedia.lbb.in/media/2018/08/5b64685aac396c6a607967ec_1533306970977.jpg',
          imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
          href: '#',
        },
        {
          name: 'Coffee Culture',
          description: 'A Space for Dialogue',
          imageSrc: 'https://www.corporatecoffee.com.au/wp-content/uploads/2020/12/shutterstock_1143280904.jpg',
          imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
          href: '#',
        },
      ]
      
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-lg text-orange">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default Collections;
  