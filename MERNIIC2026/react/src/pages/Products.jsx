import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2">
      {data.map((item, index) => {
        return (
          <Link to={`/products/${item.id}`}>
            <div
              key={index}
              className="rounded-lg hover:shadow-xl border flex flex-col h-[25rem] cursor-pointer transition-shadow"
            >
              <div className="h-[15rem] p-4">
                <img src={item.image} alt="IMAGE" />
              </div>
              <div className="p-2 flex flex-col gap-2">
                <h1 className="text-xl font-bold">
                  {item.title.slice(0, 26)}...
                </h1>
                <p className="text-justify">
                  {item.description.slice(0, 68)}...
                </p>
                <span className="font-bold">PRICE: {item.price} Rs.</span>
                <p>CATETGORY: {item.category}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Products;
