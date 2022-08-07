import { ReactElement, FC } from 'react';
import type { NextPage } from 'next';

export enum TextLinkType {
	HIGHLIGHT = 'highlight',
	MUTED = 'muted',
	DEFAULT = 'default',
}

export interface IconProps {
	className?: String;
}

export interface LayoutPage {
	Layout: FC;
}
// export interface LayoutPage extends NextPage {
// 	Layout: FC;
// }
