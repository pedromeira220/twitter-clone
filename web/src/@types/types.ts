export type userProps = {
    name: string;
    identifier: string;
    profilePicture: string;
    email: string;
};

export type tweetProps = {
    data: {
        id: string;
        user: userProps;
        creationDate: Date;
        content: string;
        numberOfLikes: number;
    };
};