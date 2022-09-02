import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const RouterPush = () => {
  const title = useRef("");
  const id = useRef(0);

  const router = useRouter();
  const onClick = (id, title) => {
    router.push(
      {
        pathname: `/components/dynamic/${id}`,
        query: {
          title,
        },
      },
      `/components/dynamic/${id}` // masking URL
    );
  };

  return (
    <div>
      <Form.Label htmlFor="basic-url">Try useRouter</Form.Label>

      <InputGroup className="mb-3">
        <InputGroup.Text>ID</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" ref={id} />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">TITLE</InputGroup.Text>
        <Form.Control
          id="basic-url"
          aria-describedby="basic-addon3"
          ref={title}
        />
      </InputGroup>
      <Button
        variant="secondary"
        onClick={() => onClick(id.current.value, title.current.value)}
      >
        Router Push
      </Button>
      <Link href={`/components/dynamic/123/asd`}>Link</Link>
    </div>
  );
};

export default RouterPush;
