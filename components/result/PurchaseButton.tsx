"use client";

// TODO: Stripe審査通過後、実際のPayment Link URLに差し替える
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/test_placeholder";

interface PurchaseButtonProps {
  typeId: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export function PurchaseButton({ typeId, className, style, children }: PurchaseButtonProps) {
  function handleClick() {
    // Stripe決済前にtypeIdをlocalStorageに保存
    localStorage.setItem("vp_report_type", typeId);
    window.location.href = STRIPE_PAYMENT_LINK;
  }

  return (
    <button onClick={handleClick} className={className} style={style}>
      {children}
    </button>
  );
}
