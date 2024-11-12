export interface RouteConfig {
    path: string;
    element: React.ReactNode;
    children?: RouteConfig[];
}

export interface NavigationLink {
    path: string;
    label: string;
    icon?: React.ReactNode;
}
