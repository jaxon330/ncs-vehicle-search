import { Modal } from "antd";

const handleRequestError = (errorTitle, ErrorCode) => {
    Modal.error({
      title: `Error Code ${ErrorCode}`,
      content: errorTitle,
      centered: true
    });
};

export default handleRequestError;