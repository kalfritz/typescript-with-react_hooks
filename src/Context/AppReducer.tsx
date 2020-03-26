import React, { useReducer } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Cart {
  products: Product[];
  shippingValue?: number;
}

type CartActionType = {
  type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT';
};

const INITIAL_VALUE = {
  products: [],
};

const AppReducer: React.FC = () => {
  const cart = useReducer((state: Cart, action: CartActionType) => {
    switch (action.type) {
      case 'ADD_PRODUCT':
        return {
          ...state,
          products: [...state.products, { id: 1, name: '', price: 2 }],
        };
      case 'REMOVE_PRODUCT':
        return {
          ...state,
          products: [...state.products, { id: 1, name: '', price: 2 }],
        };
      default:
        return state;
    }
  }, INITIAL_VALUE);

  return <ul />;
};

export default AppReducer;
