import React from "react";
// import './Account.scss';
import { Link } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  Button,
  Input,
  FormLabel,
} from "@chakra-ui/react";

const Signin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>

      <div>
        <Button onClick={onOpen}>Signin</Button>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Sign In and Vibe</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel style={{ paddingTop: "18px" }}>Mail-Id</FormLabel>
                <Input
                  ref={initialRef}
                  id="name"
                  type="text"
                  placeholder="Enter your Mail-Id"
                  // onChange={}
                  // value={formData.name}
                />
              </FormControl>
              <FormControl>
                <FormLabel style={{ paddingTop: "18px" }}>Password</FormLabel>
                <Input
                  ref={initialRef}
                  id="hospital"
                  type="text"
                  placeholder="Create Password"
                  // onChange={}
                  // value={formData.hospital}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" ml={5}>
                Sign In
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default Signin;
