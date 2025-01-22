import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ApplicationStepProps } from "@/types/apply";

export default function GeneralInfo({
  formData,
  handleChange,
}: ApplicationStepProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <Label htmlFor="moveInDate">Desired Move-in Date</Label>
          <Input
            id="moveInDate"
            name="moveInDate"
            type="date"
            value={formData.moveInDate}
            onChange={(event) =>
              handleChange({ name: "moveInDate", value: event.target.value })
            }
          />
        </div>
        <div>
          <Label htmlFor="leaseTerm">Desired Lease Term</Label>
          <Select
            name="leaseTerm"
            value={formData.leaseTerm}
            onValueChange={(value) =>
              handleChange({ name: "leaseTerm", value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select lease term" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="12">12 Months</SelectItem>
              <SelectItem value="24">24 Months</SelectItem>
              <SelectItem value="36">36 Months</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="pets">Do you have any pets?</Label>
        <Select
          name="pets"
          value={formData.pets}
          onValueChange={(value) => handleChange({ name: "pets", value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="no">No</SelectItem>
            <SelectItem value="yes">Yes</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="occupants">Number of Occupants</Label>
        <Input
          id="occupants"
          name="occupants"
          type="number"
          min="1"
          value={formData.occupants}
          onChange={(event) =>
            handleChange({ name: "occupants", value: event.target.value })
          }
        />
      </div>

      <div>
        <Label htmlFor="vehicleInfo">Vehicle Information (Optional)</Label>
        <Input
          id="vehicleInfo"
          name="vehicleInfo"
          placeholder="Make, Model, Year, License Plate"
          value={formData.vehicleInfo}
          onChange={(event) =>
            handleChange({ name: "vehicleInfo", value: event.target.value })
          }
        />
      </div>
    </div>
  );
}
