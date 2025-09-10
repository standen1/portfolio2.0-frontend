import React from "react";

export interface ButtonProps {
    children: React.ReactNode;
    onClick: any;
    isActive?: boolean;
}