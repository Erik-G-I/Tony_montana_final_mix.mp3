type User = {
    id: string;
    email: string;
    attributes: {
        name: string;
        sko: string;
        pace: number;
        bio: string;
        image: string;
    };
    username: string;

}

export type { User };