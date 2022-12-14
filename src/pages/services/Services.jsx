import Card from "../../components/card/Card";
import data from "../../data";
import "./services.css";
const Services = () => {
  return (
    <div className="services">
      <div className="servicesContent">
        <h2 className="serviceHeading">My Services</h2>
        <div className="servicesWrapper">
          {data.map((item) => {
            return (
              <Card
                pic={item.img}
                title={item.title}
                desc={item.desc}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
