import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [data, setData] = useState({});
  const { prodId } = useParams();
  console.log(prodId);

  const fetchData = async () => {
    await axios
      .post(`https://fakestoreapi.com/products/${prodId}`, formData)
      .then((res) => {
        setData(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-6 items-center">
      <h1 className="text-2xl font-bold text-center">{data.title}</h1>
      <div className="h-[25rem] w-[30rem]">
        <img src={data.image} alt="" />
      </div>
      <div className="flex gap-4 flex-col items-center">
        <p className="w-2/3">{data.description}</p>
        <div className="flex gap-4">
          <span className="font-bold">
            PRICE: <span className="text-red-500">{data.price}</span> RS:
          </span>
          <span>
            CATEGORY: <span className="font-bold">{data.category}</span>
          </span>
        </div>
        <div className="flex gap-2 items-center font-bold">
          <span>{data?.rating?.count}</span>{" "}
          <FaStar className="text-6xl text-[#FFD700]" />{" "}
          <span>{data?.rating?.rate}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
