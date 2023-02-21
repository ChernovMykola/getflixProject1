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
      description: "Access to basic features",
      price: "$9.99/month",
    },
    {
      id: "standard",
      name: "Standard",
      description: "Access to standard features",
      price: "$13.99/month",
    },
    {
      id: "premium",
      name: "Premium",
      description: "Access to premium features",
      price: "$17.99/month",
    },
  ];
  