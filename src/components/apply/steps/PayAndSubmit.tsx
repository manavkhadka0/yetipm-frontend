import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ApplicationStepProps } from "@/@types/apply";

export default function PayAndSubmit({
  formData,
  handleChange,
}: ApplicationStepProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="cardNumber">Card Number</Label>
        <Input
          id="cardNumber"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={(event) => handleChange({ name: "cardNumber", value: event.target.value })}
        />
      </div>
      {/* Add more fields as needed */}
    </div>
  );
}
