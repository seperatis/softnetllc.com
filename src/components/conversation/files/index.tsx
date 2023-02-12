import React, { FC } from "react";
import { H2 } from "@components/shared/heading";
import Label from "@components/shared/input/label";
import { Button, Stack, TextField } from "@mui/material";
import BootstrapTooltip from "@components/shared/tooltip";
import { Help, UploadFileOutlined } from "@mui/icons-material";

const ConversationFiles: FC = () => {
    return (
        <div>
            <H2>
                If you have files, please share here
                <BootstrapTooltip
                    title={
                        <>
                            <h3>
                                Why we need your name?
                            </h3>
                            <p>
                                We need your name because we will need to register your name.
                                Please let us know your name by write your full name.
                            </p>
                        </>
                    }
                    placement="top">
                    <Help/>
                </BootstrapTooltip>
            </H2>
            <Label htmlFor="email">Your Files</Label>
            <div>
                <Button variant="contained" component="label">
                    <UploadFileOutlined style={{ fontSize: 18, marginRight: 4 }}/>
                    Upload Files
                    <input hidden accept="image/*" multiple type="file" />
                </Button>
            </div>
            <Stack
                justifyContent="space-between"
                spacing={2}
                direction="row"
                alignItems="center"
                style={{ marginTop: 24 }}>
                <Stack
                    spacing={2}
                    direction="row"
                    alignItems="center">
                    <Button
                        disabled
                        size="large"
                        color="secondary"
                        variant="contained">
                        Okay
                    </Button>
                    <div>
                        press <b>Enter</b> ↵
                    </div>
                </Stack>
                <Button
                    style={{ marginLeft: 32 }}
                    size="large"
                    color="secondary"
                    variant="text">
                    Skip this
                </Button>
            </Stack>
        </div>
    );
};

export default ConversationFiles;
