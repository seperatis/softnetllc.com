import React, { FC } from "react";
import { H2 } from "@components/shared/heading";
import Label from "@components/shared/input/label";
import { Button, Stack, TextField } from "@mui/material";
import BootstrapTooltip from "@components/shared/tooltip";
import { Help } from "@mui/icons-material";
import { nextEvent, updateFieldEvent } from "@store/converstaion/events";
import { useStore } from "effector-react";
import { $conversation } from "@store/converstaion/state";

const ConversationEmail: FC = () => {
    const cvs = useStore($conversation);

    return (
        <div>
            <H2>
                What is your Email
                <BootstrapTooltip
                    title={
                        <>
                            <h3>
                                Why do we need your email?
                            </h3>
                            <p>
                                Communication is the key to success.<br/>
                                So, we must be able to contact you.
                            </p>
                        </>
                    }
                    placement="top">
                    <Help/>
                </BootstrapTooltip>
            </H2>
            <Label htmlFor="email">Your Email*</Label>
            <TextField
                value={cvs?.data?.email}
                onChange={(e)=>{updateFieldEvent({ email: e.target.value })}}
                placeholder="Enter Your Email"
                name="email"
                id="email"
                fullWidth/>
            <Stack
                spacing={2}
                direction="row"
                alignItems="center"
                style={{ marginTop: 24 }}>
                <Button
                    onClick={()=>{nextEvent("phone")}}
                    disabled={!cvs?.data?.email}
                    size="large"
                    color="secondary"
                    variant="contained">
                    Okay
                </Button>
                <div>
                    press <b>Enter</b> ↵
                </div>
            </Stack>
        </div>
    );
};

export default ConversationEmail;
