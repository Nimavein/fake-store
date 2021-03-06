export type ItemType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type InCartItemType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  inCartAmount: number;
};

export type IRoute = {
  path: string;
  name: string;
  exact: boolean;
  component: any;
  props?: any;
};

export type CartPreviewProps = {
  isCartOpen: boolean;
  setIsCartOpen: (val: boolean) => void;
};

export type CategoryPropsType = {
  categoryName: string;
};

export type ItemsPropsType = {
  category: string;
};

export type FormDataType = {
  name: string;
  email: string;
  message: string;
};

export type ItemLocationType = {
  hash?: string;
  key?: string;
  pathname: string;
  search?: string;
  state?: any;
};

export type CartFormDataType = {
  name: string;
  surname: string;
  email: string;
  country: string;
  zip: string;
  city: string;
  street: string;
  phoneNumber: string;
  cartTotal: number;
  cart: any;
};

export type CountryDataType = {
  value: string;
  label: string;
};

export type CartFormPropsType = {
  cartTotal: number;
};
