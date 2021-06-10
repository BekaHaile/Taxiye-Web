import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import styled from 'styled-components';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const Container = styled("div")`
justify-content:center;
`;

const CloseModal = styled("span")`
    width:24px;
    height:24px;
    text-align: center;
    right: 0px;
    font-size: 24px;
    font-weight: bold;
    && {
        :focus {
            color: #000;
            text-decoration: none;
            cursor: pointer;  
        }
        :hover {
            color: #000;
            text-decoration: none;
            cursor: pointer;  
        }
`;
const CloseModalContainer = styled("div")`

    text-align:end;
    padding-right:10px;
`;

export default function Modal(props) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container>

            <Dialog
                fullScreen={fullScreen}
                open={props.show}
                onClose={() => props.onClose()}
                aria-labelledby="responsive-dialog-title"
            >
                <CloseModalContainer>
                    <CloseModal onClick={() => props.onClose()} color="primary">
                        &times;
          </CloseModal>
                </CloseModalContainer>
                <DialogContent>
                    {props.children}

                </DialogContent>
                <DialogActions>


                </DialogActions>
            </Dialog>
        </Container>
    );
}
