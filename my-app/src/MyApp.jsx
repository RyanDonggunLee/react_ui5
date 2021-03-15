import React from "react";
import { Card, Text } from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";

export function MyApp() {
    const handleHeaderClick = () => {
        alert("Header clicked");
    }
    return ( 
        <div>
            <Card heading="Card" style={{width: "300px"}} headerInteractive onHeaderClick={handleHeaderClick}>
                <Text style={spacing.sapUiContentPadding}>
                    This is the content area of the Card
                </Text>
            </Card>
        </div>
    );
}