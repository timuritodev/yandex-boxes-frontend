const boxData = [
  {
    id: 1,
    name: "Коробка YMA",
    barcode: 444,
  },
  {
    id: 2,
    name: "Коробка YMC",
    barcode: 5555,
  },
  {
    id: 3,
    name: "Пакет MYC",
    barcode: 6666,
  },
  {
    id: 4,
    name: "Коробка YMF",
    barcode: 777,
  },
  {
    id: 5,
    name: "Коробка MYF",
    barcode: 888,
  },
  {
    id: 6,
    name: "Пакет MYA",
    barcode: 999,
  },
  {
    id: 7,
    name: "Пакет MYD",
    barcode: 344,
  },
  {
    id: 8,
    name: "Пакет MYB",
    barcode: 56565,
  },
  {
    id: 9,
    name: "Пакет MYE",
    barcode: 6756,
  },
];

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
export { boxData, styleBoxesMap };