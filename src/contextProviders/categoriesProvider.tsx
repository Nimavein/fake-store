import React, { useContext } from "react";
import { useQuery } from "react-query";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { getCategories } from "../apiRequests";

const CategoriesContext = React.createContext({});

export const CategoriesProvider: React.FC = ({ children }) => {
  const { data, isLoading, error } = useQuery<string[] | any>(
    "categories",
    getCategories
  );

  if (error) return <h1>Something went wrong...</h1>;
  if (isLoading)
    return (
      <span>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={200}
          width={200}
          timeout={3000}
        />
      </span>
    );

  return (
    <CategoriesContext.Provider value={data}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategoriesData = () => {
  const categoriesContext = useContext(CategoriesContext);
  return categoriesContext;
};
