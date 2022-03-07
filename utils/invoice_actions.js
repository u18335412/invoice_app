import useStore from "../src/store/zuestand";
var randomChar = require("random-char");

const generateId = () => {
  const id =
    randomChar("upper") +
    randomChar("upper") +
    randomChar("number") +
    randomChar("number") +
    randomChar("number") +
    randomChar("number");
  return id;
};

export const useInvoice = () => {
  const removeInvoice = useStore((state) => state.removeInvoice);

  const addInvoice = (data, itemCount) => {
    const items = [];
    const invoice = {
      id: generateId(),
      description: data.description,
      paymentTerms: "",
      clientName: data.clientName,
      clientEmail: data.clientEmail,
      status: "pending",
      senderAddress: {
        street: data.senderStreet,
        city: data.senderCity,
        postCode: data.senderPostCode,
        country: data.senderCountry,
      },
      clientAddress: {
        street: data.clientStreet,
        city: data.clientCity,
        postCode: data.clientCode,
        country: data.clientCountry,
      },
    };

    itemCount = itemCount - 1;
    while (itemCount >= 0) {
      const item = {
        name: data[`item${itemCount}Name`],
        quantity: data[`item${itemCount}Qty`],
        price: data[`item${itemCount}Price`],
        total: data[`item${itemCount}Total`],
      };
      items.push(item);
      itemCount--;
    }
    console.table(invoice);
  };

  const editInvoice = (data) => {
    console.log(data);
  };

  const deleteInvoice = (id) => removeInvoice(id);

  return {
    addInvoice,
    editInvoice,
    deleteInvoice,
  };
};
