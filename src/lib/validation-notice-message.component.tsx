import React from "react";

import {TValidationResult} from 'lx-model-validator';
import {ValidationMessageComponent} from "./validation-message.component.tsx";

export type TValidationNoticeMessageComponentProps = {
	field?: string
	result?: TValidationResult
}
export const ValidationNoticeMessageComponent: React.FC<TValidationNoticeMessageComponentProps> = ({
	                                                                                                     field,
	                                                                                                     result
                                                                                                     }) => {
	return <ValidationMessageComponent type={'notice'} field={field} result={result}/>;
};
