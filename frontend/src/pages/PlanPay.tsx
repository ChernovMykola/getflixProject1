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
    <>
    <div className="p-4 max-w-screen-md mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">PLANS & PAYMENT</h1><br/>
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
          </div><br/>
          <div>
          <h1 className="text-2xl font-bold mb-4">Enter card details</h1>
          <form
          onSubmit={()=> console.log("Hello")}
          className="relative mx-auto w-[380px] rounded-lg bg-black/75 p-16"
        >
          <article className="text-gray-300">
            <section className="mb-4 flex flex-col gap-4">
              <input
                className="rounded-md bg-zinc-500 p-2 outline-none"
                type="tel"
                name="number"
                id="ccn"
                inputMode='numeric'
                pattern="[0-9\s]{13,19}"
                autoComplete='cc-number'
                placeholder="Enter card number"
              />
              <input
                className="rounded-md bg-zinc-500 p-2 outline-none"
                type="date"
                name="date"
                id="date"
                placeholder="Enter card expiry"
              />
              <button className="my-8 rounded-md bg-netflixRed p-2 font-semibold text-white outline-none">
                Submit
              </button>
            </section>
          </article>
        </form>
          </div>
        </div>
      )}

    </div>
    </>
  );
}

export default PP;
