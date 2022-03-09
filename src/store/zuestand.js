import create from "zustand";
import data from "../../data.json";

const useStore = create((set) => ({
  invoices: data,
  isDark: false,
  toggleTheme: () =>
    set((state) => ({
      isDark: !state.isDark,
    })),
  addInvoice: (invoice) =>
    set((state) => ({
      invoices: [{ ...invoice }, ...state.invoices],
    })),
  editInvoice: (newInvoices) =>
    set((state) => ({
      invoices: newInvoices,
    })),
  removeInvoice: (id) =>
    set((state) => ({
      invoices: state.invoices.filter((invoice) => invoice.id !== id),
    })),
}));
export default useStore;
