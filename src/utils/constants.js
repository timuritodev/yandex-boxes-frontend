const hardcodeData = {
  order_id: 54574564,
  carton: 444,
  items: [
    {
      name: "Очень важная собака, которая улыбается",
      barcode: 1232973912,
      id: 1,
      packageType: "Пакет",
      amount: 2,
    },
    {
      name: "Умная колонка Яндекс Станция Лайт, ультрафиолет",
      barcode: 1237871234,
      id: 2,
      packageType: "Пузырчатая плёнка",
      amount: 3,
    },
    {
      name: "Умная колонка Яндекс Станция Лайт, ультрафиолет",
      barcode: 4444,
      id: 2,
      packageType: "Пузырчатая плёнка",
      amount: 1,
    },
  ],
};

const boxData = [
  {
    id: 1,
    name: "Коробка YMA",
    barcode: 111,
  },
  {
    id: 2,
    name: "Коробка YMC",
    barcode: 222,
  },
  {
    id: 3,
    name: "Пакет MYC",
    barcode: 333,
  },
  {
    id: 4,
    name: "Коробка YMF",
    barcode: 444,
  },
  {
    id: 5,
    name: "Коробка MYF",
    barcode: 555,
  },
  {
    id: 6,
    name: "Пакет MYA",
    barcode: 666,
  },
  {
    id: 7,
    name: "Пакет MYD",
    barcode: 777,
  },
  {
    id: 8,
    name: "Пакет MYB",
    barcode: 888,
  },
  {
    id: 9,
    name: "Пакет MYE",
    barcode: 999,
  },
];

const boxesBarcodes = [111, 222, 333, 444, 555, 666, 777, 888, 999];

const styleBoxesMap = {
  "Коробка YMA": { boxColor: "carton_blue", textColor: "carton__name_blue" },
  "Коробка YMC": { boxColor: "carton_green", textColor: "carton__name_green" },
  "Пакет MYC": {
    boxColor: "carton_lightblue",
    textColor: "carton__name_lightblue",
  },
  "Коробка YMF": {
    boxColor: "carton_orange",
    textColor: "carton__name_orange",
  },
  "Коробка MYF": {
    boxColor: "carton_purple",
    textColor: "carton__name_purple",
  },
  "Пакет MYA": { boxColor: "carton_red", textColor: "carton__name_red" },
  "Пакет MYD": { boxColor: "carton_gray", textColor: "carton__name_gray" },
  "Пакет MYB": {
    boxColor: "carton_darkred",
    textColor: "carton__name_darkred",
  },
  "Пакет MYE": {
    boxColor: "carton_darkyellow",
    textColor: "carton__name_darkyellow",
  },
};

// eslint-disable-next-line import/prefer-default-export
export { boxData, styleBoxesMap, hardcodeData, boxesBarcodes };
