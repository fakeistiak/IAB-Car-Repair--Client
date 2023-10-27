import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    },[])

    return (
      <div className="mt-4 pt-12">
        <div className="text-center">
          <h3 className="text-3xl font-bold pb-4 pt-4">Services</h3>
          <h2 className="text-5xl font-serif font-bold">Our Service Area</h2>
          <p className="pt-6">
            The majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which don not look even slightly
            believable.
          </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pl-12 pt-12">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                         service={service}
                    ></ServiceCard>)
               }
            </div>
      </div>
    );
};

export default Services;