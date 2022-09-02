import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const RouterPush = () => {
  const title = useRef("");
  const id = useRef(0);

  const router = useRouter();
  const onClick = (title, id) => {
    router.push(
      {
        pathname: `/components/dynamic/${title}`,
        query: {
          id: id,
        },
      },
      `/components/dynamic/${title}`
    );
  };

  return (
    <div>
      <Form.Label htmlFor="basic-url">Try useRouter</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">TITLE</InputGroup.Text>
        <Form.Control
          id="basic-url"
          aria-describedby="basic-addon3"
          ref={title}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>ID</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" ref={id} />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>
      <Button
        variant="secondary"
        onClick={() => onClick(title.current.value, id.current.value)}
      >
        Router Push
      </Button>
    </div>
  );
};

export default RouterPush;
