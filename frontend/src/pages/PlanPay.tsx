import { useState } from 'react'
import { Plan, plans } from "./Plans";
import { PaymentMethod, paymentMethods } from "./PaymentMethods";

function PP() {
  const [selectedPlan, setSelectedPlan] = useState<Plan>();
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethod>();

  function handlePlanSelect(plan: Plan) {
    setSelectedPlan(plan);
  }

  function handlePaymentMethodSelect(paymentMethod: PaymentMethod) {
    setSelectedPaymentMethod(paymentMethod);
  }

  return (
    <div className="p-4 max-w-screen-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Choose your plan</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`border p-4 rounded-lg cursor-pointer ${
              selectedPlan?.id === plan.id ? "border-indigo-500" : "border-gray-200"
            }`}
            onClick={() => handlePlanSelect(plan)}
          >
            <h2 className="text-lg font-bold mb-2">{plan.name}</h2>
            <p className="text-gray-500 mb-2">{plan.description}</p>
            <p className="text-lg font-bold">{plan.price}</p>
          </div>
        ))}
      </div>
      {selectedPlan && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Choose your payment method</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {paymentMethods.map((paymentMethod) => (
              <div
                key={paymentMethod.id}
                className={`border p-4 rounded-lg cursor-pointer ${
                  selectedPaymentMethod?.id === paymentMethod.id
                    ? "border-indigo-500"
                    : "border-gray-200"
                }`}
                onClick={() => handlePaymentMethodSelect(paymentMethod)}
              >
                <h3 className="text-lg font-bold mb-2">{paymentMethod.name}</h3>
                <p className="text-gray-500">{paymentMethod.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PP;
