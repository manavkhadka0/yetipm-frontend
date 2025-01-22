import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ApplicationStepProps } from "@/types/apply";

export default function Residence({
  formData,
  handleChange,
}: ApplicationStepProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="streetAddress">Street Address</Label>
        <Input
          id="streetAddress"
          name="streetAddress"
          value={formData.streetAddress}
          onChange={(event) =>
            handleChange({ name: "streetAddress", value: event.target.value })
          }
        />
      </div>
      <div>
        <Label htmlFor="city">City</Label>
        <Input
          id="city"
          name="city"
          value={formData.city}
          onChange={(event) =>
            handleChange({ name: "city", value: event.target.value })
          }
        />
      </div>
      <div>
        <Label htmlFor="state">State</Label>
        <Input
          id="state"
          name="state"
          value={formData.state}
          onChange={(event) =>
            handleChange({ name: "state", value: event.target.value })
          }
        />
      </div>
      <div>
        <Label htmlFor="zipCode">Zip Code</Label>
        <Input
          id="zipCode"
          name="zipCode"
          value={formData.zipCode}
          onChange={(event) =>
            handleChange({ name: "zipCode", value: event.target.value })
          }
        />
      </div>
      <div>
        <Label htmlFor="residenceType">Residence Type</Label>
        <Input
          id="residenceType"
          name="residenceType"
          value={formData.residenceType}
          onChange={(event) =>
            handleChange({ name: "residenceType", value: event.target.value })
          }
        />
      </div>
      <div>
        <Label htmlFor="lengthOfStay">Length of Stay</Label>
        <Input
          id="lengthOfStay"
          name="lengthOfStay"
          value={formData.lengthOfStay}
          onChange={(event) =>
            handleChange({ name: "lengthOfStay", value: event.target.value })
          }
        />
      </div>
      {/* Add more fields as needed */}
    </div>
  );
}
