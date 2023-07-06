export enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  OurClasses = 'ourclasses',
  ContactUs = 'contactus',
}
export type BenefitType = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export type ClassesType = {
  name: string;
  description?: string;
  image: string;
};
