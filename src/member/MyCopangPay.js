import React, { useState, useEffect, useRef } from 'react';
import './css/MyCopangPay.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export const MyCopangPay = () => {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('body');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div>
            <div className="copay-title-wrap">
                <div><h1>결제수단, 쿠페이 관리</h1></div>
                <div className="copay-history">
                    <button className="copay-history-btn btn" onClick={handleClickOpen('body')}>쿠페이 사용내역</button>
                </div>
            </div>
            <div className="copay-admin">
                <div></div>
            </div>
            <div className="copay-benefit">
                <div className="copay-item">쿠페이 적립혜택</div>
                <div className="copay-item">적립 예정</div>
                <div className="copay-item">총 혜택</div>
            </div>
            <div className="copay-summary"></div>
            <div className="copay-admin"></div>

            
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title"><h2>사용내역</h2></DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        <h3>사용내역이 없습니다.</h3>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}