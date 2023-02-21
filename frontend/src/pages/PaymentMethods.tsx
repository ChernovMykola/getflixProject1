export interface PaymentMethod {
    id: string;
    name: string;
    description: string;
  }
  
  export const paymentMethods: PaymentMethod[] = [
    {
      id: "visa",
      name: "Visa",
      description: "Pay with your Visa card",
    },
    {
      id: "mastercard",
      name: "Mastercard",
      description: "Pay with your Mastercard",
    },
    {
      id: "paypal",
      name: "PayPal",
      description: "Pay with your PayPal account",
    },
  ];
  