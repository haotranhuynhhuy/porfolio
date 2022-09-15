import React, { useEffect, useState } from "react";
import PortfolioList from "../portfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../data";
function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
    }
  }, [selected]);
  return (
    <div className={`portfolio active`} id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => {
          return (
            <PortfolioList
              key={item.id}
              title={item.title}
              id={item.id}
              actived={selected}
              setSelected={setSelected}
            />
          );
        })}
      </ul>
      <div className="container">
        {data.map((d) => {
          return (
            <div className="item">
              <img
                src={d.img}
                alt="photos"
              />
              <h3>{d.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
