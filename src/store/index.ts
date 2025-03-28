import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

type ShopItemType = {
  id: number;
  title: string;
  price: number;
};

export type ShopState = {
  items: ShopItemType[];
};

export type AttributesState = AttributesType[];

type AttributesType = {
  name: string;
  children?: AttributesNoChildrenWithDisplayedValue[];
  value: number;
};

type AttributesNoChildrenWithDisplayedValue = Omit<
  AttributesType,
  "children"
> & {
  displayedValue: string;
};

const shopSlice = createSlice({
  name: "shop",
  initialState: { items: [] } as ShopState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<ShopItemType, "id">>) => {
      if (action.payload.title.trim() === "") return;
      state.items.push({ id: state.items.length + 1, ...action.payload });
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

const attributesSlice = createSlice({
  name: "attributes",
  initialState: [
    {
      name: "Strength",
      value: 10,
      children: [
        {
          name: "Athletics",
          value: 0,
          displayedValue: "0",
        },
      ],
    },
    {
      name: "Dexterity",
      value: 10,
      children: [
        {
          name: "Acrobatics",
          value: 0,
          displayedValue: "0",
        },
        {
          name: "Sleight of Hand",
          value: 0,
          displayedValue: "0",
        },
        {
          name: "Stealth",
          value: 0,
          displayedValue: "0",
        },
      ],
    },
    {
      name: "Constitution",
      value: 10,
    },
    {
      name: "Intelligence",
      value: 10,
      children: [
        {
          name: "Analysis",
          value: 0,
          displayedValue: "0",
        },
        {
          name: "History",
          value: 0,
          displayedValue: "0",
        },
        {
          name: "Nature",
          value: 0,
          displayedValue: "0",
        },
        {
          name: "Religion",
          value: 0,
          displayedValue: "0",
        },
      ],
    },
    {
      name: "Wisdom",
      value: 10,
      children: [
        {
          name: "Perception",
          value: 0,
          displayedValue: "0",
        },
        {
          name: "Survival",
          value: 0,
          displayedValue: "0",
        },
        {
          name: "Medicine",
          value: 0,
          displayedValue: "0",
        },
        {
          name: "Insight",
          value: 0,
          displayedValue: "0",
        },
        {
          name: "Animal care",
          value: 0,
          displayedValue: "0",
        },
      ],
    },
    {
      name: "Charisma",
      value: 10,
      children: [
        {
          name: "Appearance",
          value: 0,
          displayedValue: "0",
        },
        {
          name: "Intimidation",
          value: 0,
          displayedValue: "0",
        },
        {
          name: "Deception",
          value: 0,
          displayedValue: "0",
        },
        {
          name: "Conviction",
          value: 0,
          displayedValue: "0",
        },
      ],
    },
  ] as AttributesState,

  reducers: {
    changeValue: (state, action: PayloadAction<AttributesType>) => {
      const { name, value } = action.payload;
      const attribute = state.attributes.find((attr) => attr.name === name);
      if (attribute && attribute.children) {
        attribute.value = value;
        attribute.children.forEach((child) => {
          child.value = value;
          child.displayedValue = Math.max(
            -5,
            Math.min(10, Math.floor((Number(value) - 10) / 2)),
          ).toString();
        });
      }
    },
  },
});

export const { addItem, deleteItem } = shopSlice.actions;

export const { changeValue } = attributesSlice.actions;

export const store = configureStore({
  reducer: {
    shop: shopSlice.reducer,
    attributes: attributesSlice.reducer,
  },
});
