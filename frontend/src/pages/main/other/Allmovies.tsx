import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Movies";
import productData from "./data";
import responsive from "./responsive";

interface ProductItem {
  imageurl: string;
  description: string;
}

export default function App(): JSX.Element {
  const products: JSX.Element[] = productData.map((item: ProductItem) => (
    <Product
      url={item.imageurl}
      description={item.description}
    />
  ));

  return (
    <div className="App">
      <Carousel showDots={true} responsive={responsive}>
        {products}
      </Carousel>
    </div>
  );
}
