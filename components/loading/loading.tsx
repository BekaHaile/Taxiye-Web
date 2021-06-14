import React from "react";
import styled from "styled-components";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const LoadingView = styled("div")`
    display: block;
    position: fixed; 
    z-index: 1000;
    width: 100%;
    height: 100%;
    overflow: auto;
    position:absolute;
    background: rgba(255,255,255,0.3);
`;

const LoadingContent = styled("div")`
    position:absolute;
    display: block;
    left:50%;
    top:50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border-radius:5px;
    background-color: rgba(255,255,255,0.1);
`;

const MainLoader = styled("div")`
border: 5px solid #f3f3f3;
border-radius: 50%;
border-top: 5px solid #A02167;
width: 20px;
height: 20px;
-webkit-animation: spin 0.5s linear infinite; /* Safari */
animation: spin 0.7s linear infinite;
`;
const Loader = styled("div")`
border: 5px solid #f3f3f3;
border-radius: 50%;
border-top: 5px solid #A02167;
width: 10px;
height: 10px;
-webkit-animation: spin 0.5s linear infinite; /* Safari */
animation: spin 0.7s linear infinite;
margin: auto;
`;
const Container = styled("div")`
justify-content:center;
`;

const Loading = () => {
    return (
        <>
            <LoadingView>
                <LoadingContent >
                    <MainLoader />

                </LoadingContent>
            </LoadingView>
        </>
    );
};


function PrimaryLoading(props) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <Container>

            <Dialog
                fullScreen={fullScreen}
                open={true}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogContent>
                <MainLoader />

                </DialogContent>
                <DialogActions>


                </DialogActions>
            </Dialog>
        </Container>
    );
}
export {Loading, Loader, PrimaryLoading};
