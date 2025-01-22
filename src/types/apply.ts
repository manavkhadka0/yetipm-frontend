export interface ApplicationFormData {
  // General Info
  moveInDate: string;
  leaseTerm: string;
  pets: string;
  occupants: number;
  vehicleInfo: string;

  // Personal Details
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  ssn: string;
  driversLicense: string;
  employmentStatus: string;
  employer: string;
  occupation: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  emergencyContactRelation: string;

  // Co-Applicants
  coApplicantName: string;

  // Income Verification
  annualIncome: number;

  // Residence
  currentAddress: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  residenceType: string;
  lengthOfStay: string;

  cardNumber: string;
  cvv: string;
  expirationDate: string;
}

export interface ApplicationStepProps {
  formData: ApplicationFormData;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange: (event: { name: string; value: any }) => void;
}