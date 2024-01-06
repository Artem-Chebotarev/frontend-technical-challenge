import { useContext } from "react";
import { RegistrationWizardContext } from "../RegistrationWizardContext";

const useWizardContext = () => useContext(RegistrationWizardContext);

export { useWizardContext };
