import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles/globalStyles";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { ItemsProvider } from "./contextProviders/itemsProvider";
import { CategoriesProvider } from "./contextProviders/categoriesProvider";
import { CartProvider } from "./contextProviders/cartProvider";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <ItemsProvider>
            <CategoriesProvider>
              <App />
            </CategoriesProvider>
          </ItemsProvider>
        </CartProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
