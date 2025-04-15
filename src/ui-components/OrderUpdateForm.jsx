/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getOrder } from "../graphql/queries";
import { updateOrder } from "../graphql/mutations";
const client = generateClient();
export default function OrderUpdateForm(props) {
  const {
    id: idProp,
    order: orderModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    whatToTransport: "",
    fromAddress: "",
    toAddress: "",
    dateAndTime: "",
    transportType: "",
    numLoaders: "",
    description: "",
    userID: "",
  };
  const [whatToTransport, setWhatToTransport] = React.useState(
    initialValues.whatToTransport
  );
  const [fromAddress, setFromAddress] = React.useState(
    initialValues.fromAddress
  );
  const [toAddress, setToAddress] = React.useState(initialValues.toAddress);
  const [dateAndTime, setDateAndTime] = React.useState(
    initialValues.dateAndTime
  );
  const [transportType, setTransportType] = React.useState(
    initialValues.transportType
  );
  const [numLoaders, setNumLoaders] = React.useState(initialValues.numLoaders);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = orderRecord
      ? { ...initialValues, ...orderRecord }
      : initialValues;
    setWhatToTransport(cleanValues.whatToTransport);
    setFromAddress(cleanValues.fromAddress);
    setToAddress(cleanValues.toAddress);
    setDateAndTime(cleanValues.dateAndTime);
    setTransportType(cleanValues.transportType);
    setNumLoaders(cleanValues.numLoaders);
    setDescription(cleanValues.description);
    setUserID(cleanValues.userID);
    setErrors({});
  };
  const [orderRecord, setOrderRecord] = React.useState(orderModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getOrder.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getOrder
        : orderModelProp;
      setOrderRecord(record);
    };
    queryData();
  }, [idProp, orderModelProp]);
  React.useEffect(resetStateValues, [orderRecord]);
  const validations = {
    whatToTransport: [{ type: "Required" }],
    fromAddress: [{ type: "Required" }],
    toAddress: [{ type: "Required" }],
    dateAndTime: [{ type: "Required" }],
    transportType: [{ type: "Required" }],
    numLoaders: [],
    description: [],
    userID: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          whatToTransport,
          fromAddress,
          toAddress,
          dateAndTime,
          transportType,
          numLoaders: numLoaders ?? null,
          description: description ?? null,
          userID,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateOrder.replaceAll("__typename", ""),
            variables: {
              input: {
                id: orderRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "OrderUpdateForm")}
      {...rest}
    >
      <TextField
        label="What to transport"
        isRequired={true}
        isReadOnly={false}
        value={whatToTransport}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              whatToTransport: value,
              fromAddress,
              toAddress,
              dateAndTime,
              transportType,
              numLoaders,
              description,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.whatToTransport ?? value;
          }
          if (errors.whatToTransport?.hasError) {
            runValidationTasks("whatToTransport", value);
          }
          setWhatToTransport(value);
        }}
        onBlur={() => runValidationTasks("whatToTransport", whatToTransport)}
        errorMessage={errors.whatToTransport?.errorMessage}
        hasError={errors.whatToTransport?.hasError}
        {...getOverrideProps(overrides, "whatToTransport")}
      ></TextField>
      <TextField
        label="From address"
        isRequired={true}
        isReadOnly={false}
        value={fromAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              whatToTransport,
              fromAddress: value,
              toAddress,
              dateAndTime,
              transportType,
              numLoaders,
              description,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.fromAddress ?? value;
          }
          if (errors.fromAddress?.hasError) {
            runValidationTasks("fromAddress", value);
          }
          setFromAddress(value);
        }}
        onBlur={() => runValidationTasks("fromAddress", fromAddress)}
        errorMessage={errors.fromAddress?.errorMessage}
        hasError={errors.fromAddress?.hasError}
        {...getOverrideProps(overrides, "fromAddress")}
      ></TextField>
      <TextField
        label="To address"
        isRequired={true}
        isReadOnly={false}
        value={toAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              whatToTransport,
              fromAddress,
              toAddress: value,
              dateAndTime,
              transportType,
              numLoaders,
              description,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.toAddress ?? value;
          }
          if (errors.toAddress?.hasError) {
            runValidationTasks("toAddress", value);
          }
          setToAddress(value);
        }}
        onBlur={() => runValidationTasks("toAddress", toAddress)}
        errorMessage={errors.toAddress?.errorMessage}
        hasError={errors.toAddress?.hasError}
        {...getOverrideProps(overrides, "toAddress")}
      ></TextField>
      <TextField
        label="Date and time"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={dateAndTime && convertToLocal(new Date(dateAndTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              whatToTransport,
              fromAddress,
              toAddress,
              dateAndTime: value,
              transportType,
              numLoaders,
              description,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.dateAndTime ?? value;
          }
          if (errors.dateAndTime?.hasError) {
            runValidationTasks("dateAndTime", value);
          }
          setDateAndTime(value);
        }}
        onBlur={() => runValidationTasks("dateAndTime", dateAndTime)}
        errorMessage={errors.dateAndTime?.errorMessage}
        hasError={errors.dateAndTime?.hasError}
        {...getOverrideProps(overrides, "dateAndTime")}
      ></TextField>
      <TextField
        label="Transport type"
        isRequired={true}
        isReadOnly={false}
        value={transportType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              whatToTransport,
              fromAddress,
              toAddress,
              dateAndTime,
              transportType: value,
              numLoaders,
              description,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.transportType ?? value;
          }
          if (errors.transportType?.hasError) {
            runValidationTasks("transportType", value);
          }
          setTransportType(value);
        }}
        onBlur={() => runValidationTasks("transportType", transportType)}
        errorMessage={errors.transportType?.errorMessage}
        hasError={errors.transportType?.hasError}
        {...getOverrideProps(overrides, "transportType")}
      ></TextField>
      <TextField
        label="Num loaders"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numLoaders}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              whatToTransport,
              fromAddress,
              toAddress,
              dateAndTime,
              transportType,
              numLoaders: value,
              description,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.numLoaders ?? value;
          }
          if (errors.numLoaders?.hasError) {
            runValidationTasks("numLoaders", value);
          }
          setNumLoaders(value);
        }}
        onBlur={() => runValidationTasks("numLoaders", numLoaders)}
        errorMessage={errors.numLoaders?.errorMessage}
        hasError={errors.numLoaders?.hasError}
        {...getOverrideProps(overrides, "numLoaders")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              whatToTransport,
              fromAddress,
              toAddress,
              dateAndTime,
              transportType,
              numLoaders,
              description: value,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        value={userID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              whatToTransport,
              fromAddress,
              toAddress,
              dateAndTime,
              transportType,
              numLoaders,
              description,
              userID: value,
            };
            const result = onChange(modelFields);
            value = result?.userID ?? value;
          }
          if (errors.userID?.hasError) {
            runValidationTasks("userID", value);
          }
          setUserID(value);
        }}
        onBlur={() => runValidationTasks("userID", userID)}
        errorMessage={errors.userID?.errorMessage}
        hasError={errors.userID?.hasError}
        {...getOverrideProps(overrides, "userID")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || orderModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || orderModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
