/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OrderUpdateFormInputValues = {
    whatToTransport?: string;
    fromAddress?: string;
    toAddress?: string;
    dateAndTime?: string;
    transportType?: string;
    numLoaders?: number;
    description?: string;
    userID?: string;
};
export declare type OrderUpdateFormValidationValues = {
    whatToTransport?: ValidationFunction<string>;
    fromAddress?: ValidationFunction<string>;
    toAddress?: ValidationFunction<string>;
    dateAndTime?: ValidationFunction<string>;
    transportType?: ValidationFunction<string>;
    numLoaders?: ValidationFunction<number>;
    description?: ValidationFunction<string>;
    userID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrderUpdateFormOverridesProps = {
    OrderUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    whatToTransport?: PrimitiveOverrideProps<TextFieldProps>;
    fromAddress?: PrimitiveOverrideProps<TextFieldProps>;
    toAddress?: PrimitiveOverrideProps<TextFieldProps>;
    dateAndTime?: PrimitiveOverrideProps<TextFieldProps>;
    transportType?: PrimitiveOverrideProps<TextFieldProps>;
    numLoaders?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OrderUpdateFormProps = React.PropsWithChildren<{
    overrides?: OrderUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    order?: any;
    onSubmit?: (fields: OrderUpdateFormInputValues) => OrderUpdateFormInputValues;
    onSuccess?: (fields: OrderUpdateFormInputValues) => void;
    onError?: (fields: OrderUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrderUpdateFormInputValues) => OrderUpdateFormInputValues;
    onValidate?: OrderUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OrderUpdateForm(props: OrderUpdateFormProps): React.ReactElement;
