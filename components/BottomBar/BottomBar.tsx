'use client'

import { BottomSheet, BottomSheetRef } from "react-spring-bottom-sheet";
import React, { useRef, useState } from "react";
import { Divider } from "../Divider";
import "./BottomBar.scss";
// import "react-spring-bottom-sheet/dist/style.css";

interface BottomBarProps {
	containerClassName?: string;
	children: React.ReactNode;
}

export function BottomBar(props: BottomBarProps) {
	const { containerClassName, children } = props;
	const sheetRef = useRef<BottomSheetRef>(null);

	function onDismiss() {
		sheetRef?.current?.snapTo(({ minHeight }) => minHeight)
	}

	const ModifiedChild = ({ child }: any) => {
		// Pass any props you want to the children here
		// For example, you can pass a prop named "customProp" with a value of "customValue"
		return React.cloneElement(child, { onClick: onDismiss });
	};

	const modifiedChildren = React.Children.map(children, (child) => {
		return <ModifiedChild child={child} />;
	});

	return (
		<BottomSheet
			snapPoints={({ minHeight, maxHeight }) => [80, minHeight]}
			open={true}
			onDismiss={onDismiss}
			ref={sheetRef}
			blocking={false}
			className="mobile-only"
			header={
				<Divider type="vertical" />
			}
		>
			<div>{modifiedChildren}</div>
		</BottomSheet>
	);
}
