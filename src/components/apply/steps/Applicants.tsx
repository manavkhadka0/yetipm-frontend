import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ApplicationStepProps } from "@/types/apply";

export default function Applicants({
  formData,
  handleChange,
}: ApplicationStepProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="coApplicantName">Co-Applicant Name</Label>
        <Input
          id="coApplicantName"
          name="coApplicantName"
          value={formData.coApplicantName}
          onChange={(event) =>
            handleChange({ name: "coApplicantName", value: event.target.value })
          }
        />
      </div>
      {/* Add more fields as needed */}
    </div>
  );
}
