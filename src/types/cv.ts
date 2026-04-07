export type CvEntry = {
  year: string;
  title: string;
  place?: string;
  details?: string;
};

export type CvData = {
  education: CvEntry[];
  exhibitions: CvEntry[];
  publications: CvEntry[];
  residencies: CvEntry[];
};
