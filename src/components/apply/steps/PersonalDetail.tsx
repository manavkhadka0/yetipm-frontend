/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PersonalDetailProps {
  formData: any;
  handleChange: (event: { name: string; value: any }) => void;
}

const PersonalDetail: React.FC<PersonalDetailProps> = ({
  formData,
  handleChange,
}) => {
  const onInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    handleChange({
      name: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Full Name*</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={onInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="dateOfBirth">Date of Birth*</Label>
          <Input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={onInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="email">Email*</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={onInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone*</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={onInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="ssn">Social Security Number*</Label>
          <Input
            id="ssn"
            name="ssn"
            type="password"
            value={formData.ssn}
            onChange={onInputChange}
            required
            placeholder="XXX-XX-XXXX"
          />
        </div>
        <div>
          <Label htmlFor="driversLicense">Driver&apos;s License Number</Label>
          <Input
            id="driversLicense"
            name="driversLicense"
            value={formData.driversLicense}
            onChange={onInputChange}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Employment Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="employmentStatus">Employment Status*</Label>
            <Select
              name="employmentStatus"
              value={formData.employmentStatus}
              onValueChange={(value) => {
                handleChange({
                  target: {
                    name: "employmentStatus",
                    value,
                    type: "select",
                    addEventListener: () => {},
                    dispatchEvent: () => false,
                    removeEventListener: () => {},
                  },
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } as any);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fullTime">Full Time</SelectItem>
                <SelectItem value="partTime">Part Time</SelectItem>
                <SelectItem value="selfEmployed">Self Employed</SelectItem>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="retired">Retired</SelectItem>
                <SelectItem value="unemployed">Unemployed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="employer">Current Employer</Label>
            <Input
              id="employer"
              name="employer"
              value={formData.employer}
              onChange={onInputChange}
            />
          </div>
          <div>
            <Label htmlFor="occupation">Occupation</Label>
            <Input
              id="occupation"
              name="occupation"
              value={formData.occupation}
              onChange={onInputChange}
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Emergency Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="emergencyContactName">Contact Name*</Label>
            <Input
              id="emergencyContactName"
              name="emergencyContactName"
              value={formData.emergencyContactName}
              onChange={onInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="emergencyContactPhone">Contact Phone*</Label>
            <Input
              id="emergencyContactPhone"
              name="emergencyContactPhone"
              type="tel"
              value={formData.emergencyContactPhone}
              onChange={onInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="emergencyContactRelation">Relationship*</Label>
            <Input
              id="emergencyContactRelation"
              name="emergencyContactRelation"
              value={formData.emergencyContactRelation}
              onChange={onInputChange}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetail;
