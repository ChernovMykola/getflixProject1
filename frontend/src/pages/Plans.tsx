export interface Plan {
    id: string;
    name: string;
    description: string;
    price: string;
  }
  
  export const plans: Plan[] = [
    {
      id: "basic",
      name: "Basic",
      description: "Access to basic features: - Good video quality with 720p resolution",
      price: "€ 9.99/month",
    },
    {
      id: "standard",
      name: "Standard",
      description: "Access to standard features: - Better video quality with 1080p resolution",
      price: "€ 13.99/month",
    },
    {
      id: "premium",
      name: "Premium",
      description: "Access to premium features: - Best video quality with 4K+HDR resolution",
      price: "€ 17.99/month",
    },
  ];
  