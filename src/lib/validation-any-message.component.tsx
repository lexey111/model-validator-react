import React from "react";

import {TValidationResult} from 'lx-model-validator';
import {ValidationMessageComponent} from "./validation-message.component.tsx";

export type TValidationAnyMessageComponentProps = {
	field?: string
	types?: Array<string> // 'error' | 'warning' | 'notice'
	result?: TValidationResult
}

export const ValidationAnyMessageComponent: React.FC<TValidationAnyMessageComponentProps> = ({
	                                                                                             field,
	                                                                                             types,
	                                                                                             result
                                                                                             }) => {
	return <>
		{(!types || types.includes('error')) &&
			<ValidationMessageComponent type={'error'} field={field} result={result}/>}

		{(!types || types.includes('warning')) &&
			<ValidationMessageComponent type={'warning'} field={field} result={result}/>}

		{(!types || types.includes('notice')) && <ValidationMessageComponent type={'notice'} field={field} result={result}/>}
	</>;
};
