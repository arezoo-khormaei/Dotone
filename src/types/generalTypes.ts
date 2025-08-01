export interface IMenuItem {
  id: number;
  label: string;
  linkTo: string;
}

export interface ITransitionButtonProps {
  label: string;
  linkTo?: string;
}

export interface ICompaniesList {
  companyName: string;
  linkTo?: string;
}

export interface IDeviderProps {
  title: string;
  className?: string;
}

export interface IHomeBlogCardProps {
  theme?: "dark" | "light";
  size?: "sm" | "lg";
  tags?: string[] | [];
  title?: string;
  description?: string;
  date?: string;
  image?: string | string[];
  linkTo?: string;
  showMore?: boolean;
}

export interface ICompanyCategories {
  categoryTitle: string;
  childrenCompanies: {
    logo: string;
    decription: string;
  }[];
}

export interface ISocialMedias {
  icon: string;
  linkTo: string;
}
