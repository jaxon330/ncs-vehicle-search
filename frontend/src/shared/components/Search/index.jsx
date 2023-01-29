import React from "react";
import { Form } from "antd";
import { InputStyled, Container, ButtonStyled, Title } from "./styles";
import useSearch from "./useSearch";

const Search = ({ setVehicleInfo, setVehicleImage, setVehicleVideo }) => {
  const { initialValue, form, onFinish } = useSearch({ setVehicleInfo, setVehicleImage, setVehicleVideo });

  return (
    <Container>
      <Title>Vehicle Search</Title>
      <Form
        layout="vertical"
        name="search_vehicle"
        form={form}
        initialValues={initialValue}
      >
        <Form.Item
          name="vinNumber"
          rules={[
            {
              required: true,
              max: 255,
              min: 1,
              message: "Vin-number is required",
            },
          ]}
        >
          <InputStyled
            placeholder="Enter vin number"
            minLength={1}
            maxLength={255}
            required
          />
        </Form.Item>
        <ButtonStyled type="primary" onClick={onFinish}>
          Search
        </ButtonStyled>
      </Form>
    </Container>
  );
};

export default Search;
