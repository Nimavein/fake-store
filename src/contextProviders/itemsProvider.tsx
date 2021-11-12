import React, { useContext } from "react";
import { useQuery } from "react-query";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { getItems } from "../apiRequests";
import { ItemType } from "../types";

const ItemsContext = React.createContext({});

export const ItemsProvider: React.FC = ({ children }) => {
  const { data, isLoading, error } = useQuery<ItemType[] | any>(
    "items",
    getItems,
    {
      refetchInterval: 300,
    }
  );

  if (error) return <h1>Something went wrong...</h1>;
  if (isLoading)
    return (
      <span>
        <Loader
          type="RevolvingDot"
          color="#FF5F1F"
          height={200}
          width={200}
          timeout={3000}
        />
      </span>
    );

  return <ItemsContext.Provider value={data}>{children}</ItemsContext.Provider>;
};

export const useItemsData = () => {
  const itemsContext = useContext(ItemsContext);
  return itemsContext;
};
