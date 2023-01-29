import React from "react";
import { Button, Table, Typography, Image } from "antd";
import { useNavigate } from "react-router-dom";
import { Container, ButtonStyled } from "./styles";

const VehicleDetails = ({ vehicleInfo, vehicleImage, vehicleVideo, setVehicleInfo, setVehicleImage, setVehicleVideo }) => {
  const {
    Make,
    Model,
    BodyClass,
    ElectrificationLevel,
    ModelYear,
    VIN,
    VehicleType,
    EngineCylinders,
    DisplacementL,
    FuelTypePrimary,
    FuelTypeSecondary,
    ErrorCode,
  } = vehicleInfo?.data.Results[0];

  const images = vehicleImage.slice(0, 3)


  const navigate = useNavigate();

  const dataSource = [
    {
      key: '1',
      name: 'Brand',
      detail: Make,
    },
    {
      key: '2',
      name: 'Model',
      detail: Model,

    },
    {
      key: '3',
      name: 'Year',
      detail: ModelYear,
    },
    {
      key: '4',
      name: 'Body Style',
      detail: BodyClass,

    },
    {
      key: '5',
      name: 'Engine',
      detail: `${DisplacementL}L ${EngineCylinders}`,

    },
    {
      key: '6',
      name: 'Cylinders',
      detail: EngineCylinders,
    },
    {
      key: '7',
      name: 'Vehicle Type',
      detail: VehicleType,

    },
    {
      key: '8',
      name: 'Fuel Type',
      detail: FuelTypeSecondary !== '' ? `${FuelTypePrimary} and ${FuelTypeSecondary}` : FuelTypePrimary ,
    },
    {
      key: '9',
      name: ElectrificationLevel !== '' && 'ElectrificationLevel',
      detail: ElectrificationLevel !== '' && ElectrificationLevel,
    }
  ];

  const columns = [

    {
      title: 'Vehicle Details',
      dataIndex: 'name',
      key: 'name',
      render: (name) => (
        <Typography.Text style={{ fontSize: "1rem" }}>
          {name}
        </Typography.Text>
      ),
    },
    {
      title: '',
      dataIndex: 'detail',
      key: 'detail',
      render: (detail) => (
        <Typography.Text style={{ fontSize: "1rem", color: "#777" }}>
          {detail}
        </Typography.Text>
      )
    },
  ];

  return (
    <Container>
      <ButtonStyled
        type="primary"
        onClick={() => {
          navigate("/");
          setVehicleInfo(null);
          setVehicleImage(null);
          setVehicleVideo(null);
        }}
      >
        Back to search
      </ButtonStyled>
  
      {ErrorCode === "0" && (
        <div>
          <h2>
            {Make} {Model} {ModelYear} - VIN: {VIN}
          </h2>
          <Table dataSource={dataSource} columns={columns} />
        </div>
      )}
      {vehicleImage.lenth !== 0 && images.map((image, i) => (
        <Image.PreviewGroup>
          <Image 
            width={280}
            src={image.url}
            key={i}
          />
        </Image.PreviewGroup>
      ))}

    </Container>
  );
};

export default VehicleDetails;
