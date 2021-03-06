import type { ReactNode } from 'react';

export type ScreenPartialProps = {
    children: ReactNode;
    style?: object;
    scoll?: boolean;
    ViewComponent?: React.ElementType;
};
