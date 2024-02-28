"use client";

import {
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	Button,
	useDisclosure,
} from "@chakra-ui/react";

import React from "react";

import "./styles.scss";

export default function Login() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button colorScheme="blue" onClick={onOpen}>
				Open
			</Button>

			<div className="draw">
				<Drawer placement="left" onClose={onClose} isOpen={isOpen}>
					<DrawerOverlay />
					<DrawerContent>
						<DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
						<DrawerBody>
							<p>Some contents...</p>
							<p>Some contents...</p>
							<p>Some contents...</p>
						</DrawerBody>
					</DrawerContent>
				</Drawer>
			</div>
		</>
	);
}
