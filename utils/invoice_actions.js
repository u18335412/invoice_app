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

const setData = (data, paymentTerms) => {
  const invoice = {
    id: data?.id || generateId(),
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
  return invoice;
};

const setItems = (data, itemsCount, invoice) => {
  let itemCount = itemsCount - 1;
  let total = 0;
  const items = [];
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

  return invoice;
};

const formatedDate = () => {
  var current = new Date().toISOString().slice(0, 10);
  return current;
};

export const useInvoice = () => {
  const removeInvoiceFromStore = useStore((state) => state.removeInvoice);
  const addInvoiceToStore = useStore((state) => state.addInvoice);
  const invoices = useStore((state) => state.invoices);

  const addInvoice = (data, itemsCount, paymentTerms) => {
    let invoice = setData(data, paymentTerms, true);
    invoice = setItems(data, itemsCount, invoice);
    addInvoiceToStore(invoice);
  };

  const editInvoice = (data, itemsCount, paymentTerms) => {
    let invoice = setData(data, paymentTerms, false);
    invoice = setItems(data, itemsCount, invoice);
    deleteInvoice(data.id);
    addInvoiceToStore(invoice);
  };

  const markAsStatus = (id) => {
    const invoice = invoices.filter((inv) => inv.id == id)[0];
    invoice.status = invoice.status === "pending" ? "paid" : "pending";
    deleteInvoice(id);
    addInvoiceToStore(invoice);
  };

  const deleteInvoice = (id) => removeInvoiceFromStore(id);

  return {
    addInvoice,
    editInvoice,
    deleteInvoice,
    markAsStatus,
  };
};
