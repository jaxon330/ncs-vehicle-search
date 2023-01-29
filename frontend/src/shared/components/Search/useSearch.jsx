import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "antd";
import axios from "axios";
import handleRequestError from "../../utils/handleError";

const useSearch = ({ setVehicleInfo, setVehicleImage, setVehicleVideo }) => {
  const [form] = Form.useForm();
  const [initialValue] = useState({
    vinNumber: null,
  });

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const data = form.getFieldsValue();
    if (data.vinNumber) {
      const detailsUrl = `http://localhost:5000/${data.vinNumber}`;

      try {
        let details = await axios.get(detailsUrl);
        setVehicleInfo(details);

        if (details?.data.Results[0]?.ErrorCode !== "0") {
          handleRequestError(
            details?.data.Results[0]?.ErrorText,
            details?.data.Results[0]?.ErrorCode
          );
        } else {
          const {Make, Model, ModelYear} = details?.data.Results[0];
          const imagesUrl = `http://localhost:5000/images/${data.vinNumber}+${ModelYear}+${Make}+${Model}`;
          const videosUrl = `http://localhost:5000/videos/${data.vinNumber}+${ModelYear}+${Make}+${Model}`;
          let images = await axios.get(imagesUrl);
          let videos = await axios.get(videosUrl);
          setVehicleImage(images.data);
          setVehicleVideo(videos.data);
          navigate("/details");
        }
        
      } catch (error) {
        console.log(error, "error fetching search data");
      }
    }
  };

  const onFinish = async () => {
    form
      .validateFields()
      .then(() => {
        handleSubmit()
      })
      .catch((err) => {
        console.log("validation error", err);
      });
  };

  return {
    initialValue,
    form,
    onFinish
  };
}

export default useSearch;