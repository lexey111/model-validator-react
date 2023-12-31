import React from "react";

import {TValidationResult} from 'lx-model-validator';

export type TValidationTooltipComponentProps = {
	field: string
	component: any
	result?: TValidationResult
	showOk?: boolean
	showNumber?: boolean
}
export const ValidationTooltipComponent: React.FC<TValidationTooltipComponentProps> = ({
	                                                                                       field,
	                                                                                       component,
	                                                                                       result,
	                                                                                       showOk = false,
	                                                                                       showNumber = false
                                                                                       }) => {
	if (!result) {
		return null;
	}

	const errors = result.errors[field];
	const warnings = result.warnings[field];
	const notices = result.notices[field];

	if ((!errors || errors.length === 0) && (!warnings || warnings.length === 0) && (!notices || notices.length === 0)) {
		return showOk
			? <div className={'validation-tooltip ok'}>
				<a data-tooltip-id={'validation-' + field}></a>
			</div>
			: null;
	}

	const level = errors?.length > 0 ? 'error' : warnings?.length > 0 ? 'warning' : 'notice';
	const variant = errors?.length > 0 ? 'error' : warnings?.length > 0 ? 'warning' : 'info';

	const count = (errors? errors.length : 0) + (warnings? warnings.length : 0) + (notices? notices.length : 0);

	const element = React.cloneElement(component,
		{
			id: 'validation-' + field,
			variant: variant,
			children: <ul>
				{errors?.map(str => <li key={str}>{str}</li>)}
				{warnings?.map(str => <li key={str}>{str}</li>)}
				{notices?.map(str => <li key={str}>{str}</li>)}
			</ul>
		});

	return <div className={'validation-tooltip ' + level}>
		<a data-tooltip-id={'validation-' + field} className={showNumber ? 'with-number' : ''}>{showNumber ? count : ''}</a>
		{element}
	</div>;
};
