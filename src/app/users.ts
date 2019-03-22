
export interface Users {
    id: number;
    name: string;
    surname: string;
    dateOfBirth: Date;
    mobileNumber: number;
    address: {
        city: string;
        street: string;
        houseNumber: number;
    }
}

