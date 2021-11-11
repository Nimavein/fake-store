import { useCategoriesData } from "./contextProviders/categoriesProvider";
import { useItemsData } from "./contextProviders/itemsProvider";

const App: React.FC = () => {
  const items = useItemsData();
  console.log(items);
  const categories = useCategoriesData();
  console.log(categories);

  return <>XX</>;
};

export default App;
