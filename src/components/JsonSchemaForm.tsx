import { useState } from "react";
import styled from "styled-components";
import {
  SchemaDescription,
  UIJsonSchema,
  UISchemaData
} from "types/proposal-schema";
import { noOp } from "utils";
import { CheckboxInput, Form, Input, Label } from "./Forms/Form";

const FieldLabel = styled(Label)<{ type: SchemaDescription["type"] }>`
  align-items: ${({ type }) => (type === "boolean" ? "center" : "flex-start")};
  margin-bottom: 1rem;

  ${Input} {
    width: 100%;
  }
`;

type Props = {
  onChange?: (d: any) => any;
  schema: UIJsonSchema;
  values: UISchemaData;
};

export default function JsonSchemaForm(props: Props) {
  const { schema, onChange = noOp, values } = props;
  const { properties } = schema;
  type SchemaState = Record<keyof typeof properties, string | boolean>;
  const fields = Object.entries(properties);
  const [data, setData] = useState<SchemaState>();
  const updateField = (k: string, d: any) => {
    const next = pruneSchema({ ...data, [k]: d }, properties);
    setData(next);
    onChange(next);
  };

  return (
    <Form>
      {fields.map(([key, field], i) => (
        <FieldLabel
          key={i}
          type={field.type}
          direction={field.type === "boolean" ? "row" : "column"}
        >
          <span className="label">{field.title}</span>
          {field.type === "boolean" ? (
            <CheckboxInput
              onChange={({ target: $e }) => updateField(key, $e.checked)}
              checked={values?.[key as keyof typeof values] || false}
            />
          ) : (
            <Input
              placeholder={field.title}
              onChange={({ target: $e }) => updateField(key, $e.value)}
              value={values?.[key as keyof typeof values] || ''}
            />
          )}
        </FieldLabel>
      ))}
    </Form>
  );
}

function pruneSchema<P extends UIJsonSchema["properties"]>(
  state: { [x: string]: any },
  properties: P
) {
  return Object.keys(properties).reduce(
    (agg, c) => ({ ...agg, [c]: state[c] }),
    {} as Record<keyof P, string | boolean>
  );
}
