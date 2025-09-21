import type { FC } from 'react';

type ButtonProps = {
	link: string;
	className?: string;
};

const Image: FC<ButtonProps> = ({ link, className }) => {
	return <img src={link} className={className}></img>;
};

export { Image };
