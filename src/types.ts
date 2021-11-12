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
