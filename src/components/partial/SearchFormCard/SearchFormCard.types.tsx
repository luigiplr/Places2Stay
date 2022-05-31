export type Props = {
    children: React.ReactNode;
    title: string;
    onBackPress?: () => void;
    nextStepText?: string;
    onNextPress?: () => void;
};
