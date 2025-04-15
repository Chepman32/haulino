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
export declare type OrderCreateFormInputValues = {
    whatToTransport?: string;
    fromAddress?: string;
    toAddress?: string;
    dateAndTime?: string;
    transportType?: string;
    numLoaders?: number;
    description?: string;
    userID?: string;
};
export declare type OrderCreateFormValidationValues = {
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
export declare type OrderCreateFormOverridesProps = {
    OrderCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    whatToTransport?: PrimitiveOverrideProps<TextFieldProps>;
    fromAddress?: PrimitiveOverrideProps<TextFieldProps>;
    toAddress?: PrimitiveOverrideProps<TextFieldProps>;
    dateAndTime?: PrimitiveOverrideProps<TextFieldProps>;
    transportType?: PrimitiveOverrideProps<TextFieldProps>;
    numLoaders?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OrderCreateFormProps = React.PropsWithChildren<{
    overrides?: OrderCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OrderCreateFormInputValues) => OrderCreateFormInputValues;
    onSuccess?: (fields: OrderCreateFormInputValues) => void;
    onError?: (fields: OrderCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrderCreateFormInputValues) => OrderCreateFormInputValues;
    onValidate?: OrderCreateFormValidationValues;
} & React.CSSProperties>;
export default function OrderCreateForm(props: OrderCreateFormProps): React.ReactElement;
