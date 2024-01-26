import { useEffect, useState } from "react";
import "./TourProject.css";

function TourProject() {
  const [data, setdata] = useState([
    {
      id: 1,
      image: "https://www.course-api.com/images/tours/tour-1.jpeg",
      price: "$1000",
      title: "Best Of Paris In 7 Days Tour",
      description:
        "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...",
    },
    {
      id: 2,
      image: "https://www.course-api.com/images/tours/tour-2.jpeg",
      title: "Best Of Ireland In 14 Days Tour",
      description:
        "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...",
    },
    {
      id: 3,
      image: "https://www.course-api.com/images/tours/tour-3.jpeg",
      title: "Best Of Salzburg & Vienna In 8 Days Tour      ",
      description:
        "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...",
    },
    {
      id: 4,
      image: "https://www.course-api.com/images/tours/tour-4.jpeg",
      title: "Best Of Rome In 7 Days Tour      ",
      description:
        "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...",
    },
    {
      id: 5,
      image: "https://www.course-api.com/images/tours/tour-5.jpeg",
      title: "Best Of Poland In 10 Days Tour      ",
      description:
        "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...",
    },
  ]);

  const handleremove = (id) => {
    const filterdata = data.filter((da) => da.id != id);
    setdata(filterdata);
  };

  return (
    <div>
      {data.length > 0 ? 
        <div>
          <h1>Our Tours</h1>
          <div className="container">
            {data.map((da) => (
              <div className="card" key={da.id}>
                <img src={da.image} />
                <h2>{da.title}</h2>
                <p>
                  {da.description}
                  <span>Read More</span>
                </p>
                <button onClick={() => handleremove(da.id)} className="btn">
                  Not interested
                </button>
              </div>
            ))}
          </div>
        </div>
       : 
       <div>
         <h1>No Tours Left</h1>
        <button className="refreshbtn">Refresh</button>
       </div>
      }
    </div>
  );
}

export default TourProject;
