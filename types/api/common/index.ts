export interface IUserInfo {
  divisionCd: string;
  divisionNm: string;
  email: string;
  rankCd: string;
  rankNm: string;
  ridUser: string;
  userName: string;
}

export interface ICommonRequest {
  pagingNo?: number;
  pagingSize?: number;
  pagingSort?: string;
}

export interface ICommonResponse {
  resultCd: string;
  errCd: string;
  errMsg: string;
  pagingLastPageNo?: number;
  pagingNo?: number;
  pagingRowCnt?: number;
  pagingTotCnt?: number;
}


export interface IUserInfoResponse extends ICommonResponse {
  userInfo: IUserInfo;
}

export interface TestType {
  radioValue: boolean;
}