import { useEffect, useState } from "react";
import {
  getContactInfo,
  type ContactInfo,
} from "@/lib/contact";

export function useContactInfo() {
  const [contact, setContact] = useState<ContactInfo | null>(null);

  useEffect(() => {
    getContactInfo().then(setContact);
  }, []);

  return contact;
}
