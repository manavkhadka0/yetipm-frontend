import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ApplicationStepProps } from "@/@types/apply";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function PersonalDetail({
  formData,
  handleChange,
}: ApplicationStepProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Full Name*</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={(event) =>
              handleChange({ name: "name", value: event.target.value })
            }
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
            onChange={(event) =>
              handleChange({ name: "dateOfBirth", value: event.target.value })
            }
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
            onChange={(event) =>
              handleChange({ name: "email", value: event.target.value })
            }
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
            onChange={(event) =>
              handleChange({ name: "phone", value: event.target.value })
            }
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
            onChange={(event) =>
              handleChange({ name: "ssn", value: event.target.value })
            }
            required
            placeholder="XXX-XX-XXXX"
          />
        </div>
        <div>
          <Label htmlFor="driversLicense">Driver's License Number</Label>
          <Input
            id="driversLicense"
            name="driversLicense"
            value={formData.driversLicense}
            onChange={(event) =>
              handleChange({ name: "driversLicense", value: event.target.value })
            }
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
                } as any)
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
              onChange={(event) =>
                handleChange({ name: "employer", value: event.target.value })
              }
            />
          </div>
          <div>
            <Label htmlFor="occupation">Occupation</Label>
            <Input
              id="occupation"
              name="occupation"
              value={formData.occupation}
              onChange={(event) =>
                handleChange({ name: "occupation", value: event.target.value })
              }
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
              onChange={(event) =>
                handleChange({ name: "emergencyContactName", value: event.target.value })
              }
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
              onChange={(event) =>
                handleChange({ name: "emergencyContactPhone", value: event.target.value })
              }
              required
            />
          </div>
          <div>
            <Label htmlFor="emergencyContactRelation">Relationship*</Label>
            <Input
              id="emergencyContactRelation"
              name="emergencyContactRelation"
              value={formData.emergencyContactRelation}
              onChange={(event) =>
                handleChange({ name: "emergencyContactRelation", value: event.target.value })
              }
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}
