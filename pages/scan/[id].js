import { useState } from "react";
import Head from "next/head";
import ProductLayout from "../../Layouts/index";
import { getData } from "../../util/fetchData";

const DetailProduct = ({ product }) => {
  //   const [product] = useState(props.product);

  return (
    <ProductLayout>
      <head>
        <title>Product Details</title>
      </head>
      <div className="">
        <div className="d-flex">
          {product.images.map((item, index) => {
            return <img src={item.url} alt={index}></img>;
          })}
        </div>
      </div>
      ;
    </ProductLayout>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const res = await getData(`product/${id}`);
  // const data = await res.json();
  console.log(res);
  // res = JSON.stringify(res.winners);
  return {
    props: {
      product: res.product,
      // result: res.result,
    }, // will be passed to the page component as props
  };
}

export default DetailProduct;
