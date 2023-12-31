import React from "react";

import {TValidationResult} from 'lx-model-validator';
import {ValidationMessageComponent} from "./validation-message.component.tsx";

export type TValidationErrorMessageComponentProps = {
	field?: string
	result?: TValidationResult
}
export const ValidationErrorMessageComponent: React.FC<TValidationErrorMessageComponentProps> = ({
	                                                                                                 field,
	                                                                                                 result
                                                                                                 }) => {
	return <ValidationMessageComponent type={'error'} field={field} result={result}/>;
};
