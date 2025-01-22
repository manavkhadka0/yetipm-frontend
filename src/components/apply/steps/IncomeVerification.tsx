import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ApplicationStepProps } from "@/@types/apply";

export default function IncomeVerification({
  formData,
  handleChange,
}: ApplicationStepProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="annualIncome">Annual Income</Label>
        <Input
          id="annualIncome"
          name="annualIncome"
          type="number"
          value={formData.annualIncome}
          onChange={(event) =>
            handleChange({ name: "annualIncome", value: event.target.value })
          }
        />
      </div>
      {/* Add more fields as needed */}
    </div>
  );
}
