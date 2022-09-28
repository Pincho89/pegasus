import React, { useState } from 'react';
import { Switch } from 'react-native';

interface Props {
    isOn: boolean;
    onChange: (value: boolean) => void;
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {

    const [isEnabled, setIsEnabled] = useState(isOn);

    const toggleSwitch = () => {
        setIsEnabled( !isEnabled );
        onChange( !isEnabled );
    };

    return (
        <Switch 
            trackColor={{ false: "#767577", true: "#36B37E" }}
            thumbColor={isOn ? "#36B37E" : "#DB2843"}
            onValueChange={ toggleSwitch }
            value={ isEnabled }
            style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}
        />
    )
}