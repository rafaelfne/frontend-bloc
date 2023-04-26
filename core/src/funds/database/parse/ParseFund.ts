import { IFund } from "../../domain";

export const parseFund = (fund: IFund): IFund => {
  return {
    id: fund.id,
    name: fund.name,
    legalName: fund.legalName,
    document: fund.document,
    formattedDocument: fund.document.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5'),
    status: fund.status,
    identifier: fund.identifier
  };
};