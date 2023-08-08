import React from "react";
import { Row, Col, Divider, Button, Dropdown, message, Popconfirm } from "antd";
import "../static/card.css";
import { DownOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const Title = () => {
  return (
    <div className="title">
      <Row>
        <Col xl={6} lg={6} md={6} sm={6} xs={24}>
          <p>Sender</p>
        </Col>
        <Col xl={6} lg={6} md={6} sm={6} xs={24}>
          <p>Receiver</p>
        </Col>{" "}
        <Col xl={4} lg={4} md={4} sm={4} xs={24}>
          Amount
        </Col>{" "}
        <Col xl={4} lg={4} md={4} sm={4} xs={24}>
          Bank Detail
        </Col>
        <Col xl={4} lg={4} md={4} sm={4} xs={24} className="order-right-row">
          Other info
        </Col>
      </Row>
      <Divider style={{ borderColor: "#d8d8d8" }} />
    </div>
  );
};
const Card = () => {
  const confirm = (e) => {
    console.log(e);
    message.success("Click on Yes");
  };

  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  const items = [
    {
      label: "Abdi",
      key: "0",
    },
    {
      label: "Abdulfeta",
      key: "1",
    },
  ];
  return (
    <>
      <Row className="order-card-row-1">
        <Col xl={6} lg={6} md={6} sm={6} xs={24}>
          <p className="name">Kidus Yoseph Wondimeagegnhu</p>
        </Col>
        <Col xl={6} lg={6} md={6} sm={6} xs={24}>
          <p className="name">Abdulfeta Dedgeba Yusuf</p>
        </Col>{" "}
        <Col xl={4} lg={4} md={4} sm={4} xs={24}>
          <span className="order-amount"> 10,000,000 </span>BR
        </Col>{" "}
        <Col xl={5} lg={5} md={5} sm={5} xs={24}>
          <div class="bank-lead bank-lead-d"></div>
          <span className="order-bank"> Commercial Bank of Ethiopia </span>
        </Col>{" "}
        <Col xl={3} lg={3} md={3} sm={3} xs={24} className="order-right-row">
          {/* <span className="fee">125.00$ Fee</span> */}
          <div class="order-fee">125.00$ Fee</div>
        </Col>
      </Row>
      <Row className="order-card-row-2">
        <Col xl={6} lg={6} md={6} sm={6} xs={24}>
          <p className="order-phone">2029103383</p>
        </Col>
        <Col xl={6} lg={6} md={6} sm={6} xs={24}>
          <p className="order-phone">0991439581</p>
        </Col>
        <Col xl={4} lg={4} md={4} sm={4} xs={24}>
          <p></p>
        </Col>
        <Col xl={5} lg={5} md={5} sm={5} xs={24}>
        <div class="bank-lead bank-lead-d"></div>
          <span className="order-bank"> 100023425689</span>
        </Col>
        <Col xl={3} lg={3} md={3} sm={3} xs={24} className="order-right-row">
          <div class="order-total">60,000$ Total</div>
        </Col>
      </Row>
      <Row className="order-card-row-3" justify="start">
        <Col xl={12} lg={12} md={12} sm={12} xs={24}>
          <Dropdown
            menu={{
              items,
            }}
          >
            <Button
              type="button"
              className="order-button order-button-dropdown"
              onClick={(e) => e.preventDefault()}
            >
              Choose Manager
              <DownOutlined />
            </Button>
          </Dropdown>
          <Button
            icon={<EditOutlined />}
            data-bn-type="button"
            type="button"
            className="order-button order-button-edit"
          >
            Edit
          </Button>

          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button
              icon={<DeleteOutlined />}
              data-bn-type="button"
              type="button"
              className="order-button order-button-delete"
            >
              Delete
            </Button>{" "}
          </Popconfirm>
        </Col>
        <Col className="order-date-col" xl={12} lg={12} md={12} sm={12} xs={24}>
          <div className="order-date">Jul 23, 2021</div>
        </Col>
      </Row>
      <Divider className="divider" />
    </>
  );
};
const Collapsable = (props) => {
  const rows = [];
  for (let i = 0; i < 35; i++) {
    rows.push(Card());
  }
  return (
    <>
      <Title />
      <div className="card">{rows.map((item) => item)}</div>
    </>
  );
};

export default Collapsable;
