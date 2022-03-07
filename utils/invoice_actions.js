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

const formatedDate = () => {
  var current = new Date().toISOString().slice(0, 10);
  return current;
};

export const useInvoice = () => {
  const removeInvoiceFromStore = useStore((state) => state.removeInvoice);
  const addInvoiceToStore = useStore((state) => state.addInvoice);
  const addInvoice = (data, itemsCount, paymentTerms) => {
    const items = [];
    const invoice = {
      id: generateId(),
      createdAt: formatedDate(),
      paymentDue: data.date,
      description: data?.description,
      paymentTerms,
      clientName: data?.clientName,
      clientEmail: data?.clientEmail,
      status: "pending",
      senderAddress: {
        street: data?.senderStreet,
        city: data?.senderCity,
        postCode: data?.senderPostCode,
        country: data?.senderCountry,
      },
      clientAddress: {
        street: data?.clientStreet,
        city: data?.clientCity,
        postCode: data?.clientPostCode,
        country: data?.clientCountry,
      },
    };
    let itemCount = itemsCount - 1;
    let total = 0;
    while (itemCount >= 0) {
      const item = {
        name: data[`item${itemCount}Name`],
        quantity: data[`item${itemCount}Qty`],
        price: data[`item${itemCount}Price`],
        total: data[`item${itemCount}Total`],
      };
      total += parseInt(data[`item${itemCount}Total`]);
      items.push(item);
      itemCount--;
    }
    invoice.items = items;
    invoice.total = total;
    addInvoiceToStore(invoice);
  };

  const editInvoice = (data) => {
    // console.log(data);
  };

  const deleteInvoice = (id) => removeInvoiceFromStore(id);

  return {
    addInvoice,
    editInvoice,
    deleteInvoice,
  };
};
