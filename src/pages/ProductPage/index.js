import { Route, Routes, useParams } from "react-router-dom";
import books from "../../json/books.json";
import ProductModel from "../../components/ProductModel";
import NotFound from "../404";
import Layout from "../../components/BaseLayout";

const ProductPage = () => {
  const params = useParams();

  const book = books.find((book) => {
    return book.id === Number(params.id);
  });

  if (!book) {
    return <NotFound />;
  }

  return (
    <Routes>
      <Route path="*" element={<Layout />}>
        <Route
          index
          element={
            <ProductModel
              cover={`${book.cover}`}
              title={book.title}
              author={book.author}
              price={book.price}
              description={book.description}
            >
              texto
            </ProductModel>
          }
        ></Route>
      </Route>
    </Routes>
  );
};

export default ProductPage;
