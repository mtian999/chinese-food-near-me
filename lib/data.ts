export type WebNavigationListRow = {
  content: string;
  id: string;
  imageUrl: string | null;
  name: string;
  thumbnailUrl: string | null;
  title: string;
  url: string;
};

export type WebNavigationDetailData = {
  categoryName: string;
  collectionTime: string;
  content: string;
  detail: string;
  imageUrl: string;
  name: string;
  starRating: number;
  tagName: string;
  thumbnailUrl: string;
  title: string;
  url: string;
  websiteData: string;
};

export const dataList: WebNavigationListRow[] = [
  {
    id: '1792434701288771584',
    name: 'under-construction',
    title: 'Under Construction',
    content: 'Our website is under construction. Please check back soon!',
    url: '/',
    imageUrl: 'https://cdn.pixabay.com/photo/2021/11/03/08/07/chongqing-6764965_1280.jpg',
    thumbnailUrl: 'https://cdn.pixabay.com/photo/2021/11/03/08/07/chongqing-6764965_640.jpg',
  },
];

export const detailList: WebNavigationDetailData[] = [
  {
    name: 'under-construction',
    title: 'Under Construction',
    detail: 'Under Construction',
    content: 'Under Construction',
    url: '/',
    imageUrl: 'https://cdn.pixabay.com/photo/2021/11/03/08/07/chongqing-6764965_1280.jpg',
    thumbnailUrl: 'https://cdn.pixabay.com/photo/2021/11/03/08/07/chongqing-6764965_640.jpg',
    collectionTime: '2024-06-17 00:00:00',
    tagName: 'Website',
    websiteData: '1000',
    starRating: 5,
    categoryName: 'SichuanCuisine',
  },
];
