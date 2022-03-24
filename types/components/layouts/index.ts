
export type MenuItem = {
  title: string;
  dispSeq: string;
  index: string;
  url: string;
}

export type Menus = {
  title: string;
  dispSeq: string;
  index: string;
  url: string;
  children?: MenuItem[];
}