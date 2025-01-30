"use client";

// @ts-expect-error - External module lacks types
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const TawkChat = () => (
  <TawkMessengerReact
    propertyId={process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID}
    widgetId={process.env.NEXT_PUBLIC_TAWK_WIDGET_ID}
  />
);

export default TawkChat;
