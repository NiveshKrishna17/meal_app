import { ShoppingCartOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

const CardComponent = ({ data }) => {
  const navigate = useNavigate();
  const handleDetails = (data) => {
    navigate("/details", { state: data });
  };
  return (
    <Fragment>
      <Card
        style={{ width: 300 }}
        cover={<img alt="example" src={data?.strCategoryThumb} />}
        actions={[<ShoppingCartOutlined onClick={() => handleDetails(data)} />]}
      >
        <Meta title={data?.strCategory} />
      </Card>
    </Fragment>
  );
};

export default CardComponent;
