export type ContactInfo = {
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
};

const STATIC_CONTACT: ContactInfo = {
  email: "artem92029@gmail.com",
  address: {
    street: "123 Business Ave",
    city: "Lincoln",
    state: "NE",
    zip: "68508",
    country: "United States",
  },
};

/** Fetches contact info from the backend. Uses static data until API is available. */
export async function getContactInfo(): Promise<ContactInfo> {
  return STATIC_CONTACT;
}

export function formatAddress(contact: ContactInfo): string {
  const { street, city, state, zip, country } = contact.address;
  return `${street}, ${city}, ${state} ${zip}, ${country}`;
}

export function formatAddressMultiline(contact: ContactInfo): string[] {
  const { street, city, state, zip, country } = contact.address;
  return [street, `${city}, ${state} ${zip}`, country];
}
