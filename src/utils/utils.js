const getBoxNameByBarcode = (barcode) => {
  switch (barcode) {
    case 444:
      return "Коробка YMA";
    case 5555:
      return "Коробка YMC";
    case 6666:
      return "Пакет MYC";
    case 777:
      return "Коробка YMF";
    case 888:
      return "Коробка MYF";
    case 999:
      return "Пакет MYA";
    case 344:
      return "Пакет MYD";
    case 56565:
      return "Пакет MYB";
    case 6756:
      return "Пакет MYE";
    default:
      return "";
  }
};

const generateUniqueKey = () => Math.random().toString(36).substring(2, 9);

const boxData = [];

const convertToBoxArray = (barcodeData) => {
  boxData.push({
    id: generateUniqueKey(),
    name: getBoxNameByBarcode(barcodeData),
    barcode: barcodeData,
  });
  return boxData;
};

function convertToBarcodeArray(data) {
  const boxes = [];
  if (typeof data.carton === "number") {
    boxes.push(data.carton);
  }
  data.items.forEach((item) => {
    if (typeof item.barcode === "number" && item.amount >= 1) {
      boxes.push(...Array(item.amount).fill(item.barcode));
    }
  });
  return boxes;
}

export {
  getBoxNameByBarcode,
  convertToBoxArray,
  generateUniqueKey,
  convertToBarcodeArray,
};
