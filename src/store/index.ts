import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

type ShopItemType = {
  id: number;
  title: string;
  price: number;
};

export type ShopState = {
  items: ShopItemType[];
};

const shopSlice = createSlice({
  name: "shop",
  initialState: { items: [] } as ShopState,
  reducers: {
    addItem: (state, action: PayloadAction<ShopItemType>) => {
      if (action.payload.title.trim() === "") return;
      state.items.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, deleteItem } = shopSlice.actions;

export const store = configureStore({
  reducer: shopSlice.reducer,
});
