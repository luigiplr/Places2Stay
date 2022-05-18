import type { GetawayItem } from '#/components/partial/HomeGetawayItem/HomeGetawayItem.types';

export type SectionProps = {
    children?: React.ReactNode;
    header: string;
    subheader?: string;
    style?: object;
    headerContainStyle?: object;
    padChildren?: boolean;
};

type City = {
    id: number;
    image: string;
    title: string;
};

export type HomeGetawayPartialProps = {
    citys: City[];
    getaways: GetawayItem[];
    ListHeaderComponentStyle?: object;
};
