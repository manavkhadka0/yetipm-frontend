import { address } from "@/@constants/address";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactDetails() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Address Section */}
          <div className="flex flex-col items-center text-center group">
            <div className="bg-white p-6 rounded-full mb-6 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
              <MapPin className="text-primary w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-gray-900">Visit Us</h3>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  `${address.address} ${address.street}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <p className="text-lg">{address.address}</p>
                <p className="text-lg">{address.street}</p>
              </a>
            </div>
          </div>

          {/* Phone Section */}
          <div className="flex flex-col items-center text-center group">
            <div className="bg-white p-6 rounded-full mb-6 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
              <Phone className="text-primary w-8 h-8" />
            </div>
            <h3 className="font-bold text-xl mb-4 text-gray-900">Call Us</h3>
            <div className="space-y-2">
              {address.landline_1 && (
                <a
                  href={`tel:${address.landline_1}`}
                  className="text-lg text-gray-600 hover:text-primary transition-colors block"
                >
                  {address.landline_1}
                </a>
              )}
            </div>
          </div>

          {/* Email Section */}
          <div className="flex flex-col items-center text-center group">
            <div className="bg-white p-6 rounded-full mb-6 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
              <Mail className="text-primary w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-gray-900">Email Us</h3>
              <div className="space-y-2">
                {address.email_1 && (
                  <a
                    href={`mailto:${address.email_1}`}
                    className="text-lg text-gray-600 hover:text-primary transition-colors block"
                  >
                    {address.email_1}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
