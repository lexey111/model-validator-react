import React from "react";

import {TValidationResult, TViolation} from 'model-validator';

export type TValidationMessageComponentProps = {
	type?: 'error' | 'warning' | 'notice'
	field?: string
	result?: TValidationResult
}
export const ValidationMessageComponent: React.FC<TValidationMessageComponentProps> = ({
	                                                                                       type = 'error',
	                                                                                       field,
	                                                                                       result
                                                                                       }) => {
	if (!result) {
		return null;
	}

	const typedResult:TViolation = result[type + 's' as 'errors' | 'warnings' | 'notices'];

	let allMessages:Array<string> = field ? typedResult?.[field] : [];
	if (!field) {
		Object.keys(typedResult).forEach(key => {
			allMessages = [...allMessages, ...typedResult[key]];
		});
	}
	if (!allMessages || allMessages?.length === 0) {
		return null;
	}

	return <div className={'validation-messages ' + type}>
		{allMessages.map((messageKey: string, idx:number) => {
			return <div className={'validation-message'} key={idx}>{messageKey}</div>;
		})}
	</div>;
};
