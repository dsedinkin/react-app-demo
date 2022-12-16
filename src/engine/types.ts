import { ReactNode } from "react"

export type TAppHistory = {
    [activeView: string]: TAppSector[];
};

export type TAppSector = {
    activePanel: string;
    activePage?: string;
    activeModal?: string;
    activePopout?: ReactNode;
    ignoreBack?: boolean;
};

export type TAppHistoryOptions = {
    [key: string]: any;
} & {
    activeView?: string;
    activePanel?: string;
    activePage?: string;
    activeModal?: string;
    activePopout?: ReactNode;
};

export type TPanel = "home" | "profile" | "friends";

export type TFriends = Array<{
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}>;
