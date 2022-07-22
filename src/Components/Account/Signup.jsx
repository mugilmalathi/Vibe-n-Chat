import React from "react";
import { Link } from "react-router-dom";
// import axios from 'axios';
// import { useState } from "react";
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

const Signup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>

      <div>
        <Button
          onClick={onOpen}
          // onClickCapture={handleSubmitter}
        >
          Signup
        </Button>
        {/* <Button ml={4} ref={finalRef}>
        Hospital
      </Button> */}

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Get started with VibenChat</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Enter your name"
                  id="id"
                  type="number"
                  // onChange={}
                  // value={formData.id}
                />
              </FormControl>
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
              <FormControl>
                <FormLabel style={{ paddingTop: "18px" }}>
                  Confirm Password
                </FormLabel>
                <Input
                  ref={initialRef}
                  id="specialization"
                  type="text"
                  placeholder="Enter your Password again"
                  // onChange={}
                  // value={formData.specialization}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Link to={'/signin'}><Button colorScheme="blue" ml={5}>
                Sign Up
              </Button></Link>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default Signup;
