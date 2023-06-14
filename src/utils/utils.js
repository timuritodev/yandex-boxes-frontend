const getBoxNameByBarcode = (barcode) => {
  switch (barcode) {
    case 111:
      return "Коробка YMA";
    case 222:
      return "Коробка YMC";
    case 333:
      return "Пакет MYC";
    case 444:
      return "Коробка YMF";
    case 555:
      return "Коробка MYF";
    case 666:
      return "Пакет MYA";
    case 777:
      return "Пакет MYD";
    case 888:
      return "Пакет MYB";
    case 999:
      return "Пакет MYE";
    default:
      return "";
  }
};

const generateUniqueKey = () => Math.random().toString(36).substring(2, 9);

const recommendedBoxes = [];

const convertToBoxArray = (barcodeData) => {
  recommendedBoxes.push({
    id: generateUniqueKey(),
    name: getBoxNameByBarcode(barcodeData),
    barcode: barcodeData,
  });
  return recommendedBoxes;
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

function transformMultiplyBarcodes(data) {
  return data.flatMap((item) => {
    if (item.amount === 1) {
      return item.barcode;
    }
    return item.multiplyBarcodes;
  });
}

export {
  getBoxNameByBarcode,
  convertToBoxArray,
  generateUniqueKey,
  convertToBarcodeArray,
  recommendedBoxes,
  transformMultiplyBarcodes,
};
