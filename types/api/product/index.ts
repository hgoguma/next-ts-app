import { ICommonResponse } from 'types/api/common'

export type Module = {
  chapterNoCd: string;
  createBy: string;
  createDt: string;
  eduClassCd: string;
  gradeCd: string;
  largeChapterNm: string;
  modifyBy: string;
  modifyDt: string;
  modlDescText: string;
  modlNm: string;
  modlSeqno: number;
  modlUid: string;
  platformCd: string;
  prodNm: string;
  ridModl: string;
  statusCd: string;
  statusCdNm: string;
  subjCd: string;
  subjCdNm: string;
  termCd: string;
}

export interface IModuleResponse extends ICommonResponse {
  module: Module[]
}