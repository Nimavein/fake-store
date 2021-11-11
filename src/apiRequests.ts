import { ItemType } from "./types";
import axios from "axios";

export const getItems = async (): Promise<ItemType[]> =>
  await axios
    .get("https://fakestoreapi.com/products")
    .then((response) => response.data);

export const getCategories = async (): Promise<string[]> =>
  await axios
    .get("https://fakestoreapi.com/products/categories")
    .then((response) => response.data);
