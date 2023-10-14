import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset, incrementByAmount, decrementByAmount } from '../reduxprocess/counterSlice';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import './css/Counter.css'
const Counter = () => {
    const [incrementAmount, setIncrementAmount] = useState(0);
    const [decrementAmount, setDecrementAmount] = useState(0);
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const addValue = Number(incrementAmount) || 0;
    const subValue = Number(decrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        setDecrementAmount(0);
        dispatch(reset());
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', marginTop: '50px' }} id='#counter'>
            <Typography variant="h4">
                <div className='cnt-style'>
                    {count}
                </div>
            </Typography>
            <Box>
                <div className='btn-in'>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => dispatch(increment())}
                    >
                        Increment
                    </Button>
                </div><br></br><br></br>
                <div className='btn-de'>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => dispatch(decrement())}
                    >
                        Decrement
                    </Button>
                </div>
            </Box><br></br><br></br>
            <Box>
                <Typography variant="subtitle1">Increment Amount:</Typography>
                <TextField
                    type="number"
                    variant="outlined"
                    size="small"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <Typography variant="subtitle1">Decrement Amount:</Typography>
                <TextField
                    type="number"
                    variant="outlined"
                    size="small"
                    value={decrementAmount}
                    onChange={(e) => setDecrementAmount(e.target.value)}
                />
            </Box><br></br><br></br>
            <Box>
                <div className='btn-add'>
                    <Button

                        variant="contained"
                        onClick={() => dispatch(incrementByAmount(addValue))}
                    >
                        Add Number
                    </Button>
                </div><br></br><br></br>
                <div className='btn-reset'>
                    <Button
                        variant="contained"
                        onClick={resetAll}
                    >
                        Reset All
                    </Button>
                </div><br></br><br></br>
                <div className='btn-reduce'>
                    <Button
                        variant="contained"
                        onClick={() => dispatch(decrementByAmount(subValue))}
                    >
                        Reduce Amount
                    </Button>
                </div>
            </Box>
        </div>
    );
};

export default Counter;

