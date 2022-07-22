import useStore from "../src/store/zuestand";
var randomChar = require("random-char");

const generateId = () =>
  randomChar("upper") +
  randomChar("upper") +
  randomChar("number") +
  randomChar("number") +
  randomChar("number") +
  randomChar("number");

const setData = (data) => ({
  id: data?.id || generateId(),
  createdAt: formatedDate(),
  paymentDue: data.date,
  description: data?.description,
  clientName: data?.clientName,
  clientEmail: data?.clientEmail,
  status: data?.status,
  paymentTerms: data?.paymentTerms,
  items: data?.items,
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
  total: data?.items?.reduce(
    (prev, current) => parseInt(prev) + parseInt(current.total),
    0
  ),
});

const formatedDate = () => new Date().toISOString().slice(0, 10);

export const useInvoice = () => {
  const removeInvoiceFromStore = useStore((state) => state.removeInvoice);
  const addInvoiceToStore = useStore((state) => state.addInvoice);
  const invoices = useStore((state) => state.invoices);

  const addInvoice = (data) => {
    let invoice = setData(data);
    addInvoiceToStore(invoice);
  };

  const editInvoice = (data) => {
    let invoice = setData(data);
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
