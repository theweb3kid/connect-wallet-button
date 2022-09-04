import React from "react";
import { storiesOf } from '@storybook/react'

import { Button } from "../src/components/Button/Button";

const stories = storiesOf('App Test', module)

stories.add('App', () => {
    return (<Button />)
})