import { IColumns } from "@/types/components/tables";


export const moduleColumns: IColumns[] = [
  {
    field: 'modlUid',
    headerName: '모듈 번호',
    sortable: true
  },
  {
    field: 'type',
    headerName: '유형'
  },
  {
    field: "type",
    headerName: "유형",
    commCode: "MODL_TYPE_CD"
  },
  {
    field: "subjCd",
    headerName: "과목",
    commCode: "QB_SUBJECT_TYPE"
  },
  {
    field: "progClass",
    headerName: "진도",
    commCode: "PROG_TYPE"
  },
  {
    field: "gradeCd",
    headerName: "학년",
    commCode: "GRADE_TYPE"
  },
  {
    field: "termCd",
    headerName: "학기",
    commCode: "TERM_TYPE"
  },
  {
    field: "chapterNoCd",
    headerName: "단원"
  },
  {
    field: "largeChapterNm",
    headerName: "대단원명"
  },
  {
    field: "modlNm",
    headerName: "모듈명"
  },
  {
    field: "statusCd",
    headerName: "상태",
    commCode: "WORK_STATUS_TYPE"
  },
  {
    field: "createBy",
    headerName: "작성자"
  },
  {
    field: "verCd",
    headerName: "버전"
  },
  {
    field: "lastReleaseDt",
    headerName: "배포 일시"
  },
  {
    field: "modifyDt",
    headerName: "수정일"
  }
]