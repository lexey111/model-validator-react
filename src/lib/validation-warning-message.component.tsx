import React from "react";

import {TValidationResult} from 'lx-model-validator';
import {ValidationMessageComponent} from "./validation-message.component.tsx";

export type TValidationWarningMessageComponentProps = {
	field?: string
	result?: TValidationResult
}
export const ValidationWarningMessageComponent: React.FC<TValidationWarningMessageComponentProps> = ({
	                                                                                                     field,
	                                                                                                     result
                                                                                                     }) => {
	return <ValidationMessageComponent type={'warning'} field={field} result={result}/>;
};
